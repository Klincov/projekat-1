import { useLanguage } from "../i18n/LanguageContext";

export default function Project() {
  const { t } = useLanguage();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
        {t("project.eyebrow")}
      </p>

      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
        {t("project.title")}
      </h1>

      <div className="w-16 h-1 bg-blue-600 rounded-full mt-6 mb-8" />

      <div className="max-w-3xl space-y-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-700">
        <p>
          {t("project.p1")} {t("project.p1Source")}{" "}
          <a
            href="https://vodovodsm.rs/kvalitet-vode/javne-cesme"
            target="_blank"
            rel="noreferrer"
            className="text-blue-700 underline underline-offset-2"
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
    </main>
  );
}