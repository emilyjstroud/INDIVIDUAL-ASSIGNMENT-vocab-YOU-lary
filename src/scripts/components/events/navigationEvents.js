import { getVocabCards } from '../../../api/vocabData';
import signOut from '../../helpers/signOut';
import showCards from '../pages/vocabTerms';

// NAVIGATION EVENTS

const navEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-btn')
    .addEventListener('click', signOut);

  // ALL TERMS
  document.querySelector('#all-terms').addEventListener('click', () => {
    console.warn('YOU CLICKED THE ALL TERMS BTN');
    getVocabCards().then((cardsArray) => showCards(cardsArray));
  });
};

export default navEvents;
