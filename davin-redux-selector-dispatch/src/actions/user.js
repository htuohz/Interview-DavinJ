import { CHANGE_USERNAME, CHANGE_STATUS } from "../type";

export const changeUserName = ({ username }) => {
  console.log(
    "==========inside change username action===============" + username
  );
  return {
    type: CHANGE_USERNAME,
    username,
  };
};

export const changeStatus = ({ status }) => {
  console.log(
    "==========inside change username action===============" + status
  );
  return {
    type: CHANGE_STATUS,
    status,
  };
};
