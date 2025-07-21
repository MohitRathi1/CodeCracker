import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '/assets/logo.png'; // Correctly import the logo image

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/events', label: 'Events' },
    { to: '/syllabus', label: 'Syllabus' },
    { to: '/contact', label: 'Contact' },
    { to: '/faq', label: 'FAQ' },
  ];

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-black/30 ">
      <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
        <div className="flex items-left justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Logo"
              className="h-12 "
            />
          
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
          {links.map((link, index) => (
  <Link
    key={link.to}
    to={link.to}
    className="transition-colors duration-200 text-gray-300 hover:text-white"
    style={{
      color:
        location.pathname === link.to
          ? '#54ae90'
          : undefined,
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.color = index % 2 === 0 ? '#aedce2' : '#54ae90')
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.color =
        location.pathname === link.to ? '#54ae90' : '#d1d5db')
    }
  >
    {link.label}
  </Link>
))}

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden"
          >
            <div className="px-4 pt-4 pb-4 space-y-2 bg-black/70 backdrop-blur-sm border-t border-gray-700">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'text-cyan-500 bg-gray-800/50'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/30'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
