import { combineReducers } from "redux";
import { user } from "./user";
import { repo } from "./repos";
import { emojies } from "./emojies";
// import { emojies } from "./emojies";

export default combineReducers({
  user,
  repo,
  emojies,
});
