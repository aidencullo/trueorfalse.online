import { useEffect, useReducer } from 'react';
import QuoteComponent from './QuoteComponent';
import LoadingComponent from './LoadingComponent';
import ErrorComponent from './ErrorComponent';
import { statementReducer, initialState } from './reducers/statementReducer';
import { fetchStatement } from './services/apiService';

async function handleFetchStatement(dispatch) {
  dispatch({ type: 'SET_LOADING' });
  
  try {
    const data = await fetchStatement();
    dispatch({ type: 'SET_STATEMENT', payload: data });
  } catch (error) {
    dispatch({ type: 'SET_ERROR' });
  }
}

function ControlComponent() {
  const [state, dispatch] = useReducer(statementReducer, initialState);
  
  useEffect(() => {
    handleFetchStatement(dispatch);
  }, []);

  const renderComponent = () => {
    switch (state.component) {
      case 'loading':
        return <LoadingComponent />;
      case 'error':
        return <ErrorComponent />;
      case 'quote':
        return <QuoteComponent text={state.statement} answer={state.answer} />;
      default:
        return <LoadingComponent />;
    }
  };

  return (
    <div>
      {renderComponent()}
      <button 
        className="fetch-button" 
        onClick={() => handleFetchStatement(dispatch)}
      >
        Fetch Statement
      </button>
    </div>
  );
}

export default ControlComponent; 