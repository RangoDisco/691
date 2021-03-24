// RECUPPERER LES ELEMENTS
const buttons = document.querySelectorAll('.modalBtn');
const modals = document.querySelector('.modals');
const close = document.querySelectorAll('.modalClose');

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
  svgImg.classList.add('close');
  svgImg.src = '../img/x.svg';
  modalTitleDiv.appendChild(svgImg);

  // const svg = document.createElement('svg');
  // svg.classList.add('modalClose');
  // svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  // svg.setAttribute('width', '24');
  // svg.setAttribute('height', '24');
  // svg.setAttribute('viewBox', '0 0 24 24');
  // svg.setAttribute('fill', 'none');
  // svg.setAttribute('stroke', 'currentColor');
  // svg.setAttribute('stroke-width', '2');
  // svg.setAttribute('stroke-linecap', 'round');
  // svg.setAttribute('stroke-linejoin', 'round');
  // modalTitleDiv.appendChild(svg);

  // const line1 = document.createElement('line');
  // line1.setAttribute('x1', '18');
  // line1.setAttribute('y1', '6');
  // line1.setAttribute('x2', '6');
  // line1.setAttribute('x2', '18');
  // svg.appendChild(line1);

  // const line2 = document.createElement('line');
  // line2.setAttribute('x1', '6');
  // line2.setAttribute('y1', '6');
  // line2.setAttribute('x2', '18');
  // line2.setAttribute('x2', '18');
  // svg.appendChild(line2);
};

for (let i = 0; i < buttons.length; i++) {
  displayModal(list[i]);
  buttons[i].addEventListener('click', () => {
    document.querySelectorAll('.modal-container')[i].classList.add('show');
  });
  close[i].addEventListener('click', () => {
    document.querySelectorAll('.modal-container')[i].classList.remove('show');
  });
}
