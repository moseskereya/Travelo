import Home from "./components/Home"
import Event from "./components/Event"
import Nav from "./components/Nav"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Team from "./components/Team"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
function App() {
  

    return (
        <>
        <Nav />
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/projects"  element={<Projects />} />
                <Route path="/teams"  element={<Team />} />
                <Route path="/event/:id" element={<Event/>} />
            </Routes>
            </Router>
        <Footer/>
     </>
  )
}

export default App



