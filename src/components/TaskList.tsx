interface TaskListProps {
  width?: number;
}

const TaskList = ({ width = 128.5 }: TaskListProps) => {
  // Generate task list items
  const generateTasks = () => {
    const tasks = [];
    for (let i = 1; i <= 14; i++) {
      tasks.push(i);
    }
    return tasks;
  };

  const tasks = generateTasks();
  
  const checkboxSize = 3; // 3mm x 3mm
  const checkboxX = 0;
  const taskLineStartX = 5; // Start line after checkbox (3mm + 2mm gap)
  const taskLineEndX = width;
  const spacing = 4.5; // 4.5mm between tasks
  const topBorderY = 0;
  const firstTaskY = topBorderY + spacing; // Start first task after top border + spacing
  
  const totalHeight = firstTaskY + (tasks.length * spacing);

  return (
    <g>
      {/* Top border line */}
      <line
        x1="0"
        y1={topBorderY}
        x2={width}
        y2={topBorderY}
        stroke="#d1d5db"
        strokeWidth="0.3"
      />
      
      {/* Task items */}
      {tasks.map((taskNum, index) => {
        const y = firstTaskY + (index * spacing);
        const checkboxY = y - (checkboxSize / 2); // Center checkbox vertically on line
        
        return (
          <g key={taskNum}>
            {/* Checkbox */}
            <rect
              x={checkboxX}
              y={checkboxY}
              width={checkboxSize}
              height={checkboxSize}
              stroke="black"
              strokeWidth="0.3"
              fill="white"
            />
            
            {/* Task line */}
            <line
              x1={taskLineStartX}
              y1={y}
              x2={taskLineEndX}
              y2={y}
              stroke="#d1d5db"
              strokeWidth="0.3"
            />
          </g>
        );
      })}
    </g>
  );
};

export default TaskList;
