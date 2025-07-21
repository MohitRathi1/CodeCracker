import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import bgImage from '/assets/bg.jpg'; // Adjust path if needed
import arrow from '/assets/arrow.png'

const Home = () => {
  return (
    <div
      className="min-h-screen text-white relative flex flex-col items-center justify-center overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
              <Link to="/" className="flex items-center space-x-2">
                    <img
                      src={arrow}
                      alt="arrow"
  className="mx-auto"
  style={{ height: '150px' }} 
                      />
                  
                  </Link>
{/* <img
  src={arrow}
  alt="Arrow"
  className="mx-auto"
  style={{ height: '150px' }} // Adjust as needed
/> */}

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-2xl md:text-4xl mb-6 tracking-tight leading-tight"
          style={{
            fontFamily: "'Press Start 2P', monospace",
          }}
        >
          <span style={{ color: 'rgba(174, 220, 226, 1)' }}>Code</span>{' '}
          <span style={{ color: 'rgba(84, 174, 144, 1)' }}>Crackers Club</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-md md:text-lg text-gray-300 mb-10 leading-relaxed "
        >
          Code Cracker Club Where Knowledge Flows, Everyone Grows.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Register Button */}
          <motion.a
            href="/register"
            className="px-6 py-3 font-bold rounded-md flex items-center justify-center text-black"
            style={{
              backgroundColor: 'rgba(174, 220, 226, 1)',
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            REGISTER
            <ChevronRight className="ml-2 h-5 w-5" />
          </motion.a>

          {/* Contact Us Button */}
          <motion.a
            href="/contact"
            className="px-6 py-3 font-bold rounded-md flex items-center justify-center text-black"
            style={{
              border: '2px solid rgba(84, 174, 144, 1)',
              color: 'rgba(84, 174, 144, 1)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            CONTACT US
            <ChevronRight className="ml-2 h-5 w-5" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
