import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { GiCommercialAirplane } from "react-icons/gi";
import { GiWeightScale } from "react-icons/gi";
import { MdPallet } from "react-icons/md";
import "./BookingSummary.css";
import ship from "../../images/ship.png";
import Xcover from "../../images/Xcover.png";
import { AiFillStar } from "react-icons/ai";

function BookingSummary() {
  return (
    <div className="allDetail">
      <div className="booking">
        <div className="booking-summary">
          Booking summary
          <div className="cities">
            <div className="delhi">
              <AiTwotoneHome className="icons"/>
              Delhi,
              <br /> 110003 india
            </div>
            <div className="express">
              express
              <GiCommercialAirplane className="icons"/>
            </div>
            <hr className="hr1"/>
            <div className="shanghai">
              <AiTwotoneHome className="icons"/>
              Shanghai,
              <br /> 200080, China
            </div>
          </div>
        </div>
        <div className="weight-load">
          <div className="weight">
            Total Weight/Volume
            <div className="logo2">
              <GiWeightScale />
            </div>
              114.21KG
          </div>
          <div className="load">
            Load
            <div className="logo2">
              <span className="fonting">1 X</span>
              <div className="blocker">
              <MdPallet /> 
              <span className="pallets">Pallets</span>
              </div>
            </div>
              <span className="dimensions">230 X 140 X 120 CM</span>
          </div>
        </div>
        <div className="site">
          <div className="seller">
            Seller: Primetime Worldwide
            <img className="shipimg" src={ship} alt="" />
          </div>
          <div className="insurance">
            Insurance:Xcover.com
          <img className="shipimg" src={Xcover} alt="" />
          </div>
          
        </div>
      </div>
      <div className="payment">
        <div className="payment-head">
          <h4>
            Price details
            <span>
              <AiFillStar className="star"/>
              Known shipper
            </span>
          </h4>
        </div>

        <div className="seller-detail">
          <p>Seller's Quote &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  $ 3,659.25</p>
          <hr />
        </div>
        <div className="tax">
          <p>Duties and Taxes &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  Not Included</p>
          <p>Insurance &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; $ 323.40</p>
          <p>Based on the items cost</p>
          <hr />
        </div>
        <div className="promo">
          <p>Add a promo code</p>
          <p>Platform fee &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;$ 119.48</p>
          <hr />
        </div>
        <div className="total-price">
          <h1>Total:&nbsp;&nbsp;&nbsp;$ 4,102.13</h1>
        </div>
        <div className="center">
        <button type="button" className="check">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default BookingSummary;
