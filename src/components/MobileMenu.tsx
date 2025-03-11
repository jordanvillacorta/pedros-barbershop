import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Users, Image } from 'lucide-react';
import { Clippers } from './icons/Clippers';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  closed: {
    x: "100%",
    transition: {
      type: "tween",
      duration: 0.3
    }
  },
  open: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.3
    }
  }
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-marble/50" 
            aria-hidden="true"
            onClick={onClose}
          />
          <motion.div 
            className="fixed inset-y-0 right-0 w-3/4 max-w-[250px] bg-marble px-6 py-6 shadow-lg"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col space-y-6 mt-16">
          <NavLink 
            to="/" 
            onClick={handleLinkClick}
            className={({ isActive }) => 
              `text-pr-white hover:text-pr-red transition duration-300 text-2xl flex items-center gap-3 ${isActive ? 'text-pr-red' : ''}`
            }
          >
            <Home className="w-6 h-6" />
            Home
          </NavLink>
          <NavLink 
            to="/barbers" 
            onClick={handleLinkClick}
            className={({ isActive }) => 
              `text-pr-white hover:text-pr-red transition duration-300 text-2xl flex items-center gap-3 ${isActive ? 'text-pr-red' : ''}`
            }
          >
            <Users className="w-6 h-6" />
            Barbers
          </NavLink>
          <NavLink 
            to="/services" 
            onClick={handleLinkClick}
            className={({ isActive }) => 
              `text-pr-white hover:text-pr-red transition duration-300 text-2xl flex items-center gap-3 ${isActive ? 'text-pr-red' : ''}`
            }
          >
            <Clippers className="w-6 h-6" />
            Services
          </NavLink>
          <NavLink 
            to="/gallery" 
            onClick={handleLinkClick}
            className={({ isActive }) => 
              `text-pr-white hover:text-pr-red transition duration-300 text-2xl flex items-center gap-3 ${isActive ? 'text-pr-red' : ''}`
            }
          >
            <Image className="w-6 h-6" />
            Gallery
          </NavLink>
          <NavLink 
            to="/about" 
            onClick={handleLinkClick}
            className={({ isActive }) => 
              `text-pr-white hover:text-pr-red transition duration-300 text-2xl flex items-center gap-3 ${isActive ? 'text-pr-red' : ''}`
            }
          >
            <Users className="w-6 h-6" />
            About Us
          </NavLink>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}