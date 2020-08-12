import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

export function getInitialData() {
  return Promise.all([_getQuestions(), _getUsers()]).then(
    ([questions, users]) => ({
      questions,
      users,
    })
  );
}

/**
 *
 * @param {object} question - Question object
 */
export function saveQuestion(question) {
  return _saveQuestion(question);
}

/**
 *
 * @param {object} answerObj - Answer object
 */
export function saveQuestionAnswer(answerObj) {
  return _saveQuestionAnswer(answerObj);
}
