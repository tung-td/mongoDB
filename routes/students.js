const express = require('express');
const router = express.Router();

const studentsController = require('../app/controllers/StudentsController')

router.get('/:id', studentsController.studentById)
router.post('/', studentsController.postStudent)
router.put('/:id', studentsController.editStudent)
router.delete('/:id', studentsController.deleteStudent)
router.get('/', studentsController.listStudents)


module.exports = router