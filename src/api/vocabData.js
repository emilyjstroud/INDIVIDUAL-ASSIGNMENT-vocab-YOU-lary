import axios from 'axios';
// import showCards from '../scripts/components/pages/vocabTerms';
import firebaseConfig from './apiKeys';

// API CALLS
const dbUrl = firebaseConfig.databaseURL;

// GET VOCAB CARDS
const getVocabCards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/cards.json?orderBy="uid"&equalTo="${uid}"`)
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
const createEntry = (cardObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/cards.json`, cardObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/cards/${response.data.name}.json`, payload)
        .then(() => {
          getVocabCards(cardObj.uid).then(resolve);
        });
    }).catch(reject);
});

// GET SINGLE ENTRY

// UPDATE ENTRY

export { getVocabCards, createEntry };
