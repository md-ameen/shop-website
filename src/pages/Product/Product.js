import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

import { fetchCategoryData } from "../../../src/database"; // Import the database function
import "./Product.css";

const Product = () => {
  const [category, setCategory] = useState([]);
  const location = useLocation();
  const categoryName = location.state?.category;

  useEffect(() => {
    const fetchData = async () => {
      const newData = await fetchCategoryData(categoryName); // Call the database function
      setCategory(newData);
    };

    fetchData();
    console.log(category)
  }, [categoryName]);

  return (
    <div className="product">
      {category.map(item => (
        <Link className="product__link" key={item.id} to={`/products/${item.id}`}>
          <div className="product__container">
            <img className="product__image" src={item.imageUrl} alt="" />
            <div className="product__info">
              <h3>{item.title}</h3>
              <h3 className="product__price">${item.price}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Product;
