
import React, { useState } from 'react';

const demos = [
  {
    label: ':hover',
    html: `<button class="pseudo-btn">Hover me</button>`,
    css: `.pseudo-btn { background: #2563eb; color: #fff; border: none; border-radius: 0.75rem; padding: 1rem 2rem; font-size: 1.2rem; transition: background 0.2s; }\n.pseudo-btn:hover { background: #fbbf24; color: #18181b; }`,
    simulate: 'hover',
    desc: 'The :hover pseudo-class applies when you mouse over an element.'
  },
  {
    label: ':focus',
    html: `<input class="pseudo-input" placeholder="Click or Tab here" />`,
    css: `.pseudo-input { padding: 0.75rem 1.5rem; border-radius: 0.5rem; border: 2px solid #2563eb; font-size: 1.1rem; outline: none; transition: border 0.2s; }\n.pseudo-input:focus { border-color: #fbbf24; background: #fef9c3; }`,
    simulate: 'focus',
    desc: 'The :focus pseudo-class applies when an element is focused (clicked or tabbed).'
  },
  {
    label: ':active',
    html: `<button class="pseudo-btn">Click me</button>`,
    css: `.pseudo-btn { background: #2563eb; color: #fff; border: none; border-radius: 0.75rem; padding: 1rem 2rem; font-size: 1.2rem; transition: background 0.2s; }\n.pseudo-btn:active { background: #18181b; color: #fff; }`,
    simulate: 'active',
    desc: 'The :active pseudo-class applies while an element is being clicked.'
  },
  {
    label: ':checked',
    html: `<label><input type="checkbox" class="pseudo-check" /> Check me</label>`,
    css: `.pseudo-check { accent-color: #2563eb; width: 1.2em; height: 1.2em; }\n.pseudo-check:checked { box-shadow: 0 0 0 3px #fbbf24; }`,
    simulate: 'checked',
    desc: 'The :checked pseudo-class applies to checked checkboxes or radio buttons.'
  },
  {
    label: '::before',
    html: `<span class="pseudo-before">Before me</span>`,
    css: `.pseudo-before::before { content: '👉 '; color: #fbbf24; font-size: 1.3em; }`,
    simulate: 'none',
    desc: 'The ::before pseudo-element inserts content before an element.'
  },
  {
    label: '::after',
    html: `<span class="pseudo-after">After me</span>`,
    css: `.pseudo-after::after { content: ' 👈'; color: #2563eb; font-size: 1.3em; }`,
    simulate: 'none',
    desc: 'The ::after pseudo-element inserts content after an element.'
  },
];

const PseudoDemo = () => {
  const [tab, setTab] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const demo = demos[tab];
  function copy(text) {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }
  // Simulate states for demo
  const [hover, setHover] = useState(false);
  const [focus, setFocus] = useState(false);
  const [active, setActive] = useState(false);
  const [checked, setChecked] = useState(false);
  let html = demo.html;
  let css = demo.css;
  // Add simulation classes
  if (demo.simulate === 'hover' && hover) css += '\n.pseudo-btn { background: #fbbf24 !important; color: #18181b !important; }';
  if (demo.simulate === 'focus' && focus) css += '\n.pseudo-input { border-color: #fbbf24 !important; background: #fef9c3 !important; }';
  if (demo.simulate === 'active' && active) css += '\n.pseudo-btn { background: #18181b !important; color: #fff !important; }';
  if (demo.simulate === 'checked' && checked) css += '\n.pseudo-check { box-shadow: 0 0 0 3px #fbbf24 !important; }';
  return (
    <div style={{ maxWidth: 700, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontWeight: 700, fontSize: 28, marginBottom: 8 }}>Pseudo-Classes & Elements</h2>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
        {demos.map((d, i) => (
          <button key={i} onClick={() => setTab(i)} style={{ fontWeight: tab===i?700:400, borderBottom: tab===i?'2px solid #2563eb':'none', background:'none', border:'none', fontSize:16, cursor:'pointer', color:tab===i?'#2563eb':'#64748b', padding: '4px 10px' }}>{d.label}</button>
        ))}
      </div>
      <div style={{ color: '#64748b', marginBottom: 10 }}>{demo.desc}</div>
      <div style={{ background: '#f3f4f6', borderRadius: 12, padding: 32, minHeight: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onMouseDown={() => setActive(true)}
          onMouseUp={() => setActive(false)}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          tabIndex={0}
          style={{ outline: 'none' }}
        >
          {demo.simulate === 'checked' ? (
            <label>
              <input type="checkbox" className="pseudo-check" checked={checked} onChange={e => setChecked(e.target.checked)} /> Check me
            </label>
          ) : (
            <span dangerouslySetInnerHTML={{ __html: html }} />
          )}
        </div>
        <style>{css.replace(/\\n/g, '\n')}</style>
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        <button onClick={() => setShowCode(s => !s)} style={{ fontSize: 14, background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6, padding: '4px 10px', cursor: 'pointer' }}>{showCode ? 'Hide Code' : 'Show Code'}</button>
        <button onClick={() => copy(css.replace(/\\n/g, '\n'))} style={{ fontSize: 14, background: '#22c55e', color: '#fff', border: 'none', borderRadius: 6, padding: '4px 10px', cursor: 'pointer' }}>Copy CSS</button>
        {copied && <span style={{ color: '#22c55e', fontWeight: 500, marginLeft: 6 }}>Copied!</span>}
      </div>
      {showCode && (
        <div style={{ background: '#f1f5f9', borderRadius: 8, padding: 10, fontFamily: 'monospace', fontSize: 14, marginTop: 4 }}>
          <b>HTML:</b>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{html}</pre>
          <b>CSS:</b>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{css.replace(/\\n/g, '\n')}</pre>
        </div>
      )}
    </div>
  );
};

export default PseudoDemo;
