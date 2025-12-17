'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Marquee: React.FC = () => {
  return (
    <div className="w-full bg-[white] overflow-hidden py-8 border-y-4 border-[#00608b] transform -rotate-1 shadow-lg z-20 relative">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 20,
        }}
      >
        {[...Array(10)].map((_, i) => (
          <div key={i} className="flex items-center gap-8 mx-4">
            <span className="text-[#00608b] font-marker text-3xl lg:text-4xl uppercase tracking-wider">
              $SHRIMP
            </span>
            <span className="text-white text-2xl">🦐</span>
            <span className="text-[#00608b] font-marker text-3xl lg:text-4xl uppercase tracking-wider">
              DONT BE SHELLFISH
            </span>
            {/* <span className="text-white text-2xl">🦐</span> */}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
