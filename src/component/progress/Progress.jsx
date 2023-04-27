import React from 'react'
import './Progress.css'

function Progress() {
  return (
   <>
    <div className="progress1">
      <div className="circle-container">
        <div className="one">
          1
        </div>
        <div className="text">
          Search
        </div>
      </div>
      <div className="circle-container">
        <div className="two">2</div>
        <div className="text">
          Recommended Services
        </div>
      </div>
      <div className="circle-container">
        <div className="three">3</div>
        <div className="text">
          Results
        </div>
      </div>
      <div className="circle-container">
        <div className="four">4</div>
        <div className="text">
          Booking
        </div>
      </div>
    </div>
    <hr className="hr-two"/>   
   </>
  )
}

export default Progress;
