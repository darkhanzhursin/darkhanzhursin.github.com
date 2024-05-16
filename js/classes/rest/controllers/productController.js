const Product = require("../models/product");

exports.getAll = (req, res) => {
  res.status(200).json(Product.getAll());
};

exports.getById = (req, res, next) => {
  res.status(200).json(Product.getProductById(parseInt(req.params.id)));
};

exports.save = (req, res, next) => {
  const newProduct = new Product(
    null,
    req.body.title,
    req.body.price,
    req.body.description
  ).save();
  res.status(201).json(newProduct);
};

exports.deleteById = (req, res, next) => {
  res.status(200).json(Product.deleteById(parseInt(req.params.id)));
};

exports.updateById = (req, res, next) => {
  new Product(
    null,
    req.body.title,
    req.body.price,
    req.body.description
  ).update(parseInt(req.params.id));
  res.status(204).end();
};
