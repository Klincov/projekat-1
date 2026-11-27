import FountainMap from "../components/FountainMap";
import ProjectLogos from "../components/ProjectLogos";
import { useLanguage } from "../i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="page-shell">
      <section className="home-intro mb-8 sm:mb-10">
        <h1 className="home-title mb-5">
          {t("home.title")}
        </h1>

        <p className="home-eyebrow mb-4 text-base sm:text-lg">
          {t("home.eyebrow")}
        </p>

        <p className="home-copy">
          {t("home.intro")}
        </p>
        <p className="home-copy mt-4">
          {t("home.mapDescription")}
        </p>
        <p className="home-coverage mt-6 px-4 py-2.5 text-sm sm:text-base">
          {t("home.coverage")}
        </p>
      </section>

      <section>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-4">
          <h2 className="section-title text-xl sm:text-2xl">
            {t("home.mapTitle")}
          </h2>

          <span className="section-badge inline-flex w-fit px-3 py-1.5 text-sm">
            {t("home.mapBadge")}
          </span>
        </div>

        <FountainMap />
      </section>

      <ProjectLogos />
    </main>
  );
}
