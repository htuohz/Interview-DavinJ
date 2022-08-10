import fetchEmojies from "../api/emojies-api";
import {
  LOAD_EMOJIES_REQUESTED,
  LOAD_EMOJIES_SUCCESS,
  LOAD_EMOJIES_FAIL,
} from "../type";

export const loadEmojies = () => (dispatch) => {
  dispatch(loadEmojiesRequested);
  fetchEmojies
    .get()
    .then((res) => dispatch(loadEmojiesSuccess(res)))
    .catch((err) => dispatch(loadEmojiesFail(err)));
};

const loadEmojiesRequested = () => ({
  type: LOAD_EMOJIES_REQUESTED,
});

const loadEmojiesSuccess = (res) => {
  const emojiesObj = res.data;
  return {
    type: LOAD_EMOJIES_SUCCESS,
    data: Object.keys(emojiesObj).map((key) => emojiesObj[key]),
  };
};

const loadEmojiesFail = () => ({
  type: LOAD_EMOJIES_FAIL,
});
