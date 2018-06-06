const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('item');

// conditional statement that checks if localStorage already exists so it does not reset  to an empty array every time the script runs
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

// function that creates an li element
const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

form.addEventListener('submit', function (e) {
  //prevent form from default action
  e.preventDefault();

// push new value to the array
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  //auto erase input field
  input.value = "";
});

// loop to display stored list to user interface
data.forEach(item => {
  liMaker(item);
});

// clear button
button.addEventListener('click', function () {
  window.location.reload();
  localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
});
