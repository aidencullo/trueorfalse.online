export const initialState = {
  siteVisits: 0,
  correct: 0,
  incorrect: 0
};

export function userReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT_VISITS':
      return {
        ...state,
        siteVisits: state.siteVisits + 1
      };
    case 'SET_VISITS':
      return {
        ...state,
        siteVisits: action.payload
      };
    case 'INCREMENT_CORRECT':
      return {
        ...state,
        correct: state.correct + 1
      };
    case 'SET_CORRECT':
      return {
        ...state,
        correct: action.payload
      };
    case 'INCREMENT_INCORRECT':
      return {
        ...state,
        incorrect: state.incorrect + 1
      };
    case 'SET_INCORRECT':
      return {
        ...state,
        incorrect: action.payload
      };
    default:
      return state;
  }
} 