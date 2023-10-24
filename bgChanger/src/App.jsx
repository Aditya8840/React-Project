import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("red")

  return (
    <>
      <div className="card" style={{backgroundColor: color}}>
          <div className="palette">
            <button style={{ backgroundColor: "red"}} onClick={() => setColor("red")}>Red</button>
            <button style={{ backgroundColor: "blue"}} onClick={() => setColor("blue")}>Blue</button>
            <button style={{ backgroundColor: "yellow"}} onClick={() => setColor("yellow")}>Yellow</button>
            <button style={{ backgroundColor: "green"}} onClick={() => setColor("green")}>Green</button>
            <button style={{ backgroundColor: "orange"}} onClick={() => setColor("orange")}>Orange</button>
            <button style={{ backgroundColor: "purple"}} onClick={() => setColor("purple")}>Purple</button>
          </div>
      </div>
    </>
  )
}

export default App
