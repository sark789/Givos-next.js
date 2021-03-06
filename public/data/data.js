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
  "PVC vrata nudijo varen in estetsko dovr??en vhod v doma??e okolje. Z daljinskim upravljanjem razvajajo najbolj zahtevne lastnike.",
  "Aluminijaste ograje trajajo vse ??ivljenje. Ne prepri??ajo le s svojo preprosto in sodobno zasnovo, temve?? tudi s svojo izjemno kvaliteto.",
  "Aluminijasta vrata s prefinjenim stilom in dovr??enostjo poudarijo svoj karakter. Veli??astno odpirajo ali neusmiljeno zapirajo svoja krila. ",
  "PVC ograje so visoke kvalitete, odporne proti vremenskim vplivom in ne potrebujejo vzdr??evanja. Z modernim izgledom preprosto navdu??ijo vsakogar.",
];

export const productTextArray = [
  [
    "PVC vrata so primerna za vhod na dvori????e in se lepo ujamejo s PVC ograjo. Razli??ne velikosti in oblike zagotavljajo estetsko dopolnjevanje k razli??nim objektom. PVC vrata so lahko drsna ali dvokrilna, z motornim pogonom ali brez. Drsna vrata z motornim pogonom se odpirajo s pritiskom na daljinski upravljalec, ki odpelje vrata na levo ali desno stran.",
    "Krilna vrata so na voljo eno krilna ali dvokrilna. Eno krilna vrata so primerna za manj??e osebne prehode, medtem ko dvokrilna vrata odpirajo vhod na dvori????e. Odpiranje in zapiranje dvokrilnih vrat z motornim pogonom je enostavno in udobno, medtem, ko ro??no odpiranje vrat marsikomu nudi varnost in zanesljivost.",
  ],
  [
    "Aluminijaste ograje so izdelane iz ALU ograjnih profilov. Razli??ne oblike profilov omogo??ajo izdelavo razli??nih vrst in velikosti ograj, ki so primerne predvsem za vrtove, balkone in stopni????a. Primerne so tudi za ve??je industrijske objekte zaradi izjemne vzdr??ljivosti in uporabe brez vzdr??evanja.",
    "Z individualnim in strokovnim pristopom lahko ograjo namestimo na ??e obstoje??o staro ograjno konstrukcijo ali med ??e obstoje??e stebre, lahko pa jo izdelamo na novo. Z bogato barvno paleto ograj omogo??amo strankam uresni??itev njihovih ??elja, hkrati pa jim z naprednimi re??itvami nudimo varnost in zasebnost.",
  ],
  [
    "Aluminijasta vrata so narejena iz najkvalitetnej??ih materialov, ki zagotavljajo veliko stopnjo varnosti in zasebnosti. Izbor razli??nih barv zagotovi stilsko dovr??enost in eleganco. Aluminijasta vrata so primerna za vhod na dvori????e individualnih hi?? ali ve??je vhode pri industrijskih objektih. Izjemno lepo se dopolnjujejo z ALU ograjami.",
    "ALU vrata so lahko drsna ali dvokrilna, z motornim pogonom ali brez. Drsna vrata z motornim pogonom dajejo popolno udobje, saj s pritiskom na daljinski upravljalec upravljamo z vrati na daljavo. Krilna vrata so lahko enokrilna ali dvokrilna, ki se odpirajo ro??no ali na motorni pogon. Eno krilna vrata so primerna za osebne prehode ali manj??e vhode, medtem, ko dvokrilna vrata omogo??ajo vhod na ve??ja dvori????a. ALU vrata naredimo po meri, s svojimi dolgoletnimi izku??njami najdemo re??itev tudi za najbolj zahtevne stranke.",
  ],
  [
    "PVC ograje so izjemno kvalitetne, odporne proti vsem vremenskim vplivom in soli, ki je zna??ilna za obmorske kraje. Z razli??nimi velikostmi in oblikami ogradimo vrtove, balkone in terase ter zavarujemo stopni????a.",
    "S svojimi dolgoletnimi izku??njami in individualnim pristopom lahko obstoje??o ograjo odstranimo in zamenjamo z novo. Lahko uporabimo obstoje??o ograjno konstrukcijo ali ograjne stebri??ke, lahko pa vse postavimo na novo po naro??nikovih ??eljah. Svojim strankam nudimo strokovno dovr??ene ograje, ki ne potrebujejo vzdr??evanja in so cenovno dostopne.",
  ],
];

export const productSubtitleArray = [
  [
    {
      subtitle: "Letvice",
      text: "Izjemna kvaliteta, razli??nih dimenzij, odporne na vremenske razmere, brez vzdr??evanja",
    },
    {
      subtitle: "Stebri",
      text: "Razli??na debelina, ??irina in oblika, odporni na vremenske razmere, brez vzdr??evanja",
    },
  ],
  [
    {
      subtitle: "Letvice",
      text: "Razli??ni modeli, razli??na ??irina, debelina in oblika",
    },
    {
      subtitle: "Stebri",
      text: "Razli??na debelina, ??irina in oblika, odporni na vremenske razmere, brez vzdr??evanja",
    },
  ],
  [
    {
      subtitle: "Letvice",
      text: "Izjemna kvaliteta, razli??nih dimenzij, odporne na vremenske razmere, brez vzdr??evanja",
    },
    {
      subtitle: "Stebri",
      text: "Razli??na debelina, ??irina in oblika, odporni na vremenske razmere, brez vzdr??evanja",
    },
  ],
  [
    {
      subtitle: "Letvice",
      text: "Izjemna kvaliteta, razli??nih dimenzij, odporne na vremenske razmere, brez vzdr??evanja",
    },
    {
      subtitle: "Stebri",
      text: "Razli??na debelina, ??irina in oblika, odporni na vremenske razmere, brez vzdr??evanja",
    },
  ],
];

export const productSubtitleArray2 = [
  [
    {
      subtitle: "Profili",
      text: "Razli??ni modeli, razli??na ??irina, debelina in oblika",
    },
    {
      subtitle: "Barve",
      text: "Bela, siva, oker",
    },
    {
      subtitle: "Dol??ina",
      text: "6m ali razrez na poljubno dol??ino",
    },
    {
      subtitle: "Monta??a",
      text: "Na??e podjetje ali v lastni re??iji",
    },
  ],
  [
    {
      subtitle: "Profili",
      text: "Razli??ni modeli, razli??na ??irina, debelina in oblika",
    },
    {
      subtitle: "Barve",
      text: "Tri osnovne barve: antracit, rjava in be??, ostale pra??no barvane po RAL barvni lestvici",
    },
    {
      subtitle: "Dol??ina",
      text: "6m ali razrez na poljubno dol??ino",
    },
    {
      subtitle: "Monta??a",
      text: "Na??e podjetje ali v lastni re??iji",
    },
  ],
  [
    {
      subtitle: "Profili",
      text: "Razli??ni modeli, razli??na ??irina, debelina in oblika",
    },
    {
      subtitle: "Barve",
      text: "Tri osnovne barve: antracit, rjava in be??, ostale pra??no barvane po RAL barvni lestvici",
    },
    {
      subtitle: "Dol??ina",
      text: "6m ali razrez na poljubno dol??ino",
    },
    {
      subtitle: "Monta??a",
      text: "Na??e podjetje ali v lastni re??iji",
    },
  ],
  [
    {
      subtitle: "Profili",
      text: "Razli??ni modeli, razli??na ??irina, debelina in oblika",
    },
    {
      subtitle: "Barve",
      text: "Bela, siva, oker ",
    },
    {
      subtitle: "Dol??ina",
      text: "6m ali razrez na poljubno dol??ino",
    },
    {
      subtitle: "Monta??a",
      text: "Na??e podjetje ali v lastni re??iji",
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
    title: "Pokli??ite nas",
    text: "040 568 000",
  },
  {
    title: "Pi??ite nam",
    text: "info@givos.si",
  },
  {
    title: "Ali nas obi????ite",
    text: "Srednja vas 73, ??en??ur",
  },
];

/* About Us */

export const aboutUsMainDescriptionData =
  "Smo majhno zasebno podjetje z dolgoletnimi izku??njami, ki s svojim znanjem, prijaznostjo in individualnim pristopom nudi kakovostne re??itve svojim strankam.";

export const aboutUsInfoData = [
  {
    title: "Izku??nje",
    text: [
      "S skoraj dvajset letnimi izku??njami na??im strankam zagotavljamo strokovnost, kvaliteto in individualno obravnavo. Zavedamo se svoje odgovornosti do strank in do na??ih izdelkov, ki jih strankam ponujamo. Skozi vrsto let poslovanja smo postali ute??ena ekipa, ki ve kako zagotoviti kakovost na najvi??jem nivoju. Izku??nje, zagnanost in po??tenost so na??a vrlina. Zadovoljstvo na??ih ??tevilnih strank nam daje dodatni zagon za iskanje novih idej in prilo??nosti.",
    ],
  },
  {
    title: "Kakovost",
    text: [
      "Kakovostna storitev je klju??na pri na??em poslovanju. Zadovoljstvo strank je potrditev, da s svojim strokovnim pristopom in znanjem omogo??amo kvalitetno storitev ter dovr??ene izdelke. Na?? cilj je kakovostna in kvalitetna ponudba na??ih storitev vsem na??im sedanjim in bodo??im strankam.",
    ],
  },
  {
    title: "Prijazno osebje",
    text: [
      "Z na??im osebjem se boste sre??ali ??e s prvim telefonskim klicem. Na drugi strani se bo oglasilo prijazno osebje, ki vam bo posku??alo odgovoriti na vsa va??a vpra??anja. Zavedamo se, da dobra komunikacija omogo??a najti re??itev za va??e ideje in projekte.",
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
    text: ["Srednja vas 73, ??en??ur"],
  },
  {
    title: "Telefonska ??t.:",
    text: ["040 568 000"],
  },
  {
    title: "Email:",
    text: ["info@givos.si"],
  },
  {
    title: "Delovni ??as:",
    text: ["ponedeljek - petek", "sobota", "nedelja"],
    text2: ["od 8:00 do 16.00", "ogledi pri strankah", "zaprto"],
  },
  {
    title: "Podatki o podjetju:",
    text: ["mati??na ??tevilka", "dav??na ??tevilka", "TRR"],
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
    placeholder: "Telefonska ??t.",
    id: "telefon",
    type: "number",
    error: "Prosimo vnesite svojo telefonsko ??tevilko",
  },
  {
    placeholder: "Elektronska po??ta",
    id: "mail",
    type: "mail",
    error: "Prosimo vnesite svoj elektronski naslov",
  },
  {
    placeholder: "Povpra??evanje",
    id: "povprasevanje",
    type: "text",
    error: "Prosimo vnesite povpra??evanje",
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
      "Ograje po va??ih ??eljah - kvalitetno in ugodno! Prodajamo in montiramo razli??ne vrste ograj v PVC ali ALU izvedbi. Po ??elji jih opremimo z motornim pogonom.",
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
      "PVC vrata - kvalitetna, hitra in prilagodljiva izdelava. V podjetju Givos za vas po va??ih ??eljah pvc vrata izdelamo in tudi montiramo na va??i lokaciji.",
      "ALU ograje za stanovanjske hi??e in poslovne stavbe. Kvalitetna in hitra izvedba. V podjetju Givos za vas alu ograje izdelamo in montiramo.",
      "ALU vrata - kvalitetna, hitra in prilagodljiva izdelava. V podjetju Givos za vas po va??ih ??eljah pvc vrata izdelamo in tudi montiramo na va??i lokaciji.",
      "PVC ograje so idealna re??itev za va?? balkon ali dvori????na vrata. Izdelujemo in montiramo pvc ograje v razli??nih barvah in oblikah. Prilgodljivo va??im ??eljam.",
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
