import React from "react";

import './Services.css'
import {BsTrainFreightFrontFill} from "react-icons/bs"
import {TfiWorld} from "react-icons/tfi"
import {RiHandbagFill} from 'react-icons/ri'
import { FcCallback } from 'react-icons/fc'

function Services() {
  return (
    <div className="services">
      <h2 className="ser-name">Services</h2>
      <div className="service-detail">
        <div className="freight card">
          <h6><BsTrainFreightFrontFill style={{color
          :"#0075FF",marginRight:"1rem"}}/> Freight Services</h6>
          <hr className="hr"/>
          <p className="para">
            Open new Opportunites to grow your busniess. Enter new markets and
            discover new contitnents, We are with you, door-to-door.
          </p>
        </div>
        <div className="business card">
          <h6><RiHandbagFill style={{color:"#FF4747",marginRight:"1rem"}}/> Services</h6>
          <hr className="hr"/>
          <p className="para">
            We support your goals for growth with cargo insurance, online
            payments and paperless workflow. Take your business to the next
            level.
          </p>
        </div>
        <div className="shipping card">
          <h6><TfiWorld style={{color:"#FF6813",marginRight:"1rem"}}/> Shipping & Logistics</h6>
          <hr className="hr"/>
          <p className="para">
            Find powerful solutions to meet your diverse transportation needs.
            Agile solutions to handle all your supply chain needs.
          </p>
        </div>
        <div className="support card">
          <h6><FcCallback style={{color:"#47A7FF",marginRight:"1rem"}}/>24/7 Support</h6>
          <hr className="hr"/>
          <p className="para">
            Receive support from our experts all over the world at every stage
            of the process, 24/7.
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default Services;
