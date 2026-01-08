import TimeblockPlanner from './components/TimeblockPlanner'

function App() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <button onClick={handlePrint} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
          Print Planner
        </button>
      </div>
      <TimeblockPlanner />
    </>
  )
}

export default App
