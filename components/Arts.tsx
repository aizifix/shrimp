'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { ART_IMAGES_ROW_1, ART_IMAGES_ROW_2, ART_IMAGES_ROW_3 } from '../constants';

const ImageRow: React.FC<{ images: string[]; direction: 'left' | 'right'; speed?: number }> = ({ images, direction, speed = 20 }) => {
    // Duplicate array to ensure seamless loop
    const displayImages = [...images, ...images, ...images];

    return (
        <div className="flex overflow-hidden py-4">
            <motion.div
                className="flex gap-4"
                initial={{ x: direction === 'left' ? 0 : -1000 }}
                animate={{ x: direction === 'left' ? -1000 : 0 }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
            >
                {displayImages.map((src, idx) => (
                    <div key={idx} className="min-w-[200px] h-[200px] sm:min-w-[300px] sm:h-[300px] rounded-2xl overflow-hidden border-4 border-[#00a5f0] shadow-md bg-white flex-shrink-0">
                        <img src={src} alt={`Art ${idx}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const Arts: React.FC = () => {
  return (
    <section id="arts" className="relative py-24 bg-white/30 backdrop-blur-sm overflow-hidden scroll-mt-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12 max-w-7xl">
             <h2 className="text-6xl text-white font-marker text-center flex items-center justify-center">
               {'Community '.split('').map((letter, index) => (
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
                 {'Arts'.split('').map((letter, index) => (
                   <motion.span
                     key={index}
                     initial={{ opacity: 0, scale: 0, y: -20 }}
                     whileInView={{ opacity: 1, scale: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{
                       duration: 0.5,
                       delay: (index + 10) * 0.08,
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
        </div>

        <div className="flex flex-col gap-6">
            <ImageRow images={ART_IMAGES_ROW_1} direction="left" speed={30} />
            <ImageRow images={ART_IMAGES_ROW_2} direction="right" speed={35} />
            <ImageRow images={ART_IMAGES_ROW_3} direction="left" speed={25} />
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

export default Arts;
