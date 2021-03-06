import mainAttractionsImg, { BG, cross } from "./mainAttractionsImg";

const attractions = [
    {
      id: '1-0',
      ro: {
        district: 'Raionul Strășeni',
        shortTitle: 'Biserica Adormirea Măicii^Domnului a Mănăstirii Căpriana',
        title: 'Biserica Adormirea Măicii Domnului a Mănăstirii Căpriana',
        desc:  '35 km față de Chișinău',
        url: "https://ro.wikipedia.org/wiki/M%C4%83n%C4%83stirea_C%C4%83priana"
      },
      en: {
        district: 'STRĂȘENI DISTRICT',
        shortTitle: 'The “Saint Mary”^Church',
        title: 'The “Saint Mary” Church',
        desc:  '35 km from Chisinau',
        url: "https://en.wikipedia.org/wiki/C%C4%83priana_monastery"
      },
      googleLoc: '47.116476, 28.510815',
      latitude: 47.116476,
      longitude: 28.510815,
      seeMore: {
        en: "See More",
        ro: "Detalii"
      },
      locLink: {
        en: "location",
        ro: "Locație"
      }
    },
    {
      id: '1-1',
      ro: {
        district: 'Raionul Strășeni',
        shortTitle: 'Complexul Etno^Cultural Vatra',
        title: 'Complexul Etno Cultural Vatra',
        desc:  '36 km față de Chișinău',
        url: "https://ro.wikipedia.org/wiki/Vatra_(complex_etno-cultural)"
      },
      en: {
        district: 'STRĂȘENI DISTRICT',
        shortTitle: 'The Ethno Cultural^Complex “Vatra”',
        title: 'The Ethno Cultural Complex “Vatra”',
        desc:  '36 km from Chisinau',
        url: "http://www.vatrafest.com/en/"
      },
      googleLoc: '47.125571, 28.272506',
      latitude: 47.175037,
      longitude: 28.497757
    },
    {
      id: '1-2',
      ro: {
        district: 'Raionul Strășeni',
        shortTitle: 'Conacul^Zamfirache Ralli',
        title: 'Conacul Zamfirache Ralli',
        desc:  'Dolna – 56 km față de Chișinău',
        url: "https://ro.wikipedia.org/wiki/Conacul_lui_Zamfirache_Ralli"
      },
      en: {
        district: 'STRĂȘENI DISTRICT',
        shortTitle: 'Zamfirache^Ralli Mansion',
        title: 'Zamfirache Ralli Mansion',
        desc:  'Dolna - 56 km from Chisinau',
        url: "https://casamare.md/en/places/muzei/doma-muzei/dom-muzei-dolna"
      },
      googleLoc: '47.125571, 28.272506',
      latitude: 47.175037,
      longitude: 28.497757
    },
    {
      id: '1-3',
      ro: {
        district: 'Raionul Strășeni',
        shortTitle: 'Vinăria^“Chateau Cojușna”',
        title: 'Vinăria “Chateau Cojușna”',
        desc:  '18 km față de Chișinău',
        url: "http://vinariapoiana.md/"
      },
      en: {
        district: 'STRĂȘENI DISTRICT',
        shortTitle: '“Chateau Cojușna”^Winery',
        title: '“Chateau Cojușna” Winery',
        desc:  '18 km from Chisinau',
        url: "https://www.winerist.com/wineries/moldova/chateau-cojusna"
      },
      googleLoc: '47.092290, 28.687662',
      latitude: 47.092290,
      longitude: 28.687662
    },
    {
      id: '1-4',
      ro: {
        district: 'Raionul Strășeni',
        shortTitle: 'Vinăria^“Poiana”',
        title: 'Vinăria “Poiana”',
        desc:  '56 km față de Chișinău',
        url: ""
      },
      en: {
        district: 'STRĂȘENI DISTRICT',
        shortTitle: '“Poiana”^Winery',
        title: '“Poiana” Winery',
        desc:  '56 km from Chisinau',
        url: ""
      },
      googleLoc: '47.055678, 28.512598',
      latitude: 47.055678,
      longitude: 28.512598
    },

    {
      id: '2-0',
      ro: {
        district: 'Raionul Orhei',
        shortTitle: 'Mănăstirea^rupestră',
        title: 'Mănăstirea rupestră',
        desc:  '54 km față de Chișinău',
        url: "https://www.libertatea.ro/stiri/manastirea-rupestra-de-la-sinca-veche-locul-in-care-se-implinesc-dorintele-misterul-templului-ursitelor-din-tara-fagarasului-2217528",
        
      },
      en: {
        district: 'ORHEI DISTRICT',
        shortTitle: 'Stone Cave^Monastery',
        title: 'Stone Cave Monastery',
        desc:  '36 km from Chisinau',
        url: "https://www.tripadvisor.com/ShowUserReviews-g777884-d8007995-r334649930-Old_Orhei-Orhei_Orhei_District.html"
      },
      
      googleLoc: '47.301438, 28.979260',
        latitude: 47.301438,
        longitude: 28.979260
    },
    {
      id: '2-1',
      ro: {
        district: 'Raionul Orhei',
        shortTitle: 'Pensiunile turistice^de la Orheiul Vechi',
        title: 'Pensiunile turistice de la Orheiul Vechi',
        desc:  '50-60 km față de Chișinău',
        url: "https://winetours.md/rom/agropensiuni"
      },
      en: {
        district: 'ORHEI DISTRICT',
        shortTitle: 'The Guest Houses in^Butuceni and Trebujeni',
        title: 'The Guest Houses in Butuceni and Trebujeni',
        desc:  '50-60 km from Chisinau',
        url: "https://winetours.md/rom/agropensiuni"
      },
      
      googleLoc: '47.317277, 28.966495',
            latitude: 47.317277,
            longitude: 28.966495,
    },
    {
      id: '2-2',
      ro: {
        district: 'Raionul Orhei',
        shortTitle: 'Complexul de Meșteșuguri^“Arta Rustică”',
        title: 'Complexul de Meșteșuguri “Arta Rustică”',
        desc:  'Clișova Nouă – 67 km față de Chișinău',
        url: "https://rusticart.md/"
      },
      en: {
        district: 'ORHEI DISTRICT',
        shortTitle: 'The Crafts Complex “Rustic Art”^Clișova Nouă^',
        title: 'The Crafts Complex "Rustic Art", Clișova Nouă',
        desc:  '67 km from Chisinau',
        url: "https://rusticart.md/"
      },
      
      googleLoc: '47.495435, 28.634978',
            latitude: 47.495435,
            longitude: 28.966495
    },
    {
      id: '2-3',
      ro: {
        district: 'Raionul Orhei',
        shortTitle: 'Casa – Muzeu^“Alexandru Donici”',
        title: 'Casa–Muzeu “Alexandru Donici”',
        desc:  '43 km față de Chișinău',
        url: "https://ro.wikipedia.org/wiki/Casa-muzeu_%E2%80%9EAlexandru_Donici%E2%80%9D"
      },
      en: {
        district: 'ORHEI DISTRICT',
        shortTitle: '“Alexandru Donici”^Museum',
        title: '“Alexandru Donici” Museum',
        desc:  '43 km from Chisinau',
        url: "https://casamare.md/en/places/muzei/doma-muzei/dom-muzei-aleksandr-donich"
      },
      
      googleLoc: '47.289457, 28.671657',
            latitude: 47.495435,
            longitude: 28.671657
    },
    {
      id: '2-4',
      ro: {
        district: 'Raionul Orhei',
        shortTitle: 'Vinăria^Brănești',
        title: 'Vinăria Brănești',
        desc:  '49 km față de Chișinău',
        url: "https://winetours.md/rom/excursii-la-vinarii/pivnitele-din-branesti-epoca-de-piatra"
      },
      en: {
        district: 'ORHEI DISTRICT',
        shortTitle: '“Brănești”^Winery',
        title: '“Brănești” Winery',
        desc:  '49 km from Chisinau',
        url: "https://winetours.md/eng/winery-tours/branesti-sellars-stone-age"
      },
      
      googleLoc: '47.313352, 28.935032',
            latitude: 47.313352,
            longitude: 28.935032
    },
    {
      id: '2-5',
      ro: {
        district: 'Raionul Orhei',
        shortTitle: 'Vinăria Chateau^Vartely',
        title: 'Vinăria Chateau Vartely',
        desc:  '49 km față de Chișinău',
        url: "https://www.vartely.md/"
      },
      en: {
        district: 'ORHEI DISTRICT',
        shortTitle: '“Chateau Vartely”^Winery',
        title: '“Chateau Vartely” Winery',
        desc:  '49 km from Chisinau',
        url: "https://www.vartely.md/en"
      },
      
      googleLoc: '47.380785, 28.834460',
            latitude: 47.380785,
            longitude: 28.834460
    },

    {
      id: '3-0',
      ro: {
        district: 'Raionul Soroca',
        shortTitle: 'Muzeul de Istorie și^Etnografie a orașului Soroca',
        title: 'Muzeul de Istorie și Etnografie a orașului Soroca',
        desc:  '153 km față de Chișinău',
        url: "http://www.primsoroca.md/uploads/article/PTA_2_Reabilitarea_Muzeului_de_Istorie_si_Etnografie_din_Soroca_eSOu.pdf"
      },
      en: {
        district: 'SOROCA DISTRICT',
        shortTitle: 'Museum of^Soroca',
        title: 'Museum of Soroca',
        desc:  '153 km from Chisinau',
        url: "https://www.lonelyplanet.com/moldova/soroca/attractions/soroca-museum-of-history-ethnography/a/poi-sig/1252160/1324753"
      },
      googleLoc: '48.155368, 28.302586',
            latitude: 48.155368,
            longitude: 28.302586
    },
    {
      id: '3-1',
      ro: {
        district: 'Raionul Soroca',
        shortTitle: 'Lumânarea^Renucoștinței',
        title: 'Lumânarea Renucoștinței',
        desc:  '157 km față de Chișinău',
        url: ""
      },
      en: {
        district: 'SOROCA DISTRICT',
        shortTitle: 'The Candle of^Gratitude',
        title: 'The Candle of Gratitude',
        desc:  '157 km from Chisinau',
        url: ""
      },
      googleLoc: '48.137215, 28.305372',
            latitude: 48.137215,
            longitude: 28.305372
    },
    {
      id: '3-2',
      ro: {
        district: 'Raionul Soroca',
        shortTitle: 'Dealul^Țiganilor',
        title: 'Dealul Țiganilor',
        desc:  '156 km față de Chișinău',
        url: "https://www.travel.md/ro/locuri-de-vizitat/atractii-turistice/monumentul-lumanarea-recunostintei/"
      },
      en: {
        district: 'SOROCA DISTRICT',
        shortTitle: 'Gypsy Hill^Soroca',
        title: 'Gypsy Hill',
        desc:  '156 km from Chisinau',
        url: "https://www.atlasobscura.com/places/gypsy-hill"
      },
      googleLoc: '48.159501, 28.291855',
            latitude: 48.159501,
            longitude: 28.291855
    },

    {
      id: '4-0',
      ro: {
        district: 'Raionul Anenii Noi',
        shortTitle: 'Muzeul de Istorie și^Etnografie al satului Mereni',
        title: 'Muzeul de Istorie și Etnografie al satului Mereni',
        desc:  '26 km față de Chișinău',
        url: "https://mereni.md/muzeul-de-istorie-si-etnografie/"
      },
      en: {
        district: 'ANENII NOI DISTRICT',
        shortTitle: 'The Mereni Village Museum^of History and Ethnography',
        title: 'The Mereni Village Museum of History and Ethnography',
        desc:  '26 km from Chisinau',
        url: "https://en.wikipedia.org/wiki/Anenii_Noi_District"
      },
      googleLoc: '46.963515, 29.055452',
            latitude: 46.963515,
            longitude: 29.055452
    },
    {
      id: '4-1',
      ro: {
        district: 'Raionul Anenii Noi',
        shortTitle: 'Complexul Memorial^“Capul de Pod Șerpeni”',
        title: 'Complexul Memorial “Capul de Pod Șerpeni”',
        desc:  '61 km față de Chișinău',
        url: "https://ro.wikipedia.org/wiki/Complexul_memorial_%E2%80%9ECapul_de_pod_%C8%98erpeni%E2%80%9D"
      },
      en: {
        district: 'ANENII NOI DISTRICT',
        shortTitle: 'The Memorial Complex^"Cap de Pod Șerpeni',
        title: 'The Memorial Complex "Cap de Pod Șerpeni"',
        desc:  '61 km from Chisinau',
        url: "https://en.wikipedia.org/wiki/Capul_de_pod_%C8%98erpeni_Memorial_Complex"
      },
      googleLoc: '47.033017, 29.353023',
            latitude: 47.033017,
            longitude: 29.353023
    },
    {
      id: '4-2',
      ro: {
        district: 'Raionul Anenii Noi',
        shortTitle: 'Vinăria^Asconi',
        title: 'Vinăria Asconi',
        desc:  ' 29 km față de Chișinău',
        url: "https://asconi.md/"
      },
      en: {
        district: 'ANENII NOI DISTRICT',
        shortTitle: '“Asconi”^Winery',
        title: '“Asconi” Winery',
        desc:  '29 km from Chisinau',
        url: "https://asconi.md/?lang=en"
      },
      googleLoc: '46.839569, 29.027792',
            latitude: 46.839569,
            longitude: 29.027792
    },
    {
      id: '4-3',
      ro: {
        district: 'Raionul Anenii Noi',
        shortTitle: 'Castel Mimi^Anenii Noi',
        title: 'Castel Mimi',
        desc:  '40 km față de Chișinău',
        url: "https://www.castelmimi.md/"
      },
      en: {
        district: 'ANENII NOI DISTRICT',
        shortTitle: '“Mimi”^Castle Winery',
        title: '“Mimi” Castle Winery',
        desc:  '40 km from Chisinau',
        url: "https://www.castelmimi.md/en_index.html"
      },
      googleLoc: '46.891031, 29.292984',
            latitude: 46.891031,
            longitude: 29.292984
    },

    {
      id: '5-0',
      ro: {
        district: 'Chișinău',
        shortTitle: 'Monumentul lui Ștefan^cel Mare și Sfânt',
        title: 'Monumentul lui Ștefan cel Mare și Sfânt',
        desc:  'Grădina Publică Ștefan cel Mare',
        url: "https://ro.wikipedia.org/wiki/Statuia_lui_%C8%98tefan_cel_Mare_din_Chi%C8%99in%C4%83u"
      },
      en: {
        district: 'Chisinau',
        shortTitle: '“Ștefan cel Mare și Sfânt”^Monument',
        title: '“Ștefan cel Mare și Sfânt” Monument',
        desc:  'Stephen the Great Public Garden',
        url: "https://en.wikipedia.org/wiki/Stephen_the_Great_Monument"
      },
      googleLoc: '47.025563, 28.830966',
            latitude: 47.025563,
            longitude: 28.830966
    },
    {
      id: '5-1',
      ro: {
        district: 'Chișinău',
        shortTitle: 'Muzeul Național de^Istorie a Moldovei',
        title: 'Muzeul Național de Istorie a Moldovei',
        desc:  'Strada 31 August 1989 121 A',
        url: "https://www.nationalmuseum.md/"
      },
      en: {
        district: 'Chisinau',
        shortTitle: 'National Museum of^History of Moldova',
        title: 'National Museum of History of Moldova',
        desc:  '31 August 1989 str., 115',
        url: "https://www.nationalmuseum.md/en/"
      },
      googleLoc: '47.022813, 28.828561',
            latitude: 47.022813,
            longitude: 28.828561
    },    {
      id: '5-2',
      ro: {
        district: 'Chișinău',
        shortTitle: 'Muzeul de Etnografie^și Istorie Naturală',
        title: 'Muzeul de Etnografie și Istorie Naturală',
        desc:  'Strada Mihail Kogălniceanu',
        url: "http://www.muzeu.md/"
      },
      en: {
        district: 'Chisinau',
        shortTitle: 'National Museum of Ethnography^and Natural History',
        title: 'National Museum of Ethnography and Natural History',
        desc:  'Mihail Kogălniceanu Str.',
        url: "https://www.visit.md/en/tour/national-museum-of-ethnography-and-natural-history/"
      },
      googleLoc: '47.022813, 28.828561',
            latitude: 47.022813,
            longitude: 28.828561
    },    {
      id: '5-3',
      ro: {
        district: 'Chișinău',
        shortTitle: 'Muzeul^de Artă',
        title: 'Muzeul Național de Artă al Moldovei',
        desc:  'Strada 31 August 1989 115',
        url: "https://www.mnam.md/"
      },
      en: {
        district: 'Chisinau',
        shortTitle: 'Museum^of Art of Moldova',
        title: 'National Museum of Art of Moldova',
        desc:  '31 August 1989 str., 115',
        url: "https://www.mnam.md/?lang=en"
      },
      googleLoc: '47.022075, 28.831160',
            latitude: 47.022075,
            longitude: 28.831160
    },    {
      id: '5-4',
      ro: {
        district: 'Chișinău',
        shortTitle: 'Muzeul de Istorie^a orașului Chișinău',
        title: 'Muzeul de Istorie a orașului Chișinău',
        desc:  'Turnul de Apă - Strada Alexei Mateevici 60A',
        url: "https://ro.wikipedia.org/wiki/Turnul_de_ap%C4%83_din_Chi%C8%99in%C4%83u"
      },
      en: {
        district: 'Chisinau',
        shortTitle: 'Chișinău History Museum -^Water Tower',
        title: 'Chișinău History Museum - Water Tower',
        desc:  'Water Tower - 60A Alexei Mateevici Str.',
        url: "https://en.wikipedia.org/wiki/Chi%C8%99in%C4%83u_Water_Tower"
      },
      googleLoc: '47.019455, 28.822907',
            latitude: 47.019455,
            longitude: 28.822907
    },    {
      id: '5-5',
      ro: {
        district: 'Chișinău',
        shortTitle: 'Combinatul de vinuri^“Cricova”',
        title: 'Combinatul de vinuri “Cricova”',
        desc:  '16 km față de Chișinău',
        url: "https://cricova.md/"
      },
      en: {
        district: 'Chisinau',
        shortTitle: '“Cricova”^Wine cellars',
        title: '“Cricova” Wine cellars',
        desc:  '16 km from Chisinau',
        url: "https://cricova.md/?lang=en"
      },
      googleLoc: '47.138394, 28.855884',
            latitude: 47.138394,
            longitude: 28.855884
    },
    {
      id: '5-6',
      ro: {
        district: 'Chișinău',
        shortTitle: 'Combinatul de vinuri de calitate^“Mileștii Mici”',
        title: 'Combinatul de vinuri de calitate “Mileștii Mici”',
        desc:  '14 km față de Chișinău',
        url: "https://www.milestii-mici.md/ro/"
      },
      en: {
        district: 'Chisinau',
        shortTitle: '“Mileștii Mici”^Wine cellars',
        title: '“Mileștii Mici” Wine cellars',
        desc:  '14 km from Chisinau',
        url: "https://www.milestii-mici.md/en/"
      },
      googleLoc: '46.921757, 28.820170',
            latitude: 46.921757,
            longitude: 28.820170
    },

    {
      id: '6-0',
      ro: {
        district: 'Transnistria',
        shortTitle: 'Cetatea^Tighina',
        title: 'Cetatea Tighina',
        desc:  '61 km față de Chișinău',
        url: "https://ro.wikipedia.org/wiki/Cetatea_Tighina"
      },
      en: {
        district: 'TRANSNISTRIA',
        shortTitle: 'Tighina^Fortress',
        title: 'Tighina Fortress',
        desc:  '61 km from Chisinau',
        url: "https://en.wikipedia.org/wiki/Bender,_Moldova"
      },
      googleLoc: '46.837984, 29.487439',
            latitude: 46.837984,
            longitude: 29.487439
    },
    {
      id: '6-1',
      ro: {
        district: 'Transnistria',
        shortTitle: 'Complexul Memorial^“Piața Eroilor”',
        title: 'Complexul Memorial “Piața Eroilor”',
        desc:  '78 km față de Chișinău',
        url: "https://www.prospect.md/ro/history/morminte-fratesti-funerare-in-masa/complexul-memorial-piata-eroilor.html"
      },
      en: {
        district: 'TRANSNISTRIA',
        shortTitle: '"Piața Eroilor"^Memorial Complex',
        title: '"Piața Eroilor" Memorial Complex',
        desc:  '78 km from Chisinau',
        url: "https://www.prospect.md/en/history/sommon-grave-honour-s-bed/memorial-complex-heroes-square.html"
      },
      googleLoc: '46.835681, 29.608109',
            latitude: 46.835681,
            longitude: 29.608109
    },

    {
      id: '7-0',
      ro: {
        district: 'Raionul Rezina',
        shortTitle: 'Mănăstirea^Saharna',
        title: 'Mănăstirea Saharna',
        desc:  '106 km față de Chișinău',
        url: "https://ro.wikipedia.org/wiki/M%C4%83n%C4%83stirea_Saharna"
      },
      en: {
        district: 'REZINA DISTRICT',
        shortTitle: 'Saharna^Monastery',
        title: 'Saharna Monastery',
        desc:  '106 km from Chisinau',
        url: "https://en.wikipedia.org/wiki/Saharna_Monastery"
      },
      googleLoc: '47.695217, 28.965509',
            latitude: 47.695217,
            longitude: 28.965509
    },
    {
      id: '7-1',
      ro: {
        district: 'Raionul Rezina',
        shortTitle: 'Hanul lui Hanganu,^Lalova',
        title: 'Hanul lui Hanganu, Lalova',
        desc:  '97 km față de Chișinău',
        url: "https://hanulhanganu.md/"
      },
      en: {
        district: 'REZINA DISTRICT',
        shortTitle: 'Hanganu\'s inn,^Lalova',
        title: 'Hanganu\'s inn, Lalova',
        desc:  '97 km from Chisinau',
        url: "https://hanulhanganu.md/"
      },
      googleLoc: '47.566409, 29.020412',
            latitude: 47.566409,
            longitude: 29.020412
    },

    {
      id: '8-0',
      ro: {
        district: 'Raionul Șoldănești',
        shortTitle: 'Stejarul lui Ștefan cel Mare',
        title: 'Stejarul lui Ștefan cel Mare',
        desc:  'Stejarul lui Ștefan cel Mare',
        url: ""
      },
      en: {
        district: 'Șoldănești District',
        shortTitle: 'Stefan the Great\'s Oak',
        title: 'Stefan the Great\'s Oak',
        desc:  'Stefan the Great\'s Oak',
        url: ""
      },
      googleLoc: '47.175037, 28.497757',
            latitude: 47.175037,
            longitude: 28.497757
    },

    {
      id: '9-0',
      ro: {
        district: 'Raionul Ștefan Vodă',
        shortTitle: 'Complex turistic Purcari,^Vinăria Purcari',
        title: 'Complex turistic Purcari, Vinăria Purcari',
        desc:  '112 km față de Chișinău',
        url: "https://purcari.wine/ro/"
      },
      en: {
        district: 'ȘTEFAN VODĂ DISTRICT',
        shortTitle: '“Purcari Winery”,^Purcari tourist complex',
        title: '“Purcari Winery”, Purcari tourist complex',
        desc:  '112 km from Chisinau',
        url: "https://purcari.wine/en/"
      },
      googleLoc: '46.531607, 29.87191',
            latitude: 46.531607,
            longitude: 29.871911
    },
    {
      id: '9-1',
      ro: {
        district: 'Raionul Ștefan Vodă',
        shortTitle: 'Complex vitivinico^“ET Cetera”',
        title: 'Complex vitivinicol “ET Cetera”',
        desc:  '119 km față de Chișinău',
        url: "https://purcari.wine/ro/"
      },
      en: {
        district: 'ȘTEFAN VODĂ DISTRICT',
        shortTitle: 'Wine Complex^“ET Cetera”',
        title: '“ET Cetera” Wine Complex',
        desc:  '119 km from Chisinau',
        url: "https://purcari.wine/en/"
      },
      googleLoc: '46.453647, 29.923324',
            latitude: 46.453647,
            longitude: 29.923324
    },
    {
      id: '9-2',
      ro: {
        district: 'Raionul Ștefan Vodă',
        shortTitle: 'Gospodăria meșterului popular^Pavel Ţăranu s. Cioburciu',
        title: 'Gospodăria meșterului popular Pavel Ţăranu s. Cioburciu',
        desc:  '126 km față de Chișinău',
        url: "http://www.hailatara.md/rooms/63#.XtoewzozaUk"
      },
      en: {
        district: 'ȘTEFAN VODĂ DISTRICT',
        shortTitle: '“Pavel Taranu”^folk craftsman household',
        title: '“Pavel Taranu” folk craftsman household, Cioburciu Village',
        desc:  '126 km from Chisinau',
        url: "http://www.hailatara.md/rooms/63#.XtoewzozaUk"
      },
      googleLoc: '46.596106, 29.726292',
            latitude: 46.596106,
            longitude: 29.726292
    },

    {
      id: '10-0',
      ro: {
        district: 'Raionul Hâncești',
        shortTitle: 'Conacul “Manuc Bey”',
        title: 'Conacul “Manuc Bey”',
        desc:  '36 km față de Chișinău',
        url: ""
      },
      en: {
        district: 'Raionul Hâncești',
        shortTitle: 'Complexul istorico-arhitectural Manuc Bey',
        title: 'Complexul istorico-arhitectural Manuc Bey',
        desc:  '36 km from Chisinau',
        url: ""
      },
      googleLoc: '46.825920, 28.582210',
            latitude: 46.825920,
            longitude: 28.582210
    },

    {
      id: '11-0',
      ro: {
        district: 'Raionul Ocnița',
        shortTitle: 'Conacul lui Constantin Stamati',
        title: 'Conacul lui Constantin Stamati',
        desc:  '237 km față de Chișinău',
        url: ""
      },
      en: {
        district: 'Raionul Ocnița',
        shortTitle: 'Constantin Stamati\'s mansion',
        title: 'Constantin Stamati\'s mansion',
        desc:  '237 km from Chisinau',
        url: ""
      },
      googleLoc: '48.383240, 27.436885',
            latitude: 48.383240,
            longitude: 27.436885
    }
];

const texts = {

  ro0: `Dintre locașele monastice din Republica Moldova, cel mai vechi și cel mai semnificativ din punct de vedere al spiritualității și valorii istorice este Mănăstirea Căpriana. 

^ Conform legendelor, dar și a unor documente scrise din secolele XVII-XIX, Voievodul Ștefan cel Mare și Sfânt este considerat ctitor de frunte al Mănăstirii Căpriana, dar și alți mari voievozi ai Țării Moldovei: Alexandru cel Bun, Petru Rareș, Alexandru Lăpușneanu și Vasile Lupu.

^ Străjuită de stejarii noduroși și înnegriți de vreme ai Codrilor Lăpușnei (sub coroana unuia se zice că Ștefan și-a tras sufletul după una din nenumăratele bătălii), mănăstirea își poartă cu smerenie tainele, lăsând legendele să zboare liber în jurul ei ca niște păsări în noapte. Cronicile timpului afirmă că în anul 1429, printr-un uric de-al domnului Alexandru cel Bun, Căpriana primește statutul de mănăstire domnească.

^ Prima biserică din piatră, cu hramul Adormirea Maicii Domnului, zidită în secolul al XV, reprezintă o operă arhitecturală clasică moldovenească din vremea lui Ștefan cel Mare. Urmare a distrugerilor provocate de cutremurele de pământ, vechea biserică de la Căpriana a fost refăcută de domnul Petru Rareş, în anul 1542.

^ În prezent Mănăstirea Căpriana este un Locaș Sfânt al Ortodoxiei, în cadrul căreia sunt adăpostite moaștele Sf. Ierarh Gavril, iar în memoria Voievodului Ștefan cel Mare și Sfânt la intrarea în mănăstire a fost înălțat un monument. 

^ Lucrările de reconstrucție de ultimă oră constituie un argument în plus de a vizita această destinație, plasând-o în topul celor mai vizitate atracții turistice. Stilul de viață conservat al monahilor, bucătăria de excepție, peisajul inconfundabil, toate acestea constituie argumente pentru un îndemn la drumeție. Mânăstirea poate fi vizitată zilnic. 
^ Mănăstirea Căpriana este situată în Republica Moldova, la 35 de km. față de Chișinău.
`,

ro1: `Orheiul Vechi, cu surprinzătoarele sale defileuri ce adăpostesc vechi rămășițe de cetăți, necropole, băi antice, chilii săpate în malul abrupt de către călugări, reprezintă un peisaj arheologic de excepție aflat în preajma satelor Trebujeni și Butuceni. Natura a construit aici un amfiteatru de o rară frumuseţe, săpat de apele nu prea mari, dar îndărătnice al Răutului, ce a fost folosit, de milenii, și pentru condiţiile sale remarcabile de apărare. 

^ Pe parcursul istoriei acest loc a adăpostit multiple fortificații geto-dace (secolele VII-I î.Hr.), așezări vechi românești (secolele V-XIII), două urbe medievale - orașul mongol Șehr al-Cedid (cca 1330-1369) și orașul Orheiul Vechi (cca 1370-1540), ultimul cuprinzând și splendida cetate a Orheiului, edificată la hotarul de est al Țării Moldova de către Ștefan cel Mare. Prădalnicele năvăliri ale tătarilor din vara anului 1469 l-au făcut pe Ștefan cel Mare să întărească apărarea țării de-a lungul Nistrului, construind și o citadelă întărită la Orhei, astfel protejând și căile comerciale ce treceau prin acest oraș.

^ Orheiul Vechi este și cel mai important nod turistic din Republica Moldova. În această zonă există un patrimoniu cultural-natural de excepție, un patrimoniu cultural imaterial bine conservat, precum și o infrastructură turistică dezvoltată cu pensiuni și restaurante. În preajmă se află cunoscutele Pivnițe Brănești amenajate în galeriile subterane, complexul rupestru „Epoca de piatră” și conacul Balioz (secolul XIX) din Ivancea. La sfârșitul verii se organizează Festivalul de muzică clasică în aer liber “DescOperă”.  

^ Cetatea Orheiul Vechi se află în Republica Moldova, la o distanță de 52 de km. față de Chișinău.

`,

ro2: `
Bijuteria calmă și imperturbabilă a nordului, Cetatea Soroca străjuiește de peste cinci sute de ani curgerea apelor Nistrului. Războaiele, cataclismele, schimbările vertiginoase de regimuri și indiferența oamenilor n-au reușit s-o afecteze prea mult. 

^ Cetatea Soroca a fost ctitorită de Ștefan cel Mare pe malurile Nistrului pentru a întări apărarea regiunilor de nord ale Moldovei – ținuturile Hotinului, Orheiului și ale Sorocii, în urma atacurilor virulente ale armatelor sultanului Bayezid, după ce a pierdut cetățile de la Dunăre și de la Marea Neagră.

^ Pentru prima dată fortificația este pomenită în hrisoave la 12 iulie 1499 în legătură cu un oarecare “Coste, pârcălab de Soroca”. Ștefan cel Mare avea nevoie de această cetate nu numai din punct de vedere militar și politic, ci și economic. Vadul era folosit nu numai de invadatori, ci și de către negustori, deoarece prin valea Nistrului treceau două căi comerciale importante care se aflau sub protecția cetății. 

^ Fortăreața de lemn și pământ a continuat să funcționeze cu același statut și destinație și pe timpul feciorilor lui Ștefan - Bogdan cel Orb și Ștefăniță, și în prima domnie a lui Petru Rareș. Ulterior acesta construiește, pe resturile vechii cetăți, o cetate nouă, din piatră, care se păstrează și astăzi într-o stare excepțională.

^ Tot la Soroca, pe malul abrupt al Nistrului, ca o săgeată ce se împlântă în cer, se înalță Lumânarea Recunoștinței, un monument al Poetului anonim, autor al Baladei Miorița. Cei care îndrăznesc să urce cele 600 de trepte până la ea de la malul râului, sunt răsplătiți cu o spectaculoasă panoramă asupra întregului oraș. 

^ Cetatea Soroca se află în Republica Moldova, la o distanța de 155 de km. față de Chișinău.

`,

ro3: `
Istoria scrisă a satului Mereni începe în anul 1475, când Domnitorul Țării Moldovei, Ștefan cel Mare, oferă sătenilor o diplomă prin care stipula drepturile sătenilor asupra moșiei strămoșești. Apărat de codri, situat pe coline, Mereniul există pentru a ilustra versurile baladei “…pe un picior de plai, pe o gură de rai”.  Cele mai vechi urme de locuință umană sunt datate cu circa 6000 de ani în urmă. Păstori nomazi veniți din stepele euroasiatice au îndrăgit atât de tare aceste locuri mănoase, încât au hotărât să-și schimbe însăși esența propriei existențe și să devină sedentari. 
 
^ În timpul săpăturilor arheologice de lângă Mereni au fost găsite vase de ceramică din mil. IV-III î.H., armament din sec. IV-III î.H, - vârfuri de săgeți din argint și bronz, spade din fier, pumnale, monezi de aur și argint ce pot fi văzute în Muzeul de Istorie și Etnografie din localitate, amenajat într-un edificiu istoric de la începutul secolului XX.
 
^ Mănăstirea Căpriana a fost ctitoria unor răzeși din satul Mereni, iar fiica unuia dintre cei mai de vază oameni ai locului, nepoata egumenului mănăstirii, Marena, devine soția lui Alexandru cel Bun. Frumoasă și plină de talente tânăra doamnă, brodează timp de patru ani și dăruiește mănăstirii în anul 1431 un prețios epitrahil, care este considerată ca fiind cea mai veche broderie de acest fel cunoscută până astăzi. 
 
^ Acum Mereni este un sat de gospodari care, însă, a fost afectat puternic de regimul sovietic, prin represiuni și deportări masive a localnicilor în Siberia, în anii 40 ai secolului XX. Sătenii păstrează cu grijă memoria acelor cumplite vremuri, iar Muzeul în aer liber dedicat memoriei victimelor deportărilor și represiunilor politice este singurul de acest gen din Republica Moldova. Satul Mereni se află la o distanța de 25 de km față de orașul Chișinău. 

`,

ro4: `Actuala capitală a Republicii Moldova, Chișinăul apare în documente, la data de 17 iulie 1436, când domnitorii Iliaș și Ștefan al II-lea (în acea perioadă domnitorii se schimbau mai des decât obielele opincilor, uneori mai domneau și în duet) i-au dat lui Oncea logofăt mai multe moșii ca răsplată pentru slujba credinciosă. Mai târziu, pe la anul 1466, printr-un document emis la curtea lui Ștefan cel Mare, seliștea Chișinăului, de la Fântâna Albișoarei, cu tot cu moară, îi revine lui Vlaicu-Pârcălab, unchiul acestuia. Așa că Vlaicu-Pârcălab (al cărui nume îl poartă azi una din străzile centrale) a fost, cum s-ar zice, proprietarul viitoarei capitale, care apoi a revenit fiilor și nepoților, cam vreme de o sută de ani. Pe la anul 1641, domnitorul Vasile Lupu trece Chișinăul sub stăpânirea Mănăstirii Sfânta Vineri din Iași și așa rămâne până în secolul XIX.

^ Partea de jos a orașului e construită în stil medieval, cu străzi sub formă de raze, răsfirate în jurul Pieței Vechi.  Granița dintre orașul vechi și cel nou, construită după anul 1812, adică după anexarea Basarabiei de către Imperiul Rus, cu străzi paralele și perpendiculare, după modelul rusesc, era pe unde trece acum strada Columna. 

^ Cartierele moderne ale orașului s-au trasat după mâna ușoară a mitropolitului Bănulescu-Bodoni, persoană extrem de influentă pe acele timpuri, și schițele inginerului hotarnic Ozmidov – catedrala, grădina publică, mitropolia… Nicolae Iorga, oaspete des al Chișinăului, îl descrie privind de pe geamul hotelului Suisse, clădirea ce se află și acum la colțul bulevardului Ștefan cel Mare cu strada Mitropolit Bănulescu-Bodoni: În otel sunt și români. Încolo par a fi numai străini. Toți umblă foarte măreț, chiar și un bătrân pleșuv, care are un cucui mare, ca un nasture, drept în vârful goliciunii capului său. Femeile, toate pudrate, foșnesc în rochii de mătasă. Mă gândesc la echipajele de o înaltă și scumpă eleganță, trase de cai focoși, care au fulgerat pe lângă birja nenorocitului ce ne-a adus aici. Am văzut și rochii de dantele târâte prin praful străzilor. Aici ne-au întrecut…

^ Chișinăul secolului XIX s-ar datora celebrului său primar, Carol Schmidt, arhitectului Alexandru Bernardazzi, inginerului Nicolae Țiganco, Chișinăul postbelic - lui Alexei Șciusev, cel mai mare arhitect pe care l-a avut Uniunea Sovietică, autor, pe lângă circa 1000 de proiecte în URSS, dar și în lume, al Mauzoleului lui Lenin de pe Piața Roșie din Moscova. 
^ Monumentul lui Ștefan cel Mare și Sfânt a fost inaugurat la 29 aprilie 1928, cu ocazia împlinirii a 10 ani de la Unirea Basarabiei cu România. Acesta reprezintă una din cele mai importante opere ale reputatului sculptor basarabean din perioada interbelică, Alexandru Plămădeală.  În perioada celui de-al Doilea Război Mondial a fost transferat de două ori în România. Apoi, a fost mutat din loc în loc, pentru a nu  face concurență monumentului lui Lenin și tocmai la 31 august 1990, când s-a marcat un an de la proclamarea Limbii Române drept limbă de stat, a fost dezvelit după restaurare în conformitate cu proiectul inițial. Acum acest monument este un fel de Grad Zero, locul de unde pornesc toate, atât pentru locuitorii capitalei, cât și pentru oaspeții ei. 

`,

ro5: `
Niciuna dintre cetățile Moldovei nu a avut o viață atât de tumultoasă ca Tighina. Croită și răscroită, cucerită și pierdută, iată că a rezistat timpurilor, tunurilor și nepăsării oamenilor și, de peste 500 de ani “…aceste ziduri de un pitoresc remarcabil se oglindesc, tăcute, în apa Nistrului, înălţându-şi jgheaburile ca nişte pumni strânşi ai Europei”, precum zicea Octavian Goga. 

^ În sec XV, Tighina devine un punct important în drumul comercial moldovenesc care lega Europa Occidentală cu Orientul, numit și Drumul Tătăresc.

^ Dar, acest drum și acest vad nu era important doar pentru negustori. Hoardele tătărești atacă tot mai des și mai virulent țara, iar Ștefan cel Mare se vede nevoit să construiască la acest vad al Nistrului o cetate. Ridicată întâi din pământ și lemn, cu şanţ şi val de apărare, a fost ulterior întărită tot mai mult, astfel că cetatea a ajuns să fie considerată drept cea mai fortificată din întreaga Moldovă și a fost de necucerit pe vremea întregii domnii a Voievodului Ștefan cel Mare, constata Dimitrie Cantemir în “Descrierea Moldovei”.

^ În vara anului 1538, mult după moartea Voievodului, sultanul Suleyman Magnificul intră în Moldova și ocupă Tighina. Se instaurează regimul suzeranității și o parte din teritoriul Moldovei este transformată în provincie a imperiului otoman, adică în raia. Tighina devine raia și este rebotezată Bender - în turcă trecătoare întărită sau port. 

^ Turcii hotărăsc să fortifice cetatea lui Ștefan cel Mare, construind, încă un rând de pereți de piatră. În pofida încercărilor repetate ale lui Ion Vodă cel Viteaz și Mihai Viteazul, Tighina nu a mai fost recuperată de către români.

^ După înfrângerea de la Poltava (1709), la Bender s-a refugiat pentru câțiva ani regele Suediei Carol al XII-lea. Se presupune că în suita acestuia era și celebrul baron Munchausen, căruia chiar i s-a înălțat un bust în preajma cetății.

^ Cetatea a avut mult de suferit în timpul războiului ruso-turc din 1768-1774, iar în noiembrie 1789 a fost cucerită de kneazul Potiomkin, primind, drept apreciere și omagiu, o coroană de lauri din aur de la Ecaterina a II-a. Cetatea a fost restaurată între 2008 şi 2012. Cetatea Tigina/Bender se află la o distanța de 51 km. față de Chișinău.

`,

ro6: `Mănăstirea Ţîpova este o mănăstire rupestră aflată pe malul drept al Nistrului, la 42 de kilometri sud de oraşul Rezina. A fost săpată în malul înalt şi abrupt de piatră, la 100 de metri mai sus de nivelul Nistrului. În apropiere se află satul Ţîpova şi un rîuleţ cu acelaşi nume.
 
^ Loc de pelerinaj și de turism mistic, Țîpova este înconjurată de o aură densă de legende, mituri și adevăruri spuse cu jumătate de gură. Pe aici, prin galeriile înfricoșătoare ale mănăstirii rupestre, unii romantici încă mai caută rămășițele lumești ale cântărețului antic Orfeu care, se zice, a fost îngropat în peștera uneia dintre cascadele locale. Altă fantomă care hălăduiește pe aici, neconsolată, dar plină de nobile intenții, este a sufletului nepocăit al soției lui Ștefan cel Mare – Maria Voichița, care s-ar fi cununat între pereții acestei mănăstiri. Li se arată celor aleși și îi conduce discret pe cărări întortocheate și treceri înguste, claustrofobice, către comorile îngropate altădată aici. 

^ Fiind considerat un „Loc al Puterii”, la Țîpova vin ufologi, cabaliști, mistici, yoghini, cititori în aure, bioenergeticieni din toate colțurile lumii. De asemenea, mulți cred că „pe fundul Cascadei Morților se găsește o piatră care îndeplinește dorințele”.

^ Acest complex monastic se evidențiază printr-o compoziție arhitecturală complicată, alcătuită din biserică și clopotniță, chilii, balcoane, terase săpate pe trei nivele, rămășițele unei scări grandioase ce cobora spre râu. Pe timpuri, complexul avea și menire strategică – de a reține năvălirea hunilor, sciților, mongolilor, polonilor, tătarilor și turcilor. Fiecare dintre mănăstirile rupestre reprezintă complexe cu mai multe încăperi. De exemplu, mănăstirea rupestră de la Țipova, închisă în 1949 și redeschisă în 1994, este alcătuită din trei complexe monastice. Primul include Biserica ”Sf. Cruci” și câteva chilii, înființată, în sec. XI - XII. Al doilea include Biserica ”Sf. Nicolae”, săpată în sec. XIV - XV. Al treilea cuprinde 18 încăperi din sec. XVI - XVIII, unite prin treceri interioare, cu scări, galerii deschise și balcoane. Mănăstirea Țipova se află la o distanța de 92 km față de Chișinău.

`,

ro7: `Dominând împrejurimile cu statura sa voievodală, acest stejar are o istorie pe care puține ființe vii ar fi putut s-o aibă.  E pomenit pentru prima dată în documentele locului la 1456, cu un an înainte de începutul domniei lui Ștefan cel Mare. 

^ Legenda zice că după o luptă crâncenă din apropierea satului Cobîlea în care a biruit tătarii, Voievodul Ștefan cel Mare a dat ordin să se înalțe o bisericuță, așa cum îi era obiceiul, după orice victorie. Bine, alte locuri au beneficiat de mănăstiri întregi, dar cine să ghicească algoritmul după care s-a condus Voievodul? Și s-a înălțat această bisericuță la marginea satului, lângă acest stejar, la umbra căruia Ștefan s-a odihnit după lupte. Mai trecuse pe aici de nenumărate ori, căci acesta era drumul către trecătoarea peste Nistru de la Vadul Rașcov. Se zice că zidurile bisericii au fost ridicate din pene și albuș de ou. 

^ În timpul unei furtuni îngrozitoare un fulger a despicat unul dintre ramurile cele mai mari ale stejarului, lăsând o rană imensă din care s-a format o scorbură. În timpurile năvălirilor străine, temându-se de vandalizarea bisericii, locuitorii satului au scos tezaurul și l-au ascuns în scorbură.  Dar cei care au acoperit cu mortar scorbura ca să nu lase să pătrundă mucegaiul în măduva copacului s-au temut să bage mâna în scorbură, așa că gândurile localnicilor încă sunt tulburate de ideea că înăuntrul acestui stejar sunt ascunse comori. Învăluit de șoapte, taine și legende, stejarul ține și azi piept furtunilor, arșiței și ne oferă o îndelungată lecție de demnitate. Nu e obligatoriu să te frângi sub vremi, poți face ca vremurile să se rupă sub tine. Stejarul lui Ștefan cel Mare se află în localitatea Cobîlea, sat Șoldănești, la o distanță de 125 km. față de Chișinău.

`,

ro8: `Localitatea Ștefan Vodă poartă numele Marelui Voievod la dorința locuitorilor băștinași ai orașului care în 1990 au reușit să-și formalizeze inițiativa.  Teritoriul acestui raion cuprinde localitățile denumite tradițional „Satele hănești”, deoarece începînd cu anul 1538 nu au mai aparținut principatului Moldovei, ci Raialei Tighinei cârmuită de hanii tătari crimeeni în numele împărăției turcești. În anul 1812 devin posesiuni ale Împărăției rusești pînă în 1917. Istoria orașului datează din anul 1909, când a fost întemeiată colonia germană Kizil. Coloniștii au depus o muncă enormă pentru desțelenirea pământului și pentru construcția caselor. La 23 decembrie 1964 se înființează raionul Suvorov cu Centrul raional Suvorov, pe baza satului Kizil.  Astăzi Ștefan Vodă îî ademenește pe toți cei împătimiți de peisajele de vis așternure la gurile Nistrului și de încântătoarele podgorii vitivinicole cu indicație geografică protejată. Vizitatorii rămân impresionați de numărul mare de localităţi vechi, care prin denumirile locale amintesc de un trecut zbuciumat. Românii, turcii, tătarii, nemţii, ucrainenii, bulgarii şi-au avut aici vetrele satelor, iar căile comerciale de-a lungul fluviului legau principalele oraşe din regiune cu târgurile din Europa și Asia pe celebrul „Drum moldovenesc”. „Pădurea Împărătească” făcea parte din domeniile ţarilor ruşi (Crocmaz), iar „Grădina Turcească” (Talmaza) este considerată una dintre primele arii naturale protejate din Europa. 

^ În proximitatea localității Ștefan Vodă, la Căușeni se află una dintre cele mai vechi și valoroase biserici din Republica Moldova și poartă hramul “Adormirea Maicii Domnului”.  Biserica este pe jumătate îngropată în pământ, spre a fi cât mai discretă și mai puțin stânjenitoare în fața păgânilor necredincioși. În acea vreme, se pedepsea cu moartea ridicarea oricărui lăcaș mai mare decât un oștean pe cal. Lucrările la biserică se făceau noaptea, iar ziua locul era acoperit cu lemne și iarbă, pe dinafară arătând ca un hambar.
^ Picturile murale din interior reprezintă ultima etapă în dezvoltarea frescei medievale în Moldova.  Acustica bisericii este incredibil de autentică și vie, căci, din loc în loc, în bolțile bisericii, arhitecții au zidit oale de lut, ca niște vechi secrete ale acusticii. Acum biserica își trăiește o a doua viață, fiind în proces de restaurare. Biserica din Căușeni se află la o distanță de 87 km. față de Chișinău.
`,

en0: `
Căpriana Monastery is one of the oldest and most significant monastic places in
terms of spirituality and historical value in the Republic of Moldova.

According to the documents written in the XVII-XIX centuries, Stephen the Great
along with other rulers of Moldova as Alexandru cel Bun, Petru Rareș, Alexandru
Lăpușneanu and Vasile Lupu is considered one of the founders of the Căpriana
Monastery.

In 1429, Căpriana Monastery received the status of a Royal Monastery.

The “Saint Mary” Church, is the first stone church that was built in the fifteenth
century. It represents a classical Moldavian architectural work from the time of
Stephen the Great.

The old church from Căpriana was restored by Petru Rareş, in 1542 as a result of
the damage caused by earthquakes.

At present, Căpriana Monastery represents one of the top visited sites in Moldova.

Căpriana Monastery is located in Căpriana Village, Republic of Moldova, 35 km
away from Chișinău.`,

en1: `“Orheiul Vechi”, with its surprising view that shelter the cells dug in the steep
bank by the monks, represents an exceptional archaeological landscape near the
villages of Trebujeni and Butuceni, Republic of Moldova.

Throughout history, this place hosted multiple Geto-Dacian fortifications (VIth -
IInd centuries BC), old Romanian settlements (Vth-XIIIth centuries), two
medieval cities - the Mongolian city Shehr al Jedid (1339-1369) and the city of
Orhei (1370-1540), which reaches the peak of its development during the time of
Stephen the Great’s reign. Actually, it hosts the ruins of the Orhei Fortified
Citadel, built on the eastern border of Moldova by Stephen the Great to strengthen
the defense of the country along the Nistru River. Then the Citadel was adapted to
the needs of the artillery. There were discovered 2 bronze cannons from that
period, which are exposed at the Museum of History in Chișinău.

“Orheiul Vechi” is a unique place, preserving cave monestries and cultural
heritage. Nowadays, it is a famous touristic site of the Republic of Moldova.
There, in an unic landscape, the music &amp; history join together to host the
international open-air festival of classical music “DescOperă” organized in the
beginning of each summer.

“Orheiul Vechi” is located in the Republic of Moldova, at a distance of 52 km
from Chișinău.`,

en2: `
Soroca Fortress is a quiet jewel in the North of the Republic of Moldova. It was
built on the bank of Nistru River five hundred years ago. Nothing affected it too
much, nor wars, nor cataclysms, nor changes of regimes and nor even the
indifference of people.

Soroca Fortress was founded by Stephen the Great to strengthen the defense of its
regions, especially of the ford near the fortress. The ford was used not only by the
invaders, but also by the merchants.

For the first time the fortification is mentioned by Ștefan cel Mare on July 12,
1499.

The wooden and earth fortress continued to operate with the same status and
purpose during the reign of Bogdan III, Stephen the Great’s son and even in the
first reign of Petru Rareș. Later, on the remains of the old fortress, Petru Rareș
built a new fortress, made of stone, which is still preserved today in an exceptional
state.

Also, at Soroca, on the steep bank of the Nistru River, visitors can see the Candle
of Gratitude that rises as an arrow perched in the sky. It is a monument dedicated
to the author of the “Miorița” Ballad. Those who dare to climb the 654 steps up
from the river bank, are rewarded with a spectacular view of the entire city.

Another attraction of this city is the “Sfinții Martiri Brâncoveni” Wodden Church,
situated on the bank of the Nistru River and made into Maramures style.

Soroca Fortress is located at a distance of 155 km from Chișinău.
`,

en3: `
The written history of the village of Mereni begins in 1475, when the Ruler of the
Moldova, Stephen the Great, gives the villagers a document stipulating the rights
of the villagers on the land.

^ The local Museum of History and Ethnography, arranged in a historical building
from the beginning of the XXth century, exibits pottery vessels from IV-III
centures BC, tips of silver and bronze arrows, iron swords, daggers, coins - all
found near Mereni Village.

^ The village of Mereni is located at a distance of 25 km from the city of Chișinău.
`,

  en4: `
Chișinău the capital of the Republic of Moldova, appears in documentsstarting
with July 17, 1436. Later, in 1466, through a document issued at the court of
Stephen the Great, the Land of Chisinau, from the Albișoara Well, together with
the mill, was given to Vlaicu Pârcălab, Ștefan cel Mare’s uncle. So, Vlaicu-
Pârcălab (whose name is given to one of the central streets) was, as they say, the
owner of the future capital, which then returned to his sons and grandchildren for
about a hundred years.

^ The lower part of the city is built in medieval style, with streets in the form of
rayses, scattered around the Old Market.

^ The statue of Stephen the Great was inaugurated on April 29, 1928, on the
occasion of the 10th anniversary of the Unification of Bessarabia with Romania.
This is one of the most important works of the famous Bessarabian sculptor from
the interwar period, Alexandru Plămădeală. The statue was twice evacuated to
Romania during the Second World War. Only, on August 31, 1990, at the
celebration of a year since the Romanian language was proclaimed as the state
language, the statue was placed in the actual place - the place where it all starts,
both for the inhabitants of the capital and for its guests.
`,

  en5: `
None of the cities of Moldova had such a tumultuous life as Tighina. Tailored and
twisted, conquered and lost, it has withstood the times, cannons and carelessness of
people for over 500 years.

^ In the fifteenth century, Tighina became an important point in the Moldovan
commercial road that connected Western Europe with the East, also called the
Tatar Road.

^ This road was not important only for merchants. It was also a ford for Moldova’s
defence. As tthe Tartar hordes were attacking the country more and more
virulently, and Stephen the Great was forced to build a fortress in this ford of the
Nistru River. First, it was built from the ground and wood, with a moat and a wave
of defense. Later, it was reinforced more and more, so that the fortress came to be
considered as the most fortified in the whole defence system of Moldova during
the entire reign of Stephen the Great.

^ In the summer of 1538, Sultan Suleyman the Magnificent entered Moldova and
occupied Tighina. Tighina is renamed Bender – (in Turkish reinforced passing or
port). The Turks fortified the fortress of Ștefan cel Mare și Sfânt by building stone
walls. Despite repeated attempts of Moldova’s rullers to defeat the fortress,
Tighina was no longer recovered by Moldova.

^ The Tighina / Bender Fortress is located at a distance of 51 km from Chișinău.
`,

  en6: `
Ţîpova Monastery is a rock monastery on the bank of the Nistru River. It was dug
in stone on the high and steep bank, 100 meters above the level of the Nistru, near
the village of Ţîpova and a stream bearing the same name.

^ Țîpova is a place of pilgrimage and tourism, being very attractive with its cave
galleries and local waterfalls.
As the oral tradition says, Ștefan cel Mare got married here in St. Nicholas Church
with his 3 rd wife Maria Voichita.
The cave monastery in Țipova, closed in 1949 and reopened in 1994, consists of
three monastic complexes:
The first is &quot;Saint Cross” Church and a few cells, established XI - XII centuries.
The second is” Saint Nicolae” Church, dug in XIV – XV centuries.
The third comprises 18 rooms from the XVI - XVIII centuries, joined by internal
crossings, with stairs, open galleries and balconies.

^ Țipova Monastery is located 92 km away from Chisinau.
`,

  en7: `Ștefan cel Mare oak is a natural monument, having a history that few living beings
could have had. It is mentioned for the first time in the documents of the place in
1456, one year before the beginning of the reign of Stephen the Great.

^ The Legend sais that after a fight near the village of Cobîlea in which the Tatars
were defeated, Stephen the Great ordered to erect a church, as he was acustomed,
after each victory. So, this little church was erected on the edge of the village, near
this oak tree, in the shadow of which Ștefan rested after the fights. He had passed
here many times, because this was the road to pass the Nistru River to Vadul
Rașcov.

^ Surrounded by whispers, mysteries and legends, the oak still holds the storms, and
offers us a life lesson of dignity, showing that “it is not a must to break under the
weather, you can make the weather break under you”.

^ Stephen the Great oak is located in the village of Cobîlea, Șoldănești District, at a
distance of 125 km. from Chișinău.
`,

  en8: `Ștefan Vodă – the town has aquired the name of the best ruler of Moldova in 1990.

^ It is also the name of a region with Geografically Protected Indication (GPI). The
geographical region covers an area of 10000 ha and its expanding yearly.

^ It is considred the area where they grow the Rara Neagra variety of grape, -
known under different names – Babesca Neagra, Cracana, Caldarusa.

^ One of the favourite wines of Stephen the Great (known from the cronocles of Ion
Neculce) was “Crăcana de Nicorești” being known as “a drink for sinful saints like
us”.

^ The name of Babeasca Neagra de Nicoresti was given by Stephen the Great after
he tasted a glass of wine served by one of his soldiers, who took it from an old lady
from Nicoresti (Galati).

^ Not far from Stefan Voda, in Causeni there is one of the oldest and most valuable
churches in the Republic of Moldova &quot;The Assumption of the Virgin Mary&quot;
Church. The church is half buried in the ground, to be as discreet and less
embarrassing in front of unbelievers.

^ The interior murals represent the last stage in the development of the medieval
fresco in Moldova. The acoustics of the church are incredibly authentic and alive,
because in the vaults of the church, from place to place, the architects have built
clay pots, like old secrets of acoustics. Now the church is living a second life,
being in the process of restoration.

^ The Church of Causeni is located 87 km away from Chisinau.`,

  ro9: `Cu toate că conacul îi poartă numele, acesta însă, nu a fost ridicat de către diplomatul și negustorul de origine armeană Manuc Bei Mîrzaian, așa cum se vehiculează (el decedând la scurt timp după procurarea moșiei Hîncești, în 1817), ci de către urmașii săi – fiul Murat, care a demarat construcția vilei boierești, și nepotul diplomatului, Grigore, care a încheiat lucrările respective.[5] Conacul, de asemenea, este un monument de arhitectură înscris în Registrul monumentelor de cultură al Republicii Moldova.[6] Palatul este situat în partea de sud a orașului, pe versantul nordic al dealului, la marginea parcului. De la intrarea principală, pînă la palat, te conduce o alee. Datorită reliefului înclinat, din partea de sus a dealului se văd doar două etaje, de jos – trei. Palatul este conceput în spiritul clasicismului francez, cu deschideri largi de ferestre și loggii. Pe terasă, pereții interiori au fost decorați cu fresce frumoase și sunt prevăzute nișe în care fusese amplasate statuile. Gospodăria a fost înconjurată de ziduri, demolată la sfârșitul anilor 1950. Plafoanele palatului au fost pictat de alt armean – Hovhannes Ayvazyan, care mai târziu a devenit cunoscut ca pictorul rus Ivan Konstantinovici Aivazovski, fiind în acea perioadă în ospeție la fratele său, în Chișinău. Pictura, din păcate, nu sa păstrat pînă în zilele noastre.`,

  en9: `Although the mansion bears his name, it was not built by the Armenian diplomat and merchant Manuc Bei Mîrzaian, as it is circulated (he died shortly after the acquisition of the Hincesti estate, in 1817), but by his descendants. his son Murat, who started the construction of the boyar villa, and the nephew of the diplomat, Grigore, who completed the respective works. [5] The mansion is also an architectural monument registered in the Register of Cultural Monuments of the Republic of Moldova. [6] The palace is located in the southern part of the city, on the northern slope of the hill, at the edge of the park. From the main entrance to the palace, an alley leads you. Due to the sloping relief, only two floors can be seen from the top of the hill, three from the bottom. The palace is designed in the spirit of French classicism, with wide openings of windows and loggias. On the terrace, the interior walls have been decorated with beautiful frescoes and there are niches in which the statues were placed. The household was surrounded by walls, demolished in the late 1950s. The ceilings of the palace were painted by another Armenian - Hovhannes Ayvazyan, who later became known as the Russian painter Ivan Konstantinovich Aivazovsky. . The painting, unfortunately, has not been preserved to this day.`,

  ro10: `Conacul lui Constantin Stamati este un monument de arhitectură de importanță națională din satul Ocnița, raionul Ocnița (Republica Moldova), construit mijlocul secolului al XIX-lea.`,
  en10: `Constantin Stamati's onac is an architectural monument of national importance from Ocnița village, Ocnița district (Republic of Moldova), built in the middle of the 19th century.`
};

const stringToArr = string => string.split('^');

const mainAttractionsData = [
  {
    id: 0,
    ro: {
      label: "Raionul Strășeni",
      name: "Mănăstirea Căpriana",
      title: 'MĂNĂSTIREA CĂPRIANA, CTITORITĂ DE ȘTEFAN CEL MARE'
    },
    en: {
      title: 'CĂPRIANA MONASTERY, ȘTEFAN CEL MARE',
      name: 'Capriana Monastery'
    },
    latitude: 47.116476,
    longitude: 28.510815
  },
  {
    id: 1,
    ro: {
      name: "Orheiul Vechi",
      label: 'Orheiul Vechi',
      title: 'REZERVAȚIA CULTURAL-NATURALĂ ORHEIUL VECHI, CETATE ȘI T RG ADMINISTRATE DE CĂTRE P RCĂLABUL VLAICU, UNCHIUL LUI ȘTEFAN CEL MARE'
    },
    en: {
      title: '“OLD ORHEI” – THE NATURAL CULTURAL REZERVATION. FORMER FORTIFIED CITADEL OF ORHEI',
      name: 'Old Orchei'
    },
    latitude: 47.301438,
    longitude: 28.979260
  },
  {
    id: 2,
    ro: {
      name: "Cetatea Soroca",
      label: 'Raionul Soroca',
      title: 'CETATEA SOROCA, FORTIFICAȚIE DIN TIMPUL LUI ȘTEFAN CEL MARE'
    },
    en: {
      title: 'SOROCA FORTRESS - A FORTIFICATION FROM THE TIME OF THE GREAT STEFAN',
      name: 'Soroca Fortess'
    },
    latitude: 48.155368,
    longitude: 28.302586
  },
  {
    id: 3,
    ro: {
      name: "Satul Mereni",
      label: 'Raionul Anenii Noi',
      title: 'SATUL MERENI (ANENII NOI), LOCALITATE DE RĂZEȘTI CTITORITĂ DE ȘTEFAN CEL MARE ÎN 1475'
    },
    en: {
      title: 'MERENI VILLAGE (ANENII NOI DISTRICT), FOUNDED BY ȘTEFAN CEL MARE IN 1475',
      name: 'Mereni Village'
    },
    latitude: 46.963515,
    longitude: 29.055452
  },
  {
    id: 4,
    ro: {
      name: "Tărgul Chișinău/Buiucani",
      label: 'Orașul Chișinău',
      title: 'TăRGUL CHIȘINĂU/BUIUCANI, LOCALITATE, FOSTĂ PROPRIETATE A LUI PAN VLAICU, UNCHIUL LUI ȘTEFAN CEL MARE'
    },
    en: {
      title: 'CHIȘINĂU/ BUIUCANI the PROPERTY OF VLAICU PĂRCĂLAB, THE UNCLE OF ȘTEFAN CEL MARE',
      name: 'Chisinau'
    },
    latitude: 47.025563,
    longitude: 28.830966
  },
  {
    id: 5,
    ro: {
      name: "Cetatea Tighina",
      label: 'Orașul Tighina',
      title: 'CETATEA TIGHINA, FORTIFICAȚIE DE PĂM NT DIN TIMPUL LUI ȘTEFAN CEL MARE ACOPERITĂ ULTERIOR DE CETATEA DIN PIATRĂ'
    },
    en: {
      title: 'TIGHINA FORTRESS, EARTH FORTIFICATION IN THE TIME OF ȘTEFAN CEL MARE, LATER COVERED BY THE STONE FORTRESS',
      name: 'Tighina Fortess'
    },
    latitude: 46.837984,
    longitude: 29.487439
  },
  {
    id: 6,
    ro: {
      name: "Mănăstirea Țipova",
      label: "Raionul Rezina",
      title: 'MĂNĂSTIREA ȚIPOVA, COMPLEX RUPESTRU DE PE NISTRU AFLAT ÎN RELAȚIE LEGENDARĂ CU ȘTEFAN CEL MARE'
    },
    en: {
      title: 'ȚIPOVA MONASTERY, on NISTRU RIVER, BEING IN LEGENDARY RELATIONSHIP WITH STEPHEN THE GREAT.',
      name: 'Tipova Monastery'
    },
    latitude: 47.695217,
    longitude: 28.965509
  },
  {
    id: 7,
    ro: {
      label: 'Raionul Șoldănești',
      name: "Stejarul lui Ștefan cel Mare'",
      title: 'STEJARUL LUI ȘTEFAN CEL MARE DE LA COB LEA, LOCALITATE AFLATĂ ÎN LEGĂTURĂ LEGENDARĂ CU ȘTEFAN CEL MARE'
    },
    en: {
      title: 'ȘTEFAN CEL MARE OAK TREE FROM COBÂLEA VILLAGE',
      name: 'Stefan the Great\'s Oak'
    },
    latitude: 47.175037,
    longitude: 28.497757
  },
  {
    id: 8,
    ro: {
      label: 'Raionul Ștefan-Vodă',
      name: "Ștefan-Vodă regiune",
      title: 'ȘTEFAN – VODĂ REGIUNE VITIVINICOLĂ CU INDICAȚIE GEOGRAFICĂ PROTEJATĂ, IGP ȘTEFAN VODĂ'
    },
    en: {
      title: 'ȘTEFAN - VODĂ WINE REGION WITH PROTECTED GEOGRAPHICAL INDICATION',
      name: 'Stefan - Voda Region'
    },
    latitude: 46.531607,
    longitude: 29.871911
  }
];

const additionsMainAttr = [
  {
    id: 9,
    ro: {
      label: 'Raionul Hânceșt',
      name: 'Conacul “Manuc Bey”',
      title: 'Conacul “Manuc Bey”'
    },
    en: {
      title: 'Complexul istorico-arhitectural Manuc Bey',
      name: 'Complexul istorico-arhitectural Manuc Bey'
    },
    latitude: 46.825920,
    longitude: 28.582210
  },
  {
    id: 10,
    ro: {
      label: 'Raionul Ocnița',
      name: 'Conacul lui Constantin Stamati',
      title: 'Conacul lui Constantin Stamati'
    },
    en: {
      title: 'Constantin Stamati\'s mansion',
      name: 'Constantin Stamati\'s mansion'
    },
    latitude: 48.383240,
    longitude: 27.436885
  }
];

const getShortDesc = (text, max = 75) => {
  let string = text.substring(0, max);
  const dotIndex = string.indexOf('.');
  const breakIndex = string.lastIndexOf(' ');
  return dotIndex > 0 ? string.substring(0, dotIndex + 1) : `${string.substring(0, breakIndex + 1)}...`;
}

const getFullData = arr => arr.map((item) => {
  const { id, ro, en, latitude, longitude } = item;
  const roTexts = stringToArr(texts[`ro${id}`]);
  const enTexts = stringToArr(texts[`en${id}`]);
  const imgs = mainAttractionsImg.find((obj) => obj.id === id);
  const subAttr = attractions.filter((obj) => obj.id.indexOf(`${id + 1}-`) === 0);
  return {
    id,
    ro: {...ro, texts: roTexts, shortDesc: getShortDesc(roTexts[0]), middleDesc: getShortDesc(roTexts[0], 100) },
    en: {...en, texts: enTexts, shortDesc: getShortDesc(enTexts[0]), middleDesc: getShortDesc(enTexts[0], 100) },
    img: imgs.img,
    subAttr,
    location: { latitude, longitude }
  }
});

export const mainAttractions = getFullData(mainAttractionsData);

export const allAttractions = getFullData([...mainAttractionsData, ...additionsMainAttr]);

export const popUpTitles = {
  ro: 'Alte atractii turistie',
  en: 'Other tourist attractions'
};

export const supportImgs = { cross, BG };

export default attractions;

