export const initialState = {
  message: 'Loading...'
};

export function statementReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { message: 'Loading...' };
    case 'SET_STATEMENT':
      return { message: action.payload };
    case 'SET_ERROR':
      return { message: 'Something went wrong. Please try again later.' };
    default:
      return state;
  }
} 