import React from 'react';
import JSZip from 'jszip';

// Example: Download a ZIP with a few sample files
export default function DownloadZipButton() {
  async function handleDownload() {
    const zip = new JSZip();
    // Add sample files (replace with real component code as needed)
    zip.file('README.txt', 'Thanks for using Graphicshop CSS Lab!');
    zip.file('Button.html', `<button class='btn'>Button</button>`);
    zip.file('Button.css', `.btn { background: #2563eb; color: #fff; padding: 12px 24px; border-radius: 6px; }`);
    zip.file('Card.html', `<div class='card'>Card</div>`);
    zip.file('Card.css', `.card { box-shadow: 0 2px 8px #0002; border-radius: 12px; padding: 24px; }`);
    // Generate ZIP and trigger download
    const blob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'graphicshop-components.zip';
    a.click();
    URL.revokeObjectURL(url);
  }
  return (
    <button onClick={handleDownload} style={{ background: '#2563eb', color: '#fff', border: 'none', borderRadius: 6, padding: '8px 16px', cursor: 'pointer' }}>
      Download All as ZIP
    </button>
  );
}
