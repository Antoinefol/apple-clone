import React, { useState } from "react";

export function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleItemClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel">
      <div className="carousel-image">
        <img src={images[currentIndex]} alt="Carousel" />
      </div>
      <ul className="carousel-indicators">
        {images.map((_, index) => (
          <li
            key={index}
            className={currentIndex === index ? "active" : ""}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </ul>
    </div>
  );
}

