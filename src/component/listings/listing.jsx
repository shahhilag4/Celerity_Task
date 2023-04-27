import React from 'react';
import './listing.css';

function Listing() {
    return (
        <div className="container">
            <div className="filters">
                <h6>3 Top Quote<span> (6 in Total)</span></h6>
                <ul>
                    <li>Filters<i className="arrow down arrow1"></i></li>
                    <li>Price<i className="arrow down arrow2"></i></li>
                    <li>Modes<i className="arrow down arrow3"></i></li>
                    <li>Seller<i className="arrow down arrow4"></i></li>
                </ul>
            </div>
            <div className="container">
                <div className="listings">
                    <div className="tabs">
                        <div className="tab1">Best Value 5-5 days. $3,121</div>
                        <div className="tab2">Quickest 5-5 days. $3,121 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Best Value 5-5 days. $3,121</div>
                    </div>
                    <h2>Listings</h2>
                    <div className="card2">
                        <div className="flight-info">
                            <div className="flight-number">Flight 1234</div>
                            <div className="flight-time">Departure: 10:00 AM | Arrival: 12:00 PM</div>
                            <div className="flight-airline">Airline: ABC Airlines</div>
                        </div>
                        <hr className="partition-line" />
                        <div className="flight-details">
                            <div className="flight-route">Route: New York (JFK) to Los Angeles (LAX)</div>
                            <div className="flight-price">$500</div>
                            <button>Book Now</button>
                        </div>
                    </div>
                    <div className="card2">
                        <div className="flight-info">
                            <div className="flight-number">Flight 5678</div>
                            <div className="flight-time">Departure: 2:00 PM | Arrival: 5:00 PM</div>
                            <div className="flight-airline">Airline: XYZ Airlines</div>
                        </div>
                        <hr className="partition-line" />
                        <div className="flight-details">
                            <div className="flight-route">Route: Chicago (ORD) to San Francisco (SFO)</div>
                            <div className="flight-price">$700</div>
                            <button>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Listing;
