import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Globe2, Truck, Zap, Settings, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import warehouseImg from "@/assets/services-warehouse.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — International Transport & Logistics | Tospas" },
      { name: "description", content: "International transport, logistics solutions, express delivery and custom transport services across 27 European countries." },
      { property: "og:title", content: "Tospas Services" },
      { property: "og:description", content: "End-to-end logistics, built for European trade." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe2,
      title: t("services.intl.title"),
      desc: t("services.intl.desc"),
      bullets: ["EU & Balkans coverage", "Full CMR documentation", "Real-time GPS tracking"],
    },
    {
      icon: Truck,
      title: t("services.logistics.title"),
      desc: t("services.logistics.desc"),
      bullets: ["Warehousing & distribution", "Cross-docking", "Inventory management"],
    },
    {
      icon: Zap,
      title: t("services.express.title"),
      desc: t("services.express.desc"),
      bullets: ["Dedicated vehicles", "24/7 dispatch", "Direct point-to-point"],
    },
    {
      icon: Settings,
      title: t("services.custom.title"),
      desc: t("services.custom.desc"),
      bullets: ["Refrigerated transport", "ADR hazardous materials", "Oversized cargo"],
    },
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-deep pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 opacity-30">
          <img src={warehouseImg} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 animate-fade-up">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange">{t("services.page.eyebrow")}</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-6xl text-balance">{t("services.page.title")}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed text-pretty">{t("services.page.subtitle")}</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((s, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:shadow-elegant">
                <div className="flex items-start gap-5">
                  <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-navy text-white shadow-card">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold text-navy">{s.title}</h3>
                    <p className="mt-2 text-base text-muted-foreground leading-relaxed">{s.desc}</p>
                    <ul className="mt-5 space-y-2">
                      {s.bullets.map((b, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle2 className="h-4 w-4 text-orange flex-shrink-0" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-orange-gradient px-7 py-4 text-base font-semibold text-white shadow-glow hover:opacity-95 transition-opacity"
            >
              {t("services.page.cta")} <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
