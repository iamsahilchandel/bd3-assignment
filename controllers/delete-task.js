const { tasks } = require('../data');

const DeleteTask = (req, res) => {
  const taskId = Number(req.query.taskId);

  const taskIndex = tasks.findIndex((t) => t.taskId === taskId);

  if (taskIndex === -1) {
    return res.send('Task not found');
  }

  tasks.splice(taskIndex, 1); // Remove the task from the array

  res.send(tasks);
};

module.exports = DeleteTask;
