import fetch from 'node-fetch';

const url = 'https://pokeapi.co/api/v2/pokemon/{id or name}/'
const options = {
  method: 'GET',
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
