// requerir conig de db y sequelize
const db = require("../config");
const S = require("sequelize");

//extender clase a S.Model{}
class Category extends S.Model {}

//Inicializar modelo
Category.init(
  {
    nombre: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "category" }
);

module.exports = Category;
