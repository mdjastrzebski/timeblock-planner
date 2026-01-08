import { useState } from "react";
import Page from "./components/Page";

type PageFormat = "A4" | "Letter";

function App() {
  const [hourFrom, setHourFrom] = useState(7);
  const [hourTo, setHourTo] = useState(20);
  const [pageFormat, setPageFormat] = useState<PageFormat>("A4");

  const handlePrint = () => {
    // Dynamically set @page size based on selected format
    const styleId = "dynamic-page-size";
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    const pageSize = pageFormat === "A4" ? "A4 landscape" : "Letter landscape";
    styleElement.textContent = `@page { size: ${pageSize}; margin: 0; }`;

    window.print();
  };

  const handleHourFromChange = (value: number) => {
    const newValue = Math.max(0, Math.min(23, value));
    setHourFrom(newValue);
    if (newValue >= hourTo) {
      setHourTo(Math.min(23, newValue + 1));
    }
  };

  const handleHourToChange = (value: number) => {
    const newValue = Math.max(0, Math.min(23, value));
    setHourTo(newValue);
    if (newValue <= hourFrom) {
      setHourFrom(Math.max(0, newValue - 1));
    }
  };

  return (
    <>
      <div className="controls-container p-5 text-center flex gap-5 items-center justify-center flex-wrap print:hidden">
        <div className="flex gap-[10px] items-center">
          <label htmlFor="hourFrom" className="font-medium">
            Hour from:
          </label>
          <input
            id="hourFrom"
            type="number"
            min="0"
            max="23"
            value={hourFrom}
            onChange={(e) =>
              handleHourFromChange(parseInt(e.target.value) || 0)
            }
            className="px-2.5 py-1.5 text-base w-[60px] border border-gray-300 rounded"
          />
        </div>
        <div className="flex gap-[10px] items-center">
          <label htmlFor="hourTo" className="font-medium">
            Hour to:
          </label>
          <input
            id="hourTo"
            type="number"
            min="0"
            max="23"
            value={hourTo}
            onChange={(e) => handleHourToChange(parseInt(e.target.value) || 0)}
            className="px-2.5 py-1.5 text-base w-[60px] border border-gray-300 rounded"
          />
        </div>
        <div className="flex gap-[10px] items-center">
          <label htmlFor="pageFormat" className="font-medium">
            Page format:
          </label>
          <select
            id="pageFormat"
            value={pageFormat}
            onChange={(e) => setPageFormat(e.target.value as PageFormat)}
            className="px-2.5 py-1.5 text-base border border-gray-300 rounded bg-white"
          >
            <option value="A4">A4</option>
            <option value="Letter">Letter</option>
          </select>
        </div>
        <button
          onClick={handlePrint}
          className="px-5 py-2.5 text-base cursor-pointer border border-gray-300 rounded bg-white hover:bg-gray-100 focus:outline-2 focus:outline-blue-500 focus:outline-offset-2"
        >
          Print Planner
        </button>
      </div>
      <Page hourFrom={hourFrom} hourTo={hourTo} pageFormat={pageFormat} />
    </>
  );
}

export default App;
