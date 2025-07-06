import React from 'react';

const Header = () => (
  <header className="sticky top-0 z-30 w-full shadow-lg backdrop-blur bg-opacity-70 bg-white/80 dark:bg-gray-900/80 border-b border-blue-200 dark:border-gray-800" style={{backdropFilter:'blur(12px)'}}>
    <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
      <span className="text-2xl font-extrabold tracking-tight text-blue-600 select-none">🎨 Graphicshop CSS Lab</span>
      <span className="text-base text-gray-500 dark:text-gray-300">Learn & Practice Modern CSS</span>
    </div>
  </header>
);

export default Header;
