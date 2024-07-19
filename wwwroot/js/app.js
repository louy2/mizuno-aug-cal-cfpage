async function main() {
  // main fn is run once when DOM is loaded

  // recover name from localStorage and show in #your-name
  const yourNameEl = document.querySelector('#your-name');
  const yourNameOld = localStorage.getItem('your-name');
  if (!yourNameOld) {
    localStorage.setItem('your-name', yourNameEl.textContent);
  } else {
    yourNameEl.textContent = yourNameOld;
  }
  // save name in #your-name into localStorage
  yourNameEl.addEventListener('input', () => {
    localStorage.setItem('your-name', yourNameEl.textContent);
  })
}

document.addEventListener('DOMContentLoaded', main);
