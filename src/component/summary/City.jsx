import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";
import { AiOutlineEdit} from "react-icons/ai";
import {GiWeight} from 'react-icons/gi'

import "./Summary.css";

function City() {
  return (
    <>
    <div className="summary">
      <div className="or-city">
        <CiLocationOn /> Delhi, 110003
      </div>
      <div className="des-city">
        <CiLocationOn />
        Shanghai 200080&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
      </div>
      <div className="date">
        <MdDateRange />
        13 April 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
      </div>
      <div className=""><GiWeight/>114.21KG - AIR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|</div>
      <div className="">
        <AiOutlineEdit style={{color:"blue"}}/>
      </div>
    </div>
    <hr className="hrtwo"/>
    </>
  );
}

export default City;
