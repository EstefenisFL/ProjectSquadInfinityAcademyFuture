const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller');

// Retrieve all users
router.get('/', userController.findAll);

// Create a new users
router.post('/', userController.create);

// Retrieve a single users with id
router.get('/:id', userController.findById);

// Update a users with id
router.put('/:id', userController.update);

// Delete a users with id
router.delete('/:id', userController.delete);

module.exports = router