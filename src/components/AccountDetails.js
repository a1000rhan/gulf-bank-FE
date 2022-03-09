import { Button } from "react-bootstrap";
import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import accountStore from "../Store/accountStore";
import account from "../account.css";
import TransactionModal from "./TransactionModal";

const AccountDetails = () => {
  const { accountslug } = useParams();
  let color = "";
  const account = accountStore.accounts.find((acc) => acc.slug === accountslug);
  const TransactionsArray = account.transactions.map((trans) => (
    <div>
      <div className="d-none">
        {trans.method === "transfer" ? (color = "red") : (color = "green")}
      </div>

      <td>amount: {trans.amount} KD &nbsp;&nbsp; method: </td>
      <td className={color}>{trans.method.toUpperCase()}</td>
    </div>
  ));

  return (
    <div className="container-Detail">
      <h1 className="title">Account Details</h1>
      <TransactionModal currentAccount={account} />
      <br />
      <hr />
      <div className="w-50 m-6 borderTabel">
        <table className="table table-light">
          <thead>
            <tr>
              <th scope="col">Account Name</th>
              <td>{account.nickName}</td>
            </tr>
          </thead>
          <tr>
            <th scope="row">Account Balance</th>

            <td>{account.balance} KD</td>
          </tr>
          <tbody>
            <tr>
              <th scope="row">Transactions</th>
              <td>{TransactionsArray}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to="/account">
        <Button variant="outline-primary">Back</Button>
      </Link>
    </div>
  );
};

export default AccountDetails;
