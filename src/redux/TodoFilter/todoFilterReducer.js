import { UPDATESTATUS, ADDCOLOR, REMOVECOLOR } from "./actionType";

// todo filter state
const initialState = {
  status: "all",
  color: [],
};

export default function todoFilterReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATESTATUS:
      return {
        ...state,
        status: action.payload,
      };

    case ADDCOLOR:
      return {
        ...state,
        color: [...state.color, action.payload],
      };

    case REMOVECOLOR:
      return {
        ...state,
        color: state.color.filter((color) => color !== action.payload),
      };

    default:
      return state;
  }
}
