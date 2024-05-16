let products = [
  { id: 1, title: "Node.js", price: 199, description: "Good" },
  { id: 2, title: "Angular.js", price: 299, description: "Good 2" },
  { id: 3, title: "React.js", price: 399, description: "Good 3" },
];

let counterId = 4;

module.exports = class Product {
  constructor(id, title, price, desc) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.desc = desc;
  }

  static getAll() {
    return products;
  }

  static getProductById(id) {
    const product = products.find((p) => p.id === id);

    if (product) {
      return product;
    } else {
      throw new Error(`No product found with Id: ${id}`);
    }
  }

  save() {
    this.id = counterId;
    products.push(this);
    return this;
  }

  static deleteById(id) {
    const idx = products.findIndex((p) => p.id === id);
    if (idx > -1) {
      // products = products.filter(p => p.id !== id);
      const temp = products[idx];
      products.splice(idx, 1);
      return temp;
    } else throw new Error(`No product found with Id: ${id}`);
  }

  update(id) {
    const idx = products.findIndex((p) => p.id === id);
    if (idx > -1) {
      this.id = id;
      products[idx] = this;
    } else throw new Error(`No product found with Id: ${id}`);
  }
};
