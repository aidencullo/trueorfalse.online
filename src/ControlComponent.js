import { useEffect } from 'react';
import QuoteComponent from './QuoteComponent';
import LoadingComponent from './LoadingComponent';
import ErrorComponent from './ErrorComponent';
import { useStatementContext } from './context/StatementContext';
import { handleFetchStatement } from './utils/statementUtils';

function ControlComponent() {
  const { state, dispatch } = useStatementContext();
  
  useEffect(() => {
    handleFetchStatement(dispatch);
  }, [dispatch]);

  const renderComponent = () => {
    switch (state.component) {
      case 'loading':
        return <LoadingComponent />;
      case 'error':
        return <ErrorComponent onFetchStatement={() => handleFetchStatement(dispatch)} />;
      case 'quote':
        return <QuoteComponent text={state.statements[0]} answer={state.answers[0]} />;
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