
import { useEffect, useRef, useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import { divIcon } from "leaflet";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import { fountains, type Fountain } from "../data/fountain";

import "leaflet/dist/leaflet.css";

const fountainIcon = divIcon({
  className: "fountain-marker-wrapper",
  html: '<div class="fountain-marker">⛲</div>',
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});

export default function FountainMap() {
  const [selectedFountain, setSelectedFountain] =
    useState<Fountain | null>(null);

  const [activeImage, setActiveImage] = useState(0);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  // Poništavanje timera za zatvaranje popup-a
  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  // Odloženo zatvaranje omogućava prelazak mišem
  // sa markera na popup karticu
  const scheduleClose = (closePopup: () => void) => {
    cancelClose();

    closeTimer.current = setTimeout(() => {
      closePopup();
    }, 200);
  };

  const openDetails = (fountain: Fountain) => {
    cancelClose();
    setActiveImage(0);
    setSelectedFountain(fountain);
  };

  const closeDetails = () => {
    setSelectedFountain(null);
    setActiveImage(0);
  };

  // Zatvaranje velikog prozora tasterom Escape
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDetails();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Sprečavanje skrolovanja stranice dok je modal otvoren
  useEffect(() => {
    document.body.style.overflow = selectedFountain
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedFountain]);

  // Čišćenje timera
  useEffect(() => {
    return () => cancelClose();
  }, []);

  const galleryImages = selectedFountain
    ? [
        ...new Set([
          selectedFountain.coverImage,
          ...selectedFountain.images,
        ]),
      ]
    : [];

  const previousImage = () => {
    setActiveImage((current) =>
      current === 0
        ? galleryImages.length - 1
        : current - 1
    );
  };

  const nextImage = () => {
    setActiveImage((current) =>
      (current + 1) % galleryImages.length
    );
  };

  return (
    <>
      {/* MAPA */}
      <div className="w-full h-[550px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
        <MapContainer
          center={[44.9764, 19.6122]}
          zoom={15}
          scrollWheelZoom={true}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {fountains.map((fountain) => (
            <Marker
              key={fountain.id}
              position={[
                fountain.latitude,
                fountain.longitude,
              ]}
              icon={fountainIcon}
              eventHandlers={{
                mouseover: (event) => {
                  cancelClose();
                  event.target.openPopup();
                },

                mouseout: (event) => {
                  const marker = event.target;

                  scheduleClose(() => {
                    marker.closePopup();
                  });
                },

                click: () => {
                  openDetails(fountain);
                },
              }}
            >
              <Popup
                closeButton={false}
                autoPan={false}
                offset={[0, -25]}
                eventHandlers={{
                  mouseover: () => {
                    cancelClose();
                  },

                  mouseout: (event) => {
                    const popup = event.target;

                    scheduleClose(() => {
                      popup.close();
                    });
                  },
                }}
              >
                <button
                  type="button"
                  onClick={() => openDetails(fountain)}
                  className="w-[230px] text-left cursor-pointer"
                >
                  <img
                    src={fountain.coverImage}
                    alt={fountain.name}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />

                  <h3 className="font-bold text-base text-gray-900 mb-1">
                    {fountain.name}
                  </h3>

                  <p className="text-sm text-gray-600 line-clamp-3">
                    {fountain.shortDescription}
                  </p>

                  <p className="text-blue-600 text-xs font-semibold mt-3">
                    Kliknite za više informacija →
                  </p>
                </button>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* VELIKI MODAL */}
      {selectedFountain && (
        <div
          className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4"
          onClick={closeDetails}
        >
          <div
            className="relative w-[80vw] h-[80vh] max-w-7xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row"
            onClick={(event) => event.stopPropagation()}
          >
            {/* X DUGME */}
            <button
              onClick={closeDetails}
              className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-gray-200 rounded-full p-2 shadow-md transition"
              aria-label="Zatvori prozor"
            >
              <X size={24} />
            </button>

            {/* LEVA STRANA - GALERIJA */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gray-950 flex flex-col p-4 md:p-6">

              {/* GLAVNA SLIKA */}
              <div className="relative flex-1 min-h-0 flex items-center justify-center">

                <img
                  src={galleryImages[activeImage]}
                  alt={selectedFountain.name}
                  className="max-h-full max-w-full object-contain rounded-lg"
                />

                {/* PRETHODNA SLIKA */}
                {galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={previousImage}
                      className="absolute left-2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition"
                      aria-label="Prethodna slika"
                    >
                      <ChevronLeft size={28} />
                    </button>

                    {/* SLEDEĆA SLIKA */}
                    <button
                      onClick={nextImage}
                      className="absolute right-2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition"
                      aria-label="Sledeća slika"
                    >
                      <ChevronRight size={28} />
                    </button>
                  </>
                )}
              </div>

              {/* THUMBNAILS */}
              <div className="flex gap-3 mt-4 overflow-x-auto pb-1 shrink-0">
                {galleryImages.map((image, index) => (
                  <button
                    key={image}
                    onClick={() => setActiveImage(index)}
                    className={`shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition ${
                      activeImage === index
                        ? "border-blue-500 opacity-100"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Fotografija ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* DESNA STRANA - ISTORIJA */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full overflow-y-auto p-6 md:p-10">

              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
                Javne česme Sremske Mitrovice
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-6 pr-10">
                {selectedFountain.name}
              </h2>

              <div className="w-16 h-1 bg-blue-600 rounded-full mb-8" />

              <div className="text-gray-700 leading-8 whitespace-pre-line">
                {selectedFountain.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
