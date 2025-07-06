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

  return (
    <div className={`min-h-screen p-0 flex flex-col gap-0 transition-colors duration-300 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-blue-100'}`}>
      {/* Enhanced Pro Top Bar */}
      <header className={`sticky top-0 z-30 w-full shadow-lg backdrop-blur bg-opacity-70 ${darkMode ? 'bg-gray-900/80 border-b border-gray-800' : 'bg-white/80 border-b border-blue-200'}`} style={{backdropFilter:'blur(12px)'}}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 py-3 gap-3">
          {/* Brand and navigation */}
          <div className="flex items-center gap-4 w-full lg:w-auto justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-extrabold tracking-tight text-blue-600 select-none">🎨 Graphicshop Pro</span>
              <span className="hidden sm:inline text-sm text-gray-600 dark:text-gray-400">CSS Lab & Learning Platform</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setDarkMode((d) => !d)} aria-label="Toggle dark mode" className={`px-3 py-1.5 rounded-lg font-semibold shadow transition-all duration-150 border ${darkMode ? 'bg-gray-800 text-white border-gray-700 hover:bg-gray-700' : 'bg-white text-gray-900 border-blue-200 hover:bg-blue-100'}`}>{darkMode ? '🌙' : '☀️'}</button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Help section */}
      {showHelp && (
        <div className={`mb-4 p-6 rounded-xl ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-blue-200'}`}> 
          <h2 className="font-bold mb-3 text-xl">💡 How to use Graphicshop CSS Lab:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2 text-blue-600">🎯 Getting Started</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Write or paste your custom <b>HTML</b> and <b>CSS</b> in the editors</li>
                <li>Use the example buttons to quickly try common CSS styles</li>
                <li>Click <b>Reset</b> to start over with a clean slate</li>
                <li>See the live preview update in real-time</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-green-600">🚀 Advanced Features</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Switch between Light and Dark mode for different contexts</li>
                <li>Use <b>Undo/Redo</b> for CSS changes, <b>Format</b> for clean code</li>
                <li>Save and load your favorite designs with <b>Save</b> and <b>Show Saves</b></li>
                <li>Export your work with <b>Copy/Download</b> options</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Saved Designs */}
      {showSaved && (
        <div className={`mb-4 p-6 rounded-xl ${darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-blue-200'}`}> 
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-xl">💾 Saved Designs</h2>
            <button onClick={clearSaves} className="px-3 py-1.5 rounded-lg bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition-colors">Clear All</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {savedDesigns.length === 0 && <span className="text-gray-500 col-span-full text-center py-4">No saved designs yet. Create something amazing and save it!</span>}
            {savedDesigns.map((d, i) => (
              <button key={i} onClick={() => loadDesign(d)} className="p-3 rounded-lg border bg-white text-gray-900 shadow hover:shadow-md transition-all text-left">
                <div className="font-medium text-sm">{d.date.slice(0, 19).replace('T', ' ')}</div>
                <div className="text-xs text-gray-500 mt-1">Click to load</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Enhanced Suggestion box */}
      <div className={`rounded-xl p-6 text-base font-medium mb-6 shadow-lg border mx-4 ${darkMode ? 'bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-blue-200 border-gray-700' : 'bg-gradient-to-r from-blue-100 via-white to-blue-50 text-blue-900 border-blue-200'}`}
        style={{transition: 'background 0.3s'}}>
        <div className="flex items-center gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <div className="font-semibold mb-1">CSS Tip of the Day:</div>
            <div>{suggestions[suggestionIndex]}</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl mx-auto px-4 py-6">
        {/* Enhanced Sidebar navigation */}
        <Sidebar setModule={setModule} module={module} />
        
        <div className="flex-1">
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
        </div>
      </main>

      {/* Enhanced Footer */}
      <footer className={`mt-auto py-8 ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-600'} border-t ${darkMode ? 'border-gray-800' : 'border-blue-200'}`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">🎨</span>
              <span className="font-semibold text-blue-600">Graphicshop CSS Lab</span>
              <span className="text-sm">by graphicshop786</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="https://github.com/graphicshop786" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a>
              <a href="mailto:graphicshop786@gmail.com" className="hover:text-blue-600 transition-colors">Email</a>
              <a href="https://wa.me/923401617879" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">WhatsApp</a>
            </div>
          </div>
          <div className="mt-4 text-xs opacity-75">
            Made with ❤️ for the web development community
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AppWrapper;
