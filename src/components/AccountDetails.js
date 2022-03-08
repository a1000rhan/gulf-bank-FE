import { Button } from "react-bootstrap";
import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import accountStore from "../Store/accountStore";
import account from "../account.css";

const AccountDetails = () => {
  const { accountslug } = useParams();
  const account = accountStore.accounts.find((acc) => acc.slug === accountslug);
  return (
    <div className="container-Detail">
      <div className="w-25 m-4 borderTabel">
        <table class="table table-striped">
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
              <td>TransactionsArray</td>
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
