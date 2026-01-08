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
    <div className="flex flex-col h-full m-0 p-0 pt-[2mm] print:overflow-visible print:min-h-0">
      <div className="w-full h-0 border-b border-gray-300 mb-[4.5mm] -mt-[2mm]"></div>
      <div className="flex flex-col gap-[4.5mm] flex-1 print:overflow-visible print:min-h-0">
        {tasks.map((taskNum) => (
          <div key={taskNum} className="flex items-end gap-2 min-h-5 mb-0">
            <div className="w-3 h-3 border border-black flex-shrink-0 m-0 bg-white relative print:-top-[3.25mm]"></div>
            <div className="flex-1 h-5 border-b border-gray-300"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
