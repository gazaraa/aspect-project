import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Product } from "./product";
import "./shop.css";
import axios from 'axios';


export const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Welcome to our shop!</h1>
      </div>

      <div className="products">
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
      <div className="buttonContainer">
        <Link to="/addProduct">
          <input
            className={"Bttn"}
            type="button"
            onClick={null}
            value="Add Product"
          />
        </Link>
      </div>
    </div>
  );
};
