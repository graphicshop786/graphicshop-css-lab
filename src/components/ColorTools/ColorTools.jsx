import React, { useState } from 'react';

function getContrastYIQ(hexcolor) {
  hexcolor = hexcolor.replace('#', '');
  if (hexcolor.length === 3) hexcolor = hexcolor.split('').map(x=>x+x).join('');
  const r = parseInt(hexcolor.substr(0,2),16);
  const g = parseInt(hexcolor.substr(2,2),16);
  const b = parseInt(hexcolor.substr(4,2),16);
  const yiq = ((r*299)+(g*587)+(b*114))/1000;
  return yiq >= 128 ? 'black' : 'white';
}

function contrastRatio(hex1, hex2) {
  function luminance(hex) {
    hex = hex.replace('#', '');
    if (hex.length === 3) hex = hex.split('').map(x=>x+x).join('');
    const rgb = [0,2,4].map(i=>parseInt(hex.substr(i,2),16)/255).map(c=>c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4));
    return 0.2126*rgb[0]+0.7152*rgb[1]+0.0722*rgb[2];
  }
  const l1 = luminance(hex1)+0.05, l2 = luminance(hex2)+0.05;
  return l1>l2?(l1/l2):(l2/l1);
}

const ColorTools = () => {
  const [color1, setColor1] = useState('#2563eb');
  const [color2, setColor2] = useState('#fbbf24');
  const [color3, setColor3] = useState('#ec4899');
  const [type, setType] = useState('linear');
  const [angle, setAngle] = useState(90);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const gradient = type === 'linear'
    ? `linear-gradient(${angle}deg, ${color1}, ${color2}, ${color3})`
    : `radial-gradient(circle, ${color1}, ${color2}, ${color3})`;
  
  const css = `background: ${gradient};`;
  const cr = contrastRatio(color1, color2);
  
  function copy(text) {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }
  
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 24 }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 8, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Colors & Gradients</h2>
        <p style={{ color: '#64748b', fontSize: 16 }}>Create beautiful gradients and check color contrast ratios</p>
      </div>
      
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 24, marginBottom: 24 }}>
        <h3 style={{ fontSize: 20, marginBottom: 16, color: '#1e293b' }}>🎨 Color Controls</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
              🟦 Color 1
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input 
                type="color" 
                value={color1} 
                onChange={e => setColor1(e.target.value)}
                style={{ width: 60, height: 40, borderRadius: 8, border: '1px solid #d1d5db' }}
              />
              <span style={{ fontSize: 14, color: '#64748b', fontFamily: 'monospace' }}>{color1}</span>
            </div>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
              🟨 Color 2
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input 
                type="color" 
                value={color2} 
                onChange={e => setColor2(e.target.value)}
                style={{ width: 60, height: 40, borderRadius: 8, border: '1px solid #d1d5db' }}
              />
              <span style={{ fontSize: 14, color: '#64748b', fontFamily: 'monospace' }}>{color2}</span>
            </div>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
              🟪 Color 3
            </label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input 
                type="color" 
                value={color3} 
                onChange={e => setColor3(e.target.value)}
                style={{ width: 60, height: 40, borderRadius: 8, border: '1px solid #d1d5db' }}
              />
              <span style={{ fontSize: 14, color: '#64748b', fontFamily: 'monospace' }}>{color3}</span>
            </div>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
              📐 Gradient Type
            </label>
            <select 
              value={type} 
              onChange={e => setType(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '10px 12px', 
                borderRadius: 8, 
                border: '1px solid #d1d5db', 
                fontSize: 14,
                background: 'white'
              }}
            >
              <option value="linear">📏 Linear Gradient</option>
              <option value="radial">⭕ Radial Gradient</option>
            </select>
          </div>
          
          {type==='linear' && (
            <div>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
                🔄 Angle: {angle}°
              </label>
              <input 
                type="range" 
                min="0" 
                max="360" 
                value={angle} 
                onChange={e => setAngle(Number(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>
          )}
        </div>
      </div>
      
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 24, marginBottom: 24 }}>
        <h3 style={{ fontSize: 20, marginBottom: 16, color: '#1e293b' }}>👀 Gradient Preview</h3>
        <div style={{ 
          background: gradient, 
          borderRadius: 12, 
          padding: 48, 
          minHeight: 120, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: getContrastYIQ(color2), 
          fontWeight: 700, 
          fontSize: 24, 
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          border: '2px solid #e2e8f0'
        }}>
          ✨ Beautiful Gradient ✨
        </div>
      </div>
      
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 24, marginBottom: 24 }}>
        <h3 style={{ fontSize: 20, marginBottom: 16, color: '#1e293b' }}>📊 Contrast Analysis</h3>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: 16,
          padding: 16,
          background: '#f8fafc',
          borderRadius: 8,
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ 
            width: 60, 
            height: 60, 
            background: color1, 
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: getContrastYIQ(color1),
            fontWeight: 'bold',
            fontSize: 12
          }}>
            Aa
          </div>
          <div style={{ fontSize: 48, color: '#64748b' }}>vs</div>
          <div style={{ 
            width: 60, 
            height: 60, 
            background: color2, 
            borderRadius: 8,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: getContrastYIQ(color2),
            fontWeight: 'bold',
            fontSize: 12
          }}>
            Aa
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <div style={{ 
              color: cr>=7?'#22c55e':cr>=4.5?'#fbbf24':'#ef4444', 
              fontWeight: 600,
              fontSize: 18
            }}>
              {cr.toFixed(2)}:1
            </div>
            <div style={{ 
              color: cr>=7?'#22c55e':cr>=4.5?'#fbbf24':'#ef4444', 
              fontSize: 14,
              fontWeight: 500
            }}>
              {cr>=7?'AAA (Excellent)':cr>=4.5?'AA (Good)':'Low Contrast'}
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

export default ColorTools;
