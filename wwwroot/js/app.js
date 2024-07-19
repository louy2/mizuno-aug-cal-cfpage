async function main() {
  // main fn
  const yourNameEl = document.querySelector('#your-name');
  const yourNameOld = localStorage.getItem('your-name');
  if (!yourNameOld) {
    localStorage.setItem('your-name', yourNameEl.textContent);
  } else {
    yourNameEl.textContent = yourNameOld;
  }
  yourNameEl.addEventListener('input', () => {
    localStorage.setItem('your-name', yourNameEl.textContent);
  })
}

document.addEventListener('DOMContentLoaded', main);
