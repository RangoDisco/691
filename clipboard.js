function copy() {
  const copyText = document.getElementById('snippetContent');
  const input = document.createElement('textarea');
  input.value = copyText.textContent;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  input.remove();
}

const btn = document.getElementById('copy');
btn.addEventListener('click', copy);
