'use client'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const UtilityCard: React.FC<{
    title: string;
    desc: string;
    image: string;
    index: number;
    range: [number, number];
    progress: MotionValue<number>;
}> = ({ title, desc, image, index, range, progress }) => {

  // Transform logic for the card behavior

  // Fade in/out logic
  const opacity = useTransform(progress,
    [range[0] - 0.1, range[0], range[1], range[1] + 0.1],
    [0, 1, 1, 0]
  );

  // Scale logic
  const scale = useTransform(progress,
    [range[0], range[1]],
    [0.9, 1]
  );

  // X position slide
  // Using percentages for better responsiveness on wide cards
  const x = useTransform(progress,
    [range[0] - 0.2, range[0], range[1], range[1] + 0.2],
    ['50%', '0%', '0%', '-50%']
  );

  // Rotate slightly for style
  const rotate = useTransform(progress, range, [index % 2 === 0 ? 2 : -2, 0]);

  return (
    <motion.div
      style={{ opacity, x, rotate, scale }}
      className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none px-4 lg:px-8"
    >
        <div className="bg-white border-4 border-[#00a5f0] p-6 lg:p-12 rounded-[3rem] shadow-[16px_16px_0px_0px_#00a5f0] max-w-4xl w-full mx-auto pointer-events-auto flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">

            {/* Left Side: Text */}
            <div className="flex-1 flex flex-col items-start text-left w-full">
                <div className="w-16 h-16 bg-[#00a5f0] text-[white] rounded-full flex items-center justify-center font-bold text-3xl font-marker shadow-md mb-6">
                    {index + 1}
                </div>

                <h3 className="text-4xl lg:text-6xl font-marker mb-6 text-[#00a5f0] leading-tight">{title}</h3>
                <p className="text-xl lg:text-2xl text-[#00a5f0] opacity-80 font-medium leading-relaxed max-w-xl">{desc}</p>
            </div>

            {/* Right Side: Image */}
            <div className="flex-1 w-full">
                 <div className="w-full h-full">
                    <img src={image} alt={title} className="w-full h-full object-cover" />
                </div>
            </div>

        </div>
    </motion.div>
  );
};

const Utilities: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const cards = [
    {
        title: "Token Swap Platform",
        desc: "Integrated DEX platform built directly into the $SHRIMP ecosystem. Swap tokens seamlessly with a native, secure trading experience designed for the swarm.",
        image: "/3.png"
    },
    {
        title: "Staking System",
        desc: "Stake your $SHRIMP and earn rewards from a 30,000,000 token pool. Get an estimated 0.3% daily PNL returns. Staking fee: $0.88 per action.",
        image: "/4.png"
    },
    {
        title: "Web Game & Rewards",
        desc: "Play our Telegram-style web game! Pay a $2 entry permit fee to compete. Top 200 players share rewards from a 10,000,000 token reward pool based on ranking.",
        image: "/5.png"
    },
    {
        title: "Burn Protocol",
        desc: "Deflationary mechanics in action. All game entry fees and staking fees are automatically burned, reducing token supply and increasing value for holders.",
        image: "/6.png"
    },
  ];

  return (
    <section id="utilities" ref={containerRef} className="h-[400vh] relative">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden bg-[#ADD8E6]">

        {/* Background Title Faded */}
        <div className="absolute top-32 lg:top-40 w-full text-center z-0 pointer-events-none">
             <h2 className="text-5xl lg:text-[10rem] font-marker opacity-10 leading-none flex items-center justify-center">
               {'UTILITIES'.split('').map((letter, index) => (
                 <motion.span
                   key={index}
                   initial={{ opacity: 0, scale: 0, y: -20 }}
                   whileInView={{ opacity: 0.1, scale: 1, y: 0 }}
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
        </div>

        {/* Scroll Prompt */}
         <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
            className="absolute bottom-10 font-marker text-xl animate-bounce z-10"
         >
            Scroll Down to Flip Cards ↓
         </motion.div>

        {/* Cards Container */}
        <div className="relative w-full max-w-5xl h-[800px] lg:h-[600px] flex items-center justify-center mt-8 px-4 sm:px-6">
            {cards.map((card, i) => {
                // Calculate range for each card.
                const step = 1 / cards.length;
                const range: [number, number] = [i * step, (i + 1) * step];

                return (
                    <UtilityCard
                        key={i}
                        index={i}
                        title={card.title}
                        desc={card.desc}
                        image={card.image}
                        range={range}
                        progress={scrollYProgress}
                    />
                );
            })}
        </div>

      </div>
    </section>
  );
};

export default Utilities;
