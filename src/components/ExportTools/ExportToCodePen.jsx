import React from 'react';

// Example: Export a simple HTML/CSS snippet to CodePen
export default function ExportToCodePen({ html, css, js }) {
  function handleExport() {
    const form = document.createElement('form');
    form.action = 'https://codepen.io/pen/define';
    form.method = 'POST';
    form.target = '_blank';
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'data';
    input.value = JSON.stringify({ html: html || '<div>Hello from Graphicshop!</div>', css: css || '', js: js || '' });
    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }
  return (
    <button onClick={handleExport} style={{ background: '#111', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 16px', cursor: 'pointer' }}>
      Export to CodePen
    </button>
  );
}
