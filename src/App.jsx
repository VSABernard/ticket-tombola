import { BrowserRouter, Route, Routes } from "react-router-dom"

import "./style/_reset.css"
import Infos from "./components/Infos/Infos"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Infos/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App