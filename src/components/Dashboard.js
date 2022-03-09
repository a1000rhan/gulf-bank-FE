import React from "react";
import dashboard from "../dashboard.css";
import beneficiaryStore from "../Store/beneficiaryStore";
import BeneficiaryModal from "./BeneficiaryModal";
import PieChart from "./PieChart";
import { observer } from "mobx-react";
import accountStore from "../Store/accountStore";
import { Button } from "react-bootstrap";

import authStore from "../Store/authStore";

const Dashboard = () => {
  const totalbalance = accountStore.accounts.reduce(
    (total, account) => total + account.balance,
    0
  );
  console.log(
    "🚀 ~ file: Dashboard.js ~ line 13 ~ Dashboard ~ totalbalance",
    totalbalance
  );

  if (beneficiaryStore.loading) {
    <h1>Loading</h1>;
  }
  let counter = 1;

  const beneficiaryArray = beneficiaryStore.beneficiary
    .filter((benf) => benf.owner === authStore.user._id)
    .map((beneficiary) => (
      <tr>
        <th scope="row">{counter}</th>
        <td>{beneficiary.fullname}</td>
        <td>{beneficiary.IBAN}</td>
        <td>{beneficiary.bankName}</td>
        <td>{beneficiary.address}</td>
        <td>
          <Button>Transfer</Button>
        </td>
        <div className="d-none">{counter++}</div>
      </tr>
    ));

  const number = beneficiaryArray.length;
  const number2 = accountStore.accounts.length;
  console.log(
    "🚀 ~ file: Dashboard.js ~ line 48 ~ Dashboard ~ accountStore.accounts.length",
    accountStore.accounts
  );

  const number3 = totalbalance;
  const name1 = "Number";
  const name2 = "Number";
  const name3 = "Amount";
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
          <PieChart number={number} name={name1} />
          <h5>Number of Beneficiary</h5>
        </div>
        <div className="vl"></div>
        <div className="chart">
          <PieChart number={number2} name={name2} />
          <h5>Number of Accounts</h5>
        </div>
        <div className="vl"></div>
        <div className="chart">
          <PieChart number={number3} name={name3} />
          <h5>Total Balance</h5>
        </div>
      </div>
      <br />
      <hr />
      <div className="w-50">
        <h1 className="title">Beneficiary</h1>
        <table className="table">
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
