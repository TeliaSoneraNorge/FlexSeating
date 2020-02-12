import React, { useContext } from "react";
import { BuildingContext } from "../contexts/BuildingContext";

const Building = ({ building, selected }) => {
  const { dispatch } = useContext(BuildingContext);
  return (
    <div
      className={
        "building--K29 building " +
        (selected ? "scroll-select__item--active" : "")
      }
      style={{ backgroundImage: "url(" + building.imageUrl + ")" }}
      onClick={() => dispatch({ type: "SELECT_BUILDING", value: building.id })}
    >
      <div>
        <span>{building.name}</span>
      </div>
      <div></div>
      <div>{building.address}</div>
    </div>
  );
};
export default Building;
