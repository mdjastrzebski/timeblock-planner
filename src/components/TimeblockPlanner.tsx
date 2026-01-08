import "./TimeblockPlanner.css";

interface TimeblockPlannerProps {
  hourFrom: number;
  hourTo: number;
}

const TimeblockPlanner = ({ hourFrom, hourTo }: TimeblockPlannerProps) => {
  // Generate time slots from hourFrom to hourTo (full hours with half-hour rows)
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = hourFrom; hour <= hourTo; hour++) {
      slots.push({
        time: `${hour.toString().padStart(2, "0")}:00`,
        isFullHour: true,
      });
      if (hour <= hourTo) {
        slots.push({ time: null, isFullHour: false });
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <table className="timeblock-table">
      <tbody>
        {timeSlots.map((slot, index) => {
          const isLast = index === timeSlots.length - 1;
          const rowClass = slot.isFullHour
            ? "timeblock-row timeblock-row-full-hour"
            : "timeblock-row timeblock-row-half-hour";
          const finalClass = isLast
            ? `${rowClass} timeblock-row-final`
            : rowClass;

          return (
            <tr key={index} className={finalClass}>
              <td className="hour-column">{slot.time || ""}</td>
              <td className="timeblock-column"></td>
              <td className="timeblock-column"></td>
              <td className="timeblock-column"></td>
              <td className="timeblock-column"></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TimeblockPlanner;
