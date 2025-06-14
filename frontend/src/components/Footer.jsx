import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="text-white py-8"
      style={{ backgroundColor: 'rgba(119, 200, 200, 1)' }}
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Treat Holidays</h2>
          <p className="text-sm">
            Your go-to app for discovering hidden gems and planning your perfect trip. Explore destinations, tips, and itineraries.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Destinations</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-gray-200 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-200 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-200 transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-8">
        © {new Date().getFullYear()} Treat Holodays. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
