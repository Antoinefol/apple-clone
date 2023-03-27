import React from "react";
import { Link } from "react-router-dom";
import { HomeButton } from "./HomeButton";
import {
  faShoppingCart,
  faNewspaper,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Home() {
  return (
    <div className="page-wrap">
      <div className="portals-wrap">
        <Link className="portals" to="Store">
          <FontAwesomeIcon className="icon cart" icon={faShoppingCart} />
          SHOP
        </Link>
        <Link className="portals" to="Blog">
          <FontAwesomeIcon className="icon paper" icon={faNewspaper} />
          NEWS
        </Link>
        <Link className="portals" to="Assistance">
          <FontAwesomeIcon className="icon info" icon={faCircleInfo} />
          INFO
        </Link>
      </div>
      <HomeButton />
    </div>
  );
}
