
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0">
      {/* Light mode background with spring.io inspired design */}
      <div className="dark:hidden">
        {/* Clean white primary background */}
        <div className="absolute inset-0 bg-white"></div>

        {/* Large geometric shapes in green and lime green tones - hidden on mobile */}
        {/* Diagonal arrangement */}
        <div className="hidden md:block absolute top-10 left-10 w-64 h-64 bg-green-400 rounded-full opacity-20 transform rotate-45"></div>
        <div className="hidden md:block absolute top-20 right-20 w-48 h-48 bg-lime-400 rounded-lg opacity-25 transform -rotate-12"></div>

        {/* Side-by-side arrangement */}
        <div className="hidden md:block absolute bottom-20 left-20 w-56 h-56 bg-green-300 rounded-full opacity-15"></div>
        <div className="hidden md:block absolute bottom-10 right-10 w-40 h-40 bg-lime-500 rounded-lg opacity-20 transform rotate-30"></div>

        {/* Semi-transparent light gray arc for depth */}
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-gray-200 rounded-full opacity-10"></div>

        {/* Additional geometric form - circle */}
        <div className="hidden md:block absolute top-32 right-32 w-32 h-32 bg-green-500 rounded-full opacity-15"></div>
      </div>

      {/* Dark mode background with default design and adjusted animated icons */}
      <div className="hidden dark:block">
        <div className="absolute inset-0 bg-light-bg dark:bg-dark-bg"></div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-emerald-900 via-gray-900 to-green-900 dark:from-emerald-900 dark:via-gray-900 dark:to-green-900 opacity-40 animate-gradient-bg"
          style={{ backgroundSize: '400% 400%' }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_rgba(255,255,255,0)_60%)]"></div>

        {/* Adjusted geometric shapes for dark mode visibility - hidden on mobile */}
        {/* Diagonal arrangement */}
        <div className="hidden md:block absolute top-10 left-10 w-64 h-64 bg-green-200 rounded-full opacity-10 transform rotate-45"></div>
        <div className="hidden md:block absolute top-20 right-20 w-48 h-48 bg-lime-200 rounded-lg opacity-15 transform -rotate-12"></div>

        {/* Side-by-side arrangement */}
        <div className="hidden md:block absolute bottom-20 left-20 w-56 h-56 bg-green-100 rounded-full opacity-8"></div>
        <div className="hidden md:block absolute bottom-10 right-10 w-40 h-40 bg-lime-300 rounded-lg opacity-12 transform rotate-30"></div>

        {/* Semi-transparent light gray arc for depth */}
        <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-4 border-gray-400 rounded-full opacity-5"></div>

        {/* Additional geometric form - circle */}
        <div className="hidden md:block absolute top-32 right-32 w-32 h-32 bg-green-300 rounded-full opacity-10"></div>
      </div>
    </div>
  );
};

export default AnimatedBackground;
