import { showLoading, hideLoading } from "react-redux-loading";
import { getInitialData } from "../utils/api";
import { getQuestions } from "./questions";
import { getUsers } from "./users";

/**
 * @description Fetches the data to be initially used.
 */
export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());

    return getInitialData().then(({ questions, users }) => {
      dispatch(getQuestions(questions));
      dispatch(getUsers(users));
      dispatch(hideLoading());
    });
  };
}
