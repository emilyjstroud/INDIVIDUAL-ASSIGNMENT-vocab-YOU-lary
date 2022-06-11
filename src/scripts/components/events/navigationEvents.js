import { getVocabCards } from '../../../api/vocabData';
// import clearDom from '../../helpers/clearDom';
import signOut from '../../helpers/signOut';
import addVocabForm from '../forms/addVocabForm';
import intro from '../pages/intro';
import showCards from '../pages/vocabTerms';

// NAVIGATION EVENTS

const navEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#google-auth')
    .addEventListener('click', signOut);

  // ABOUT & LOGO
  document.querySelector('#about').addEventListener('click', () => {
    console.warn('YOU CLICKED THE ABOUT BTN');
    intro();
  });

  // CREATE ENTRY
  document.querySelector('#create-card').addEventListener('click', () => {
    console.warn('YOU CLICKED CREATE TERM BTN');
    addVocabForm();
  });

  // ALL TERMS
  document.querySelector('#all-terms').addEventListener('click', () => {
    console.warn('YOU CLICKED THE ALL TERMS BTN');
    getVocabCards().then((cardsArray) => showCards(cardsArray));
  });
};

// FILTER EVENTS
// document.querySelector('#filter-buttons').addEventListener('click', (e) => {
//   console.warn('YOU CLICKED CULINARY FUNGI BTN', e.target.id);
// });

export default navEvents;
