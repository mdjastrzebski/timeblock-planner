import { useState } from 'react'
import Page from './components/Page'

type PageFormat = 'A4' | 'Letter';

function App() {
  const [hourFrom, setHourFrom] = useState(8)
  const [hourTo, setHourTo] = useState(18)
  const [pageFormat, setPageFormat] = useState<PageFormat>('A4')

  const handlePrint = () => {
    // Dynamically set @page size based on selected format
    const styleId = 'dynamic-page-size';
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;
    
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }
    
    const pageSize = pageFormat === 'A4' ? 'A4 landscape' : 'Letter landscape';
    styleElement.textContent = `@page { size: ${pageSize}; margin: 0; }`;
    
    window.print()
  }

  const handleHourFromChange = (value: number) => {
    const newValue = Math.max(0, Math.min(23, value))
    setHourFrom(newValue)
    if (newValue >= hourTo) {
      setHourTo(Math.min(23, newValue + 1))
    }
  }

  const handleHourToChange = (value: number) => {
    const newValue = Math.max(0, Math.min(23, value))
    setHourTo(newValue)
    if (newValue <= hourFrom) {
      setHourFrom(Math.max(0, newValue - 1))
    }
  }

  return (
    <>
      <div className="controls-container" style={{ padding: '20px', textAlign: 'center', display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <label htmlFor="hourFrom" style={{ fontWeight: '500' }}>Hour from:</label>
          <input
            id="hourFrom"
            type="number"
            min="0"
            max="23"
            value={hourFrom}
            onChange={(e) => handleHourFromChange(parseInt(e.target.value) || 0)}
            style={{ padding: '5px 10px', fontSize: '16px', width: '60px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <label htmlFor="hourTo" style={{ fontWeight: '500' }}>Hour to:</label>
          <input
            id="hourTo"
            type="number"
            min="0"
            max="23"
            value={hourTo}
            onChange={(e) => handleHourToChange(parseInt(e.target.value) || 0)}
            style={{ padding: '5px 10px', fontSize: '16px', width: '60px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
        </div>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <label htmlFor="pageFormat" style={{ fontWeight: '500' }}>Page format:</label>
          <select
            id="pageFormat"
            value={pageFormat}
            onChange={(e) => setPageFormat(e.target.value as PageFormat)}
            style={{ padding: '5px 10px', fontSize: '16px', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#fff' }}
          >
            <option value="A4">A4</option>
            <option value="Letter">Letter</option>
          </select>
        </div>
        <button onClick={handlePrint} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', border: '1px solid #ccc', borderRadius: '4px', backgroundColor: '#fff' }}>
          Print Planner
        </button>
      </div>
      <Page hourFrom={hourFrom} hourTo={hourTo} pageFormat={pageFormat} />
    </>
  )
}

export default App
