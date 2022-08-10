import fetchRepos from "../api/repo-api";
import { REQUESTED, SUCCESS, FAILED } from "../type";

// redux-thunk
// redux-saga

// common feature: DELAY dispatch actions

// difference:
// - redux-thunk use callback
// - redux-saga use generator
//   - generator is es6 feature

export const loadRepos = () => {
  const callback = (dispatch) => {
    console.log("====================================");
    console.log("inside load repos action");
    console.log("====================================");
    dispatch(loadReposRequested());
    fetchRepos
      .get() // ayns request
      .then((res) => dispatch(loadReposSucceeded(res)))
      .catch((err) => dispatch(loadReposFailed(err)));
  };
  return callback;
};

const loadReposRequested = () => ({
  type: REQUESTED,
});

const loadReposSucceeded = (res) => ({
  type: SUCCESS,
  data: { repos: res.data || [] },
});

const loadReposFailed = (err) => ({
  type: FAILED,
  data: { err },
});
