'use client'
import React, { useState } from 'react';

const MobileSwiper: React.FC<{ cards: any[] }> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75 && currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (touchStart - touchEnd < -75 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="w-full">
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {cards.map((card, i) => (
            <div key={i} className="w-full flex-shrink-0 px-2">
              <div className="bg-white border-4 border-[#00a5f0] p-4 rounded-[2.5rem] shadow-[12px_12px_0px_0px_#00a5f0] h-full flex flex-col items-center gap-6">

                {/* Number Badge */}
                <div className="w-12 h-12 bg-[#00a5f0] text-white rounded-full flex items-center justify-center font-bold text-xl font-marker shadow-md">
                  {i + 1}
                </div>

                {/* Image */}
                <div className="w-full aspect-square rounded-xl overflow-hidden">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                </div>

                {/* Text Content */}
                <div className="text-center w-full">
                  <h3 className="text-2xl font-marker mb-3 text-[#00a5f0] leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#00a5f0] opacity-80 font-medium leading-relaxed">
                    {card.desc}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === currentIndex ? 'bg-[#00a5f0] w-8' : 'bg-[#00a5f0] opacity-30 w-2'
            }`}
          />
        ))}
      </div>

      {/* Swipe Hint */}
      <p className="text-center text-[#00a5f0] font-marker text-lg mt-4 opacity-70">
        ← Swipe to explore →
      </p>
    </div>
  );
};

export default MobileSwiper;
