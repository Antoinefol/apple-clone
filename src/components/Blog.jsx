import React from "react";
import { HomeButton } from "./HomeButton"
import { BigImage } from "./BigImage"
import { LittleImages } from "./LittleImages"
import { Carousel } from "./Carousel"
import {CarouselData} from "./CarouselData.js";

export function Blog() {
    return (
      <div className="blog-wrap">
        <BigImage logo="" textColor="white" title="iPhone 14 Pro" catchphrase="Pro. Plus Ultra" BuyLink="a" MoreLink="a" imageSrc="iphone14-pro.jpg"/>
        <BigImage logo="" textColor="" title="iPhone 14" catchphrase="Un grand. Avec un grand Plus." BuyLink="" MoreLink="" imageSrc="iphone14-tall.jpg"/>
        <BigImage logo="logo-watch.png" textColor="white" title="" catchphrase="Plus en forme que jamais." BuyLink="" MoreLink="" imageSrc="apple-tall.jpg"/>
        <LittleImages logo="" textColor="" title="iPad" catchphrase="Vos idées. Sa magie. Du génie" BuyLink="" MoreLink="" imageSrc="ipad-cover.jpg"/>
        <LittleImages logo="" textColor="white" title="MacBook Pro" catchphrase="Boosté par les puces M2 Pro et M2 Max." BuyLink="" MoreLink="" imageSrc="promo.jpg"/>
        <LittleImages logo="" textColor="white" title="HomePod" catchphrase="Virtuose du son." BuyLink="" MoreLink="" imageSrc="homepod.jpg"/>
        <LittleImages logo="" textColor="white" title="AirPods Pro" catchphrase="Le son.Nouvelle définition" BuyLink="" MoreLink="" imageSrc="airpods.jpg"/>
        <LittleImages logo="logo-fitness.png" textColor="" title="" catchphrase="Cette année c'est votre année. Il vous suffit d'un iPhone" BuyLink="" MoreLink="" imageSrc="apple-fitness.jpg"/>
        <LittleImages logo="" textColor="white" title="Créativité et communauté. Profondément liées" catchphrase="Découvre le nouveau bracelet Black Unity et son cadran assorti." BuyLink="" MoreLink="" imageSrc="bhm-watch.jpg"/>
        <Carousel slides={CarouselData}/>
        <HomeButton   />
      </div>
    );
  }
  

  