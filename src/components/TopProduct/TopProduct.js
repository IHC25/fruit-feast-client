import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const TopProduct = () => {
  // Product Data
  const data = [
    { name: "Orange", delivered: 400 },
    { name: "Green Coconut", delivered: 600 },
    { name: "Rajpuri Mango", delivered: 200 },
    { name: "Pear White", delivered: 800 },
  ];
  return (
    <div className="container">
      <h2>Top Products</h2>
      <BarChart className="mx-auto" width={800} height={600} data={data}>
        <Bar dataKey="delivered" fill="#80dead" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis dataKey="delivered" />
      </BarChart>
      <p>
        <small>This chart shows the top products delivered stats</small>
      </p>
    </div>
  );
};

export default TopProduct;
