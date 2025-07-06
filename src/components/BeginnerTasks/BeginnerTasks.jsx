import React, { useState, useEffect } from 'react';

const tasks = [
  {
    id: 1,
    title: 'Create a button with hover effect',
    description: 'Create a button that changes color and scale when hovered over.',
    difficulty: 'Easy',
    category: 'Interactive',
    startingCode: `.button {
  /* Add your styles here */
  /* Hint: Use transition for smooth effects */
}`,
    solution: `.button {
  background-color: #2563eb;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.button:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}`,
    html: `<button class="button">Hover Me</button>`
  },
  {
    id: 2,
    title: 'Center a div using Flexbox',
    description: 'Center the box both horizontally and vertically using Flexbox.',
    difficulty: 'Easy',
    category: 'Layout',
    startingCode: `.container {
  /* Add your styles here */
  height: 200px;
  border: 2px solid #e2e8f0;
  background: #f8fafc;
}

.box {
  width: 100px;
  height: 100px;
  background-color: #2563eb;
  border-radius: 8px;
}`,
    solution: `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 2px solid #e2e8f0;
  background: #f8fafc;
}

.box {
  width: 100px;
  height: 100px;
  background-color: #2563eb;
  border-radius: 8px;
}`,
    html: `<div class="container">
  <div class="box"></div>
</div>`
  },
  {
    id: 3,
    title: 'Create a responsive card layout',
    description: 'Create a card that adjusts its width and padding based on screen size.',
    difficulty: 'Medium',
    category: 'Responsive',
    startingCode: `.card {
  /* Add your styles here */
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border: 1px solid #e2e8f0;
}`,
    solution: `.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border: 1px solid #e2e8f0;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

@media (max-width: 600px) {
  .card {
    padding: 16px;
    max-width: 100%;
  }
}`,
    html: `<div class="card">
  <h2 style="margin: 0 0 12px 0; color: #1e293b;">Card Title</h2>
  <p style="margin: 0; color: #64748b; line-height: 1.6;">This is a responsive card that will adjust based on screen size.</p>
</div>`
  },
  {
    id: 4,
    title: 'Create a navigation menu',
    description: 'Create a horizontal navigation menu with hover effects and active states.',
    difficulty: 'Medium',
    category: 'Navigation',
    startingCode: `.nav {
  /* Add your styles here */
}

.nav-item {
  /* Add your styles here */
}`,
    solution: `.nav {
  display: flex;
  list-style-type: none;
  padding: 0;
  background-color: #1e293b;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav-item {
  padding: 16px 24px;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
  position: relative;
}

.nav-item:hover {
  background-color: #334155;
  color: #fbbf24;
}

.nav-item.active {
  background-color: #2563eb;
  color: white;
}`,
    html: `<ul class="nav">
  <li><a href="#" class="nav-item active">Home</a></li>
  <li><a href="#" class="nav-item">About</a></li>
  <li><a href="#" class="nav-item">Services</a></li>
  <li><a href="#" class="nav-item">Contact</a></li>
</ul>`
  },
  {
    id: 5,
    title: 'Create a loading spinner',
    description: 'Create an animated loading spinner using CSS animations.',
    difficulty: 'Medium',
    category: 'Animation',
    startingCode: `.spinner {
  /* Add your styles here */
  width: 40px;
  height: 40px;
  border: 4px solid #e2e8f0;
  border-top: 4px solid #2563eb;
  border-radius: 50%;
}`,
    solution: `.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e2e8f0;
  border-top: 4px solid #2563eb;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}`,
    html: `<div class="spinner"></div>`
  },
  {
    id: 6,
    title: 'Create a gradient background',
    description: 'Create a beautiful gradient background with multiple color stops.',
    difficulty: 'Easy',
    category: 'Backgrounds',
    startingCode: `.gradient-box {
  /* Add your styles here */
  width: 200px;
  height: 150px;
  border-radius: 12px;
}`,
    solution: `.gradient-box {
  width: 200px;
  height: 150px;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  transition: transform 0.3s ease;
}

.gradient-box:hover {
  transform: scale(1.05);
}`,
    html: `<div class="gradient-box"></div>`
  },
  {
    id: 7,
    title: 'Create a tooltip',
    description: 'Create a tooltip that appears on hover using CSS pseudo-elements.',
    difficulty: 'Hard',
    category: 'Interactive',
    startingCode: `.tooltip-container {
  /* Add your styles here */
  position: relative;
  display: inline-block;
}

.tooltip-text {
  /* Add your styles here */
  visibility: hidden;
  background-color: #1e293b;
  color: white;
  text-align: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
}`,
    solution: `.tooltip-container {
  position: relative;
  display: inline-block;
}

.tooltip-text {
  visibility: hidden;
  background-color: #1e293b;
  color: white;
  text-align: center;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 14px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;
  white-space: nowrap;
}

.tooltip-text::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #1e293b transparent transparent transparent;
}

.tooltip-container:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}`,
    html: `<div class="tooltip-container">
  <button style="background: #2563eb; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer;">Hover for tooltip</button>
  <span class="tooltip-text">This is a tooltip!</span>
</div>`
  },
  {
    id: 8,
    title: 'Create a responsive grid',
    description: 'Create a responsive grid layout that adapts to different screen sizes.',
    difficulty: 'Hard',
    category: 'Layout',
    startingCode: `.grid-container {
  /* Add your styles here */
}

.grid-item {
  /* Add your styles here */
  background: #2563eb;
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
}`,
    solution: `.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
}

.grid-item {
  background: #2563eb;
  color: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s ease;
}

.grid-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

@media (max-width: 600px) {
  .grid-container {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 16px;
  }
}`,
    html: `<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
  <div class="grid-item">Item 4</div>
</div>`
  }
];

export default function BeginnerTasks() {
  const [currentTask, setCurrentTask] = useState(0);
  const [code, setCode] = useState(tasks[0].startingCode);
  const [showSolution, setShowSolution] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    const saved = localStorage.getItem('graphicshop-completed-tasks');
    if (saved) {
      setCompletedTasks(JSON.parse(saved));
    }
  }, []);
  
  function handleTaskChange(index) {
    setCurrentTask(index);
    setCode(tasks[index].startingCode);
    setShowSolution(false);
  }
  
  function toggleSolution() {
    if (showSolution) {
      setCode(tasks[currentTask].startingCode);
    } else {
      setCode(tasks[currentTask].solution);
    }
    setShowSolution(!showSolution);
  }
  
  function markAsCompleted() {
    if (!completedTasks.includes(currentTask)) {
      const newCompleted = [...completedTasks, currentTask];
      setCompletedTasks(newCompleted);
      localStorage.setItem('graphicshop-completed-tasks', JSON.stringify(newCompleted));
    }
  }
  
  function resetProgress() {
    setCompletedTasks([]);
    localStorage.removeItem('graphicshop-completed-tasks');
  }
  
  const progress = (completedTasks.length / tasks.length) * 100;
  
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">🌱 Beginner CSS Tasks</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Complete these tasks to practice your CSS skills. Edit the CSS and see the results in real-time!
        </p>
        
        {/* Progress Bar */}
        <div className="max-w-md mx-auto mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
            <span className="text-sm font-medium text-blue-600">{completedTasks.length}/{tasks.length} completed</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
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
            onClick={resetProgress}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            🔄 Reset Progress
          </button>
        </div>
      </div>
      
      {/* Task Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3 mb-8">
        {tasks.map((task, idx) => (
          <button 
            key={task.id} 
            onClick={() => handleTaskChange(idx)}
            className={`p-3 rounded-lg border-2 transition-all duration-200 ${
              currentTask === idx 
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                : completedTasks.includes(idx)
                ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'
                : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
            }`}
          >
            <div className="text-center">
              <div className="font-bold text-lg">{task.id}</div>
              <div className="text-xs opacity-75">{task.difficulty}</div>
              {completedTasks.includes(idx) && (
                <div className="text-xs mt-1">✅</div>
              )}
            </div>
          </button>
        ))}
      </div>
      
      {/* Current Task */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{tasks[currentTask].title}</h2>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            tasks[currentTask].difficulty === 'Easy' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
            tasks[currentTask].difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
            'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
          }`}>
            {tasks[currentTask].difficulty}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {tasks[currentTask].category}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{tasks[currentTask].description}</p>
        
        {/* Task Controls */}
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
            onClick={markAsCompleted}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              completedTasks.includes(currentTask)
                ? 'bg-green-500 hover:bg-green-600 text-white'
                : 'bg-green-100 hover:bg-green-200 text-green-800 dark:bg-green-900 dark:text-green-200'
            }`}
          >
            {completedTasks.includes(currentTask) ? '✅ Completed' : '🎯 Mark Complete'}
          </button>
        </div>
      </div>
      
      {/* Editor and Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* CSS Editor */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">💻 CSS Code</h3>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {code.length} characters
            </div>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-80 font-mono text-sm p-4 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white resize-none"
            placeholder="Write your CSS here..."
          />
        </div>
        
        {/* Live Preview */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">👁️ Live Preview</h3>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Real-time updates
            </div>
          </div>
          <div className={`border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 min-h-80 ${
            darkMode ? 'bg-gray-900' : 'bg-gray-50'
          }`}>
            <style>{code}</style>
            <div 
              dangerouslySetInnerHTML={{ __html: tasks[currentTask].html }} 
              className={darkMode ? 'dark' : ''}
            />
          </div>
        </div>
      </div>
      
      {/* Tips Section */}
      <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">💡 Tips for this task:</h3>
        <ul className="text-blue-800 dark:text-blue-200 space-y-2">
          <li>• Use <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">transition</code> for smooth animations</li>
          <li>• Try <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">:hover</code> pseudo-class for interactive effects</li>
          <li>• Use <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">@media</code> queries for responsive design</li>
          <li>• Experiment with <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">transform</code> and <code className="bg-blue-100 dark:bg-blue-800 px-1 rounded">box-shadow</code> for depth</li>
        </ul>
      </div>
    </div>
  );
}
