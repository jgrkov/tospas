import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Truck, Globe2, Zap, Settings, ShieldCheck, Clock, UserCheck, FileCheck, Quote, Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import heroImg from "@/assets/hero-truck.jpg";
import aboutImg from "@/assets/about-fleet.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tospas — International Transport You Can Trust" },
      { name: "description", content: "Fast, secure and reliable logistics across 27 European countries. Modern Euro 6 fleet, GPS tracking, dedicated account managers." },
      { property: "og:title", content: "Tospas — International Transport You Can Trust" },
      { property: "og:description", content: "Fast, secure and reliable logistics across Europe." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useLanguage();

  const services = [
    { icon: Globe2, title: t("services.intl.title"), desc: t("services.intl.desc") },
    { icon: Truck, title: t("services.logistics.title"), desc: t("services.logistics.desc") },
    { icon: Zap, title: t("services.express.title"), desc: t("services.express.desc") },
    { icon: Settings, title: t("services.custom.title"), desc: t("services.custom.desc") },
  ];

  const stats = [
    { value: "120+", label: t("stats.trucks") },
    { value: "15+", label: t("stats.years") },
    { value: "27", label: t("stats.countries") },
    { value: "12k+", label: t("stats.deliveries") },
  ];

  const why = [
    { icon: Clock, title: t("why.1.title"), desc: t("why.1.desc") },
    { icon: Truck, title: t("why.2.title"), desc: t("why.2.desc") },
    { icon: UserCheck, title: t("why.3.title"), desc: t("why.3.desc") },
    { icon: FileCheck, title: t("why.4.title"), desc: t("why.4.desc") },
  ];

  const testimonials = [
    { quote: t("testimonials.1.quote"), name: t("testimonials.1.name"), role: t("testimonials.1.role") },
    { quote: t("testimonials.2.quote"), name: t("testimonials.2.name"), role: t("testimonials.2.role") },
    { quote: t("testimonials.3.quote"), name: t("testimonials.3.name"), role: t("testimonials.3.role") },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy-deep">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Tospas semi-truck on European highway at sunset"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-overlay-gradient" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/90 via-navy-deep/40 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-4 sm:px-6 pt-32 pb-20">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange/30 bg-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-orange animate-pulse" />
              {t("hero.eyebrow")}
            </span>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-white text-balance sm:text-6xl lg:text-7xl">
              {t("hero.title")}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80 text-pretty leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-orange-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-glow hover:opacity-95 transition-opacity"
              >
                {t("hero.cta_quote")} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10 transition-colors"
              >
                {t("hero.cta_contact")}
              </Link>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative border-t border-white/10 bg-navy-deep/80 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 px-4 sm:px-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="bg-navy-deep px-4 py-6 text-center sm:py-8">
                <div className="font-display text-3xl font-bold text-orange sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-white/60 sm:text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-orange">{t("services.eyebrow")}</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy sm:text-5xl text-balance">{t("services.title")}</h2>
            <p className="mt-5 text-lg text-muted-foreground text-pretty">{t("services.subtitle")}</p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-orange/5 transition-transform group-hover:scale-125" />
                <div className="relative">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white shadow-card">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <Link
                    to="/services"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange hover:gap-2.5 transition-all"
                  >
                    {t("services.cta")} <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative">
              <img
                src={aboutImg}
                alt="Tospas truck convoy on mountain highway"
                width={1600}
                height={1000}
                loading="lazy"
                className="rounded-2xl shadow-elegant w-full"
              />
              <div className="absolute -bottom-6 -right-6 hidden md:flex h-32 w-32 flex-col items-center justify-center rounded-2xl bg-orange-gradient text-white shadow-glow">
                <span className="font-display text-3xl font-bold">98.6%</span>
                <span className="text-xs uppercase tracking-wider">on-time</span>
              </div>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl text-balance">{t("why.title")}</h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {why.map((w, i) => (
                  <div key={i} className="flex gap-4">
                    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-orange/10 text-orange">
                      <w.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-navy">{w.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold text-navy sm:text-5xl text-balance">{t("testimonials.title")}</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((tm, i) => (
              <figure
                key={i}
                className="relative rounded-2xl border border-border bg-card p-7 shadow-card"
              >
                <Quote className="h-7 w-7 text-orange/30" />
                <blockquote className="mt-3 text-base leading-relaxed text-foreground">"{tm.quote}"</blockquote>
                <div className="mt-5 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-orange text-orange" />
                  ))}
                </div>
                <figcaption className="mt-4 border-t border-border pt-4">
                  <div className="font-semibold text-navy">{tm.name}</div>
                  <div className="text-sm text-muted-foreground">{tm.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-hero-gradient py-20">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-orange blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <ShieldCheck className="mx-auto h-12 w-12 text-orange" />
          <h2 className="mt-5 font-display text-3xl font-bold text-white sm:text-5xl text-balance">{t("cta.title")}</h2>
          <p className="mt-4 text-lg text-white/80">{t("cta.subtitle")}</p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-orange-gradient px-7 py-4 text-base font-semibold text-white shadow-glow hover:opacity-95 transition-opacity"
          >
            {t("cta.button")} <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
