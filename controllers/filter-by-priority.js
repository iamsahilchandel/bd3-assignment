const { tasks } = require('../data');

const FilterByPriority = (req, res) => {
  const priority = Number(req.query.priority);

  const filteredTasks = tasks.filter((t) => t.priority === priority);

  if (filteredTasks.length === 0) {
    res.send(`No task found with priority ${priority}`);
  } else {
    res.send(filteredTasks);
  }
};

module.exports = FilterByPriority;
