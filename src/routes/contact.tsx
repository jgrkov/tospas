import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Tospas — Request a Quote in 2 Hours" },
      { name: "description", content: "Get in touch with Tospas. Tell us about your cargo and we'll respond within 2 hours. Skopje HQ, +389 2 200 0000, jordangrkov9@gmail.com." },
      { property: "og:title", content: "Contact Tospas" },
      { property: "og:description", content: "Let's plan your next shipment." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") as string) || "";
    const email = (fd.get("email") as string) || "";
    const phone = (fd.get("phone") as string) || "";
    const subject = (fd.get("subject") as string) || "Quote request from website";
    const message = (fd.get("message") as string) || "";

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:jordangrkov9@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <section className="relative bg-navy-deep pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-orange blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center animate-fade-up">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange">{t("contact.eyebrow")}</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-6xl text-balance">{t("contact.title")}</h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed text-pretty">{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-card">
                {submitted && (
                  <div className="mb-5 flex items-center gap-2 rounded-md border border-orange/30 bg-orange/10 p-3 text-sm text-navy">
                    <CheckCircle2 className="h-4 w-4 text-orange flex-shrink-0" />
                    {t("contact.form.success")}
                  </div>
                )}
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field name="name" label={t("contact.form.name")} required />
                  <Field name="email" type="email" label={t("contact.form.email")} required />
                  <Field name="phone" type="tel" label={t("contact.form.phone")} />
                  <Field name="subject" label={t("contact.form.subject")} />
                </div>
                <div className="mt-5">
                  <label className="block text-sm font-medium text-navy">{t("contact.form.message")}<span className="text-orange ml-0.5">*</span></label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    maxLength={2000}
                    className="mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange/50"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-orange-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-glow hover:opacity-95 transition-opacity"
                >
                  {t("contact.form.submit")} <Send className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Info */}
            <aside className="lg:col-span-2">
              <div className="rounded-2xl bg-hero-gradient p-7 text-white shadow-elegant">
                <h3 className="font-display text-xl font-bold">{t("contact.info.title")}</h3>
                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-orange flex-shrink-0 mt-0.5" />
                    <span className="text-white/90">{t("contact.info.address")}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-orange flex-shrink-0" />
                    <a href="tel:+38922000000" className="text-white/90 hover:text-orange transition-colors">+389 2 200 0000</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-orange flex-shrink-0" />
                    <a href="mailto:jordangrkov9@gmail.com" className="text-white/90 hover:text-orange transition-colors">jordangrkov9@gmail.com</a>
                  </li>
                </ul>
                <div className="mt-7 border-t border-white/15 pt-5 text-sm text-white/70">
                  {t("contact.info.hours")}
                </div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-card aspect-[4/3]">
                <iframe
                  title="Tospas location"
                  src="https://www.google.com/maps?q=Skopje%2C%20North%20Macedonia&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border-0 w-full h-full"
                />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-navy">
        {label}{required && <span className="text-orange ml-0.5">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={200}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-orange/50"
      />
    </div>
  );
}
