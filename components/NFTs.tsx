'use client'
import React from 'react';
import { motion } from 'framer-motion';

const NFTs: React.FC = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-[#008080] rounded-[3rem] p-8 sm:p-12 lg:p-24 text-center border-8 border-[#00a5f0] shadow-2xl relative overflow-hidden">

            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 text-9xl">?</div>
                <div className="absolute bottom-10 right-10 text-9xl">?</div>
            </div>

            <h2 className="text-6xl lg:text-8xl font-marker text-[#ADD8E6] mb-8 flex items-center justify-center">
              {'Shrimp NFTs'.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0, y: -20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    type: 'spring',
                    stiffness: 200,
                    damping: 12
                  }}
                  className="inline-block"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </h2>
            <div className="inline-block bg-[#ADD8E6] text-[#008080] px-6 py-2 rounded-full font-bold text-2xl animate-pulse">
                COMING SOON
            </div>
            <p className="text-[#ADD8E6] mt-8 text-xl max-w-2xl mx-auto">
                3,333 uniquely generated Shrimp with different hats, accessories, and shell colors. Get your wallets ready.
            </p>
        </div>
      </div>
    </section>
  );
};

export default NFTs;
