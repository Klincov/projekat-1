import { useEffect, useRef } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import { divIcon } from "leaflet";
import {
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import { fountains, localized, type Fountain } from "../data/fountain";
import { useLanguage } from "../i18n/LanguageContext";
import FountainModal from "./FountainModal";

import "leaflet/dist/leaflet.css";

const fountainIcon = divIcon({
  className: "fountain-marker-wrapper",
  html: '<div class="fountain-marker">⛲</div>',
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});

export default function FountainMap() {
  const { lang, t } = useLanguage();

  // Otvorena česma se čuva u adresi (?cesma=7), pa se link može
  // podeliti, a QR kod otvara tačno tu česmu
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const selectedFountain =
    fountains.find(
      (fountain) => fountain.id === Number(searchParams.get("cesma"))
    ) ?? null;

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

    const next = new URLSearchParams(searchParams);
    next.set("cesma", String(fountain.id));
    setSearchParams(next, { state: { fromApp: true } });
  };

  const closeDetails = () => {
    // Otvoreno klikom na sajtu: vraćamo se korak unazad.
    // Otvoreno preko QR koda ili linka: samo uklanjamo parametar,
    // da dugme "nazad" ne izbaci posetioca sa sajta.
    if (location.state?.fromApp) {
      navigate(-1);
      return;
    }

    const next = new URLSearchParams(searchParams);
    next.delete("cesma");
    setSearchParams(next, { replace: true });
  };

  // Čišćenje timera
  useEffect(() => {
    return () => cancelClose();
  }, []);

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

          {fountains
            .filter(
              (
                fountain
              ): fountain is Fountain & {
                latitude: number;
                longitude: number;
              } =>
                fountain.latitude !== undefined &&
                fountain.longitude !== undefined
            )
            .map((fountain) => (
            <Marker
              key={fountain.id}
              position={[fountain.latitude, fountain.longitude]}
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
                <div className="w-[320px] text-left">
                  {(fountain.coverImage || fountain.images?.[0]) && (
                    <img
                      src={
                        fountain.coverImage ?? fountain.images?.[0]
                      }
                      alt={localized(fountain.name, lang)}
                      className="w-full h-[190px] object-cover rounded-lg mb-3"
                    />
                  )}

                  <h3 className="font-bold text-base text-gray-900 mb-2">
                    {localized(fountain.name, lang)}
                  </h3>

                  <p className="text-sm text-gray-600 mt-1">
                    {t("map.fountainStatus")}: {t(`status.${fountain.status}`)}
                  </p>

                  <p className="text-sm text-gray-600">
                    {fountain.waterStatus === "potable"
                      ? t("water.potable")
                      : fountain.waterStatus === "no_water"
                        ? t("water.no_water")
                        : t("water.unknown")}
                  </p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* VELIKI MODAL */}
      {selectedFountain && (
        <FountainModal
          fountain={selectedFountain}
          onClose={closeDetails}
        />
      )}
    </>
  );
}