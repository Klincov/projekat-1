export type Language = "sr" | "en";

export const translations: Record<Language, Record<string, string>> = {
  sr: {
    "app.title": "Česme SM",

    "nav.brand": "Česme SM",
    "nav.home": "Početna",
    "nav.about": "O česmama",
    "nav.gallery": "Galerija",
    "nav.workshops": "Interaktivne radionice",
    "nav.language": "Jezik",

    "home.eyebrow": "ISTORIJA GRADA",
    "home.title": "Javne česme Sremske Mitrovice",
    "home.intro":
      "Upoznajte javne česme Sremske Mitrovice, njihove lokacije, istoriju i značaj za grad. Istražite mapu i otkrijte priče koje se kriju iza svakog izvora vode.",
    "home.mapTitle": "Mapa javnih česama",
    "home.mapBadge": "Interaktivna mapa",

    "about.title": "O česmama",
    "about.intro": "Informacije o istoriji i značaju javnih česama.",

    "gallery.title": "Galerija",
    "gallery.intro": "Fotografije javnih česama Sremske Mitrovice.",
    "gallery.empty": "Fotografije još nisu dodate.",

    "map.fountainStatus": "Status česme",
    "status.active": "aktivna",
    "status.no_water": "nema vode",
    "water.potable": "Voda je ispravna za piće",
    "water.no_water": "Nema vode",
    "water.unknown": "Status vode nije naveden",

    "modal.eyebrow": "Javne česme Sremske Mitrovice",
    "modal.close": "Zatvori prozor",
    "modal.prev": "Prethodna slika",
    "modal.next": "Sledeća slika",
    "modal.noPhotos": "Fotografije još nisu dodate",
    "modal.photoN": "fotografija {n}",
    "modal.showPhoto": "Prikaži fotografiju {n}",
  },

  en: {
    "app.title": "Fountains SM",

    "nav.brand": "Fountains SM",
    "nav.home": "Home",
    "nav.about": "About the Fountains",
    "nav.gallery": "Gallery",
    "nav.workshops": "Interactive Workshops",
    "nav.language": "Language",

    "home.eyebrow": "HISTORY OF THE CITY",
    "home.title": "Public Fountains of Sremska Mitrovica",
    "home.intro":
      "Get to know the public fountains of Sremska Mitrovica, their locations, history and importance to the city. Explore the map and discover the stories behind each source of water.",
    "home.mapTitle": "Map of Public Fountains",
    "home.mapBadge": "Interactive map",

    "about.title": "About the Fountains",
    "about.intro":
      "Information about the history and significance of the public fountains.",

    "gallery.title": "Gallery",
    "gallery.intro": "Photos of the public fountains of Sremska Mitrovica.",
    "gallery.empty": "Photos have not been added yet.",

    "map.fountainStatus": "Fountain status",
    "status.active": "active",
    "status.no_water": "no water",
    "water.potable": "Water is safe to drink",
    "water.no_water": "No water",
    "water.unknown": "Water status not specified",

    "modal.eyebrow": "Public Fountains of Sremska Mitrovica",
    "modal.close": "Close window",
    "modal.prev": "Previous photo",
    "modal.next": "Next photo",
    "modal.noPhotos": "Photos have not been added yet",
    "modal.photoN": "photo {n}",
    "modal.showPhoto": "Show photo {n}",
  },
};
