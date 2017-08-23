//initialize

var Sequelize=require('sequelize')
const sequelize = new Sequelize('sqldata1', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',


  });

//create model
const User = sequelize.define('user', {

});


//find users from mysql and consolelog
User.findAll().then(users => {
 //console.log(users)
})




