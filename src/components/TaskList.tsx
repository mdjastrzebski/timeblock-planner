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
  const spacing = 10; // 10mm between tasks
  const topBorderY = 0;
  const firstTaskY = topBorderY + spacing; // Start first task after top border + spacing

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
        const lineY = firstTaskY + (index * spacing);
        // Position checkbox between lines: centered in the gap between previous line and current line
        // Move checkbox up by one spacing unit to position it correctly
        const checkboxY = lineY - (spacing / 2) - (checkboxSize / 2);
        
        return (
          <g key={taskNum}>
            {/* Task line */}
            <line
              x1={taskLineStartX}
              y1={lineY}
              x2={taskLineEndX}
              y2={lineY}
              stroke="#d1d5db"
              strokeWidth="0.3"
            />
            
            {/* Checkbox - positioned between lines */}
            <rect
              x={checkboxX}
              y={checkboxY}
              width={checkboxSize}
              height={checkboxSize}
              stroke="black"
              strokeWidth="0.3"
              fill="white"
            />
          </g>
        );
      })}
    </g>
  );
};

export default TaskList;
