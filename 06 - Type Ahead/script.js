const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// fetch returns a 'promise', 1st .then returns a 'response', 2nd .then returns json data 
fetch(endpoint)
  .then(resp => resp.json())
                          // just like doing .push(1, 2, 3, 4...)
  .then(jsonCityData => cities.push(...jsonCityData))

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
                // g == 'global', i == 'insensitive' i.e. lowercase and uppercase-insensitive
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  });
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi')
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

// change event fires only when you change focus off input
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);