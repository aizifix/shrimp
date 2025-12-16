import React from 'react';
import { SOCIALS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#008080] text-[#ADD8E6] py-16 px-4 sm:px-6 lg:px-8 mt-12 rounded-t-[3rem]">
      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">

        <div className="text-center md:text-left">
            <h3 className="text-5xl font-marker mb-2">$SHRIMP</h3>
            <p className="opacity-80">© 2024 Shrimp Coin. All rights reserved.</p>
            <p className="text-xs mt-2 opacity-60 max-w-sm">
                This token is for entertainment purposes only. There is no expectation of financial return. Don't spend money you can't afford to lose.
            </p>
        </div>

        <div className="flex gap-6">
            {SOCIALS.map((social) => (
                <a
                    key={social.platform}
                    href={social.url}
                    className="p-3 bg-[#ADD8E6] text-[#008080] rounded-full hover:bg-white transition-colors"
                >
                    <social.icon size={20} />
                </a>
            ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
