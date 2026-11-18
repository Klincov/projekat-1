
export interface Fountain {
  id: number;
  name: string;
  latitude: number;
  longitude: number;

  // Naslovna fotografija
  coverImage: string;

  // Dodatne fotografije
  images: string[];

  // Istorija i opis
  description: string;

  shortDescription: string;
}

export const fountains: Fountain[] = [
  {
    id: 1,
    name: "Primer javne česme",

    latitude: 44.9764,
    longitude: 19.6122,

    coverImage: "/images/cesme/cesma-1-cover.jpg",

    images: [
      "/images/cesme/cesma-1-cover.jpg",
      "/images/cesme/cesma-1-2.jpg",
      "/images/cesme/cesma-1-3.jpg",
      "/images/cesme/cesma-1-4.jpg",
    ],

    description: `
      Ovde će biti ispisana istorija ove česme.

      Možeš dodavati više pasusa, informacije o godini
      izgradnje, značaju za grad i druge zanimljivosti.

      Tekst će biti prikazan u desnoj polovini velikog prozora.
    `,
    shortDescription:'Istorija skracena'},
];
