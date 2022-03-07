import React from "react";
import account from "../account.css";
import accountStore from "../Store/accountStore";
import AccountItem from "./AccountItem";
import { observer } from "mobx-react";
import AccountModal from "./AccountModal";
const Account = () => {
  if (accountStore.loading) return <h1>loading</h1>;
  const accounts = accountStore.accounts.map((account) => (
    <AccountItem account={account} key={account._id} />
  ));
  console.log(accounts);
  return (
    <div>
      <div className="container">
        <div className="accountTop">
          <div className="header">
            <h1 className="title">Accounts</h1>
            <AccountModal />
          </div>
        </div>
        <hr className="titleUnderline" />
        <div className="cardList">{accounts}</div>
      </div>
    </div>
  );
};

export default observer(Account);
