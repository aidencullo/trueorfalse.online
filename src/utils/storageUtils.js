const VISITS_KEY = 'visits';
const CORRECT_KEY = 'correct';
const INCORRECT_KEY = 'incorrect';

export const getStoredVisits = () => {
  const visits = Number(localStorage.getItem(VISITS_KEY));
  return visits || 0;
};

export const saveVisitsToStorage = (visits) => {
  localStorage.setItem(VISITS_KEY, visits);
};

export const getStoredCorrect = () => {
  const correct = Number(localStorage.getItem(CORRECT_KEY));
  return correct || 0;
};

export const saveCorrectToStorage = (correct) => {
  localStorage.setItem(CORRECT_KEY, correct);
};

export const getStoredIncorrect = () => {
  const incorrect = Number(localStorage.getItem(INCORRECT_KEY));
  return incorrect || 0;
};

export const saveIncorrectToStorage = (incorrect) => {
  localStorage.setItem(INCORRECT_KEY, incorrect);
}; 