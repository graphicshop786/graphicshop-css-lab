import React, { useState } from 'react';

const transitionProperties = [
  'all', 'background-color', 'color', 'width', 'height', 'opacity', 'transform', 'box-shadow', 'border-radius'
];
const timingFunctions = [
  'ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out', 'step-start', 'step-end', 'cubic-bezier'
];

const defaultBezier = [0.25, 0.1, 0.25, 1];

function bezierToString([a, b, c, d]) {
  return `cubic-bezier(${a}, ${b}, ${c}, ${d})`;
}

const TransitionPlayground = () => {
  const [property, setProperty] = useState('all');
  const [duration, setDuration] = useState(0.5);
  const [timing, setTiming] = useState('ease');
  const [delay, setDelay] = useState(0);
  const [bezier, setBezier] = useState(defaultBezier);
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const transitionValue = `${property} ${duration}s ${
    timing === 'cubic-bezier' ? bezierToString(bezier) : timing
  } ${delay}s`;

  const boxStyle = {
    width: hovered ? 180 : 100,
    height: hovered ? 100 : 100,
    background: hovered ? '#60a5fa' : '#f87171',
    color: '#fff',
    borderRadius: hovered ? 32 : 8,
    boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.2)' : '0 2px 8px rgba(0,0,0,0.08)',
    opacity: hovered ? 0.7 : 1,
    transform: hovered ? 'scale(1.15) rotate(2deg)' : 'scale(1) rotate(0deg)',
    transition: transitionValue,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    userSelect: 'none',
    fontWeight: 600,
    fontSize: 16
  };

  function copyCSS() {
    navigator.clipboard.writeText(`transition: ${transitionValue};`);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 24 }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 8, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Transition Playground</h2>
        <p style={{ color: '#64748b', fontSize: 16 }}>Experiment with CSS transitions and see them in real-time</p>
      </div>
      
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 24, marginBottom: 24 }}>
        <h3 style={{ fontSize: 20, marginBottom: 16, color: '#1e293b' }}>⚙️ Transition Controls</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
              🎯 Property
            </label>
            <select 
              value={property} 
              onChange={e => setProperty(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '10px 12px', 
                borderRadius: 8, 
                border: '1px solid #d1d5db', 
                fontSize: 14,
                background: 'white'
              }}
            >
              {transitionProperties.map(p => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
              ⏱️ Duration: {duration}s
            </label>
            <input 
              type="range" 
              min="0.1" 
              max="3" 
              step="0.05" 
              value={duration} 
              onChange={e => setDuration(Number(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
              📈 Timing Function
            </label>
            <select 
              value={timing} 
              onChange={e => setTiming(e.target.value)}
              style={{ 
                width: '100%', 
                padding: '10px 12px', 
                borderRadius: 8, 
                border: '1px solid #d1d5db', 
                fontSize: 14,
                background: 'white'
              }}
            >
              {timingFunctions.map(f => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
              ⏰ Delay: {delay}s
            </label>
            <input 
              type="range" 
              min="0" 
              max="2" 
              step="0.05" 
              value={delay} 
              onChange={e => setDelay(Number(e.target.value))}
              style={{ width: '100%' }}
            />
          </div>
        </div>
        
        {timing === 'cubic-bezier' && (
          <div style={{ marginTop: 20, padding: 16, background: '#f8fafc', borderRadius: 8, border: '1px solid #e2e8f0' }}>
            <label style={{ display: 'block', marginBottom: 12, fontWeight: 500, color: '#374151' }}>
              🎛️ Cubic Bezier Curve
            </label>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
              {['a', 'b', 'c', 'd'].map((label, i) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <label style={{ fontSize: 12, color: '#64748b', marginBottom: 4 }}>{label}</label>
                  <input
                    type="number"
                    min={0}
                    max={1}
                    step={0.01}
                    value={bezier[i]}
                    onChange={e => {
                      const val = Math.max(0, Math.min(1, Number(e.target.value)));
                      setBezier(bz => bz.map((v, idx) => idx === i ? val : v));
                    }}
                    style={{ 
                      width: 60, 
                      padding: '6px 8px', 
                      borderRadius: 6, 
                      border: '1px solid #d1d5db',
                      fontSize: 14
                    }}
                  />
                </div>
              ))}
            </div>
            <div style={{ marginTop: 8, fontSize: 12, color: '#64748b', fontFamily: 'monospace' }}>
              {bezierToString(bezier)}
            </div>
          </div>
        )}
      </div>
      
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 24, marginBottom: 24 }}>
        <h3 style={{ fontSize: 20, marginBottom: 16, color: '#1e293b' }}>🎬 Live Preview</h3>
        <div style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', 
          borderRadius: 12, 
          padding: 48, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          border: '2px dashed #e2e8f0',
          minHeight: 200
        }}>
          <div
            style={boxStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            tabIndex={0}
            aria-label="Transition preview box"
          >
            {hovered ? '✨ Hovered!' : '🖱️ Hover me!'}
          </div>
        </div>
      </div>
      
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h3 style={{ fontSize: 20, color: '#1e293b' }}>💻 Generated CSS</h3>
          <button 
            onClick={copyCSS}
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
            📋 Copy CSS
          </button>
        </div>
        <div style={{ 
          background: '#1e293b', 
          borderRadius: 12, 
          padding: 16, 
          fontFamily: 'monospace', 
          fontSize: 14,
          color: '#e2e8f0',
          border: '1px solid #334155',
          position: 'relative'
        }}>
          <div style={{ color: '#fbbf24', marginBottom: 8 }}>/* CSS Output */</div>
          <div style={{ color: '#94a3b8' }}>
            transition: <span style={{ color: '#10b981', fontWeight: 600 }}>{transitionValue}</span>;
          </div>
          {copied && (
            <div style={{ 
              position: 'absolute', 
              top: 16, 
              right: 16,
              background: '#10b981',
              color: 'white',
              padding: '6px 12px',
              borderRadius: 6,
              fontSize: 12,
              fontWeight: 500,
              animation: 'fadeInOut 1.2s ease'
            }}>
              ✅ Copied!
            </div>
          )}
        </div>
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

export default TransitionPlayground;
