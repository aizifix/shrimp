'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Roadmap: React.FC = () => {
  const roadmapItems = [
    {
      phase: "I",
      title: "WEB & PLATFORM",
      items: [
        "Web Design",
        "Token Ticker Integration",
        "Token Buy Function",
        "Token Swap Platform integrated into the token ecosystem"
      ]
    },
    {
      phase: "II",
      title: "WEB GAME (TG GAME → WEB APP)",
      subtitle: "Game Style:",
      subdesc: "Telegram-style game adapted into a full Web App experience",
      flow: [
        "1. User connects wallet",
        "2. User pays a small token fee to play (fee is burned)",
        "3. $2 Entry Permit Ticket - Sent to Funding Wallet",
        "4. User plays the game",
        "5. User earns points, rank, and rewards",
        "6. Top players receive token rewards - Top 200 players will receive rewards"
      ]
    },
    {
      phase: "III",
      title: "STAKING SYSTEM",
      items: [
        "Total Staking Rewards Pool: 30,000,000 Tokens",
        "Users can stake their tokens",
        "Estimated Return: 0.3 PNL per day",
        "Staking Fee: $0.88 per staking action"
      ]
    },
    {
      phase: "IV",
      title: "REWARD FUNDING",
      items: [
        "Reward Portal Allocation: 10,000,000 Tokens",
        "Tokens distributed based on player ranking"
      ]
    },
    {
      phase: "V",
      title: "TOKEN PLANS & ECONOMICS",
      items: [
        "Dev Tokens: Locked",
        "Burn Mechanism enabled",
        "Healthy, transparent chart (anti-rug design)",
        "Bonding Curve implemented",
        "DEX Listing Paid and secured"
      ]
    },
    {
      phase: "VI",
      title: "OPTIONAL ADD-ONS / SUGGESTIONS",
      items: [
        "Daily & Weekly Leaderboards",
        "Anti-bot and anti-multi-wallet protection",
        "Season-based game resets with reward pools",
        "NFT-based boosts or cosmetic upgrades",
        "Referral system with capped rewards",
        "Treasury dashboard for public transparency",
        "Emergency pause / fail-safe smart contract controls"
      ]
    }
  ];

  return (
    <section id="roadmap" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#ADD8E6] to-[#00a5f0]/20 scroll-mt-32">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-marker text-white mb-4 flex items-center justify-center">
            {'ROADMAP'.split('').map((letter, index) => (
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
          </h2>
          <p className="text-[#00a5f0] text-xl font-semibold">Our journey to build the ultimate shrimp ecosystem</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roadmapItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white/90 backdrop-blur-sm rounded-[3rem] p-6 border-4 border-[#00a5f0] shadow-[8px_8px_0px_0px_#00a5f0] hover:shadow-[12px_12px_0px_0px_#00a5f0] transition-all duration-300 group overflow-hidden"
            >
              {/* Phase Badge */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#00a5f0] text-white rounded-full flex items-center justify-center font-marker text-2xl shadow-lg z-10">
                {item.phase}
              </div>

              {/* Content */}
              <div className="pt-8">
                <h3 className="text-2xl font-marker text-[#00a5f0] mb-4 leading-tight">
                  {item.title}
                </h3>

                {item.subtitle && (
                  <div className="mb-4">
                    <h4 className="text-lg font-bold text-[#00608b]">{item.subtitle}</h4>
                    <p className="text-[#00608b] text-sm italic">{item.subdesc}</p>
                  </div>
                )}

                {item.flow ? (
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold text-[#00608b] mb-2">Game Flow:</h4>
                    {item.flow.map((step, i) => (
                      <div key={i} className="text-sm text-[#00608b] leading-relaxed border-l-2 border-[#00a5f0] pl-3">
                        {step}
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="space-y-2">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="text-sm text-[#00608b] leading-relaxed flex items-start">
                        <span className="text-[#00a5f0] mr-2 mt-1">•</span>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Decorative broken grid lines */}
              <div className="absolute bottom-0 left-0 w-full h-2 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 400 20" preserveAspectRatio="none">
                  <path d="M0,10 Q100,5 200,15 T400,10" stroke="#00a5f0" strokeWidth="2" fill="none" strokeDasharray="5,5"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-[#00a5f0] text-white px-8 py-4 rounded-full font-marker text-2xl shadow-[4px_4px_0px_0px_#00608b]">
            🦐 MORE UPDATES COMING SOON 🦐
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

export default Roadmap;
