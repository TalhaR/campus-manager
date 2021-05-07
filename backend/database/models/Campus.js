const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  description: {
    type: Sequelize.TEXT,
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://i.pinimg.com/736x/d9/bb/75/d9bb75dce99590817108a2ac665a12b1.jpg",
    validate: {
      isUrl: true,
    }
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
});

module.exports = Campus;