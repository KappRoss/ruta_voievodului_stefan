const en = `Ștefan cel Mare și Sfânt (Stephen the Great and Saint) was the best and the greatest
ruler of Moldova ever. He ruled with the country for 47 years (1457-1504). His
qualities as: a good strategist and astute diplomat, the initiatives taken to develop
the culture by founding a new architecture style, building an impressive number of
churches and monasteries, and the battles waged and won to defend the integrity of
the country - have made him a legendary hero.
^“The Stephen the Great” route in Romania and in the Republic of Moldova will
cross through 20 places in Romania, 9 places in the Republic of Moldova and
thirteen wine fields, thus offering tourists a lesson in history and spirituality
through the tourist sights represented by the monasteries, the fortified cities, wine
cellars, elder than 500 years, whose continuity has been preserved to our days, as
well as the museums in which exhibitions with artifacts from the period of reign of
Stephen the Great were organized.
^During Stephen the Great reign Moldova knew the most flourishing period in its
history. As the Ottoman danger increased rapidly after the fall of Constantinople,
he increased the army - the &quot;great army&quot; of raiders and peasants. He militarily
consolidated the border cities, creating a system of fortifications comprising
Fortresses, four of which were situated on the Dniester River: Soroca Fortress,
Tighina Fortress, White Fortress and Hotin Fortress, also Orhei - on the Răut
River. He led more than 40 wars and battles. Only one of them took place on the
territory of the present Republic of Moldova and has remained in history as the
victorious Lipnic battle from 1469 against the Tatars.

^He took great care for the economic consolidation of the country, stimulating
foreign trade relations, which brought him money and fame. One of Europe&#39;s most
important commercial roads, the &quot;spice road&quot;, was passing through Moldova, and
The Stephen the Great was the first to fully understand the importance of this great
advantage and exploited it for country’s favour.
^During Stephen the Great reign, Moldova had become one of the most important
regions for the cultivation of vineyards and wine production in the monasteries.
Viticulture reached its peak, and the position of cupbearer at the royal court was set
up sby Stephen the Great specifically.

^Named by Pope Sixtus IV as &quot;Christ&#39;s athlete” Stephen the Great paid special
attention to spiritual life and cristianity promotion. He was the founder of many
monasteries and churches in Moldova, and built an impressive number of places of
worship. Popular tradition attributes him the founding of 44 churches. 500 years
away in time, we talk about him as if he never died, or even more as he is still
alive, somewhere around here, everywhere in Moldova, and his great lessons - of
strategy, diplomacy, economy and Christianity remains amazing news even today.

^The route of Stephen the Great through Romania and the Republic of Moldova
represents an opportunity to raise awareness and to promote a part of the
invaluable heritage that has left us the Symbol of the revival of cultural, spiritual
and monastic life on the territory of Moldova, Bessarabia and Bucovina.`;

const ro = `Ştefan cel Mare a fost cel mai mare domnitor pe care l-a avut Moldova, între anii 1457 – 1504. Calitățile sale de bun strateg și diplomat, inițiativele întreprinse pentru dezvoltarea culturii prin ctitorirea unui număr impresionant de biserici și mănăstiri și bătăliile purtate și câștigate pentru apărarea integrității țării l-au transformat într-un erou legendar.  
^Ruta Voievodului Ștefan cel Mare și Sfânt în România și în Republica Moldova va străbate optsprezece localități din România, unsprezece localități din Republica Moldova și treispezece  domenii viticole, oferind, astfel, turiștilor o lecție de istorie și de spiritualitate prin intermediul obiectivelor turistice reprezentate de mănăstirile ctitorite, cetățile fortificate, hrubele (beciurile domnești) vechi de peste 500 de ani, a căror continuitate s-a păstrat până în zilele noastre și, nu în ultimul rând, a muzeelor în cadrul cărora sunt organizate expoziții cu artefacte din timpul domniei Voievodului Ștefan cel Mare și Sfânt.
^Voievodul Ștefan cel Mare a venit la putere într-o Moldovă dezbinată, pe cale de a-și pierde identitatea, într-o Moldovă pe care a așezat-o din temelii. Fiindcă pericolul otoman creștea vertiginos după căderea Constantinopolului, a crescut armata - “oastea cea mare” din răzeși și țărani, a consolidat militar cetățile aflate la graniță, creând un sistem de fortificații ce cuprindea cetăți dintre care patru se aflau pe râul Nistru: Cetatea Soroca, Cetatea Tighina, Cetatea Albă, Hotinul și Orhei - pe râul Răut.  Dintre cele peste 40 de războaie și bătălii purtate, doar una a avut loc pe teritoriul actualei Republici Moldova și a rămas în istorie ca victorioasa luptă de la Lipnic împotriva tătarilor din anul 1469. 

^A avut o mare grijă pentru consolidarea economică a țării, stimulând relațiile comerciale externe, ceea ce i-a adus bani şi faimă. Unul dintre cele mai importante drumuri comerciale ale Europei, „drumul mirodeniilor“, trecea prin Moldova, iar Ştefan cel Mare a fost primul care a înţeles pe deplin importanţa acestui mare avantaj şi l-a exploatat în folosul său.
^Pe vremea Domniei lui Ștefan cel Mare, Moldova devenise una dintre cele mai importante regiuni de cultivare a viței de vie și producere a vinului în cadrul mănăstirilor. Viticultura și-a atins apogeul, iar postul de paharnic la curtea domnească a fost instituit anume de Voievodul Ștefan.

^Numit de Papa Sixt al IV-lea drept „atlet al lui Cristos”, Ștefan cel Mare a acordat o atenție deosebită bisericii. Conducătorul Moldovei construiește un număr impresionant de lăcașuri de cult. Tradiția populară îi atribuie ctitorirea a 44 de biserici, dar în mod cert sunt cunoscute 32 de zidiri. A fost ctitorul multor mănăstiri și biserici din Moldova, cum e Căpriana, biserica veche de la Lăpușna, bisericuța de la Lipnic, iar la Țâpova, circulă legenda că s-ar fi cununat cu cea de-a treia soție a sa, Maria Voichița. 

^La 500 de ani distanţă în timp, vorbim despre El ca şi cum nici n-ar fi murit, ba chiar ar mai exista încă, undeva pe-aici, peste tot în Moldova, iar marile sale lecții - de strategie, diplomație, economie și creștinătate rămân de o uimitoare actualitate și astăzi. 

^Ruta Voievodului Ștefan cel Mare și Sfânt în România și în Republica Moldova reprezintă o oportunitate de conștientizare și de promovare a unei părți din inestimabila moștenire pe care ne-a lăsat-o simbolul renașterii vieții culturale, spirituale și monahale pe teritoriul Moldovei, Basarabiei și Bucovinei.
`;

const stringToArr = string => string.split('^');

export default {
	en: {
		title: 'Ruta Voievodului Ștefan cel Mare și Sfânt în România și în Republica Moldova',
		texts: stringToArr(en)
	},
	ro: {
		title: 'The Cultural Route of the Ruler Stephen The Great and Saint (Ștefan Cel Mare Și Sfânt) in Romania and in The Republic of Moldova',
		texts: stringToArr(ro)
	}
};