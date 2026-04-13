import React from 'react';
import { motion } from 'framer-motion';
import InteractiveMap from './components/InteractiveMap';

function App() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen font-sans">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-[60vh] bg-[url('/public/assets/tunis-hero.jpg')] bg-cover bg-center flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold text-white mb-4">TunAlaCarte</h1>
          <p className="text-xl text-gray-200">Discover the Soul of Tunisia</p>
        </div>
      </motion.header>

      {/* Map Section */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-[#2D3436] mb-8">Explore Pin by Pin</h2>
        <InteractiveMap />
      </section>
      
      {/* Gamification Placeholder */}
      <section className="bg-blue-900 py-12 text-center text-white">
        <h3 className="text-2xl font-light">Ready to earn your <span className="font-bold text-amber-400">Carthage Explorer</span> badge?</h3>
        <button className="mt-6 px-8 py-3 bg-amber-500 rounded-full font-bold hover:scale-105 transition">Start the Journey</button>
      </section>
    </div>
  );
}

export default App;