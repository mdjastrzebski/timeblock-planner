import TimeblockPlanner from "./TimeblockPlanner";
import TaskList from "./TaskList";
import {
  FONTS,
  COLORS,
  LAYOUT,
  PAPER_SIZES,
  getPaperDimensions,
} from "../constants/styles";
import type { PageFormat } from "../types";

interface PageProps {
  hourFrom: number;
  hourTo: number;
  pageFormat: PageFormat;
  taskCount: number;
}

const Page = ({ hourFrom, hourTo, pageFormat, taskCount }: PageProps) => {
  // Get paper size configuration
  const paperConfig = PAPER_SIZES[pageFormat];
  const dimensions = getPaperDimensions(pageFormat);

  // Use same margins and center gap for both formats
  const marginLeft = LAYOUT.MARGIN_LEFT;
  const marginRight = LAYOUT.MARGIN_RIGHT;
  const centerGap = LAYOUT.CENTER_GAP;

  // Calculate horizontal dimensions based on margins
  const totalContentWidth = paperConfig.widthMm - marginLeft - marginRight;
  const columnWidth = (totalContentWidth - centerGap) / 2;

  const dateX = paperConfig.widthMm / 2; // Center of page
  const leftContentX = marginLeft;
  const leftContentWidth = columnWidth;
  const rightContentX = marginLeft + columnWidth + centerGap;
  const rightContentWidth = columnWidth;

  // Calculate vertical dimensions based on margins
  const dateY = LAYOUT.MARGIN_TOP + LAYOUT.DATE_OFFSET;
  const contentStartY = LAYOUT.MARGIN_TOP + LAYOUT.CONTENT_OFFSET;

  return (
    <div className="svg-container m-0 mx-auto print:m-0 print:p-0">
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox={dimensions.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className="bg-white print:[page-break-after:always] print:[page-break-inside:avoid] print:overflow-hidden"
        data-page-format={pageFormat}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={`Timeblock planner page in ${pageFormat} format`}
      >
        {/* Date field - centered horizontally */}
        <text
          x={dateX}
          y={dateY}
          textAnchor="middle"
          fontSize={FONTS.SIZE_DATE}
          fontWeight={FONTS.WEIGHT_MEDIUM}
          fill={COLORS.TEXT_SECONDARY}
          style={FONTS.DATE_TEXT_STYLE}
        >
          {FONTS.DATE_FORMAT_PLACEHOLDER}
        </text>

        {/* Left side - TimeblockPlanner */}
        <g transform={`translate(${leftContentX}, ${contentStartY})`}>
          <TimeblockPlanner
            hourFrom={hourFrom}
            hourTo={hourTo}
            width={leftContentWidth}
          />
        </g>

        {/* Right side - TaskList */}
        <g transform={`translate(${rightContentX}, ${contentStartY})`}>
          <TaskList width={rightContentWidth} taskCount={taskCount} />
        </g>
      </svg>
    </div>
  );
};

export default Page;
