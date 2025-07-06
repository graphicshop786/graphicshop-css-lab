import React, { useState, useEffect } from 'react';

const questions = [
  {
    id: 1,
    question: 'What does CSS stand for?',
    options: ['Cascading Style Sheets', 'Computer Style Syntax', 'Creative Style System', 'Colorful Style Sheet'],
    answer: 0,
    explanation: 'CSS stands for Cascading Style Sheets, which is used to style and layout web pages.',
    category: 'Basics'
  },
  {
    id: 2,
    question: 'Which property is used to change the text color in CSS?',
    options: ['font-style', 'color', 'background', 'text-align'],
    answer: 1,
    explanation: 'The "color" property is used to set the text color in CSS.',
    category: 'Typography'
  },
  {
    id: 3,
    question: 'Which CSS property is used to make text bold?',
    options: ['font-weight', 'font-style', 'text-decoration', 'font-size'],
    answer: 0,
    explanation: 'The "font-weight" property controls how bold or light text appears.',
    category: 'Typography'
  },
  {
    id: 4,
    question: 'How do you select an element with id="main" in CSS?',
    options: ['#main', '.main', 'main', '*main'],
    answer: 0,
    explanation: 'The "#" symbol is used to select elements by their ID in CSS.',
    category: 'Selectors'
  },
  {
    id: 5,
    question: 'Which value of position makes an element stay in the same place even when scrolling?',
    options: ['static', 'fixed', 'relative', 'absolute'],
    answer: 1,
    explanation: 'The "fixed" position keeps an element in the same position relative to the viewport.',
    category: 'Layout'
  },
  {
    id: 6,
    question: 'What is the default value of the display property for div elements?',
    options: ['inline', 'block', 'flex', 'grid'],
    answer: 1,
    explanation: 'Div elements have a default display value of "block", making them block-level elements.',
    category: 'Layout'
  },
  {
    id: 7,
    question: 'Which CSS property is used to add space between elements?',
    options: ['padding', 'margin', 'border', 'spacing'],
    answer: 1,
    explanation: 'The "margin" property creates space outside of an element\'s border.',
    category: 'Layout'
  },
  {
    id: 8,
    question: 'How do you select all elements with class="button" in CSS?',
    options: ['#button', '.button', 'button', '*button'],
    answer: 1,
    explanation: 'The "." symbol is used to select elements by their class name in CSS.',
    category: 'Selectors'
  },
  {
    id: 9,
    question: 'Which CSS property is used to change the background color?',
    options: ['color', 'background-color', 'bg-color', 'background'],
    answer: 1,
    explanation: 'The "background-color" property sets the background color of an element.',
    category: 'Backgrounds'
  },
  {
    id: 10,
    question: 'What does the "flex" value of display property do?',
    options: ['Makes text flexible', 'Creates a flexbox container', 'Makes elements float', 'Adds flexibility to borders'],
    answer: 1,
    explanation: 'The "flex" value creates a flexbox container, enabling flexible layouts.',
    category: 'Layout'
  },
  {
    id: 11,
    question: 'Which CSS property is used to add rounded corners?',
    options: ['border-radius', 'border-round', 'corner-radius', 'round-corners'],
    answer: 0,
    explanation: 'The "border-radius" property creates rounded corners on elements.',
    category: 'Styling'
  },
  {
    id: 12,
    question: 'How do you make text italic in CSS?',
    options: ['font-style: italic', 'text-style: italic', 'font-italic: true', 'italic: true'],
    answer: 0,
    explanation: 'The "font-style: italic" property makes text appear in italic style.',
    category: 'Typography'
  },
  {
    id: 13,
    question: 'Which CSS property is used to add shadows to elements?',
    options: ['shadow', 'box-shadow', 'element-shadow', 'drop-shadow'],
    answer: 1,
    explanation: 'The "box-shadow" property adds shadow effects to elements.',
    category: 'Styling'
  },
  {
    id: 14,
    question: 'What is the purpose of the "z-index" property?',
    options: ['Controls element width', 'Sets vertical spacing', 'Controls stacking order', 'Defines text size'],
    answer: 2,
    explanation: 'The "z-index" property controls the stacking order of positioned elements.',
    category: 'Layout'
  },
  {
    id: 15,
    question: 'Which CSS property is used to create smooth transitions?',
    options: ['animation', 'transition', 'transform', 'smooth'],
    answer: 1,
    explanation: 'The "transition" property creates smooth animations between property changes.',
    category: 'Animation'
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [answered, setAnswered] = useState([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [highScore, setHighScore] = useState(0);
  
  useEffect(() => {
    const savedHighScore = localStorage.getItem('graphicshop-quiz-highscore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
  }, []);
  
  useEffect(() => {
    let timer;
    if (isTimerActive && timeLeft > 0 && !showResult) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && !showResult) {
      handleTimeout();
    }
    return () => clearTimeout(timer);
  }, [timeLeft, isTimerActive, showResult]);
  
  function startQuiz() {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelected(null);
    setFeedback('');
    setShowExplanation(false);
    setAnswered([]);
    setTimeLeft(30);
    setIsTimerActive(true);
  }
  
  function handleAnswer(idx) {
    if (selected !== null) return;
    
    setSelected(idx);
    setIsTimerActive(false);
    
    if (idx === questions[currentQuestion].answer) {
      setScore(s => s + 1);
      setFeedback('✅ Correct!');
    } else {
      setFeedback('❌ Incorrect!');
    }
    
    setAnswered([...answered, currentQuestion]);
    setShowExplanation(true);
    
    setTimeout(() => {
      setSelected(null);
      setFeedback('');
      setShowExplanation(false);
      
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setTimeLeft(30);
        setIsTimerActive(true);
      } else {
        finishQuiz();
      }
    }, 2000);
  }
  
  function handleTimeout() {
    setSelected(null);
    setFeedback('⏰ Time\'s up!');
    setAnswered([...answered, currentQuestion]);
    setShowExplanation(true);
    setIsTimerActive(false);
    
    setTimeout(() => {
      setFeedback('');
      setShowExplanation(false);
      
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setTimeLeft(30);
        setIsTimerActive(true);
      } else {
        finishQuiz();
      }
    }, 2000);
  }
  
  function finishQuiz() {
    setShowResult(true);
    setIsTimerActive(false);
    
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('graphicshop-quiz-highscore', score.toString());
    }
  }
  
  function restart() {
    startQuiz();
  }
  
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const percentage = Math.round((score / questions.length) * 100);
  
  if (showResult) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        {/* Result Screen */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">🎉 Quiz Complete!</h1>
          
          {/* Score Display */}
          <div className="max-w-md mx-auto mb-8">
            <div className={`rounded-xl p-8 ${
              percentage >= 80 ? 'bg-gradient-to-r from-green-400 to-green-600' :
              percentage >= 60 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
              'bg-gradient-to-r from-red-400 to-red-600'
            } text-white`}>
              <div className="text-6xl font-bold mb-2">{score}/{questions.length}</div>
              <div className="text-xl mb-2">{percentage}%</div>
              <div className="text-lg">
                {percentage >= 80 ? '🎯 Excellent!' :
                 percentage >= 60 ? '👍 Good job!' :
                 '📚 Keep learning!'}
              </div>
            </div>
          </div>
          
          {/* High Score */}
          {score >= highScore && score > 0 && (
            <div className="bg-yellow-100 dark:bg-yellow-900/20 rounded-lg p-4 mb-6 border border-yellow-200 dark:border-yellow-800">
              <div className="text-yellow-800 dark:text-yellow-200 font-semibold">
                🏆 New High Score! Congratulations!
              </div>
            </div>
          )}
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-blue-600">{score}</div>
              <div className="text-gray-600 dark:text-gray-400">Correct Answers</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-red-600">{questions.length - score}</div>
              <div className="text-gray-600 dark:text-gray-400">Incorrect Answers</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-purple-600">{highScore}</div>
              <div className="text-gray-600 dark:text-gray-400">High Score</div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={restart}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              🔄 Try Again
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">❓ CSS Quiz</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Test your CSS knowledge with interactive questions!
        </p>
        
        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-blue-600">
              Score: {score}
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        {/* Timer */}
        <div className="max-w-md mx-auto mb-6">
          <div className={`rounded-lg p-4 ${
            timeLeft > 10 ? 'bg-green-100 dark:bg-green-900/20' :
            timeLeft > 5 ? 'bg-yellow-100 dark:bg-yellow-900/20' :
            'bg-red-100 dark:bg-red-900/20'
          } border ${
            timeLeft > 10 ? 'border-green-200 dark:border-green-800' :
            timeLeft > 5 ? 'border-yellow-200 dark:border-yellow-800' :
            'border-red-200 dark:border-red-800'
          }`}>
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl">⏰</span>
              <span className={`font-bold text-lg ${
                timeLeft > 10 ? 'text-green-800 dark:text-green-200' :
                timeLeft > 5 ? 'text-yellow-800 dark:text-yellow-200' :
                'text-red-800 dark:text-red-200'
              }`}>
                {timeLeft}s
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Question Card */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-8 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
            {questions[currentQuestion].category}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Question {questions[currentQuestion].id}
          </span>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          {questions[currentQuestion].question}
        </h2>
        
        {/* Options */}
        <div className="space-y-3 mb-6">
          {questions[currentQuestion].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={selected !== null}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 font-medium ${
                selected === idx
                  ? idx === questions[currentQuestion].answer
                    ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200'
                    : 'border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200'
                  : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20'
              } ${selected !== null ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <span className="mr-3 font-bold">{String.fromCharCode(65 + idx)}.</span>
              {option}
            </button>
          ))}
        </div>
        
        {/* Feedback */}
        {feedback && (
          <div className={`p-4 rounded-lg mb-4 ${
            feedback.includes('Correct') 
              ? 'bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
              : 'bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800'
          }`}>
            <div className={`font-semibold ${
              feedback.includes('Correct') 
                ? 'text-green-800 dark:text-green-200' 
                : 'text-red-800 dark:text-red-200'
            }`}>
              {feedback}
            </div>
          </div>
        )}
        
        {/* Explanation */}
        {showExplanation && (
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Explanation:</h4>
            <p className="text-blue-700 dark:text-blue-300">
              {questions[currentQuestion].explanation}
            </p>
          </div>
        )}
      </div>
      
      {/* Controls */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
        <button
          onClick={restart}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          🔄 Restart Quiz
        </button>
      </div>
    </div>
  );
}
