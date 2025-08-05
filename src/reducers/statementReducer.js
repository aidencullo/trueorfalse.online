export const initialState = {
  component: 'loading'
};

export function statementReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { component: 'loading' };
    case 'SET_STATEMENT':
      return { component: 'quote', message: action.payload };
    case 'SET_ERROR':
      return { component: 'error' };
    default:
      return state;
  }
} 