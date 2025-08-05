import { useEffect, useState } from 'react';


function decodeHtmlEntities(text) {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

function QuoteComponent() {
  const [statement, setStatement] = useState('');
  const [error, setError] = useState('');
  
  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=1&type=boolean')
      .then(response => response.json())
      .then(data => {
        const decodedStatement = decodeHtmlEntities(data.results[0].question);
        setStatement(decodedStatement);
      })
      .catch(error => setError("Something went wrong. Please try again later."));
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
          { (error || statement) ? (error || statement) : "Loading..."}
        </p>
      </div>
      <div className="button-container">
        <button className="true-button" onClick={handleTrueClick}>
          True
        </button>
        <button className="false-button" onClick={handleFalseClick}>
          False
        </button>
      </div>
    </div>
  );
}

export default QuoteComponent; 