const { Router } = require('express');
const { getTasks, getTask, saveTask, updateTask, deleteTask } = require('../Controllers/tasks-controller');
const router = new Router();

router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask);
router.post('/tasks', saveTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;
