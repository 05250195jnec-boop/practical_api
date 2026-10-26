const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskControllers'); // Matches your 's' filename

router.get('/',       taskController.getAllTasks);
router.post('/',      taskController.createTask);
router.get('/:id',    taskController.getTaskById);
router.put('/:id',    taskController.updateTask);
router.patch('/:id',  taskController.patchTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;