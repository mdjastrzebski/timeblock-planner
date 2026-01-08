interface TimeblockPlannerProps {
  hourFrom: number;
  hourTo: number;
  width?: number;
}

const TimeblockPlanner = ({ hourFrom, hourTo, width = 128.5 }: TimeblockPlannerProps) => {
  // Generate time slots from hourFrom to hourTo (full hours with half-hour rows)
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = hourFrom; hour <= hourTo; hour++) {
      slots.push({
        time: `${hour.toString().padStart(2, "0")}:00`,
        isFullHour: true,
      });
      if (hour <= hourTo) {
        slots.push({ time: null, isFullHour: false });
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();
  
  // Column measurements
  const timeColumnWidth = 10; // Even narrower time column
  const remainingWidth = width - timeColumnWidth;
  const columnWidth = remainingWidth / 4; // 4 columns for timeblocks
  
  // Calculate column X positions
  const column2X = timeColumnWidth;
  const column3X = timeColumnWidth + columnWidth;
  const column4X = timeColumnWidth + columnWidth * 2;
  const column5X = timeColumnWidth + columnWidth * 3;
  
  const rowHeight = 5; // 5mm per row
  const totalHeight = timeSlots.length * rowHeight;
  
  // Text positioning - centered vertically in 5mm row
  // Adjust slightly lower to account for font baseline
  const textYOffset = rowHeight / 2 + 0.3; // Slightly lower for better centering

  return (
    <g>
      {/* Final vertical line on the right edge - spans full height */}
      <line
        x1={width}
        y1={0}
        x2={width}
        y2={totalHeight}
        stroke="#d1d5db"
        strokeWidth="0.2"
        strokeDasharray="0.5,0.5"
      />
      
      {/* Draw rows and borders */}
      {timeSlots.map((slot, index) => {
        const y = index * rowHeight;
        const isLast = index === timeSlots.length - 1;
        
        // Draw horizontal line (top border)
        const lineColor = slot.isFullHour ? "black" : "#9ca3af";
        const lineWidth = slot.isFullHour ? "0.3" : "0.2";
        const dashArray = slot.isFullHour ? undefined : "0.5,0.5"; // Very dense dotted pattern for half-hour lines
        
        return (
          <g key={index}>
            {/* Top border line */}
            <line
              x1="0"
              y1={y}
              x2={width}
              y2={y}
              stroke={lineColor}
              strokeWidth={lineWidth}
              strokeDasharray={dashArray}
            />
            
            {/* Bottom border for last row */}
            {isLast && (
              <line
                x1="0"
                y1={y + rowHeight}
                x2={width}
                y2={y + rowHeight}
                stroke="black"
                strokeWidth="0.3"
              />
            )}
            
            {/* Time label */}
            {slot.time && (
              <text
                x={timeColumnWidth / 2}
                y={y + textYOffset}
                fontSize="2.9"
                fontFamily="Inter, sans-serif"
                fontWeight="500"
                fill="black"
                dominantBaseline="middle"
                textAnchor="middle"
              >
                {slot.time}
              </text>
            )}
            
            {/* Vertical dividers between columns */}
            <line
              x1={column2X}
              y1={y}
              x2={column2X}
              y2={y + rowHeight}
              stroke="#d1d5db"
              strokeWidth="0.2"
              strokeDasharray="0.5,0.5"
            />
            <line
              x1={column3X}
              y1={y}
              x2={column3X}
              y2={y + rowHeight}
              stroke="#d1d5db"
              strokeWidth="0.2"
              strokeDasharray="0.5,0.5"
            />
            <line
              x1={column4X}
              y1={y}
              x2={column4X}
              y2={y + rowHeight}
              stroke="#d1d5db"
              strokeWidth="0.2"
              strokeDasharray="0.5,0.5"
            />
            <line
              x1={column5X}
              y1={y}
              x2={column5X}
              y2={y + rowHeight}
              stroke="#d1d5db"
              strokeWidth="0.2"
              strokeDasharray="0.5,0.5"
            />
          </g>
        );
      })}
    </g>
  );
};

export default TimeblockPlanner;
