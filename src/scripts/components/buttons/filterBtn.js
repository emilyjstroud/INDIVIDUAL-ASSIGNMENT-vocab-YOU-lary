import renderToDom from '../../helpers/renderToDom';

const filterBtns = () => {
  const domString = `<div class="btn-group btn-group-toggle" data-toggle="buttons" id="filterbtn">
  <label class="btn btn-secondary active">
     See All Categories
  </label>
  <label class="btn btn-secondary">
     Culinary Fungi
  </label>
  <label class="btn btn-secondary">
    Natural Fungi
  </label>
  <label class="btn btn-secondary">
    Miscelaneous Fungi
  </label>
  </div>`;
  renderToDom('#filter-buttons', domString);
};

export default filterBtns;
