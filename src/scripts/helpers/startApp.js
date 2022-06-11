import domBuilder from '../components/pages/domBuilder';
import navBar from '../components/pages/navBar';
import logoutButton from '../components/buttons/logoutButton';
import { getVocabCards } from '../../api/vocabData';
import navEvents from '../components/events/navigationEvents';
import domEvents from '../components/events/domEvents';
// import formEvents from '../components/events/formEvents';
import showCards from '../components/pages/vocabTerms';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
  domEvents();
  // formEvents();
  navEvents();
  getVocabCards().then((object) => showCards(object));
};

export default startApp;
