import React from "react";
import { CiLocationOn } from "react-icons/ci";
import {BsTrainFreightFrontFill} from "react-icons/bs"
import { MdDateRange } from "react-icons/md";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./Summary.css";

function Summary() {
  return (
    <div className="summary">
      <div className="or-city ">
        <CiLocationOn style={{background:"white"}} /> Origin,Port,City
      </div>
      <div className="des-city">
        <CiLocationOn style={{background:"white"}}/>
        Destination, Port, City&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
      </div>
      <div className="date">
        <MdDateRange style={{background:"white"}}/>
        13 April 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
      </div>
      <BsTrainFreightFrontFill style={{background:"white"}}/>
      Load&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
      <div className="">
        <AiOutlineArrowRight style={{backgroundColor:"#6F57E9",color:"#ffffff",borderRadius:"4px",fontSize:"22px",padding:"4px"}} />
      </div>
    </div>
  );
}

export default Summary;
