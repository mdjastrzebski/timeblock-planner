import TimeblockPlanner from "./TimeblockPlanner";
import TaskList from "./TaskList";
import { FONTS, COLORS, LAYOUT, PAPER_SIZES } from "../constants/styles";

type PageFormat = "A4" | "Letter";

interface PageProps {
  hourFrom: number;
  hourTo: number;
  pageFormat: PageFormat;
}

const Page = ({ hourFrom, hourTo, pageFormat }: PageProps) => {
  // Get paper size configuration
  const paperConfig = PAPER_SIZES[pageFormat];
  
  // Calculate content area dimensions
  const contentStartY = LAYOUT.CONTENT_START_Y;
  const leftContentX = LAYOUT.MARGIN_LEFT;
  
  return (
    <div className="svg-container m-0 mx-auto print:m-0 print:p-0">
      <svg
        width={paperConfig.width}
        height={paperConfig.height}
        viewBox={paperConfig.viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className="bg-white print:[page-break-after:always] print:[page-break-inside:avoid] print:overflow-hidden"
        data-page-format={pageFormat}
        preserveAspectRatio="xMidYMid meet"
      >
      {/* Date field - centered horizontally */}
      <text
        x={paperConfig.dateX}
        y={LAYOUT.DATE_Y_POSITION}
        textAnchor="middle"
        fontSize={FONTS.SIZE_DATE}
        fontFamily={FONTS.FAMILY}
        fill={COLORS.TEXT_SECONDARY}
        className="tracking-wider"
      >
        __ / __ / 20__
      </text>
      
      {/* Left side - TimeblockPlanner */}
      <g transform={`translate(${leftContentX}, ${contentStartY})`}>
        <TimeblockPlanner hourFrom={hourFrom} hourTo={hourTo} width={paperConfig.leftContentWidth} />
      </g>
      
      {/* Right side - TaskList */}
      <g transform={`translate(${paperConfig.rightContentX}, ${contentStartY})`}>
        <TaskList width={paperConfig.rightContentWidth} />
      </g>
    </svg>
    </div>
  );
};

export default Page;
