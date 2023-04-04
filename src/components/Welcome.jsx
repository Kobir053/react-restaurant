import React from "react";
import './welcome.css';
import Details from './Details'
import AboutUs from "./AboutUs";

export default function () {


    return (
        <div className="welcome-div" style={{width: '100%',height: '900px'}}>
            <h1>latwo</h1>
            <div className="list">
                <a href="/">Home</a>
                <a href="#latwo-div">What We Do</a>
                <a href="">What's The Profit</a>
                <a href="#emailDiv">Contact Us</a>
            </div>
            <div>
                <AboutUs/>
            </div>
        </div>
    )
}