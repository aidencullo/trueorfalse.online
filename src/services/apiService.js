import { decodeHtmlEntities } from '../utils/htmlUtils';

function buildApiUrl() {
  const host = 'https://opentdb.com';
  const endpoint = '/api.php';
  const params = new URLSearchParams({
    amount: '1',
    type: 'boolean'
  });
  
  return `${host}${endpoint}?${params.toString()}`;
}

export async function fetchStatement() {
  const url = buildApiUrl();
  const response = await fetch(url);
  const data = await response.json();
  const decodedStatement = decodeHtmlEntities(data.results[0].question);
  return decodedStatement;
} 