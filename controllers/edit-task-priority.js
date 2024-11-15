const { tasks } = require('../data');

const EditTaskPriority = (req, res) => {
  const taskId = parseFloat(req.query.taskId);
  const priority = parseFloat(req.query.priority);

  const task = tasks.find((t) => t.taskId === taskId);

  if (!task) {
    return res.send('Task not found');
  }

  task.priority = priority;

  res.send(tasks);
};

module.exports = EditTaskPriority;
