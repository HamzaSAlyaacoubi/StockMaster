import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";

import { Link, Route, Routes } from "react-router";
import { v4 as uuidv4 } from "uuid";

// Components
import ProductList from "./components/main/ProductList";
import Dashboard from "./components/main/Dashboard";

// Context
import { ProductsContext } from "./contexts/ProductsContext";

import { AppSidebar } from "./components/main/AppSidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "./components/ui/sidebar";
import { SiteHeader } from "./components/main/site-header";

import { ThemeProvider } from "@/components/theme/theme-provider";
import FetchProducts from "./contexts/fetchProducts";

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
    localStorage.setItem("products", JSON.stringify(initialProducts));
    setProducts(initialProducts);
  };

  const [open, setOpen] = React.useState(true);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ProductsContext.Provider value={{ products, setProducts }}>
        <FetchProducts />
        <SidebarProvider
          open={open}
          onOpenChange={setOpen}
          style={{
            "--sidebar-width": "calc(var(--spacing) * 72)",
            "--header-height": "calc(var(--spacing) * 12)",
          }}
        >
          <AppSidebar variant="inset" open={open} />
          <SidebarInset>
            <SiteHeader />

            <section className="px-3">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/products">
                  <Route index element={<ProductList />} />
                </Route>
              </Routes>
            </section>
          </SidebarInset>
        </SidebarProvider>
      </ProductsContext.Provider>
    </ThemeProvider>
  );
}

export default App;

{
  /* <nav className="h-full w-[15%] bg-red-300">
          <ul className="w-full h-96  flex flex-col gap-1 mt-4">
            <li className="text-lg font-bold bg-blue-100 p-2 border-r-6 border-blue-400 rounded-r-xl w-[85%] hover:cursor-pointer hover:w-full duration-500">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-lg font-bold bg-blue-100 p-2 border-r-6 border-blue-400 rounded-r-xl w-[85%] hover:cursor-pointer hover:w-full duration-500">
              <Link to={"/products"}>Products</Link>
            </li>
            <li className="text-lg font-bold bg-blue-100 p-2 border-r-6 border-blue-400 rounded-r-xl w-[85%] hover:cursor-pointer hover:w-full duration-500">
              <Link to={"/products/add"}>Add</Link>
            </li>
            <li className="text-lg font-bold bg-blue-100 p-2 border-r-6 border-blue-400 rounded-r-xl w-[85%] hover:cursor-pointer hover:w-full duration-500">
              <Link to={"/sidebar"}>Sidebar</Link>
            </li>
            <li>
              <button onClick={clearStorage}>Clear Storage</button>
            </li>
          </ul>
        </nav> */
}
