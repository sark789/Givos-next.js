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
export const productMainDescription = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet laoreet nascetur in duis nibh enim sit merg ora.",
  "Aluminijasta ograja je zelo trpežna na vremenske vplive in je elegantnega videza, ki bo popestril vašo okolico.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet laoreet nascetur in duis nibh enim sit merg ora.",
  "PVC ograja je zelo prožna in je izdelana iz visoko kakovostnih profilov, ki ne potrebujejo nobenga vzdrževanja.",
];

export const productTextArray = [
  [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem turpis quam vulputate donec at. Dui viverra magna orci, sit rhoncus cursus sodales commodo placerat. Venenatis tincidunt ullamcorper sed vitae ipsum dolor. Ac placerat mattis ut proin. Augue aliquam, in sit integer orci. Vel mi arcu vivamus mattis arcu. Cursus est sed quis habitasse.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem turpis quam vulputate donec at. Dui viverra magna orci, sit rhoncus cursus sodales commodo placerat. Venenatis tincidunt ullamcorper sed vitae ipsum dolor. Ac placerat mattis ut proin. Augue aliquam, in sit integer orci. Vel mi arcu vivamus mattis arcu. Cursus est sed quis habitasse.",
  ],
  [
    "Aluminijaste ograje so izdelane iz ALU ograjnih profilov različnih dimenzij in oblik in so prašno barvane po vaši željeni barvi (po RAL barvni lestvici). Izvedene so predvsem za zunanjo uporabo - vrt, balkon ali stopnišče. Ograje se lahko izdela na staro že obstoječo kovinsko konstrukcijo oz. med že obstoječe stebre ali pa se izdela vse na novo.",
    "ALU ograja se izdela po meri in ne potrebuje nobenega posebnega vzdrževanja. Zaradi izjemnega videza nudi estetski učinek in doprinese k modernosti vaše hiše ali stanovanja. Postavite jih lahko za namen varovanja na stopnišču, terasi, balkonu, prav tako pa omogočajo zasebnost in varovanje pred morebitnimi vlomilci.",
  ],
  [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem turpis quam vulputate donec at. Dui viverra magna orci, sit rhoncus cursus sodales commodo placerat. Venenatis tincidunt ullamcorper sed vitae ipsum dolor. Ac placerat mattis ut proin. Augue aliquam, in sit integer orci. Vel mi arcu vivamus mattis arcu. Cursus est sed quis habitasse.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem turpis quam vulputate donec at. Dui viverra magna orci, sit rhoncus cursus sodales commodo placerat. Venenatis tincidunt ullamcorper sed vitae ipsum dolor. Ac placerat mattis ut proin. Augue aliquam, in sit integer orci. Vel mi arcu vivamus mattis arcu. Cursus est sed quis habitasse.",
  ],
  [
    "Izdelane in namenjene so za zunanjo uporabo ter so odporne na klimatske vplive. PVC ograje iz naše ponudbe so odporne in prilagojene za področja kjer je zelo vroče ali pa hladno vreme. Prav tako so  odporne tudi na vplive soli v primorskih področjih. Ne potrebujejo nobenega vzdrževanja, kar vam prihrani veliko na času in denarju.",
    "PVC ograje se lahko izdelajo v beli, sivi, oker, beš barvi ter v imitacija zlatega hrasta. Garancija na obstojnost bele barve je 10 let, na ostale barve pa 5 let. ",
  ],
];

export const productSubtitleArray = [
  [
    {
      subtitle: "Letvice",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem turpis quam vulputate donec at. Dui viverra magna orci, sit rhoncus cursus sodales commodo placerat.",
    },
    {
      subtitle: "Stebri",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem turpis quam vulputate donec at. Dui viverra magna orci, sit rhoncus cursus sodales commodo placerat.",
    },
  ],
  [
    {
      subtitle: "Letvice",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem turpis quam vulputate donec at. Dui viverra magna orci, sit rhoncus cursus sodales commodo placerat.",
    },
    {
      subtitle: "Stebri",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem turpis quam vulputate donec at. Dui viverra magna orci, sit rhoncus cursus sodales commodo placerat.",
    },
  ],
  [
    {
      subtitle: "Letvice",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem turpis quam vulputate donec at. Dui viverra magna orci, sit rhoncus cursus sodales commodo placerat.",
    },
    {
      subtitle: "Stebri",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem turpis quam vulputate donec at. Dui viverra magna orci, sit rhoncus cursus sodales commodo placerat.",
    },
  ],
  [
    {
      subtitle: "Letvice",
      text: "PVC ograjni profili iz katerih izdelujemo PVC ograje so izdelani iz enake surovine kot so PVC okna. So izredno visoke kvalitete in laboratorijsko preizkušeni ter UV stabilizirani. Pomemben podatek je to, da niso izdelani iz recikliranega materiala.",
    },
    {
      subtitle: "Stebri",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem turpis quam vulputate donec at. Dui viverra magna orci, sit rhoncus cursus sodales commodo placerat.",
    },
  ],
];

export const productSubtitleArray2 = [
  [
    {
      subtitle: "Profili",
      text: "Profil1, Profil2, Profil3, Profil4, Profil5, Profil6, Profil7",
    },
    {
      subtitle: "Barve",
      text: "3 osnovne ali prašno po meri",
    },
    {
      subtitle: "Dolžina",
      text: "6m",
    },
    {
      subtitle: "Montaža",
      text: "Sami ali mi, prevoz itd.",
    },
  ],
  [
    {
      subtitle: "Profili",
      text: "Profil1, Profil2, Profil3, Profil4, Profil5, Profil6, Profil7",
    },
    {
      subtitle: "Barve",
      text: "3 osnovne ali prašno po meri",
    },
    {
      subtitle: "Dolžina",
      text: "6m",
    },
    {
      subtitle: "Montaža",
      text: "Sami ali mi, prevoz itd.",
    },
  ],
  [
    {
      subtitle: "Profili",
      text: "Profil1, Profil2, Profil3, Profil4, Profil5, Profil6, Profil7",
    },
    {
      subtitle: "Barve",
      text: "3 osnovne ali prašno po meri",
    },
    {
      subtitle: "Dolžina",
      text: "6m",
    },
    {
      subtitle: "Montaža",
      text: "Sami ali mi, prevoz itd.",
    },
  ],
  [
    {
      subtitle: "Profili",
      text: "P062, P020, P021, P048, P063, P090, P055, kombinacija P062 in P069",
    },
    {
      subtitle: "Barve",
      text: "Bela, siva, oker, beš, imitacija zlatega hreasta (renolit folija)",
    },
    {
      subtitle: "Dolžina",
      text: "6m",
    },
    {
      subtitle: "Montaža",
      text: "Sami ali mi, prevoz itd.",
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
  [
    "P024, balkonska ograja",
    "P024, balkonska ograja",
    "P024, balkonska ograja",
    "P024, balkonska ograja",
  ],
  [
    "P024, balkonska ograja",
    "P024, balkonska ograja",
    "P024, balkonska ograja",
    "P024, balkonska ograja",
  ],
  [
    "P024, balkonska ograja",
    "P024, balkonska ograja",
    "P024, balkonska ograja",
    "P024, balkonska ograja",
  ],
  [
    "P024, balkonska ograja",
    "P024, balkonska ograja",
    "P024, balkonska ograja",
    "P024, balkonska ograja",
  ],
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
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet laoreet nascetur in duis nibh enim sit merg ora.";

export const aboutUsInfoData = [
  {
    title: "Izkušnje",
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
    ],
  },
  {
    title: "Kakovost",
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem turpis quam vulputate donec at. Dui viverra magna orci, sit rhoncus cursus sodales commodo placerat. ",
    ],
  },
  {
    title: "Prijazno osebje",
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem turpis quam vulputate donec at. Dui viverra magna orci, sit rhoncus cursus sodales commodo placerat. ",
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
