import {
  LOAD_EMOJIES_REQUESTED,
  LOAD_EMOJIES_SUCCESS,
  LOAD_EMOJIES_FAIL,
} from "../type";

const initialState = {
  loading: false,
  emojies: [],
  err: null,
};

export const emojies = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_EMOJIES_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case LOAD_EMOJIES_SUCCESS:
      return {
        ...state,
        emojies: action.data,
        loading: false,
      };

    case LOAD_EMOJIES_FAIL:
      return {
        ...state,
        loading: false,
        err: action.err,
      };

    default:
      return state;
  }
};
