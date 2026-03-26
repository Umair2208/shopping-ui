import { useEffect, useState } from "react";
import data from "../../data/products.json";
import ProductCard from "./ProductCard";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import img7 from "../../assets/images/img7.png";
import img8 from "../../assets/images/img8.png";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  const imageMap = {
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
  };

  useEffect(() => {
    const updatedProducts = data.map((item) => ({
      ...item,
      image: imageMap[item.image],
    }));

    setTimeout(() => {
      setProducts(updatedProducts);
    }, 400);
  }, []);

  return (
    <section className="productWrap">
      <div className="container">
        <h2>Featured Products</h2>

        {products.length === 0 ? (
          <p className="loading">Loading...</p>
        ) : (
          <div className="productGrid">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}

        <div className="viewAll">
          <button>View All</button>
        </div>
      </div>
    </section>
  );
}

export default Products;
