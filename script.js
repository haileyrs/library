let myLibrary = [];

function Book(title, author, description, pages, read) {
  this.title = title
  this.author = author
  this.description = description
  this.pages = pages
  this.read = read
}

function addBookToLibrary(e) {
  newBook = new Book(title, author, description, pages, read)
  myLibrary.push(newBook)
}


let modal = document.getElementById('modal');
let addBtn = document.getElementById('addBtn');
let closeBtn = document.querySelector('.close');
let saveBtn = document.querySelector('.save');

addBtn.addEventListener('click', () => modal.style.display = "block")
closeBtn.addEventListener('click', () => modal.style.display = "none")
saveBtn.addEventListener('click', () => addBookToLibrary(e))
