import React from "react";
import PieChart from "./PieChart";

const Dashboard = () => {
  const number = 90;
  return (
    <div>
      <h1>Dashboard</h1>
      <PieChart number={number} />
    </div>
  );
};

export default Dashboard;
