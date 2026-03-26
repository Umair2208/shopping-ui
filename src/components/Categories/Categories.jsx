import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import apparels from "../../assets/images/apparels.png";
import bags from "../../assets/images/bags.png";
import drinkwares from "../../assets/images/drinkware.png";
import lanyards from "../../assets/images/lanyard.png";
import "./Categories.css";

const data = [
  { title: "Apparel", image: apparels },
  { title: "Bags", image: bags },
  { title: "Drinkware", image: drinkwares },
  { title: "Lanyard", image: lanyards },
  { title: "Lanyard", image: lanyards },
  { title: "Drinkware", image: drinkwares },
  { title: "Bags", image: bags },
  { title: "Apparel", image: apparels },
];

const Categories = () => {
  const [index, setIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setIndex(0);
  }, [itemsPerView]);

  const next = () => {
    if (index + itemsPerView < data.length) {
      setIndex(index + itemsPerView);
    }
  };

  const prev = () => {
    if (index - itemsPerView >= 0) {
      setIndex(index - itemsPerView);
    }
  };

  const visibleItems = data.slice(index, index + itemsPerView);

  return (
    <section className="category">
      <div className="categorySection">
        <h2>Top Categories</h2>

        <div className="carousel">
          {visibleItems.map((item, i) => (
            <div key={i} className="card">
              <img src={item.image} alt={item.title} />
              <div className="label">{item.title}</div>
            </div>
          ))}
        </div>

        <div className="controls">
          <button onClick={prev}>
            <FaArrowLeft />
          </button>
          <button onClick={next}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
