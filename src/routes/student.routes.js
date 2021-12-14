const express = require('express')
const router = express.Router()
const studentController = require('../controllers/student.controller');

// Retrieve all students
router.get('/', studentController.findAll);

// Create a new students
router.post('/', studentController.create);

// Retrieve a single students with id
router.get('/:id', studentController.findById);

// Update a student with id
router.put('/:id', studentController.update);

// Delete a student with id
router.delete('/:id', studentController.delete);

module.exports = router