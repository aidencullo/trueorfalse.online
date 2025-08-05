import { useEffect, useReducer } from 'react';
import TrueButton from './TrueButton';
import FalseButton from './FalseButton';

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

function decodeHtmlEntities(text) {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

function QuoteComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });
    
    fetch('https://opentdb.com/api.php?amount=1&type=boolean')
      .then(response => response.json())
      .then(data => {
        const decodedStatement = decodeHtmlEntities(data.results[0].question);
        dispatch({ type: 'SET_STATEMENT', payload: decodedStatement });
      })
      .catch(error => dispatch({ type: 'SET_ERROR', payload: "Something went wrong. Please try again later." }));
  }, []);

  const handleTrueClick = () => {
    console.log('True clicked');
  };

  const handleFalseClick = () => {
    console.log('False clicked');
  };

  return (
    <div>
      <div className="quote-container">
        <p className="quote-text">
          {state.message}
        </p>
      </div>
      <div className="button-container">
        <TrueButton onClick={handleTrueClick} />
        <FalseButton onClick={handleFalseClick} />
      </div>
    </div>
  );
}

export default QuoteComponent; 