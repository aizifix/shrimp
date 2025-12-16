'use client'
import React from 'react';
import dynamic from 'next/dynamic';

const UtilityCard = dynamic(() => import('./UtilityCard'), { ssr: false });
const MobileSwiper = dynamic(() => import('./MobileSwiper'), { ssr: false });

const Utilities: React.FC = () => {
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
    <section id="utilities" className="relative py-24 lg:py-40 bg-[#ADD8E6] snap-start snap-always overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Background Title Faded */}
        <div className="relative mb-16 lg:mb-24">
          <h2 className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-marker text-[white] text-center leading-none">
            UTILITIES
          </h2>
        </div>

        {/* Mobile Swiper (visible on mobile and tablet) */}
        <div className="lg:hidden">
          <MobileSwiper cards={cards} />
        </div>

        {/* Desktop Grid - 2x2 Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-16">
          {cards.map((card, i) => (
            <UtilityCard
              key={i}
              index={i}
              title={card.title}
              desc={card.desc}
              image={card.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Utilities;
