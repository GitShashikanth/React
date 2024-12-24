import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, price, description, image, category }) => {
  return (
    <div className="card">
      <img src={image} width={"100%"} height={200} alt={title} />
      <div className="card-content">
        <h3 className="product-title">{title.trim().slice(0, 10)}</h3>
        <p className="product-category">Category: {category}</p>
        <p className="product-description">
          {description.trim().slice(0, 10)}...
        </p>
        <p className="product-price">${price}</p>
      </div>
      <Link to={`/productDetails/${id}`}>
        <button>Product Details</button>
      </Link>
    </div>
  );
};

export default ProductCard;
