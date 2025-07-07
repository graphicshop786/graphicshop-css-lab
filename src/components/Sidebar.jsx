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

const Sidebar = ({ setModule, module, darkMode, sidebarOpen, setSidebarOpen, isCollapsed, setIsCollapsed }) => {
  // Responsive: show/hide sidebar on mobile
  // On desktop, always visible
  // On mobile, only show if sidebarOpen
  return (
    <aside
      className={`custom-sidebar${isCollapsed ? ' custom-sidebar-collapsed' : ''}${darkMode ? ' dark' : ''} responsive-sidebar`}
      style={{
        left: 0,
        top: 0,
        height: '100vh',
        zIndex: 100,
        position: 'fixed',
        transform: 'translateX(0)',
        transition: 'transform 0.3s',
        ...(window.innerWidth <= 1024
          ? {
              transform: sidebarOpen ? 'translateX(0)' : 'translateX(-110%)',
              boxShadow: sidebarOpen ? '0 0 0 9999px rgba(0,0,0,0.2)' : 'none',
              position: 'fixed',
              width: '80vw',
              maxWidth: 320,
              minWidth: 220,
              background: darkMode ? '#111827' : '#fff',
            }
          : {
              position: 'static',
              width: isCollapsed ? 64 : 256,
              minWidth: isCollapsed ? 64 : 256,
              maxWidth: isCollapsed ? 64 : 256,
              height: 'auto',
              boxShadow: 'none',
            }),
      }}
      tabIndex={-1}
      aria-label="Sidebar navigation"
    >
      {/* Close button for mobile */}
      {window.innerWidth <= 1024 && (
        <button
          className="custom-tool-btn"
          style={{ position: 'absolute', top: 12, right: 12, zIndex: 101 }}
          aria-label="Close sidebar"
          onClick={() => setSidebarOpen(false)}
        >
          <span style={{ fontSize: '1.5rem' }}>×</span>
        </button>
      )}
      {/* Toggle Button (desktop only) */}
      {window.innerWidth > 1024 && (
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="custom-sidebar-toggle"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          tabIndex={0}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setIsCollapsed(!isCollapsed); }}
          style={{ outline: 'none' }}
        >
          {isCollapsed ? <span aria-hidden>→</span> : <span aria-hidden>←</span>}
        </button>
      )}
      {/* Header */}
      <div className="custom-sidebar-header" style={isCollapsed ? { display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 60 } : {}}>
        {!isCollapsed ? (
          <div>
            <h1 className="custom-sidebar-title">🎨 Graphicshop</h1>
            <p className="custom-sidebar-desc">CSS Lab & Learning Platform</p>
          </div>
        ) : (
          <div style={{ textAlign: 'center', width: '100%' }}>
            <div style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🎨</div>
          </div>
        )}
      </div>
      {/* Navigation */}
      {!isCollapsed && (
        <nav className="custom-sidebar-nav" style={{ flex: 1 }}>
          {modules.map(m => (
            <button
              key={m.key}
              className={module === m.key ? 'active' : ''}
              onClick={() => {
                setModule(m.key);
                if (window.innerWidth <= 1024) setSidebarOpen(false);
              }}
              title={m.label}
            >
              <span style={{ fontSize: '1.1rem', marginRight: '0.5rem' }}>{m.icon}</span>
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{m.label.replace(/^[^\s]+\s/, '')}</span>
            </button>
          ))}
        </nav>
      )}
      {/* Footer */}
      {!isCollapsed && (
        <div className="custom-sidebar-footer">
          <div>Made with ❤️</div>
          <div>by graphicshop786</div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
