import './TimeblockPlanner.css';

interface TimeblockPlannerProps {
  hourFrom: number;
  hourTo: number;
}

const TimeblockPlanner = ({ hourFrom, hourTo }: TimeblockPlannerProps) => {
  // Generate time slots from hourFrom to hourTo (full hours with half-hour rows)
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = hourFrom; hour <= hourTo; hour++) {
      slots.push({ time: `${hour.toString().padStart(2, '0')}:00`, isFullHour: true });
      if (hour <= hourTo) {
        slots.push({ time: null, isFullHour: false });
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  // Generate task list items
  const generateTasks = () => {
    const tasks = [];
    for (let i = 1; i <= 12; i++) {
      tasks.push(i);
    }
    return tasks;
  };

  const tasks = generateTasks();

  return (
    <div className="timeblock-planner">
      <div className="planner-date-header">
        <div className="date-line">__ / __ / 20__</div>
      </div>
      <div className="planner-layout">
        <div className="planner-left">
          <table className="timeblock-table">
            <tbody>
              {timeSlots.map((slot, index) => {
                const isLast = index === timeSlots.length - 1;
                const rowClass = slot.isFullHour
                  ? 'timeblock-row timeblock-row-full-hour'
                  : 'timeblock-row timeblock-row-half-hour';
                const finalClass = isLast ? `${rowClass} timeblock-row-final` : rowClass;
                
                return (
                  <tr key={index} className={finalClass}>
                    <td className="hour-column">{slot.time || ''}</td>
                    <td className="timeblock-column"></td>
                    <td className="timeblock-column"></td>
                    <td className="timeblock-column"></td>
                    <td className="timeblock-column"></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="planner-right">
          <div className="tasks-container">
            <div className="tasks-list">
              {tasks.map((taskNum) => (
                <div key={taskNum} className="task-item">
                  <div className="task-checkbox"></div>
                  <div className="task-line"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeblockPlanner;
