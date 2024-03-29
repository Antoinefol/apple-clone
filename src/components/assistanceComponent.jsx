import React from "react";

export function AssistanceComponent(props) {
  return (
    <div className="card-item">
      <div className="cardText">
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
      {props.imageSrc && <img src={props.imageSrc} alt="" />}
    </div>
  );
}
