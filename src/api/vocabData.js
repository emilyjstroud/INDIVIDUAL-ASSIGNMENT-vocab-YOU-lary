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
const deleteCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/cards/${firebaseKey}.json`)
    .then(() => {
      getVocabCards().then((cardsArray) => resolve(cardsArray));
    })
    .catch((error) => reject(error));
});

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
const updateEntry = (cardObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/cards/${cardObj.firebaseKey}.json`, cardObj)
    .then(() => getVocabCards().then(resolve))
    .catch(reject);
});

const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/cards/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  getVocabCards, deleteCard, createEntry, updateEntry, getSingleCard
};
