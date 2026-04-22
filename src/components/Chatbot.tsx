import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Lang } from "@/i18n/translations";

type Msg = { role: "user" | "bot"; content: string; cta?: { type: "email" | "quote"; label: string } };

const COMPANY_EMAIL = "jordangrkov9@gmail.com";

// Multilingual keyword → answer lookup
const KB: Record<Lang, Array<{ keys: string[]; answer: string; cta?: { type: "email" | "quote"; label: string } }>> = {
  en: [
    { keys: ["service", "offer", "do you", "what do"], answer: "We offer International Transport, Logistics Solutions, Express Delivery and Custom (refrigerated, ADR, oversized) Transport across 27 European countries." },
    { keys: ["hour", "open", "working", "time"], answer: "Our office is open Mon–Fri 08:00–18:00 and Sat 09:00–14:00. Dispatch operates 24/7 for active shipments." },
    { keys: ["where", "country", "route", "operate", "cover", "destination"], answer: "We operate across 27 European countries — including Germany, Austria, Italy, Hungary, Slovenia, Croatia, Serbia, Bulgaria, Greece and the Balkans. Our HQ is in Skopje, North Macedonia." },
    { keys: ["quote", "price", "cost", "estimate", "rate"], answer: "I'd love to help with a quote! Click below and our team will reply within 2 hours.", cta: { type: "quote", label: "Request a quote" } },
    { keys: ["contact", "phone", "email", "call", "reach"], answer: `You can reach us at +389 2 200 0000 or ${COMPANY_EMAIL}. Want me to open an email for you?`, cta: { type: "email", label: "Email our team" } },
    { keys: ["truck", "fleet", "vehicle"], answer: "Our fleet includes Mercedes Actros tractor units, refrigerated trailers (-25°C to +25°C), curtain-side trailers and ADR-certified tankers. All Euro 6 and GPS-tracked." },
    { keys: ["track", "tracking", "gps"], answer: "Every shipment has real-time GPS tracking. Your account manager will share a tracking link as soon as your cargo is loaded." },
    { keys: ["insur", "cmr", "claim"], answer: "All shipments are covered by full CMR insurance. Customs clearance is handled in-house." },
    { keys: ["adr", "danger", "hazard"], answer: "Yes — we have ADR-certified drivers and tankers for hazardous materials transport." },
    { keys: ["refrig", "cold", "temp", "frozen"], answer: "Yes, our refrigerated fleet maintains -25°C to +25°C with continuous temperature logging." },
    { keys: ["hi", "hello", "hey", "help"], answer: "Hi! I can answer questions about our services, routes, working hours, fleet and pricing. What would you like to know?" },
    { keys: ["thank", "thanks", "thx"], answer: "You're welcome! Anything else I can help with?" },
  ],
  mk: [
    { keys: ["услуг", "нудите", "правите"], answer: "Нудиме меѓународен транспорт, логистички решенија, експресна испорака и специјален транспорт (ладилен, ADR, извонгабаритен) низ 27 европски земји." },
    { keys: ["работно", "време", "часов", "отворен"], answer: "Канцеларијата е отворена Пон–Пет 08:00–18:00 и Саб 09:00–14:00. Диспечерот работи 24/7." },
    { keys: ["каде", "земји", "рута", "работите"], answer: "Работиме во 27 европски земји — Германија, Австрија, Италија, Унгарија, Словенија, Хрватска, Србија, Бугарија, Грција и Балканот. Седиштето е во Скопје." },
    { keys: ["понуда", "цена", "колку"], answer: "Со задоволство ќе помогнам со понуда! Кликнете подолу и нашиот тим ќе одговори за 2 часа.", cta: { type: "quote", label: "Побарајте понуда" } },
    { keys: ["контакт", "телефон", "емаил", "е-пошта"], answer: `Достапни сме на +389 2 200 0000 или ${COMPANY_EMAIL}.`, cta: { type: "email", label: "Емаил" } },
    { keys: ["камион", "возен", "парк"], answer: "Возниот парк вклучува Mercedes Actros, ладилни приколки (-25°C до +25°C), церада приколки и ADR цистерни. Сите се Euro 6 и GPS следени." },
    { keys: ["здраво", "поздрав", "помош"], answer: "Здраво! Можам да одговорам за услуги, рути, работно време, возен парк и цени. Што Ве интересира?" },
  ],
  bg: [
    { keys: ["услуг", "предлагате", "правите"], answer: "Предлагаме международен транспорт, логистични решения, експресна доставка и специален транспорт (хладилен, ADR, извънгабаритен) в 27 европейски държави." },
    { keys: ["работно", "време", "часов", "отворен"], answer: "Офисът е отворен Пон–Пет 08:00–18:00 и Съб 09:00–14:00. Диспечерът работи 24/7." },
    { keys: ["къде", "държав", "маршрут", "работите"], answer: "Работим в 27 европейски държави — Германия, Австрия, Италия, Унгария, Словения, Хърватия, Сърбия, България, Гърция и Балканите." },
    { keys: ["оферта", "цена", "колко"], answer: "С удоволствие ще помогна с оферта! Кликнете по-долу и нашият екип ще отговори в рамките на 2 часа.", cta: { type: "quote", label: "Заявете оферта" } },
    { keys: ["контакт", "телефон", "имейл"], answer: `Свържете се на +389 2 200 0000 или ${COMPANY_EMAIL}.`, cta: { type: "email", label: "Имейл" } },
    { keys: ["камион", "автопарк"], answer: "Автопаркът включва Mercedes Actros, хладилни ремаркета (-25°C до +25°C), тентови ремаркета и ADR цистерни. Всички са Euro 6 и GPS-проследявани." },
    { keys: ["здравей", "здрасти", "помощ"], answer: "Здравейте! Мога да отговоря за услуги, маршрути, работно време, автопарк и цени." },
  ],
  sr: [
    { keys: ["uslug", "nudite", "radite"], answer: "Nudimo međunarodni transport, logistička rešenja, ekspresnu isporuku i specijalni transport (hladnjače, ADR, vangabaritni) u 27 evropskih zemalja." },
    { keys: ["radno", "vreme", "satov", "otvoren"], answer: "Kancelarija je otvorena Pon–Pet 08:00–18:00 i Sub 09:00–14:00. Dispečer radi 24/7." },
    { keys: ["gde", "zemlj", "ruta", "radite"], answer: "Radimo u 27 evropskih zemalja — Nemačka, Austrija, Italija, Mađarska, Slovenija, Hrvatska, Srbija, Bugarska, Grčka i Balkan." },
    { keys: ["ponuda", "cena", "koliko"], answer: "Rado ću pomoći sa ponudom! Kliknite ispod i naš tim će odgovoriti u roku od 2 sata.", cta: { type: "quote", label: "Zatražite ponudu" } },
    { keys: ["kontakt", "telefon", "email"], answer: `Dostupni smo na +389 2 200 0000 ili ${COMPANY_EMAIL}.`, cta: { type: "email", label: "Email" } },
    { keys: ["kamion", "vozni park"], answer: "Vozni park: Mercedes Actros, hladnjača prikolice (-25°C do +25°C), cerada prikolice i ADR cisterne. Sve Euro 6, GPS praćeno." },
    { keys: ["zdravo", "ćao", "pomoć"], answer: "Zdravo! Mogu da odgovorim o uslugama, rutama, radnom vremenu, voznom parku i cenama." },
  ],
  de: [
    { keys: ["leistung", "bieten", "service", "machen"], answer: "Wir bieten internationalen Transport, Logistiklösungen, Expresslieferung und Sondertransporte (Kühl, ADR, Übermaß) in 27 europäischen Ländern." },
    { keys: ["öffnung", "stunden", "uhrzeit", "zeit", "wann"], answer: "Unser Büro ist Mo–Fr 08:00–18:00 und Sa 09:00–14:00 geöffnet. Disposition rund um die Uhr für aktive Sendungen." },
    { keys: ["wo", "land", "route", "fahren", "operieren"], answer: "Wir sind in 27 europäischen Ländern aktiv — Deutschland, Österreich, Italien, Ungarn, Slowenien, Kroatien, Serbien, Bulgarien, Griechenland und dem Balkan. Hauptsitz: Skopje." },
    { keys: ["angebot", "preis", "kosten", "rate"], answer: "Gerne erstelle ich ein Angebot! Klicken Sie unten — unser Team antwortet innerhalb von 2 Stunden.", cta: { type: "quote", label: "Angebot anfordern" } },
    { keys: ["kontakt", "telefon", "email", "anruf"], answer: `Erreichbar unter +389 2 200 0000 oder ${COMPANY_EMAIL}.`, cta: { type: "email", label: "E-Mail an Team" } },
    { keys: ["lkw", "fuhrpark", "fahrzeug"], answer: "Unser Fuhrpark: Mercedes Actros Sattelzüge, Kühlauflieger (-25°C bis +25°C), Plane-Auflieger und ADR-Tanker. Alle Euro 6 und GPS-überwacht." },
    { keys: ["hallo", "hi", "hilfe"], answer: "Hallo! Ich beantworte Fragen zu Leistungen, Routen, Öffnungszeiten, Fuhrpark und Preisen." },
  ],
};

function findAnswer(input: string, lang: Lang): { answer: string; cta?: { type: "email" | "quote"; label: string } } | null {
  const lower = input.toLowerCase();
  const kb = KB[lang];
  for (const item of kb) {
    if (item.keys.some((k) => lower.includes(k))) {
      return { answer: item.answer, cta: item.cta };
    }
  }
  return null;
}

export function Chatbot() {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: "bot", content: t("chatbot.welcome") }]);
    }
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: "user", content: trimmed }]);
    setInput("");

    setTimeout(() => {
      const found = findAnswer(trimmed, lang);
      if (found) {
        setMessages((m) => [...m, { role: "bot", content: found.answer, cta: found.cta }]);
      } else {
        setMessages((m) => [
          ...m,
          { role: "bot", content: t("chatbot.fallback"), cta: { type: "email", label: t("chatbot.fallback_cta") } },
        ]);
      }
    }, 400);
  }

  function handleCta(cta: { type: "email" | "quote"; label: string }) {
    const lastUserMsg = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";
    const subject = encodeURIComponent(cta.type === "quote" ? "Quote request" : "Question from website");
    const body = encodeURIComponent(`Hi Tospas team,\n\n${lastUserMsg ? `My question: ${lastUserMsg}\n\n` : ""}Please get back to me.\n\nThank you.`);
    window.location.href = `mailto:${COMPANY_EMAIL}?subject=${subject}&body=${body}`;
  }

  const suggestions = [
    { key: "chatbot.suggest.services", text: t("chatbot.suggest.services") },
    { key: "chatbot.suggest.hours", text: t("chatbot.suggest.hours") },
    { key: "chatbot.suggest.routes", text: t("chatbot.suggest.routes") },
    { key: "chatbot.suggest.quote", text: t("chatbot.suggest.quote") },
  ];

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={t("chatbot.open")}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-orange-gradient text-white shadow-glow transition-transform hover:scale-110 sm:bottom-6 sm:right-6"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-4 z-50 flex w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-elegant animate-slide-in-right sm:right-6">
          <div className="bg-hero-gradient px-4 py-3.5 text-white">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-orange-gradient">
                <MessageCircle className="h-4 w-4 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-navy-deep" />
              </span>
              <div>
                <p className="text-sm font-semibold">{t("chatbot.title")}</p>
                <p className="text-xs text-white/70">{t("chatbot.subtitle")}</p>
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 max-h-96 min-h-72 overflow-y-auto bg-muted/30 px-4 py-4 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-navy text-white rounded-br-sm"
                    : "bg-background text-foreground border border-border rounded-bl-sm"
                }`}>
                  <p>{m.content}</p>
                  {m.cta && (
                    <button
                      onClick={() => handleCta(m.cta!)}
                      className="mt-2 inline-flex items-center gap-1.5 rounded-md bg-orange-gradient px-3 py-1.5 text-xs font-semibold text-white hover:opacity-90"
                    >
                      <Mail className="h-3 w-3" /> {m.cta.label}
                    </button>
                  )}
                </div>
              </div>
            ))}

            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {suggestions.map((s) => (
                  <button
                    key={s.key}
                    onClick={() => send(s.text)}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-navy hover:border-orange hover:text-orange transition-colors"
                  >
                    {s.text}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="flex items-center gap-2 border-t border-border bg-background p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("chatbot.placeholder")}
              className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange/50"
            />
            <button
              type="submit"
              aria-label={t("chatbot.send")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-orange-gradient text-white hover:opacity-90"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
