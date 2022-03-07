import React from "react";
import account from "../account.css";
import { observer } from "mobx-react";
import accountStore from "../Store/accountStore";
function AccountItem({ account }) {
  if (accountStore.loading) return <h1>loading</h1>;
  console.log(account.accountNumber);
  return (
    <div>
      <div className="backgroundCard">
        <p className="cardNumber">
          8803&nbsp;&nbsp; &nbsp;****&nbsp;&nbsp;&nbsp; ****&nbsp;&nbsp;&nbsp;
          {account.accountNumber
            .toString()
            .slice(account.accountNumber.toString().length - 4)}
        </p>
        <p className="cardExp">12/24</p>
        <p className="cardName">{account.nickName}</p>
      </div>
    </div>
  );
}

export default observer(AccountItem);
