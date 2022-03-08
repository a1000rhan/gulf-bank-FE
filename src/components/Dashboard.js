import React from "react";
import dashboard from "../dashboard.css";
import beneficiaryStore from "../Store/beneficiaryStore";
import BeneficiaryModal from "./BeneficiaryModal";
import PieChart from "./PieChart";
import { observer } from "mobx-react";
import accountStore from "../Store/accountStore";

const Dashboard = () => {
  const number = beneficiaryStore.beneficiary.length;
  const number2 = accountStore.accounts.length;
  const number3 = 50;
  if (beneficiaryStore.loading) {
    <h1>Loading</h1>;
  }
  return (
    <div>
      <div className="container">
        <div className="accountTop">
          <div className="header">
            <h1 className="title">Dashboard</h1>
            <BeneficiaryModal />
          </div>
        </div>
        <hr className="titleUnderline" />
      </div>
      <div className="charts">
        <div className="chart">
          <PieChart number={number} />
          <h5>Number of Beneficiary</h5>
        </div>
        <div className="vl"></div>
        <div className="chart">
          <PieChart number={number2} />
          <h5>Number of Accounts</h5>
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

export default observer(Dashboard);
