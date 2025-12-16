import React from 'react';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Utilities from '@/components/Utilities';
import Tokenomics from '@/components/Tokenomics';
import Games from '@/components/Games';
import Arts from '@/components/Arts';
import NFTs from '@/components/NFTs';

export default function Home() {
  return (
    <>
        <Hero />
        <Marquee />
        <Arts />
        <About />
        <Utilities />
        <Tokenomics />
        <Games />
        <NFTs />
    </>
  );
}
