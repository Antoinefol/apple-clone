import React from "react";
import { Link } from 'react-router-dom';


export function HomeButton(){
    return(
        <div className="HomeButton">
            <Link className="link"to="/"><div className="square"></div></Link>
        </div>  
    )
}