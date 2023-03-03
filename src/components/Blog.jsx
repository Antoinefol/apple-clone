import React from "react";
import { HomeButton } from "./HomeButton"
import { BigImage } from "./BigImage"
import { LittleImages } from "./LittleImages"

export function Blog() {
    return (
      <div className="blog-wrap">
        <BigImage logo="" textColor="white" title="iPhone 14 Pro" catchphrase="Pro. Plus Ultra" BuyLink="a" MoreLink="a" imageSrc="iphone14-pro.jpg"/>
        <BigImage logo="" textColor="" title="iPhone 14" catchphrase="Un grand. Avec un grand Plus." BuyLink="" MoreLink="" imageSrc="iphone14-tall.jpg"/>
        <BigImage logo="logo-watch.png" textColor="white" title="" catchphrase="Plus en forme que jamais." BuyLink="" MoreLink="" imageSrc="apple-tall.jpg"/>
        <LittleImages logo="" textColor="" title="iPad" catchphrase="Vos idées. Sa magie. Du génie" BuyLink="" MoreLink="" imageSrc="ipad-cover.jpg"/>
        <LittleImages logo="" textColor="white" title="MacBook Pro" catchphrase="Boosté par les puces M2 Pro et M2 Max." BuyLink="" MoreLink="" imageSrc="promo.jpg"/>
        <HomeButton/>
      </div>
    );
  }
  

  