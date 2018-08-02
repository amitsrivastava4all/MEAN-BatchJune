const Sequelize = require('sequelize');
const sequelize = require("./connection");

const User = sequelize.define('users', {
    uid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true 
      },
    userid: {
      type: Sequelize.STRING,
      unique: true,
      allowNull:false
    },
    password: {
      type: Sequelize.STRING
    },
    age:{
        type:Sequelize.INTEGER,
        validate: { min: 10, max: 50 }
    },
    salary:{
        type:Sequelize.FLOAT,
        defaultValue:10000
    }
  });
  console.log("Structure Defined...");
  User.sync({force: true}).then(() => {
    console.log("Table Created.........");
  });
  module.export=User;