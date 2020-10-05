const express = require("express");
const router = express.Router();
const { Product, Category } = require("../models");
// parado en /api/products

router.get("/", (req, res) => {
  console.log(req.query, "QUERIES!!!");
  if (req.query.query1) res.send(req.query);
  Product.findAll({
    // el include sería como hacer un join on product.categoryId = category.id
    include: { model: Category, as: "category" },
  }).then((products) => {
    res.send(products);
  });
});
// ruta para metodo de clase
router.get("/sin-stock", (req, res) => {
  Product.productosSinStock().then((productos) => {
    res.send(productos);
  });
});

router.get("/:id", (req, res) => {
  Product.findByPk(req.params.id).then((product) => {
    res.send(product);
  });
});

// ruta para metodo de instancia
router.get("/:id/ganancias", (req, res) => {
  Product.findByPk(req.params.id).then((product) => {
    res.send({ ganancia: product.ganancia() });
  });
});

router.post("/", (req, res) => {
  Product.create(req.body).then((productCreated) => {
    res.send(productCreated);
  });
});

//-----------------------------------

module.exports = router;
