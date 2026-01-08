import type { PageFormat } from "../types";
import { isPageFormat } from "../types";

interface ConfigPanelProps {
  hourFrom: number;
  hourTo: number;
  pageFormat: PageFormat;
  taskCount: number;
  onHourFromChange: (value: number) => void;
  onHourToChange: (value: number) => void;
  onPageFormatChange: (value: PageFormat) => void;
  onTaskCountChange: (value: number) => void;
  onPrint: () => void;
}

const ConfigPanel = ({
  hourFrom,
  hourTo,
  pageFormat,
  taskCount,
  onHourFromChange,
  onHourToChange,
  onPageFormatChange,
  onTaskCountChange,
  onPrint,
}: ConfigPanelProps) => {
  return (
    <div className="w-full px-4 py-6 print:hidden">
      <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 max-w-4xl mx-auto mb-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
          {/* Time Range Group */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center flex-1">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <label htmlFor="hourFrom" className="text-sm font-semibold text-gray-700">
                Hour from:
              </label>
              <input
                id="hourFrom"
                type="number"
                min="0"
                max="23"
                value={hourFrom}
                onChange={(e) => {
                  const value = parseInt(e.target.value, 10);
                  onHourFromChange(isNaN(value) ? 0 : value);
                }}
                aria-label="Starting hour for the planner (0-23)"
                className="px-3 py-2 border border-gray-300 rounded-md bg-white text-base transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-gray-400 w-[60px]"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="hourTo" className="text-sm font-semibold text-gray-700">
                Hour to:
              </label>
              <input
                id="hourTo"
                type="number"
                min="0"
                max="23"
                value={hourTo}
                onChange={(e) => {
                  const value = parseInt(e.target.value, 10);
                  onHourToChange(isNaN(value) ? 0 : value);
                }}
                aria-label="Ending hour for the planner (0-23)"
                className="px-3 py-2 border border-gray-300 rounded-md bg-white text-base transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-gray-400 w-[60px]"
              />
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
              <label htmlFor="taskCount" className="text-sm font-semibold text-gray-700">
                Tasks:
              </label>
              <input
                id="taskCount"
                type="number"
                min="1"
                max="100"
                value={taskCount}
                onChange={(e) => {
                  const value = parseInt(e.target.value, 10);
                  onTaskCountChange(isNaN(value) ? 1 : value);
                }}
                aria-label="Number of tasks (1-100)"
                className="px-3 py-2 border border-gray-300 rounded-md bg-white text-base transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-gray-400 w-[60px]"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-gray-200"></div>
          <div className="md:hidden w-full h-px bg-gray-200"></div>

          {/* Output Group */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <label htmlFor="pageFormat" className="text-sm font-semibold text-gray-700">
                Page format:
              </label>
              <select
                id="pageFormat"
                value={pageFormat}
                onChange={(e) => {
                  const value = e.target.value;
                  if (isPageFormat(value)) {
                    onPageFormatChange(value);
                  }
                }}
                className="px-3 py-2 border border-gray-300 rounded-md bg-white text-base transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 hover:border-gray-400"
              >
                <option value="A4">A4</option>
                <option value="Letter">Letter</option>
              </select>
            </div>
            <button
              onClick={onPrint}
              aria-label="Print the timeblock planner"
              className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-md shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                />
              </svg>
              Print Planner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigPanel;
