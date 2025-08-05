import { useEffect, useReducer } from 'react';
import QuoteText from './QuoteText';
import ButtonContainer from './ButtonContainer';
import { statementReducer, initialState } from './reducers/statementReducer';
import { fetchStatement } from './services/apiService';

async function handleFetchStatement(dispatch) {
  dispatch({ type: 'SET_LOADING' });
  
  try {
    const statement = await fetchStatement();
    dispatch({ type: 'SET_STATEMENT', payload: statement });
  } catch (error) {
    dispatch({ type: 'SET_ERROR' });
  }
}

function QuoteComponent() {
  const [state, dispatch] = useReducer(statementReducer, initialState);
  
  useEffect(() => {
    handleFetchStatement(dispatch);
  }, []);

  return (
    <div>
      <QuoteText message={state.message} />
      <ButtonContainer />
    </div>
  );
}

export default QuoteComponent; 