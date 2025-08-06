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

export async function fetchAnotherStatement(dispatch) {
  dispatch({ type: 'SET_LOADING' });
  
  try {
    const data = await fetchStatement();
    dispatch({ type: 'FETCH_ANOTHER_STATEMENT', payload: data });
  } catch (error) {
    dispatch({ type: 'SET_ERROR' });
  }
} 