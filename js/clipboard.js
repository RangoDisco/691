function copy() {
  const copyText = document.querySelector(`.langage`);
  const input = document.createElement('textarea');
  input.value = copyText.textContent;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  input.remove();
}

const btn = document.querySelector('.btnCopy');
btn.addEventListener('click', copy);
