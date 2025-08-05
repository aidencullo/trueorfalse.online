export const initialState = {
  component: 'loading'
};

export function statementReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { component: 'loading' };
    case 'SET_STATEMENT':
      return { 
        component: 'quote', 
        statement: action.payload.statement,
        answer: action.payload.answer
      };
    case 'SET_ERROR':
      return { component: 'error' };
    default:
      return state;
  }
} 