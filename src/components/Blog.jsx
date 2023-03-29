import React from "react";
import { HomeButton } from "./HomeButton";
import { BigImage } from "./BigImage";
import { LittleImages } from "./LittleImages";
import { Carousel } from "./Carousel";
import { CarouselData } from "./CarouselData.js";
import { default as iphone14pro } from "../apple-images/apple-blog/iphone14-pro.jpg";
import { default as iphone14tall } from "../apple-images/apple-blog/tallIphone.jpg";
import { default as appletall } from "../apple-images/apple-blog/apple-tall.jpg";
import { default as ipadcover } from "../apple-images/apple-blog/ipad-cover.jpg";
import { default as promo } from "../apple-images/apple-blog/promo.jpg";
import { default as homepod } from "../apple-images/apple-blog/homepod.jpg";
import { default as airpods } from "../apple-images/apple-blog/airpods.jpg";
import { default as applefitness } from "../apple-images/apple-blog/apple-fitness.jpg";
import { default as bhmwatch } from "../apple-images/apple-blog/bhm-watch.jpg";
import { default as logowatch } from "../apple-images/apple-blog/logo-watch.png";
import { default as logofitness } from "../apple-images/apple-blog/logo-fitness.png";

export function Blog() {
  return (
    <div className="blog-wrap">
      <BigImage
        logo=""
        textColor="white"
        title="iPhone 14 Pro"
        catchphrase="Pro. Plus Ultra"
        BuyLink="a"
        MoreLink="a"
        imageSrc={iphone14pro}
      />
      <BigImage
        logo=""
        textColor=""
        title="iPhone 14"
        catchphrase="Un grand. Avec un grand Plus."
        BuyLink=""
        MoreLink=""
        imageSrc={iphone14tall}
      />
      <BigImage
        logo={logowatch}
        textColor="white"
        title=""
        catchphrase="Plus en forme que jamais."
        BuyLink=""
        MoreLink=""
        imageSrc={appletall}
      />
      <LittleImages
        logo=""
        textColor=""
        title="iPad"
        catchphrase="Vos idées. Sa magie. Du génie"
        BuyLink=""
        MoreLink=""
        imageSrc={ipadcover}
      />
      <LittleImages
        logo=""
        textColor="white"
        title="MacBook Pro"
        catchphrase="Boosté par les puces M2 Pro et M2 Max."
        BuyLink=""
        MoreLink=""
        imageSrc={promo}
      />
      <LittleImages
        logo=""
        textColor="white"
        title="HomePod"
        catchphrase="Virtuose du son."
        BuyLink=""
        MoreLink=""
        imageSrc={homepod}
      />
      <LittleImages
        logo=""
        textColor="white"
        title="AirPods Pro"
        catchphrase="Le son.Nouvelle définition"
        BuyLink=""
        MoreLink=""
        imageSrc={airpods}
      />
      <LittleImages
        logo={logofitness}
        textColor=""
        title=""
        catchphrase="Cette année c'est votre année. Il vous suffit d'un iPhone"
        BuyLink=""
        MoreLink=""
        imageSrc={applefitness}
      />
      <LittleImages
        logo=""
        textColor="white"
        title="Créativité et communauté. Profondément liées"
        catchphrase="Découvre le nouveau bracelet Black Unity et son cadran assorti."
        BuyLink=""
        MoreLink=""
        imageSrc={bhmwatch}
      />
      <Carousel slides={CarouselData} />
      <HomeButton />
    </div>
  );
}
