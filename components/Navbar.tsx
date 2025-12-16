'use client'
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { CA_ADDRESS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Utilities', href: '#utilities' },
    { label: 'Tokenomics', href: '#tokenomics' },
    { label: 'Games', href: '#games' },
    { label: 'Arts', href: '#arts' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      setIsOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-6xl z-50">
      <div className="bg-[white] backdrop-blur-md border-4 border-[#00a5f0] rounded-full py-3 px-6 shadow-[0px_8px_0px_0px_rgba(0,128,128,0.4)] flex justify-between items-center relative">

        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-2xl sm:text-3xl font-marker text-[#00a5f0] hover:scale-105 transition-transform drop-shadow-sm flex items-center"
        >
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
              whileHover={{ scale: 1.2, y: -5 }}
              className="inline-block"
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-marker text-lg text-[#00a5f0] hover:text-[#00a5f0] hover:-translate-y-1 transition-all cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
           <button
             onClick={() => navigator.clipboard.writeText(CA_ADDRESS)}
             className="bg-[#00a5f0] text-[white] px-6 py-2 rounded-full font-bold font-marker border-2 border-[#00a5f0] hover:bg-white hover:text-[#00a5f0] hover:border-[#00a5f0] transition-all shadow-md"
           >
             Buy $SHRIMP
           </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#008080]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
            <div className="absolute top-full left-0 mt-4 w-full bg-[#ADD8E6] border-4 border-[#00a5f0] rounded-3xl p-6 lg:hidden flex flex-col gap-4 shadow-xl overflow-hidden">
            {links.map((link) => (
                <a
                key={link.label}
                href={link.href}
                className="font-marker text-2xl text-[#00a5f0] text-center py-2 hover:bg-[#00a5f0] rounded-xl cursor-pointer"
                onClick={(e) => handleNavClick(e, link.href)}
                >
                {link.label}
                </a>
            ))}
            <button
                onClick={() => {
                    navigator.clipboard.writeText(CA_ADDRESS);
                    setIsOpen(false);
                }}
                className="bg-[#00a5f0] text-[white] px-6 py-3 rounded-xl font-bold font-marker w-full mt-2 border-2 border-[#00a5f0]"
            >
                Copy CA
            </button>
            </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
