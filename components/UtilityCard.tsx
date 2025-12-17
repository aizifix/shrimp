'use client'
import React, { useState, useRef, useEffect } from 'react';

const UtilityCard: React.FC<{
    title: string;
    desc: string;
    image: string;
    index: number;
}> = ({ title, desc, image, index }) => {
  const [isVisible, setIsVisible] = useState(true);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-20 scale-95'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-white border-4 border-[#00a5f0] p-5 lg:p-6 rounded-[2.5rem] shadow-[12px_12px_0px_0px_#00a5f0] w-full h-full flex flex-col lg:flex-row items-center gap-3 relative">

        {/* Number Badge */}
        <div className="w-12 h-12 lg:w-14 lg:h-14 lg:absolute lg:top-2 lg:right-2 lg:z-20 bg-[#00a5f0] text-white rounded-full flex items-center justify-center font-bold text-xl lg:text-2xl font-marker shadow-lg">
          {index + 1}
        </div>

        {/* Image */}
        <div className="w-full h-28 lg:w-48 lg:h-48 rounded-2xl overflow-hidden flex-shrink-0">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left flex-1">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-marker mb-3 text-[#00a5f0] leading-tight">
            {title}
          </h3>
          <p className="text-sm lg:text-base xl:text-lg text-[#00a5f0] opacity-80 font-medium leading-relaxed">
            {desc}
          </p>
        </div>

      </div>
    </div>
  );
};

export default UtilityCard;
