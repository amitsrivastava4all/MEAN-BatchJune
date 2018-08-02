const Sequelize = require('sequelize');
const sequelize = new Sequelize('testnodedb', 'amit', 'amit123', {
  host: 'localhost',
  dialect: 'postgres',
  port:5432,

  pool: {
    max: 5,
    min: 0,
    idle: 10000  //ms
  }

 
});
console.log("Inside Connection ......");
sequelize.authenticate().then(() => {
    console.log('Connection Created......');
  }).catch(err => {
    console.log('Error in Connection', err);
  });
  module.exports = sequelize;