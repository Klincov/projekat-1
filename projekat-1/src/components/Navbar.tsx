import { NavLink } from "react-router-dom";

import { useLanguage } from "../i18n/LanguageContext";
import type { Language } from "../i18n/translations";

const links = [
  { key: "nav.home", path: "/" },
  { key: "nav.about", path: "/o-cesmama" },
  { key: "nav.gallery", path: "/galerija" },
  { key: "nav.workshops", path: "/radionice" },
  { key: "nav.project", path: "/o-projektu" },
];

const languages: Language[] = ["sr", "en"];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold text-gray-900">
          {t("nav.brand")}
        </NavLink>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`
              }
            >
              {t(link.key)}
            </NavLink>
          ))}

          {/* PREKIDAČ JEZIKA */}
          <div
            role="group"
            aria-label={t("nav.language")}
            className="flex items-center rounded-full border border-gray-200 p-0.5 text-xs font-semibold"
          >
            {languages.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={`px-3 py-1 rounded-full transition-colors ${
                  lang === code
                    ? "bg-blue-600 text-white"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
