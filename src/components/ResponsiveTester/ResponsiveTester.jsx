import React, { useState } from 'react';

const devices = [
  { label: 'Desktop', w: 1200, h: 700, icon: '🖥️' },
  { label: 'Tablet', w: 768, h: 1024, icon: '📱' },
  { label: 'Mobile', w: 375, h: 700, icon: '📱' },
  { label: 'Large Desktop', w: 1440, h: 900, icon: '🖥️' },
  { label: 'Small Mobile', w: 320, h: 568, icon: '📱' },
];

const layouts = [
  {
    label: 'Flexbox Row',
    html: `<div class="flex-demo"><div>A</div><div>B</div><div>C</div></div>`,
    css: `.flex-demo { display: flex; gap: 1rem; background: #f3f4f6; padding: 1rem; border-radius: 1rem; }\n.flex-demo > div { background: #2563eb; color: #fff; padding: 1.5rem 2rem; border-radius: 0.75rem; font-size: 1.2rem; font-weight: bold; }`
  },
  {
    label: 'Flexbox Column',
    html: `<div class="flex-demo-col"><div>1</div><div>2</div><div>3</div></div>`,
    css: `.flex-demo-col { display: flex; flex-direction: column; gap: 1rem; background: #f3f4f6; padding: 1rem; border-radius: 1rem; }\n.flex-demo-col > div { background: #fbbf24; color: #18181b; padding: 1.5rem 2rem; border-radius: 0.75rem; font-size: 1.2rem; font-weight: bold; }`
  },
  {
    label: 'CSS Grid',
    html: `<div class="grid-demo"><div>1</div><div>2</div><div>3</div><div>4</div></div>`,
    css: `.grid-demo { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; background: #f3f4f6; padding: 1rem; border-radius: 1rem; }\n.grid-demo > div { background: #22c55e; color: #fff; padding: 1.5rem 2rem; border-radius: 0.75rem; font-size: 1.2rem; font-weight: bold; text-align: center; }`
  },
  {
    label: 'Responsive Grid',
    html: `<div class="responsive-grid"><div>Header</div><div>Sidebar</div><div>Main</div><div>Footer</div></div>`,
    css: `.responsive-grid { display: grid; grid-template-columns: 1fr 3fr; grid-template-rows: auto 1fr auto; gap: 1rem; background: #f3f4f6; padding: 1rem; border-radius: 1rem; min-height: 300px; }\n.responsive-grid > div { background: #8b5cf6; color: #fff; padding: 1rem; border-radius: 0.5rem; font-weight: bold; }\n.responsive-grid > div:nth-child(1) { grid-column: 1 / -1; background: #ef4444; }\n.responsive-grid > div:nth-child(4) { grid-column: 1 / -1; background: #64748b; }`
  },
];

const ResponsiveTester = () => {
  const [device, setDevice] = useState(0);
  const [orientation, setOrientation] = useState('portrait');
  const [layout, setLayout] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [media, setMedia] = useState(true);
  const [copied, setCopied] = useState(false);
  
  const d = devices[device];
  const w = orientation === 'portrait' ? d.w : d.h;
  const h = orientation === 'portrait' ? d.h : d.w;
  const html = layouts[layout].html;
  const css = layouts[layout].css + (media ? `\n@media (max-width: 600px) {\n  .flex-demo, .flex-demo-col, .grid-demo, .responsive-grid { font-size: 0.9rem; padding: 0.5rem; }\n  .responsive-grid { grid-template-columns: 1fr; }\n}` : '');
  
  function copyCode() {
    navigator.clipboard.writeText(`HTML:\n${html}\n\nCSS:\n${css}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }
  
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 8, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Responsive Layout Tester</h2>
        <p style={{ color: '#64748b', fontSize: 16 }}>Preview layouts at different device sizes and test responsive behavior</p>
      </div>
      
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 24, marginBottom: 24 }}>
        <h3 style={{ fontSize: 20, marginBottom: 16, color: '#1e293b' }}>⚙️ Device & Layout Controls</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
              📱 Device Type
            </label>
            <select 
              value={device} 
              onChange={e => setDevice(Number(e.target.value))}
              style={{ 
                width: '100%', 
                padding: '10px 12px', 
                borderRadius: 8, 
                border: '1px solid #d1d5db', 
                fontSize: 14,
                background: 'white'
              }}
            >
              {devices.map((d, i) => (
                <option key={i} value={i}>{d.icon} {d.label} ({d.w}×{d.h})</option>
              ))}
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
              🔄 Orientation
            </label>
            <select 
              value={orientation} 
              onChange={e => setOrientation(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '10px 12px', 
                borderRadius: 8, 
                border: '1px solid #d1d5db', 
                fontSize: 14,
                background: 'white'
              }}
            >
              <option value="portrait">📱 Portrait</option>
              <option value="landscape">🖥️ Landscape</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
              🎨 Layout Type
            </label>
            <select 
              value={layout} 
              onChange={e => setLayout(Number(e.target.value))}
              style={{ 
                width: '100%', 
                padding: '10px 12px', 
                borderRadius: 8, 
                border: '1px solid #d1d5db', 
                fontSize: 14,
                background: 'white'
              }}
            >
              {layouts.map((l, i) => (
                <option key={i} value={i}>{l.label}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
              📱 Media Queries
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input 
                type="checkbox" 
                checked={media} 
                onChange={e => setMedia(e.target.checked)}
                style={{ width: 18, height: 18 }}
              />
              <span style={{ fontSize: 14, color: '#64748b' }}>Enable responsive behavior</span>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 24, marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h3 style={{ fontSize: 20, color: '#1e293b' }}>📱 Device Preview</h3>
          <div style={{ fontSize: 14, color: '#64748b' }}>
            {w} × {h}px
          </div>
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 400,
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
          borderRadius: 12,
          padding: 24,
          border: '2px dashed #e2e8f0'
        }}>
          <div style={{ 
            background: '#1e293b', 
            borderRadius: 12, 
            padding: 8, 
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            position: 'relative'
          }}>
            {/* Device frame */}
            <div style={{ 
              width: w, 
              height: h, 
              background: '#f3f4f6', 
              borderRadius: 8, 
              overflow: 'auto',
              border: '1px solid #374155',
              position: 'relative'
            }}>
              <div 
                dangerouslySetInnerHTML={{ __html: `<style>${css}</style>${html}` }} 
                style={{ width: '100%', height: '100%' }} 
              />
            </div>
            
            {/* Device info */}
            <div style={{ 
              position: 'absolute', 
              top: -30, 
              left: '50%', 
              transform: 'translateX(-50%)',
              background: '#1e293b',
              color: 'white',
              padding: '4px 12px',
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 500
            }}>
              {d.icon} {d.label} - {w}×{h}
            </div>
          </div>
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
            onClick={copyCode}
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
            📋 Copy Code
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
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', color: '#94a3b8' }}>{html}</pre>
            <div style={{ marginTop: 16, marginBottom: 12, color: '#fbbf24', fontWeight: 600 }}>🎨 CSS:</div>
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', color: '#94a3b8' }}>{css}</pre>
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

export default ResponsiveTester;
