/* eslint-disable no-undef */

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
    document.querySelectorAll('.article').forEach((i) => {
      i.classList.add('show');
    });
    // INSTANCIER LES MODALS POUR CHAQUE ARTICLE
    for (let index = 0; index < localStorage.length; index += 1) {
      displayModal(localStorage[index]);
    }
    favorite();
  } else {
    const noArticles = document.createElement('h2');
    noArticles.innerHTML = "Pas d'articles en favoris détectés";
    noArticles.style.width = '100%';
    noArticles.style.textAlign = 'center';
    noArticles.style.margin = '2em auto';
    articleListDiv.appendChild(noArticles);
  }
}

// EVENT CLICK OUVERTURE MODAL
for (let h = 0; h < document.querySelectorAll('.modalBtn').length; h += 1) {
  document.querySelectorAll('.modalBtn')[h].addEventListener('click', () => {
    document.querySelectorAll('.modal-container')[h].classList.add('show');
  });
}

// EVENT CLICK FERMETURE MODAL
const closeBtns = document.querySelectorAll('.modalClose');
for (let b = 0; b < closeBtns.length; b += 1) {
  closeBtns[b].addEventListener('click', () => {
    document.querySelectorAll('.modal-container')[b].classList.remove('show');
  });
}
