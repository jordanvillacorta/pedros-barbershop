import React from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import { businessHours } from '../data/hours';

export default function Footer() {
  const today = new Date().getDay();
  const currentDayHours = businessHours[today === 0 ? 6 : today - 1];
  const address = "2111 E Crossroads Ln, Olathe, KS 66062";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
          {/* Contact Info */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-pr-red" />
              <span>(913) 839-8588</span>
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-pr-red transition duration-300"
            >
              <MapPin className="w-5 h-5 mr-2 text-pr-red" />
              <span>{address}</span>
            </a>
          </div>

          {/* Today's Hours */}
          <div className="flex items-center">
            <Clock className="w-5 h-5 mr-2 text-pr-red" />
            <span>Today: {currentDayHours.hours}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://www.facebook.com/Yourpuertoricanbarberinkc/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-pr-red transition duration-300"
            >
              <Facebook className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/yourpuertoricanbarberinkc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-pr-red transition duration-300"
            >
              <Instagram className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-6 text-center">
          <p>&copy; 2024 Pedro's Barbershop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}