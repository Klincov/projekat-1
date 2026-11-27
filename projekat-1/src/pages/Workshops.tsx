import { useLanguage } from "../i18n/LanguageContext";
import type { Language } from "../i18n/translations";

type WorkshopArtwork = {
  file: string;
  students: string;
  classAndSchool: Record<Language, string>;
};

type WorkshopPhoto = {
  file: string;
  caption: Record<Language, string>;
};

const workshopPhotos: WorkshopPhoto[] = [
  {
    file: "workshop-bosko-ciric.jpeg",
    caption: {
      sr: "Biolog Boško Ćirić",
      en: "Biologist Boško Ćirić",
    },
  },
  {
    file: "workshop-gymnasium-students.jpeg",
    caption: {
      sr: "Učenici i učenice Mitrovačke gimnazije tokom radionice",
      en: "Students of Mitrovačka Gimnazija during a workshop",
    },
  },
  {
    file: "workshop-nedeljka-fabri-luka-nikolic.jpeg",
    caption: {
      sr: "Profesorka engleskog jezika Nedeljka Fabri i koordinator projekta Luka Nikolić",
      en: "English teacher Nedeljka Fabri and project coordinator Luka Nikolić",
    },
  },
];

const workshopArtworks: WorkshopArtwork[] = [
  {
    file: "IMG_2412.jpeg",
    students: "Iva Vladisavljević, Kristina Malešević i Mladen Šuljmanac",
    classAndSchool: {
      sr: "II-6, Mitrovačka gimnazija",
      en: "Class II-6, Mitrovačka Gimnazija",
    },
  },
  {
    file: "IMG_2415.jpeg",
    students: "Elena Ribić i Tamara Jovelić",
    classAndSchool: {
      sr: "II-4, Mitrovačka gimnazija",
      en: "Class II-4, Mitrovačka Gimnazija",
    },
  },
  {
    file: "IMG_2419.jpeg",
    students: "Tamara Biuković, Tijana Biuković, Nađa Umetić i Andrea Lukić",
    classAndSchool: {
      sr: "II-1, Mitrovačka gimnazija",
      en: "Class II-1, Mitrovačka Gimnazija",
    },
  },
  {
    file: "IMG_2421.jpeg",
    students: "Helena Ponjarac, Andrea Vučković, Emilija Durać i Filip Kern",
    classAndSchool: {
      sr: "II-1, Mitrovačka gimnazija",
      en: "Class II-1, Mitrovačka Gimnazija",
    },
  },
  {
    file: "IMG_2431.jpeg",
    students: "Aleksa Milutinović, Ana Knežević, Lana Jovanović i Mia Ružojčić",
    classAndSchool: {
      sr: "IV-1, Mitrovačka gimnazija",
      en: "Class IV-1, Mitrovačka Gimnazija",
    },
  },
  {
    file: "IMG_2433.jpeg",
    students: "Andrea Teškić, Jelena Savić, Helena Ilić i Lenka Maricki",
    classAndSchool: {
      sr: "IV-1, Mitrovačka gimnazija",
      en: "Class IV-1, Mitrovačka Gimnazija",
    },
  },
  {
    file: "IMG_2440.jpeg",
    students: "Branislava Reljić, Maša Ćosić, Sofija Malbaša i Lazar Kevilj",
    classAndSchool: {
      sr: "II-bh, Mitrovačka gimnazija",
      en: "Class II-bh, Mitrovačka Gimnazija",
    },
  },
  {
    file: "IMG_2442.jpeg",
    students: "Jakov Jurišić, Milenko Petaković, Marko Krstić i Marko Geljić",
    classAndSchool: {
      sr: "II-5, Mitrovačka gimnazija",
      en: "Class II-5, Mitrovačka Gimnazija",
    },
  },
  {
    file: "IMG_2444.jpeg",
    students: "Ines Bačinović, Mihajlo Beko i Mateja Spasojević",
    classAndSchool: {
      sr: "II-bh, Mitrovačka gimnazija",
      en: "Class II-bh, Mitrovačka Gimnazija",
    },
  },
  {
    file: "IMG_2446.jpeg",
    students: "Nevena Erdeljanin, Dunja Zdravković, Anja Popović i Mateja Mojsilović",
    classAndSchool: {
      sr: "II-bh, Mitrovačka gimnazija",
      en: "Class II-bh, Mitrovačka Gimnazija",
    },
  },
  {
    file: "IMG_2423.jpeg",
    students: "Željko Simeunović",
    classAndSchool: {
      sr: "VIII-7, OŠ „Jovan Jovanović Zmaj” u Jarku",
      en: "Class VIII-7, Jovan Jovanović Zmaj Primary School in Jarak",
    },
  },
  {
    file: "IMG_2425.jpeg",
    students: "Dušan Šuljmanac",
    classAndSchool: {
      sr: "VIII-7, OŠ „Jovan Jovanović Zmaj” u Jarku",
      en: "Class VIII-7, Jovan Jovanović Zmaj Primary School in Jarak",
    },
  },
  {
    file: "IMG_2427.jpeg",
    students: "Tara Cvetičanin i Mila Simić",
    classAndSchool: {
      sr: "VII-4, OŠ „Jovan Jovanović Zmaj” u Sremskoj Mitrovici",
      en: "Class VII-4, Jovan Jovanović Zmaj Primary School in Sremska Mitrovica",
    },
  },
  {
    file: "IMG_2429.jpeg",
    students: "Milica Mošić i Nevena Ristivojević",
    classAndSchool: {
      sr: "VII-4, OŠ „Jovan Jovanović Zmaj” u Sremskoj Mitrovici",
      en: "Class VII-4, Jovan Jovanović Zmaj Primary School in Sremska Mitrovica",
    },
  },
];

export default function Workshops() {
  const { lang, t } = useLanguage();

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
        {t("workshops.title")}
      </h1>
      <p className="mt-4 text-gray-600 max-w-2xl">
        {t("workshops.intro")}
      </p>

      <section className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          {t("workshops.programTitle")}
        </h2>
        <div className="mt-4 max-w-4xl space-y-4 leading-relaxed text-gray-700">
          <p>{t("workshops.programP1")}</p>
          <p>{t("workshops.programP2")}</p>
          <p>{t("workshops.programP3")}</p>
        </div>
      </section>

      <section className="mt-8 sm:mt-10">
        <h2 className="text-2xl font-bold text-gray-900">
          {t("workshops.photosTitle")}
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workshopPhotos.map((photo) => (
            <figure
              key={photo.file}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
            >
              <div className="aspect-[4/3] bg-gray-50">
                <img
                  src={`/images/workshops/${photo.file}`}
                  alt={photo.caption[lang]}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="p-4 font-medium leading-snug text-gray-800">
                {photo.caption[lang]}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mt-12 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          {t("workshops.galleryTitle")}
        </h2>
        <p className="mt-3 max-w-2xl text-gray-600">
          {t("workshops.galleryIntro")}
        </p>

        <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workshopArtworks.map((artwork) => {
            const classAndSchool = artwork.classAndSchool[lang];

            return (
              <figure
                key={artwork.file}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-50 p-2">
                  <img
                    src={`/images/workshops/${artwork.file}`}
                    alt={`${artwork.students} — ${classAndSchool}`}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="p-4">
                  <p className="font-semibold leading-snug text-gray-900">
                    {artwork.students}
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    {classAndSchool}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </section>
    </main>
  );
}