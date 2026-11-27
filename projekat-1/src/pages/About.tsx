import { useState } from "react";

import { fountains, localized, type Fountain } from "../data/fountain";
import FountainModal from "../components/FountainModal";
import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { lang, t } = useLanguage();

  const [selectedFountain, setSelectedFountain] =
    useState<Fountain | null>(null);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold">{t("about.title")}</h1>
      <p className="mt-4 text-gray-600">{t("about.intro")}</p>

      <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {fountains.map((fountain) => {
          const cover = fountain.coverImage ?? fountain.images?.[0];
          const name = localized(fountain.name, lang);

          return (
            <button
              key={fountain.id}
              type="button"
              onClick={() => setSelectedFountain(fountain)}
              className="text-left bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {/* Svi okviri imaju iste proporcije */}
              <div className="aspect-[4/3] bg-gray-100">
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

              <h2 className="p-4 text-base sm:text-lg font-semibold text-gray-900">
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