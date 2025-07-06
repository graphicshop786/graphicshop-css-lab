import React, { useState } from 'react';

const modules = [
  { key: 'about', label: '👨‍💻 About Me', icon: '👨‍💻' },
  { key: 'editor', label: '💻 Code Editor', icon: '💻' },
  { key: 'gallery', label: '🎨 UI Gallery', icon: '🎨' },
  { key: 'animation', label: '⚡ Animation Zone', icon: '⚡' },
  { key: 'transition', label: '🔄 Transition Playground', icon: '🔄' },
  { key: 'responsive', label: '📱 Responsive Tester', icon: '📱' },
  { key: 'pseudo', label: '🎭 Pseudo-Classes', icon: '🎭' },
  { key: 'typography', label: '📝 Typography', icon: '📝' },
  { key: 'color', label: '🎨 Colors & Gradients', icon: '🎨' },
  { key: 'art', label: '🖼️ CSS Art', icon: '🖼️' },
  { key: 'utility', label: '🛠️ Utility Guide', icon: '🛠️' },
  { key: 'practice', label: '🏋️ Practice Zone', icon: '🏋️' },
  { key: 'tools', label: '🔧 Tools', icon: '🔧' },
  // --- Custom Tools and Learning Modules ---
  { key: 'quiz', label: '❓ Quiz', icon: '❓' },
  { key: 'daily', label: '📅 Daily Challenge', icon: '📅' },
  { key: 'portfolio', label: '📁 Portfolio Templates', icon: '📁' },
  { key: 'beginner', label: '🌱 Beginner Tasks', icon: '🌱' },
  { key: 'palette', label: '🎨 Color Palette', icon: '🎨' },
  { key: 'gradient', label: '🌈 Gradient Builder', icon: '🌈' },
  { key: 'tw2css', label: '🔄 Tailwind→CSS', icon: '🔄' },
  { key: 'download', label: '📦 Download ZIP', icon: '📦' },
  { key: 'codepen', label: '📤 Export to CodePen', icon: '📤' },
  { key: 'compare', label: '⚖️ Component Comparison', icon: '⚖️' },
];

const Sidebar = ({ setModule, module }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`${isCollapsed ? 'w-16' : 'w-64'} min-h-screen bg-white dark:bg-gray-900 border-r border-blue-100 dark:border-gray-800 p-4 flex flex-col gap-2 transition-all duration-300 relative`}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 bg-blue-600 text-white p-1 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-10"
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isCollapsed ? '→' : '←'}
      </button>

      {/* Header */}
      <div className="mb-6">
        {!isCollapsed ? (
          <div>
            <h1 className="text-xl font-bold text-blue-700 dark:text-blue-200 mb-2">🎨 Graphicshop</h1>
            <p className="text-xs text-gray-600 dark:text-gray-400">CSS Lab & Learning Platform</p>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-2xl">🎨</div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {modules.map(m => (
          <button
            key={m.key}
            className={`w-full text-left px-3 py-2.5 rounded-lg font-medium transition-all duration-200 group ${
              module === m.key 
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-200 shadow-sm' 
                : 'hover:bg-blue-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-300'
            }`}
            onClick={() => setModule(m.key)}
            title={isCollapsed ? m.label : undefined}
          >
            <div className="flex items-center gap-3">
              <span className="text-lg">{m.icon}</span>
              {!isCollapsed && (
                <span className="truncate">{m.label.replace(/^[^\s]+\s/, '')}</span>
              )}
            </div>
          </button>
        ))}
      </nav>

      {/* Footer */}
      {!isCollapsed && (
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
            <div className="mb-2">Made with ❤️</div>
            <div>by graphicshop786</div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
