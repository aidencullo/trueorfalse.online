const VISITS_KEY = 'visits';

export const getStoredVisits = () => {
  const visits = Number(localStorage.getItem(VISITS_KEY));
  return visits || 0;
};

export const saveVisitsToStorage = (visits) => {
  localStorage.setItem(VISITS_KEY, visits);
}; 