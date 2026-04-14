import { useState } from "react";
import "./App.css";

import { Link, Route, Routes } from "react-router";
import { v4 as uuidv4 } from "uuid";

// Components
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import Dashboard from "./components/Dashboard";

// Context
import { ProductsContext } from "./contexts/ProductsContext";

function App() {
  const initialProducts = [
    {
      id: uuidv4(),
      name: "Ordinateur HP",
      category: "Electronique",
      priceHT: 800,
      tva: 20,
      stock: 12,
      description: "Un PC puissant pour le dev.",
    },
    {
      id: uuidv4(),
      name: "Ordinateur DELL",
      category: "Electronique",
      priceHT: 1100,
      tva: 20,
      stock: 20,
      description: "Un PC de Gaming.",
    },
    {
      id: uuidv4(),
      name: "Meuble 120x180x60cm",
      category: "Meubles",
      priceHT: 500,
      tva: 10,
      stock: 25,
      description: "Un meuble blanc pour vetements",
    },
    {
      id: uuidv4(),
      name: "Costume Noir",
      category: "Vêtements",
      priceHT: 500,
      tva: 15,
      stock: 8,
      description: "Costume noir classe",
    },
    {
      id: uuidv4(),
      name: "Jacket Adidas",
      category: "Vêtements",
      priceHT: 1500,
      tva: 15,
      stock: 13,
      description: "Jacket adidas bleu fonce",
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  const clearStorage = () => {
    localStorage.setItem("products", JSON.stringify(initialProducts))
    setProducts(initialProducts)
  }

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <ul className="w-[15%] flex flex-col gap-1 mt-4">
        <li className="text-lg font-bold bg-blue-100 p-2 border-r-6 border-blue-400 rounded-r-xl w-full hover:cursor-pointer hover:w-[115%] duration-500">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="text-lg font-bold bg-blue-100 p-2 border-r-6 border-blue-400 rounded-r-xl w-full hover:cursor-pointer hover:w-[115%] duration-500">
          <Link to={"/products"}>Products</Link>
        </li>
        <li className="text-lg font-bold bg-blue-100 p-2 border-r-6 border-blue-400 rounded-r-xl w-full hover:cursor-pointer hover:w-[115%] duration-500">
          <Link to={"/products/add"}>Add</Link>
        </li>
      </ul>
      <button onClick={clearStorage}>Clear Storage</button>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/products">
          <Route index element={<ProductList />} />
          <Route path="add" element={<ProductForm />} />
        </Route>
      </Routes>
    </ProductsContext.Provider>
  );
}

export default App;
