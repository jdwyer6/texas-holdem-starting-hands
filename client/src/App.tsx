import { useState } from 'react'
import './App.css'
import ChartPractice from './chart_practice';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Texas Holdem</h1>
      <ChartPractice />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
