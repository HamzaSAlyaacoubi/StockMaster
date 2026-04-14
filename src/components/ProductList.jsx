import { Link } from "react-router";
import { FaPlus } from "react-icons/fa";
import { useEffect } from "react";
import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

const ProductList = () => {
  const { products, setProducts } = useContext(ProductsContext);

  const productsJSX = products.map((p) => {
    return (
      <div
        key={p.id}
        className="flex flex-col m-2 p-3 border-2 bg-gray-200 rounded-2xl "
      >
        <h1 className="text-2xl font-bold">{p.name}</h1>
        <p>{p.category}</p>
        <p>{p.priceHT}</p>
        <p>{p.stock}</p>
        <p>{p.description}</p>
      </div>
    );
  });

  useEffect(() => {
    const localProducts = JSON.parse(localStorage.getItem("products"));
    setProducts(localProducts);
  }, []);
  return (
    <>
      <Link to="/products/add">
        <span className="text-3xl">
          <FaPlus />
        </span>
      </Link>
      <div className="grid grid-cols-4">{productsJSX}</div>
    </>
  );
};

export default ProductList;
