import React, { useState } from 'react';
import { cardPresets, uiPresets } from '../../presets';

const Gallery = () => {
  const [tab, setTab] = useState('cards');
  const [search, setSearch] = useState('');
  const presets = tab === 'cards' ? cardPresets : uiPresets;
  const filtered = presets.filter(p => p.label.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 8, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>UI Component Gallery</h2>
        <p style={{ color: '#64748b', fontSize: 16 }}>Explore and copy beautiful UI components for your projects</p>
      </div>
      
      <div style={{ 
        display: 'flex', 
        gap: 16, 
        marginBottom: 24, 
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <div style={{ display: 'flex', gap: 8, background: '#f8fafc', padding: 4, borderRadius: 12 }}>
          <button 
            onClick={() => setTab('cards')} 
            className={`custom-tool-btn${tab==='cards' ? ' active' : ''}`}
          >
            🎴 Cards
          </button>
          <button 
            onClick={() => setTab('buttons')} 
            className={`custom-tool-btn${tab==='buttons' ? ' active' : ''}`}
          >
            🔘 Buttons
          </button>
        </div>
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Search components..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ 
              padding: '10px 16px 10px 40px', 
              borderRadius: 12, 
              border: '1px solid #e2e8f0', 
              fontSize: 16,
              width: 250,
              background: 'white',
              boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}
          />
          <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#64748b' }}>🔍</span>
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
        {filtered.length === 0 && (
          <div style={{ 
            gridColumn: '1/-1', 
            textAlign: 'center',
            padding: 48,
            color: '#64748b',
            background: '#f8fafc',
            borderRadius: 12,
            border: '2px dashed #e2e8f0'
          }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <div style={{ fontSize: 18, fontWeight: 500 }}>No components found</div>
            <div>Try adjusting your search terms</div>
          </div>
        )}
        {filtered.map((preset, i) => (
          <GalleryCard key={i} preset={preset} type={tab} />
        ))}
      </div>
    </div>
  );
};

function GalleryCard({ preset, type }) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const html = preset.html;
  const css = preset.css;
  
  function copy(text) {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }
  
  return (
    <div style={{ 
      background: 'white', 
      borderRadius: 16, 
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)', 
      padding: 24, 
      position: 'relative', 
      minHeight: 280,
      border: '1px solid #f1f5f9',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    }}
    onMouseEnter={e => e.target.style.transform = 'translateY(-4px)'}
    onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
    >
      <div style={{ 
        marginBottom: 16, 
        fontWeight: 600, 
        fontSize: 18,
        color: '#1e293b',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
        <span style={{ fontSize: 20 }}>{type === 'cards' ? '🎴' : '🔘'}</span>
        {preset.label}
      </div>
      
      <div style={{ 
        background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', 
        borderRadius: 12, 
        padding: 24, 
        minHeight: 120, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginBottom: 16,
        border: '1px solid #e2e8f0'
      }}>
        <div dangerouslySetInnerHTML={{ __html: `<style>${css}</style>${html}` }} />
      </div>
      
      <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
        <button 
          onClick={() => setShowCode(s => !s)} 
          style={{ 
            fontSize: 14, 
            background: showCode ? '#64748b' : '#2563eb', 
            color: 'white', 
            border: 'none', 
            borderRadius: 8, 
            padding: '8px 16px', 
            cursor: 'pointer',
            fontWeight: 500,
            transition: 'all 0.2s ease'
          }}
        >
          {showCode ? '👁️ Hide Code' : '💻 Show Code'}
        </button>
        <button 
          onClick={() => copy(html)} 
          style={{ 
            fontSize: 14, 
            background: '#fbbf24', 
            color: '#18181b', 
            border: 'none', 
            borderRadius: 8, 
            padding: '8px 16px', 
            cursor: 'pointer',
            fontWeight: 500,
            transition: 'all 0.2s ease'
          }}
        >
          📋 Copy HTML
        </button>
        <button 
          onClick={() => copy(css)} 
          style={{ 
            fontSize: 14, 
            background: '#10b981', 
            color: 'white', 
            border: 'none', 
            borderRadius: 8, 
            padding: '8px 16px', 
            cursor: 'pointer',
            fontWeight: 500,
            transition: 'all 0.2s ease'
          }}
        >
          🎨 Copy CSS
        </button>
      </div>
      
      {copied && (
        <div style={{ 
          position: 'absolute', 
          top: 16, 
          right: 16,
          background: '#10b981',
          color: 'white',
          padding: '8px 12px',
          borderRadius: 8,
          fontSize: 12,
          fontWeight: 500,
          animation: 'fadeInOut 1.2s ease'
        }}>
          ✅ Copied!
        </div>
      )}
      
      {showCode && (
        <div style={{ 
          background: '#1e293b', 
          borderRadius: 12, 
          padding: 16, 
          fontFamily: 'monospace', 
          fontSize: 13,
          marginTop: 16,
          color: '#e2e8f0',
          border: '1px solid #334155'
        }}>
          <div style={{ marginBottom: 12, color: '#fbbf24', fontWeight: 600 }}>📄 HTML:</div>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap', color: '#94a3b8' }}>{html}</pre>
          <div style={{ marginTop: 16, marginBottom: 12, color: '#fbbf24', fontWeight: 600 }}>🎨 CSS:</div>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap', color: '#94a3b8' }}>{css}</pre>
        </div>
      )}
      
      <style>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; transform: translateY(-10px); }
          20%, 80% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default Gallery;
