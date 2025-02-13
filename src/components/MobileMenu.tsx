import React from 'react';
import { NavLink } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <div 
        className="fixed inset-0 bg-black/50" 
        aria-hidden="true"
        onClick={onClose}
      />
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-dark px-6 py-6 shadow-lg">
        <div className="flex flex-col space-y-6 mt-16">
          <NavLink 
            to="/" 
            onClick={handleLinkClick}
            className={({ isActive }) => 
              `text-pr-white hover:text-pr-red transition duration-300 font-black-freedom text-2xl ${isActive ? 'text-pr-red' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            onClick={handleLinkClick}
            className={({ isActive }) => 
              `text-pr-white hover:text-pr-red transition duration-300 font-black-freedom text-2xl ${isActive ? 'text-pr-red' : ''}`
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/gallery" 
            onClick={handleLinkClick}
            className={({ isActive }) => 
              `text-pr-white hover:text-pr-red transition duration-300 font-black-freedom text-2xl ${isActive ? 'text-pr-red' : ''}`
            }
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/reviews" 
            onClick={handleLinkClick}
            className={({ isActive }) => 
              `text-pr-white hover:text-pr-red transition duration-300 font-black-freedom text-2xl ${isActive ? 'text-pr-red' : ''}`
            }
          >
            Reviews
          </NavLink>
        </div>
      </div>
    </div>
  );
}