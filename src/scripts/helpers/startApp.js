import domBuilder from '../components/pages/domBuilder';
import navBar from '../components/pages/navBar';
import logoutButton from '../components/buttons/logoutButton';
import getVocabCards from '../../api/vocabData';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
};

getVocabCards().then((object) => console.warn(object));

export default startApp;
