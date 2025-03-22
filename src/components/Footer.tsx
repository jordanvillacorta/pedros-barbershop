import React, {useState} from 'react';
import { Phone, MapPin, Clock, Instagram, Facebook, X } from 'lucide-react';
import { businessHours } from '../data/hours';

export default function Footer() {
  const [showHoursPopup, setShowHoursPopup] = useState(false);
  const today = new Date().getDay();
  const currentDayHours = businessHours[today === 0 ? 6 : today - 1];
  const address = "2111 E Crossroads Ln, Olathe, KS 66062";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  const toggleHoursPopup = () => setShowHoursPopup(!showHoursPopup);

  return (
    <footer className="bg-[#004687] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
          {/* Contact Info */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2 text-pr-red" />
              <a
                href="tel:+19138398588"
                aria-label="Call us at (913) 839-8588"
                className="hover:text-pr-red transition duration-300"
              >
                (913) 839-8588
              </a>
            </div>
            <a
              href={mapsUrl}
              target="_blank"
              aria-label="Open our location in Google Maps"
              rel="noopener noreferrer"
              className="flex items-center hover:text-pr-red transition duration-300"
            >
              <MapPin className="w-5 h-5 mr-2 text-pr-red" />
              <span>{address}</span>
            </a>
          </div>

          {/* Today's Hours */}
          <div className="flex items-center cursor-pointer" onClick={toggleHoursPopup}>
            <Clock className="w-5 h-5 mr-2 text-pr-red" />
            <span className="hover:text-pr-red transition-colors duration-300">Today: {currentDayHours.hours}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://www.facebook.com/Yourpuertoricanbarberinkc/"
              target="_blank"
              aria-label="Visit our Facebook page"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-pr-red transition duration-300"
            >
              <Facebook className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/yourpuertoricanbarberinkc"
              target="_blank"
              aria-label="Visit our Instagram profile"
              rel="noopener noreferrer"
              className="flex items-center text-white hover:text-pr-red transition duration-300"
            >
              <Instagram className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">Instagram</span>
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 pt-6 text-center">
          <p>&copy; 2024 Pedro's Barbershop. All rights reserved.</p>
        </div>
      </div>
      
      {/* Hours Popup */}
      {showHoursPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-black rounded-lg p-6 max-w-md w-full relative border-2 border-pr-white">
            <button
              onClick={toggleHoursPopup}
              className="absolute top-2 right-2 text-white hover:text-pr-red transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center">Business Hours</h3>
            <div className="space-y-2">
              {businessHours.map((day, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-2 rounded ${
                    index === (today === 0 ? 6 : today - 1)
                      ? 'bg-pr-red/20 text-white'
                      : 'text-gray-300'
                  }`}
                >
                  <span className="font-semibold">{day.day}</span>
                  <span>{day.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}