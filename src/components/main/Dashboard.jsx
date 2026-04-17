import React from "react";
import { useContext } from "react";
import { PricesChart } from "./PricesChart";
import { StockChart } from "./StockChart";

const Dashboard = () => {
  return <div className="grid grid-cols-2 gap-3 pt-3">
    <PricesChart className="w-30"/>
    <StockChart className="w-full"/>
  </div>
  
};

export default Dashboard;
