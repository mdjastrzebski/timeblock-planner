import { useState } from "react";
import Page from "./components/Page";
import ConfigPanel from "./components/ConfigPanel";
import type { PageFormat } from "./types";
import { usePrint } from "./hooks/usePrint";

function App() {
  const [hourFrom, setHourFrom] = useState(7);
  const [hourTo, setHourTo] = useState(20);
  const [pageFormat, setPageFormat] = useState<PageFormat>("A4");

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

  return (
    <>
      <ConfigPanel
        hourFrom={hourFrom}
        hourTo={hourTo}
        pageFormat={pageFormat}
        onHourFromChange={handleHourFromChange}
        onHourToChange={handleHourToChange}
        onPageFormatChange={setPageFormat}
        onPrint={handlePrint}
      />
      <Page hourFrom={hourFrom} hourTo={hourTo} pageFormat={pageFormat} />
    </>
  );
}

export default App;
