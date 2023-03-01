import React from "react";
import {
  Link
} from "react-router-dom";
import { HomeButton } from "./HomeButton"

export function Home() {
    return (
      <div className="App">
     
    <div>
      <h1>Home Page</h1>
      <nav>
        
            <Link to="/Store">Page 1</Link>
          
        
            <Link to="/Blog">Page 2</Link>
          
            <Link to="/Assistance">Page 3</Link>
          
            <Link to="/Profile">Page 4</Link>
         
      </nav>
    </div>
    <HomeButton/>
      </div>
    );
  }
  
  
  