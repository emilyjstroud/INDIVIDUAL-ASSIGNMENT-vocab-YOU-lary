import clearDom from '../../helpers/clearDom';
import renderToDom from '../../helpers/renderToDom';

const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="termTitle" placeholder="Enter Term" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <input type="text" class="form-control" id="category" placeholder="Category" value="${obj.category || ''}" required>
      </div>
      <div class="form-group" id="select-author">
      </div>
      <button type="submit" class="btn btn-primary">Submit Term
      </button>
    </form>
  `;

  renderToDom('#form-container', domString);
};

export default addVocabForm;
