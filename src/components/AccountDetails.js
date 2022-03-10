import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import accountStore from "../Store/accountStore";
import "../account.css";
import TransactionModal from "./TransactionModal";
import { observer } from "mobx-react";
import moment from "moment";
import SearchBar from "./SearchBar";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
//
import { TextField } from "@mui/material";

const AccountDetails = () => {
  const { accountslug } = useParams();
  const [query, setQuery] = useState("");
  const [date, setDate] = useState(Date());
  const [filterDate, setFilterDate] = useState(null);

  const [endDate, setEndDate] = useState(null);
  if (accountStore.loading) return <h1>Loading</h1>;
  let color = "";
  const account = accountStore.accounts.find((acc) => acc.slug === accountslug);
  const TransactionsArray = account.transactions
    .filter((trans) => trans.amount >= query)
    .map((trans) => (
      <div className="table-data">
        <div className="d-none">
          {trans.method === "deposit" ? (color = "green") : (color = "red")}
        </div>

        <td>Amount: {trans.amount} KD &emsp; </td>
        <td>
          Method: <span className={color}>{trans.method.toUpperCase()}</span>
        </td>
        <td>Date: {moment(trans.createdAt).format("DD-MM-YYYY")}</td>
        <hr />
      </div>
    ));
  if (accountStore.loading) return <h1>loading</h1>;

  const handleDate = (e) => {
    const tempDate = moment(e).format();
    console.log(moment(e).format());
    console.log(tempDate);
    setDate(e);
    setFilterDate(tempDate);

    console.log(e);
  };

  return (
    <div className="container-Detail">
      <h1 className="title">Account Details</h1>
      <TransactionModal currentAccount={account} />

      <div className="date-picker">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>
      <br />
      <hr />
      <div className="w-50 m-6 borderTabel">
        <SearchBar setQuery={setQuery} />
        <table className="table theTable ">
          <thead>
            <tr>
              <th scope="col">Account Name:</th>
              <td>{account.nickName}</td>
            </tr>
          </thead>
          <tr>
            <th scope="row">Account Balance:</th>

            <td>{account.balance} KD</td>
          </tr>
          <tbody>
            <tr>
              <th scope="row">Transactions:</th>
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

export default observer(AccountDetails);
