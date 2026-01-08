import TimeblockPlanner from "./TimeblockPlanner";
import TaskList from "./TaskList";

type PageFormat = "A4" | "Letter";

interface PageProps {
  hourFrom: number;
  hourTo: number;
  pageFormat: PageFormat;
}

const Page = ({ hourFrom, hourTo, pageFormat }: PageProps) => {
  const pageSizeClass = pageFormat === "A4" ? "w-[297mm] h-[210mm]" : "w-[11in] h-[8.5in]";
  return (
    <div className={`m-0 mx-auto bg-white box-border flex flex-col print:m-0 print:p-0 print:[page-break-after:always] print:[page-break-inside:avoid] print:overflow-hidden ${pageSizeClass}`} data-page-format={pageFormat}>
      <div className="flex items-center justify-center py-[8mm] px-[10mm] pb-[4mm] box-border flex-shrink-0">
        <div className="w-[60mm] h-5 text-center text-sm text-gray-600 pb-0.5 tracking-wider font-mono">__ / __ / 20__</div>
      </div>
      <div className="flex w-full flex-1 overflow-hidden min-h-0">
        <div className="w-1/2 p-[8mm] pb-[8mm] box-border flex flex-col overflow-hidden min-h-0">
          <TimeblockPlanner hourFrom={hourFrom} hourTo={hourTo} />
        </div>
        <div className="w-1/2 p-[8mm] pb-[8mm] box-border flex flex-col overflow-hidden min-h-0">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default Page;
