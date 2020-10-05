const express = require("express");
const router = express.Router();
const { Category } = require("../models");

router.get("/", (req, res) => {
  Category.findAll().then((categories) => {
    res.send(categories);
  });
});
// ruta para metodo de clase

// ruta para metodo de instancia

router.post("/", (req, res) => {
  Category.create(req.body).then((categories) => {
    res.send(categories);
  });
});

module.exports = router;
