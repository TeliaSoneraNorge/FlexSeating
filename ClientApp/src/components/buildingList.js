import React, { useContext } from "react";
import { BuildingContext } from "../contexts/BuildingContext";
import Building from "./building";

const BuildingList = () => {
  const { state } = useContext(BuildingContext);
  return (
    <div className="scroll-select">
      <div className="scroll-select__title">Buildings</div>
      <div className="scroll-select__content">
        {state.buildings.map((val, index) => {
          return (
            <Building
              building={val}
              selected={val.id === state.selectedBuildingId}
              key={index}
            ></Building>
          );
        })}
      </div>
    </div>
  );
};
export default BuildingList;
