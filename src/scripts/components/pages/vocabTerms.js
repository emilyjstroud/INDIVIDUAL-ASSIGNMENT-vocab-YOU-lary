import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const emptyCards = () => {
  const domString = '<h1>No Items</h1>';
  renderToDom('#store', domString);
};

const showCards = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add A Term</button>';
  renderToDom('#add-button', btnString);

  if (array.length) {
    let domString = '';
    array.forEach((item) => {
      domString += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.definition}</p>
          <a href="#" class="card-link">Edit/a>
          <a href="#" class="card-link">Delete</a>
        </div>
      </div>
      `;
    });
    renderToDom('#store', domString);
  } else {
    emptyCards();
  }
};

export default { showCards, emptyCards };
