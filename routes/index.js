const express = require('express');
const AddTask = require('../controllers/add-task');
const { tasks } = require('../data');
const SortByPriority = require('../controllers/sort-by-priority');
const EditTaskPriority = require('../controllers/edit-task-priority');
const EditTaskText = require('../controllers/edit-task-text');
const DeleteTask = require('../controllers/delete-task');
const FilterByPriority = require('../controllers/filter-by-priority');

const router = express.Router();

/**
 * Declare all routes here
 */

router.get('/', (req, res) => {
  res.status(200).json({ success: true, msg: 'app is up and running' });
});

router.get('/tasks', (req, res) => {
  res.send(tasks);
});

router.get('/tasks/add', AddTask);
router.get('/tasks/sort-by-priority', SortByPriority);
router.get('/tasks/edit-priority', EditTaskPriority);
router.get('/tasks/edit-text', EditTaskText);
router.get('/tasks/delete', DeleteTask);
router.get('/tasks/filter-by-priority', FilterByPriority);

module.exports = router;
