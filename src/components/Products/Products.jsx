import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../features/products/productsSlice";
import Product from "./Product/Product";

const Products = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return <div><Product/></div>;
};

export default Products;
