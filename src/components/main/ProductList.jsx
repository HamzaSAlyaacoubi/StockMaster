import { Link } from "react-router";
import { FaPlus } from "react-icons/fa";
import { useEffect } from "react";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import DemoPage from "@/components/payments/page";

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
    <div className="">
      <Link className="" to="/products/add">
        <div className="text-3xl w-full flex justify-end ">
          <FaPlus className="hover:bg-gray-200 rounded-sm"/>
        </div>
      </Link>
      <div className="grid grid-cols-4">{productsJSX}</div>
      <DemoPage />
    </div>
  );
};

export default ProductList;
