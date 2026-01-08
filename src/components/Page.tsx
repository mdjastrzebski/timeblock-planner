import "./Page.css";
import TimeblockPlanner from "./TimeblockPlanner";
import TaskList from "./TaskList";

type PageFormat = "A4" | "Letter";

interface PageProps {
  hourFrom: number;
  hourTo: number;
  pageFormat: PageFormat;
}

const Page = ({ hourFrom, hourTo, pageFormat }: PageProps) => {
  const pageClass = `page page-${pageFormat.toLowerCase()}`;
  return (
    <div className={pageClass} data-page-format={pageFormat}>
      <div className="page-date-header">
        <div className="date-line">__ / __ / 20__</div>
      </div>
      <div className="page-layout">
        <div className="page-left">
          <TimeblockPlanner hourFrom={hourFrom} hourTo={hourTo} />
        </div>
        <div className="page-right">
          <TaskList />
        </div>
      </div>
    </div>
  );
};

export default Page;
