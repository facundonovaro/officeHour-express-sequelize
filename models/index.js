const Product = require("./Product");
const Category = require("./Category");

Product.belongsTo(Category, { as: "category" }); // me genera en la tabla de productos una columnda "categoryId".

module.exports = { Product, Category };
