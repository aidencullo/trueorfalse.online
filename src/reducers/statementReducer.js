export const initialState = {
  component: 'loading',
  statements: [],
  answers: []
};

export function statementReducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { component: 'loading', statements: [], answers: [] };
    case 'SET_STATEMENT':
      return { 
        component: 'quote', 
        statements: [...state.statements, action.payload.statement],
        answers: [...state.answers, action.payload.answer]
      };
    case 'FETCH_ANOTHER_STATEMENT':
      return { 
        component: 'quote', 
        statements: [...state.statements.slice(1), action.payload.statement],
        answers: [...state.answers.slice(1), action.payload.answer]
      };
    case 'REMOVE_FIRST_STATEMENT':
      return { 
        component: 'quote', 
        statements: state.statements.slice(1),
        answers: state.answers.slice(1)
      };
    case 'SET_ERROR':
      return { component: 'error', statements: [], answers: [] };
    default:
      return state;
  }
} 