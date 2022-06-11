import showCards from '../pages/vocabTerms';
import { createEntry, updateEntry } from '../../../api/vocabData';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    console.warn('You clicked submit btn');
    e.preventDefault();
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A TERM
    if (e.target.id.includes('submit-card')) {
      const cardObj = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
        uid
      };
      createEntry(cardObj).then((cardsArray) => showCards(cardsArray));
    }

    // CLICK EVENT FOR EDITING/UPDATING TERM
    if (e.target.id.includes('update-card')) {
      const [, firebaseKey] = e.target.id.split('--');
      const cardObj = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        category: document.querySelector('#category').value,
        firebaseKey
      };
      updateEntry(cardObj).then(showCards);
    }
  });
};

export default formEvents;
