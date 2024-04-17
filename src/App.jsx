import React from "react"
import Ticket from "./pages/Ticket" 
import "./style/_reset.css"
import "./App.css"

function App() {

const start = 1001
const stop = 1100
const step = 1

return Array.from({ length: (stop- start) / step + 1 }, (_, i) => (
    <div className="appPage">
        <Ticket ticketNumber={start + i * step}/>             
    </div>)
  ) 
}


export default App