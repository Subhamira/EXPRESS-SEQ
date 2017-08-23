//initialize
var Sequelize=require('sequelize')
const sequelize = new Sequelize('sqldata1', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});
//craete model
const Users =
    
     sequelize.define('users', {
	id:{
	   type:Sequelize.STRING
	      },
  	Name: {
	    type: Sequelize.STRING
	    },
  	Phone: {
    	    type: Sequelize.STRING
        	},
	DOB:{
	  type:Sequelize.DATE
	     },
	Email:{
           type:Sequelize.STRING
	},
	Gender:{
        	type:Sequelize.STRING
	}
	})

//	};
/*
// force: true will drop the table if it already exists
Users.sync({force: true}).then(() => {
 // give table values
  return Users.create({
	id:1,
    	Name:"Jonathan Morris",
       Phone:"(621) 559 5488",
       DOB:"12/01/1996",
       Email:"jonathan96@example.com",
       Gender:"Male"

  }),

	Users.create({
        id:2,
        Name:"Joe Hayes",
       Phone:"(382) 660 9027",
       DOB: "12/12/1994",
       Email:"joehayes@example.com",
       Gender:"Male"

  }),

	Users.create({
	 id: 3,
       Name: "Sue Hayes",
       Phone: "(382) 660 9028",
       DOB: "02/02/1993",
       Email: "suehayes@example.com",
       Gender: "Female"
	}),

	Users.create({
         id: 4,
       Name: "Frances Silva",
       Phone: "(257) 449 6403",
       DOB: "09/01/1981",
       Email: "frances@example.com",
       Gender: "Female"
        })


});
*/
module.exports=Users
