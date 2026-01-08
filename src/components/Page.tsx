import TimeblockPlanner from "./TimeblockPlanner";
import TaskList from "./TaskList";

type PageFormat = "A4" | "Letter";

interface PageProps {
  hourFrom: number;
  hourTo: number;
  pageFormat: PageFormat;
}

const Page = ({ hourFrom, hourTo, pageFormat }: PageProps) => {
  // Calculate dimensions based on page format
  const isA4 = pageFormat === "A4";
  const width = isA4 ? "297mm" : "11in";
  const height = isA4 ? "210mm" : "8.5in";
  const viewBox = isA4 ? "0 0 297 210" : "0 0 279.4 215.9";
  
  // Calculate content area dimensions
  // Left side (TimeblockPlanner): x from 10mm to ~148.5mm (half of 297mm)
  // Right side (TaskList): x from ~148.5mm to 287mm (297mm - 10mm margin)
  const contentStartY = 26; // Date at y=12, spacing of ~1.4cm (14mm) to content below
  const leftContentX = 10;
  const leftContentWidth = isA4 ? 128.5 : 129.7; // Half width minus margins
  const rightContentX = isA4 ? 148.5 : 149.7;
  const rightContentWidth = isA4 ? 128.5 : 129.7;
  
  return (
    <div className="svg-container m-0 mx-auto print:m-0 print:p-0">
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className="bg-white print:[page-break-after:always] print:[page-break-inside:avoid] print:overflow-hidden"
        data-page-format={pageFormat}
        preserveAspectRatio="xMidYMid meet"
      >
      {/* Date field - centered horizontally, y=12mm */}
      <text
        x={isA4 ? "148.5" : "139.7"}
        y="12"
        textAnchor="middle"
        fontSize="3.7"
        fontFamily="monospace"
        fill="#6b7280"
        className="tracking-wider"
      >
        __ / __ / 20__
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
