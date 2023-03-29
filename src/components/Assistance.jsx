import React from "react";
import { AssistanceComponent } from "./assistanceComponent";
import { HomeButton } from "./HomeButton";
import { AssistanceComponentSided } from "./assistanceComponentSideImg";
import { default as lastmaj } from "../apple-images/Assistance/lastMAJ.png";
import { default as appleStore } from "../apple-images/Assistance/appleStore.png";
import { default as getSupport } from "../apple-images/Assistance/getSupport.png";
import { default as AppleCare } from "../apple-images/Assistance/AppleCare.png";
import { default as appleTrade } from "../apple-images/Assistance/appleTrade.png";

export function Assistance() {
  return (
    <div className="assistanceWrap">
      <div className="banner-wrap">
        <div className="banner"></div>
      </div>
      <div className="cards">
        <AssistanceComponent
          title="Télécharger la dernière mise à jour"
          content="Passer à iOS 16 ou iPadOS 16."
          Link="a"
          LinkText="Découvrir la marche à suivre"
          imageSrc={lastmaj}
        />
        <AssistanceComponent
          title="Gérer votre confidentialité"
          content="Rejoignez-nous à l’Apple Store pour une session de 30 minutes au cours de laquelle vous découvrirez comment protéger votre confidentialité sur l’iPhone."
          Link="a"
          LinkText="S’inscrire"
          imageSrc={appleStore}
        />
        <AssistanceComponent
          title="Bénéficier d’une assistance"
          content="Décrivez-nous votre problème et nous vous proposerons la meilleure solution. Contactez-nous par téléphone, par chat, par e-mail ou par d’autres moyens."
          Link="a"
          LinkText="Commencer dès maintenant"
          imageSrc={getSupport}
        />
        <AssistanceComponent
          title="Mon assistance"
          content="Obtenez des informations à jour sur vos produits Apple, notamment sur votre couverture, vos réparations et bien plus encore."
          Link="a"
          LinkText="Se connecter à Mon assistance"
          imageSrc=""
        />
        <AssistanceComponentSided
          title="Couverture AppleCare+"
          content="Bénéficiez de réparations illimitées en cas de dommages accidentels, d’un accès prioritaire aux experts Apple, et plus encore."
          Link="a"
          LinkText="Informations supplémentaires"
          LeftOrRight="Right"
          imageSrc={AppleCare}
        />
        <AssistanceComponentSided
          title="Apple Trade In"
          content="Bénéficiez d’une réduction sur l’achat d’un nouvel appareil en restituant l’ancien ou recyclez-le gratuitement. "
          Link="a"
          LinkText="En savoir plus"
          LeftOrRight="Left"
          imageSrc={appleTrade}
        />
        <AssistanceComponent
          title="Des réparations sûres et dignes de confiance"
          content="Chez Apple, chaque produit que nous fabriquons est conçu pour durer. Nous concevons des appareils durables, faciles à utiliser et dotés de fonctionnalités innovantes sur lesquelles les clients peuvent compter, le tout en protégeant leurs données et leur confidentialité. En cas de besoin, les clients doivent pouvoir bénéficier de réparations sûres, fiables et sécurisées utilisant des pièces détachées Apple d’origine.Découvrez l’approche d’Apple pour améliorer l’accès à des réparations fiables et sûres."
          Link="a"
          LinkText="En savoir plus (PDF)"
          imageSrc=""
        />
        <AssistanceComponent
          title="Méfiez-vous des pièces de contrefaçon"
          content="Certains adaptateurs secteur et batteries contrefaits et tiers peuvent être mal conçus et engendrer des problèmes de sécurité. Nous vous recommandons de vous rendre dans un magasin Apple Store ou dans un centre de services agréé Apple si vous souhaitez être sûr de bénéficier d’une batterie Apple d’origine lors d’un remplacement de batterie. Si vous avez besoin d’un adaptateur de remplacement pour charger votre appareil Apple, nous vous conseillons de vous procurer un adaptateur secteur Apple.
          Par ailleurs, les écrans de remplacement non d’origine peuvent présenter une moins bonne qualité d’image et ne pas fonctionner correctement. Les réparations d’écran certifiées Apple sont réalisées par des experts de confiance qui utilisent des pièces détachées Apple authentiques."
          Link=""
          LinkText=""
          imageSrc=""
        />
      </div>
      <HomeButton />
    </div>
  );
}
