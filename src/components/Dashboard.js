import React from "react";
import dashboard from "../dashboard.css";
import beneficiaryStore from "../Store/beneficiaryStore";
import BeneficiaryModal from "./BeneficiaryModal";
import PieChart from "./PieChart";
import { observer } from "mobx-react";
import accountStore from "../Store/accountStore";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import authStore from "../Store/authStore";

const Dashboard = () => {
  const number = beneficiaryStore.beneficiary.length;
  const number2 = accountStore.accounts.length;
  const number3 = 50;
  if (beneficiaryStore.loading) {
    <h1>Loading</h1>;
  }
  let counter = 1;
  const beneficiaryArray = beneficiaryStore.beneficiary.map((beneficiary) => (
    <tr>
      <th scope="row">{counter}</th>
      <td>{beneficiary.fullname}</td>
      <td>{beneficiary.IBAN}</td>
      <td>{beneficiary.bankName}</td>
      <td>{beneficiary.address}</td>
      <div className="d-none">{counter++}</div>
    </tr>
  ));
  return (
    <div className="container">
      <div>
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
      <br />
      <hr />
      <div className="w-50">
        <h1 className="title">Beneficiary</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Beneficiary Name</th>
              <th scope="col">IBAN</th>
              <th scope="col">Bank Name</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>{beneficiaryArray}</tbody>
        </table>
      </div>
    </div>
  );
};

export default observer(Dashboard);
