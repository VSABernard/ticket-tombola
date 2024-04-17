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
