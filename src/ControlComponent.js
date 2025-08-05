import { useEffect, useReducer } from 'react';
import QuoteText from './QuoteText';
import LoadingComponent from './LoadingComponent';
import ErrorComponent from './ErrorComponent';
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
        return <QuoteText message={state.message} />;
      default:
        return <LoadingComponent />;
    }
  };

  return (
    <div>
      {renderComponent()}
    </div>
  );
}

export default ControlComponent; 