import React from "react";

export function LittleImages(props) {
  return (
    <div className="Little">
      <div className="text" style={{ color: props.textColor }}>
        {props.logo !== "" && props.logo && (
          <img className="logo" src={props.logo} alt="" />
        )}
        {props.title !== "" && props.title && (
          <div className="productName">{props.title}</div>
        )}
        {props.catchphrase !== "" && props.catchphrase && (
          <div className="catchphrase">{props.catchphrase}</div>
        )}
        <div className="links">
          {props.MoreLink !== "" && props.MoreLink && (
            <a href={`${props.MoreLink}`}>En savoir plus</a>
          )}
          {props.BuyLink !== "" && props.BuyLink && (
            <a href={`${props.BuyLink}`}>Acheter</a>
          )}
        </div>
      </div>
      {props.imageSrc && <img src={props.imageSrc} alt="" />}
    </div>
  );
}
