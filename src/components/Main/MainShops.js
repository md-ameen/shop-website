import React from "react";
import { useNavigate } from "react-router-dom";
import MainShop from "./MainShop";

import "./MainShops.css";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/uiSlice";

import women_1 from "../../assets/women-1.jpg";

const MainShops = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productListHandler = (productCategory) => {
    // Navigate to the Product component page with the productCategory as a parameter
    navigate('/products', { state: { category: productCategory } });
  };

  return (
    <div className="mainShops">
      <div className="mainShops__container">
        <MainShop
          mainTitle="Women"
          image={women_1}
          onListHandler={() => productListHandler("womens_category")}
        />
        <MainShop
          mainTitle="Men"
          image={women_1}
          onListHandler={() => productListHandler("mens_category")}
        />
        <MainShop
          mainTitle="Girls"
          image={women_1}
          onListHandler={() => productListHandler("girls_category")}
        />
        <MainShop
          mainTitle="Boys"
          image={women_1}
          onListHandler={() => productListHandler("boys_category")}
        />
      </div>
    </div>
  );
};

export default MainShops;
