import { useState } from "react";

import { fountains, type Fountain } from "../data/fountain";
import FountainModal from "../components/FountainModal";

export default function About() {
  const [selectedFountain, setSelectedFountain] =
    useState<Fountain | null>(null);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold">O česmama</h1>
      <p className="mt-4 text-gray-600">
        Informacije o istoriji i značaju javnih česama.
      </p>

      {/* GRID ČESAMA - 3 u redu */}
      <div
        className="mt-10 grid gap-6"
        style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
      >
        {fountains.map((fountain) => {
          const cover = fountain.coverImage ?? fountain.images?.[0];

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
                    alt={fountain.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-5xl text-gray-300">
                    ⛲
                  </div>
                )}
              </div>

              <h2 className="p-4 text-lg font-semibold text-gray-900">
                {fountain.name}
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