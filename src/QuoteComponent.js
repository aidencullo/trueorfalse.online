import { useEffect, useReducer } from 'react';
import QuoteText from './QuoteText';
import ButtonContainer from './ButtonContainer';
import { decodeHtmlEntities } from './utils/htmlUtils';
import { statementReducer, initialState } from './reducers/statementReducer';

async function fetchStatement(dispatch) {
  dispatch({ type: 'SET_LOADING' });
  
  try {
    const response = await fetch('https://opentdb.com/api.php?amount=1&type=boolean');
    const data = await response.json();
    const decodedStatement = decodeHtmlEntities(data.results[0].question);
    dispatch({ type: 'SET_STATEMENT', payload: decodedStatement });
  } catch (error) {
    dispatch({ type: 'SET_ERROR', payload: "Something went wrong. Please try again later." });
  }
}

function QuoteComponent() {
  const [state, dispatch] = useReducer(statementReducer, initialState);
  
  useEffect(() => {
    fetchStatement(dispatch);
  }, []);

  return (
    <div>
      <QuoteText message={state.message} />
      <ButtonContainer />
    </div>
  );
}

export default QuoteComponent; 