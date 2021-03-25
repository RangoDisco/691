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
  new Article(
    'css',
    'CSS Syntax',
    '../img/logo-css.png',
    `Le sélecteur pointe vers l'élément HTML que vous souhaitez styliser.
    Le bloc de déclaration contient une ou plusieurs déclarations séparées par des points-virgules.
    Chaque déclaration comprend un nom de propriété CSS et une valeur, séparés par deux-points.
    Plusieurs déclarations CSS sont séparées par des points-virgules, et les blocs de déclaration sont entourés d'accolades.`,
    'h1 {color:blue; font-size:12px;}',
    'bases css '
  ),
  new Article(
    'Javascript',
    'Introduction JS',
    '../img/logo-js.png',
    `JavaScript peut modifier le contenu HTML
    L'une des nombreuses méthodes HTML JavaScript est getElementById().
    L'exemple ci-dessous "trouve" un élément HTML (avec id="demo") et change le contenu de l'élément
     (innerHTML) en "Bonjour JavaScript"`,
    'document.getElementById("demo").innerHTML = "Hello JavaScript";',
    'javascript DOM '
  ),
  new Article(
    'Javascript',
    'Variables',
    '../img/logo-js.png',
    `En JavaScript, il y a différents types de variables. Historiquement,
     il n'était possible de créer une variable qu'avec var. Mais depuis quelques années 
     (je te laisse chercher depuis quand !),
     deux autres types de variables sont devenus les standards. "let" et "const"`,
    `1let myCity = "Paris";
      2myCity = "Berlin";
      3console.log(myCity);
      4// Berlin`,
    'javascript variables'
  ),
  new Article(
    'Javascript',
    'DOM',
    '../img/logo-js.png',
    `DOM signifie Document Object Model. C'est une interface utilisée pour manipuler le contenu 
    d'une page HTML.
    Lorsque ton navigateur analyse ton code HTML et CSS, 
    il crée également une représentation sous la forme d'un objet Javascript du document.
    Nous utiliserons ce modèle pour manipuler notre page web.`,
    `1const title = document.getElementById('title');
    2const heading = document.getElementsByTagName('h1');`,
    'javascript DOM'
  ),
  new Article(
    'GitHub',
    'Introduction',
    '../img/logo-git.png',
    `GitHub est une plateforme en ligne très populaire offrant de nombreux services aux développeurs.
      Ses principales fonctionnalités sont:\n
     •L'hébergement de code\n
     •Le travail collaboratif entre les membres d'une équipe\n
     •La découverte de nouveaux projets (souvent open-source) 
     et collaboration entre développeurs du monde entier`,
    'https://youtu.be/BCQHnlnPusY',
    'github introduction'
  ),
  new Article(
    'GitHub',
    'Merge & Conflit',
    '../img/logo-git.png',
    `ce qu'on appelle une fusion (merging). Elle est réalisée par la commande "git pull" 
    (il y a d'autres façons de le faire, mais c'est suffisant pour l'instant), 
    qui te permet de mettre à jour tes fichiers locaux avec les fichiers distants
     (par exemple, sur le repo GitHub).`,
    'git pull',
    'merge conflit '
  ),
  new Article(
    'Github',
    'Revert',
    '../img/logo-git.png',
    `git revert est utilisé pour enregistrer de nouveaux commits
     afin d'inverser l'effet de certains commits antérieurs 
     (souvent seulement défectueux).`,
    `git revert [--[no-]edit] [-n] [-m parent-number] [-s] [-S[<keyid>]]
     <commit>…
     git revert (--continue | --skip | --abort | --quit)`,
    'git revert erreur'
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
if (document.URL.includes('articlesList')) {
  // list.forEach((element) => {
  //   displayArticle(
  //     element.techno,
  //     element.title,
  //     element.logo,
  //     element.desc,
  //     element.code,
  //     element.keywords
  //   );
  // });
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