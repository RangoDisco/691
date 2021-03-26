// RECUPPERER LES ELEMENTS
const modals = document.querySelector('.modals');

const displayModal = (article) => {
  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');
  modals.appendChild(modalContainer);

  const modalTitleDiv = document.createElement('div');
  modalTitleDiv.classList.add('modal-title');
  modalContainer.appendChild(modalTitleDiv);

  const modalTitle = document.createElement('h2');
  modalTitle.innerText = article.title;
  modalTitleDiv.appendChild(modalTitle);

  const svgImg = document.createElement('img');
  svgImg.classList.add('modalClose');
  svgImg.src = '../img/x.svg';
  modalTitleDiv.appendChild(svgImg);

  const modalBody = document.createElement('div');
  modalBody.classList.add('modal-body');
  modalBody.style.minHeight = '20rem';
  modalContainer.appendChild(modalBody);

  const description = document.createElement('p');
  description.innerHTML = article.desc;
  modalBody.appendChild(description);

  const trait = document.createElement('hr');
  modalBody.appendChild(trait);

  const btnCopy = document.createElement('button');
  btnCopy.classList.add('btnCopy');
  btnCopy.innerHTML = 'COPIER';
  modalBody.appendChild(btnCopy);

  const pre = document.createElement('pre');
  modalBody.appendChild(pre);

  const code = document.createElement('code');
  code.innerText = article.code;
  pre.appendChild(code);
};
