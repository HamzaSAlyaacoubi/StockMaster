import React, { useContext, useEffect } from "react";
import { ProductsContext } from "./ProductsContext";



const FetchProducts = () => {
const {setProducts} = useContext(ProductsContext)
  {
    useEffect(() => {
      const localProducts = JSON.parse(localStorage.getItem("products"));
      setProducts(localProducts);
    }, []);
  }
  return <></>;
};

export default FetchProducts;
