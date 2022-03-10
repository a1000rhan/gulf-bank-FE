import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import accountStore from "../Store/accountStore";
import "../account.css";
import TransactionModal from "./TransactionModal";
import { observer } from "mobx-react";
import moment from "moment";
import SearchBar from "./SearchBar";
import DateRangePicker from "@mui/lab/DateRangePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

import { TextField, Box } from "@mui/material";

const AccountDetails = () => {
  const { accountslug } = useParams();
  const [query, setQuery] = useState("");
  const [date, setDate] = useState([null, null]);
  const [filterDate, setFilterDate] = useState(null);

  const [endDate, setEndDate] = useState(null);
  if (accountStore.loading) return <h1>loading</h1>;
  let color = "";
  const account = accountStore.accounts.find((acc) => acc.slug === accountslug);

  const TransactionsArray = account.transactions
    .filter((trans) => trans.amount >= query)
    .filter((trans) => {
      if (
        dateFormat(date[0], "dd-MM-yyyy") <=
          dateFormat(trans.createdAt, "dd-MM-yyyy") &&
        dateFormat(date[1], "dd-MM-yyyy") >=
          dateFormat(trans.createdAt, "dd-MM-yyyy")
      ) {
        return trans;
      } else if (date[0] === null && date[1] === null) {
        return trans;
      }
    })
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

  function dateFormat(inputDate, format) {
    //parse the input date
    const date = new Date(inputDate);

    //extract the parts of the date
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    //replace the month
    format = format.replace("MM", month.toString().padStart(2, "0"));

    //replace the year
    if (format.indexOf("yyyy") > -1) {
      format = format.replace("yyyy", year.toString());
    } else if (format.indexOf("yy") > -1) {
      format = format.replace("yy", year.toString().substr(2, 2));
    }

    //replace the day
    format = format.replace("dd", day.toString().padStart(2, "0"));

    return format;
  }

  return (
    <div className="container-Detail">
      <h1 className="title">Account Details</h1>
      <TransactionModal currentAccount={account} />

      <br />
      <hr />
      <div className="date-picker">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            startText="Check-in"
            endText="Check-out"
            value={date}
            onChange={(newValue) => {
              setDate(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <React.Fragment>
                <TextField {...startProps} />
                <Box sx={{ mx: 2 }}> to </Box>
                <TextField {...endProps} />
              </React.Fragment>
            )}
          />
        </LocalizationProvider>
      </div>
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
