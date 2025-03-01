import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Twitter } from 'lucide-react';
import { Link } from '@inertiajs/react';
import AppLogoIcon from '../app-logo-icon';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-transparent backdrop-blur-lg shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link prefetch href="/" >
              <AppLogoIcon/>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className=" font-medium">
              Home
            </a>
            <a href="#" className=" font-medium">
              Features
            </a>
            <a href="#" className=" font-medium">
              Pricing
            </a>
            <a href="#" className=" font-medium">
              About
            </a>
            <a href="#" className=" font-medium">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="">
              <Github size={20} />
            </a>
            <a href="#" className="">
              <Twitter size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/90 backdrop-blur-md rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                Features
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                Pricing
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium py-2">
                Contact
              </a>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  <Github size={20} />
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;