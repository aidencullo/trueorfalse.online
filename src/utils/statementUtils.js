import { fetchMultipleStatements } from '../services/apiService';

export async function handleFetchStatement(dispatch) {
  dispatch({ type: 'SET_LOADING' });
  
  try {
    const statements = await fetchMultipleStatements(10);
    dispatch({ type: 'SET_MULTIPLE_STATEMENTS', payload: statements });
  } catch (error) {
    dispatch({ type: 'SET_ERROR' });
  }
}

export async function fetchAnotherStatement(dispatch, currentStatements) {
  const remainingStatements = currentStatements.slice(1);
  
  if (remainingStatements.length === 0) {
    dispatch({ type: 'SET_LOADING' });
    
    try {
      const statements = await fetchMultipleStatements(10);
      dispatch({ type: 'SET_MULTIPLE_STATEMENTS', payload: statements });
    } catch (error) {
      dispatch({ type: 'SET_ERROR' });
    }
  } else {
    dispatch({ type: 'REMOVE_FIRST_STATEMENT' });
  }
} 