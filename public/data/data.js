import alu_fence_hero from "../images/hero/alu_fence_hero.jpg";
import alu_fence_door_hero from "../images/hero/alu_fence_door_hero.jpg";
import pvc_fence_hero from "../images/hero/pvc_fence_hero.jpg";
import pvc_fence_door_hero from "../images/hero/pvc_fence_door_hero.jpg";

import alu_fence_hero_large from "../images/hero/alu_fence_hero_large.jpg";
import alu_fence_door_hero_large from "../images/hero/alu_fence_door_hero_large.jpg";
import pvc_fence_hero_large from "../images/hero/pvc_fence_hero_large.jpg";
import pvc_fence_door_hero_large from "../images/hero/pvc_fence_door_hero_large.jpg";

import alu_fence_hero_medium from "../images/hero/alu_fence_hero_medium.jpg";
import alu_fence_door_hero_medium from "../images/hero/alu_fence_door_hero_medium.jpg";
import pvc_fence_hero_medium from "../images/hero/pvc_fence_hero_medium.jpg";
import pvc_fence_door_hero_medium from "../images/hero/pvc_fence_door_hero_medium.jpg";

import alu_fence_hero_small from "../images/hero/alu_fence_hero_small.jpg";
import alu_fence_door_hero_small from "../images/hero/alu_fence_door_hero_small.jpg";
import pvc_fence_hero_small from "../images/hero/pvc_fence_hero_small.jpg";
import pvc_fence_door_hero_small from "../images/hero/pvc_fence_door_hero_small.jpg";

import alu_fence1 from "../images/produkt/alu_fence1.jpg";
import alu_fence2 from "../images/produkt/alu_fence2.jpg";
import alu_fence3 from "../images/produkt/alu_fence3.jpg";
import alu_fence4 from "../images/produkt/alu_fence4.jpg";

import pvc_door1 from "../images/produkt/pvc_door1.jpg";
import pvc_door2 from "../images/produkt/pvc_door2.jpg";
import pvc_door3 from "../images/produkt/pvc_door3.jpg";
import pvc_door4 from "../images/produkt/pvc_door4.jpg";

import alu_door1 from "../images/produkt/alu_door1.jpg";
import alu_door2 from "../images/produkt/alu_door2.jpg";
import alu_door3 from "../images/produkt/alu_door3.jpg";
import alu_door4 from "../images/produkt/alu_door4.jpg";

import pvc_fence1 from "../images/produkt/pvc_fence1.jpg";
import pvc_fence2 from "../images/produkt/pvc_fence2.jpg";
import pvc_fence3 from "../images/produkt/pvc_fence3.jpg";
import pvc_fence4 from "../images/produkt/pvc_fence4.jpg";

import o_nas from "../images/o_nas.jpg";

function requireAll(r) {
  return r.keys().map(r);
}
export const pvc_fence_images = requireAll(
  require.context("../images/pvc_ograje", false)
);

export const alu_fence_images = requireAll(
  require.context("../images/alu_ograje", false)
);

export const pvc_door_images = requireAll(
  require.context("../images/pvc_vrata", false)
);

export const alu_door_images = requireAll(
  require.context("../images/alu_vrata", false)
);

/* HERO */
export const heroImages = [
  {
    huge: pvc_fence_door_hero,
    large: pvc_fence_door_hero_large,
    medium: alu_fence_hero_medium,
    small: alu_fence_hero_small,
  },

  {
    huge: alu_fence_hero,
    large: alu_fence_hero_large,
    medium: alu_fence_door_hero_medium,
    small: alu_fence_door_hero_small,
  },

  {
    huge: alu_fence_door_hero,
    large: alu_fence_door_hero_large,
    medium: pvc_fence_hero_medium,
    small: pvc_fence_hero_small,
  },

  {
    huge: pvc_fence_hero,
    large: pvc_fence_hero_large,
    medium: pvc_fence_door_hero_medium,
    small: pvc_fence_door_hero_small,
  },
];

export const heroImageAlts = [
  "pvc vrata",
  "alu ograje",
  "alu vrata",
  "pvc ograje",
];

export const heroTitles = [
  "Pvc Vrata",
  "Alu Ograje",
  "Alu Vrata",
  "Pvc Ograje",
];

/*PRODUCT PAGE */

export const productSubtitle = [
  " z navdihom",
  " s stilom",
  " s karakterjem",
  " z razlogom",
];

export const productMainDescription = [
  "PVC vrata nudijo varen in estetsko dovršen vhod v domače okolje. Z daljinskim upravljanjem razvajajo najbolj zahtevne lastnike.",
  "Aluminijaste ograje trajajo vse življenje. Ne prepričajo le s svojo preprosto in sodobno zasnovo, temveč tudi s svojo izjemno kvaliteto.",
  "Aluminijasta vrata s prefinjenim stilom in dovršenostjo poudarijo svoj karakter. Veličastno odpirajo ali neusmiljeno zapirajo svoja krila. ",
  "PVC ograje so visoke kvalitete, odporne proti vremenskim vplivom in ne potrebujejo vzdrževanja. Z modernim izgledom preprosto navdušijo vsakogar.",
];

export const productTextArray = [
  [
    "PVC vrata so primerna za vhod na dvorišče in se lepo ujamejo s PVC ograjo. Različne velikosti in oblike zagotavljajo estetsko dopolnjevanje k različnim objektom. PVC vrata so lahko drsna ali dvokrilna, z motornim pogonom ali brez. Drsna vrata z motornim pogonom se odpirajo s pritiskom na daljinski upravljalec, ki odpelje vrata na levo ali desno stran.",
    "Krilna vrata so na voljo eno krilna ali dvokrilna. Eno krilna vrata so primerna za manjše osebne prehode, medtem ko dvokrilna vrata odpirajo vhod na dvorišče. Odpiranje in zapiranje dvokrilnih vrat z motornim pogonom je enostavno in udobno, medtem, ko ročno odpiranje vrat marsikomu nudi varnost in zanesljivost.",
  ],
  [
    "Aluminijaste ograje so izdelane iz ALU ograjnih profilov. Različne oblike profilov omogočajo izdelavo različnih vrst in velikosti ograj, ki so primerne predvsem za vrtove, balkone in stopnišča. Primerne so tudi za večje industrijske objekte zaradi izjemne vzdržljivosti in uporabe brez vzdrževanja.",
    "Z individualnim in strokovnim pristopom lahko ograjo namestimo na že obstoječo staro ograjno konstrukcijo ali med že obstoječe stebre, lahko pa jo izdelamo na novo. Z bogato barvno paleto ograj omogočamo strankam uresničitev njihovih želja, hkrati pa jim z naprednimi rešitvami nudimo varnost in zasebnost.",
  ],
  [
    "Aluminijasta vrata so narejena iz najkvalitetnejših materialov, ki zagotavljajo veliko stopnjo varnosti in zasebnosti. Izbor različnih barv zagotovi stilsko dovršenost in eleganco. Aluminijasta vrata so primerna za vhod na dvorišče individualnih hiš ali večje vhode pri industrijskih objektih. Izjemno lepo se dopolnjujejo z ALU ograjami.",
    "ALU vrata so lahko drsna ali dvokrilna, z motornim pogonom ali brez. Drsna vrata z motornim pogonom dajejo popolno udobje, saj s pritiskom na daljinski upravljalec upravljamo z vrati na daljavo. Krilna vrata so lahko enokrilna ali dvokrilna, ki se odpirajo ročno ali na motorni pogon. Eno krilna vrata so primerna za osebne prehode ali manjše vhode, medtem, ko dvokrilna vrata omogočajo vhod na večja dvorišča. ALU vrata naredimo po meri, s svojimi dolgoletnimi izkušnjami najdemo rešitev tudi za najbolj zahtevne stranke.",
  ],
  [
    "PVC ograje so izjemno kvalitetne, odporne proti vsem vremenskim vplivom in soli, ki je značilna za obmorske kraje. Z različnimi velikostmi in oblikami ogradimo vrtove, balkone in terase ter zavarujemo stopnišča.",
    "S svojimi dolgoletnimi izkušnjami in individualnim pristopom lahko obstoječo ograjo odstranimo in zamenjamo z novo. Lahko uporabimo obstoječo ograjno konstrukcijo ali ograjne stebričke, lahko pa vse postavimo na novo po naročnikovih željah. Svojim strankam nudimo strokovno dovršene ograje, ki ne potrebujejo vzdrževanja in so cenovno dostopne.",
  ],
];

export const productSubtitleArray = [
  [
    {
      subtitle: "Letvice",
      text: "Izjemna kvaliteta, različnih dimenzij, odporne na vremenske razmere, brez vzdrževanja",
    },
    {
      subtitle: "Stebri",
      text: "Različna debelina, širina in oblika, odporni na vremenske razmere, brez vzdrževanja",
    },
  ],
  [
    {
      subtitle: "Letvice",
      text: "Različni modeli, različna širina, debelina in oblika",
    },
    {
      subtitle: "Stebri",
      text: "Različna debelina, širina in oblika, odporni na vremenske razmere, brez vzdrževanja",
    },
  ],
  [
    {
      subtitle: "Letvice",
      text: "Izjemna kvaliteta, različnih dimenzij, odporne na vremenske razmere, brez vzdrževanja",
    },
    {
      subtitle: "Stebri",
      text: "Različna debelina, širina in oblika, odporni na vremenske razmere, brez vzdrževanja",
    },
  ],
  [
    {
      subtitle: "Letvice",
      text: "Izjemna kvaliteta, različnih dimenzij, odporne na vremenske razmere, brez vzdrževanja",
    },
    {
      subtitle: "Stebri",
      text: "Različna debelina, širina in oblika, odporni na vremenske razmere, brez vzdrževanja",
    },
  ],
];

export const productSubtitleArray2 = [
  [
    {
      subtitle: "Profili",
      text: "Različni modeli, različna širina, debelina in oblika",
    },
    {
      subtitle: "Barve",
      text: "Bela, siva, oker",
    },
    {
      subtitle: "Dolžina",
      text: "6m ali razrez na poljubno dolžino",
    },
    {
      subtitle: "Montaža",
      text: "Naše podjetje ali v lastni režiji",
    },
  ],
  [
    {
      subtitle: "Profili",
      text: "Različni modeli, različna širina, debelina in oblika",
    },
    {
      subtitle: "Barve",
      text: "Tri osnovne barve: antracit, rjava in bež, ostale prašno barvane po RAL barvni lestvici",
    },
    {
      subtitle: "Dolžina",
      text: "6m ali razrez na poljubno dolžino",
    },
    {
      subtitle: "Montaža",
      text: "Naše podjetje ali v lastni režiji",
    },
  ],
  [
    {
      subtitle: "Profili",
      text: "Različni modeli, različna širina, debelina in oblika",
    },
    {
      subtitle: "Barve",
      text: "Tri osnovne barve: antracit, rjava in bež, ostale prašno barvane po RAL barvni lestvici",
    },
    {
      subtitle: "Dolžina",
      text: "6m ali razrez na poljubno dolžino",
    },
    {
      subtitle: "Montaža",
      text: "Naše podjetje ali v lastni režiji",
    },
  ],
  [
    {
      subtitle: "Profili",
      text: "Različni modeli, različna širina, debelina in oblika",
    },
    {
      subtitle: "Barve",
      text: "Bela, siva, oker ",
    },
    {
      subtitle: "Dolžina",
      text: "6m ali razrez na poljubno dolžino",
    },
    {
      subtitle: "Montaža",
      text: "Naše podjetje ali v lastni režiji",
    },
  ],
];

export const productImages = [
  [pvc_door1, pvc_door2, pvc_door3, pvc_door4],
  [alu_fence1, alu_fence2, alu_fence3, alu_fence4],
  [alu_door1, alu_door2, alu_door3, alu_door4],
  [pvc_fence1, pvc_fence2, pvc_fence3, pvc_fence4],
];

export const productImageTitles = [
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
  ["", "", "", ""],
];

/*Footer, Menu*/
export const footerAndMenuData = [
  {
    title: "Izdelki",
    links: [
      {
        title: "ALU Ograje",
        link: "/alu-ograje",
      },
      {
        title: "ALU Vrata",
        link: "/alu-vrata",
      },
      {
        title: "PVC Ograje",
        link: "/pvc-ograje",
      },
      {
        title: "PVC Vrata",
        link: "/pvc-vrata",
      },
    ],
  },
  {
    title: "Podjetje",
    links: [
      {
        title: "Domov",
        link: "/",
      },
      {
        title: "O nas",
        link: "/o-nas",
      },
      {
        title: "Kontakt",
        link: "/kontakt",
      },
    ],
  },
];

export const menuExtraInfo = [
  {
    title: "Pokličite nas",
    text: "040 568 000",
  },
  {
    title: "Pišite nam",
    text: "info@givos.si",
  },
  {
    title: "Ali nas obiščite",
    text: "Srednja vas 73, Šenčur",
  },
];

/* About Us */

export const aboutUsMainDescriptionData =
  "Smo majhno zasebno podjetje z dolgoletnimi izkušnjami, ki s svojim znanjem, prijaznostjo in individualnim pristopom nudi kakovostne rešitve svojim strankam.";

export const aboutUsInfoData = [
  {
    title: "Izkušnje",
    text: [
      "S skoraj dvajset letnimi izkušnjami našim strankam zagotavljamo strokovnost, kvaliteto in individualno obravnavo. Zavedamo se svoje odgovornosti do strank in do naših izdelkov, ki jih strankam ponujamo. Skozi vrsto let poslovanja smo postali utečena ekipa, ki ve kako zagotoviti kakovost na najvišjem nivoju. Izkušnje, zagnanost in poštenost so naša vrlina. Zadovoljstvo naših številnih strank nam daje dodatni zagon za iskanje novih idej in priložnosti.",
    ],
  },
  {
    title: "Kakovost",
    text: [
      "Kakovostna storitev je ključna pri našem poslovanju. Zadovoljstvo strank je potrditev, da s svojim strokovnim pristopom in znanjem omogočamo kvalitetno storitev ter dovršene izdelke. Naš cilj je kakovostna in kvalitetna ponudba naših storitev vsem našim sedanjim in bodočim strankam.",
    ],
  },
  {
    title: "Prijazno osebje",
    text: [
      "Z našim osebjem se boste srečali že s prvim telefonskim klicem. Na drugi strani se bo oglasilo prijazno osebje, ki vam bo poskušalo odgovoriti na vsa vaša vprašanja. Zavedamo se, da dobra komunikacija omogoča najti rešitev za vaše ideje in projekte.",
    ],
  },
];

export const aboutUsPictureInfo = {
  image: [o_nas],
  title: ["Slika podjetja Givos"],
};

/* Contact page */

export const contactInfoData = [
  {
    title: "Naslov:",
    text: ["Srednja vas 73, Šenčur"],
  },
  {
    title: "Telefonska št.:",
    text: ["040 568 000"],
  },
  {
    title: "Email:",
    text: ["info@givos.si"],
  },
  {
    title: "Delovni čas:",
    text: ["ponedeljek - petek", "sobota", "nedelja"],
    text2: ["od 8:00 do 16.00", "ogledi pri strankah", "zaprto"],
  },
  {
    title: "Podatki o podjetju:",
    text: ["matična številka", "davčna številka", "TRR"],
    text2: ["1795791000", "SI61930369", "SI56 03138 10000 49614"],
  },
];

export const formData = [
  {
    placeholder: "Ime in priimek",
    id: "ime",
    type: "text",
    error: "Prosimo vnesite svoj ime in priimek",
  },
  {
    placeholder: "Telefonska št.",
    id: "telefon",
    type: "number",
    error: "Prosimo vnesite svojo telefonsko številko",
  },
  {
    placeholder: "Elektronska pošta",
    id: "mail",
    type: "mail",
    error: "Prosimo vnesite svoj elektronski naslov",
  },
  {
    placeholder: "Povpraševanje",
    id: "povprasevanje",
    type: "text",
    error: "Prosimo vnesite povpraševanje",
  },
];

/* GALLERY */
export const galleryPictures = [
  pvc_door_images,
  alu_fence_images,
  alu_door_images,
  pvc_fence_images,
];

export const gallerySubtitle = [
  "PVC Vrata",
  "ALU Ograje",
  "ALU Vrata",
  "PVC Ograje",
];

/* LINKS */
export const productLinks = [
  "pvc-vrata",
  "alu-ograje",
  "alu-vrata",
  "pvc-ograje",
];

export const galleryLinks = [
  "galerija-pvc-vrata",
  "galerija-alu-ograje",
  "galerija-alu-vrata",
  "galerija-pvc-ograje",
];

/*SEO*/

export const seoData = {
  hero: {
    title: "Givos",
    description:
      "Ograje po vaših željah - kvalitetno in ugodno! Prodajamo in montiramo različne vrste ograj v PVC ali ALU izvedbi. Po želji jih opremimo z motornim pogonom.",
  },
  gallery: {
    title: [
      "Galerija PVC vrata",
      "Galerija ALU ograje",
      "Galerija ALU vrata",
      "Galerija PVC ograje",
    ],
    description: [
      "Galerija slik PVC Vrat",
      "Galerija slik Alu Ograj",
      "Galerija slik Alu Vrat",
      "Galerija slik PVC Ograj",
    ],
  },
  product: {
    title: ["PVC vrata", "ALU ograje", "ALU vrata", "PVC ograje"],
    description: [
      "PVC vrata - kvalitetna, hitra in prilagodljiva izdelava. V podjetju Givos za vas po vaših željah pvc vrata izdelamo in tudi montiramo na vaši lokaciji.",
      "ALU ograje za stanovanjske hiše in poslovne stavbe. Kvalitetna in hitra izvedba. V podjetju Givos za vas alu ograje izdelamo in montiramo.",
      "ALU vrata - kvalitetna, hitra in prilagodljiva izdelava. V podjetju Givos za vas po vaših željah pvc vrata izdelamo in tudi montiramo na vaši lokaciji.",
      "PVC ograje so idealna rešitev za vaš balkon ali dvoriščna vrata. Izdelujemo in montiramo pvc ograje v različnih barvah in oblikah. Prilgodljivo vašim željam.",
    ],
  },
  contact: {
    title: "Givos | Kontakt",
    description: "Kontaktni podatki podjetja Givos d.o.o.",
  },
  aboutUs: {
    title: "Givos | O nas",
    description:
      "Givos d.o.o. gradbeni ineniring, izdelava ALU in PVC vrat in ograj, svetovanje.",
  },
};
