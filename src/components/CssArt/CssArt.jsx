import React, { useState } from 'react';

const artPresets = [
  {
    label: 'Circle',
    html: '<div class="art-circle"></div>',
    css: `.art-circle { width: 100px; height: 100px; background: #2563eb; border-radius: 50%; margin: 0 auto; }`,
    desc: 'A simple CSS circle using border-radius.',
    icon: '⭕'
  },
  {
    label: 'Triangle',
    html: '<div class="art-triangle"></div>',
    css: `.art-triangle { width: 0; height: 0; border-left: 60px solid transparent; border-right: 60px solid transparent; border-bottom: 100px solid #fbbf24; margin: 0 auto; }`,
    desc: 'A triangle using CSS borders.',
    icon: '🔺'
  },
  {
    label: 'Heart',
    html: '<div class="art-heart"></div>',
    css: `.art-heart { width: 100px; height: 90px; position: relative; margin: 0 auto; }\n.art-heart::before, .art-heart::after { content: ""; position: absolute; top: 0; width: 100px; height: 90px; border-radius: 50px 50px 0 0; background: #ec4899; }\n.art-heart::before { left: 0; transform: rotate(-45deg); }\n.art-heart::after { right: 0; transform: rotate(45deg); }`,
    desc: 'A heart shape using ::before and ::after.',
    icon: '❤️'
  },
  {
    label: 'Blob',
    html: '<div class="art-blob"></div>',
    css: `.art-blob { width: 120px; height: 100px; background: linear-gradient(90deg,#2563eb,#fbbf24,#ec4899); border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; margin: 0 auto; }`,
    desc: 'A blob shape using border-radius.',
    icon: '🫧'
  },
  {
    label: 'CSS Loader (Spinner)',
    html: '<div class="art-spinner"></div>',
    css: `.art-spinner { width: 48px; height: 48px; border: 6px solid #f3f4f6; border-top: 6px solid #2563eb; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto; }\n@keyframes spin { to { transform: rotate(360deg); } }`,
    desc: 'A simple CSS spinner/loader.',
    icon: '🌀'
  },
  {
    label: 'Clip-Path Polygon',
    html: '<div class="art-clip"></div>',
    css: `.art-clip { width: 120px; height: 120px; background: #22c55e; clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%); margin: 0 auto; }`,
    desc: 'A pentagon using clip-path.',
    icon: '🔷'
  },
  {
    label: 'Mask Image',
    html: '<div class="art-mask"></div>',
    css: `.art-mask { width: 120px; height: 120px; background: linear-gradient(90deg,#2563eb,#fbbf24); mask-image: radial-gradient(circle at 60% 40%, #000 60%, transparent 100%); margin: 0 auto; }`,
    desc: 'A masked gradient using mask-image.',
    icon: '🎭'
  },
];

const CssArt = () => {
  const [tab, setTab] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const art = artPresets[tab];
  
  function copy(text) {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }
  
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 24 }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 8, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>CSS Art & Shapes</h2>
        <p style={{ color: '#64748b', fontSize: 16 }}>Create beautiful shapes and art using pure CSS</p>
      </div>
      
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 24, marginBottom: 24 }}>
        <h3 style={{ fontSize: 20, marginBottom: 16, color: '#1e293b' }}>🎨 Shape Gallery</h3>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
          {artPresets.map((a, i) => (
            <button 
              key={i} 
              onClick={() => setTab(i)} 
              style={{ 
                fontWeight: tab===i?700:400, 
                background: tab===i?'#2563eb':'#f8fafc',
                color: tab===i?'white':'#64748b',
                border: tab===i?'none':'1px solid #e2e8f0',
                fontSize: 14, 
                cursor: 'pointer', 
                padding: '8px 16px',
                borderRadius: 8,
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: 6
              }}
            >
              <span>{a.icon}</span>
              {a.label}
            </button>
          ))}
        </div>
        <div style={{ 
          color: '#64748b', 
          fontSize: 16,
          textAlign: 'center',
          padding: 12,
          background: '#f8fafc',
          borderRadius: 8,
          border: '1px solid #e2e8f0'
        }}>
          💡 {art.desc}
        </div>
      </div>
      
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 24, marginBottom: 24 }}>
        <h3 style={{ fontSize: 20, marginBottom: 16, color: '#1e293b' }}>👀 Live Preview</h3>
        <div style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', 
          borderRadius: 12, 
          padding: 48, 
          minHeight: 200, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          border: '2px dashed #e2e8f0'
        }}>
          <div dangerouslySetInnerHTML={{ __html: `<style>${art.css}</style>${art.html}` }} />
        </div>
      </div>
      
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 24 }}>
        <div style={{ display: 'flex', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
          <button 
            onClick={() => setShowCode(s => !s)} 
            style={{ 
              fontSize: 14, 
              background: showCode ? '#64748b' : '#2563eb', 
              color: 'white', 
              border: 'none', 
              borderRadius: 8, 
              padding: '10px 20px', 
              cursor: 'pointer',
              fontWeight: 500,
              transition: 'all 0.2s ease'
            }}
          >
            {showCode ? '👁️ Hide Code' : '💻 Show Code'}
          </button>
          <button 
            onClick={() => copy(art.html)} 
            style={{ 
              fontSize: 14, 
              background: '#fbbf24', 
              color: '#18181b', 
              border: 'none', 
              borderRadius: 8, 
              padding: '10px 20px', 
              cursor: 'pointer',
              fontWeight: 500,
              transition: 'all 0.2s ease'
            }}
          >
            📋 Copy HTML
          </button>
          <button 
            onClick={() => copy(art.css)} 
            style={{ 
              fontSize: 14, 
              background: '#10b981', 
              color: 'white', 
              border: 'none', 
              borderRadius: 8, 
              padding: '10px 20px', 
              cursor: 'pointer',
              fontWeight: 500,
              transition: 'all 0.2s ease'
            }}
          >
            🎨 Copy CSS
          </button>
          {copied && (
            <div style={{ 
              background: '#10b981',
              color: 'white',
              padding: '10px 20px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              animation: 'fadeInOut 1.2s ease'
            }}>
              ✅ Copied!
            </div>
          )}
        </div>
        
        {showCode && (
          <div style={{ 
            background: '#1e293b', 
            borderRadius: 12, 
            padding: 20, 
            fontFamily: 'monospace', 
            fontSize: 13,
            color: '#e2e8f0',
            border: '1px solid #334155'
          }}>
            <div style={{ marginBottom: 12, color: '#fbbf24', fontWeight: 600 }}>📄 HTML:</div>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', color: '#94a3b8' }}>{art.html}</pre>
            <div style={{ marginTop: 16, marginBottom: 12, color: '#fbbf24', fontWeight: 600 }}>🎨 CSS:</div>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', color: '#94a3b8' }}>{art.css}</pre>
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; transform: translateY(-10px); }
          20%, 80% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default CssArt;
