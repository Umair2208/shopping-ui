import React, { useState } from "react";
import "./Testimonials.css";
import quotes from "../../assets/images/quotes.png";

const testimonials = [
  {
    text: "We needed a way to make a lasting impression at trade shows, and Cosmo Promos delivered! Their design team created eye-catching promotional items that perfectly captured our brand. The quality was outstanding, and we’ve seen a significant increase in booth traffic and lead generation. Their attention to detail and commitment to our vision were truly exceptional.",
    name: "Helena Gibbons",
  },
  {
    text: "2 We needed a way to make a lasting impression at trade shows, and Cosmo Promos delivered! Their design team created eye-catching promotional items that perfectly captured our brand. The quality was outstanding, and we’ve seen a significant increase in booth traffic and lead generation. Their attention to detail and commitment to our vision were truly exceptional.",
    name: "Helena Gibbons 2",
  },
  {
    text: "3 We needed a way to make a lasting impression at trade shows, and Cosmo Promos delivered! Their design team created eye-catching promotional items that perfectly captured our brand. The quality was outstanding, and we’ve seen a significant increase in booth traffic and lead generation. Their attention to detail and commitment to our vision were truly exceptional.",
    name: "Helena Gibbons 3",
  },
  {
    text: "4 We needed a way to make a lasting impression at trade shows, and Cosmo Promos delivered! Their design team created eye-catching promotional items that perfectly captured our brand. The quality was outstanding, and we’ve seen a significant increase in booth traffic and lead generation. Their attention to detail and commitment to our vision were truly exceptional.",
    name: "Helena Gibbons 4",
  },
  {
    text: "5 We needed a way to make a lasting impression at trade shows, and Cosmo Promos delivered! Their design team created eye-catching promotional items that perfectly captured our brand. The quality was outstanding, and we’ve seen a significant increase in booth traffic and lead generation. Their attention to detail and commitment to our vision were truly exceptional.",
    name: "Helena Gibbons 5",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(1);

  return (
    <section className="testimonialSection">
      <h2>Testimonials</h2>

      <div className="testimonialBox">
        <div className="quoteIcon">
          <img src={quotes} alt="quotes" />
        </div>

        <p className="testimonialText">{testimonials[current].text}</p>

        <h4 className="author">{testimonials[current].name}</h4>
      </div>

      <div className="dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
