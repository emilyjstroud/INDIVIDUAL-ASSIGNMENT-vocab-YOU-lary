import renderToDom from '../../helpers/renderToDom';

const intro = () => {
  const domString = `
    <div class="card" style="width: 18rem;">
      <img src="../assets/voccab.jpg" alt="vocab-you-lary logo">
    <div>`;
  renderToDom('#main-container', domString);
};

export default intro;
