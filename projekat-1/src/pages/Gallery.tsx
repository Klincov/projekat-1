import { useState } from "react";

import { fountains, localized, type Fountain } from "../data/fountain";
import FountainModal from "../components/FountainModal";
import ProjectLogos from "../components/ProjectLogos";
import { useLanguage } from "../i18n/LanguageContext";

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
  const { lang, t } = useLanguage();

  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <main className="page-shell">
      <h1 className="page-title">{t("gallery.title")}</h1>
      <p className="page-intro mt-4">{t("gallery.intro")}</p>

      <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {galleryItems.map((item) => {
          const name = localized(item.fountain.name, lang);

          return (
            <button
              key={`${item.fountain.id}-${item.image}`}
              type="button"
              onClick={() => setSelected(item)}
              className="visual-card text-left overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#168b79]"
            >
              {/* Svi okviri imaju iste proporcije */}
              <div className="aspect-[4/3] overflow-hidden bg-[#e7f2ed]">
                <img
                  src={item.image}
                  alt={name}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="p-4 text-base font-semibold text-[#214b48]">
                {name}
              </p>
            </button>
          );
        })}
      </div>

      {galleryItems.length === 0 && (
        <p className="mt-10 text-gray-500">{t("gallery.empty")}</p>
      )}

      {/* Klik otvara istu karticu, odmah na izabranoj slici */}
      {selected && (
        <FountainModal
          fountain={selected.fountain}
          initialImage={selected.image}
          onClose={() => setSelected(null)}
        />
      )}

      <ProjectLogos />
    </main>
  );
}
