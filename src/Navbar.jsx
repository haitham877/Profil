import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Welcome from "./Welcome";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
      
        <h1 className="text-xl font-bold">موقعي</h1>

       
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      
      </div>

     
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2 px-2">
           <Link to="/" className="block p-2 hover:bg-gray-700 rounded">Willkommen</Link>
          <Link to="/about" className="block p-2 hover:bg-gray-700 rounded">Über mich</Link>
          <Link to="/portfolio" className="block p-2 hover:bg-gray-700 rounded">Geschäft</Link>
          <Link to="/contact" className="block p-2 hover:bg-gray-700 rounded">Kontakt</Link>
        </div>
      )}
    </nav>
  );
}
