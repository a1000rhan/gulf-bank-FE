import React from "react";
import dashboard from "../dashboard.css";
import beneficiaryStore from "../Store/beneficiaryStore";
import BeneficiaryModal from "./BeneficiaryModal";
import PieChart from "./PieChart";
import { observer } from "mobx-react";
import accountStore from "../Store/accountStore";

import authStore from "../Store/authStore";
import BeneficiaryTransfer from "./BeneficiaryTransfer";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";

const Dashboard = () => {
  const totalbalance = accountStore.accounts.reduce(
    (total, account) => total + account.balance,
    0
  );

  if (beneficiaryStore.loading) {
    <h1>Loading</h1>;
  }

  let counter = 1;
  let counterTrans = 1;
  const beneficiaryArray = beneficiaryStore.beneficiary.map((beneficiary) => (
    <tr>
      <th scope="row">{counter}</th>
      <td>{beneficiary.fullname}</td>
      <td>{beneficiary.IBAN}</td>
      <td>{beneficiary.bankName}</td>
      <td>{beneficiary.address}</td>
      <td>
        <BeneficiaryTransfer beneficiary={beneficiary} />
      </td>
      <td>
        <Button
          variant="danger"
          onClick={() =>
            beneficiaryStore.deleteBeneficiary(beneficiary._id, Swal)
          }
        >
          Delete
        </Button>
      </td>
      <div className="d-none">{counter++}</div>
    </tr>
  ));

  const totalTransactions = accountStore.accounts.reduce(
    (total, account) => total + account.transactions.length,
    0
  );
  const lastTransactions = accountStore.accounts.map((account) => (
    <tr>
      <th scope="row">{counterTrans}</th>
      <td>{account.transactions.amount}</td>
      <td>{account.transactions.method}</td>
      <div className="d-none">{counterTrans++}</div>
    </tr>
  ));

  const number = beneficiaryArray.length;
  const number2 = totalTransactions;

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
          <PieChart number={number} name={name1} key={number} />
          <h5>Number of Beneficiary</h5>
        </div>
        <div className="vl"></div>
        <div className="chart">
          <PieChart number={number2} name={name2} key={number2} />
          <h5>Number of Transaction</h5>
        </div>
        <div className="vl"></div>
        <div className="chart">
          <PieChart number={number3} name={name3} key={number3} />
          <h5>Total Balance</h5>
        </div>
      </div>
      <br />
      <hr />
      <div className="twoTabels">
        <div className="w-50">
          <h1 className="subtitle">Beneficiary</h1>
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
        <div className="w-50 trans ">
          <h1 className="subtitle">Transactions</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Transactions</th>
                <th scope="col">Amount</th>
                <th scope="col">Method</th>
              </tr>
            </thead>
            <tbody>{lastTransactions}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default observer(Dashboard);
