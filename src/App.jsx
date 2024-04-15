import React from "react"
import "./style/_reset.css"
import Ticket from "./pages/Ticket" 

function App() {
   
  const totalNumber = 5

  return Array.from(
    { length: totalNumber },
    (_, i) => (
        <div>
          <p className="dots">--</p>
          <Ticket ticketNumber={i}/>    
        </div>
    )
  )    
}

export default App