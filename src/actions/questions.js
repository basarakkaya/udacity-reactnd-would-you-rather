import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const GET_QUESTIONS = "GET_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const CREATE_QUESTION = "CREATE_QUESTION";

/**
 * @description Fills the questions store with the questions object fetched from API
 * @param {object} questions
 */
export function getQuestions(questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  };
}

/**
 * @description Modifies the question object according to the "answer" info
 * @param {object} question
 */
function answerQuestion(question) {
  return {
    type: ANSWER_QUESTION,
    question,
  };
}

/**
 * @description Handles the "answer" functionality by communicating with the API and then changes the local store
 * @param {string} authedUser - Authed user ID
 * @param {string} qid - Question ID
 * @param {string} answer - "optionOne" or "optionTwo"
 */
export function handleAnswerQuestion(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(showLoading());

    return saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    })
      .then(() => {
        dispatch(
          answerQuestion({
            authedUser,
            qid,
            answer,
          })
        );
      })
      .catch((e) => {
        console.warn("Error --> handleAnswerQuestion: ", e);
        alert("There was an error answering the question. Try Again!");
      })
      .finally(() => {
        dispatch(hideLoading());
      });
  };
}

/**
 * @description Creates question within the store
 * @param {object} question - Question object that returns as a respone from API
 */
function createQuestion(question) {
  return {
    type: CREATE_QUESTION,
    question,
  };
}

/**
 * @description Handles creating a new question on backend by communicating with API and on local store
 * @param {string} authedUser - Authed User ID
 * @param {string} optionOneText
 * @param {string} optionTwoText
 */
export function handleCreateQuestion(authedUser, optionOneText, optionTwoText) {
  return (dispatch) => {
    dispatch(showLoading());

    return saveQuestion({
      author: authedUser,
      optionOneText,
      optionTwoText,
    })
      .then((question) => {
        dispatch(createQuestion(question));
      })
      .catch((e) => {
        console.warn("Error --> handleCreateQuestion: ", e);
        alert("There was an error creating the question. Try Again!");
      })
      .finally(() => {
        dispatch(hideLoading());
      });
  };
}
