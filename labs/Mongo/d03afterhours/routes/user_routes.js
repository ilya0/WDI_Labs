var usersController = require('../controllers/users_controller.js');
var express			= require('express');
var userRoutes		= express.Router();

//create routes for /users
userRoutes.route('/')
.get(usersController.index)
.post(usersController.create)
// //create routes for /users/:email


userRoutes.route('/:email')
.get(usersController.show)
.delete(usersController.destroy)
//.put(usersController.update)



module.exports = userRoutes;
