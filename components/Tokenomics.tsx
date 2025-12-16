"use client"
import React, { useState } from 'react';
import { TOKENOMICS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

// Visualization data derived from constants
// Total: 1B. Staking 30M (3%), Game 10M (1%), Remainder (Liquidity) 960M (96%)
const CHART_DATA = [
  { label: "Liquidity", value: 96, color: "white" },
  { label: "Staking", value: 3, color: "#00A5F0" },
  { label: "Game Rewards", value: 1, color: "gold" }
];

const PieChart: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    let accumulatedPercent = 0;

    const activeItem = activeIndex !== null ? CHART_DATA[activeIndex] : null;

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
                {/* SVG Chart */}
                <svg viewBox="0 0 200 200" className="transform -rotate-90 w-full h-full drop-shadow-2xl overflow-visible">
                    {CHART_DATA.map((slice, index) => {
                        const strokeDasharrayVal = (slice.value / 100) * circumference;

                        // Update accumulator for next slice
                        const currentOffset = accumulatedPercent;
                        accumulatedPercent += slice.value;

                        const isActive = activeIndex === index;
                        const isDimmed = activeIndex !== null && activeIndex !== index;

                        return (
                            <motion.circle
                                key={index}
                                cx="100"
                                cy="100"
                                r={radius}
                                fill="transparent"
                                stroke={slice.color}
                                strokeLinecap="butt"
                                strokeDashoffset={-((currentOffset / 100) * circumference)}

                                // Event Handlers
                                onMouseEnter={() => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}

                                // Animations
                                initial={{ strokeDasharray: `0 ${circumference}` }}
                                animate={{
                                    strokeDasharray: `${strokeDasharrayVal} ${circumference}`,
                                    strokeWidth: isActive ? 50 : 40,
                                    opacity: isDimmed ? 0.3 : 1,
                                    scale: isActive ? 1.05 : 1
                                }}
                                transition={{
                                    strokeDasharray: { duration: 1.5, delay: index * 0.3, ease: "circOut" },
                                    strokeWidth: { duration: 0.3, type: "spring" },
                                    opacity: { duration: 0.3 },
                                    scale: { duration: 0.3 }
                                }}

                                className="cursor-pointer origin-center"
                            />
                        );
                    })}
                </svg>

                {/* Center Donut Hole Content */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                        className="bg-[#ADD8E6] rounded-full w-[50%] h-[50%] border-4 border-[#00A5F0] flex items-center justify-center shadow-inner z-10 overflow-hidden"
                    >
                        <AnimatePresence mode="wait">
                            {activeItem ? (
                                <motion.div
                                    key="active"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-center flex flex-col items-center justify-center px-2"
                                >
                                    <span className="text-3xl sm:text-4xl font-marker text-[#006666] leading-none">{activeItem.value}%</span>
                                    <span className="text-xs sm:text-sm font-bold text-[#00A5F0] uppercase tracking-wider mt-1">{activeItem.label}</span>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="default"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-center"
                                >
                                    <span className="text-2xl sm:text-3xl font-marker text-[#006666]">100%</span>
                                    <span className="block text-[0.6rem] font-bold text-[#00A5F0] uppercase tracking-wider">COMMUNITY</span>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>

            {/* Interactive Legend */}
            <div className="mt-8 flex flex-wrap justify-center gap-4">
                {CHART_DATA.map((item, i) => {
                    const isDimmed = activeIndex !== null && activeIndex !== i;
                    const isActive = activeIndex === i;

                    return (
                        <motion.div
                            key={i}
                            onMouseEnter={() => setActiveIndex(i)}
                            onMouseLeave={() => setActiveIndex(null)}
                            animate={{
                                opacity: isDimmed ? 0.4 : 1,
                                scale: isActive ? 1.1 : 1,
                            }}
                            className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border-2 border-[#00A5F0] shadow-sm cursor-pointer transition-colors hover:bg-white"
                        >
                            <div className="w-4 h-4 rounded-full border border-black/10" style={{ backgroundColor: item.color }}></div>
                            <span className="font-marker text-[#00A5F0] text-sm sm:text-base">
                                {item.label}
                                <span className="opacity-60 text-xs font-sans font-bold ml-1">({item.value}%)</span>
                            </span>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

const Tokenomics: React.FC = () => {
  return (
    <section id="tokenomics" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#006666]/10 scroll-mt-32">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-6xl font-marker text-center mb-16 flex items-center justify-center">
            <span className="text-white text-shadow-teal flex">
                {'TOKENOMICS'.split('').map((letter, index) => (
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
                    {letter}
                    </motion.span>
                ))}
            </span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">

            {/* Left Column: Pie Chart & Legend */}
            <div className="flex-1 w-full flex justify-center lg:justify-start">
                <PieChart />
            </div>

            {/* Right Column: Stats Grid */}
            <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {TOKENOMICS.map((stat, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[#ADD8E6] border-4 border-[#00A5F0] p-6 lg:p-8 rounded-[2rem] text-center shadow-[8px_8px_0px_0px_#00A5F0] hover:transform hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#00A5F0] transition-all duration-300 relative group overflow-hidden"
                    >
                        {/* Shine Effect */}
                        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-[#00A5F0]/20 to-transparent skew-x-12 group-hover:left-[100%] transition-all duration-1000 ease-in-out"></div>

                        <h3 className="text-lg font-bold mb-2 opacity-80 uppercase tracking-widest text-[#005555]">{stat.label}</h3>
                        <p className="text-2xl lg:text-3xl font-marker text-[#00A5F0] break-words">{stat.value}</p>
                    </motion.div>
                ))}
            </div>

        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
