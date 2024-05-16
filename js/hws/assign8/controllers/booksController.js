const Book = require("../models/Book");

exports.getAll = (req, res) => {
  res.status(200).json(Book.getAll());
};

exports.getById = (req, res) => {
  res.status(200).json(Book.getBookById(parseInt(req.params.id)));
};

exports.getByName = (req, res) => {
  res.status(200).json(Book.getBookByName(req.params.name));
};

exports.save = (req, res) => {
  const newBook = new Book(
    null,
    req.body.title,
    req.body.ISBN,
    req.body.publishDate,
    req.body.author
  );
  newBook.save();
  res.status(201).json(newBook);
};

exports.deleteById = (req, res) => {
  res.status(200).json(Book.deleteById(parseInt(req.params.id)));
};

exports.updateById = (req, res) => {
  const updatedBook = new Book(
    null,
    req.body.title,
    req.body.ISBN,
    req.body.publishDate,
    req.body.author
  );

  updatedBook.update(parseInt(req.params.id));
  console.log("updated");
  res.status(204).end();
};
