let myLibrary = [];
const form = document.querySelector('#myform');
const body = document.querySelector('.output');
document.addEventListener('DOMContentLoaded', function() {
  var myModal = new bootstrap.Modal(document.getElementById('myModal'));
});



function Book(title, author, page,read) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const submitButton = form.querySelector('#submitbutton');

// Adding event listener to the submit button
submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission behavior

  const title = form.title.value;
  const author = form.author.value;
  const page = form.page.value;
  const read = form.check.checked;

  const book = new Book(title, author, page, read);
  addBookToLibrary(book);

  // Clear form inputs
  form.title.value = '';
  form.author.value = '';
  form.page.value = '';
  form.check.checked = false;

  console.log('Form submitted');
  console.log(myLibrary);
  displayLibrary(book);

});


function displayLibrary(book) {
   
    createCard(book.title,book.author,book.page);

}

function createCard(title, auth, pag) {
      // Create the card container div
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card');

    // Create the card header element
    const cardHeader = document.createElement('h5');
    cardHeader.classList.add('card-header');
    cardHeader.textContent = title;

    // Create the card body div
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    // Create the card title element
    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = auth;

    // Create the card text element
    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = `The book contains ${pag} pages`;

    // Create the primary button element
    const primaryButton = document.createElement('a');
    primaryButton.classList.add('btn', 'btn-primary');
    primaryButton.href = '#';
    primaryButton.textContent = 'Read toggle';

    // Create the warning button element
    const warningButton = document.createElement('a');
    warningButton.classList.add('btn', 'btn-warning');
    warningButton.href = '#';
    warningButton.textContent = 'Delete';

    // Append the elements to construct the card structure
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(primaryButton);
    cardBody.appendChild(warningButton);

    cardContainer.appendChild(cardHeader);
    cardContainer.appendChild(cardBody);

    // Append the card container to the desired parent element
    const parentElement = document.querySelector('.parent-element');
    parentElement.appendChild(cardContainer);
}

