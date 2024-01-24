let myLibrary = [];
const form = document.querySelector('#myform');
const body = document.querySelector('.output');
document.addEventListener('DOMContentLoaded', function() {
  var myModal = new bootstrap.Modal(document.getElementById('myModal'));
});

function Book(title, author, page,bool, index = 0) {
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = bool;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  book.index=  myLibrary.length - 1;
}

const submitButton = form.querySelector('#submitbutton');

submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission behavior

  const title = form.title.value;
  const author = form.author.value;
  const page = form.page.value;
  const read = form.check.checked;

  const book = new Book(title, author, page, read);
  addBookToLibrary(book);

  form.title.value = '';
  form.author.value = '';
  form.page.value = '';
  form.check.checked = false;
  document.querySelector('.addbook').click();
  displayLibrary(book);
    
});


function displayLibrary(book) {
    createCard(book);
}

function createCard(book) {
      
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card');

  
    const cardHeader = document.createElement('h5');
    cardHeader.classList.add('card-header');
    cardHeader.textContent = book.title;

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');


    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = book.author;

    const cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = `The book contains ${book.page} pages`;


    const primaryButton = document.createElement('a');
    
    if (book.read) {
      primaryButton.classList.add('btn', 'btn-success');
    } else {
      primaryButton.classList.add('btn', 'btn-danger');
    }
    primaryButton.textContent = `Read status: ${book.read}`;
    primaryButton.onclick =  ()=>{
        book.update_read_status();
        primaryButton.textContent = `Read status: ${book.read}`;
        primaryButton.classList.toggle('btn-success');
        primaryButton.classList.toggle( 'btn-danger');
    };
  
    const warningButton = document.createElement('a');
    warningButton.classList.add('btn', 'btn-warning',);
    warningButton.href = '#';
    warningButton.textContent = 'Delete';
    warningButton.onclick=  ()=>{
        const foundId= myLibrary.findIndex((b) => b === book);
        myLibrary.splice(foundId, 1);
        cardContainer.remove();
        console.log("-------", myLibrary);
      };
    
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(primaryButton);
    cardBody.appendChild(warningButton);

    cardContainer.appendChild(cardHeader);
    cardContainer.appendChild(cardBody);

    const parentElement = document.querySelector('.parent-element');
    parentElement.appendChild(cardContainer);
}

Book.prototype.update_read_status = function () {
  this.read = !this.read;
};

