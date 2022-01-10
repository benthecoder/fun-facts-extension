document.addEventListener('DOMContentLoaded', () => {
  const factContainer = document.getElementById('factContainer');
  const url = 'https://asli-fun-fact-api.herokuapp.com/';

  const getFact = () => {
    spinner.removeAttribute('hidden');
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        spinner.setAttribute('hidden', '');
        const fact = json.data.fact;
        factContainer.innerHTML = `
        <h3>Category: ${json.data.cat}</h3>
        <h4>${fact}</h4>
        `;
      });
  };

  // first call
  getFact();

  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
    getFact();
  });
});
