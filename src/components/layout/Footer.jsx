import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaInstagram size={20} />, url: "#", label: "Instagram" },
    { icon: <FaFacebook size={20} />, url: "#", label: "Facebook" },
    { icon: <FaYoutube size={20} />, url: "#", label: "YouTube" },
    { icon: <FaLinkedin size={20} />, url: "#", label: "LinkedIn" }
  ];

  const quickLinks = [
    { name: 'About', path: '#about' },
    { name: 'Programs', path: '#programs' },
    { name: 'Book', path: '#book' },
    { name: 'Contact', path: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kazi Mahasin Azim</h3>
            <p className="mb-4 text-gray-300">
              Entrepreneur, Business Coach, Motivational Speaker, and Social Reformer dedicated to 
              empowering the next generation of business leaders.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.path} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Kolkata | Delhi | Bengaluru</p>
              <p className="mb-2">Email: your@email.com</p>
              <p>Phone: +91 8017776957</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} Kazi Mahasin Azim. All rights reserved.
          </p>
          <p className="mt-2 text-sm flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-1" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;