import {
  GET_QUESTIONS,
  CREATE_QUESTION,
  ANSWER_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case CREATE_QUESTION: {
      const { question } = action;

      return {
        ...state,
        [question.id]: question,
      };
    }
    case ANSWER_QUESTION: {
      const { question } = action;

      return {
        ...state,
        [question.qid]: {
          ...state[question.qid],
          [question.answer]: {
            ...state[question.qid][question.answer],
            votes: state[question.qid][question.answer].votes.concat([
              question.authedUser,
            ]),
          },
        },
      };
    }
    default:
      return state;
  }
}
