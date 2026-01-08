import './Page.css';
import TimeblockPlanner from './TimeblockPlanner';
import TaskList from './TaskList';

interface PageProps {
  hourFrom: number;
  hourTo: number;
}

const Page = ({ hourFrom, hourTo }: PageProps) => {
  return (
    <div className="page">
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
