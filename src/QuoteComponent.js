import { useEffect, useState } from 'react';


function processQuote(quote) {
  const sentences = quote.split('.');
  const processedSentences = sentences.map(sentence => {
    const lowercasedSentence = sentence.toLowerCase();
    const capitalizedSentence = lowercasedSentence.charAt(0).toUpperCase() + lowercasedSentence.slice(1);
    return capitalizedSentence;
  });
  const processedQuote = processedSentences.join('. ');
  return processedQuote;
}

function QuoteComponent() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/quotes/random')
      .then(response => response.json())
      .then(data => {
        const processedQuote = processQuote(data.quote);
        setQuote(processedQuote);
      })
      .catch(error => console.error('Error fetching quote:', error));
  }, []); // empty array = run once on mount

  return (
    <div className="quote-container">
      <p className="quote-text">
        {quote}
      </p>
    </div>
  );
}

export default QuoteComponent; 