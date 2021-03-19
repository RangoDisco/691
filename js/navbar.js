const menuBtn = document.getElementById('menuBtn');
const hiddenMenu = document.getElementById('hiddenMenu');

menuBtn.addEventListener('click', () => {
  if (hiddenMenu.classList.contains('hidden')) {
    hiddenMenu.classList.remove('hidden');
  } else {
    hiddenMenu.classList.add('hidden');
  }
});
