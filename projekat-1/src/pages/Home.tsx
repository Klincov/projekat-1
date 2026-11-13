
import FountainMap from "../components/FountainMap";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      <section className="mb-10">
        <p className="text-blue-600 font-semibold mb-3">
          ISTORIJA GRADA
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Javne česme Sremske Mitrovice
        </h1>

        <p className="text-gray-600 max-w-2xl leading-relaxed">
          Upoznajte javne česme Sremske Mitrovice,
          njihove lokacije, istoriju i značaj za grad.
          Istražite mapu i otkrijte priče koje se
          kriju iza svakog izvora vode.
        </p>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Mapa javnih česama
          </h2>

          <span className="text-sm text-gray-500">
            Interaktivna mapa
          </span>
        </div>

        <FountainMap />
      </section>
    </main>
  );
}
