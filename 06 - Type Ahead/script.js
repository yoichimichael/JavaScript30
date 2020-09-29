const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

// fetch returns a 'promise', 1st .then returns a 'response', 2nd .then returns json data 
fetch(endpoint)
  .then(resp => resp.json())
  .then(jsonCityData => cities.push(...jsonCityData))

  console.log(cities)