import { Link } from "react-router";
import { FaPlus } from "react-icons/fa";
import { useEffect } from "react";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductsTable from "@/components/products/page";

const ProductList = () => {
  const { products, setProducts } = useContext(ProductsContext);

  return <ProductsTable />;
};

export default ProductList;
