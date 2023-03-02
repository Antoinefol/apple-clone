import React from "react";
import { HomeButton } from "./HomeButton"
import { BigImage } from "./BigImage"
import { LittleImages } from "./LittleImages"

export function Blog() {
    return (
      <div className="blog-wrap">
        <BigImage imageSrc="iphone14-pro.jpg"/>
        <BigImage imageSrc="iphone14-tall.jpg"/>
        <BigImage imageSrc="apple-tall.jpg"/>
        <LittleImages imageSrc="promo.jpg"/>
        <LittleImages imageSrc="ipad-cover.jpg"/>
        
        <HomeButton/>
      </div>
    );
  }
  

  