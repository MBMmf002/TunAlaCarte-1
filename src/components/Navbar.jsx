import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 px-8 py-4 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className={`text-2xl font-bold ${isScrolled ? 'text-tunis-blue' : 'text-white'}`}>
          Tun<span className="text-tunis-gold">AlaCarte</span>
        </div>
        <div className={`space-x-8 font-medium ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
          <a href="#" className="hover:text-tunis-gold transition">Destinations</a>
          <a href="#" className="hover:text-tunis-gold transition">Experiences</a>
          <a href="#" className="hover:text-tunis-gold transition">Itineraries</a>
          <button className="bg-tunis-gold text-white px-6 py-2 rounded-full font-bold">Book Now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;