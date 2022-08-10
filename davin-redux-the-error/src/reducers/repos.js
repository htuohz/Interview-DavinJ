import { REQUESTED, SUCCESS, FAILED } from "../type";
const initialState = {
  loading: false,
  repos: [{ name: "firstRepo" }],
};

export const repo = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS:
      return {
        ...state,
        repos: action.data.repos,
        loading: false,
      };
    default:
      return state;
  }
};
