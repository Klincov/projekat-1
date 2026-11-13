
export interface Fountain {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  description: string;
  image?: string;
}

export const fountains: Fountain[] = [
  // Ovde dodaješ stvarne lokacije česama.
  // Primer:
  {
    id: 1,
    name: "Naziv česme",
    latitude: 44.9764,
    longitude: 19.6122,
    description: "Istorija i zanimljivosti o česmi.",
    image: "/images/cesme/cesma-1.jpg"
  }
];
