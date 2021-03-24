/* eslint-disable no-undef */
// RECUPPERER LES ELEMENTS
const buttons = document.querySelectorAll('.modalBtn');
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
};

function displayfav() {
  for (let c = 0; c < localStorage.length; c += 1) {
    const localArticle = JSON.parse(localStorage.getItem(localStorage.key(c)));
    displayArticle(
      localArticle.techno,
      localArticle.title,
      localArticle.logo,
      localArticle.desc,
      localArticle.code,
      localArticle.keywords
    );
  }
}

if (document.URL.includes('fav')) {
  if (localStorage.length > 0) {
    displayfav();
  } else {
    const noArticles = document.createElement('h2');
    noArticles.innerHTML = "Pas d'articles en favoris détectés";
    noArticles.style.width = '100%';
    noArticles.style.textAlign = 'center';
    noArticles.style.margin = '2em auto';
    articleListDiv.appendChild(noArticles);
  }
}

// INSTANCIER LES MODALS POUR CHAQUE ARTICLE
for (let index = 0; index < list.length; index += 1) {
  displayModal(list[index]);
}

// EVENT CLICK OUVERTURE MODAL
for (let h = 0; h < buttons.length; h += 1) {
  buttons[h].addEventListener('click', () => {
    document.querySelectorAll('.modal-container')[h].classList.add('show');
  });
}

console.log(buttons.length);

// EVENT CLICK FERMETURE MODAL
const closeBtns = document.querySelectorAll('.modalClose');
for (let b = 0; b < closeBtns.length; b += 1) {
  closeBtns[b].addEventListener('click', () => {
    document.querySelectorAll('.modal-container')[b].classList.remove('show');
  });
}
