import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const emptyCards = () => {
  const domString = '<h1>No Entries Available.</h1>';
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
          <h6 class="card-subtitle mb-2 text-muted">Category: ${item.category}</h6>
          <p class="card-text">${item.definition}</p>
          <i id="edit-book-btn--${item.firebaseKey}" class="fas fa-edit btn btn-info"></i>
          <i id="delete-book-btn--${item.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
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
