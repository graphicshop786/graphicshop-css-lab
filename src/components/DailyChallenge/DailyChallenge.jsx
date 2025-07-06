import React, { useState, useEffect } from 'react';

const challenges = [
  {
    id: 1,
    title: 'Create a floating action button',
    description: 'Design a modern floating action button with shadow and hover effects',
    difficulty: 'Easy',
    category: 'Components',
    html: '<button class="fab">+</button>',
    startingCss: '/* Create a floating action button */\n.fab {\n  /* Add your styles here */\n}',
    solution: `.fab {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  position: relative;
}

.fab:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
}

.fab:active {
  transform: translateY(0);
}`,
    hints: ['Use border-radius: 50% for circular shape', 'Add box-shadow for floating effect', 'Use transform on hover']
  },
  {
    id: 2,
    title: 'Create a progress bar',
    description: 'Design an animated progress bar with gradient fill',
    difficulty: 'Medium',
    category: 'UI Elements',
    html: '<div class="progress-container">\n  <div class="progress-bar"></div>\n</div>',
    startingCss: '/* Create an animated progress bar */\n.progress-container {\n  /* Add your styles here */\n}\n\n.progress-bar {\n  /* Add your styles here */\n}',
    solution: `.progress-container {
  width: 100%;
  height: 8px;
  background-color: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 4px;
  animation: progress 2s ease-in-out infinite;
  width: 75%;
}

@keyframes progress {
  0% { width: 0%; }
  50% { width: 75%; }
  100% { width: 0%; }
}`,
    hints: ['Use overflow: hidden to clip the bar', 'Add animation with @keyframes', 'Use linear-gradient for colorful fill']
  },
  {
    id: 3,
    title: 'Create a card with image overlay',
    description: 'Design a card with an image and text overlay on hover',
    difficulty: 'Medium',
    category: 'Cards',
    html: '<div class="card">\n  <div class="card-image"></div>\n  <div class="card-overlay">\n    <h3>Beautiful Card</h3>\n    <p>Hover to see the magic!</p>\n  </div>\n</div>',
    startingCss: '/* Create a card with image overlay */\n.card {\n  /* Add your styles here */\n}\n\n.card-image {\n  /* Add your styles here */\n}\n\n.card-overlay {\n  /* Add your styles here */\n}',
    solution: `.card {
  position: relative;
  width: 300px;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
}

.card-image {
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #667eea, #764ba2);
  transition: transform 0.3s ease;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  text-align: center;
  padding: 20px;
}

.card:hover .card-image {
  transform: scale(1.1);
}

.card:hover .card-overlay {
  opacity: 1;
}

.card-overlay h3 {
  margin: 0 0 8px 0;
  font-size: 24px;
}

.card-overlay p {
  margin: 0;
  opacity: 0.9;
}`,
    hints: ['Use position: relative/absolute for overlay', 'Add opacity transition for smooth reveal', 'Use transform: scale() for zoom effect']
  },
  {
    id: 4,
    title: 'Create a toggle switch',
    description: 'Design a modern toggle switch with smooth animation',
    difficulty: 'Hard',
    category: 'Interactive',
    html: '<label class="toggle">\n  <input type="checkbox">\n  <span class="slider"></span>\n</label>',
    startingCss: '/* Create a toggle switch */\n.toggle {\n  /* Add your styles here */\n}\n\n.slider {\n  /* Add your styles here */\n}',
    solution: `.toggle {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.toggle input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2563eb;
}

input:checked + .slider:before {
  transform: translateX(26px);
}`,
    hints: ['Hide the checkbox with opacity: 0', 'Use :before pseudo-element for the circle', 'Use transform: translateX() for movement']
  },
  {
    id: 5,
    title: 'Create a loading skeleton',
    description: 'Design a skeleton loading animation for content',
    difficulty: 'Medium',
    category: 'Animation',
    html: '<div class="skeleton">\n  <div class="skeleton-avatar"></div>\n  <div class="skeleton-content">\n    <div class="skeleton-line"></div>\n    <div class="skeleton-line"></div>\n  </div>\n</div>',
    startingCss: '/* Create a skeleton loading animation */\n.skeleton {\n  /* Add your styles here */\n}\n\n.skeleton-avatar {\n  /* Add your styles here */\n}\n\n.skeleton-line {\n  /* Add your styles here */\n}',
    solution: `.skeleton {
  display: flex;
  gap: 16px;
  padding: 16px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.skeleton-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: shimmer 1.5s infinite;
}

.skeleton-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skeleton-line {
  height: 12px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200px 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

.skeleton-line:first-child {
  width: 80%;
}

.skeleton-line:last-child {
  width: 60%;
}

@keyframes shimmer {
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
}`,
    hints: ['Use linear-gradient for shimmer effect', 'Add animation with @keyframes', 'Use different widths for variety']
  },
  {
    id: 6,
    title: 'Create a notification badge',
    description: 'Design a notification badge with pulse animation',
    difficulty: 'Easy',
    category: 'Components',
    html: '<div class="notification">\n  <span class="icon">🔔</span>\n  <span class="badge">3</span>\n</div>',
    startingCss: '/* Create a notification badge */\n.notification {\n  /* Add your styles here */\n}\n\n.badge {\n  /* Add your styles here */\n}',
    solution: `.notification {
  position: relative;
  display: inline-block;
  padding: 12px;
  background: #f8fafc;
  border-radius: 8px;
  cursor: pointer;
}

.icon {
  font-size: 24px;
}

.badge {
  position: absolute;
  top: 4px;
  right: 4px;
  background: #ef4444;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: bold;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
  }
  70% {
    transform: scale(1.1);
    box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
  }
}`,
    hints: ['Use position: absolute for badge positioning', 'Add pulse animation with box-shadow', 'Use border-radius: 50% for circular badge']
  }
];

export default function DailyChallenge() {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [css, setCss] = useState(challenges[0].startingCss);
  const [html, setHtml] = useState(challenges[0].html);
  const [showSolution, setShowSolution] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [streak, setStreak] = useState(0);
  const [completedToday, setCompletedToday] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    // Load streak from localStorage
    const savedStreak = localStorage.getItem('graphicshop-challenge-streak');
    if (savedStreak) {
      setStreak(parseInt(savedStreak));
    }
    
    // Check if completed today
    const today = new Date().toDateString();
    const lastCompleted = localStorage.getItem('graphicshop-last-completed');
    if (lastCompleted === today) {
      setCompletedToday(true);
    }
  }, []);
  
  function nextChallenge() {
    const next = (currentChallenge + 1) % challenges.length;
    setCurrentChallenge(next);
    setCss(challenges[next].startingCss);
    setHtml(challenges[next].html);
    setShowSolution(false);
    setShowHints(false);
  }
  
  function toggleSolution() {
    if (showSolution) {
      setCss(challenges[currentChallenge].startingCss);
    } else {
      setCss(challenges[currentChallenge].solution);
    }
    setShowSolution(!showSolution);
  }
  
  function markAsCompleted() {
    if (!completedToday) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      setCompletedToday(true);
      localStorage.setItem('graphicshop-challenge-streak', newStreak.toString());
      localStorage.setItem('graphicshop-last-completed', new Date().toDateString());
    }
  }
  
  function resetStreak() {
    setStreak(0);
    setCompletedToday(false);
    localStorage.removeItem('graphicshop-challenge-streak');
    localStorage.removeItem('graphicshop-last-completed');
  }
  
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">📅 Daily CSS Challenge</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Complete a new CSS challenge every day to improve your skills!
        </p>
        
        {/* Streak Counter */}
        <div className="max-w-md mx-auto mb-6">
          <div className="bg-gradient-to-r from-orange-400 to-red-500 rounded-xl p-4 text-white">
            <div className="flex items-center justify-center gap-3">
              <span className="text-2xl">🔥</span>
              <div>
                <div className="text-sm opacity-90">Current Streak</div>
                <div className="text-2xl font-bold">{streak} days</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
          <button
            onClick={resetStreak}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            🔄 Reset Streak
          </button>
        </div>
      </div>
      
      {/* Challenge Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        {challenges.map((challenge, idx) => (
          <button 
            key={challenge.id} 
            onClick={() => {
              setCurrentChallenge(idx);
              setCss(challenge.startingCss);
              setHtml(challenge.html);
              setShowSolution(false);
              setShowHints(false);
            }}
            className={`p-4 rounded-lg border-2 transition-all duration-200 ${
              currentChallenge === idx 
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            <div className="text-center">
              <div className="font-bold text-lg">{challenge.id}</div>
              <div className="text-xs opacity-75">{challenge.difficulty}</div>
              <div className="text-xs mt-1">{challenge.category}</div>
            </div>
          </button>
        ))}
      </div>
      
      {/* Current Challenge */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{challenges[currentChallenge].title}</h2>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            challenges[currentChallenge].difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
            challenges[currentChallenge].difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
            'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
          }`}>
            {challenges[currentChallenge].difficulty}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {challenges[currentChallenge].category}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{challenges[currentChallenge].description}</p>
        
        {/* Challenge Controls */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button 
            onClick={toggleSolution}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              showSolution 
                ? 'bg-gray-500 hover:bg-gray-600 text-white' 
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
          >
            {showSolution ? '👁️ Hide Solution' : '💡 Show Solution'}
          </button>
          <button
            onClick={() => setShowHints(!showHints)}
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors"
          >
            💡 {showHints ? 'Hide Hints' : 'Show Hints'}
          </button>
          <button
            onClick={nextChallenge}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
          >
            ➡️ Next Challenge
          </button>
          <button
            onClick={markAsCompleted}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              completedToday
                ? 'bg-green-500 hover:bg-green-600 text-white'
                : 'bg-green-100 hover:bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-200'
            }`}
          >
            {completedToday ? '✅ Completed Today' : '🎯 Mark Complete'}
          </button>
        </div>
        
        {/* Hints */}
        {showHints && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-4 border border-yellow-200 dark:border-yellow-800 mb-6">
            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">💡 Hints:</h4>
            <ul className="text-yellow-700 dark:text-yellow-300 space-y-1">
              {challenges[currentChallenge].hints.map((hint, index) => (
                <li key={index}>• {hint}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      {/* Editor and Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* HTML Editor */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">🌐 HTML</h3>
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            className="w-full h-32 font-mono text-sm p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white resize-none"
            placeholder="Write your HTML here..."
          />
        </div>
        
        {/* CSS Editor */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">💻 CSS</h3>
          <textarea
            value={css}
            onChange={(e) => setCss(e.target.value)}
            className="w-full h-32 font-mono text-sm p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white resize-none"
            placeholder="Write your CSS here..."
          />
        </div>
      </div>
      
      {/* Live Preview */}
      <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">👁️ Live Preview</h3>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Real-time updates
          </div>
        </div>
        <div className={`border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 min-h-64 flex items-center justify-center ${
          darkMode ? 'bg-gray-900' : 'bg-gray-50'
        }`}>
          <style>{css}</style>
          <div 
            dangerouslySetInnerHTML={{ __html: html }} 
            className={darkMode ? 'dark' : ''}
          />
        </div>
      </div>
    </div>
  );
}
