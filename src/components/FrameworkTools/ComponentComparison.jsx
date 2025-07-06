import React, { useState } from 'react';

const code = {
  tailwind: {
    html: `<button class='bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600'>Tailwind Button</button>`,
    css: `/* Tailwind handled by classes */`,
    explanation: 'Tailwind uses utility classes for styling. No custom CSS needed.'
  },
  bootstrap: {
    html: `<button class='btn btn-primary'>Bootstrap Button</button>`,
    css: `/* Bootstrap handled by classes */`,
    explanation: 'Bootstrap uses predefined classes. No custom CSS needed.'
  },
  vanilla: {
    html: `<button class='vanilla-btn'>Vanilla CSS Button</button>`,
    css: `.vanilla-btn {
  background: #2563eb;
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  font-size: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1);
  cursor: pointer;
  transition: background 0.2s;
}
.vanilla-btn:hover {
  background: #1d4ed8;
}`,
    explanation: 'Vanilla CSS requires you to write all styles yourself.'
  }
};

const frameworks = [
  { key: 'tailwind', label: 'Tailwind CSS' },
  { key: 'bootstrap', label: 'Bootstrap' },
  { key: 'vanilla', label: 'Vanilla CSS' }
];

export default function ComponentComparison() {
  const [tab, setTab] = useState('tailwind');
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontWeight: 700, fontSize: 24, marginBottom: 16 }}>Component Comparison</h2>
      <p style={{ color: '#666', marginBottom: 24 }}>Compare how the same button is built with Tailwind CSS, Bootstrap, and Vanilla CSS.</p>
      <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
        {frameworks.map(fw => (
          <button 
            key={fw.key} 
            onClick={() => setTab(fw.key)} 
            style={{ 
              fontWeight: tab===fw.key?700:400, 
              borderBottom: tab===fw.key?'3px solid #2563eb':'none', 
              background:'none', 
              border:'none', 
              fontSize: 16, 
              cursor:'pointer', 
              color: tab===fw.key?'#2563eb':'#64748b', 
              padding: '8px 16px',
              borderRadius: '8px 8px 0 0',
              transition: 'all 0.2s ease'
            }}
          >
            {fw.label}
          </button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
        <div>
          <div style={{ marginBottom: 12, fontWeight: 500 }}>Preview:</div>
          <div style={{ background: '#f8fafc', borderRadius: 8, padding: 24, minHeight: 80 }}>
            <style>{tab === 'vanilla' ? code.vanilla.css : ''}</style>
            <div dangerouslySetInnerHTML={{__html: code[tab].html}} />
          </div>
        </div>
        <div>
          <div style={{ marginBottom: 12, fontWeight: 500 }}>Code:</div>
          <pre style={{ background: '#f3f4f6', borderRadius: 8, padding: 16, fontFamily: 'monospace', fontSize: 14, minHeight: 80 }}>{code[tab].html}

{tab === 'vanilla' ? code.vanilla.css : ''}</pre>
          <div style={{ marginTop: 16, color: '#64748b', fontSize: 14 }}>{code[tab].explanation}</div>
        </div>
      </div>
      <div style={{ marginTop: 32, color: '#64748b', fontSize: 13 }}>
        <b>Note:</b> Tailwind and Bootstrap require their respective CSS frameworks to be loaded for the preview to look correct. Vanilla CSS works as shown.
      </div>
    </div>
  );
}
