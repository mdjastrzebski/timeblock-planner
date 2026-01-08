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
    <table className="w-full border-collapse text-xs m-0 p-0 print:text-[11px] print:table-fixed">
      <tbody>
        {timeSlots.map((slot, index) => {
          const isLast = index === timeSlots.length - 1;
          const baseRowClass = "h-[5mm]";
          const borderClass = slot.isFullHour
            ? "border-t border-black"
            : "border-t border-dotted border-gray-400";
          const finalBorderClass = isLast ? "border-b border-black" : "";
          const rowClass = `${baseRowClass} ${borderClass} ${finalBorderClass}`;

          return (
            <tr key={index} className={rowClass}>
              <td className="px-2 py-0 border-r border-gray-300 align-middle h-[5mm] leading-[5mm] print:px-2 print:py-0 print:border-r print:border-gray-300 print:align-middle print:h-[5mm] print:leading-[5mm] w-[60px] font-medium">{slot.time || ""}</td>
              <td className="px-2 py-0 border-r border-gray-300 align-middle h-[5mm] leading-[5mm] print:px-2 print:py-0 print:border-r print:border-gray-300 print:align-middle print:h-[5mm] print:leading-[5mm] w-auto"></td>
              <td className="px-2 py-0 border-r border-gray-300 align-middle h-[5mm] leading-[5mm] print:px-2 print:py-0 print:border-r print:border-gray-300 print:align-middle print:h-[5mm] print:leading-[5mm] w-auto"></td>
              <td className="px-2 py-0 border-r border-gray-300 align-middle h-[5mm] leading-[5mm] print:px-2 print:py-0 print:border-r print:border-gray-300 print:align-middle print:h-[5mm] print:leading-[5mm] w-auto"></td>
              <td className="px-2 py-0 align-middle h-[5mm] leading-[5mm] print:px-2 print:py-0 print:align-middle print:h-[5mm] print:leading-[5mm] w-auto"></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TimeblockPlanner;
