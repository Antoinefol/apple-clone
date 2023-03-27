import React from "react";
import { StoreComponent } from "./ItemsNav";
import { HomeButton } from "./HomeButton";

export function Store() {
  return (
    <div>
      <div className="storeWrap">
        <StoreComponent />
      </div>
      <HomeButton />
    </div>
  );
}
