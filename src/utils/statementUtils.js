import { fetchStatement } from '../services/apiService';

export async function handleFetchStatement(dispatch) {
  dispatch({ type: 'SET_LOADING' });
  
  try {
    const data = await fetchStatement();
    dispatch({ type: 'SET_STATEMENT', payload: data });
  } catch (error) {
    dispatch({ type: 'SET_ERROR' });
  }
} 