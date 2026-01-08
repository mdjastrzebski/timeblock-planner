import TimeblockPlanner from "./TimeblockPlanner";
import TaskList from "./TaskList";
import { FONTS, COLORS, LAYOUT, PAPER_SIZES, getPaperDimensions } from "../constants/styles";

type PageFormat = "A4" | "Letter";

interface PageProps {
  hourFrom: number;
  hourTo: number;
  pageFormat: PageFormat;
}

const Page = ({ hourFrom, hourTo, pageFormat }: PageProps) => {
  // Get paper size configuration
  const paperConfig = PAPER_SIZES[pageFormat];
  const dimensions = getPaperDimensions(pageFormat);
  
  // Calculate horizontal dimensions based on margins
  const totalContentWidth = paperConfig.widthMm - LAYOUT.MARGIN_LEFT - LAYOUT.MARGIN_RIGHT;
  const centerGap = 10; // Gap between left and right columns
  const columnWidth = (totalContentWidth - centerGap) / 2;
  
  const dateX = paperConfig.widthMm / 2; // Center of page
  const leftContentX = LAYOUT.MARGIN_LEFT;
  const leftContentWidth = columnWidth;
  const rightContentX = LAYOUT.MARGIN_LEFT + columnWidth + centerGap;
  const rightContentWidth = columnWidth;
  
  // Calculate vertical dimensions based on margins
  const dateY = LAYOUT.MARGIN_TOP + 2; // MARGIN_TOP + small offset for date
  const contentStartY = LAYOUT.MARGIN_TOP + 16; // MARGIN_TOP + space for date field
  
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
        _ _ / _ _ / 20 _ _
      </text>
      
      {/* Left side - TimeblockPlanner */}
      <g transform={`translate(${leftContentX}, ${contentStartY})`}>
        <TimeblockPlanner hourFrom={hourFrom} hourTo={hourTo} width={leftContentWidth} />
      </g>
      
      {/* Right side - TaskList */}
      <g transform={`translate(${rightContentX}, ${contentStartY})`}>
        <TaskList width={rightContentWidth} />
      </g>
    </svg>
    </div>
  );
};

export default Page;
