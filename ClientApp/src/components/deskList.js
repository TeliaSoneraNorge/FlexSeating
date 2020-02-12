import React, { useContext } from "react";
import { BuildingContext } from "../contexts/BuildingContext";
import Desk from "./desk";

const DeskList = () => {
  const { state } = useContext(BuildingContext);
  return (
    <div className="scroll-select desk-list">
      <div className="scroll-select__title">
        {
          state.buildings.filter(x => x.id === state.selectedBuildingId)[0]
            ?.name
        }
        , floor&nbsp;
        {
          state.buildings
            .filter(x => x.id == state.selectedBuildingId)[0]
            ?.floor.filter(y => y.id === state.selectedFloorId)[0]?.number
        }
      </div>

      <div className="">
        <div className="scroll-select__content deskList">
          {state.buildings
            .filter(x => x.id === state.selectedBuildingId)[0]
            ?.floor.filter(y => y.id === state.selectedFloorId)[0]
            ?.desk.map((d, index) => {
              return <Desk key={d.id} desk={d}></Desk>;
            })}
        </div>
      </div>
    </div>
  );
};

export default DeskList;
