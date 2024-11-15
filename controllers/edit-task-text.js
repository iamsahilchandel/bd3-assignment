const { tasks } = require('../data');

const EditTaskText = (req, res) => {
  const taskId = parseFloat(req.query.taskId);
  const text = req.query.text;

  const task = tasks.find((t) => t.taskId === taskId);

  if (!task) {
    return res.send('Task not found');
  }

  task.text = text;

  res.send(tasks);
};

module.exports = EditTaskText;
