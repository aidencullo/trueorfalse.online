import { useEffect, useReducer } from 'react';
import TrueButton from './TrueButton';
import FalseButton from './FalseButton';
import { decodeHtmlEntities } from './utils/htmlUtils';

const initialState = {
  message: 'Loading...'
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_LOADING':
      return { message: 'Loading...' };
    case 'SET_STATEMENT':
      return { message: action.payload };
    case 'SET_ERROR':
      return { message: action.payload };
    default:
      return state;
  }
}

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
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    fetchStatement(dispatch);
  }, []);

  return (
    <div>
      <div className="quote-container">
        <p className="quote-text">
          {state.message}
        </p>
      </div>
      <div className="button-container">
        <TrueButton />
        <FalseButton />
      </div>
    </div>
  );
}

export default QuoteComponent; 