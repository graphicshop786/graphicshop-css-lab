import Quiz from './components/Quiz/Quiz';
import DailyChallenge from './components/DailyChallenge/DailyChallenge';
import PortfolioTemplates from './components/PortfolioTemplates/PortfolioTemplates';
import BeginnerTasks from './components/BeginnerTasks/BeginnerTasks';
import ColorPaletteGenerator from './components/UtilityTools/ColorPaletteGenerator';
import GradientBuilder from './components/UtilityTools/GradientBuilder';
import TailwindToCssConverter from './components/UtilityTools/TailwindToCssConverter';
import DownloadZipButton from './components/ExportTools/DownloadZipButton';
import ExportToCodePen from './components/ExportTools/ExportToCodePen';
import ComponentComparison from './components/FrameworkTools/ComponentComparison';
import AboutMe from './components/AboutMe/AboutMe';

import React, { useState, useRef } from 'react';
import { HTMLHint } from 'htmlhint';
import jsPDF from 'jspdf';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import { animationPresets } from './animations';
import { cardPresets, uiPresets } from './presets';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Gallery from './components/Gallery/Gallery';
import AnimationZone from './components/AnimationZone/AnimationZone';
import TransitionPlayground from './components/TransitionPlayground/TransitionPlayground';
import ResponsiveTester from './components/ResponsiveTester/ResponsiveTester';
import PseudoDemo from './components/PseudoDemo/PseudoDemo';
import TypographyZone from './components/TypographyZone/TypographyZone';
import ColorTools from './components/ColorTools/ColorTools';
import CssArt from './components/CssArt/CssArt';
import UtilityGuide from './components/UtilityGuide/UtilityGuide';
import PracticeZone from './components/PracticeZone/PracticeZone';
import CodeEditor from './components/CodeEditor/CodeEditor';
import Tools from './components/Tools/Tools';
import ThemeSwitcher from './components/ThemeSwitcher';


function AppWrapper() {
  return <App />;
}

function App() {
  // Fix: Add menuOpen state for mobile/desktop menu toggle
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false); // for desktop collapse

  // ...existing code...
  // CSS suggestions for beginners
  const { t } = useTranslation();
  const suggestions = React.useMemo(() => [
    "Try using :hover to add interactive effects.",
    "Use rem or em units for responsive font sizes.",
    "Add transitions for smooth animations.",
    "Use flexbox (display: flex) for easy layouts.",
    "Try background gradients for colorful designs.",
    "Use border-radius for rounded corners.",
    "Use box-shadow for depth and emphasis.",
    "Use @media queries for mobile-friendly styles.",
    "Use color contrast for better readability.",
    "Use padding and margin to space out elements.",
    "Try customizing fonts with font-family.",
    "Use outline: none; carefully for accessibility.",
    "Use :focus styles for better accessibility.",
    "Use variables (custom properties) for theme colors.",
    "Try using grid (display: grid) for advanced layouts.",
    "Use semantic HTML for better accessibility.",
    "Add alt text to images for screen readers.",
    "Use sufficient color contrast for text.",
    "Use aria-labels for interactive elements.",
    "Test your design with keyboard navigation.",
    "Use prefers-reduced-motion for accessibility.",
    "Try using clamp() for responsive font sizes.",
    "Use :focus-visible for better focus indication.",
    "Use outline-offset for custom focus rings.",
    "Try CSS animations with @keyframes.",
    "Use will-change for smoother animations.",
    "Use scroll-behavior: smooth for smooth scrolling.",
    "Try aspect-ratio for responsive images.",
    "Use logical properties (margin-inline, etc.) for i18n.",
    "Use prefers-color-scheme for auto dark mode.",
    "Use role attributes for custom widgets.",
    "Use tabIndex for custom focus order.",
    "Use aria-live for dynamic content.",
    "Use CSS custom properties for theming.",
    "Use min(), max(), and clamp() for fluid layouts."
  ], []);
  const [suggestionIndex, setSuggestionIndex] = useState(0);

  // Rotate suggestion every 10 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSuggestionIndex(i => (i + 1) % suggestions.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [suggestions.length]);

  // HTML, CSS, JS state
  const defaultHTML = `<div class="preview">Hello Graphicshop!</div>`;
  const defaultCSS = `/* Type your CSS here */\n.preview {\n  color: #18181b;\n}`;
  const defaultJS = `// Type your JS here\n`;
  const [htmlCode, setHtmlCode] = useState(defaultHTML);
  const [cssCode, setCssCode] = useState(defaultCSS);
  const [jsCode, setJsCode] = useState(defaultJS);
  // Removed color picker state
  // Image upload
  const [imageUrl, setImageUrl] = useState('');
  // Font selection
  const [font, setFont] = useState('sans-serif');
  // HTML validation
  const [htmlError, setHtmlError] = useState('');
  // Accessibility audit
  const [a11yReport, setA11yReport] = useState(null);
  // Version history
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [darkMode, setDarkMode] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [cssError, setCssError] = useState("");
  const [device, setDevice] = useState('desktop');
  const [theme, setTheme] = useState('default');
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [showSaved, setShowSaved] = useState(false);
  const [savedDesigns, setSavedDesigns] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('graphicshop-saves') || '[]');
    } catch {
      return [];
    }
  });
  const cssEditorRef = useRef();
  const htmlEditorRef = useRef();

  // Example CSS snippets for beginners
  const examples = React.useMemo(() => [
    {
      label: "Center Text",
      code: `.preview {\n  text-align: center;\n}`
    },
    {
      label: "Add Border",
      code: `.preview {\n  border: 2px solid #4f46e5;\n  padding: 1rem;\n}`
    },
    {
      label: "Change Background",
      code: `.preview {\n  background: #fbbf24;\n}`
    },
    {
      label: "Rounded Corners",
      code: `.preview {\n  border-radius: 1rem;\n  background: #f3f4f6;\n}`
    },
    {
      label: "Shadow",
      code: `.preview {\n  box-shadow: 0 4px 16px #0002;\n}`
    },
    {
      label: "Pulse Animation",
      code: `.preview {\n  animation: pulse 1s infinite alternate;\n}\n@keyframes pulse {\n  to { transform: scale(1.1); background: #fbbf24; }\n}`
    },
    {
      label: "Accessible Button",
      code: `.preview {\n  background: #2563eb;\n  color: #fff;\n  border-radius: 0.5rem;\n  padding: 0.75rem 1.5rem;\n  font-size: 1.2rem;\n  outline: 2px solid #fff;\n  outline-offset: 2px;\n}`
    },
  ], []);


  // Basic CSS validation (not full, but helps beginners)
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
  // HTML validation
  function validateHTML(html) {
    try {
      const result = HTMLHint.verify(html);
      setHtmlError(result.length ? result.map(r => r.message).join(', ') : '');
    } catch {
      setHtmlError('');
    }
  }

  // Undo/Redo for CSS
  function handleCssChange(value) {
    setUndoStack((stack) => [...stack, cssCode]);
    setCssCode(value || '');
    validateCSS(value || '');
    setRedoStack([]);
    saveVersion(htmlCode, value || '', jsCode);
  }
  function handleHtmlChange(value) {
    setHtmlCode(value || '');
    validateHTML(value || '');
    saveVersion(value || '', cssCode, jsCode);
  }
  function handleJsChange(value) {
    setJsCode(value || '');
    saveVersion(htmlCode, cssCode, value || '');
  }
  // Version history
  function saveVersion(html, css, js) {
    const newHistory = [...history.slice(0, historyIndex + 1), { html, css, js }];
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }
  function restoreVersion(idx) {
    if (history[idx]) {
      setHtmlCode(history[idx].html);
      setCssCode(history[idx].css);
      setJsCode(history[idx].js);
      setHistoryIndex(idx);
    }
  }
  // Import HTML/CSS
  function importFile(type) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = type === 'html' ? '.html,.htm' : '.css';
    input.onchange = e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        if (type === 'html') setHtmlCode(ev.target.result);
        else setCssCode(ev.target.result);
      };
      reader.readAsText(file);
    };
    input.click();
  }
  // Image upload
  function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setImageUrl(ev.target.result);
    reader.readAsDataURL(file);
  }
  // Font selection
  function handleFontChange(e) {
    setFont(e.target.value);
  }
  // Export to PDF
  function exportPDF() {
    const doc = new jsPDF();
    doc.text(htmlCode, 10, 10);
    doc.save('design.pdf');
  }
  // Print
  function printPreview() {
    const win = window.open();
    win.document.write(srcDoc);
    win.print();
    win.close();
  }
  // Export to CodePen
  function exportToCodePen() {
    const form = document.createElement('form');
    form.action = 'https://codepen.io/pen/define';
    form.method = 'POST';
    form.target = '_blank';
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'data';
    input.value = JSON.stringify({ html: htmlCode, css: cssCode, js: jsCode });
    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }
  // Export to JSFiddle
  function exportToJSFiddle() {
    const form = document.createElement('form');
    form.action = 'https://jsfiddle.net/api/post/library/pure/';
    form.method = 'POST';
    form.target = '_blank';
    const htmlInput = document.createElement('input');
    htmlInput.type = 'hidden';
    htmlInput.name = 'html';
    htmlInput.value = htmlCode;
    const cssInput = document.createElement('input');
    cssInput.type = 'hidden';
    cssInput.name = 'css';
    cssInput.value = cssCode;
    const jsInput = document.createElement('input');
    jsInput.type = 'hidden';
    jsInput.name = 'js';
    jsInput.value = jsCode;
    form.appendChild(htmlInput);
    form.appendChild(cssInput);
    form.appendChild(jsInput);
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
  }
  // Accessibility audit
  async function runA11yAudit() {
    // This is a placeholder. In browser, use axe-core directly on the preview iframe.
    setA11yReport('Not implemented in this demo.');
  }
  function undoCss() {
    if (undoStack.length) {
      setRedoStack((stack) => [cssCode, ...stack]);
      setCssCode(undoStack[undoStack.length - 1]);
      setUndoStack((stack) => stack.slice(0, -1));
    }
  }
  function redoCss() {
    if (redoStack.length) {
      setUndoStack((stack) => [...stack, cssCode]);
      setCssCode(redoStack[0]);
      setRedoStack((stack) => stack.slice(1));
    }
  }

  // Format CSS (basic, using Monaco)
  function formatCss() {
    if (cssEditorRef.current) {
      cssEditorRef.current.trigger('any', 'editor.action.formatDocument');
    }
  }

  // Copy CSS
  function copyCss() {
    navigator.clipboard.writeText(cssCode);
  }

  // Download CSS
  function downloadCss() {
    const blob = new Blob([cssCode], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'styles.css';
    a.click();
    URL.revokeObjectURL(url);
  }

  // Save/Share
  function saveDesign() {
    const newSave = { html: htmlCode, css: cssCode, date: new Date().toISOString() };
    const updated = [newSave, ...savedDesigns].slice(0, 10);
    setSavedDesigns(updated);
    localStorage.setItem('graphicshop-saves', JSON.stringify(updated));
  }
  function loadDesign(design) {
    setHtmlCode(design.html);
    setCssCode(design.css);
    setShowSaved(false);
  }
  function clearSaves() {
    setSavedDesigns([]);
    localStorage.removeItem('graphicshop-saves');
  }

  // Device preview
  const deviceStyles = {
    desktop: { width: '100%', height: '24rem', border: '1px solid #e5e7eb', borderRadius: '1rem' },
    tablet: { width: '768px', maxWidth: '100%', height: '24rem', border: '1px solid #e5e7eb', borderRadius: '1rem' },
    mobile: { width: '375px', maxWidth: '100%', height: '24rem', border: '1px solid #e5e7eb', borderRadius: '2rem' },
  };

  // Theme presets for preview area
  const themes = React.useMemo(() => ({
    default: { bg: darkMode ? '#18181b' : '#fff', color: darkMode ? '#fff' : '#18181b' },
    blue: { bg: '#2563eb', color: '#fff' },
    yellow: { bg: '#fbbf24', color: '#18181b' },
    dark: { bg: '#18181b', color: '#fff' },
    light: { bg: '#fff', color: '#18181b' },
    green: { bg: '#22c55e', color: '#fff' },
    pink: { bg: '#ec4899', color: '#fff' },
  }), [darkMode]);

  // Animation replay (if animation present)
  const [replayKey, setReplayKey] = useState(0);
  function replayAnimation() {
    setReplayKey((k) => k + 1);
  }

  const srcDoc = `
    <style>
      body { background: ${themes[theme].bg}; color: ${themes[theme].color}; margin:0; font-family:${font}; }
      .preview { padding: 2rem; font-size: 1.5rem; border-radius: 8px; }
      ${cssCode}
    </style>
    ${imageUrl ? `<img src='${imageUrl}' alt='uploaded' style='max-width:100%;display:block;margin-bottom:1rem;'/>` : ''}
    ${htmlCode}
    <script>${jsCode}</script>
  `;

  // Module navigation state
  const [module, setModule] = useState('editor');

  React.useEffect(() => {
    // Google AdSense script inject
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2292081789675571';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);
    // Google AdSense meta tag
    const meta = document.createElement('meta');
    meta.name = 'google-adsense-account';
    meta.content = 'ca-pub-2292081789675571';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(meta);
    };
  }, []);

  // Determine if sidebar is collapsed (desktop only)
  const isSidebarCollapsed = isCollapsed && window.innerWidth > 1024;

  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900); // simulate load
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="app-loading-overlay">
        <div className="app-loading-box">
          <div className="app-loading-spinner" aria-label="Loading spinner"></div>
          <div className="app-loading-text">Loading...</div>
          <div className="app-loading-desc">Graphicshop CSS Lab is a modern CSS learning and prototyping tool. Practice, design, and export CSS with ease!</div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header and Tip Bar (always at top, full width) */}
      <header className={`custom-header ${darkMode ? 'dark' : ''}`}>
        <div className="custom-header-inner">
          {/* Brand and navigation */}
          <div className="custom-header-brand">
            <span className="custom-header-title">🎨 Graphicshop Pro</span>
            <span className="custom-header-desc">CSS Lab & Learning Platform</span>
          </div>
          <div className="custom-header-actions">
            {/* Hamburger for mobile */}
            <button className="custom-tool-btn custom-header-hamburger" style={{display: 'none'}} aria-label="Open sidebar" onClick={() => setSidebarOpen(true)}>
              <span style={{fontSize:'1.5rem'}}>&#9776;</span>
            </button>
            <button onClick={() => setDarkMode((d) => !d)} aria-label="Toggle dark mode" className="custom-header-dark-btn">{darkMode ? '🌙' : '☀️'}</button>
          </div>
        </div>
        {/* CSS Tip of the Day */}
        <div className="custom-header-tip">
          <span className="custom-header-tip-icon">��</span>
          <span className="custom-header-tip-label">CSS Tip of the Day:</span>
          <span className="custom-header-tip-text">{suggestions[suggestionIndex]}</span>
        </div>
      </header>
      {/* Main flex area: sidebar + content */}
      <div className="main-area">
        <Sidebar setModule={setModule} module={module} darkMode={darkMode} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <main className="main-content">
          {module === 'editor' && (
            <CodeEditor
              cardPresets={cardPresets}
              uiPresets={uiPresets}
              animationPresets={animationPresets}
            />
          )}
          {module === 'about' && <AboutMe />}
          {module === 'transition' && <TransitionPlayground />}
          {module === 'animation' && <AnimationZone />}
          {module === 'gallery' && <Gallery />}
          {module === 'responsive' && <ResponsiveTester />}
          {module === 'pseudo' && <PseudoDemo />}
          {module === 'typography' && <TypographyZone />}
          {module === 'color' && <ColorTools />}
          {module === 'art' && <CssArt />}
          {module === 'utility' && <UtilityGuide />}
          {module === 'practice' && <PracticeZone />}
          {module === 'tools' && <Tools />}
          {module === 'quiz' && <Quiz />}
          {module === 'daily' && <DailyChallenge />}
          {module === 'portfolio' && <PortfolioTemplates />}
          {module === 'beginner' && <BeginnerTasks />}
          {module === 'palette' && <ColorPaletteGenerator />}
          {module === 'gradient' && <GradientBuilder />}
          {module === 'tw2css' && <TailwindToCssConverter />}
          {module === 'download' && <DownloadZipButton />}
          {module === 'codepen' && <ExportToCodePen />}
          {module === 'compare' && <ComponentComparison />}
        </main>
        {sidebarOpen && <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} tabIndex={-1} aria-label="Close sidebar"></div>}
      </div>
      {/* Footer (always at bottom, full width) */}
      <footer className={`custom-footer ${darkMode ? 'dark' : ''}`}>
        <div>
          <div className="footer-brand">🎨 Graphicshop CSS Lab <span style={{ fontWeight: 400, fontSize: '0.9rem' }}>by graphicshop786</span></div>
          <div className="footer-links" style={{ margin: '1rem 0' }}>
            <a href="https://github.com/graphicshop786" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:graphicshop786@gmail.com">Email</a>
            <a href="https://wa.me/923401617879" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
          <div className="footer-note">Made with ❤️ for the web development community</div>
        </div>
      </footer>
    </div>
  );
}

export default AppWrapper;
