import React, { useState } from 'react';

const fonts = [
  'sans-serif', 'serif', 'monospace', 'cursive', 'fantasy', 'system-ui', 'Inter', 'Roboto', 'Merriweather', 'Fira Code'
];
const weights = [400, 500, 600, 700, 800];
const effects = [
  { label: 'None', value: 'none', icon: '📝' },
  { label: 'Gradient Text', value: 'gradient', icon: '🌈' },
  { label: 'Shadow', value: 'shadow', icon: '👻' },
  { label: 'Typewriter', value: 'typewriter', icon: '⌨️' },
  { label: 'Clamp (3 lines)', value: 'clamp', icon: '📏' },
];

const sample = 'The quick brown fox jumps over the lazy dog.';

const TypographyZone = () => {
  const [font, setFont] = useState('Inter');
  const [size, setSize] = useState(2);
  const [weight, setWeight] = useState(600);
  const [italic, setItalic] = useState(false);
  const [color, setColor] = useState('#2563eb');
  const [effect, setEffect] = useState('none');
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  
  let style = {
    fontFamily: font,
    fontSize: size + 'rem',
    fontWeight: weight,
    fontStyle: italic ? 'italic' : 'normal',
    color,
    background: 'none',
    WebkitBackgroundClip: 'initial',
    WebkitTextFillColor: 'initial',
    textShadow: 'none',
    display: 'block',
    margin: '0 auto',
    maxWidth: 600,
    lineClamp: 'none',
    overflow: 'visible',
    whiteSpace: 'normal',
    animation: 'none',
  };
  
  let extraCSS = '';
  if (effect === 'gradient') {
    style.background = 'linear-gradient(90deg,#2563eb,#fbbf24,#ec4899)';
    style.WebkitBackgroundClip = 'text';
    style.WebkitTextFillColor = 'transparent';
    style.color = undefined;
    extraCSS = 'background: linear-gradient(90deg,#2563eb,#fbbf24,#ec4899);\n-webkit-background-clip: text;\n-webkit-text-fill-color: transparent;';
  }
  if (effect === 'shadow') {
    style.textShadow = '2px 4px 12px #2563eb88';
    extraCSS = 'text-shadow: 2px 4px 12px #2563eb88;';
  }
  if (effect === 'clamp') {
    style.display = '-webkit-box';
    style.WebkitBoxOrient = 'vertical';
    style.WebkitLineClamp = 3;
    style.overflow = 'hidden';
    style.whiteSpace = 'normal';
    extraCSS = 'display: -webkit-box;\n-webkit-line-clamp: 3;\n-webkit-box-orient: vertical;\noverflow: hidden;';
  }
  if (effect === 'typewriter') {
    style.overflow = 'hidden';
    style.whiteSpace = 'nowrap';
    style.borderRight = '2px solid #2563eb';
    style.animation = 'typing 2s steps(30, end), blink .7s step-end infinite alternate';
    extraCSS = `overflow: hidden;\nwhite-space: nowrap;\nborder-right: 2px solid #2563eb;\nanimation: typing 2s steps(30, end), blink .7s step-end infinite alternate;\n@keyframes typing { from { width: 0 } to { width: 100% } }\n@keyframes blink { 50% { border-color: transparent } }`;
  }
  
  const css = `font-family: ${font};\nfont-size: ${size}rem;\nfont-weight: ${weight};\nfont-style: ${italic ? 'italic' : 'normal'};\ncolor: ${effect==='gradient'?'(see gradient below)':color};${extraCSS ? '\n'+extraCSS : ''}`;
  
  function copy(text) {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }
  
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 24 }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 8, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Typography & Text Effects</h2>
        <p style={{ color: '#64748b', fontSize: 16 }}>Experiment with fonts, sizes, weights, and beautiful text effects</p>
      </div>
      
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 24, marginBottom: 24 }}>
        <h3 style={{ fontSize: 20, marginBottom: 16, color: '#1e293b' }}>⚙️ Typography Controls</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
              🔤 Font Family
            </label>
            <select 
              value={font} 
              onChange={e => setFont(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '10px 12px', 
                borderRadius: 8, 
                border: '1px solid #d1d5db', 
                fontSize: 14,
                background: 'white'
              }}
            >
              {fonts.map(f => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
              📏 Font Size: {size}rem
            </label>
            <input 
              type="range" 
              min="1" 
              max="4" 
              step="0.1" 
              value={size} 
              onChange={e => setSize(Number(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
              ⚖️ Font Weight
            </label>
            <select 
              value={weight} 
              onChange={e => setWeight(Number(e.target.value))}
              style={{ 
                width: '100%', 
                padding: '10px 12px', 
                borderRadius: 8, 
                border: '1px solid #d1d5db', 
                fontSize: 14,
                background: 'white'
              }}
            >
              {weights.map(w => (
                <option key={w} value={w}>{w}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
              🎨 Text Color
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input 
                type="color" 
                value={color} 
                onChange={e => setColor(e.target.value)} 
                disabled={effect==='gradient'}
                style={{ width: 50, height: 40, borderRadius: 8, border: '1px solid #d1d5db' }}
              />
              <span style={{ fontSize: 14, color: '#64748b' }}>
                {effect==='gradient' ? 'Disabled for gradient' : color}
              </span>
            </div>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
              ✨ Text Effects
            </label>
            <select 
              value={effect} 
              onChange={e => setEffect(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '10px 12px', 
                borderRadius: 8, 
                border: '1px solid #d1d5db', 
                fontSize: 14,
                background: 'white'
              }}
            >
              {effects.map(eff => (
                <option key={eff.value} value={eff.value}>{eff.icon} {eff.label}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
              📝 Style Options
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, color: '#64748b' }}>
                <input 
                  type="checkbox" 
                  checked={italic} 
                  onChange={e => setItalic(e.target.checked)}
                  style={{ width: 16, height: 16 }}
                />
                Italic
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 24, marginBottom: 24 }}>
        <h3 style={{ fontSize: 20, marginBottom: 16, color: '#1e293b' }}>👀 Live Preview</h3>
        <div style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', 
          borderRadius: 12, 
          padding: 48, 
          minHeight: 120, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          border: '2px dashed #e2e8f0'
        }}>
          <span style={style}>{sample}</span>
          {effect==='typewriter' && (
            <style>{`@keyframes typing { from { width: 0 } to { width: 100% } } @keyframes blink { 50% { border-color: transparent } }`}</style>
          )}
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
            onClick={() => copy(css)} 
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
            📋 Copy CSS
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
            <div style={{ marginBottom: 12, color: '#fbbf24', fontWeight: 600 }}>🎨 Generated CSS:</div>
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

export default TypographyZone;
