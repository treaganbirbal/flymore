const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { min: 1 },
    set(dollars) {
      this.setDataValue("price", dollars * 100);
    },
    get() {
      return this.getDataValue("price") / 100;
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSydrE5LfVTGYQ4EQkIgseljIuWymh6S6uiIw&usqp=CAU",
    validate: { isUrl: true },
  },
  category: {
    type: Sequelize.STRING,
  },
  quantity: {
    type: Sequelize.INTEGER,
    validate: { min: 1 },
  },
});

module.exports = Product;
