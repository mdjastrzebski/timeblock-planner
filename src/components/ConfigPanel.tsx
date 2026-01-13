import type { PageFormat, Theme } from "../types";
import { isPageFormat } from "../types";
import ClockIcon from "./icons/ClockIcon";
import ClipboardCheckIcon from "./icons/ClipboardCheckIcon";
import DocumentIcon from "./icons/DocumentIcon";
import DuplicateIcon from "./icons/DuplicateIcon";
import PrinterIcon from "./icons/PrinterIcon";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";

interface ConfigPanelProps {
  hourFrom: number;
  hourTo: number;
  pageFormat: PageFormat;
  taskCount: number;
  duplexPrint: boolean;
  theme: Theme;
  onHourFromChange: (value: number) => void;
  onHourToChange: (value: number) => void;
  onPageFormatChange: (value: PageFormat) => void;
  onTaskCountChange: (value: number) => void;
  onDuplexPrintChange: (value: boolean) => void;
  onThemeChange: (value: Theme) => void;
  onPrint: () => void;
}

const ConfigPanel = ({
  hourFrom,
  hourTo,
  pageFormat,
  taskCount,
  duplexPrint,
  theme,
  onHourFromChange,
  onHourToChange,
  onPageFormatChange,
  onTaskCountChange,
  onDuplexPrintChange,
  onThemeChange,
  onPrint,
}: ConfigPanelProps) => {
  return (
    <div className="w-full px-4 py-6 print:hidden">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 md:p-8 max-w-5xl mx-auto mb-6">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Time Range Section */}
          <div className="flex-1">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
              Time Range
            </h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3">
                <ClockIcon className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                <label
                  htmlFor="hourFrom"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"
                >
                  From:
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
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-base text-gray-900 dark:text-gray-100 transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 hover:border-gray-400 dark:hover:border-gray-500 w-[70px] text-center"
                />
              </div>
              <div className="flex items-center gap-3">
                <label
                  htmlFor="hourTo"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"
                >
                  To:
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
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-base text-gray-900 dark:text-gray-100 transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 hover:border-gray-400 dark:hover:border-gray-500 w-[70px] text-center"
                />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-gray-200 dark:bg-gray-600"></div>
          <div className="lg:hidden w-full h-px bg-gray-200 dark:bg-gray-600"></div>

          {/* Tasks Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
              Tasks
            </h3>
            <div className="flex items-center gap-3">
              <ClipboardCheckIcon className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
              <label
                htmlFor="taskCount"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"
              >
                Count:
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
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-base text-gray-900 dark:text-gray-100 transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 hover:border-gray-400 dark:hover:border-gray-500 w-[70px] text-center"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-gray-200 dark:bg-gray-600"></div>
          <div className="lg:hidden w-full h-px bg-gray-200 dark:bg-gray-600"></div>

          {/* Page Format Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
              Page Format
            </h3>
            <div className="flex items-center gap-3">
              <DocumentIcon className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
              <label
                htmlFor="pageFormat"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"
              >
                Size:
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
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-base text-gray-900 dark:text-gray-100 transition-all duration-200 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 hover:border-gray-400 dark:hover:border-gray-500 min-w-[100px]"
              >
                <option value="A4">A4</option>
                <option value="Letter">Letter</option>
              </select>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-gray-200 dark:bg-gray-600"></div>
          <div className="lg:hidden w-full h-px bg-gray-200 dark:bg-gray-600"></div>

          {/* Two-Sided Print Section */}
          <div className="flex flex-col">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
              Two-Sided
            </h3>
            <div className="flex items-center gap-3 flex-1">
              <DuplicateIcon className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
              <label
                htmlFor="duplexPrint"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap"
              >
                Duplicate page:
              </label>
              <input
                id="duplexPrint"
                type="checkbox"
                checked={duplexPrint}
                onChange={(e) => onDuplexPrintChange(e.target.checked)}
                aria-label="Enable two-sided printing by duplicating the page"
                className="w-4 h-4 text-blue-600 border-gray-300 dark:border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-gray-200 dark:bg-gray-600"></div>
          <div className="lg:hidden w-full h-px bg-gray-200 dark:bg-gray-600"></div>

          {/* Theme Section */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
              Theme
            </h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  onThemeChange(theme === "light" ? "dark" : "light")
                }
                aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                className="p-2 rounded-md transition-all duration-200 text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {theme === "light" ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-gray-200 dark:bg-gray-600"></div>
          <div className="lg:hidden w-full h-px bg-gray-200 dark:bg-gray-600"></div>

          {/* Print Action Section */}
          <div className="flex items-end">
            <button
              onClick={onPrint}
              aria-label="Print the timeblock planner"
              className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-md shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <PrinterIcon className="w-5 h-5" />
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigPanel;
