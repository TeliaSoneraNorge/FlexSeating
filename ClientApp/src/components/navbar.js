import React, { useContext } from "react";
import { BuildingContext } from "../contexts/BuildingContext";
import MicrosoftLogin from "react-microsoft-login";

const authHandler = (err, data) => {
  console.log(err, data);
};

const Navbar = () => {
  const { state } = useContext(BuildingContext);

  return (
    <div className="navbar">
      <img
        alt="Icon"
        className="navbar-image"
        src="https://cdn-assets-eu.frontify.com/local/telia/eyJwYXRoIjoiXC9wdWJsaWNcL3VwbG9hZFwvc2NyZWVuc1wvOVwvNGUyZWNlM2I3NTMwNGI0NDg3ZTdiYjAwNDcwYjc2ZjItMTUyODcxNTg3MS5wbmcifQ:telia:hzWjYWPyusvSjMN7_5iGCt4lZsJd92hRaDGJhGs63Ss?width=2400"
      ></img>

      <div className="navbar-element navbar-element__account">
        {state.account == "" ? (
          <MicrosoftLogin
            clientId={"baa3b947-094b-490f-91c6-318f2eabf0fe"}
            authCallback={authHandler}
          />
        ) : (
          state.account
        )}
      </div>
    </div>
  );
};

export default Navbar;
