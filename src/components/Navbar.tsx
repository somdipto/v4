import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-xl font-semibold">
              Trends Unisex Salon
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/services" className="text-gray-900 hover:text-gray-600 transition-colors">
              Services
            </Link>
            <Link to="/menu" className="text-gray-900 hover:text-gray-600 transition-colors">
              Menu
            </Link>
            <Link to="/location" className="text-gray-900 hover:text-gray-600 transition-colors">
              Location
            </Link>
            <Link to="/contact" className="text-gray-900 hover:text-gray-600 transition-colors">
              Contact
            </Link>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
              Book now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/services"
              className="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded-md"
            >
              Services
            </Link>
            <Link
              to="/menu"
              className="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded-md"
            >
              Menu
            </Link>
            <Link
              to="/location"
              className="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded-md"
            >
              Location
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-900 hover:bg-gray-50 rounded-md"
            >
              Contact
            </Link>
            <button className="w-full text-left px-3 py-2 text-gray-900 bg-gray-50 rounded-md">
              Book now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;