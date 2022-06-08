const clearDom = () => {
  document.querySelector('#navbar').innerHTML = '';
  document.querySelector('#main-container').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#view').innerHTML = '';
};

export default clearDom;
