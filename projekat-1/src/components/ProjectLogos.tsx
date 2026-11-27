import { useLanguage } from "../i18n/LanguageContext";

export default function ProjectLogos() {
  const { t } = useLanguage();

  return (
    <aside className="project-credits" aria-label={t("credits.ariaLabel")}>
      <div className="project-credits-logos">
        <img
          src="/images/digital-public-fountains-logo.png"
          alt={t("credits.projectLogoAlt")}
          loading="lazy"
          className="project-logo"
        />
        <div className="foundation-credit">
          <p className="project-credits-label">{t("credits.supportedBy")}</p>
          <img
            src="/images/foundation-evz-logo.png"
            alt={t("credits.foundationLogoAlt")}
            loading="lazy"
            className="foundation-logo"
          />
        </div>
      </div>
    </aside>
  );
}
