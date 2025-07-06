import React, { useState, useRef } from 'react';
import { HTMLHint } from 'htmlhint';
import jsPDF from 'jspdf';
import MonacoEditor from '@monaco-editor/react';

const defaultHTML = `<div class="preview">Hello Graphicshop!</div>`;
const defaultCSS = `/* Type your CSS here */\n.preview {\n  color: #18181b;\n}`;
const defaultJS = `// Type your JS here\n`;

const themes = {
  default: { bg: '#fff', color: '#18181b' },
  blue: { bg: '#2563eb', color: '#fff' },
  yellow: { bg: '#fbbf24', color: '#18181b' },
  dark: { bg: '#18181b', color: '#fff' },
  light: { bg: '#fff', color: '#18181b' },
  green: { bg: '#22c55e', color: '#fff' },
  pink: { bg: '#ec4899', color: '#fff' },
};

const fonts = [
  'sans-serif', 'serif', 'monospace', 'cursive', 'fantasy', 
  'Inter', 'Roboto', 'Merriweather', 'Fira Code', 'Open Sans'
];

function CodeEditor({ cardPresets = [], uiPresets = [], animationPresets = {} }) {
  // Dropdown state
  const [selectedCard, setSelectedCard] = useState('');
  const [selectedUI, setSelectedUI] = useState('');
  const [selectedAnim, setSelectedAnim] = useState('');
  
  // Handle preset selection
  function handleCardPreset(e) {
    const idx = e.target.value;
    if (idx !== '') {
      setHtmlCode(cardPresets[idx].html);
      setCssCode(cardPresets[idx].css);
      setSelectedCard(idx);
    }
  }
  
  function handleUIPreset(e) {
    const idx = e.target.value;
    if (idx !== '') {
      setHtmlCode(uiPresets[idx].html);
      setCssCode(uiPresets[idx].css);
      setSelectedUI(idx);
    }
  }
  
  function handleAnimPreset(e) {
    const key = e.target.value;
    if (key !== '') {
      setCssCode(animationPresets[key].css);
      setSelectedAnim(key);
    }
  }
  
  const [htmlCode, setHtmlCode] = useState(defaultHTML);
  const [cssCode, setCssCode] = useState(defaultCSS);
  const [jsCode, setJsCode] = useState(defaultJS);
  const [font, setFont] = useState('sans-serif');
  const [theme, setTheme] = useState('default');
  const [device, setDevice] = useState('desktop');
  const [htmlError, setHtmlError] = useState('');
  const [cssError, setCssError] = useState('');
  const [copied, setCopied] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // Undo/Redo functionality
  const [history, setHistory] = useState([{ html: defaultHTML, css: defaultCSS, js: defaultJS }]);
  const [historyIndex, setHistoryIndex] = useState(0);
  
  const cssEditorRef = useRef();
  const htmlEditorRef = useRef();
  const jsEditorRef = useRef();

  function saveToHistory(html, css, js) {
    const newHistory = [...history.slice(0, historyIndex + 1), { html, css, js }];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }

  function undo() {
    if (historyIndex > 0) {
      const prevState = history[historyIndex - 1];
      setHtmlCode(prevState.html);
      setCssCode(prevState.css);
      setJsCode(prevState.js);
      setHistoryIndex(historyIndex - 1);
    }
  }

  function redo() {
    if (historyIndex < history.length - 1) {
      const nextState = history[historyIndex + 1];
      setHtmlCode(nextState.html);
      setCssCode(nextState.css);
      setJsCode(nextState.js);
      setHistoryIndex(historyIndex + 1);
    }
  }

  function validateCSS(css) {
    try {
      const style = document.createElement('style');
      style.textContent = css;
      document.head.appendChild(style);
      document.head.removeChild(style);
      setCssError("");
    } catch (e) {
      setCssError("Invalid CSS syntax");
    }
  }
  
  function validateHTML(html) {
    try {
      const result = HTMLHint.verify(html);
      setHtmlError(result.length ? result.map(r => r.message).join(', ') : '');
    } catch {
      setHtmlError('');
    }
  }

  function handleCssChange(value) {
    setCssCode(value || '');
    validateCSS(value || '');
    saveToHistory(htmlCode, value || '', jsCode);
  }
  
  function handleHtmlChange(value) {
    setHtmlCode(value || '');
    validateHTML(value || '');
    saveToHistory(value || '', cssCode, jsCode);
  }
  
  function handleJsChange(value) {
    setJsCode(value || '');
    saveToHistory(htmlCode, cssCode, value || '');
  }

  function formatCss() {
    if (cssEditorRef.current) {
      cssEditorRef.current.trigger('any', 'editor.action.formatDocument');
    }
  }
  
  function formatHtml() {
    if (htmlEditorRef.current) {
      htmlEditorRef.current.trigger('any', 'editor.action.formatDocument');
    }
  }
  
  function formatJs() {
    if (jsEditorRef.current) {
      jsEditorRef.current.trigger('any', 'editor.action.formatDocument');
    }
  }
  
  function copyCss() {
    navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }
  
  function copyHtml() {
    navigator.clipboard.writeText(htmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }
  
  function copyJs() {
    navigator.clipboard.writeText(jsCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }
  
  function downloadCss() {
    const blob = new Blob([cssCode], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'styles.css';
    a.click();
    URL.revokeObjectURL(url);
  }
  
  function downloadHtml() {
    const blob = new Blob([htmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'index.html';
    a.click();
    URL.revokeObjectURL(url);
  }
  
  function exportPDF() {
    const doc = new jsPDF();
    doc.text(htmlCode, 10, 10);
    doc.save('design.pdf');
  }
  
  function resetAll() {
    setHtmlCode(defaultHTML);
    setCssCode(defaultCSS);
    setJsCode(defaultJS);
    setHtmlError('');
    setCssError('');
    setSelectedCard('');
    setSelectedUI('');
    setSelectedAnim('');
  }

  const deviceStyles = {
    desktop: { width: '100%', height: '24rem', border: '1px solid #e5e7eb', borderRadius: '1rem' },
    tablet: { width: '768px', maxWidth: '100%', height: '24rem', border: '1px solid #e5e7eb', borderRadius: '1rem' },
    mobile: { width: '375px', maxWidth: '100%', height: '24rem', border: '1px solid #e5e7eb', borderRadius: '2rem' },
  };

  const srcDoc = `\n    <style>\n      body { background: ${themes[theme].bg}; color: ${themes[theme].color}; margin:0; font-family:${font}; }\n      .preview { padding: 2rem; font-size: 1.5rem; border-radius: 8px; }\n      ${cssCode}\n    </style>\n    ${htmlCode}\n    <script>${jsCode}</script>\n  `;

  return (
    <div style={{ maxWidth: 1400, margin: '0 auto', padding: 24 }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 8, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Code Editor</h2>
        <p style={{ color: '#64748b', fontSize: 16 }}>Write, preview, and experiment with HTML, CSS, and JavaScript</p>
      </div>
      
      {/* Preset Controls */}
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 24, marginBottom: 24 }}>
        <h3 style={{ fontSize: 20, marginBottom: 16, color: '#1e293b' }}>🎨 Quick Start Templates</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
              🔘 UI Components
            </label>
            <select 
              value={selectedUI} 
              onChange={handleUIPreset}
              style={{ 
                width: '100%', 
                padding: '10px 12px', 
                borderRadius: 8, 
                border: '1px solid #d1d5db', 
                fontSize: 14,
                background: 'white'
              }}
            >
              <option value="">Select a Button Example...</option>
              {uiPresets.map((preset, i) => (
                <option key={i} value={i}>{preset.label}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
              🎴 Visual Effect Cards
            </label>
            <select 
              value={selectedCard} 
              onChange={handleCardPreset}
              style={{ 
                width: '100%', 
                padding: '10px 12px', 
                borderRadius: 8, 
                border: '1px solid #d1d5db', 
                fontSize: 14,
                background: 'white'
              }}
            >
              <option value="">Select a Card Example...</option>
              {cardPresets.map((preset, i) => (
                <option key={i} value={i}>{preset.label}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
              ✨ Animations
            </label>
            <select 
              value={selectedAnim} 
              onChange={handleAnimPreset}
              style={{ 
                width: '100%', 
                padding: '10px 12px', 
                borderRadius: 8, 
                border: '1px solid #d1d5db', 
                fontSize: 14,
                background: 'white'
              }}
            >
              <option value="">Select an Animation...</option>
              {Object.entries(animationPresets).map(([key, preset]) => (
                <option key={key} value={key}>{preset.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', lg: 'flex-row', gap: 24 }}>
        {/* Editors Section */}
        <section style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ fontSize: 20, color: '#1e293b' }}>💻 Code Editors</h3>
              <div style={{ display: 'flex', gap: 8 }}>
                <button 
                  onClick={undo}
                  disabled={historyIndex === 0}
                  style={{ 
                    fontSize: 12, 
                    background: historyIndex === 0 ? '#e5e7eb' : '#2563eb', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: 6, 
                    padding: '6px 12px', 
                    cursor: historyIndex === 0 ? 'not-allowed' : 'pointer',
                    fontWeight: 500
                  }}
                >
                  ↩️ Undo
                </button>
                <button 
                  onClick={redo}
                  disabled={historyIndex === history.length - 1}
                  style={{ 
                    fontSize: 12, 
                    background: historyIndex === history.length - 1 ? '#e5e7eb' : '#2563eb', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: 6, 
                    padding: '6px 12px', 
                    cursor: historyIndex === history.length - 1 ? 'not-allowed' : 'pointer',
                    fontWeight: 500
                  }}
                >
                  ↪️ Redo
                </button>
                <button 
                  onClick={resetAll}
                  style={{ 
                    fontSize: 12, 
                    background: '#ef4444', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: 6, 
                    padding: '6px 12px', 
                    cursor: 'pointer',
                    fontWeight: 500
                  }}
                >
                  🔄 Reset
                </button>
              </div>
            </div>
            
            {/* HTML Editor */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <label style={{ fontWeight: 600, color: '#374151', fontSize: 16 }}>📄 HTML Editor</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button 
                    onClick={formatHtml}
                    style={{ 
                      fontSize: 12, 
                      background: '#fbbf24', 
                      color: '#18181b', 
                      border: 'none', 
                      borderRadius: 6, 
                      padding: '4px 8px', 
                      cursor: 'pointer',
                      fontWeight: 500
                    }}
                  >
                    Format
                  </button>
                  <button 
                    onClick={copyHtml}
                    style={{ 
                      fontSize: 12, 
                      background: '#10b981', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: 6, 
                      padding: '4px 8px', 
                      cursor: 'pointer',
                      fontWeight: 500
                    }}
                  >
                    Copy
                  </button>
                  <button 
                    onClick={downloadHtml}
                    style={{ 
                      fontSize: 12, 
                      background: '#8b5cf6', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: 6, 
                      padding: '4px 8px', 
                      cursor: 'pointer',
                      fontWeight: 500
                    }}
                  >
                    Download
                  </button>
                </div>
              </div>
              <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                <MonacoEditor
                  height="120px"
                  defaultLanguage="html"
                  theme="light"
                  value={htmlCode}
                  onChange={handleHtmlChange}
                  options={{
                    fontSize: 14,
                    minimap: { enabled: false },
                    wordWrap: 'on',
                    fontFamily: 'Fira Code, monospace',
                    lineNumbers: 'on',
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    formatOnType: true,
                    formatOnPaste: true,
                    suggestOnTriggerCharacters: true,
                    tabSize: 2,
                    quickSuggestions: true,
                    snippetSuggestions: 'inline',
                    emmet: true,
                  }}
                  editorDidMount={(_editor, monaco) => {
                    if (monaco.languages && monaco.languages.html && monaco.languages.html.htmlDefaults) {
                      monaco.languages.html.htmlDefaults.setOptions({
                        format: { wrapLineLength: 120, unformatted: 'none' },
                      });
                    }
                    htmlEditorRef.current = _editor;
                  }}
                />
              </div>
              {htmlError && (
                <div style={{ color: '#ef4444', marginTop: 4, fontSize: 12, padding: 8, background: '#fef2f2', borderRadius: 4, border: '1px solid #fecaca' }}>
                  ⚠️ {htmlError}
                </div>
              )}
            </div>
            
            {/* CSS Editor */}
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <label style={{ fontWeight: 600, color: '#374151', fontSize: 16 }}>🎨 CSS Editor</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button 
                    onClick={formatCss}
                    style={{ 
                      fontSize: 12, 
                      background: '#fbbf24', 
                      color: '#18181b', 
                      border: 'none', 
                      borderRadius: 6, 
                      padding: '4px 8px', 
                      cursor: 'pointer',
                      fontWeight: 500
                    }}
                  >
                    Format
                  </button>
                  <button 
                    onClick={copyCss}
                    style={{ 
                      fontSize: 12, 
                      background: '#10b981', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: 6, 
                      padding: '4px 8px', 
                      cursor: 'pointer',
                      fontWeight: 500
                    }}
                  >
                    Copy
                  </button>
                  <button 
                    onClick={downloadCss}
                    style={{ 
                      fontSize: 12, 
                      background: '#8b5cf6', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: 6, 
                      padding: '4px 8px', 
                      cursor: 'pointer',
                      fontWeight: 500
                    }}
                  >
                    Download
                  </button>
                </div>
              </div>
              <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                <MonacoEditor
                  height="120px"
                  defaultLanguage="css"
                  theme="light"
                  value={cssCode}
                  onChange={handleCssChange}
                  options={{
                    fontSize: 14,
                    minimap: { enabled: false },
                    wordWrap: 'on',
                    fontFamily: 'Fira Code, monospace',
                    lineNumbers: 'on',
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    formatOnType: true,
                    formatOnPaste: true,
                    suggestOnTriggerCharacters: true,
                    tabSize: 2,
                    quickSuggestions: true,
                    snippetSuggestions: 'inline',
                    emmet: true,
                  }}
                  editorDidMount={(_editor, monaco) => {
                    if (monaco.languages && monaco.languages.css && monaco.languages.css.cssDefaults) {
                      monaco.languages.css.cssDefaults.setOptions({
                        validate: true,
                        lint: { compatibleVendorPrefixes: 'ignore', vendorPrefix: 'warning', duplicateProperties: 'warning' },
                      });
                    }
                    cssEditorRef.current = _editor;
                  }}
                />
              </div>
              {cssError && (
                <div style={{ color: '#ef4444', marginTop: 4, fontSize: 12, padding: 8, background: '#fef2f2', borderRadius: 4, border: '1px solid #fecaca' }}>
                  ⚠️ {cssError}
                </div>
              )}
            </div>
            
            {/* JS Editor */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                <label style={{ fontWeight: 600, color: '#374151', fontSize: 16 }}>⚡ JavaScript Editor</label>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button 
                    onClick={formatJs}
                    style={{ 
                      fontSize: 12, 
                      background: '#fbbf24', 
                      color: '#18181b', 
                      border: 'none', 
                      borderRadius: 6, 
                      padding: '4px 8px', 
                      cursor: 'pointer',
                      fontWeight: 500
                    }}
                  >
                    Format
                  </button>
                  <button 
                    onClick={copyJs}
                    style={{ 
                      fontSize: 12, 
                      background: '#10b981', 
                      color: 'white', 
                      border: 'none', 
                      borderRadius: 6, 
                      padding: '4px 8px', 
                      cursor: 'pointer',
                      fontWeight: 500
                    }}
                  >
                    Copy
                  </button>
                </div>
              </div>
              <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #e2e8f0' }}>
                <MonacoEditor
                  height="120px"
                  defaultLanguage="javascript"
                  theme="light"
                  value={jsCode}
                  onChange={handleJsChange}
                  options={{
                    fontSize: 14,
                    minimap: { enabled: false },
                    wordWrap: 'on',
                    fontFamily: 'Fira Code, monospace',
                    lineNumbers: 'on',
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    formatOnType: true,
                    formatOnPaste: true,
                    suggestOnTriggerCharacters: true,
                    tabSize: 2,
                    quickSuggestions: true,
                    snippetSuggestions: 'inline',
                    emmet: true,
                  }}
                  editorDidMount={(_editor) => {
                    jsEditorRef.current = _editor;
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Preview Section */}
        <section style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <h3 style={{ fontSize: 20, color: '#1e293b' }}>👀 Live Preview</h3>
              <button 
                onClick={() => setShowSettings(!showSettings)}
                style={{ 
                  fontSize: 12, 
                  background: '#64748b', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: 6, 
                  padding: '6px 12px', 
                  cursor: 'pointer',
                  fontWeight: 500
                }}
              >
                ⚙️ Settings
              </button>
            </div>
            
            {showSettings && (
              <div style={{ 
                background: '#f8fafc', 
                borderRadius: 8, 
                padding: 16, 
                marginBottom: 16,
                border: '1px solid #e2e8f0'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: 4, fontSize: 12, fontWeight: 500, color: '#64748b' }}>
                      📱 Device
                    </label>
                    <select 
                      value={device} 
                      onChange={e => setDevice(e.target.value)}
                      style={{ 
                        width: '100%', 
                        padding: '6px 8px', 
                        borderRadius: 4, 
                        border: '1px solid #d1d5db', 
                        fontSize: 12,
                        background: 'white'
                      }}
                    >
                      <option value="desktop">🖥️ Desktop</option>
                      <option value="tablet">📱 Tablet</option>
                      <option value="mobile">📱 Mobile</option>
                    </select>
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', marginBottom: 4, fontSize: 12, fontWeight: 500, color: '#64748b' }}>
                      🎨 Theme
                    </label>
                    <select 
                      value={theme} 
                      onChange={e => setTheme(e.target.value)}
                      style={{ 
                        width: '100%', 
                        padding: '6px 8px', 
                        borderRadius: 4, 
                        border: '1px solid #d1d5db', 
                        fontSize: 12,
                        background: 'white'
                      }}
                    >
                      {Object.keys(themes).map(t => (
                        <option key={t} value={t}>{t.charAt(0).toUpperCase() + t.slice(1)}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', marginBottom: 4, fontSize: 12, fontWeight: 500, color: '#64748b' }}>
                      🔤 Font
                    </label>
                    <select 
                      value={font} 
                      onChange={e => setFont(e.target.value)}
                      style={{ 
                        width: '100%', 
                        padding: '6px 8px', 
                        borderRadius: 4, 
                        border: '1px solid #d1d5db', 
                        fontSize: 12,
                        background: 'white'
                      }}
                    >
                      {fonts.map(f => (
                        <option key={f} value={f}>{f}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}
            
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              minHeight: 300,
              background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
              borderRadius: 12,
              padding: 24,
              border: '2px dashed #e2e8f0',
              position: 'relative'
            }}>
              <div style={{ 
                background: '#1e293b', 
                borderRadius: 12, 
                padding: 8, 
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                position: 'relative'
              }}>
                <div style={{ 
                  position: 'absolute', 
                  top: -30, 
                  left: '50%', 
                  transform: 'translateX(-50%)',
                  background: '#1e293b',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: 6,
                  fontSize: 12,
                  fontWeight: 500
                }}>
                  {device === 'desktop' ? '🖥️' : device === 'tablet' ? '📱' : '📱'} {device.charAt(0).toUpperCase() + device.slice(1)}
                </div>
                
                <div style={{ 
                  ...deviceStyles[device],
                  background: '#f3f4f6',
                  borderRadius: 8,
                  overflow: 'auto',
                  border: '1px solid #374155',
                  position: 'relative'
                }}>
                  <iframe
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      border: 'none',
                      borderRadius: 8
                    }}
                    srcDoc={srcDoc}
                    sandbox="allow-scripts"
                    title="preview"
                  />
                </div>
              </div>
            </div>
            
            <div style={{ 
              marginTop: 16, 
              padding: 12, 
              background: '#f8fafc', 
              borderRadius: 8,
              border: '1px solid #e2e8f0',
              fontSize: 12,
              color: '#64748b'
            }}>
              <div style={{ fontWeight: 500, marginBottom: 4 }}>📊 Preview Info:</div>
              <div>Device: {device.charAt(0).toUpperCase() + device.slice(1)} | Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)} | Font: {font}</div>
            </div>
          </div>
        </section>
      </div>
      
      {copied && (
        <div style={{ 
          position: 'fixed',
          top: 20,
          right: 20,
          background: '#10b981',
          color: 'white',
          padding: '12px 20px',
          borderRadius: 8,
          fontSize: 14,
          fontWeight: 500,
          zIndex: 1000,
          animation: 'fadeInOut 1.2s ease'
        }}>
          ✅ Copied to clipboard!
        </div>
      )}
      
      <style>{`
        @keyframes fadeInOut {
          0%, 100% { opacity: 0; transform: translateY(-10px); }
          20%, 80% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default CodeEditor;
