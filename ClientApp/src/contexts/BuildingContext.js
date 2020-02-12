import React, { createContext, useReducer, useEffect } from "react";
import { buildingReducer } from "../reducers/BuildingReducer";
import axios from "axios";

export const BuildingContext = createContext({});

export const UpdateBuildings = (state, dispatch) => {
  axios
    .get("http://localhost:52969/api/buildings", {
      params: { date: state.date }
    })
    .then(response => {
      dispatch({ type: "CHANGE_DATA", data: response.data });
    });
};

const BuildingContextProvider = props => {
  const [state, dispatch] = useReducer(buildingReducer, {
    buildings: [],
    selectedBuildingId: 0,
    selectFloorId: 0,
    date: new Date(),
    account: "Account"
  });
  useEffect(() => {
    UpdateBuildings(state, dispatch);
    axios.get("http://localhost:52969/api/buildings/user").then(response => {
      dispatch({ type: "CHANGE_ACCOUNT", data: response.data });
    });
  }, []);
  return (
    <BuildingContext.Provider value={{ state, dispatch }}>
      {props.children}
    </BuildingContext.Provider>
  );
};
export default BuildingContextProvider;
