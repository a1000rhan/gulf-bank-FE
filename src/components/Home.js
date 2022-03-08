import React from "react";
import home from "../home.css";

import Slider from "./Slider";

const Home = () => {
  return (
    <div>
      <div className="mainContainer">
        <Slider className="slider" />
      </div>
      <hr className="line" />
      <div className="continer">
        <div className="hero">
          <div>
            <img
              className="icon"
              src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
              alt="card"
            />
            <p className="icon-name">Credit Card</p>
            <p>
              No minimum deposit to open, no fees for Falcon OnlineSM Bill Pay3
              or to send money with Zelle®4, no paper checks to track, and no
              fees on money orders or cashier's checks — just a simple $4.95
              monthly service fee.1
            </p>
          </div>

          <div className="vl"></div>
          <div>
            <img
              className="icon"
              src="https://cdn-icons-png.flaticon.com/512/1611/1611179.png"
              alt="card"
            />
            <p className="icon-name">Saving Account</p>
            <p>
              Exclusively for Falcon checking customers, an account with a debit
              card for teens and kids with no monthly service fee and digital
              tools to help parents teach good money habits. Learn more at
            </p>
          </div>

          <div className="vl"></div>
          <div>
            <img
              className="icon"
              src="https://cdn-icons-png.flaticon.com/512/662/662622.png"
              alt="card"
            />
            <p className="icon-name">Branches</p>
            <p>
              $5 Savings Withdrawal Limit Fee, which is a Falcon fee, applies to
              each withdrawal or transfer out of this account over six per
              monthly statement period (maximum of three Savings Withdrawal
              Limit Fees per monthly statement period, for a total of $15). All
              withdrawals and transfers out of this account count toward this
              fee, including those made at a branch or at an ATM.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
