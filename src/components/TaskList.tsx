import './TaskList.css';

const TaskList = () => {
  // Generate task list items
  const generateTasks = () => {
    const tasks = [];
    for (let i = 1; i <= 12; i++) {
      tasks.push(i);
    }
    return tasks;
  };

  const tasks = generateTasks();

  return (
    <div className="tasks-container">
      <div className="tasks-list">
        {tasks.map((taskNum) => (
          <div key={taskNum} className="task-item">
            <div className="task-checkbox"></div>
            <div className="task-line"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
