import type { Language } from "../i18n/translations";

export type LocalizedText = Record<Language, string>;

// Vraća tekst na izabranom jeziku (uz rezervu na srpski)
export const localized = (text: LocalizedText, lang: Language): string =>
  text[lang] ?? text.sr;

export interface Fountain {
  id: number;
  name: LocalizedText;
  latitude: number;
  longitude: number;

  // Naslovna fotografija
  coverImage?: string;

  // Dodatne fotografije
  images?: string[];

  // Istorija i opis
  description: LocalizedText;

  shortDescription: LocalizedText;

  // Neutralni kodovi - prevode se pri prikazu
  status: "active" | "no_water";
  waterStatus?: "potable" | "no_water";
}

const PLACEHOLDER_HISTORY: LocalizedText = {
  sr: "Istorija i detalji o ovoj česmi biće dodati.",
  en: "History and details about this fountain will be added.",
};

export const fountains: Fountain[] = [
  {
    id: 1,
    name: {
      sr: "Česma kod restorana Ribolovac (B-38)",
      en: "Fountain near Ribolovac Restaurant (B-38)",
    },
    latitude: 44.9699,
    longitude: 19.6088,
    images: ["/images/DSC_0294.JPG"],
    description: {
      sr: "Stari bunar koji je postojao produbljen je 1990. godine na dubinu od 270,00 m.",
      en: "The existing old well was deepened in 1990 to a depth of 270.00 m.",
    },
    shortDescription: {
      sr: "Javna česma kod Ribolovca",
      en: "Public fountain near Ribolovac",
    },
    status: "active",
    waterStatus: "potable",
  },
  {
    id: 2,
    name: {
      sr: "Česma kod Male Crkve (B-37)",
      en: "Fountain near the Small Church (B-37)",
    },
    latitude: 44.9690158,
    longitude: 19.6018815,
    coverImage: "/images/DSC_0297.JPG",
    images: ["/images/DSC_0303.JPG"],
    description: {
      sr: "Bunar je izbušen 2000. godine.",
      en: "The well was drilled in 2000.",
    },
    shortDescription: {
      sr: "Javna česma kod Male Crkve",
      en: "Public fountain near the Small Church",
    },
    status: "active",
    waterStatus: "potable",
  },
  {
    id: 3,
    name: {
      sr: "Crvena česma (B-30)",
      en: "Red Fountain (B-30)",
    },
    latitude: 44.9731,
    longitude: 19.6068,
    coverImage: "/images/DSC_0312.JPG",
    images: ["/images/DSC_0311.JPG"],
    description: PLACEHOLDER_HISTORY,
    shortDescription: {
      sr: "Javna česma poznata kao Crvena česma",
      en: "Public fountain known as the Red Fountain",
    },
    status: "active",
    waterStatus: "potable",
  },
  {
    id: 4,
    name: {
      sr: "Česma u Bloku B (B-26)",
      en: "Fountain in Block B (B-26)",
    },
    latitude: 44.9774677,
    longitude: 19.6274105,
    coverImage: "/images/IMG_0656.jpeg",
    images: ["/images/DSC_0315.JPG"],
    description: PLACEHOLDER_HISTORY,
    shortDescription: {
      sr: "Javna česma u Bloku B",
      en: "Public fountain in Block B",
    },
    status: "active",
    waterStatus: "potable",
  },
  {
    id: 5,
    name: {
      sr: "Česma u ulici Nikole Tesle (B-25)",
      en: "Fountain on Nikole Tesle Street (B-25)",
    },
    latitude: 44.9782852,
    longitude: 19.6340137,
    coverImage: "/images/IMG_0660.jpeg",
    images: ["/images/DSC_0318.JPG"],
    description: PLACEHOLDER_HISTORY,
    shortDescription: {
      sr: "Javna česma u ulici Nikole Tesle",
      en: "Public fountain on Nikole Tesle Street",
    },
    status: "active",
    waterStatus: "potable",
  },
  {
    id: 6,
    name: {
      sr: "Česma u ulici Radinački put (B-27)",
      en: "Fountain on Radinački Put Street (B-27)",
    },
    latitude: 44.988049,
    longitude: 19.6272586,
    coverImage: "/images/IMG_0663.jpeg",
    images: ["/images/DSC_0327.JPG"],
    description: PLACEHOLDER_HISTORY,
    shortDescription: {
      sr: "Javna česma u ulici Radinački put",
      en: "Public fountain on Radinački Put Street",
    },
    status: "active",
    waterStatus: "potable",
  },
  {
    id: 7,
    name: {
      sr: "Česma u naselju Matije Huđi (B-41)",
      en: "Fountain in the Matija Huđi Neighborhood (B-41)",
    },
    latitude: 44.9752973,
    longitude: 19.6133456,
    coverImage: "/images/DSC_0329.JPG",
    description: PLACEHOLDER_HISTORY,
    shortDescription: {
      sr: "Javna česma u naselju Matije Huđi",
      en: "Public fountain in the Matija Huđi neighborhood",
    },
    status: "active",
  },
  {
    id: 8,
    name: {
      sr: "Česma u ulici Petra Preradovića (B-47)",
      en: "Fountain on Petra Preradovića Street (B-47)",
    },
    latitude: 44.9747858,
    longitude: 19.6191597,
    coverImage: "/images/DSC_0338.JPG",
    description: PLACEHOLDER_HISTORY,
    shortDescription: {
      sr: "Javna česma u ulici Petra Preradovića",
      en: "Public fountain on Petra Preradovića Street",
    },
    status: "active",
    waterStatus: "potable",
  },
  {
    id: 9,
    name: {
      sr: "Česma kod Sokolskog doma (B-44)",
      en: "Fountain near Sokolski Dom (B-44)",
    },
    latitude: 44.9679047,
    longitude: 19.6092013,
    coverImage: "/images/DSC_0344.JPG",
    images: ["/images/IMG_0678.jpeg"],
    description: PLACEHOLDER_HISTORY,
    shortDescription: {
      sr: "Javna česma kod Sokolskog doma",
      en: "Public fountain near Sokolski Dom",
    },
    status: "active",
    waterStatus: "potable",
  },
  {
    id: 10,
    name: {
      sr: "Česma kod SDK (B-42)",
      en: "Fountain near SDK (B-42)",
    },
    latitude: 44.9720882,
    longitude: 19.6098356,
    coverImage: "/images/DSC_0346.JPG",
    images: ["/images/DSC_0348.JPG"],
    description: PLACEHOLDER_HISTORY,
    shortDescription: {
      sr: "Javna česma kod SDK",
      en: "Public fountain near SDK",
    },
    status: "no_water",
    waterStatus: "no_water",
  },
  {
    id: 11,
    name: {
      sr: "Česma na Trgu Sv. Trojstva (B-40)",
      en: "Fountain on Holy Trinity Square (B-40)",
    },
    latitude: 44.9729,
    longitude: 19.6121,
    coverImage: "/images/DSC_0288.JPG",
    images: ["/images/DSC_0289.JPG"],
    description: PLACEHOLDER_HISTORY,
    shortDescription: {
      sr: "Javna česma na Trgu Sv. Trojstva",
      en: "Public fountain on Holy Trinity Square",
    },
    status: "active",
    waterStatus: "potable",
  },
  {
    id: 12,
    name: {
      sr: "Česma u ulici Miloša Obilića (B-29)",
      en: "Fountain on Miloša Obilića Street (B-29)",
    },
    latitude: 44.979824,
    longitude: 19.6002474,
    coverImage: "/images/DSC_0349.JPG",
    description: PLACEHOLDER_HISTORY,
    shortDescription: {
      sr: "Javna česma u ulici Miloša Obilića",
      en: "Public fountain on Miloša Obilića Street",
    },
    status: "active",
    waterStatus: "potable",
  },
  {
    id: 13,
    name: {
      sr: "Česma kod Železničke stanice (B-46)",
      en: "Fountain near the Railway Station (B-46)",
    },
    latitude: 44.9822467,
    longitude: 19.6137101,
    coverImage: "/images/IMG_0691.jpeg",
    description: PLACEHOLDER_HISTORY,
    shortDescription: {
      sr: "Javna česma kod Železničke stanice",
      en: "Public fountain near the Railway Station",
    },
    status: "no_water",
    waterStatus: "no_water",
  },
  {
    id: 14,
    name: {
      sr: "Česma kod Doma vojske (B-43)",
      en: "Fountain near the Army Hall (B-43)",
    },
    latitude: 44.9748,
    longitude: 19.6139,
    coverImage: "/images/IMG_0700.jpeg",
    description: PLACEHOLDER_HISTORY,
    shortDescription: {
      sr: "Javna česma kod Doma vojske",
      en: "Public fountain near the Army Hall",
    },
    status: "active",
    waterStatus: "potable",
  },
  {
    id: 15,
    name: {
      sr: "Česma kod Doma učenika srednjih škola (B-28)",
      en: "Fountain near the Secondary School Students' Dormitory (B-28)",
    },
    latitude: 44.9838577,
    longitude: 19.6096895,
    coverImage: "/images/IMG_0704.jpeg",
    description: PLACEHOLDER_HISTORY,
    shortDescription: {
      sr: "Javna česma kod Doma učenika srednjih škola",
      en: "Public fountain near the Secondary School Students' Dormitory",
    },
    status: "no_water",
    waterStatus: "no_water",
  },
  {
    id: 16,
    name: {
      sr: "Česma na raskrsnici Kuzminske ulice i Starog šora (B-72)",
      en: "Fountain at the intersection of Kuzminska Street and Stari Šor (B-72)",
    },
    latitude: 44.9713091,
    longitude: 19.6197373,
    coverImage: "/images/IMG_0708.jpeg",
    images: ["/images/IMG_0712.jpeg"],
    description: PLACEHOLDER_HISTORY,
    shortDescription: {
      sr: "Javna česma na raskrsnici Kuzminske ulice i Starog šora",
      en: "Public fountain at the intersection of Kuzminska Street and Stari Šor",
    },
    status: "no_water",
    waterStatus: "no_water",
  },
  {
    id: 17,
    name: {
      sr: "Česma na raskrsnici Starog šora i Kralja Aleksandra Karađorđevića (B-39)",
      en: "Fountain at the intersection of Stari Šor and Kralja Aleksandra Karađorđevića Street (B-39)",
    },
    latitude: 44.9720975,
    longitude: 19.6312782,
    coverImage: "/images/IMG_0722.jpeg",
    description: PLACEHOLDER_HISTORY,
    shortDescription: {
      sr: "Javna česma na raskrsnici Starog šora i Kralja Aleksandra Karađorđevića",
      en: "Public fountain at the intersection of Stari Šor and Kralja Aleksandra Karađorđevića Street",
    },
    status: "no_water",
    waterStatus: "no_water",
  },
  {
    id: 18,
    name: {
      sr: "Česma u ulici Novi Šor",
      en: "Fountain on Novi Šor Street",
    },
    latitude: 44.9746225,
    longitude: 19.6026763,
    description: {
      sr: "Lokacija i fotografija česme biće dodate.",
      en: "The location and photo of this fountain will be added.",
    },
    shortDescription: {
      sr: "Javna česma u ulici Novi Šor",
      en: "Public fountain on Novi Šor Street",
    },
    status: "no_water",
  },
];
