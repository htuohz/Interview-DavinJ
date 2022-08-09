import { CHANGE_USERNAME, CHANGE_STATUS } from "../type";

const initialState = {
  username: "woo1",
  status: "offline",
  gender: "male",
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    case CHANGE_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};
