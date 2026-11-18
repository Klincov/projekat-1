import { useState } from "react";

import { fountains, type Fountain } from "../data/fountain";
import FountainModal from "../components/FountainModal";

type GalleryItem = {
  fountain: Fountain;
  image: string;
};

// Sve fotografije svih česama, svaka povezana sa svojom česmom
const galleryItems: GalleryItem[] = fountains.flatMap((fountain) => {
  const images = [
    ...new Set([
      ...(fountain.coverImage ? [fountain.coverImage] : []),
      ...(fountain.images ?? []),
    ]),
  ];

  return images.map((image) => ({ fountain, image }));
});

export default function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold">Galerija</h1>
      <p className="mt-4 text-gray-600">
        Fotografije javnih česama Sremske Mitrovice.
      </p>

      {/* GRID SLIKA - 3 u redu */}
      <div
        className="mt-10 grid gap-6"
        style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
      >
        {galleryItems.map((item) => (
          <button
            key={`${item.fountain.id}-${item.image}`}
            type="button"
            onClick={() => setSelected(item)}
            className="text-left bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {/* Svi okviri imaju iste proporcije */}
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
              <img
                src={item.image}
                alt={item.fountain.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <p className="p-4 text-base font-semibold text-gray-900">
              {item.fountain.name}
            </p>
          </button>
        ))}
      </div>

      {galleryItems.length === 0 && (
        <p className="mt-10 text-gray-500">
          Fotografije još nisu dodate.
        </p>
      )}

      {/* Klik otvara istu karticu, odmah na izabranoj slici */}
      {selected && (
        <FountainModal
          fountain={selected.fountain}
          initialImage={selected.image}
          onClose={() => setSelected(null)}
        />
      )}
    </main>
  );
}
