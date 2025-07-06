import React from 'react';

const ThemeSwitcher = () => {
  const [dark, setDark] = React.useState(() => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);
  return (
    <button
      className={`fixed top-4 right-4 z-50 px-4 py-2 rounded-lg font-semibold shadow border transition-colors ${dark ? 'bg-gray-800 text-white border-gray-700 hover:bg-gray-700' : 'bg-white text-gray-900 border-blue-200 hover:bg-blue-100'}`}
      onClick={() => setDark(d => !d)}
      aria-label="Toggle dark mode"
    >
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default ThemeSwitcher;
