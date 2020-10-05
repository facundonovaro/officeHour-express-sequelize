const S = require("sequelize");
const db = require("../config");

class Product extends S.Model {}

Product.init(
  {
    nombre: {
      type: S.STRING,
      allowNull: false,
    },
    precio: {
      type: S.INTEGER,
      allowNull: false,
      get() {
        return "$" + this.getDataValue("precio");
      },
    },
    descripcion: {
      type: S.TEXT,
      allowNull: null,
    },
    stock: {
      type: S.INTEGER,
    },
    disponible: {
      type: S.BOOLEAN,
      defaultValue: true,
    },
    precio2: {
      type: S.VIRTUAL,
      get() {
        return "$" + this.getDataValue("precio");
      },
    },
  },
  { sequelize: db, modelName: "product" }
);

// Base de Datos: ejercicioIntegrado
// |
// |
// |-----tabla 1 : Productos ---> Métodos de clase --- > Productos.metodo = function(){}
//         |
//         |---instancia 1 --> nombre: zapatillas nike, precio: 7.000, descripcion: nike air negras... ---> Métodos de instancia --> Productos.protoype.metodo=...
//         |--- instancia 2
//         ...
// |------tabla 2 : Categorias
//         |
//         |instancias

// CLASS METHOD
Product.productosSinStock = function () {
  return Product.findAll({
    where: {
      [S.Op.or]: [{ stock: 0 }, { disponible: false }],
    },
  });
};

// INSTANCE METHOD
Product.prototype.ganancia = function () {
  return this.stock * Number(this.precio.slice(1));
};

//HOOK
Product.beforeCreate((product) => {
  if (product.stock === 0) {
    product.nombre = product.nombre + " NO DISPONIBLE";
  }
});

module.exports = Product;
