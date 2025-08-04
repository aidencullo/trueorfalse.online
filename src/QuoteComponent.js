import { useEffect, useState } from 'react';

function QuoteComponent() {
  const [statement, setStatement] = useState('');

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=1&type=boolean')
      .then(response => response.json())
      .then(data => {
        setStatement(data.results[0].question);
      })
      .catch(error => console.error('Error fetching statement:', error));
  }, []); // empty array = run once on mount

  return (
    <div className="quote-container">
      <p className="quote-text">
        {statement}
      </p>
    </div>
  );
}

export default QuoteComponent; 