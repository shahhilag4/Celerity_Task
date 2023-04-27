import React from "react";
import "./Bottom.css";
import { FiMessageSquare } from 'react-icons/fi'

function Button() {
  return (
    <>
      <div className="chat-button-container">
        <button className="chat-button"><FiMessageSquare style={{color:"#FFFFFF",backgroundColor:"transparent"}} /></button>
      </div>
    </>
  );
}

export default Button;
