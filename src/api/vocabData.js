import axios from 'axios';
// import showCards from '../scripts/components/pages/vocabTerms';
import firebaseConfig from './apiKeys';

// API CALLS
const dbUrl = firebaseConfig.databaseURL;

// GET VOCAB CARDS
const getVocabCards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/cards.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

// DELETE CARDS (entry)

// CREATE ENTRY (card)

// GET SINGLE ENTRY

// UPDATE ENTRY

export default getVocabCards;
