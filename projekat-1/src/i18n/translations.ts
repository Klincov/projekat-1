export type Language = "sr" | "en";

export const translations: Record<Language, Record<string, string>> = {
  sr: {
    "app.title": "Česme SM",

    "nav.brand": "Česme SM",
    "nav.home": "Početna",
    "nav.about": "O česmama",
    "nav.gallery": "Galerija",
    "nav.workshops": "Interaktivne radionice",
    "nav.project": "O projektu",
    "nav.language": "Jezik",
    "nav.openMenu": "Otvori navigaciju",
    "nav.closeMenu": "Zatvori navigaciju",

    "home.eyebrow": "ISTORIJA GRADA",
    "home.title": "Javne česme Sremske Mitrovice",
    "home.intro":
      "Upoznajte javne česme Sremske Mitrovice, njihove lokacije, istoriju i značaj za grad. Istražite mapu i otkrijte priče koje se kriju iza svakog izvora vode.",
    "home.mapTitle": "Mapa javnih česama",
    "home.mapBadge": "Interaktivna mapa",

    "project.eyebrow": "Digitalne javne česme Sremske Mitrovice",
    "project.title": "O projektu",
    "project.p1":
      "Projekat Digitalne javne česme Sremske Mitrovice nastao je u okviru Letnje škole građanskog aktivizma održane 10-14. avgusta 2026. godine u nemačkom gradu Vajmaru. Cilj projekta jeste kreiranje jedinstvene platforme putem koje građani Sremske Mitrovice mogu na jednom mestu da se upoznaju sa arteškim česmama na teritoriji grada, njihovom lokacijom, litološkim sastavom zemljišta svake česme i ispravnošću vode za piće. Takođe, projekat ima za cilj da podigne svest građana Sremske Mitrovice o značaju gradskih arteških česmi za lokalnu zajednicu, ekološkoj održivosti i većoj promociji prirodnog i kulturno-istorijskog nasleđa grada. U okviru projekta realizovano je nekoliko interaktivnih ekoloških radionica sa učenicima osnovnoškolskog i srednjoškolskog uzrasta na teritoriji Sremske Mitrovice.",
    "project.p2":
      "Projekat se realizuje u saradnji sa JKP Vodovod Sremske Mitrovice, a finansijski je podržan od strane Fondacije EVZ (iz Savezne Republike Nemačke).",

    "workshops.title": "Interaktivne radionice",
    "workshops.intro":
      "Interaktivne ekološke radionice sa učenicima osnovnoškolskog i srednjoškolskog uzrasta, organizovane u okviru projekta.",
    "workshops.participants": "Broj učesnika",
    "workshops.status.past": "Održana",
    "workshops.status.today": "Danas",
    "workshops.status.upcoming": "Predstoji",

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
    "profile.totalDepth": "Ukupna dubina profila",
    "profile.hydrogeologicalZone": "Hidrogeološka zona",
    "profile.waterTemperature": "Temperatura vode",
    "profile.lithology": "Litološki sastav",
  },

  en: {
    "app.title": "Fountains SM",

    "nav.brand": "Fountains SM",
    "nav.home": "Home",
    "nav.about": "About the Fountains",
    "nav.gallery": "Gallery",
    "nav.workshops": "Interactive Workshops",
    "nav.project": "About the Project",
    "nav.language": "Language",
    "nav.openMenu": "Open navigation",
    "nav.closeMenu": "Close navigation",

    "home.eyebrow": "HISTORY OF THE CITY",
    "home.title": "Public Fountains of Sremska Mitrovica",
    "home.intro":
      "Get to know the public fountains of Sremska Mitrovica, their locations, history and importance to the city. Explore the map and discover the stories behind each source of water.",
    "home.mapTitle": "Map of Public Fountains",
    "home.mapBadge": "Interactive map",

    "project.eyebrow": "Digital Public Fountains of Sremska Mitrovica",
    "project.title": "About the Project",
    "project.p1":
      "The Digital Public Fountains of Sremska Mitrovica project grew out of the Summer School of Civic Activism held on 10–14 August 2026 in Weimar, Germany. The project aims to create a single platform where the citizens of Sremska Mitrovica can learn about the city's artesian fountains in one place: their locations, the lithological composition of the soil at each fountain, and whether the water is safe to drink. The project also aims to raise citizens' awareness of the importance of the city's artesian fountains for the local community and for environmental sustainability, and to better promote the natural and cultural-historical heritage of the city. As part of the project, several interactive environmental workshops were held with primary and secondary school students in Sremska Mitrovica.",
    "project.p2":
      "The project is carried out in cooperation with the public utility company JKP Vodovod Sremska Mitrovica and is financially supported by the EVZ Foundation (Federal Republic of Germany).",

    "workshops.title": "Interactive Workshops",
    "workshops.intro":
      "Interactive environmental workshops with primary and secondary school students, organized as part of the project.",
    "workshops.participants": "Participants",
    "workshops.status.past": "Held",
    "workshops.status.today": "Today",
    "workshops.status.upcoming": "Upcoming",

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
    "profile.totalDepth": "Total profile depth",
    "profile.hydrogeologicalZone": "Hydrogeological zone",
    "profile.waterTemperature": "Water temperature",
    "profile.lithology": "Lithological composition",
  },
};