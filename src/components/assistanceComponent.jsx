import React from "react";

function AssistanceComponent(props) {
  let count = 0;
  const regex = /apple-images\/Assistance\/(\d+)\.jpg/;
  const imageSrc = props.imageSrc;

  if (imageSrc.match(regex)) {
    count = parseInt(imageSrc.match(regex)[1], 10);
  }

  console.log("Image source:", imageSrc);
  console.log("Count:", count);
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
      {props.imageSrc && (
        <img
          src={`../../public/apple-images/Assistance/${props.imageSrc}`}
          alt=""
        />
      )}
    </div>
  );
}

export default AssistanceComponent;
