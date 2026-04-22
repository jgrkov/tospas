import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Eye, Heart } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import aboutImg from "@/assets/about-fleet.jpg";

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    { icon: ShieldCheck, title: t("about.values.1.t"), desc: t("about.values.1.d") },
    { icon: Eye, title: t("about.values.2.t"), desc: t("about.values.2.d") },
    { icon: Heart, title: t("about.values.3.t"), desc: t("about.values.3.d") },
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-deep pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="absolute inset-0 opacity-40">
          <img src={aboutImg} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/30" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 animate-fade-up">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange">{t("about.eyebrow")}</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-6xl text-balance">{t("about.title")}</h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 leading-relaxed text-pretty">{t("about.intro")}</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">{t("about.story.title")}</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{t("about.story.body")}</p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <h3 className="font-display text-2xl font-bold text-navy">{t("about.mission.title")}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{t("about.mission.body")}</p>
            </div>
            <div className="rounded-2xl bg-hero-gradient p-7 shadow-elegant text-white">
              <h3 className="font-display text-2xl font-bold">{t("about.vision.title")}</h3>
              <p className="mt-3 text-base leading-relaxed text-white/80">{t("about.vision.body")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center font-display text-3xl font-bold text-navy sm:text-4xl">{t("about.values.title")}</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <div key={i} className="rounded-2xl border border-border bg-card p-8 shadow-card text-center">
                <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-xl bg-orange-gradient text-white shadow-glow">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3.5 text-sm font-semibold text-white shadow-card hover:bg-navy-deep transition-colors">
              {t("hero.cta_quote")} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
