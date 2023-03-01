import React from "react";
import {
  Link
} from "react-router-dom";
import { HomeButton } from "./HomeButton"


export function Home() {
    return (
      <div className="page-wrap">
        <div className="portals-wrap">
        <Link className="portals" to="Store">Store</Link>
        <Link className="portals" to="Blog">Blog</Link>
        <Link className="portals" to="Assistance">Assistance</Link>
        <Link className="portals" to="Profile">Profile</Link> 
        </div>
      <HomeButton/>
      </div>
    );
  }
  
  
  