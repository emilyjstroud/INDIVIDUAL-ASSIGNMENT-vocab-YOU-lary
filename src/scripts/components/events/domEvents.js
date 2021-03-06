import { deleteCard, getSingleCard } from '../../../api/vocabData';
import addVocabForm from '../forms/addVocabForm';
import showCards from '../pages/vocabTerms';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // DELETING CARDS
    if (e.target.id.includes('delete-card-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const [, firebaseKey] = e.target.id.split('--');

        deleteCard(firebaseKey, uid).then((cardsArray) => showCards(cardsArray));
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING TERMS
    if (e.target.id.includes('add-card-btn')) {
      addVocabForm({}, uid);
    }

    // CLICK EVENT FOR EDITING/UPDATING TERM
    if (e.target.id.includes('edit-card-btn')) {
      console.warn('EDIT CARD', e.target.id);
      const [, firebaseKey] = e.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => addVocabForm(uid, cardObj));
    }

    // CLICK EVENT
  });
};

export default domEvents;
