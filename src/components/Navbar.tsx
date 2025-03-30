import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronLeft, ChevronRight, Home, Image, Star, Users } from 'lucide-react';
import { BarberPole } from './icons/BarberPole';
import MobileMenu from './MobileMenu';
import { GiRazor } from 'react-icons/gi';

interface NavbarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function Navbar({ isOpen, onToggle }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCloseMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-[#004687] z-50 border-b-2 border-pr-white">
        <div className="px-4 py-6 flex items-center justify-around">
          <NavLink to="/" className="flex items-center gap-4">
            <BarberPole className="w-10 h-10 text-pr-red" />
            <span className="text-pr-white text-4xl font-peristiwa truncate" style={{ textShadow: '-1px -1px 0 #ED0000, 1px -1px 0 #ED0000, -1px 1px 0 #ED0000, 1px 1px 0 #ED0000' }}>Pedro's Barbershop</span>
          </NavLink>
          <button
            className="text-pr-white hover:text-pr-red transition duration-300"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Vertical Navbar */}
      <nav className={`hidden lg:flex fixed left-0 top-0 h-screen bg-marble border-r-2 border-pr-red z-50 transition-[width] duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
        <div className="flex flex-col w-full">
          <div className="flex items-center p-4 border-b-2 border-pr-red relative">
            <NavLink to="/" className="flex items-center">
              <BarberPole className="w-8 h-8 text-pr-red" />
              <div className={`ml-2 ${isOpen ? 'w-auto visible' : 'w-0 invisible'} overflow-hidden whitespace-nowrap`}>
                <span className="text-pr-white text-2xl font-peristiwa block leading-tight">Pedro's</span>
                <span className="text-pr-white text-2xl font-peristiwa block leading-tight">Barbershop</span>
              </div>
            </NavLink>
            <button
              onClick={onToggle}
              aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-pr-red hover:bg-pr-blue transition-colors duration-300 rounded-full p-1 shadow-lg"
            >
              {isOpen ? (
                <ChevronLeft className="w-6 h-6 text-white" />
              ) : (
                <ChevronRight className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
          
          <div className="flex flex-col space-y-6 p-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-pr-white hover:text-pr-red transition duration-300 font-black-freedom nav-text text-xl flex items-center ${isActive ? 'text-pr-red' : ''}`
              }
            >
              <Home className={`w-6 h-6 ${!isOpen ? 'mx-auto' : 'mr-3'}`} />
              <span className={`${isOpen ? 'w-auto visible' : 'w-0 invisible'} overflow-hidden whitespace-nowrap`}>
                Home
              </span>
            </NavLink>
            <NavLink 
              to="/barbers" 
              className={({ isActive }) => 
                `text-pr-white hover:text-pr-red transition duration-300 font-black-freedom nav-text text-xl flex items-center ${isActive ? 'text-pr-red' : ''}`
              }
            >
              <Users className={`w-6 h-6 ${!isOpen ? 'mx-auto' : 'mr-3'}`} />
              <span className={`${isOpen ? 'w-auto visible' : 'w-0 invisible'} overflow-hidden whitespace-nowrap`}>
                Barbers
              </span>
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `text-pr-white hover:text-pr-red transition duration-300 font-black-freedom nav-text text-xl flex items-center ${isActive ? 'text-pr-red' : ''}`
              }
            >
              <GiRazor className={`w-6 h-6 scale-x-[-1] ${!isOpen ? 'mx-auto' : 'mr-3'}`} />
              <span className={`${isOpen ? 'w-auto visible' : 'w-0 invisible'} overflow-hidden whitespace-nowrap`}>
                Services
              </span>
            </NavLink>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => 
                `text-pr-white hover:text-pr-red transition duration-300 font-black-freedom nav-text text-xl flex items-center ${isActive ? 'text-pr-red' : ''}`
              }
            >
              <Image className={`w-6 h-6 ${!isOpen ? 'mx-auto' : 'mr-3'}`} />
              <span className={`${isOpen ? 'w-auto visible' : 'w-0 invisible'} overflow-hidden whitespace-nowrap`}>
                Gallery
              </span>
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-pr-white hover:text-pr-red transition duration-300 font-black-freedom nav-text text-xl flex items-center ${isActive ? 'text-pr-red' : ''}`
              }
            >
              <Users className={`w-6 h-6 ${!isOpen ? 'mx-auto' : 'mr-3'}`} />
              <span className={`${isOpen ? 'w-auto visible' : 'w-0 invisible'} overflow-hidden whitespace-nowrap`}>
                About Us
              </span>
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={handleCloseMobileMenu} />
    </>
  );
}