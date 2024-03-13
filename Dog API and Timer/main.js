'use strict';
function createRow(id, url) {
  const tr = document.createElement('tr');
  const td_id = document.createElement('td');
  td_id.appendChild(document.createTextNode(id));

  const td_url = document.createElement('td');
  td_url.appendChild(document.createTextNode(url));

  const td_img = document.createElement('td');

  const img = document.createElement('img');
  img.src = url;
  td_img.appendChild(img);

  tr.appendChild(td_id);
  tr.appendChild(td_url);
  tr.appendChild(td_img);
  tableBody.appendChild(tr);
}
const app = document.getElementById('app');
// Creating a new Element
const newElement = document.createTextNode('Hello, World!');
// Adding it as a Child
app.appendChild(newElement);

const tableBody = document.querySelector('tbody');
const sampleObj = {
  id: 1,
  url: 'https://images.dog.ceo/breeds/maltese/n02085936_3391.jpg',
};

createRow(1, 'https://images.dog.ceo/breeds/maltese/n02085936_3391.jpg');

// -- fetch here --
async function fetchDogPicsAsync() {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(url);
    const dog = await response.json();
    if (dog && dog.message) {
      let newBlock = tableBody.querySelectorAll('tr').length + 1;
      createRow(newBlock, dog.message);
    }
}
//document.addEventListener("DOMContentLoaded", fetchDogPicsAsync);

// -- fetch here --
const url = 'https://dog.ceo/api/breeds/image/random';
const response = fetch(url)
  .then((response) => response.json())
  .then(processDogData);

function processDogData(data) {
  console.log(data);
  app.appendChild(document.createTextNode(JSON.stringify(data)));

  createRow(5, data.message);
}

/* Get a new dog picture every 5 seconds */
setInterval(fetchDogPicsAsync, 5000);