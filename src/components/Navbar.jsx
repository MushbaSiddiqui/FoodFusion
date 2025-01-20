import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const handleToggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/cards", label: "Cards" },
  ];

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-dark/95 backdrop-blur-sm shadow-lg"
          : "py-4 bg-dark"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="group flex items-center space-x-2"
              aria-label="Food fusion Home"
            >
              <span className="text-2xl font-bold text-secondary group-hover:text-secondary-light transition-colors">
                Food Fusion
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors
                  ${
                    location.pathname === link.path
                      ? "text-secondary"
                      : "text-light hover:text-secondary-light"
                  }
                  before:absolute before:inset-x-0 before:bottom-0 before:h-0.5
                  before:origin-left before:scale-x-0 before:bg-secondary
                  before:transition-transform hover:before:scale-x-100
                `}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={handleToggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-light hover:text-secondary hover:bg-dark-light transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">
                {isOpen ? "Close menu" : "Open menu"}
              </span>
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 bg-dark-light/95 backdrop-blur-sm shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                ${
                  location.pathname === link.path
                    ? "text-secondary bg-dark-light"
                    : "text-light hover:text-secondary hover:bg-dark-light/50"
                }
              `}
              onClick={handleToggleMenu}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
