import React, { useState } from 'react';

// Simple mapping for demo; in a real app, use a full mapping or API
const tailwindMap = {
  'bg-blue-500': 'background-color: #3b82f6;',
  'text-white': 'color: #fff;',
  'p-4': 'padding: 1rem;',
  'rounded': 'border-radius: 0.25rem;',
  'px-4': 'padding-left: 1rem; padding-right: 1rem;',
  'py-2': 'padding-top: 0.5rem; padding-bottom: 0.5rem;',
  'font-bold': 'font-weight: bold;',
  'shadow': 'box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06);',
  'hover:bg-blue-600': '/* On hover: background-color: #2563eb; */',
  'text-center': 'text-align: center;',
  'm-2': 'margin: 0.5rem;',
  'w-full': 'width: 100%;',
  'h-8': 'height: 2rem;',
  // Add more as needed
};

function convertTailwindToCss(input) {
  return input.split(/\s+/).map(cls => tailwindMap[cls] || `/* ${cls} (not mapped) */`).join(' ');
}

export default function TailwindToCssConverter() {
  const [input, setInput] = useState('bg-blue-500 text-white p-4 rounded');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);

  function convert() {
    setOutput(convertTailwindToCss(input));
  }

  function copyCss() {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  function downloadCss() {
    const blob = new Blob([output], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tailwind-converted.css';
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontWeight: 700, fontSize: 24, marginBottom: 12 }}>Tailwind → CSS Converter</h2>
      <p style={{ color: '#666', marginBottom: 16 }}>Paste your Tailwind classes below to get the equivalent CSS. (Demo: limited class support)</p>
      <input 
        value={input} 
        onChange={e => setInput(e.target.value)} 
        style={{ width: '100%', marginBottom: 12, padding: 8, borderRadius: 6, border: '1px solid #d1d5db', fontSize: 16 }} 
        placeholder="e.g. bg-blue-500 text-white p-4 rounded" 
      />
      <button onClick={convert} style={{ background: '#2563eb', color: 'white', border: 'none', padding: '8px 20px', borderRadius: 6, cursor: 'pointer', marginBottom: 16 }}>Convert</button>
      <div style={{ marginTop: 16, marginBottom: 8, fontWeight: 500 }}>CSS Output:</div>
      <pre style={{ background: '#f8fafc', borderRadius: 8, padding: 16, fontFamily: 'monospace', fontSize: 14, minHeight: 60 }}>{output}</pre>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        <button onClick={copyCss} style={{ background: '#10b981', color: 'white', border: 'none', padding: '8px 16px', borderRadius: 6, cursor: 'pointer' }}>Copy</button>
        <button onClick={downloadCss} style={{ background: '#fbbf24', color: '#18181b', border: 'none', padding: '8px 16px', borderRadius: 6, cursor: 'pointer' }}>Download</button>
        {copied && <span style={{ color: '#10b981', fontWeight: 600 }}>Copied!</span>}
      </div>
      <div style={{ marginTop: 24, color: '#64748b', fontSize: 13 }}>
        <b>Supported classes:</b> {Object.keys(tailwindMap).join(', ')}
      </div>
    </div>
  );
}
