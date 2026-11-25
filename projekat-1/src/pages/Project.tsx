import { useLanguage } from "../i18n/LanguageContext";

export default function Project() {
  const { t } = useLanguage();

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
        {t("project.eyebrow")}
      </p>

      <h1 className="text-4xl font-bold text-gray-900">
        {t("project.title")}
      </h1>

      <div className="w-16 h-1 bg-blue-600 rounded-full mt-6 mb-8" />

      <div className="max-w-3xl space-y-6 text-lg leading-8 text-gray-700">
        <p>{t("project.p1")}</p>

        {/* Saradnja i finansiranje */}
        <p className="border-l-4 border-blue-600 pl-5 text-gray-600">
          {t("project.p2")}
        </p>
      </div>
    </main>
  );
}