'use client';

import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      key="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-[#00a5f0] flex flex-col items-center justify-center overflow-hidden"
    >
        {/* Background Moving Strips */}
         <div className="absolute inset-0 opacity-10 pointer-events-none flex flex-col justify-between select-none">
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ x: i % 2 === 0 ? "100%" : "-100%" }}
                    animate={{ x: i % 2 === 0 ? "-100%" : "100%" }}
                    transition={{
                        repeat: Infinity,
                        duration: 15,
                        ease: "linear",
                    }}
                    className="whitespace-nowrap text-[15vw] font-marker leading-none text-white"
                >
                    SHRIMP MEME COIN SHRIMP MEME COIN
                </motion.div>
            ))}
        </div>

        {/* Main Text Reveal Animation */}
        <div className="overflow-hidden relative p-4 z-10">
            <motion.div
                initial={{ y: "150%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="flex items-center gap-4"
            >
                 <span className="text-8xl md:text-[10rem] font-marker text-white drop-shadow-2xl">
                    $SHRIMP
                 </span>
            </motion.div>
        </div>

        {/* Loading Bar */}
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "200px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="h-3 bg-white rounded-full mt-8 z-10"
        />

        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-4 font-marker text-white text-xl animate-pulse z-10"
        >
            LOADING THE OCEAN...
        </motion.p>

    </motion.div>
  );
};

export default LoadingScreen;
