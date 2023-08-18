import Card from "./Card"
import "./styles/card.css"
import './App.css'
import Data from "./Data"
import "./styles/header.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Newsapi from "./components/Newsapi"



import "./styles/footer.css"

import About from "./components/About"
import Home from "./components/Home"




function App() {
  return (<>
    <Router>
     
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/About" element={<About />} />
        <Route exact path="/News" element={<Newsapi/>} />
      </Routes>
      
    </Router>

  </>
  );

}

export default App;
