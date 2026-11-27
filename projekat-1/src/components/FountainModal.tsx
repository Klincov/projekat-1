import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { localized, type Fountain } from "../data/fountain";
import { useLanguage } from "../i18n/LanguageContext";

const englishLithology: Record<string, string> = {
  humus: "humus",
  glina: "clay",
  pesak: "sand",
  "krupnozrni pesak": "coarse-grained sand",
  šljunak: "gravel",
  "glina i peskovita glina": "clay and sandy clay",
  "peskoviti šljunak": "gravelly sand",
  "glinoviti pesak": "clayey sand",
  "glina žute boje": "yellow clay",
  "pesak sive boje": "grey sand",
  "glina sive boje": "grey clay",
  "prašinasti pesak žute boje": "yellow silty sand",
  "peskovita glina": "sandy clay",
  peščar: "sandstone",
  "pesak žute boje": "yellow sand",
  "žuti krupnozrni pesak": "yellow coarse-grained sand",
  "krupnozrni šljunak": "coarse gravel",
  "šljunkoviti pesak": "gravelly sand",
  "krupnozrni šljunkoviti pesak": "coarse gravelly sand",
  "gline i peskovite gline": "clays and sandy clays",
  "sitnozrni pesak": "fine-grained sand",
  "poluvezani pesak": "semi-consolidated sand",
  nasip: "fill",
  "pesak plave boje": "blue sand",
  "peskovi i glinoviti peskovi": "sands and clayey sands",
  "muljeviti pesak": "silty sand",
  "prašinasti pesak": "silty sand",
  "sitnozrni šljunak": "fine-grained gravel",
  "laporovita glina": "marly clay",
  laporac: "marl",
  "srednjezrni šljunak": "medium-grained gravel",
  "srednjezrni pesak": "medium-grained sand",
  "srednjezrni pesak, kaptirani sloj":
    "medium-grained sand, captured layer",
  "refulisani pesak": "hydraulically placed sand",
  "zaglinjen pesak": "clayey sand",
  "krupnozrni pesak, kaptirani sloj":
    "coarse-grained sand, captured layer",
  "prašinasti pesak žute boje, kaptirani sloj":
    "yellow silty sand, captured layer",
  "šljunak, kaptirani sloj": "gravel, captured layer",
  "pesak, kaptirani sloj": "sand, captured layer",
  "žuti krupnozrni pesak, kaptirani sloj":
    "yellow coarse-grained sand, captured layer",
  "sitnozrni pesak, kaptirani sloj": "fine-grained sand, captured layer",
  "krupnozrni šljunkoviti pesak, kaptirani sloj":
    "coarse gravelly sand, captured layer",
};

const localizedLithology = (material: string, lang: "sr" | "en") =>
  lang === "en" ? englishLithology[material] ?? material : material;

type Props = {
  fountain: Fountain;
  onClose: () => void;
  // Slika koja se prva prikazuje (npr. kada se klikne na nju u galeriji)
  initialImage?: string;
};

export default function FountainModal({
  fountain,
  onClose,
  initialImage,
}: Props) {
  const { lang, t } = useLanguage();

  const galleryImages = [
    ...new Set([
      ...(fountain.coverImage ? [fountain.coverImage] : []),
      ...(fountain.images ?? []),
    ]),
  ];

  const [activeImage, setActiveImage] = useState(() =>
    Math.max(0, initialImage ? galleryImages.indexOf(initialImage) : 0)
  );

  const imageCount = galleryImages.length;

  const previousImage = () => {
    if (imageCount === 0) return;
    setActiveImage((current) =>
      current === 0 ? imageCount - 1 : current - 1
    );
  };

  const nextImage = () => {
    if (imageCount === 0) return;
    setActiveImage((current) => (current + 1) % imageCount);
  };

  // Tastatura: Escape zatvara, strelice menjaju sliku
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "ArrowLeft") {
        previousImage();
      } else if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageCount, onClose]);

  // Sprečavanje skrolovanja stranice dok je modal otvoren
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-3 md:p-6"
      onClick={onClose}
    >
      {/* Fiksne dimenzije modala: ne zavise od veličine slike */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={localized(fountain.name, lang)}
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-6xl h-[90vh] h-[90dvh] md:h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
      >
        {/* X DUGME */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 bg-white/90 hover:bg-gray-200 rounded-full p-2 shadow-md transition"
          aria-label={t("modal.close")}
        >
          <X size={22} />
        </button>

        {/* LEVA STRANA - GALERIJA */}
        <div className="w-full h-[45%] md:w-[55%] md:h-full bg-gray-950 flex flex-col min-h-0 shrink-0">
          {/* GLAVNA SLIKA */}
          <div className="relative flex-1 min-h-0 overflow-hidden bg-black">
            {imageCount > 0 ? (
              <>
                <img
                  src={galleryImages[activeImage]}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-40"
                />

                <img
                  src={galleryImages[activeImage]}
                  alt={`${localized(fountain.name, lang)} – ${t("modal.photoN", {
                    n: activeImage + 1,
                  })}`}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm text-gray-400">
                  {t("modal.noPhotos")}
                </p>
              </div>
            )}

            {imageCount > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full p-2 md:p-3 transition"
                  aria-label={t("modal.prev")}
                >
                  <ChevronLeft size={26} />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full p-2 md:p-3 transition"
                  aria-label={t("modal.next")}
                >
                  <ChevronRight size={26} />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                  {activeImage + 1} / {imageCount}
                </div>
              </>
            )}
          </div>

          {/* THUMBNAILS */}
          {imageCount > 1 && (
            <div className="flex gap-2 p-3 overflow-x-auto shrink-0 bg-gray-900">
              {galleryImages.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setActiveImage(index)}
                  className={`shrink-0 w-20 h-14 rounded-md overflow-hidden border-2 transition ${
                    activeImage === index
                      ? "border-blue-500 opacity-100"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                  aria-label={t("modal.showPhoto", { n: index + 1 })}
                >
                  <img
                    src={image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* DESNA STRANA - ISTORIJA */}
        <div className="w-full h-[55%] md:w-[45%] md:h-full min-h-0 overflow-y-auto p-4 sm:p-6 md:p-10">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
            {t("modal.eyebrow")}
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pr-10">
            {localized(fountain.name, lang)}
          </h2>

          <div className="w-16 h-1 bg-blue-600 rounded-full mb-8" />

          <div className="text-gray-700 leading-7 md:leading-8 font-bold">
            {fountain.profile ? (
              <>
                <p>
                  {t("map.fountainStatus")}: {t(`status.${fountain.status}`)}
                </p>
                <p className="mb-4">
                  {fountain.waterStatus === "potable"
                    ? t("water.potable")
                    : fountain.waterStatus === "no_water"
                      ? t("water.no_water")
                      : t("water.unknown")}
                </p>

                {fountain.profile.totalDepth && (
                  <p>
                    <strong>{t("profile.totalDepth")}:</strong>{" "}
                    {fountain.profile.totalDepth}
                  </p>
                )}
                {fountain.profile.hydrogeologicalZone && (
                  <p>
                    <strong>{t("profile.hydrogeologicalZone")}:</strong>{" "}
                    {lang === "en"
                      ? fountain.profile.hydrogeologicalZone.replace(
                          " i ",
                          " and "
                        )
                      : fountain.profile.hydrogeologicalZone}
                  </p>
                )}
                {fountain.profile.waterTemperature && (
                  <p>
                    <strong>{t("profile.waterTemperature")}:</strong>{" "}
                    {fountain.profile.waterTemperature}
                  </p>
                )}
                {fountain.profile.yearLabel && fountain.profile.yearValue && (
                  <p>
                    <strong>
                      {localized(fountain.profile.yearLabel, lang)}:
                    </strong>{" "}
                    {lang === "en"
                      ? fountain.profile.yearValue
                          .replace("oko ", "around ")
                          .replace(" godine", "")
                          .replace("1970-te", "1970s")
                      : fountain.profile.yearValue}
                  </p>
                )}

                {fountain.profile.notes?.map((note) => (
                  <p key={note.sr} className="mt-4">
                    {localized(note, lang)}
                  </p>
                ))}

                {fountain.profile.lithology &&
                  fountain.profile.lithology.length > 0 && (
                    <>
                      <h3 className="font-bold mt-5 mb-2">
                        {t("profile.lithology")}:
                      </h3>
                      <ul className="list-disc pl-6">
                        {fountain.profile.lithology.map(
                          ([depthRange, material]) => (
                            <li key={depthRange}>
                              {depthRange} –{" "}
                              {localizedLithology(material, lang)}
                            </li>
                          )
                        )}
                      </ul>
                    </>
                  )}
              </>
            ) : (
              <p className="whitespace-pre-line">
                {localized(fountain.description, lang)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
