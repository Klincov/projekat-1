import { CalendarDays, Clock, MapPin, Users } from "lucide-react";

import { useLanguage } from "../i18n/LanguageContext";
import type { Language } from "../i18n/translations";

type Workshop = {
  id: number;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  location: string;
  participants: number;
};

// Novu radionicu dodaješ ovde
const workshops: Workshop[] = [
  {
    id: 1,
    date: "2026-11-25",
    time: "09:25",
    location: "Jarak",
    participants: 20,
  },
  {
    id: 2,
    date: "2026-11-26",
    time: "08:45",
    location: "Sremska Mitrovica – JJ Zmaj",
    participants: 17,
  },
];

type Status = "past" | "today" | "upcoming";

// Današnji datum (po satu posetioca) u formatu YYYY-MM-DD
function todayIso() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

function getStatus(date: string, today: string): Status {
  if (date < today) return "past";
  if (date === today) return "today";
  return "upcoming";
}

function formatDate(iso: string, lang: Language) {
  const [year, month, day] = iso.split("-").map(Number);

  const text = new Date(year, month - 1, day).toLocaleDateString(
    lang === "sr" ? "sr-Latn-RS" : "en-GB",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return text.charAt(0).toUpperCase() + text.slice(1);
}

const badgeStyles: Record<Status, string> = {
  past: "bg-gray-100 text-gray-600",
  today: "bg-green-100 text-green-700",
  upcoming: "bg-blue-100 text-blue-700",
};

export default function Workshops() {
  const { lang, t } = useLanguage();

  const today = todayIso();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
        {t("workshops.title")}
      </h1>
      <p className="mt-4 text-gray-600 max-w-2xl">
        {t("workshops.intro")}
      </p>

      <div className="mt-8 sm:mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {workshops.map((workshop) => {
          const status = getStatus(workshop.date, today);

          return (
            <article
              key={workshop.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                  <CalendarDays
                    size={20}
                    className="text-blue-600 shrink-0"
                  />
                  {formatDate(workshop.date, lang)}
                </h2>

                <span
                  className={`shrink-0 text-xs font-semibold px-3 py-1 rounded-full ${badgeStyles[status]}`}
                >
                  {t(`workshops.status.${status}`)}
                </span>
              </div>

              <ul className="mt-5 space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <Clock size={18} className="text-gray-400 shrink-0" />
                  <span>{workshop.time}</span>
                </li>

                <li className="flex items-center gap-3">
                  <MapPin size={18} className="text-gray-400 shrink-0" />
                  <span>{workshop.location}</span>
                </li>

                <li className="flex items-center gap-3">
                  <Users size={18} className="text-gray-400 shrink-0" />
                  <span>
                    {t("workshops.participants")}: {workshop.participants}
                  </span>
                </li>
              </ul>
            </article>
          );
        })}
      </div>
    </main>
  );
}