const { tasks } = require('../data');

const AddTask = (req, res) => {
  const { taskId, text, priority } = req.query;

  const newTask = {};

  newTask.taskId = taskId;
  newTask.text = text;
  newTask.priority = priority;

  tasks.push(newTask);

  res.send(tasks);
};

module.exports = AddTask;
