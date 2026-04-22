import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import truck1 from "@/assets/truck-1.jpg";
import truck2 from "@/assets/truck-2.jpg";
import truck3 from "@/assets/truck-3.jpg";
import truck4 from "@/assets/truck-4.jpg";

export default function FleetPage() {
  const { t } = useLanguage();

  const trucks = [
    { img: truck1, name: t("fleet.truck1.name"), desc: t("fleet.truck1.desc") },
    { img: truck2, name: t("fleet.truck2.name"), desc: t("fleet.truck2.desc") },
    { img: truck3, name: t("fleet.truck3.name"), desc: t("fleet.truck3.desc") },
    { img: truck4, name: t("fleet.truck4.name"), desc: t("fleet.truck4.desc") },
  ];

  return (
    <>
      <section className="relative bg-navy-deep pt-32 pb-16 sm:pt-40 sm:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center animate-fade-up">
          <span className="text-sm font-semibold uppercase tracking-wider text-orange">{t("fleet.eyebrow")}</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-6xl text-balance">{t("fleet.title")}</h1>
          <p className="mt-6 text-lg text-white/80 leading-relaxed text-pretty">{t("fleet.subtitle")}</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {trucks.map((tr, i) => (
              <article key={i} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img src={tr.img} alt={tr.name} width={1200} height={900} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-deep/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl font-bold text-white">{tr.name}</h3>
                    <p className="mt-1 text-sm text-white/80">{tr.desc}</p>
                  </div>
                </div>
              </article>
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
