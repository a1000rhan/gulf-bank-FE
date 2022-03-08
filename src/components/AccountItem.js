import React from "react";
import account from "../account.css";
import { observer } from "mobx-react";
import accountStore from "../Store/accountStore";
import { Link } from "react-router-dom";
import card1 from "../images/card-empty.png";
import card2 from "../images/card-empty-red.png";
import card3 from "../images/card-empty-black.png";
function AccountItem({ account }) {
  if (accountStore.loading) return <h1>loading</h1>;

  const cards = [card1, card2, card3];

  const shuffledArray = cards.sort((a, b) => 0.5 - Math.random());

  return (
    <div>
      <Link to={`/account/${account.slug}`}>
        <div className="card-box">
          <img className="backgroundCard" src={shuffledArray[0]} alt="cards" />
          <p className="cardNumber">
            8803&nbsp;&nbsp; &nbsp;****&nbsp;&nbsp;&nbsp; ****&nbsp;&nbsp;&nbsp;
            {account.accountNumber
              .toString()
              .slice(account.accountNumber.toString().length - 4)}
          </p>
          <p className="cardExp">12/24</p>
          <p className="cardName">{account.nickName}</p>
        </div>
      </Link>
    </div>
  );
}

export default observer(AccountItem);
