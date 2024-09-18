import Home from "./components/pages/Home";
import WinPredictor from "./components/pages/WinPredictor";
import NavBar from "./components/inc/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatBot from "./components/pages/ChatBot";
import ManifestoComparator from "./components/pages/ManifestoComparator";
import Footer from "./components/inc/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        

        <Routes>
          <Route path="/manifestocomparator" element={<ManifestoComparator/>}/>
          <Route path="/winpredictor" element={<WinPredictor/>}/>
          <Route path="/chatbot" element={<ChatBot/>}/>
          <Route path="/" element={<Home />} />
        </Routes>
      <Footer />

      </div>
    </Router>
  );
}
export default App;
