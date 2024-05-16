// A book has properties: id, title, ISBN, publishedDate, author

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    ISBN: "978-0-06-112008-4",
    publishDate: "July 11, 1960",
    author: "Harper Lee",
  },
  {
    id: 2,
    title: "1984",
    ISBN: "978-0-452-28423-4",
    publishDate: "June 8, 1949",
    author: "George Orwell",
  },
  {
    id: 3,
    title: "The Great Gatsby",
    ISBN: "978-0-743-24513-4",
    publishDate: "April 10, 1925",
    author: "F. Scott Fitzgerald",
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    ISBN: "978-0-316-76948-4",
    publishDate: "July 16, 1951",
    author: "J.D. Salinger",
  },
  {
    id: 5,
    title: "To Kill a Mockingbird",
    ISBN: "978-0-140-17684-6",
    publishDate: "January 28, 1813",
    author: "Jane Austen",
  },
];

let counterId = 6;

module.exports = class Book {
  constructor(id, title, ISBN, publishDate, author) {
    this.id = id;
    this.title = title;
    this.ISBN = ISBN;
    this.publishDate = publishDate;
    this.author = author;
  }

  static getAll() {
    return books;
  }

  static getBookById(id) {
    const book = books.find((book) => book.id === id);
    if (book) return book;
    else throw new Error(`No book found with Id: ${id}`);
  }

  static getBookByName(title) {
    const book = books.find((book) => book.title === title);
    if (book) return book;
    else throw new Error(`No book found with Id: ${id}`);
  }

  save() {
    this.id = counterId++;
    books.push(this);
    return this;
  }

  static deleteById(id) {
    const idx = books.findIndex((book) => book.id === id);
    if (idx > -1) {
      const temp = books[idx];
      books.slice(idx, 1);
      return temp;
    } else {
      throw new Error(`No book found with Id: ${id}`);
    }
  }

  update(id) {
    const idx = books.findIndex((book) => book.id === id);
    if (idx > -1) {
      this.id = id;
      books[idx] = this;
    } else {
      throw new Error(`No book found with Id: ${id}`);
    }
  }
};
