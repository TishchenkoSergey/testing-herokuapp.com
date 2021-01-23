global.fetch = require("node-fetch");
const URL = 'https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5';

let arrayTitles = [];

fetch(URL)
  .then(response => response.json())
  .then(json => {
    for (let key in json) {
      arrayTitles.push(json[key].title);
    }
  })

module.exports = arrayTitles;
