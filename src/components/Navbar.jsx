import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar bg-purple-700 text-white">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="/" className="font-bold text-xl">Serge Noah</a>
        <div className="flex space-x-4">
          <a href="/biography" className="hover:text-pink-500">Biography</a>
          <a href="/blog" className="hover:text-pink-500">Blog</a>
          <a href="/formation" className="hover:text-pink-500">Formation</a>
          <a href="/projects" className="hover:text-pink-500">Projects</a>
          <a href="/cv" className="hover:text-pink-500">CV</a>
          <a href="/contact" className="hover:text-pink-500">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
