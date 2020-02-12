import React, { useContext, useEffect } from "react";
import { BuildingContext, UpdateBuildings } from "../contexts/BuildingContext";
import arrowRight from "../icons/TC_Arrow_Right.svg";
import arrowLeft from "../icons/TC_Arrow_Left.svg";

const Datepicker = () => {
  const { state, dispatch } = useContext(BuildingContext);
  return (
    <div className="scroll-select date">
      <img
        className="arrow"
        src={arrowLeft}
        onClick={() => {
          dispatch({ type: "SUBTRACT_DATE" });
          UpdateBuildings(state, dispatch);
        }}
      ></img>
      <div className="date__text">
        {state.date?.toISOString().split("T")[0]}
      </div>
      <img
        className="arrow"
        src={arrowRight}
        onClick={() => {
          dispatch({ type: "ADD_DATE" });
          UpdateBuildings(state, dispatch);
        }}
      ></img>
    </div>
  );
};

export default Datepicker;
