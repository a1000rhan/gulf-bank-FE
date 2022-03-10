import React from "react";
import account from "../account.css";

import accountStore from "../Store/accountStore";
import { Link } from "react-router-dom";
import card1 from "../images/card-empty.png";
import card2 from "../images/card-empty-red.png";
import card3 from "../images/card-empty-black.png";
function AccountItem({ account }) {
  if (accountStore.loading) return <h1>loading</h1>;

  const cards = [card1, card2, card3];

  const cardNumber = account.accountNumber.toString().slice(11, 12);

  let cardColor = cards[0];
  if (cardNumber <= 2) {
    cardColor = cards[0];
  } else if (cardNumber <= 4) {
    cardColor = cards[1];
  } else {
    cardColor = cards[2];
  }
  return (
    <div>
      <Link to={`/account/${account.slug}`}>
        <div className="card-box">
          <img className="backgroundCard" src={cardColor} alt="cards" />
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

export default AccountItem;
