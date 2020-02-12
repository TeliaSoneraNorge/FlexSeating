import React, { useContext } from "react";
import { BuildingContext } from "../contexts/BuildingContext";

const Floor = ({ floor, selected }) => {
  const { dispatch } = useContext(BuildingContext);
  return (
    <div
      className={
        "scroll-select__item floor " +
        (selected ? "scroll-select__item--active" : "")
      }
      onClick={() => {
        dispatch({ type: "CHANGE_SELECTED_FLOOR", value: floor.id });
      }}
    >
      <span>{floor.number}</span>
    </div>
  );
};

export default Floor;
