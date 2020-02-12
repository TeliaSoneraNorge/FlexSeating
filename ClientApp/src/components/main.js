import * as React from "react";
import BuildingContextProvider from "../contexts/BuildingContext";

import "./styles.css";
import BuildingList from "./buildingList";
import FloorList from "./floorList";
import DeskList from "./deskList";
import NavBar from "./navbar";
import Datepicker from "./datepicker";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MicrosoftLogin from "react-microsoft-login";

const Main = () => {
  return (
    <Router>
      <BuildingContextProvider>
        <NavBar></NavBar>

        <div className="page__content">
          <Switch>
            <Route path="/reservations">
              <h1>Hello</h1>
            </Route>

            <Route path="/">
              <BuildingList></BuildingList>
              <Datepicker></Datepicker>
              <FloorList></FloorList>
              <DeskList></DeskList>
            </Route>
          </Switch>
        </div>
      </BuildingContextProvider>
    </Router>
  );
};
export default Main;
