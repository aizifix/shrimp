'use client'
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative scroll-mt-32">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-[white] backdrop-blur-sm rounded-[3rem] p-6 sm:p-8 lg:p-16 border-4 border-[#00608b] shadow-[10px_10px_0px_0px_#00a5f0]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div>
                 <img
                    src="/about.png"
                    alt="About Shrimp"
                    className="w-full h-full object-cover"
                 />
              </div>
            </motion.div>

            {/* Right Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-[#00a5f0] text-6xl font-marker mb-8 flex items-center">
                {'About Us'.split('').map((letter, index) => (
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

              <div className="space-y-4 text-xl font-semibold text-[#00608b] leading-relaxed tracking-tighter">
                <p>
                  Born from the depths of the internet ocean, $SHRIMP is not just another fish in the sea. We are small, we are pink, and we are legion.
                </p>
                <p>
                  While the whales play their games, the shrimp clean up the mess. We are a community-driven token focused on memes, dreams, and high-protein streams.
                </p>
                <p>
                  Join the swarm. It's better down where it's wetter.
                </p>
              </div>

              <div className="pt-6">
                {/* <button className="bg-[#00a5f0] text-[white] px-8 py-3 rounded-xl font-bold text-xl border-4 border-[#00a5f0] hover:bg-white hover:text-[#00a5f0] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
                  Read Whitepaper
                </button> */}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
