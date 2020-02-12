import axios from "axios";

export const buildingReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_DATA":
      return { ...state, buildings: action.data };
    case "SELECT_BUILDING":
      var floorId = state.buildings.filter(x => x.id === action.value)[0]
        ?.floor[0]?.id;
      return {
        ...state,
        selectedBuildingId: action.value,
        selectedFloorId: floorId
      };
    case "CHANGE_SELECTED_FLOOR":
      return { ...state, selectedFloorId: action.value };
    case "ADD_DATE":
      state.date.setDate(state.date.getDate() + 1);
      return { ...state };
    case "SUBTRACT_DATE":
      if (state.date >= new Date()) {
        state.date.setDate(state.date.getDate() - 1);
      }
      return { ...state };
    case "CHANGE_ACCOUNT":
      return { ...state, account: action.data };
    default:
      return state;
  }
};
