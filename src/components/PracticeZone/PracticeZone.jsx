import React, { useState } from 'react';

const challenges = [
  {
    title: 'Center a div horizontally',
    html: '<div class="center-me">Center me!</div>',
    css: '.center-me {\n  /* Your CSS here */\n}',
    test: css => /margin:\s*0\s*auto|display:\s*flex|justify-content:\s*center/.test(css.replace(/\s+/g, '')),
    hint: 'Try margin: 0 auto; or use flexbox.',
    icon: '🎯'
  },
  {
    title: 'Make a button blue on hover',
    html: '<button class="hover-btn">Hover me</button>',
    css: '.hover-btn {\n  /* Your CSS here */\n}',
    test: css => /\.hover-btn:hover\s*{[^}]*background[^}]*#2563eb/.test(css.replace(/\s+/g, '')),
    hint: 'Use .hover-btn:hover { background: #2563eb; }',
    icon: '🖱️'
  },
  {
    title: 'Add a shadow to a card',
    html: '<div class="card">Shadow card</div>',
    css: '.card {\n  /* Your CSS here */\n}',
    test: css => /box-shadow/.test(css),
    hint: 'Use box-shadow property.',
    icon: '👻'
  },
  {
    title: 'Round the corners of an image',
    html: '<img class="round-img" src="https://source.unsplash.com/100x100/?cat" alt="cat" />',
    css: '.round-img {\n  /* Your CSS here */\n}',
    test: css => /border-radius/.test(css),
    hint: 'Use border-radius property.',
    icon: '🖼️'
  },
  {
    title: 'Create a flexbox layout',
    html: '<div class="flex-container"><div>Item 1</div><div>Item 2</div><div>Item 3</div></div>',
    css: '.flex-container {\n  /* Your CSS here */\n}',
    test: css => /display:\s*flex/.test(css.replace(/\s+/g, '')),
    hint: 'Use display: flex; to create a flexbox container.',
    icon: '📦'
  },
  {
    title: 'Add a gradient background',
    html: '<div class="gradient-box">Gradient box</div>',
    css: '.gradient-box {\n  /* Your CSS here */\n}',
    test: css => /linear-gradient|radial-gradient/.test(css),
    hint: 'Use linear-gradient() or radial-gradient() for background.',
    icon: '🌈'
  },
];

const PracticeZone = () => {
  const [idx, setIdx] = useState(0);
  const [css, setCss] = useState(challenges[0].css);
  const [showHint, setShowHint] = useState(false);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(new Set());
  
  const challenge = challenges[idx];
  
  function check() {
    const isCorrect = challenge.test(css);
    setResult(isCorrect ? 'correct' : 'incorrect');
    
    if (isCorrect && !completed.has(idx)) {
      setScore(score + 1);
      setCompleted(new Set([...completed, idx]));
    }
  }
  
  function next() {
    const nextIdx = (idx+1)%challenges.length;
    setIdx(nextIdx);
    setCss(challenges[nextIdx].css);
    setResult(null);
    setShowHint(false);
  }
  
  function reset() {
    setIdx(0);
    setCss(challenges[0].css);
    setResult(null);
    setShowHint(false);
    setScore(0);
    setCompleted(new Set());
  }
  
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: 24 }}>
      <div style={{ textAlign: 'center', marginBottom: 32 }}>
        <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 8, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Practice Zone</h2>
        <p style={{ color: '#64748b', fontSize: 16 }}>Practice CSS skills with interactive challenges</p>
      </div>
      
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 24, marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <h3 style={{ fontSize: 20, color: '#1e293b' }}>📊 Progress</h3>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <div style={{ fontSize: 14, color: '#64748b' }}>
              Challenge {idx + 1} of {challenges.length}
            </div>
            <div style={{ fontSize: 14, color: '#64748b' }}>
              Score: {score}/{challenges.length}
            </div>
            <button 
              onClick={reset}
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
              🔄 Reset
            </button>
          </div>
        </div>
        
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {challenges.map((challenge, i) => (
            <div 
              key={i}
              style={{ 
                width: 40, 
                height: 40, 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: 16,
                cursor: 'pointer',
                border: '2px solid #e2e8f0',
                background: completed.has(i) ? '#10b981' : i === idx ? '#2563eb' : '#f8fafc',
                color: completed.has(i) || i === idx ? 'white' : '#64748b',
                transition: 'all 0.2s ease'
              }}
              onClick={() => {
                setIdx(i);
                setCss(challenges[i].css);
                setResult(null);
                setShowHint(false);
              }}
            >
              {completed.has(i) ? '✅' : challenge.icon}
            </div>
          ))}
        </div>
      </div>
      
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 24, marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <span style={{ fontSize: 24 }}>{challenge.icon}</span>
          <h3 style={{ fontSize: 20, color: '#1e293b' }}>{challenge.title}</h3>
        </div>
        
        <div style={{ 
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', 
          borderRadius: 12, 
          padding: 32, 
          minHeight: 120, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          border: '2px dashed #e2e8f0',
          marginBottom: 16
        }}>
          <div dangerouslySetInnerHTML={{ __html: `<style>${css}</style>${challenge.html}` }} />
        </div>
        
        <div style={{ marginBottom: 16 }}>
          <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, color: '#374151' }}>
            💻 Write your CSS:
          </label>
          <textarea 
            value={css} 
            onChange={e => setCss(e.target.value)} 
            rows={8} 
            style={{ 
              width: '100%', 
              fontFamily: 'monospace', 
              fontSize: 14, 
              borderRadius: 8, 
              border: '1px solid #d1d5db', 
              padding: 12,
              background: '#f8fafc',
              resize: 'vertical'
            }} 
          />
        </div>
        
        <div style={{ display: 'flex', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
          <button 
            onClick={check} 
            style={{ 
              fontSize: 14, 
              background: '#2563eb', 
              color: 'white', 
              border: 'none', 
              borderRadius: 8, 
              padding: '10px 20px', 
              cursor: 'pointer',
              fontWeight: 500,
              transition: 'all 0.2s ease'
            }}
          >
            ✅ Check Answer
          </button>
          <button 
            onClick={next} 
            style={{ 
              fontSize: 14, 
              background: '#fbbf24', 
              color: '#18181b', 
              border: 'none', 
              borderRadius: 8, 
              padding: '10px 20px', 
              cursor: 'pointer',
              fontWeight: 500,
              transition: 'all 0.2s ease'
            }}
          >
            ⏭️ Next Challenge
          </button>
          <button 
            onClick={() => setShowHint(h => !h)} 
            style={{ 
              fontSize: 14, 
              background: '#10b981', 
              color: 'white', 
              border: 'none', 
              borderRadius: 8, 
              padding: '10px 20px', 
              cursor: 'pointer',
              fontWeight: 500,
              transition: 'all 0.2s ease'
            }}
          >
            {showHint ? '👁️ Hide Hint' : '💡 Show Hint'}
          </button>
        </div>
        
        {result === 'correct' && (
          <div style={{ 
            color: '#10b981', 
            fontWeight: 600, 
            padding: 12,
            background: '#f0fdf4',
            borderRadius: 8,
            border: '1px solid #bbf7d0',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}>
            ✅ Correct! Great job!
          </div>
        )}
        
        {result === 'incorrect' && (
          <div style={{ 
            color: '#ef4444', 
            fontWeight: 600, 
            padding: 12,
            background: '#fef2f2',
            borderRadius: 8,
            border: '1px solid #fecaca',
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}>
            ❌ Not quite right, try again!
          </div>
        )}
        
        {showHint && (
          <div style={{ 
            color: '#64748b', 
            fontSize: 15, 
            background: '#f8fafc', 
            borderRadius: 8, 
            padding: 16,
            border: '1px solid #e2e8f0',
            borderLeft: '4px solid #2563eb'
          }}>
            <div style={{ fontWeight: 600, marginBottom: 4 }}>💡 Hint:</div>
            {challenge.hint}
          </div>
        )}
      </div>
      
      {score === challenges.length && (
        <div style={{ 
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          color: 'white',
          borderRadius: 16,
          padding: 32,
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
        }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
          <h3 style={{ fontSize: 24, marginBottom: 8 }}>Congratulations!</h3>
          <p style={{ fontSize: 16, opacity: 0.9 }}>You've completed all challenges! Keep practicing to improve your CSS skills.</p>
        </div>
      )}
    </div>
  );
};

export default PracticeZone;
