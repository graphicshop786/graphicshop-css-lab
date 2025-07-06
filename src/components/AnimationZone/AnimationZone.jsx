import React, { useState, useEffect } from 'react';
import { animationPresets } from '../../animations';

const timingFunctions = [
  'ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out', 'step-start', 'step-end'
];

const AnimationZone = () => {
  // Convert object to array and extract keyframes and preview for each preset
  const animArray = Object.values(animationPresets).map(preset => {
    let keyframes = '';
    let preview = '';
    if (preset.css) {
      // Extract @keyframes block
      const match = preset.css.match(/@keyframes [^{]+{([\s\S]*?)}/);
      if (match) keyframes = match[1].trim();
      // Use preset.demo if present, else fallback to label
      preview = preset.demo || preset.label;
    }
    return { ...preset, keyframes, preview };
  });
  
  const [selected, setSelected] = useState(0);
  const [duration, setDuration] = useState(1);
  const [timing, setTiming] = useState('ease');
  const [delay, setDelay] = useState(0);
  const [iteration, setIteration] = useState(1);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  // Add a key to force re-mount the preview div when animation changes
  const [replayKey, setReplayKey] = useState(0);
  
  const preset = animArray[selected];
  const animName = `anim-${selected}`;
  
  // Extract keyframes from the preset
  let keyframes = '';
  if (preset && preset.css) {
    const match = preset.css.match(/@keyframes [^{]+{([\s\S]*?)}/);
    if (match) {
      keyframes = match[1].trim();
    }
  }
  
  // Get the base styles (everything except @keyframes and .anim-demo)
  let baseCss = '';
  if (preset && preset.css) {
    baseCss = preset.css
      .replace(/\.anim-demo\s*{[^}]*}/g, '')
      .replace(/@keyframes[\s\S]*?{[\s\S]*?}/g, '')
      .trim();
  }
  
  // Compose the final CSS
  const css = `
    @keyframes ${animName} {
      ${keyframes}
    }
    
    .demo-anim {
      ${baseCss}
      animation-name: ${animName};
      animation-duration: ${duration}s;
      animation-timing-function: ${timing};
      animation-delay: ${delay}s;
      animation-iteration-count: ${iteration === 'infinite' ? 'infinite' : iteration};
      animation-fill-mode: both;
    }
  `;
  
  function copy(text) {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }
  
  // Function to replay animation
  function replayAnimation() {
    setReplayKey(k => k + 1);
  }
  
  // Force re-mount the preview div on any animation parameter change
  useEffect(() => {
    setReplayKey(k => k + 1);
  }, [selected, duration, timing, delay, iteration]);
  
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">⚡ Animation Zone</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Create and customize beautiful CSS animations with real-time preview
        </p>
        
        {/* Controls */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>
      </div>
      
      {/* Animation Controls */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">🎬 Animation Controls</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              🎭 Animation Type
            </label>
            <select 
              value={selected} 
              onChange={e => setSelected(Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              {animArray.map((a, i) => (
                <option key={i} value={i}>{a.label}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              ⏱️ Duration: {duration}s
            </label>
            <input 
              type="range" 
              min="0.2" 
              max="5" 
              step="0.05" 
              value={duration} 
              onChange={e => setDuration(Number(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              📈 Timing Function
            </label>
            <select 
              value={timing} 
              onChange={e => setTiming(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              {timingFunctions.map(f => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              ⏰ Delay: {delay}s
            </label>
            <input 
              type="range" 
              min="0" 
              max="3" 
              step="0.05" 
              value={delay} 
              onChange={e => setDelay(Number(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              🔄 Iterations
            </label>
            <select 
              value={iteration} 
              onChange={e => setIteration(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              {[1,2,3,4,5,'infinite'].map(v => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {/* Live Preview */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">🎬 Live Preview</h3>
          <button 
            onClick={replayAnimation}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
          >
            🔄 Replay Animation
          </button>
        </div>
        <div className={`bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg p-12 min-h-64 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600`}>
          <div
            key={replayKey}
            className="demo-anim text-4xl font-bold text-gray-900 dark:text-white"
            dangerouslySetInnerHTML={{ __html: preset && preset.preview ? preset.preview : '✨ Animate me! ✨' }}
          />
          <style>{css}</style>
        </div>
        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          💡 Changes update in real-time! Use the replay button to restart the animation.
        </div>
      </div>
      
      {/* Code Section */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex gap-3 mb-4 flex-wrap">
          <button 
            onClick={() => setShowCode(s => !s)} 
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              showCode 
                ? 'bg-gray-500 hover:bg-gray-600 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {showCode ? '👁️ Hide Code' : '💻 Show Code'}
          </button>
          <button 
            onClick={() => copy(css)} 
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors"
          >
            📋 Copy CSS
          </button>
          {copied && (
            <div className="px-4 py-2 bg-green-600 text-white rounded-lg font-medium animate-pulse">
              ✅ Copied!
            </div>
          )}
        </div>
        
        {showCode && (
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 border border-gray-700">
            <div className="mb-3 text-yellow-400 font-semibold">🎨 Generated CSS:</div>
            <pre className="text-gray-300 dark:text-gray-400 text-sm overflow-x-auto whitespace-pre-wrap">{css}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimationZone;
