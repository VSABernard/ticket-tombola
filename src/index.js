import React from 'react'
import ReactDOM from 'react-dom/client'
// import {render} from 'react-dom'
// import {useReactToPrint} from 'react-to-print'

import "./style/_reset.css"
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
 )

// class ComponentToPrint extends React.Component {
//   render () {
//     return (
//       <React.StrictMode>
//         <App />
//       </React.StrictMode>
//     )
//   }
// }

// const Exemple = () => {
//   const componentRef = useRef()
//   const handlePrint = useReactToPrint({
//     content: () => componentRef.current,
//   })

//   return (
//     <div>
//       <ComponentToPrint ref={componentRef} />
//       <button className='print-button' onClick={handlePrint}>Imprimer!</button>
//     </div>
//   )
// }

// render(<Exemple/>, document.querySelector("#root"))