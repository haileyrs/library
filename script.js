let myLibrary = [];

function Book(title, author, description, pages, read) {
  this.title = title
  this.author = author
  this.description = description
  this.pages = pages
  this.read = read
}

function addBookToLibrary(e) {
  e.preventDefault();

  // newBook = new Book(title, author, description, pages, read)
  // myLibrary.push(newBook)
  displayBooks()
}

function closeModal() {
  modal.style.display = "none";
  // clear inputs
}

function displayBooks() {
  bookGrid.innerHTML = '';
  for (book of myLibrary) {
    let gridSquare = document.createElement('div');
    gridSquare.classList.add('book-card');
    
  }
}


let modal = document.getElementById('modal');
let addBtn = document.getElementById('addBtn');
let closeBtn = document.querySelector('.close');
let saveBtn = document.querySelector('.save');

let titleInput = document.getElementById('title');
let authorInput = document.getElementById('author');
let descInput = document.getElementById('description');
let pagesInput = document.getElementById('pages');
let readInput = document.getElementById('read');

let bookGrid = document.querySelector('.book-grid');

addBtn.addEventListener('click', () => modal.style.display = "block")
closeBtn.addEventListener('click', () => closeModal())
saveBtn.addEventListener('click', () => addBookToLibrary(e))

// displayBooks()
