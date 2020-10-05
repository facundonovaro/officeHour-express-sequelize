const express = require("express");
const router = express.Router();
const productsRouter = require("./products");
const categoriesReducer = require("./categories");

// router.get("/", (req, res) => {
//   res.send("Hola!!!");
// });
//Van todas las puertas de entrada a cada archivo. Intentar hacer un archivo por tabla
router.use("/products", productsRouter);
router.use("/categories", categoriesReducer);

module.exports = router;
