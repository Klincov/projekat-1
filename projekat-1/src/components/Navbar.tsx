import { useState } from "react";
import { Menu, X } from "lucide-react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const renderLinks = (mobile = false) =>
    links.map((link) => (
      <NavLink
        key={link.path}
        to={link.path}
        end
        onClick={() => mobile && setMenuOpen(false)}
        className={({ isActive }) =>
          `${mobile ? "mobile-nav-link block px-3 py-2.5" : "nav-link"} text-sm font-medium transition-colors ${
            isActive ? "active" : ""
          }`
        }
      >
        {t(link.key)}
      </NavLink>
    ));

  const languageSwitcher = (
    <div
      role="group"
      aria-label={t("nav.language")}
      className="flex items-center rounded-full border border-[#d6e7df] bg-white/80 p-0.5 text-xs font-semibold"
    >
      {languages.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`min-w-10 rounded-full px-3 py-1.5 transition-colors ${
            lang === code
              ? "bg-[#168b79] text-white shadow-sm"
              : "text-[#607472] hover:text-[#087c71]"
          }`}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <nav className="site-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-16 lg:h-20 flex items-center justify-between gap-3">
        <NavLink to="/" className="brand-link min-w-0 text-lg sm:text-xl font-bold">
          {t("nav.brand")}
        </NavLink>

        <div className="hidden lg:flex items-center gap-5 lg:gap-8">
          {renderLinks()}
          {languageSwitcher}
        </div>

        <div className="flex lg:hidden items-center gap-2">
          {languageSwitcher}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center rounded-xl text-[#45625f] hover:bg-[#e8f4ee] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#168b79]"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-navigation" className="lg:hidden border-t border-[#e4eee9] px-4 py-2">
          <div className="mx-auto max-w-7xl flex flex-col gap-1">
            {renderLinks(true)}
          </div>
        </div>
      )}
    </nav>
  );
}
