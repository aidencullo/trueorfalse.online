import { decodeHtmlEntities } from '../utils/htmlUtils';

function buildApiUrl(amount = 1) {
  const host = 'https://opentdb.com';
  const endpoint = '/api.php';
  const params = new URLSearchParams({
    amount: amount.toString(),
    type: 'boolean'
  });
  
  return `${host}${endpoint}?${params.toString()}`;
}

export async function fetchStatement() {
  const url = buildApiUrl();
  const response = await fetch(url);
  const data = await response.json();
  const decodedStatement = decodeHtmlEntities(data.results[0].question);
  const answer = data.results[0].correct_answer === 'True';
  return { statement: decodedStatement, answer };
}

export async function fetchMultipleStatements(amount = 10) {
  const url = buildApiUrl(amount);
  const response = await fetch(url);
  const data = await response.json();
  
  return data.results.map(result => ({
    statement: decodeHtmlEntities(result.question),
    answer: result.correct_answer === 'True'
  }));
} 