import './TimeblockPlanner.css';

const TimeblockPlanner = () => {
  // Generate time slots from 8:00 to 18:30 (half-hour intervals, 22 rows total)
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour <= 18; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
      if (hour <= 18) {
        slots.push(`${hour.toString().padStart(2, '0')}:30`);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="timeblock-planner">
      <div className="planner-layout">
        <div className="planner-left">
          <table className="timeblock-table">
            <thead>
              <tr>
                <th className="hour-column"></th>
                <th className="timeblock-column">Col 1</th>
                <th className="timeblock-column">Col 2</th>
                <th className="timeblock-column">Col 3</th>
                <th className="timeblock-column">Col 4</th>
              </tr>
            </thead>
            <tbody>
              {timeSlots.map((time) => {
                const isFullHour = time.endsWith(':00');
                const rowClass = isFullHour
                  ? 'timeblock-row timeblock-row-full-hour'
                  : 'timeblock-row timeblock-row-half-hour';
                
                return (
                  <tr key={time} className={rowClass}>
                    <td className="hour-column">{time}</td>
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
        <div className="planner-right"></div>
      </div>
    </div>
  );
};

export default TimeblockPlanner;
