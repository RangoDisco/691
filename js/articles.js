class Article {
  constructor(techno, title, logo, desc, code, keywords) {
    this.techno = techno;
    this.title = title;
    this.logo = logo;
    this.desc = desc;
    this.code = code;
    this.keywords = keywords;
  }
}

const list = [
  new Article(
    'html',
    'table',
    '../img/logo-html.png',
    'blabla',
    `
    <form action="" method="get" class="form-example">
        <div class="form-example">
            <label for="name">Enter your name: </label>
            <input type="text" name="name" id="name" required>
        </div>
    </form>
    `,
    'table html test'
  ),
  new Article(
    'html',
    'button',
    '../img/logo-html.png',
    'blabla',
    `<button>Example</button>`,
    'button html test'
  ),
  new Article(
    'html',
    'h1',
    '../img/logo-html.png',
    'blabla',
    `<h1>Example</h1>`,
    'h1 title html test'
  ),
  new Article(
    'html',
    'html basic',
    '../img/logo-html.png',
    'blabla',
    `!`,
    'structure'
  ),
  new Article(
    'css',
    'flexbox',
    '../img/logo-css.png',
    'blalbla',
    `{display:flex}`,
    'css flex mise-en-page'
  ),
  new Article(
    'css',
    'grid',
    '../img/logo-css.png',
    'blabla',
    `grid-containers`,
    'css grid mise-en-page'
  ),
];

const articleListDiv = document.querySelector('.articlesList');

const displayArticle = (techno, title, logo, desc, code, keywords) => {
  const article = document.createElement('article');
  article.classList.add('article');
  articleListDiv.appendChild(article);

  const articleImgAndFav = document.createElement('div');
  articleImgAndFav.classList.add('articleImgAndFav');
  article.appendChild(articleImgAndFav);

  const img = document.createElement('img');
  img.src = logo;
  img.alt = keywords;
  articleImgAndFav.appendChild(img);

  const articleFav = document.createElement('div');
  articleFav.classList.add('articleFav');
  articleImgAndFav.appendChild(articleFav);

  const favBtn = document.createElement('button');
  favBtn.classList.add('favBtn');
  favBtn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>';
  articleFav.appendChild(favBtn);

  const titleDesc = document.createElement('div');
  titleDesc.classList.add('titleDesc');
  article.appendChild(titleDesc);

  const articleTitle = document.createElement('div');
  articleTitle.classList.add('articleTitle');
  titleDesc.appendChild(articleTitle);

  const h2Article = document.createElement('h2');
  h2Article.innerHTML = title;
  articleTitle.appendChild(h2Article);

  const articleDescription = document.createElement('div');
  articleDescription.classList.add('articleDescription');
  articleDescription.innerHTML = desc;
  titleDesc.appendChild(articleDescription);

  const articleSnippet = document.createElement('div');
  articleSnippet.classList.add('articleSnippet');
  article.appendChild(articleSnippet);

  const btnCopy = document.createElement('button');
  btnCopy.classList.add('btnCopy');
  btnCopy.innerHTML = 'COPIER';
  articleSnippet.appendChild(btnCopy);

  const pre = document.createElement('pre');
  articleSnippet.appendChild(pre);

  const codeElement = document.createElement('code');
  codeElement.classList.add('langage');
  codeElement.classList.add(techno);
  codeElement.innerText = code;
  pre.appendChild(codeElement);

  const hr = document.createElement('hr');
  article.appendChild(hr);

  const open = document.createElement('div');
  open.classList.add('open');
  article.appendChild(open);

  const modalBtn = document.createElement('button');
  modalBtn.classList.add('modalBtn');
  modalBtn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>';
  open.appendChild(modalBtn);
};

/* Fav Functions */
function favorite() {
  const addToFav = document.querySelectorAll('.favBtn');
  for (let i = 0; i < addToFav.length; i += 1) {
    addToFav[i].addEventListener('click', () => {
      if (addToFav[i].classList.contains('faved')) {
        addToFav[i].classList.remove('faved');
        localStorage.removeItem(list[i].title);
      } else {
        addToFav[i].classList.add('faved');
        localStorage.setItem(list[i].title, JSON.stringify(list[i]));
      }
    });
    if (list[i].title in localStorage) {
      addToFav[i].classList.add('faved');
    } else {
      addToFav[i].classList.remove('faved');
    }
  }
}

if (document.URL.includes('articlesList')) {
  list.forEach((element) => {
    displayArticle(
      element.techno,
      element.title,
      element.logo,
      element.desc,
      element.code,
      element.keywords
    );
  });
  favorite();
}

/* Copier function */
const btn = document.querySelectorAll('.btnCopy');
for (let z = 0; z < btn.length; z += 1) {
  btn[z].addEventListener('click', () => {
    const codeToCopy = list[z].code;
    navigator.clipboard.writeText(codeToCopy);
  });
}
