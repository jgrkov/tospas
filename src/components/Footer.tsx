import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { useLanguage } from "@/i18n/LanguageContext";
import { LANGUAGES } from "@/i18n/translations";

export function Footer() {
  const { t, setLang, lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-md bg-orange-gradient shadow-glow">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7h11l4 4h3v6h-3a2 2 0 1 1-4 0H10a2 2 0 1 1-4 0H3V7z" />
                </svg>
              </span>
              <span className="font-display text-2xl font-bold tracking-tight text-white">Tospas</span>
            </div>
            <p className="mt-4 text-sm text-white/70 max-w-xs">{t("footer.tagline")}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t("footer.company")}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li><Link to="/about" className="hover:text-orange transition-colors">{t("nav.about")}</Link></li>
              <li><Link to="/services" className="hover:text-orange transition-colors">{t("nav.services")}</Link></li>
              <li><Link to="/fleet" className="hover:text-orange transition-colors">{t("nav.fleet")}</Link></li>
              <li><Link to="/contact" className="hover:text-orange transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t("footer.contact")}</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5"><MapPin className="h-4 w-4 mt-0.5 text-orange flex-shrink-0" /><span>{t("contact.info.address")}</span></li>
              <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-orange flex-shrink-0" /><a href="tel:+38922000000" className="hover:text-orange transition-colors">+389 2 200 0000</a></li>
              <li className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-orange flex-shrink-0" /><a href="mailto:jordangrkov9@gmail.com" className="hover:text-orange transition-colors">jordangrkov9@gmail.com</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t("footer.languages")}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {LANGUAGES.map((l) => (
                <li key={l.code}>
                  <button
                    onClick={() => setLang(l.code)}
                    className={`flex items-center gap-2 hover:text-orange transition-colors ${lang === l.code ? "text-orange font-semibold" : ""}`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/50">
          <p>© {year} Tospas. {t("footer.rights")}</p>
          <p>{t("contact.info.hours")}</p>
        </div>
      </div>
    </footer>
  );
}
