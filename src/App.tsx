import { useState } from "react";
import Page from "./components/Page";
import ConfigPanel from "./components/ConfigPanel";
import type { PageFormat } from "./types";
import { usePrint } from "./hooks/usePrint";

function App() {
  const [hourFrom, setHourFrom] = useState(7);
  const [hourTo, setHourTo] = useState(20);
  const [pageFormat, setPageFormat] = useState<PageFormat>("A4");
  const [taskCount, setTaskCount] = useState(16);
  const [duplexPrint, setDuplexPrint] = useState(false);

  const handlePrint = usePrint(pageFormat);

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

  const handleTaskCountChange = (value: number) => {
    const newValue = Math.max(1, Math.min(100, value));
    setTaskCount(newValue);
  };

  return (
    <>
      <ConfigPanel
        hourFrom={hourFrom}
        hourTo={hourTo}
        pageFormat={pageFormat}
        taskCount={taskCount}
        duplexPrint={duplexPrint}
        onHourFromChange={handleHourFromChange}
        onHourToChange={handleHourToChange}
        onPageFormatChange={setPageFormat}
        onTaskCountChange={handleTaskCountChange}
        onDuplexPrintChange={setDuplexPrint}
        onPrint={handlePrint}
      />
      <Page
        hourFrom={hourFrom}
        hourTo={hourTo}
        pageFormat={pageFormat}
        taskCount={taskCount}
      />
      {duplexPrint && (
        <div className="mt-4 print:mt-0">
          <Page
            hourFrom={hourFrom}
            hourTo={hourTo}
            pageFormat={pageFormat}
            taskCount={taskCount}
          />
        </div>
      )}
    </>
  );
}

export default App;
