
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { divIcon } from "leaflet";
import { fountains } from "../data/fountain";
import "leaflet/dist/leaflet.css";

const fountainIcon = divIcon({
  className: "fountain-marker-wrapper",
  html: '<div class="fountain-marker">⛲</div>',
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});

export default function FountainMap() {
  return (
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
                event.target.openPopup();
              },
              click: (event) => {
                event.target.openPopup();
              },
            }}
          >
            <Popup>
              <div className="w-[220px]">
                {fountain.image ? (
                  <img
                    src={fountain.image}
                    alt={fountain.name}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                ) : (
                  <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-gray-500">
                      Fotografija česme
                    </span>
                  </div>
                )}

                <h3 className="font-bold text-base mb-1">
                  {fountain.name}
                </h3>

                <p className="text-sm text-gray-600">
                  {fountain.description ||
                    "Istorija ove česme biće uskoro dodata."}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
