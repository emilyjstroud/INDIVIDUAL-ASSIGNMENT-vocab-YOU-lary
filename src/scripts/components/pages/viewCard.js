import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const viewCard = (obj) => {
  clearDom();

  const domString = `
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${obj.title}</h5>
    <p class="card-text">${obj.definition}</p>
    <i id="edit-book-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info"></i>
    <i id="delete-book-btn--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
  </div>
</div>
  `;
  renderToDom('#view', domString);
};

export default viewCard;
