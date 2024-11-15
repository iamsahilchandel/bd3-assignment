const { tasks } = require('../data');

const SortByPriority = (req, res) => {
  const sortedTasks = tasks.sort((a, b) => a.priority - b.priority);

  res.send(sortedTasks);
};

module.exports = SortByPriority;
