import { useState } from "react";

import { fountains, localized, type Fountain } from "../data/fountain";
import FountainModal from "../components/FountainModal";
import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { lang, t } = useLanguage();

  const [selectedFountain, setSelectedFountain] =
    useState<Fountain | null>(null);

  return (
    <main className="page-shell">
      <h1 className="page-title">{t("about.title")}</h1>
      <p className="page-intro mt-4">{t("about.intro")}</p>

      <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {fountains.map((fountain) => {
          const cover = fountain.coverImage ?? fountain.images?.[0];
          const name = localized(fountain.name, lang);

          return (
            <button
              key={fountain.id}
              type="button"
              onClick={() => setSelectedFountain(fountain)}
              className="visual-card text-left overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#168b79]"
            >
              {/* Svi okviri imaju iste proporcije */}
              <div className="aspect-[4/3] bg-[#e7f2ed]">
                {cover ? (
                  <img
                    src={cover}
                    alt={name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl text-gray-300">
                    ⛲
                  </div>
                )}
              </div>

              <h2 className="p-4 text-base sm:text-lg font-semibold text-[#214b48]">
                {name}
              </h2>
            </button>
          );
        })}
      </div>

      {/* VELIKI MODAL - isti kao na mapi */}
      {selectedFountain && (
        <FountainModal
          fountain={selectedFountain}
          onClose={() => setSelectedFountain(null)}
        />
      )}
    </main>
  );
}