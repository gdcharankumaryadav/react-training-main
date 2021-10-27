import React from "react";
import { Link } from "react-router-dom";

const Mainnav = () => {
  return (
      <nav className="navbar navbar-light bg-light">
          <div className="">
               <div className="collapse navbar-collapse" id="myNavbar">
                  <ul className="nav navbar-nav">
                      <li className="active">
                          <span><Link to="/">Home</Link></span>&nbsp;&nbsp;
                      </li>
                      <li className="">
                          <span><Link to="/redux">currentTime</Link></span>&nbsp;&nbsp;
                      </li>
                  <li className="">
                          <span><Link to="/airquality">airQuality</Link></span>&nbsp;&nbsp;
                  </li>
                  <li className="">
                          <span><Link to="/weather">weatherData</Link></span>
                  </li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                      <li>
                          <span className="glyphicon glyphicon-log-in"></span> Login
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  );
};

export default Mainnav;
