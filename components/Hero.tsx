'use client'
import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { CA_ADDRESS, SOCIALS } from '@/constants';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to center of element (range -0.5 to 0.5)
    const mouseXPos = (e.clientX - rect.left) / width - 0.5;
    const mouseYPos = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseXPos);
    y.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Get the first touch point
    const touch = e.touches[0];
    if (!touch) return;

    // Calculate touch position relative to center of element (range -0.5 to 0.5)
    const touchXPos = (touch.clientX - rect.left) / width - 0.5;
    const touchYPos = (touch.clientY - rect.top) / height - 0.5;

    x.set(touchXPos);
    y.set(touchYPos);
  };

  const handleTouchEnd = () => {
    x.set(0);
    y.set(0);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(CA_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-6 overflow-hidden pt-32 lg:pt-24">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center z-10 px-4 sm:px-6">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left"
        >
          <div className="inline-block bg-[#f4b849] text-[white] px-4 py-1 rounded-full text-lg font-bold shadow-[4px_4px_0px_0px_#00a5f0] transform -rotate-2">
            Say hello to
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-marker text-[white] tracking-tighter flex items-center justify-center lg:justify-start">
            {'$SHRIMP'.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 200,
                  damping: 12
                }}
                className="inline-block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </h1>

          <h2 className="text-2xl font-bold lg:text-3xl opacity-90 max-w-lg mx-auto lg:mx-0 tracking-tighter text-[white]">
            The ocean's most undervalued crustacean is finally taking over the blockchain.
          </h2>

          {/* Ticker Field */}
          <div className="flex items-center justify-center lg:justify-start gap-4 flex-wrap">
            <div
              onClick={handleCopy}
              className="group cursor-pointer bg-white hover:bg-white/80 border-4 border-[#00608b]/90 rounded-2xl p-4 flex items-center gap-3 transition-all duration-300 shadow-[6px_6px_0px_0px_#00a5f0]"
            >
              <span className="text-[#00608b]/50 font-mono font-bold text-lg truncate max-w-[200px] sm:max-w-xs select-none">
                {CA_ADDRESS}
              </span>
              <div className="bg-[#00608b] p-2 rounded-lg text-[#ADD8E6]">
                {copied ? <Check size={20} /> : <Copy size={20} />}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-6 mt-8">
            {SOCIALS.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="bg-[white] text-[#00a5f0] border border-[#00a5f0] p-4 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Content - 3D Effect Image */}
        <div className="flex justify-center perspective-1000">
          <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d"
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="cursor-pointer relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[800px] aspect-square"
          >
             {/* The Card/Video Container */}
             <div className="absolute inset-0 object-fill transform transition-transform duration-100 ease-out">
                 <video
                   src="/out.mp4"
                   autoPlay
                   loop
                   muted
                   playsInline
                   crossOrigin="anonymous"
                   className="object-cover w-full h-full pointer-events-none"
                   style={{
                     pointerEvents: 'none',
                     mixBlendMode: 'screen',
                     WebkitBackdropFilter: 'brightness(0.8) contrast(1.2)',
                     backdropFilter: 'brightness(0.8) contrast(1.2)'
                   }}
                 />
                 <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-transparent via-transparent to-[#00a5f0]/10"></div>
             </div>

             {/* Floating Elements for extra depth */}
             {/* <motion.div
                style={{ translateX: useTransform(mouseX, [-0.5, 0.5], [-20, 20]), translateY: useTransform(mouseY, [-0.5, 0.5], [-20, 20]) }}
                className="absolute -top-6 -right-6 bg-white border-4 border-[#00a5f0] px-4 py-2 rounded-xl shadow-lg z-20 pointer-events-none"
             >
                <span className="font-marker text-2xl text-[#008080]">★ WOW</span>
             </motion.div> */}

             <motion.div
                style={{ translateX: useTransform(mouseX, [-0.5, 0.5], [20, -20]), translateY: useTransform(mouseY, [-0.5, 0.5], [20, -20]) }}
                className="absolute bottom-10 -left-6 bg-[#00a5f0] text-[white] border-4 border-white px-4 py-2 rounded-xl shadow-lg z-20 pointer-events-none"
             >
                <span className="font-marker text-xl">SO SHRIMPY</span>
             </motion.div>

          </motion.div>
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

export default Hero;
