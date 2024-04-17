import React from "react"
import Ticket from "./pages/Ticket" 
import "./style/_reset.css"
import "./App.css"

function App() {

  // Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
  // Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP, etc.)

  const start = 3401
  const stop = 3500
  const step = 1

  return Array.from({ length: (stop- start) / step + 1 }, (_, i) => (
      <div className="appPage">          
        {/**Generate numbers range */}
        <Ticket ticketNumber={start + i * step}/>                                  
      </div>)
    ) 
}

export default App