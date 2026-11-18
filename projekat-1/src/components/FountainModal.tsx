import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import type { Fountain } from "../data/fountain";

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
        aria-label={fountain.name}
        onClick={(event) => event.stopPropagation()}
        className="relative w-full max-w-6xl h-[90vh] md:h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-row"
      >
        {/* X DUGME */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 bg-white/90 hover:bg-gray-200 rounded-full p-2 shadow-md transition"
          aria-label="Zatvori prozor"
        >
          <X size={22} />
        </button>

        {/* LEVA STRANA - GALERIJA */}
        <div className="w-[55%] h-full bg-gray-950 flex flex-col min-h-0 shrink-0">
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
                  alt={`${fountain.name} – fotografija ${activeImage + 1}`}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-sm text-gray-400">
                  Fotografije još nisu dodate
                </p>
              </div>
            )}

            {imageCount > 1 && (
              <>
                <button
                  onClick={previousImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full p-2 md:p-3 transition"
                  aria-label="Prethodna slika"
                >
                  <ChevronLeft size={26} />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/90 text-white rounded-full p-2 md:p-3 transition"
                  aria-label="Sledeća slika"
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
                  aria-label={`Prikaži fotografiju ${index + 1}`}
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
        <div className="w-[45%] h-full min-h-0 overflow-y-auto p-4 sm:p-6 md:p-10">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
            Javne česme Sremske Mitrovice
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pr-10">
            {fountain.name}
          </h2>

          <div className="w-16 h-1 bg-blue-600 rounded-full mb-8" />

          <div className="text-gray-700 leading-8 whitespace-pre-line">
            {fountain.description}
          </div>
        </div>
      </div>
    </div>
  );
}