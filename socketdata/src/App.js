import React, { useEffect } from "react";
import "./App.css";
import Airquality from "./components/airquality";
import Mainnav from "./components/Mainnav";
import Redux from "./components/Redux";
import Weather from "./components/Weather";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  useEffect(() => {}, []);

  return (
    <div className="container">
      <div className="row content">
        
        <div className="">
          <Router>
             <Mainnav />
            <div className="col-sm-8 text-left">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/redux">
                  <Redux />
                </Route>
                <Route exact path="/airquality">
                  <Airquality />
                </Route>
                <Route exact path="/weather">
                  <Weather />
                </Route>
              </Switch>
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
