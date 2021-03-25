const searchbar = document.getElementById('searchbar');

searchbar.value = null;

searchbar.addEventListener('focus', () => {
  document.querySelectorAll('.article').forEach((i) => {
    i.classList.remove('show');
  });
});

searchbar.addEventListener('change', () => {
  let results = [];

  list.forEach((article) => {
    if (article.keywords.includes(searchbar.value)) {
      results = list.filter((i) => i.keywords.includes(searchbar.value));
    }
  });

  //   searchbar.focus(false);
  searchbar.value = null;

  console.log(results);

  for (let index = 0; index < results.length; index += 1) {
    displayArticle(
      results[index].techno,
      results[index].title,
      results[index].logo,
      results[index].desc,
      results[index].code,
      results[index].keywords
    );
    document.querySelectorAll('.article').forEach((i) => {
      i.classList.add('show');
    });
  }
});
