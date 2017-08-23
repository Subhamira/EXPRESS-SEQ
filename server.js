
var express = require('express');
var Sequelize=require('sequelize')
var Users = require('./model_users');
var Posts =require('./model_posts');

// Create App
var app = express();

// Create Logger
var logger = function(req, res, next) {
  console.log(req.method, req.url);
  next();
}

// Set Configs
app.set('view engine', 'pug');
app.use("./jquery", express.static(__dirname + './jquery'));
app.use(logger);


app.get('/users', function(req, res) {
Users.findAll().then(users =>{
console.log(users)
 res.render('index', {
   users:users
	});
	})
})

app.get('/user_name/:profile', function(req, res) {
	var name=req.params.profile;
	Users.findAll({
	 where: {
                 Name:name
                 }
		})
	.then(function(users){
	res.render('profile', { user: users[0]})
		})
})

app.get('/user_details/:id', function(req, res) {
	var num=req.params.id 
	Posts.findAll({

		 where: {
                 user_id:num
                 }
        })
        .then(function(posts){

		res.render('id', {
		posts: posts
		})
})
})

app.get('/post/:id', function(req, res) {
	var num=req.params.id
	Posts.findAll({
		where:{
		id:num
	}
	})
		.then(function(posts){
console.log(posts)
	res.render('content', {
		post: posts[0]
		})

})

})
var listener = app.listen(1234, function() {
  console.log('Server started on ' + listener.address().port);
});


