import { useMemo } from "react";
import { COLORS, STROKE_WIDTHS, FONTS, DASH_PATTERNS, LAYOUT } from "../constants/styles";

interface TimeblockPlannerProps {
  hourFrom: number;
  hourTo: number;
  width?: number;
}

const TimeblockPlanner = ({ hourFrom, hourTo, width = LAYOUT.DEFAULT_WIDTH }: TimeblockPlannerProps) => {
  // Generate time slots from hourFrom to hourTo (full hours with half-hour rows)
  const timeSlots = useMemo(() => {
    const slots = [];
    for (let hour = hourFrom; hour <= hourTo; hour++) {
      slots.push({
        time: hour.toString().padStart(2, "0"),
        isFullHour: true,
      });
      // Add half-hour slot after each hour (including the last one)
      // This ensures the last hour has a complete row for the second half
      slots.push({ time: null, isFullHour: false });
    }
    return slots;
  }, [hourFrom, hourTo]);
  
  // Column measurements
  const timeColumnWidth = LAYOUT.TIME_COLUMN_WIDTH;
  const remainingWidth = width - timeColumnWidth;
  const columnWidth = remainingWidth / LAYOUT.COLUMNS;
  
  // Calculate column X positions
  const column2X = timeColumnWidth;
  const column3X = timeColumnWidth + columnWidth;
  const column4X = timeColumnWidth + columnWidth * 2;
  const column5X = timeColumnWidth + columnWidth * 3;
  
  const rowHeight = LAYOUT.ROW_HEIGHT;
  const totalHeight = timeSlots.length * rowHeight;
  
  // Text positioning - centered vertically in row
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
        stroke={COLORS.VERTICAL_DIVIDER}
        strokeWidth={STROKE_WIDTHS.SECONDARY}
        strokeDasharray={DASH_PATTERNS.DOTTED}
      />
      
      {/* Draw rows and borders */}
      {timeSlots.map((slot, index) => {
        const y = index * rowHeight;
        const isLast = index === timeSlots.length - 1;
        
        // Draw horizontal line (top border)
        const lineColor = slot.isFullHour ? COLORS.PRIMARY : COLORS.SECONDARY;
        const lineWidth = slot.isFullHour ? STROKE_WIDTHS.PRIMARY : STROKE_WIDTHS.SECONDARY;
        const dashArray = slot.isFullHour ? undefined : DASH_PATTERNS.DOTTED;
        
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
                stroke={COLORS.PRIMARY}
                strokeWidth={STROKE_WIDTHS.PRIMARY}
              />
            )}
            
            {/* Time label */}
            {slot.time && (
              <text
                x={timeColumnWidth / 2}
                y={y + textYOffset}
                fontSize={FONTS.SIZE_TIME_LABEL}
                fontFamily={FONTS.FAMILY}
                fontWeight={FONTS.WEIGHT_MEDIUM}
                fill={COLORS.PRIMARY}
                dominantBaseline="middle"
                textAnchor="middle"
              >
                {slot.time}
              </text>
            )}
            
            {/* Vertical dividers between columns */}
            {[column2X, column3X, column4X, column5X].map((x, dividerIndex) => (
              <line
                key={dividerIndex}
                x1={x}
                y1={y}
                x2={x}
                y2={y + rowHeight}
                stroke={COLORS.VERTICAL_DIVIDER}
                strokeWidth={STROKE_WIDTHS.SECONDARY}
                strokeDasharray={DASH_PATTERNS.DOTTED}
              />
            ))}
          </g>
        );
      })}
    </g>
  );
};

export default TimeblockPlanner;
