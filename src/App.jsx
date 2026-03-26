import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Portfolio"; 
import Contact from "./Contact"; 
import Navbar from "./Navbar";
import About from "./About";
import Welcome from "./Welcome";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {

  return (
   
 

  
    <BrowserRouter>
      <Navbar />
      <Routes>
     {  /* <Route path="/" element={<Welcome/>} />*/   }
        <Route path="/contact" element={<Contact />} />
        <Route path="/Portfolio" element={<Portfolio/>} />
         <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
