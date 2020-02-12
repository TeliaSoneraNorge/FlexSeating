import React, { useContext } from "react";
import { BuildingContext } from "../contexts/BuildingContext";
import Floor from "./floor";

const FloorList = () => {
  const { state } = useContext(BuildingContext);
  return (
    <div className="scroll-select">
      <div className="scroll-select__title">Floors</div>
      <div className="scroll-select__content">
        {state.buildings
          .filter(x => x.id === state.selectedBuildingId)[0]
          ?.floor.map((val, index) => {
            return (
              <Floor
                key={index}
                floor={val}
                selected={val.id === state.selectedFloorId}
              ></Floor>
            );
          })}
      </div>
    </div>
  );
};
export default FloorList;
