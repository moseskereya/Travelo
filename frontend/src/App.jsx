import Home from "./components/Home"
import Event from "./components/Event"
import Nav from "./components/Nav"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Team from "./components/Team"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Register from "./components/Register"
import Login from "./components/Login"
function App() {
  

    return (
        <>
        <Nav />
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/login"  element={<Login />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/register"  element={<Register />} />
                <Route path="/teams"  element={<Team />} />
                <Route path="/event/:id" element={<Event/>} />
            </Routes>
            </Router>
        <Footer/>
     </>
  )
}

export default App



