import Home from "./components/Home"
import Event from "./components/Event"
import Nav from "./components/Nav"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
function App() {
  

    return (
        <>
            <Router>
            <Nav />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/event/:id" element={<Event/>} />
               </Routes>
            </Router>
     </>
  )
}

export default App



