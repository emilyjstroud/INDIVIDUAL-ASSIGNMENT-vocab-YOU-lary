import domBuilder from '../components/pages/domBuilder';
import navBar from '../components/pages/navBar';
import logoutButton from '../components/buttons/logoutButton';
import { getVocabCards } from '../../api/vocabData';
import navEvents from '../components/events/navigationEvents';
import domEvents from '../components/events/domEvents';
import formEvents from '../components/events/formEvents';
import showCards from '../components/pages/vocabTerms';
import filterBtns from '../components/buttons/filterBtn';

const startApp = (user) => {
  domBuilder();
  navBar();
  logoutButton();
  filterBtns();
  domEvents(user.uid);
  formEvents(user.uid);
  navEvents(user.uid);
  getVocabCards(user.uid).then((object) => showCards(object));
};

export default startApp;
