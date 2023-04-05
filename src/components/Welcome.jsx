import React from "react";
import './welcome.css';
import Details from './Details'
import AboutUs from "./AboutUs";

export default function () {


    return (
        <div className="welcome-div" style={{width: '100%'}}>
            <div className="navbar">
                <div>
                    <h1>latwo</h1>
                </div>
                <div className="list">
                    <div className="scroll"><a href="/">Home</a></div>
                    <div className="scroll"><a href="#latwo-div">What We Do</a></div>
                    <div className="scroll"><a href="">What's The Profit</a></div>
                    <div className="scroll"><a href="#emailDiv">Contact Us</a></div>
                </div>
            </div>
            <div>
                <AboutUs/>
            </div>
        </div>
    )
}