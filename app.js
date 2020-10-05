//levantar el servidor
// instalar express y requerirlo

const express = require("express");
const app = express();
const db = require("./config");
const Product = require("./models/Product");
const router = require("./routes");

//poner antes del middleware de rutas
app.use(express.json());
app.use(express.urlencoded());

app.use("/", router);

db.sync({}).then(() => {
  console.log("Conectado a la base de datos");
  app.listen(3000, console.log("Escuchando en puerto 3000"));
});
