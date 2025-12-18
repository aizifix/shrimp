'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';

const Games: React.FC = () => {
  return (
    <section id="games" className="relative py-24 px-4 sm:px-6 lg:px-8 scroll-mt-32">
      <div className="container mx-auto max-w-7xl text-center">
        <h2 className="text-6xl text-[white] font-marker mb-12 flex items-center justify-center">
          {'Shrimp '.split('').map((letter, index) => (
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
          <span className="text-white text-shadow-teal">
            {'Arcade'.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0, y: -20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: (index + 7) * 0.08,
                  type: 'spring',
                  stiffness: 200,
                  damping: 12
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </span>
        </h2>

        <div className="relative bg-[#008080] rounded-[3rem] p-2 border-4 border-[#00a5f0] shadow-2xl overflow-hidden max-w-4xl mx-auto">
            {/* Screen Bezel */}
            <div className="bg-black rounded-[2.5rem] p-8 lg:p-16 relative overflow-hidden group cursor-pointer">

                {/* Game Screen Content */}
                <div className="absolute inset-0 opacity-40 bg-[url('/game.jpeg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>

                <div className="relative z-10 flex flex-col items-center justify-center py-12">
                    <motion.div
                        animate={{ rotate: [0, -10, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-white mb-6"
                    >
                        <Gamepad2 size={80} />
                    </motion.div>
                    <h3 className="text-white text-4xl font-marker mb-4">Shrimp P2E</h3>
                    <p className="text-gray-300 text-xl max-w-xl mx-auto mb-8 leading-relaxed">
                        Connect Wallet • Pay Entry Fee (Burned) • Rank Up<br/>
                        <span className="text-[#ADD8E6] mt-2 block font-bold">
                            Top 200 players share the 10,000,000 $SHRIMP Reward Pool!
                        </span>
                    </p>
                    <a href="https://shrimpcoin.base44.app" target="_blank" rel="noopener noreferrer" className="bg-[#00a5f0] text-[white] px-8 py-3 rounded-xl font-bold text-xl border-4 border-[#00a5f0] cursor-pointer inline-block">
                        Enter Now!
                    </a>
                </div>

                {/* Scanlines Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 bg-[length:100%_4px] pointer-events-none"></div>
            </div>
        </div>
      </div>

      {/* Wave Border */}
      <div className="absolute bottom-0 left-0 w-full h-3 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,100 600,20 900,60 L1200,60" fill="none" stroke="#00a5f0" strokeWidth="2"/>
        </svg>
      </div>
    </section>
  );
};

export default Games;
