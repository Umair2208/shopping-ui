import { useState, useEffect } from "react";
import "./Hero.css";
import bg from "../../assets/images/carousel_bg.png";

function Hero() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      title: "MEN’S BAGS",
      subtitle: "2025 Collection",
      image: bg,
    },
    {
      title: "MEN’S BAGS 2",
      subtitle: "2025 Collection",
      image: bg,
    },
    {
      title: "MEN’S BAGS 3",
      subtitle: "2025 Collection",
      image: bg,
    },
    {
      title: "MEN’S BAGS 4",
      subtitle: "2025 Collection",
      image: bg,
    },
  ];

  return (
    <section className="hero" id="hero">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <button>Shop Now</button>
            </div>
          </div>
        ))}

        <div className="dots">
          {slides.map((_, i) => (
            <span
              key={i}
              className={i === current ? "dot active" : "dot"}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
