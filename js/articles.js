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
    '../img/HTML_logo.png',
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
    '../img/HTML_logo.png',
    'blabla',
    `<button>Example</button>`,
    'button html test'
  ),
  new Article(
    'html',
    'h1',
    '../img/HTML_logo.png',
    'blabla',
    `<h1>Example</h1>`,
    'h1 title html test'
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
  favBtn.innerHTML = '<i data-feather="star"></i>';
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
  modalBtn.innerHTML = '<i data-feather="plus-circle"></i>';
  open.appendChild(modalBtn);
};

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
/* Fav Functions */
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
}
function displayfav() {
  for (let j = 0; j < localStorage.length; j += 1) {
    const article = JSON.parse(localStorage.getItem(localStorage.key(j)));
    console.log(article);
    displayArticle(
      article.techno,
      article.title,
      article.logo,
      article.desc,
      article.code,
      article.keywords
    );
  }
}
displayfav();
