import { useMemo } from "react";
import { COLORS, STROKE_WIDTHS, LAYOUT } from "../constants/styles";

interface TaskListProps {
  width?: number;
}

const TaskList = ({ width = LAYOUT.DEFAULT_WIDTH }: TaskListProps) => {
  // Generate task list items
  const tasks = useMemo(() => {
    const taskArray = [];
    for (let i = 1; i <= LAYOUT.DEFAULT_TASK_COUNT; i++) {
      taskArray.push(i);
    }
    return taskArray;
  }, []);
  
  const checkboxSize = LAYOUT.CHECKBOX_SIZE;
  const checkboxX = 0;
  const taskLineStartX = 5; // Start line after checkbox (3mm + 2mm gap)
  const taskLineEndX = width;
  const spacing = LAYOUT.TASK_SPACING;
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
        stroke={COLORS.DIVIDER}
        strokeWidth={STROKE_WIDTHS.PRIMARY}
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
              stroke={COLORS.DIVIDER}
              strokeWidth={STROKE_WIDTHS.PRIMARY}
            />
            
            {/* Checkbox - positioned between lines */}
            <rect
              x={checkboxX}
              y={checkboxY}
              width={checkboxSize}
              height={checkboxSize}
              stroke={COLORS.PRIMARY}
              strokeWidth={STROKE_WIDTHS.PRIMARY}
              fill={COLORS.BACKGROUND}
            />
          </g>
        );
      })}
    </g>
  );
};

export default TaskList;
