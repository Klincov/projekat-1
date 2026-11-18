import FountainMap from "../components/FountainMap";
import { useLanguage } from "../i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <section className="mb-10">
        <p className="text-blue-600 font-semibold mb-3">
          {t("home.eyebrow")}
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {t("home.title")}
        </h1>

        <p className="text-gray-600 max-w-2xl leading-relaxed">
          {t("home.intro")}
        </p>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            {t("home.mapTitle")}
          </h2>

          <span className="text-sm text-gray-500">
            {t("home.mapBadge")}
          </span>
        </div>

        <FountainMap />
      </section>
    </main>
  );
}
