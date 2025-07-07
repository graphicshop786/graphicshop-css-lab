import React, { useState } from 'react';

function minifyCSS(css) {
  return css.replace(/\/\*.*?\*\//gs, '').replace(/\s*([:;{},])\s*/g, '$1').replace(/\s+/g, ' ').trim();
}

function formatCSS(css) {
  let formatted = css;
  // Remove existing formatting
  formatted = formatted.replace(/\s*([:;{},])\s*/g, '$1').replace(/\s+/g, ' ');
  
  // Add line breaks and indentation
  formatted = formatted.replace(/;/g, ';\n  ');
  formatted = formatted.replace(/\{/g, ' {\n  ');
  formatted = formatted.replace(/\}/g, '\n}\n');
  
  // Clean up extra spaces
  formatted = formatted.replace(/\n\s*\n/g, '\n').trim();
  
  return formatted;
}

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

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function rgbToHex(r, g, b) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

function generateColorPalette(baseColor, type = 'shades') {
  const rgb = hexToRgb(baseColor);
  if (!rgb) return [];
  
  const colors = [];
  switch (type) {
    case 'shades':
      for (let i = 10; i <= 90; i += 10) {
        const factor = i / 100;
        const newRgb = {
          r: Math.round(rgb.r * factor),
          g: Math.round(rgb.g * factor),
          b: Math.round(rgb.b * factor)
        };
        colors.push({
          hex: rgbToHex(newRgb.r, newRgb.g, newRgb.b),
          name: `${i}%`
        });
      }
      break;
    case 'monochromatic':
      for (let i = 0; i < 10; i++) {
        const factor = 0.1 + (i * 0.08);
        const newRgb = {
          r: Math.min(255, Math.round(rgb.r * factor)),
          g: Math.min(255, Math.round(rgb.g * factor)),
          b: Math.min(255, Math.round(rgb.b * factor))
        };
        colors.push({
          hex: rgbToHex(newRgb.r, newRgb.g, newRgb.b),
          name: `Shade ${i + 1}`
        });
      }
      break;
  }
  return colors;
}

const tabs = [
  { label: 'Unit Converter', icon: '📏' },
  { label: 'CSS Minifier', icon: '🗜️' },
  { label: 'CSS Formatter', icon: '✨' },
  { label: 'Color Picker', icon: '🎨' },
  { label: 'Color Palette', icon: '🌈' },
  { label: 'Contrast Checker', icon: '👁️' },
];

const Tools = () => {
  const [tab, setTab] = useState(0);
  
  // Unit converter
  const [px, setPx] = useState(16);
  const [base, setBase] = useState(16);
  
  // Minifier
  const [css, setCss] = useState(`/* Example CSS */
.container {
  background-color: #2563eb;
  padding: 1rem;
  margin: 0 auto;
  max-width: 1200px;
}

.button {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.button:hover {
  transform: translateY(-2px);
}`);

  // Color picker
  const [color, setColor] = useState('#2563eb');
  
  // Color palette
  const [paletteColor, setPaletteColor] = useState('#3b82f6');
  const [paletteType, setPaletteType] = useState('shades');
  const [copiedColor, setCopiedColor] = useState(null);
  
  // Contrast checker
  const [c1, setC1] = useState('#2563eb');
  const [c2, setC2] = useState('#ffffff');
  const cr = contrastRatio(c1, c2);

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 2000);
  }

  function downloadCSS(content, filename) {
    const blob = new Blob([content], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  const colorPalette = generateColorPalette(paletteColor, paletteType);

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontWeight: 700, fontSize: 28, marginBottom: 8 }}>CSS Tools</h2>
      <p style={{ color: '#666', marginBottom: 24 }}>Essential tools for CSS development and design.</p>
      
      <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap', borderBottom: '2px solid #e5e7eb', paddingBottom: 16 }}>
        {tabs.map((t, i) => (
          <button 
            key={i} 
            onClick={() => setTab(i)} 
            className={`custom-tool-btn${tab===i ? ' active' : ''}`}
          >
            <span style={{ marginRight: 8 }}>{t.icon}</span>
            {t.label}
          </button>
        ))}
      </div>

      {/* Unit Converter */}
      {tab === 0 && (
        <div style={{ background: 'white', padding: 24, borderRadius: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: 20, marginBottom: 16, color: '#1f2937' }}>PX/REM/EM Converter</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 20 }}>
            <div>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Pixels (px):</label>
              <input 
                type="number" 
                value={px} 
                onChange={e=>setPx(Number(e.target.value))} 
                style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Base Font Size (px):</label>
              <input 
                type="number" 
                value={base} 
                onChange={e=>setBase(Number(e.target.value))} 
                style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
              />
            </div>
          </div>
          <div style={{ background: '#f8fafc', padding: 16, borderRadius: 8, border: '1px solid #e2e8f0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12 }}>
              <div>
                <strong>REM:</strong> <span style={{ color: '#2563eb', fontSize: 18 }}>{(px/base).toFixed(3)}rem</span>
              </div>
              <div>
                <strong>EM:</strong> <span style={{ color: '#2563eb', fontSize: 18 }}>{(px/base).toFixed(3)}em</span>
              </div>
              <div>
                <strong>PT:</strong> <span style={{ color: '#2563eb', fontSize: 18 }}>{(px * 0.75).toFixed(1)}pt</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CSS Minifier */}
      {tab === 1 && (
        <div style={{ background: 'white', padding: 24, borderRadius: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: 20, marginBottom: 16, color: '#1f2937' }}>CSS Minifier</h3>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Original CSS:</label>
            <textarea 
              value={css} 
              onChange={e=>setCss(e.target.value)} 
              rows={8} 
              style={{ width: '100%', fontFamily: 'monospace', fontSize: 14, borderRadius: 8, border: '1px solid #d1d5db', padding: 12 }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Minified CSS:</label>
            <div style={{ background: '#f8fafc', borderRadius: 8, padding: 12, fontFamily: 'monospace', fontSize: 14, border: '1px solid #e2e8f0', minHeight: 60 }}>
              {minifyCSS(css)}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <button 
              onClick={() => copyToClipboard(minifyCSS(css))}
              style={{ background: '#2563eb', color: 'white', border: 'none', padding: '10px 20px', borderRadius: 6, cursor: 'pointer' }}
            >
              Copy Minified
            </button>
            <button 
              onClick={() => downloadCSS(minifyCSS(css), 'styles.min.css')}
              style={{ background: '#10b981', color: 'white', border: 'none', padding: '10px 20px', borderRadius: 6, cursor: 'pointer' }}
            >
              Download
            </button>
          </div>
        </div>
      )}

      {/* CSS Formatter */}
      {tab === 2 && (
        <div style={{ background: 'white', padding: 24, borderRadius: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: 20, marginBottom: 16, color: '#1f2937' }}>CSS Formatter</h3>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Original CSS:</label>
            <textarea 
              value={css} 
              onChange={e=>setCss(e.target.value)} 
              rows={8} 
              style={{ width: '100%', fontFamily: 'monospace', fontSize: 14, borderRadius: 8, border: '1px solid #d1d5db', padding: 12 }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Formatted CSS:</label>
            <div style={{ background: '#f8fafc', borderRadius: 8, padding: 12, fontFamily: 'monospace', fontSize: 14, border: '1px solid #e2e8f0', minHeight: 120, whiteSpace: 'pre-wrap' }}>
              {formatCSS(css)}
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <button 
              onClick={() => copyToClipboard(formatCSS(css))}
              style={{ background: '#2563eb', color: 'white', border: 'none', padding: '10px 20px', borderRadius: 6, cursor: 'pointer' }}
            >
              Copy Formatted
            </button>
            <button 
              onClick={() => downloadCSS(formatCSS(css), 'styles.css')}
              style={{ background: '#10b981', color: 'white', border: 'none', padding: '10px 20px', borderRadius: 6, cursor: 'pointer' }}
            >
              Download
            </button>
          </div>
        </div>
      )}

      {/* Color Picker */}
      {tab === 3 && (
        <div style={{ background: 'white', padding: 24, borderRadius: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: 20, marginBottom: 16, color: '#1f2937' }}>Color Picker</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
            <div>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Choose Color:</label>
              <input 
                type="color" 
                value={color} 
                onChange={e=>setColor(e.target.value)} 
                style={{ width: 60, height: 60, border: 'none', background: 'none', cursor: 'pointer' }} 
              />
            </div>
            <div>
              <div style={{ marginBottom: 12 }}>
                <strong>HEX:</strong> <span style={{ color: '#2563eb', fontSize: 16 }}>{color.toUpperCase()}</span>
              </div>
              <div style={{ marginBottom: 12 }}>
                <strong>RGB:</strong> <span style={{ color: '#2563eb', fontSize: 16 }}>
                  {(() => {
                    const rgb = hexToRgb(color);
                    return rgb ? `${rgb.r}, ${rgb.g}, ${rgb.b}` : 'Invalid';
                  })()}
                </span>
              </div>
              <div style={{ marginBottom: 16 }}>
                <strong>Contrast Text:</strong> <span style={{ color: '#2563eb', fontSize: 16 }}>
                  {getContrastYIQ(color) === 'black' ? 'Black' : 'White'}
                </span>
              </div>
            </div>
          </div>
          <div style={{ 
            background: color, 
            color: getContrastYIQ(color), 
            borderRadius: 8, 
            padding: 20, 
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 500
          }}>
            Preview Text
          </div>
        </div>
      )}

      {/* Color Palette */}
      {tab === 4 && (
        <div style={{ background: 'white', padding: 24, borderRadius: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: 20, marginBottom: 16, color: '#1f2937' }}>Color Palette Generator</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
            <div>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Base Color:</label>
              <input 
                type="color" 
                value={paletteColor} 
                onChange={e=>setPaletteColor(e.target.value)} 
                style={{ width: 60, height: 60, border: 'none', background: 'none', cursor: 'pointer' }} 
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Palette Type:</label>
              <select 
                value={paletteType} 
                onChange={e=>setPaletteType(e.target.value)}
                style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
              >
                <option value="shades">Shades</option>
                <option value="monochromatic">Monochromatic</option>
              </select>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 12 }}>
            {colorPalette.map((color, index) => (
              <div 
                key={index}
                style={{ 
                  background: color.hex, 
                  color: getContrastYIQ(color.hex),
                  padding: 16,
                  borderRadius: 8,
                  textAlign: 'center',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'transform 0.2s ease'
                }}
                onClick={() => copyToClipboard(color.hex)}
                onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.target.style.transform = 'scale(1)'}
              >
                <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{color.name}</div>
                <div style={{ fontSize: 12 }}>{color.hex}</div>
                {copiedColor === color.hex && (
                  <div style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)',
                    background: 'rgba(0,0,0,0.8)',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: 4,
                    fontSize: 12
                  }}>
                    Copied!
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contrast Checker */}
      {tab === 5 && (
        <div style={{ background: 'white', padding: 24, borderRadius: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: 20, marginBottom: 16, color: '#1f2937' }}>Contrast Checker</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
            <div>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Background Color:</label>
              <input 
                type="color" 
                value={c1} 
                onChange={e=>setC1(e.target.value)} 
                style={{ width: 60, height: 60, border: 'none', background: 'none', cursor: 'pointer' }} 
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Text Color:</label>
              <input 
                type="color" 
                value={c2} 
                onChange={e=>setC2(e.target.value)} 
                style={{ width: 60, height: 60, border: 'none', background: 'none', cursor: 'pointer' }} 
              />
            </div>
          </div>
          <div style={{ 
            background: c1, 
            color: c2, 
            borderRadius: 8, 
            padding: 20, 
            textAlign: 'center',
            fontSize: 18,
            fontWeight: 500,
            marginBottom: 16
          }}>
            Sample Text - This is how your text will look
          </div>
          <div style={{ 
            color: cr>=7?'#22c55e':cr>=4.5?'#fbbf24':'#ef4444', 
            fontWeight: 600,
            fontSize: 16,
            textAlign: 'center',
            padding: 12,
            background: cr>=7?'#dcfce7':cr>=4.5?'#fef3c7':'#fee2e2',
            borderRadius: 8
          }}>
            Contrast Ratio: {cr.toFixed(2)} {cr>=7?'(AAA - Excellent)':cr>=4.5?'(AA - Good)':'(Low contrast - Poor accessibility)'}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tools;
