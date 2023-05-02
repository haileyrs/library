let myLibrary = [
  {
    title: "The Fellowship of the Ring",
    author: "J. R. R. Tolkien",
    description:
      "The Fellowship of the Ring is the first of three volumes of the epic novel The Lord of the Rings by the English author J. R. R. Tolkien. It is followed by The Two Towers and The Return of the King. The action takes place in the fictional universe of Middle-earth.",
    pages: 423,
    read: true,
  },
];

function Book(title, author, description, pages, read) {
  this.title = title;
  this.author = author;
  this.description = description;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  const newBook = new Book(
    titleInput.value,
    authorInput.value,
    descInput.value,
    pagesInput.value,
    readInput.checked
  );
  myLibrary.push(newBook);
  closeModal();
  displayBooks();
}

function removeBook(bookTitle) {
  myLibrary.splice(myLibrary.findIndex((b) => (b.title = bookTitle)));
  displayBooks();
}

function closeModal() {
  modal.style.display = "none";
  titleInput.value = null;
  authorInput.value = null;
  descInput.value = null;
  pagesInput.value = null;
  readInput.checked = false;
}

function displayBooks() {
  bookGrid.innerHTML = "";
  if (myLibrary.length === 0) {
    const placeholder = document.createElement('p');
    placeholder.textContent = 'No books exist, please add one to see it displayed here.'
    bookGrid.appendChild(placeholder)
  } else {
    for (b of myLibrary) {
      const bookCard = document.createElement("div");
      const title = document.createElement("h2");
      const author = document.createElement("h4");
      const description = document.createElement("p");
      const cardBottom = document.createElement("div");
      const checkDiv = document.createElement("div");
      const checkbox = document.createElement("input");
      const readLabel = document.createElement("label");
      const removeBtn = document.createElement("button");
      bookCard.classList.add("book-card");
      cardBottom.classList.add("card-bottom");
      removeBtn.classList.add("remove-book");
      checkbox.type = "checkbox";
  
      title.textContent = b.title;
      author.textContent = b.author;
      description.textContent = b.description;
      checkbox.checked = b.read;
      readLabel.textContent = "Read";
      removeBtn.textContent = "Delete";
  
      removeBtn.addEventListener("click", (event) => {
        event.preventDefault();
        removeBook(b.title);
      });
  
      checkbox.addEventListener("click", () => {
        b.read = checkbox.checked;
      });
  
      bookCard.appendChild(title);
      bookCard.appendChild(author);
      bookCard.appendChild(description);
      checkDiv.appendChild(checkbox);
      checkDiv.appendChild(readLabel);
      cardBottom.appendChild(checkDiv);
      cardBottom.appendChild(removeBtn);
      bookCard.appendChild(cardBottom);
  
      bookGrid.appendChild(bookCard);
    }
  }

  
}

let modal = document.getElementById("modal");
let addBtn = document.getElementById("addBtn");
let closeBtn = document.querySelector(".close");
let addBookForm = document.querySelector("#addBookForm");

let titleInput = document.getElementById("title");
let authorInput = document.getElementById("author");
let descInput = document.getElementById("description");
let pagesInput = document.getElementById("pages");
let readInput = document.getElementById("read");

let bookGrid = document.querySelector(".book-grid");

addBtn.addEventListener("click", () => (modal.style.display = "block"));
closeBtn.addEventListener("click", () => closeModal());
addBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  addBookToLibrary();
});

displayBooks();
