import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "./ProductCard.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");

  const fetchProducts = (category) => {
    let url = "https://fakestoreapi.com/products";
    if (category !== "all") {
      url += `/category/${category}`;
    }
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data);
        setCategory(category);
      })
      .catch((err) => {
        console.error("Error fetching products", err);
      });
  };

  return (
    <>
      <div className="buttonContainer">
        <label>
          <input
            type="radio"
            checked={category === "all"}
            onChange={() => fetchProducts("all")}
          />
          All Products
        </label>
        <label>
          <input
            type="radio"
            checked={category === "electronics"}
            onChange={() => fetchProducts("electronics")}
          />
          Electronics
        </label>
        <label>
          <input
            type="radio"
            checked={category === "jewelery"}
            onChange={() => fetchProducts("jewelery")}
          />
          Jewellary
        </label>
        <label>
          <input
            type="radio"
            checked={category === "men's clothing"}
            onChange={() => fetchProducts("men's clothing")}
          />
          Men's Clothing
        </label>
        <label>
          <input
            type="radio"
            checked={category === "women's clothing"}
            onChange={() => fetchProducts("women's clothing")}
          />
          Women's Clothing
        </label>
      </div>
      <div className="cards-container">
        {products.map((product) => (
          <ProductCard
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
            category={product.category}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
