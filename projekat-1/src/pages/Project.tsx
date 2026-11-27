import { useLanguage } from "../i18n/LanguageContext";
import ProjectLogos from "../components/ProjectLogos";

export default function Project() {
  const { t } = useLanguage();

  return (
    <main className="page-shell">
      <p className="project-eyebrow text-sm uppercase tracking-wider mb-3">
        {t("project.eyebrow")}
      </p>

      <h1 className="page-title">
        {t("project.title")}
      </h1>

      <div className="w-16 h-1 bg-[#168b79] rounded-full mt-6 mb-8" />

      <div className="project-copy max-w-3xl space-y-6 text-base sm:text-lg leading-7 sm:leading-8">
        <p>
          {t("project.p1")} {t("project.p1Source")}{" "}
          <a
            href="https://vodovodsm.rs/kvalitet-vode/javne-cesme"
            target="_blank"
            rel="noreferrer"
            className="text-[#087c71] underline underline-offset-2"
          >
            {t("project.p1SourceLink")}
          </a>
          .
        </p>
        <p>{t("project.p2")}</p>
        <p>{t("project.p3")}</p>
        <p>{t("project.p4")}</p>
        <p>{t("project.p5")}</p>
      </div>

      <ProjectLogos />
    </main>
  );
}