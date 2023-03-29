import React from "react";

export function AssistanceComponentSided(props) {
  return (
    <div
      className="card-item sideimg"
      style={
        props.LeftOrRight === "Right"
          ? { flexDirection: "row" }
          : { flexDirection: "row-reverse" }
      }
    >
      <div className="cardText" style={{ textAlign: "left" }}>
        {props.title !== "" && props.title && (
          <div className="card-title">{props.title}</div>
        )}
        {props.content !== "" && props.content && (
          <p className="card-content">{props.content}</p>
        )}
        <div className="cardLinks">
          {props.Link !== "" && props.Link && (
            <a className="cardLinks" href={`${props.Link}`}>
              {props.LinkText}
            </a>
          )}
        </div>
      </div>
      {props.imageSrc && (
        <img className="imgSide" src={props.imageSrc} alt="" />
      )}
    </div>
  );
}
