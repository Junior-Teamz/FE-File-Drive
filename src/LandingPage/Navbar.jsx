import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogIn } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-30 w-full bg-white shadow-lg backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              BrandLogo
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out"
            >
              Contact
            </Link>
            <Link
              to="/signin"
              className="flex items-center py-2 px-4 bg-blue-600 text-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg ease-in-out duration-300 hover:bg-blue-700"
            >
              <LogIn className="w-5 h-5 mr-2" />
              Login
            </Link>
            <Link
              to="/signup"
              className="py-2 px-4 bg-gray-800 text-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg ease-in-out duration-300 hover:bg-gray-900"
            >
              Register
            </Link>
          </nav>

          {/* Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none transition-transform duration-300 ease-in-out"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="px-4 pt-4 pb-6 space-y-2">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/signin"
              className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
