import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-purple-700 text-white">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <p>&copy; 2023 Serge Noah. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://twitter.com" className="hover:text-pink-500"><i className="fab fa-twitter"></i></a>
          <a href="https://linkedin.com" className="hover:text-pink-500"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/SergeNoah000" className="hover:text-pink-500"><i className="fab fa-github"></i></a>
          <a href="mailto:sergenoah91@gmalcom" className="hover:text-pink-500"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
