import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container-custom">
        <div className="text-center">
          <p className="mb-2">© {new Date().getFullYear()} Kazi Mahasin Azim. All rights reserved.</p>
          <p className="text-gray-400 text-sm">
            Entrepreneur | Business Coach | Motivational Speaker | Social Reformer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;