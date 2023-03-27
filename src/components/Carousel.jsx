import React, { useState, useEffect } from "react";

export function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const intervalId = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(intervalId);
  }, [current, length]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="carousel">
      <section className="slider">
        <div className="slides-container">
          {slides.map((slide, index) => (
            <div
              className={`
              slide
              ${index === current ? "active" : ""}
              ${index === current - 1 ? "previous" : ""}
              ${index === current + 1 ? "next" : ""}
              ${
                index !== current &&
                index !== current - 1 &&
                index !== current + 1
                  ? "inactive"
                  : ""
              }
            `}
              key={index}
            >
              <img src={slide.image} alt="serie" className="image" />
            </div>
          ))}
        </div>
      </section>
      <ul className="carousel-indicators">
        {slides.map((slide, index) => (
          <li
            key={index}
            className={index === current ? "active" : ""}
            onClick={() => setCurrent(index)}
          />
        ))}
      </ul>
    </div>
  );
}
