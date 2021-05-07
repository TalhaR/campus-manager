const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://image.flaticon.com/icons/png/512/2886/2886011.png",
    validate: {
      isUrl: true,
    }
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: { min: 0.0, max: 4.0 }
  }
});

module.exports = Student;