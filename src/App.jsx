import React from "react"
import "./style/_reset.css"
import Ticket from "./pages/Ticket" 

function App() {
   
  const totalNumber = 10

  return Array.from(
    { length: totalNumber },
    (_, i) => (
        <div>
          <Ticket ticketNumber={i}/>
          <p className="dots">-------------------------------------------</p>              
        </div>
    )
  )    
}

export default App