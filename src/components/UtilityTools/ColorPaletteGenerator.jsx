import React, { useState, useEffect } from 'react';

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
      default: h = 0;
    }
    
    h /= 6;
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}

function hslToRgb(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  
  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    
    r = hue2rgb(p, q, h + 1/3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1/3);
  }

  return { 
    r: Math.round(r * 255), 
    g: Math.round(g * 255), 
    b: Math.round(b * 255) 
  };
}

function rgbToHex(r, g, b) {
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
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

export default function ColorPaletteGenerator() {
  const [baseColor, setBaseColor] = useState('#3b82f6');
  const [palette, setPalette] = useState([]);
  const [paletteType, setPaletteType] = useState('shades');
  const [copied, setCopied] = useState(null);
  const [exportFormat, setExportFormat] = useState('css');

  useEffect(() => {
    generatePalette();
  }, [baseColor, paletteType]);

  function generatePalette() {
    const rgb = hexToRgb(baseColor);
    if (!rgb) return;
    
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    let colors = [];
    
    switch (paletteType) {
      case 'shades':
        // Generate lighter and darker shades
        for (let i = 10; i <= 90; i += 10) {
          const newRgb = hslToRgb(hsl.h, hsl.s, i);
          colors.push({
            hex: rgbToHex(newRgb.r, newRgb.g, newRgb.b),
            name: `${i}%`,
            rgb: newRgb
          });
        }
        break;
        
      case 'complementary':
        // Base color and its complement
        colors.push({ hex: baseColor, name: 'Base', rgb: rgb });
        
        // Complementary (opposite on color wheel)
        const compHsl = { h: (hsl.h + 180) % 360, s: hsl.s, l: hsl.l };
        const compRgb = hslToRgb(compHsl.h, compHsl.s, compHsl.l);
        colors.push({
          hex: rgbToHex(compRgb.r, compRgb.g, compRgb.b),
          name: 'Complement',
          rgb: compRgb
        });
        
        // Add lighter and darker versions of both
        for (const h of [hsl.h, compHsl.h]) {
          for (const l of [30, 70]) {
            const newRgb = hslToRgb(h, hsl.s, l);
            colors.push({
              hex: rgbToHex(newRgb.r, newRgb.g, newRgb.b),
              name: `${h === hsl.h ? 'Base' : 'Comp'} ${l < 50 ? 'Dark' : 'Light'}`,
              rgb: newRgb
            });
          }
        }
        break;
        
      case 'triadic':
        // Base color and two colors equidistant on the color wheel
        colors.push({ hex: baseColor, name: 'Base', rgb: rgb });
        
        for (let angle of [120, 240]) {
          const triadHsl = { h: (hsl.h + angle) % 360, s: hsl.s, l: hsl.l };
          const triadRgb = hslToRgb(triadHsl.h, triadHsl.s, triadHsl.l);
          colors.push({
            hex: rgbToHex(triadRgb.r, triadRgb.g, triadRgb.b),
            name: `Triad ${angle/120}`,
            rgb: triadRgb
          });
        }
        
        // Add lighter and darker versions
        for (let i = 0; i < 3; i++) {
          const h = (hsl.h + i * 120) % 360;
          for (const l of [30, 70]) {
            const newRgb = hslToRgb(h, hsl.s, l);
            colors.push({
              hex: rgbToHex(newRgb.r, newRgb.g, newRgb.b),
              name: `Triad ${i+1} ${l < 50 ? 'Dark' : 'Light'}`,
              rgb: newRgb
            });
          }
        }
        break;

      case 'analogous':
        // Colors adjacent on the color wheel
        colors.push({ hex: baseColor, name: 'Base', rgb: rgb });
        
        for (let offset of [-30, 30]) {
          const analogHsl = { h: (hsl.h + offset + 360) % 360, s: hsl.s, l: hsl.l };
          const analogRgb = hslToRgb(analogHsl.h, analogHsl.s, analogHsl.l);
          colors.push({
            hex: rgbToHex(analogRgb.r, analogRgb.g, analogRgb.b),
            name: `Analog ${offset > 0 ? '+' : ''}${offset}`,
            rgb: analogRgb
          });
        }
        break;

      case 'monochromatic':
        // Same hue, different saturation and lightness
        for (let s = 20; s <= 100; s += 20) {
          for (let l = 30; l <= 80; l += 25) {
            const newRgb = hslToRgb(hsl.h, s, l);
            colors.push({
              hex: rgbToHex(newRgb.r, newRgb.g, newRgb.b),
              name: `S${s}L${l}`,
              rgb: newRgb
            });
          }
        }
        break;
    }
    
    setPalette(colors);
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000);
  }

  function exportPalette() {
    let content = '';
    
    switch (exportFormat) {
      case 'css':
        content = palette.map(color => 
          `--color-${color.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}: ${color.hex};`
        ).join('\n');
        break;
      case 'scss':
        content = palette.map(color => 
          `$${color.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}: ${color.hex};`
        ).join('\n');
        break;
      case 'json':
        content = JSON.stringify(palette, null, 2);
        break;
      case 'hex':
        content = palette.map(color => color.hex).join('\n');
        break;
    }
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `palette-${paletteType}.${exportFormat === 'json' ? 'json' : exportFormat === 'hex' ? 'txt' : exportFormat}`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontWeight: 700, fontSize: 28, marginBottom: 8 }}>Color Palette Generator</h2>
      <p style={{ color: '#666', marginBottom: 24 }}>Generate beautiful color palettes from any base color.</p>
      
      <div style={{ background: 'white', padding: 24, borderRadius: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.1)', marginBottom: 24 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Base Color:</label>
            <input 
              type="color" 
              value={baseColor} 
              onChange={e => setBaseColor(e.target.value)}
              style={{ width: 60, height: 60, border: 'none', background: 'none', cursor: 'pointer' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Palette Type:</label>
            <select 
              value={paletteType} 
              onChange={e => setPaletteType(e.target.value)}
              style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
            >
              <option value="shades">Shades</option>
              <option value="complementary">Complementary</option>
              <option value="triadic">Triadic</option>
              <option value="analogous">Analogous</option>
              <option value="monochromatic">Monochromatic</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500 }}>Export Format:</label>
            <select 
              value={exportFormat} 
              onChange={e => setExportFormat(e.target.value)}
              style={{ width: '100%', padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
            >
              <option value="css">CSS Variables</option>
              <option value="scss">SCSS Variables</option>
              <option value="json">JSON</option>
              <option value="hex">Hex Values</option>
            </select>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
          <button 
            onClick={exportPalette}
            style={{ background: '#10b981', color: 'white', border: 'none', padding: '10px 20px', borderRadius: 6, cursor: 'pointer' }}
          >
            Export Palette
          </button>
        </div>
      </div>

      <div style={{ background: 'white', padding: 24, borderRadius: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h3 style={{ fontSize: 20, marginBottom: 16, color: '#1f2937' }}>Generated Palette</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16 }}>
          {palette.map((color, index) => (
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
                transition: 'transform 0.2s ease',
                border: '1px solid rgba(0,0,0,0.1)'
              }}
              onClick={() => copyToClipboard(color.hex)}
              onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            >
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>{color.name}</div>
              <div style={{ fontSize: 12, marginBottom: 4 }}>{color.hex}</div>
              <div style={{ fontSize: 10, opacity: 0.8 }}>
                RGB({color.rgb.r}, {color.rgb.g}, {color.rgb.b})
              </div>
              {copied === color.hex && (
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
    </div>
  );
}
