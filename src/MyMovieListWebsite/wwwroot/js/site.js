const uri = 'api/MyMovieList';
let movies = [];

function getMovies() {
  fetch(uri)
    .then(response => response.json())
    .then(data => _displayMovies(data))
    .catch(error => console.error('Unable to get movies.', error));
}

function addMovie() {
  const addNameTextbox = document.getElementById('add-name');

  const movie = {
    isComplete: false,
    name: addNameTextbox.value.trim()
  };

  fetch(uri, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(response => response.json())
    .then(() => {
      getMovies();
      addNameTextbox.value = '';
    })
    .catch(error => console.error('Unable to add movie.', error));
}

function deleteMovie(id) {
  fetch(`${uri}/${id}`, {
    method: 'DELETE'
  })
  .then(() => getMovies())
  .catch(error => console.error('Unable to delete movie.', error));
}

function displayEditForm(id) {
  const movie = movies.find(movie => movie.id === id);
  
  document.getElementById('edit-name').value = movie.name;
  document.getElementById('edit-id').value = movie.id;
  document.getElementById('edit-isComplete').checked =  movie.isComplete;
  document.getElementById('editForm').style.display = 'block';
}

function updateMovie() {
  const movieId = document.getElementById('edit-id').value;
  const movie = {
    id: parseInt(movieId, 10),
    isComplete: document.getElementById('edit-isComplete').checked,
    name: document.getElementById('edit-name').value.trim()
  };

  fetch(`${uri}/${movieId}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  })
  .then(() => getMovies())
  .catch(error => console.error('Unable to update item.', error));

  closeInput();

  return false;
}

function closeInput() {
  document.getElementById('editForm').style.display = 'none';
}

function _displayCount(itemCount) {
  const name = (itemCount === 1) ? 'to-do' : 'to-dos';

  document.getElementById('counter').innerText = `${itemCount} ${name}`;
}

function _displayMovies(data) {
  const tBody = document.getElementById('movies');
  tBody.innerHTML = '';

  _displayCount(data.length);

  const button = document.createElement('button');

  data.forEach(movie => {
    let isCompleteCheckbox = document.createElement('input');
    isCompleteCheckbox.type = 'checkbox';
    isCompleteCheckbox.disabled = true;
    isCompleteCheckbox.checked = item.isComplete;

    let editButton = button.cloneNode(false);
    editButton.innerText = 'Edit';
    editButton.setAttribute('onclick', `displayEditForm(${movie.id})`);

    let deleteButton = button.cloneNode(false);
    deleteButton.innerText = 'Delete';
    deleteButton.setAttribute('onclick', `deleteItem(${movie.id})`);

    let tr = tBody.insertRow();
    
    let td1 = tr.insertCell(0);
    td1.appendChild(isCompleteCheckbox);

    let td2 = tr.insertCell(1);
    let textNode = document.createTextNode(item.name);
    td2.appendChild(textNode);

    let td3 = tr.insertCell(2);
    td3.appendChild(editButton);

    let td4 = tr.insertCell(3);
    td4.appendChild(deleteButton);
  });

  todos = data;
}