import React from "react";
import dashboard from "../dashboard.css";
import PieChart from "./PieChart";

const Dashboard = () => {
  const number = 90;
  const number2 = 20;
  const number3 = 50;
  return (
    <div>
      <div className="charts">
        <div className="chart">
          <PieChart number={number} />
          <h5>Number of Transaction</h5>
        </div>
        <div className="vl"></div>
        <div className="chart">
          <PieChart number={number2} />
          <h5>Number of Payments</h5>
        </div>
        <div className="vl"></div>
        <div className="chart">
          <PieChart number={number3} />
          <h5>Number of Payments</h5>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
