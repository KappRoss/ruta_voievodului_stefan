import img from './romaniaImg';

const textsRo = [
  `Cetatea de Scaun a Sucevei se află în municipiul cu acealași nume și a fost construită la sfârșitul secolului al XIV-lea, fiind prima reședință a domnilor Moldovei timp de aproape 200 de ani. Astăzi este declarată monument istoric de interes național.
^Cetatea de Scaun a Sucevei a fost construită în timpul domniei lui Petru I Mușat, însă maxima dezvoltare o cunoaște în timpul Voievodului Ștefan cel Mare.
^Ansamblul arhitectonic medieval, alcătuit din castel și ziduri de apărare, a fost consolidat și completat în cadrul unui vast proiect cu finanțare europeană în perioada 2010-2015, redându-i aspectul impunător, intrat în legendă, dar și sublima strălucire princiară din trecut.
^Datorită expoziției permanente realizate într-o manieră accesibilă și atractivă pentru publicul larg, cu sisteme multimedia interactive (ghizi virtuali, holograme, carte virtuală etc.) și cu spectacole de sunet și lumină, unice la nivel național, Cetatea de Scaun a Sucevei are anual aproape 200.000 de vizitatori.
^În fiecare an, la mijlocul lunii august, în Cetatea de Scaun a Sucevei se desfășoară Festivalul de Artă Medievală "Ștefan cel Mare", la care participă ordine și trupe medievale din țară și din străinătate și care atrage zeci de mii de spectatori, fiind cel mai mare festival de gen din țară. Acesta este urmat de   ”Bucovina  Rock Castle”, un important festival internațional de rock, care se desfășoară într-o locație inedită - șanțul de apărare al Cetății de Scaun - și care se bucură de prezența a peste 9000 de spectatori.
`,
  `Mănăstirea Putna, numită de poetul Mihai Eminescu “Ierusalimul Neamului Românesc”, a fost ctitorită de Voievodul Ștefan cel Mare și Sfânt în perioada 1466 – 1469, fiind concepută ca necropolă domnească.
^În biserica cu hramul “Adormirea Maicii Domnului” se află mormântul lui Ștefan cel Mare și Sfânt precum și alte treisprezece morminte care aparțin familiei Mușatinilor.
^Muzeul Mănăstirii Putna vernisează artefacte care au aparținut Voievodului Ștefan cel Mare și Sfânt, printre acestea numărându-se icoana făcătoare de minuni a Maicii Domnului adusă din Constantinopol în 1472 de către doamna Maria de Mangop, soția Voievodului Ștefan cel Mare și craniul Sfântului Ierarh Ghenadie, îmbrăcat în argint aurit și dăruit mănăstirii de ctitorul ei în anul 1488, despre care legendele povestesc că făcea minuni.
^Mănăstirea Putna este localizată la 72 de kilometri de Cetatea de Scaun a Sucevei, în comuna Putna, județul Suceava.
`,
  `Biserica cu hramul „Înălțarea Sfintei Cruci” din Pătrăuți a fost ctitorită în anul 1487 de Sfântul Voievod Ştefan cel Mare. Biserica din Pătrăuţi este considerată a fi cea mai veche biserică păstrată dintre ctitoriile domntorului, cea mai veche biserică ortodoxă din România, care a fost inclusă pe lista Patrimoniului UNESCO din anul 1993 (în grupul Bisericile pictate din nordul Moldovei) și cea mai veche biserică construită în stil moldovenesc, ce se mai păstrează astăzi în forma ei originară.
^Biserica a fost pictată la exterior, doar pe peretele de apus, în jurul portalului gotic de intrare în biserică, iar scena reprezentată este "Judecata de Apoi", culorile folosite fiind galbenul (ocrul).
^Ansamblul Bisericii Înălțarea Sfintei Cruci se află în comuna Pătrăuți, la 13 km de Suceava.
`,
  `Ctitorită de Voievodul Ștefan cel Mare și Sfânt la 1488, Mănăstirea Voroneț cu biserica având hramul “Sfântul Mare Mucenic Gheorghe” se numără printre bijuteriile Bucovinei și este inclusă din anul 1993 pe lista Patrimoniului Mondial UNESCO.
^Faima Mănăstirii Voroneț se datorează uimitoarelor fresce ce descriu scene biblice pictate în culori armonioase predominând albastrul cerului bucovinean, fresce care i-au adus denumirea de „Capela Sixtină a Estului”, sub care este cunoscută în toată lumea.
^De remarcat este faptul că, după 530 de ani de la înălțarea ei, biserica Sfântul Gheorghe a mănăstirii Voroneț în care a fost înmormântat în 1496 Daniil Sihastrul, duhovnicul și sfătuitorul Voievodului Ștefan cel Mare și Sfânt, continuă să-și uimească vizitatorii cu frumusețea ei rară și plină de rafinament.
^Mănăstirea Voroneț se află la 36 de kilometri de orașul Suceava și la 4 kilometri de Gura Humorului.
`,
  `Biserica Tăierea Capului Sfântului Ioan Botezătorul din Reuseni este considerată a fi ultima ctitorie a Voievodului Ștefan cel Mare și Sfânt deoarece a fost construită în perioada 1503-1504.
^Biserica este situată în satul Reuseni din comuna Udești, la o distanță de aproximativ 15 km sud-est de municipiul Suceava.`,
  `Biserica cu hramul “Înălțarea Sfintei Cruci” a fost construită de Voievodul Ștefan cel Mare și Sfânt între anii 1500-1502.
^Biserica este situată în comuna Volovăț din județul Suceava și se află la o distanță de 35 de km de municipiul Suceava.
`,
  `Biserica cu hramul “Sfântul Ilie” a fost  ctitorită de către Voievodul Ștefan cel Mare și Sfânt în anul 1488, astăzi fiind biserică de mir. 
^Biserica se află în satul Sf. Ilie din Comuna Scheia, la o distanță de aproximativ 1,5 km de municipiul Suceava.
`,
  `Mănăstirea Sfântul Nicolae Popăuți a fost ctitorită de Ștefan cel Mare în 1497. Monumentul este reprezentativ pentru “stilul moldovenesc” (o îmbinare de elemente bizantice şi gotice) ce s-a ctitorit sub patronajul Voievodului.  Ansamblul Mănăstirii Popăuți a fost inclus pe Lista monumentelor istorice din județul Botoșani din anul 2015, având codul de clasificare BT-II-a-A-01929 și fiind alcătuit din următoarele 2 obiective: Biserica "Sf. Nicolae"-Popăuți - datând din anul 1496, având codul BT-II-m-A-01929.01 și Turnul clopotniță - datând din 1496, având codul BT-II-m-A-01929.02`,
  `Biserică cu hramul “Sfântul Gheorghe” din Hârlău, a fost ctitorită de Ștefan cel Mare și Sfânt în anul 1492 și este considerată parte a ansamblului Curții domnești din Hârlău.
^Reședința domnească din Hârlău a fost una dintre reședințele preferate ale domnitorului moldovean, mai ales către sfârșitul domniei. La 12 iulie 1499, Ștefan cel Mare a semnat la Hârlău Tratatul de pace cu polonii regelui Ioan Albert.
^Se află în orașul Hârlău (județul Iași), la o distanță de 74 km de municipiul Iași.
`,
  `Biserica "Cuvioasa Parascheva" din Cotnari este atribuită de tradiție voievodului Ștefan cel Mare (1457-1504). Pisania a fost distrusă, astfel că nu se cunosc date referitoare la construcția lăcașului de cult. În Lista monumentelor istorice din județul Iași este trecut anul 1493 ca an al construcției.`,
  `Palatul Culturii din Iași este o clădire emblematică, construită în perioada 1906 - 1925, în perimetrul fostei curți domnești medievale moldovenești, pe locul fostului palat domnesc.
^Astăzi, Palatul Culturii este sediul Complexului Muzeal Național Moldova, ce cuprinde Muzeul de Istorie al Moldovei (1916), Muzeul Etnografic al Moldovei (1943), Muzeul de Artă (1860), Muzeul Științei și Tehnicii (1955), precum și Centrul de Conservare-Restaurare a Patrimoniului Cultural (1975).
`,
  `Biserica Sfântul Nicolae Domnesc a fost construită în perioada 1 iunie 1491 - 10 august 1492 de către Ștefan cel Mare, cu arhitectură moldovenească, și se află în fața Palatului Culturii din Iași.`,
  `Biserica Mănăstirii Dobrovăţ a fost construită în perioada 1503 - 1504, fiind ultima ctitorie a Voievodului Ştefan cel Mare și Sfânt, iar pictura din naos este considerată cea mai frumoasă din Moldova.
^Biserica se află în comuna Dobrovăț la o distanţă de 25 de km sud-est de Iaşi şi la 35 de km nord de Vaslui.
`,
  `Cetatea Neamț sau Cetatea Neamțului este una dintre cele mai impresionante cetăți din România, ce străjuieşte de peste şase secole valea râului Neamţ.
^Cetatea Neamț a fost construită în secolul al IVX-lea, pe vremea lui Petru I, și a fost fortificată în secolul al VX-lea de Ștefan cel Mare, pentru a întări sistemul de fortificații construit în Moldova pentru apărare împotriva Imperiului Otoman.

^Aici s-au scris importante pagini de eroism, cum a fost rezistenţa din cele 8 zile de asediu otoman, condus de  temutul sultan Mahomed al II-lea după bătălia de la Războieni (1476), ori gloriosul episod, scris cu propriul sânge, de doar 19 plăieşi, în faţa armatei polone conduse de Ioan Sobieski, în 1691. 
^Cetatea Neamț este situată în apropierea orașului Târgu Neamț, la 46 de km de orașul Piatra Neamț, și face parte din categoria monumentelor medievale din România, de o valoare excepțională.

^În anul 1866, Cetatea Neamț a fost declarată monument istoric. Aceasta a fost supusă mai multor demersuri de restaurare, iar după ultima intervenție din perioada 2007-2009, Cetatea Neamțului oferă vizitatorilor 21 de spații, dintre care amintim: Sala de Sfat şi Judecată; Camera de taină; Sala armelor; Neagra temniţă; Camera plăieșilor;  Paraclisul „Sf. Nicolae”; Camera domniţelor; Lapidarium; Bucătăria; Camera de provizii; Monetăria; Camera pârcălabului; Închisoarea, având două spaţii, dar și altele. 
^Toate aceste spații îi poartă pe vizitatori printr-o istorie plină de gloria și farmecul timpurilor medievale. 

^Ziua cetăţii: 2 iulie, ziua Sfântului Voievod Ştefan cel Mare. 
`,
  `Prima atestare documentară a Curţii Domneşti de la Piatra Neamţ apare într-un document emis în anul 1491. 
^Curtea Domnească de la Piatra Neamţ şi-a îndeplinit funcţiile de curte a domnitorilor Moldovei până în secolul al XVII-lea. 
^Frumoasa ctitorie a lui Ştefan cel Mare se mai păstrează şi astăzi în oraşul Piatra Neamţ, fiind cunoscută drept centrul istoric al urbei. Situat pe un platou în jurul căruia s-a dezvoltat actualul oraş, complexul architectural este format din Biserica “Sfâtul Ioan Domnesc”, Turnul-clopotniţă şi Zidul de incintă cu Muzeul Curtii Domnești.
^Biserica Domnească cu hramul “Sfântul Ioan Botezătorul” din Piatra Neamț, ctitorită în perioada 15 iulie 1497 - de 11 noiembrie 1498, reprezintă cel mai valoros edificiu din Complexul Curtea Domnească. Biserica se remarcă prin elementele caracteristice stilului moldovenesc.
`,
  `Potrivit izvoarelor istorice cunoscute până în prezent, Mănăstirea Neamț datează din secolul al XIV-lea ca organizație călugărească ortodoxă. Situată în comuna Vânători din județul Neamț (lângă orașul Târgu Neamț) într-o poiană larg deschisă pe valea pârâului Nemțișor și înconjurată de culmi împădurite, această mănăstire este cea mai veche din Moldova, fiind denumită și “Ierusalimul Ortodoxiei Române”.
 
^Cu un bogat tezaur, Mănăstirea Neamț pune la dispoziția vizitatorilor, în muzeul mănăstirii, o bogată colecție de obiecte de cult și religioase, picturi, manuscrise și diferite piese tipografice cu o mare valoare istorică și artistică. Tot la Mănăstirea Neamț se află și cea mai veche bibliotecă mănăstirească cu 18.000 de volume, având astfel o contribuție deosebită la dezvoltarea culturii și artei românești medievale.
 
^În biserica mănăstirii se afla icoana Maicii Domnului făcătoare de minuni, datând din anul 665. Icoana este una procesională și o icoană protectoare care de-a lungul timpului a întreținut evlavia credincioșilor și a monahilor.`,
  `Aşezată în mijlocul satului cu acelaşi nume, Mănăstirea Războieni, ctitorie a domnitorului Ştefan cel Mare și Sfânt din anul 1496, a fost înălţată în cinstea ostaşilor moldoveni căzuţi în lupta împotriva turcilor de la Valea Albă (1476). 
 
^Pisania aşezată pe peretele sudic al Bisericii „Sfinţii Arhangheli Mihail şi Gavril” descrie momentul înfrângerii Moldovei în războiul pentru ţară şi credinţă. Însuși motivul construcţiei sale - păstrarea memoriei ostaşilor iubitori de neam – face ca mănăstirea să aibă un caracter unic în seria construcţiilor bisericeşti ale Voievodului Ştefan cel Mare și Sfânt. Aceasta se constituie într-un mausoleu ce adăposteşte sub dalele altarului şi ale pronaosului osemintele ostaşilor căzuţi în luptă.

^Mănăstirea Războieni este situată la în comuna Războieni, la 26 km de Piatra Neamţ şi la 35 km de Târgu Neamţ (DJ 208 Piatra Neamţ -Tupilaţi- Hanu Ancuţei), județul Neamț.
`,
  `Ansamblul monumental ”Podul Înalt” de la Băcăoani, judeţul Vaslui, este un simbol oferit de vasluieni pentru a omagia una dintre marile bătălii la care a luat parte Ştefan cel Mare, considerată cea mai mare victorie a creştinătăţii obţinută de acesta împotriva otomanilor deoarece cu doar 40.000 de ostași a înfrânt 120.000 de turci pe 10 ianuarie 1475. După bătălia de la Podul Înalt, Ştefan cel Mare a primit titlul de ”Campion al lui Hristos” și a consfinţit, totodată, statutul Moldovei de Poartă a Creştinătăţii.
^Este situat la aproximativ 12 km sud de Vaslui, în localitatea Băcăoani, pe drumul ce leagă Vasluiul de Bârlad. La locul desfășurării bătăliei a fost ridicat un monument reprezentându-l pe Ștefan cel Mare călare. Statuia a fost dezvelită la 25 octombrie 1975 cu prilejul împlinirii a 500 de ani de la victoria moldovenilor conduși de Ștefan cel Mare împotriva otomanilor, și face parte din ansamblul monumental Podul Înalt, situat pe DN24, în partea de sud a satului Băcăoani, la circa 300 de m de localitate.
`,
  `Situat la întretăierea drumurilor comerciale ce legau Marea Neagră de Marea Baltică, Vasluiul și-a consolidat poziția sa de centru comercial și urban în timpul domnitorului Alexandru cel Bun ce amenajează aici curtea domnească. În secolul al XV-lea i s-a atribuit statutul de capitală a Țării de Jos a Moldovei, la acea vreme existând un palat domnesc, ateliere meșteșugărești, locuințe ale curtenilor, ateliere de olărit, ateliere de confecționat arme, grajduri și alte acareturi. 
^Afectată de atacurile tătare, curtea domnească de la Vaslui este reamenajată în timpul Voievodului Ștefan cel Mare, care zidește în incinta acesteia biserica Tăierea Capului Sfântului Ioan Botezătorul (1490) cu rolul de paraclis, în cinstea răsunătoarei victorii de la Podul Înalt. Potrivit pisaniei, biserica a fost construită în câteva luni și este cea  mai veche din grupul bisericilor orăşeneşti din această  perioadă.
^Pictura interioară realizată în timpul Voievodului Ștefan cel Mare și pictura exterioară  realizată în perioada domniei fiului său Bogdan sau chiar a lui Petru Rareș s-au păstrat până în prezent, reprezentând un punct de atracție pentru turiști.
`,
  `La Borzești, în județul Bacău, s-a născut și a copilărit Ștefan cel Mare. Biserica din Borzești poartă hramul Adormirea Maicii Domnului și a fost construită din inițiativa lui Ștefan cel Mare între 9 iulie 1493 și 12 octombrie 1494 împreună cu fiul său, Alexandru-Vodă, în amintirea prietenului său din copilărie, Gheorghiță, omorât aici de către tătari.`
];

const textsEn = [
  `Suceava Fortress is situated in Suceava Municipality. It was built at the end of the 14th century, being the first residence of Moldova rulers for almost 200 years. Today it is declared a historical monument of national interest.
^Suceava Fortress was built during the rain of Petru I Mușat but the maximum development is known during the Voivod’s Stephen the Great power.
^The medieval architectural ensemble, made up of castle and defense walls, was consolidated and completed within a vast project with European funding in 2010-2015, rendering it an imposing aspect, by entering in the legendwith a sublime splendor of the past.
^Due to the permanent exhibition made in an accessible and attractive way for the general public, with interactive multimedia systems (virtual guides, holograms, virtual book, etc.) and with nationally unique sound and light shows, the Suceava Fortress is helding annually almost 200,000 visitors.
^Every year, in the middle of August, the Suceava Fortress hosts, the Medieval Art Festival " Stephen the Great ". This festival is attended by medieval orders and troops from the country and abroad, and attracts tens of thousands of spectators, being the largest festival of this genre in the country. It is followed by "Bucovina Rock Castle", an important international rock festival, which takes place in a unique location - the defensive fortification of the Suceava Fortress - and is enjoyed by over 9000 spectators.
`,
  `The Putna monastery, named by the poet Mihai Eminescu “The Jerusalem of the Romanian People”, was founded by Stephen the Great between 1466 and 1469, being conceived as a Royal Necropolis.
^The tomb of Stephen the Great, as well as thirteen other tombs belonging to the Mușatin’s family can be found in the "The Assumption of the Virgin Mary" Church.
^The Putna Monastery Museum displays artifacts that belonged to Stephen the Great. Among them, one may see the miracle-maker icon of the Virgin Mary brought from Constantinople in 1472 by Mrs. Maria de Mangop, the wife of Stephen the Great, and the Holy Ghenadie Cranium dressed in gilded silver, given to the monastery by its founder in 1488.
^Putna Monastery is located 72 kilometers from the Suceava Fortress, in Putna commune, Suceava County.
`,
  `The "Holy Cross" Church in Pătrăuți was founded in 1487 by Saint Voivod Stephen the Great. The Church in Pătrăuţi is considered to be the oldest preserved church among those founded by Stephen the Great. It is the oldest Orthodox church in Romania, which was included in the list of UNESCO Heritage from 1993 (in the group of Painted Churches in the north of Moldova). It is the oldest church built in the Moldavian style, which is still preserved today in its original form.
^The church was painted on the outside, only on the west wall, around the Gothic portal of entrance to the church. The scene depicted is "Doomsday". The colors used are yellow (ocher).
^The “Holy Cross” Church is situated in the village of Pătrăuți, 13 km from Suceava.
`,
  `Founded by Stephen the Great in 1488, the Voronet Monastery with the church dedicated to "Saint George" is among the jewels of Bukovina and has been included since 1993 in the list of UNESCO World Heritage.
^The fame of the Voroneț Monastery is due to the amazing frescoes depicting biblical scenes, painted in harmonious colors. The predominating blue sky of Bukovina in the frescoes, gave it the name of "Sistine Chapel of the East", under which, it is known throughout the world.
^It is noteworthy that, after 530 years since its foundation, the church of Saint George of the Voronet Monastery in which was buried in 1496 Daniil Sihastrul, the spiritual counselor of Ștefan cel Mare continues to amaze her visitors with its rare and full of refinement beauty.
^The Voronet Monastery is located 36 km from Suceava city and 4 km from Gura Humorului.
`,
  `The “Saint John the Baptist” Church in Reușeni is considered to be the last founding of the Stephen the Great because it was built between 1503-1504.
^The church is located in the village of Reuseni in the commune of Udești, at a distance of about 15 km south-east of Suceava.
`,
  `The “Holy Cross” Church was founded by Stephen the Great between 1500-1502.
^The church is located in Volovăț commune from Suceava county and is 35 km away from Suceava municipality.
`,
  `The "Saint Ilie" Church was founded by Stephen the Great in 1488. Today it is a church of chrism.
^The church is located in Sf. Ilie village of Scheia Commune, at a distance of about 1.5 km from Suceava.
`,
  `The Monastery of “Saint Nicolae”- Popăuți was founded by Stephen the Great in 1497. The monument is representative for the "Moldovan style" (a combination of Byzantine and Gothic elements).
^The ensemble of the Popăuți Monastery was included on the List of historical monuments of Botoșani County in 2015, having the classification code BT-II-aA-01929 and being made up of the following 2 objectives: "St. Nicolae" -Popăuți Church - dating from 1496, having the code BT-II-mA-01929.01 and the Bell Tower - dating from 1496, having the code BT-II-mA-01929.02.
`,
  `The "Saint George" Church in Hârlău, was founded by Stephen the Great in 1492 and is considered part of the whole Royal Court of Hârlău.
^The Royal residence in Hârlău was one of the favorite residences of the Moldovan ruler, especially towards the end of the reign. On July 12, 1499, Stephen the Great signed here the Treaty of Peace with the Polish of King John Albert.
^It is located in the city of Hârlău (Iași County), at a distance of 74 km from the city of Iași.
`,
  `The "Devout Parascheva" Church in Cotnari is attributed by tradition to Stephen the Great (1457-1504). The inscription was destroyed, so no data regarding the construction of the place of worship is known.

^The year 1493 appears as the year of its construction in the List of historical monuments from Iași County.
`,
  `The Palace of Culture in Iași is an emblematic building, built between 1906 - 1925, in the perimeter of the former Moldovan Medieval Royal Court, on the site of the former Royal Palace.
^Today, the Palace of Culture is the headquarters of Moldova National Museum Complex, which includes the History Museum of Moldova (1916), the Ethnographic Museum of Moldova (1943), the Art Museum (1860), the Museum of Science and Technology (1955), as well as the Conservation-Restoration of the Cultural Heritage Center (1975).
`,
  `The “Saint Nicholas Lordly” Church was built between June 1, 1491 - August 10, 1492 by Stephen the Great, representing Moldovan architecture. It is situated in front of the Palace of Culture in Iasi.`,
  `The church of Dobrovăţ Monastery was built between 1503 - 1504, being the last founding of Stephen the Great. It’s nave painting is considered the most beautiful in Moldova.
^The church is located in Dobrovăț commune, 25 km southeast of Iasi and 35 km north of Vaslui.
`,
  `The Neamţ Fortress is one of the most impressive fortresses in Romania, which has been guarding the Neamţ River valley for six centuries.
^The Neamţ Fortress was built in the 4th century, during the time of Peter I. It was fortified in the Vth century by Stephen the Great, to strengthen the fortification system built in Moldova for defense against the Ottoman Empire. 

^There were written important pages of heroism, like the 8 days of resistance against the Ottoman siege, led by the dreaded Sultan Muhammad II after the battle of Războieni (1476) or the glorious episode, written with their own blood, by only 19 frontier guards, against the Polish army led by Ioan Sobieski, in 1691.
^The Neamţ Fortress is located near the town of Târgu Neamț, 46 km from the city of Piatra Neamț, and is part of the Romania medieval monuments, of an exceptional value. 

^In 1866, the Neamț Fortress was declared a historical monument. This has been subject to several restoration efforts. After the last intervention from 2007-2009, the Neamț Fortress offers visitors 21 spaces: The Trial and Judgment Hall; The Secret Chamber; Weapons Hall; the Black Jail; the Frontier Guards Room; “St. Nicolae" Chapel; The Ladies' Room; the Lapidarium; the Kitchen; the Supply room; the Mint; Chamberlain's room; the Prison, devided into two rooms and others.
^All these areas take visitors through the medieval times history full of glory and charm. 

^The day of the Neamț Fortress is the 2nd of July, the Birthday of Stephen the Great.
`,
  `The first documentary attestation of the Royal Court of Piatra Neamt appears in a document issued in 1491.
^The Royal Court of Piatra Neamţ fulfilled its functions as the Court of the Rulers of Moldova until the seventeenth century.
^The beautiful creation of Stephen the Great is still preserved today in the city of Piatra Neamţ, being known as the historical center of the city. Located on a plateau around which the present city has developed, the architectural complex is made up of the "St. Ioan Lordly" Church, the Bell Tower and the Enclosure Wall with the Museum of the Royal Court. 
^The "Saint John the Baptist" Royal Church from in Piatra Neamț, founded between July 15, 1497 - November 11, 1498, represents the most valuable edifice in the Royal Court Complex. The church stands out through the elements’ characteristic of the Moldovan Archetecture style.
`,
  `According to the historical sources known so far, the Neamț Monastery dates back to the 14th century as an Orthodox monastic organization. Located in the village of Vânatori in Neamț County (near the town of Târgu Neamț) in a wide-open valley of the Nemțișor stream and surrounded by forested peaks, this monastery is the oldest in Moldova.

^With a rich treasure, the Neamț Monastery offers visitors a rich collection of religious objects, paintings, manuscripts and different types of typographic pieces of great historical and artistic value. Here, we can also find the oldest monastery library with 18,000 volumes, thus having a special contribution to the development of medieval Romanian culture and art.

^At the Neamț Monastery, there is also the “Virgin Mary, the Miracle” Icon, dating back to 665. The icon is a protective one that over time has maintained the godliness of believers and monks.
`,
  `Located in the middle of the village with the same name, the Războieni Monastery, founded by the ruler Stephen the Great in 1496, was erected in the honor of the Moldovan soldiers who fell in the fight from the White Valley against the Turks (1476).

^The inscription on the southern wall of the "Saint Archangels Mihail and Gavril" Church describes the moment of Moldova’s defat in the war for the country and faith. The very reason for its construction - the preservation of the memory of the soldiers - makes the monastery unique in the series of church constructions of Stephen the Great. This is constituted in a mausoleum that houses the bones of the fallen soldiers under the altar and the pronaos.  

^Războieni Monastery is located in Războieni commune, 26 km from Piatra Neamţ and 35 km from Târgu Neamţ (DJ 208 Piatra Neamţ -Tupilaţi- Hanu Anciei), Neamț County.
`,
  `The monumental complex “Podul Înalt” from Băcăoani, Vaslui County, is a symbol offered by Vaslui to pay tribute to one of the great battles in which Stephen the Great took part. The battle is considered the greatest victory of Christianity obtained by him against the Ottomans, because with only 40,000 soldiers he defeated 120,000 Turks on January 10, 1475. After the ”Podul Înalt” battle, Stephen the Great received the title of "Champion of Christ" and at the same time he consecrated the status of Moldova as the Gate of Christianity.
^It is located approximately 12 km south of Vaslui, in the village of Băcăoani, on the road that connects Vasluiul to Bârlad. At the place of the battle, a monument was erected representing Stephen the Great as a Rider. The statue was unveiled on October 25, 1975 on the occasion of the 500th anniversary of the victory of the Moldovans against the Ottomans, and it is part of the monumental bridge Podul Inalt, located on DN24, in the southern part of Băcăoani village, at approx. 300 m from the town.
`,
  `Situated at the crossroad of the commercial roads linking the Black Sea with the Baltic Sea, Vaslui consolidated its position as a commercial and urban center during the reign of Alexander the Kind, who established the Royal Court here. In the 15th century it was given the status of the capital of Moldova. At that time Vaslui represented an important centre because it hosted the Royal Palace, handicraft workshops, courtyard houses, pottery workshops, weapons workshops, stables and other handicrafts.
^Affected by the Tatar attacks, the Royal Court from Vaslui is refurbished during the Stefan cel Mare period, who built the “St John the Baptist” Church (1490) as a chapel, in the honor of the Victories at Podul Inalt battle. According to inscriptions of those times, the church was built in a few months and is the oldest in the group of city churches of that period.
^The interior painting made during the Stephen the Great reign and the exterior painting made during the reign of his son Bogdan or even Petru Rareș have been preserved until now, representing an attraction for tourists.
`,
  `Stephen the Great was born and spent his childhood in Borzești, Bacău County. The “Saint Mary” Church was built on his initiative between July 9, 1493 and October 12, 1494, together wih his son Alexandru-Voda, in the memory of his childhood friend, Gheorghita, killed here by the Tatars.`
];

const stringToArr = string => string.split('^');

export default {
  buttons: {
    ro: 'VEZI MAI MULT',
    en: 'SEE MORE'
  },
  ro: {
    titles: [
      'Cetatea Sucevei, județul Suceava', 
      'Mănăstirea Putna – Biserica “Adormirea Maicii Domnului”', 
      'Biserica “Sfânta Cruce din Pătrăuți”, județul Suceava', 
      'Biserica “Sfântul Gheorghe” a fostei Mănăstiri Voroneț, județul Suceava',
      'Biserica “Tăierea capului Sfântului Ioan Botezătorul” din Reuseni, județul Suceava',
      'Biserica cu hramul “Înălțarea Sfintei Cruci” din Volovăț, județul Suceava',
      'Biserica cu hramul “Sfântul Ilie” din Comuna Scheia, județul Suceava',
      'Mănăstirea Sfântul Nicolae Popăuți, județul Botoșani',
      'Biserica “Sfântul Gheorghe” din Hârlău, județul Iași',
      'Biserica “Cuvioasa Parascheva” și ruinele Beciului Domnesc din Cotnari',
      'Palatul Culturii Iași',
      'Biserica cu hramul “Sfântul Nicolae”, județul Iași',
      'Biserica Mănăstirii Dobrovăţ, cu hramul “Pogorârea Sfântului Duh”, județul Iași',
      'Cetatea Neamț - “cuibul de vulturi al Moldovei medievale”, județul Neamț',
      'Curtea Domnească și Biserica cu hramul “Sfântul Ioan Botezătoul”–din Piatra Neamț, județul Neamț',
      'Mănăstirea Neamț, județul Neamț',
      'Mănăstirea Războieni, județul Neamț',
      'Ansamblul monumental Podul Înalt-Vaslui (legat de lupta de la Vaslui-10.01.1475, sat Băcăoani, comuna Munteni de Jos)',
      'Ansamblul Curților Domnești de la Vaslui și a Bisericii Domnești“Tăierea Capului Sf. Ioan Botezătorul” din Vaslui',
      'Biserica “Adormirea Maicii Domnului din Borzești-Bacău, județul Bacău'
    ],
    pageTitles: [
      'CETATEA DE SCAUN A SUCEVEI - CEA NICIODATĂ CUCERITĂ DE O SABIE STRĂINĂ!',
      'MĂNĂSTIREA PUTNA – BISERICA CU HRAMUL “ADORMIREA MAICII DOMNULUI”',
      'BISERICA CU HRAMUL “ÎNĂLȚAREA SFINTEI CRUCI” DIN PĂTRĂUȚI',
      'BISERICA CU HRAMUL “SF NTUL MARE MUCENIC GHEORGHE” A FOSTEI MĂNĂSTIRI VORONEȚ - CAPELA SIXTINĂ A ESTULUI',
      'BISERICA “TĂIEREA CAPULUI SF TULUI IOAN BOTEZĂTORUL” DIN REUSENI',
      'BISERICA ÎNĂLȚAREA SFINTEI CRUCI DIN VOLOVĂȚ - BISERICA DE PIATRĂ',
      'BISERICA CUĂHRAMUL “SFĂNTUL ILIE”',
      'MĂNĂSTIREA SFĂNTUL NICOLAE POPĂUȚI',
      'BISERICA CU HRAMUL “SFĂNTUL GHEORGHE” DIN HĂRLĂU',
      'Biserica “Cuvioasa Parascheva”',
      'PALATUL CULTURII DIN IAȘI',
      'BISERICA SF NTUL NICOLAE DIN IAȘI',
      'MĂNĂSTIREA DOBROVĂȚ - BISERICA “POGOR REA SF NTULUI DUH”',
      'CETATEA NEAMȚ “CUIBUL DE VULTURI AL MOLDOVEI MEDIEVALE”',
      'CURTEA DOMNEASCĂ ȘI BISERICA CU HRAMUL “SF NTUL IOAN BOTEZĂTORUL” DIN PIATRA NEAMȚ',
      'MĂNĂSTIREA NEAMȚ',
      'M NĂSTIREA RĂZBOIENI CU HRAMUL “SFINȚILOR ARHANGHELI MIHAIL ȘI GAVRIL”',
      'ANSAMBLUL MONUMENTAL PODUL ÎNALT-VASLUI',
      'ANSAMBLUL CURȚILOR DOMNEȘTI DE LA VASLUI ȘI A BISERICII DOMNEȘTI CU HRAMUL“TĂIEREA CAPULUI SF NTULUI IOAN BOTEZĂTORUL”',
      'BISERICA CU HRAMUL “ADORMIREA MAICII DOMNULUI” DIN BORZEȘTI-BACĂU',
    ],
    texts: textsRo.map(item => stringToArr(item))
  },
  en: {
    titles: [
      'Suceava Fortress, Suceava County',
      'Putna Monastery – The "Saint Mary" Church, Suceava County',
      'The “Holy Cross” Church in Pătrăuți, Suceava County',
      'The “Sfântul Gheorghe” Church of the former Voronet Monastery, Suceava County',
      'The “Saint John the Baptist” Church from Reuseni, Suceava County',
      'The “Holy Cross” Church from Volovăț, Suceava County',
      'The “Saint Ilie” Church in Scheia Commune, Suceava County',
      'The “Saint Nicolae” Monastery, Popăuți, Botosani County',
      'The “Saint Gheorghe” Church in Hârlău, Iași County',
      'The “Cuvioasa Parascheva” Church and the Ruins of the Domino\'s Winery in Cotnari',
      'The Palace of Culture, Iasi',
      'The “Saint Nicholas” Church, Iasi County',
      'The “Holy Spirit” Church of the Dobrovăţ Monastery, Iasi County',
      'Neamț Fortress - “Medieval Moldova Nest of Eagles”, Neamț County',
      'The Royal Court and “Saint John the Baptist” Church - from Piatra Neamț, Neamț County',
      'Neamț Monastery, Neamț County',
      'Războieni Monastery, Neamț County',
      '“Podul Înalt Monumental Complex” -Vaslui (related to the battle from Vaslui 10.01.1475, Băcăoani village, Munteni de Jos commune)',
      'The Assembly of the Royal Courts of Vaslui and of the Royal Church “Saint John the Baptist” in Vaslui',
      'The “Saint Mary” Church from Borzești-Bacău, Bacău County',
    ],
    pageTitles: [
      'SUCEAVA FORTRESS – NEVER CONCURED BY A FOREIGN SWARD!',
      'PUTNA MONASTERY– THE “SAINT MARY” CHURCH',
      'THE " HOLY CROSS" CHURCH in PĂTRĂUȚI',
      'THE “SAINT GEORGE” CHURCH OF THE FORMER VORONEȚ MONASTERY – SISTINE CHAPEL OF THE EAST',
      'THE "SAINT. IOAN THE BAPTIST" CHURCH IN REUSENI',
      'THE " HOLY CROSS" CHURCH IN VOLOVĂȚ – THE STONE CHURCH',
      'THE” SAINT ILIE” CHURCH',
      'THE “SAINT NICOLAE” - POPĂUȚI MONESTERY',
      'THE "SAINT GEORGE" CHURCH, HĂRLĂU',
      'THE "DEVOUT PARASCHEVA" CHURCH',
      'THE PALACE OF CULTURE IN IAȘI',
      'THE “SAINT NICOLAE” FROM IAȘI',
      'DOBROVĂȚ MONASTERY – THE " HOLY SPIRIT" CHURCH',
      'NEAMȚ FORTRESS “THE VULTURE NEST OF MEDIEVAL MOLDOVA”',
      'THE ROYAL COURT AND "SAINT JOHN THE BAPTIST" CHURCH FROM PIATRA NEAMȚ',
      'NEAMȚ MONASTERY',
      '"THE SAINT ARCHANGELS MIHAIL AND GAVRIL" RĂZBOIENI MONESTERY',
      '"PODUL ÎNALT” MONUMENTAL COMPLEX- VASLUI',
      'THE ASSEMBLY OF THE ROYAL COURTS OF VASLUI AND OF THE ROYAL CHURCH “SAINT JOHN THE BAPTIST”',
      'THE "SAINT MARY" CHURCH FROM BORZEȘTI-BACĂU, BACĂU COUNTY',
    ],
    texts: textsEn.map(item => stringToArr(item))
  },
  img
};
