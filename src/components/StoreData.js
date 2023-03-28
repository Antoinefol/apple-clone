import { default as macBookAir } from "../apple-images/shop-items/macBookAir.jpg";
import { default as macbookPro } from "../apple-images/shop-items/macbookPro.png";
import { default as Mac } from "../apple-images/store-image/mac.png";
import { default as iphone13 } from "../apple-images/shop-items/iphone13.png";
import { default as iphone14 } from "../apple-images/shop-items/iphone14.png";
import { default as iphone } from "../apple-images/store-image/iphone.png";
import { default as ipadAir } from "../apple-images/shop-items/ipadAir.png";
import { default as ipad10 } from "../apple-images/shop-items/ipad10.png";
import { default as ipad } from "../apple-images/store-image/ipad.png";
import { default as watchUltra } from "../apple-images/shop-items/watchUltra.png";
import { default as Watch8 } from "../apple-images/shop-items/watch8.png";
import { default as watch } from "../apple-images/store-image/watch.png";
import { default as airpods2 } from "../apple-images/shop-items/airpods2.png";
import { default as airpodmax } from "../apple-images/shop-items/airpod_max.png";
import { default as airpods } from "../apple-images/store-image/airpods.png";
import { default as appletv } from "../apple-images/shop-items/apple-tv.png";
import { default as homePod } from "../apple-images/shop-items/homePod.png";
import { default as home } from "../apple-images/store-image/home.png";
import { default as airtag } from "../apple-images/shop-items/airtag.png";
import { default as Case } from "../apple-images/shop-items/case.png";
import { default as accessoires } from "../apple-images/store-image/accessoires.png";
import { default as gift } from "../apple-images/shop-items/gift.png";

export const storeData = [
  {
    type: "Mac",
    product: [
      {
        name: "MacBook Air avec puce M1",
        prix: 1199,
        screen: " 13.3 pouces",
        puce: "Puce Apple M1",
        RAM: "8 Go ou 16 Go de mémoire unifiée",
        stockage: "256 Go à 2 To de stockage",
        autonomie: "jusqu'à 18 heures d'autonomie",
        gadgets: "Touch ID, Touch bar",
        options: {
          stockage: {
            taille1: { taille: "256 Go", prix: 0 },
            taille2: { taille: "512 Go", prix: 230 },
            taille3: { taille: "1 To", prix: 460 },
            taille4: { taille: "2 To", prix: 920 },
          },
          RAM: {
            taille1: { taille: "8 Go", prix: 0 },
            taille2: { taille: "16 Go", prix: 230 },
          },
        },
        dimensions: {
          Hauteur: "0.41 à 1.61 cm",
          Largeur: "30.41cm",
          Profondeur: "21.24cm",
          Poids: "1.29 kg",
        },
        exploitation: "macOS",
        productImage: macBookAir,
      },
      {
        name: 'MacBook Pro 13"',
        prix: 1599,
        screen: " 13.3 pouces",
        puce: "Puce Apple M2",
        RAM: "8 Go à 24 Go de mémoire unifiée",
        stockage: "256 Go à 2 To de stockage",
        autonomie: "jusqu'à 20 heures d'autonomie",
        gadgets: "Touch ID , Touch Bar",
        options: {
          stockage: {
            taille1: { taille: "256 Go", prix: 0 },
            taille2: { taille: "512 Go", prix: 230 },
            taille3: { taille: "1 To", prix: 460 },
            taille4: { taille: "2 To", prix: 920 },
          },
          RAM: {
            taille1: { taille: "8 Go", prix: 0 },
            taille2: { taille: "16 Go", prix: 230 },
          },
        },
        dimensions: {
          Hauteur: "1.56cm",
          Largeur: "30.41cm",
          Profondeur: "21.24cm",
          Poids: "1.4 kg",
        },
        exploitation: "macOS",

        productImage: macbookPro,
      },
    ],
    frontImage: Mac,
  },

  {
    type: "IPhone",
    product: [
      {
        name: 'Iphone 13"',
        prix: 809,
        screen: " 6.1  pouces",
        puce: "Puce A15 Bionic avec GPU 4 coeurs",
        RAM: "8 Go à 24 Go de mémoire unifiée",
        stockage: "128 Go à 512 Go de stockage",
        autonomie: "jusqu'à 19 heures d'autonomie",
        gadgets: "Face ID , 5G",
        dimensions: {
          Hauteur: "146.7 mm",
          Largeur: "71.5 mm",
          Profondeur: "7.65 mm",
          Poids: "173 g",
        },
        exploitation: "IOS",

        productImage: iphone13,
      },
      {
        type: "IPhone",
        name: 'Iphone 14"',
        prix: 1019,
        screen: " 6.7 pouces",
        puce: "Puce A16 Bionic",
        RAM: "8 Go à 24 Go de mémoire unifiée",
        stockage: "128 Go à 512 Go de stockage",
        autonomie: "jusqu'à 29 heures d'autonomie",
        gadgets: "Face ID , 5G",
        dimensions: {
          Hauteur: "146.7 mm",
          Largeur: "71.5 mm",
          Profondeur: "7.8 mm",
          Poids: "172 g",
        },
        exploitation: "IOS",

        productImage: iphone14,
      },
    ],
    frontImage: iphone,
  },

  {
    type: "IPad",
    product: [
      {
        name: "Ipad Air",
        prix: 789,
        screen: "10.9 pouces",
        puce: "Puce Apple M1",
        RAM: "8 Go ",
        stockage: "64 Go à 256 Go de stockage",
        autonomie: "jusqu'à 10 heures d'autonomie",
        dimensions: {
          Hauteur: "247.6 mm",
          Largeur: "178.5 mm",
          Profondeur: "6.1 mm",
          Poids: "461 g",
        },
        exploitation: "IPadOS 16",

        productImage: ipadAir,
      },
      {
        type: "IPad",
        name: "Ipad 10e génération",
        prix: 589,
        screen: "10.9 pouces",
        puce: "Puce A14 Bionic",
        RAM: "8 Go ",
        stockage: "64 Go à 256 Go de stockage",
        autonomie: "jusqu'à 10 heures d'autonomie",
        dimensions: {
          Hauteur: "248.6 mm",
          Largeur: "179.5 mm",
          Profondeur: "7 mm",
          Poids: "481 g",
        },
        exploitation: "IPadOS 16",
        productImage: ipad10,
      },
    ],
    frontImage: ipad,
  },

  {
    type: "Watch",
    product: [
      {
        name: "Apple Watch Ultra",
        prix: 999,
        screen: "410 x 502 pixels",
        puce: "SiP S8 avec processeur bicœur 64 bits",
        RAM: "",
        stockage: "",
        autonomie: "jusqu'à 36 heures d'autonomie",
        dimensions: {
          Hauteur: "49 mm",
          Largeur: "44 mm",
          Profondeur: "14.4 mm",
          Poids: "61.3 g",
        },
        exploitation: "WatchOS",
        productImage: watchUltra,
      },
      {
        type: "Watch",
        name: "Apple Watch Serie 8",
        prix: 499,
        screen: "396 x 484 pixels",
        puce: "SiP S8 avec processeur bicœur 64 bits",
        RAM: "",
        stockage: "",
        autonomie: "jusqu'à 18 heures d'autonomie",
        dimensions: {
          Hauteur: "45 mm",
          Largeur: "38 mm",
          Profondeur: "10.7 mm",
          Poids: "de 38.8 g a 51.5 g",
        },
        exploitation: "WatchOS",
        productImage: Watch8,
      },
    ],
    frontImage: watch,
  },

  {
    type: "airpods",
    product: [
      {
        name: "Airpods 3e génération",
        prix: 159,
        puce: "Puce H1",
        autonomie: "jusqu'à 5 heures d'autonomie",
        dimensions: {
          Hauteur: "40.5 mm",
          Largeur: "16.5 mm",
          Profondeur: "18 mm",
          Poids: "28.2 g",
        },
        productImage: airpods2,
      },
      {
        type: "airpods",
        name: "Airpods Max",
        prix: 629,
        puce: "Puce H1",
        autonomie: "jusqu'à 20 heures d'autonomie",
        dimensions: {
          Hauteur: "187.3 mm",
          Largeur: "168.6 mm",
          Profondeur: "83.4 mm",
          Poids: "384.8 g",
        },
        productImage: airpodmax,
      },
    ],
    frontImage: airpods,
  },

  {
    type: "home",
    product: [
      {
        name: "Apple TV 4K",
        prix: 169,
        résolution: "4K",
        puce: "Puce A15 Bionic",
        stockage: "64 Go",
        dimensions: {
          Hauteur: "31 mm",
          Largeur: "93 mm",
          Profondeur: "93 mm",
          Poids: "208 g",
        },
        productImage: appletv,
      },
      {
        type: "home",
        name: "HomePod",
        prix: 349,
        dimensions: {
          Hauteur: "168 mm",
          Largeur: "148 mm",
          Profondeur: "148 mm",
          Poids: "2.3 kg",
        },
        productImage: homePod,
      },
    ],
    frontImage: home,
  },

  {
    type: "accessoires",
    product: [
      {
        name: "AirTag",
        prix: 19,
        dimensions: {
          Hauteur: "8 mm",
          Largeur: "31.9 mm",
          Profondeur: "31.9 mm",
          Poids: "11 g",
        },
        productImage: airtag,
      },
      {
        type: "accessories",
        name: "coque",
        prix: 59,
        productImage: Case,
      },
    ],
    frontImage: accessoires,
  },

  {
    type: "cadeaux",
    product: [
      {
        name: "giftcard",
        prix: 25,
        productImage: gift,
      },
    ],
    frontImage: gift,
  },
];
