import React from "react"
import "./style/_reset.css"
import Ticket from "./pages/Ticket" 

function App() {

const start = 12
const stop = 20
const step = 1

return Array.from({ length: (stop- start) / step + 1 }, (_, i) => (
    <div>
        <Ticket ticketNumber={start + i * step}/>
        <p className="dots">-------------------------------------------</p>              
    </div>)
  ) 
}


export default App