function copy() {
  const copyText = document.querySelector('.language-html');
  const input = document.createElement('textarea');
  input.value = copyText.textContent;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  input.remove();
}

const btn = document.getElementById('btnCopy');
btn.addEventListener('click', copy);
