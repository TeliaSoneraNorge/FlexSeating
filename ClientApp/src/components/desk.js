import React, { useContext } from "react";
import { BuildingContext, UpdateBuildings } from "../contexts/BuildingContext";
import axios from "axios";

export const Reserve = (state, dispatch, desk) => {
  if (desk.reservations.length > 0) {
    axios
      .post(
        `http://localhost:52969/api/buildings/reservations/${desk.reservations[0].id}`
      )
      .then(r => {
        UpdateBuildings(state, dispatch);
        console.log(r);
      })
      .catch(e => {
        console.log(e);
      });
  } else {
    axios
      .post(
        `http://localhost:52969/api/buildings/${state.selectedBuildingId}/${
          state.selectedFloorId
        }/${desk.id}/${state.date.toISOString().split("T")[0]}`
      )
      .then(r => {
        UpdateBuildings(state, dispatch);
        console.log(r);
      })
      .catch(e => {
        console.log(e);
      });
  }
};

const Desk = ({ desk }) => {
  const { state, dispatch } = useContext(BuildingContext);
  return (
    <div className="reserve">
      <div className="reserve-number">{desk.name}</div>
      <div
        className={
          "reserve-button " +
          (desk.reservations.length > 0 ? "reserve--reserved " : " ") +
          (desk.reservations[0]?.userId == state.account
            ? ""
            : "reserve--unclickable")
        }
        onClick={() => {
          Reserve(state, dispatch, desk);
        }}
      >
        {desk.reservations.length > 0
          ? desk.reservations[0].userId == state.account
            ? "Cancel"
            : desk.reservations[0].userId
          : "Reserve"}
      </div>
    </div>
  );
};

export default Desk;
