import React from "react";
import { StoreComponent } from "./ItemsNav"
import { HomeButton } from "./HomeButton"

export function Store() {
    return (
      <div className="storeWrap">
      <StoreComponent/>
      <HomeButton/>
      </div>
    );
  }
  

  