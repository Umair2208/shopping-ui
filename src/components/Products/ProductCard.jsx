function ProductCard({ product }) {
  return (
    <div className="productCard">
      {product.tag && (
        <span className="badge" style={{ backgroundColor: product.bg }}>
          {product.tag}
        </span>
      )}

      <img src={product.image} alt={product.title} />

      <p className="proId">{product.productId}</p>
      <h4>{product.title}</h4>
      <p className="price">
        <span>As low as</span>${product.price}
      </p>
    </div>
  );
}

export default ProductCard;
