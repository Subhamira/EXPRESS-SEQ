//initialize
var Sequelize=require('sequelize')
const sequelize = new Sequelize('sqldata1', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});
//craete model
const Posts =
	 sequelize.define('posts', {
	id:{
	   type:Sequelize.STRING
	      },
  	Content: {
	    type: Sequelize.STRING
	    },
  	user_id: {
    	    type: Sequelize.STRING
        	}
	});


// force: true will drop the table if it already exists
Posts.sync({force: true}).then(() => {
 // give table values
  return Posts.create({
	id:1,
    	Content:"Test post 1",
       user_id:4

  }),

	Posts.create({
        id:2,
        Content:"Test post 2",
	user_id:3
  }),

	 Posts.create({
        id:3,
        Content:"Test post 3",
        user_id:2
  }),

	 Posts.create({
        id:4,
        Content:"Test post 4",
        user_id:4
  }),

	 Posts.create({
        id:5,
        Content:"Test post 5",
        user_id:1
  }),

	 Posts.create({
        id:6,
        Content:"Test post 6",
        user_id:3
  }),

	 Posts.create({
        id:7,
        Content:"Test post 7",
        user_id:3
  }),

	 Posts.create({
        id:8,
        Content:"Test post 8",
        user_id:4
  }),

	Posts.create({
        id:9,
        Content:"Test post 9",
        user_id:1
  }),

	 Posts.create({
        id:10,
        Content:"Test post 10",
        user_id:2
  })


});

module.exports=Posts
