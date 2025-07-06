import React, { useState } from 'react';

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('about');

  const skills = [
    { name: 'HTML5', icon: '🌐', level: 95 },
    { name: 'CSS3', icon: '🎨', level: 90 },
    { name: 'TailwindCSS', icon: '💨', level: 85 },
    { name: 'JavaScript', icon: '⚡', level: 80 },
    { name: 'React', icon: '⚛️', level: 75 },
    { name: 'WordPress', icon: '📝', level: 85 },
    { name: 'Graphic Design', icon: '🎭', level: 80 },
    { name: 'UI/UX Design', icon: '✨', level: 75 }
  ];

  const projects = [
    {
      name: 'MineralsMax.com',
      type: 'Custom Coded',
      description: 'Full-stack e-commerce platform for mineral trading',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      link: 'https://mineralsmax.com'
    },
    {
      name: 'Grumium-Tech.com',
      type: 'Custom Coded',
      description: 'Technology company website with modern design',
      tech: ['React', 'TailwindCSS', 'JavaScript'],
      link: 'https://grumium-tech.com'
    },
    {
      name: 'Exactus-MB.com',
      type: 'WordPress',
      description: 'Professional business website with custom theme',
      tech: ['WordPress', 'PHP', 'CSS'],
      link: 'https://exactus-mb.com'
    },
    {
      name: 'GetTechPK.com',
      type: 'WordPress',
      description: 'Technology blog and services platform',
      tech: ['WordPress', 'Custom Theme', 'SEO'],
      link: 'https://gettechpk.com'
    },
    {
      name: 'RegalChips.com',
      type: 'WordPress',
      description: 'Food industry website with e-commerce features',
      tech: ['WordPress', 'WooCommerce', 'Custom Design'],
      link: 'https://regalchips.com'
    }
  ];

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 24,
        padding: 48,
        textAlign: 'center',
        color: 'white',
        marginBottom: 32,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0,
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3
        }}></div>
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>👨‍💻</div>
          <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 16 }}>Bilal Hussain</h1>
          <p style={{ fontSize: 24, marginBottom: 8, opacity: 0.9 }}>graphicshop786</p>
          <p style={{ fontSize: 18, marginBottom: 24, opacity: 0.8 }}>
            Self-taught Full Stack Developer & Graphic Designer from Pakistan
          </p>
          
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="https://github.com/graphicshop786" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                background: 'rgba(255,255,255,0.2)', 
                color: 'white', 
                padding: '12px 24px', 
                borderRadius: 12, 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255,255,255,0.3)'
              }}
              onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.3)'}
              onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.2)'}
            >
              📱 GitHub
            </a>
            <a 
              href="mailto:graphicshop786@gmail.com"
              style={{ 
                background: 'rgba(255,255,255,0.2)', 
                color: 'white', 
                padding: '12px 24px', 
                borderRadius: 12, 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255,255,255,0.3)'
              }}
              onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.3)'}
              onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.2)'}
            >
              📧 Email
            </a>
            <a 
              href="https://wa.me/923401617879"
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                background: 'rgba(255,255,255,0.2)', 
                color: 'white', 
                padding: '12px 24px', 
                borderRadius: 12, 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255,255,255,0.3)'
              }}
              onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.3)'}
              onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.2)'}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={{ 
        display: 'flex', 
        gap: 8, 
        marginBottom: 32, 
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        {[
          { id: 'about', label: 'About Me', icon: '👨‍💻' },
          { id: 'skills', label: 'Skills', icon: '⚡' },
          { id: 'projects', label: 'Projects', icon: '🚀' },
          { id: 'tools', label: 'Tools', icon: '🛠️' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              background: activeTab === tab.id ? '#2563eb' : 'white',
              color: activeTab === tab.id ? 'white' : '#374151',
              border: '1px solid #e2e8f0',
              padding: '12px 24px',
              borderRadius: 12,
              cursor: 'pointer',
              fontWeight: 500,
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}
          >
            <span>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Sections */}
      <div style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.08)', padding: 32 }}>
        {activeTab === 'about' && (
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, color: '#1e293b' }}>About Me</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16, color: '#374151' }}>🎯 My Journey</h3>
                <p style={{ lineHeight: 1.7, color: '#64748b', marginBottom: 16 }}>
                  I'm a passionate self-taught developer from Pakistan who believes in the power of continuous learning and creativity. 
                  My journey began with a curiosity for web design and has evolved into a deep love for building digital experiences 
                  that make a difference.
                </p>
                <p style={{ lineHeight: 1.7, color: '#64748b', marginBottom: 16 }}>
                  As a full-stack developer, I specialize in creating modern, responsive websites using cutting-edge technologies. 
                  My expertise spans from pixel-perfect frontend designs to robust backend solutions, always with a focus on 
                  user experience and performance.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16, color: '#374151' }}>💡 My Mission</h3>
                <p style={{ lineHeight: 1.7, color: '#64748b', marginBottom: 16 }}>
                  I'm passionate about helping new developers learn and grow. That's why I created 
                  <strong style={{ color: '#2563eb' }}> Graphicshop CSS Lab</strong> — a free, comprehensive tool for beginners 
                  to practice CSS components and animations in a hands-on environment.
                </p>
                <p style={{ lineHeight: 1.7, color: '#64748b' }}>
                  My goal is to bridge the gap between learning and practical application, making web development 
                  accessible to everyone who wants to create something amazing.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'skills' && (
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, color: '#1e293b' }}>Skills & Expertise</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
              {skills.map((skill, index) => (
                <div key={index} style={{ 
                  background: '#f8fafc', 
                  borderRadius: 12, 
                  padding: 20, 
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                    <span style={{ fontSize: 24 }}>{skill.icon}</span>
                    <div>
                      <div style={{ fontWeight: 600, color: '#1e293b' }}>{skill.name}</div>
                      <div style={{ fontSize: 14, color: '#64748b' }}>{skill.level}% Proficiency</div>
                    </div>
                  </div>
                  <div style={{ 
                    background: '#e2e8f0', 
                    borderRadius: 8, 
                    height: 8, 
                    overflow: 'hidden'
                  }}>
                    <div style={{ 
                      background: 'linear-gradient(90deg, #2563eb, #3b82f6)', 
                      height: '100%', 
                      width: `${skill.level}%`,
                      borderRadius: 8,
                      transition: 'width 1s ease'
                    }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, color: '#1e293b' }}>Featured Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 24 }}>
              {projects.map((project, index) => (
                <div key={index} style={{ 
                  background: '#f8fafc', 
                  borderRadius: 16, 
                  padding: 24, 
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={e => e.target.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.target.style.transform = 'translateY(0)'}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                    <h3 style={{ fontSize: 20, fontWeight: 600, color: '#1e293b' }}>{project.name}</h3>
                    <span style={{ 
                      background: project.type === 'Custom Coded' ? '#10b981' : '#fbbf24', 
                      color: 'white', 
                      padding: '4px 8px', 
                      borderRadius: 6, 
                      fontSize: 12, 
                      fontWeight: 500 
                    }}>
                      {project.type}
                    </span>
                  </div>
                  <p style={{ color: '#64748b', marginBottom: 16, lineHeight: 1.6 }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} style={{ 
                        background: '#e2e8f0', 
                        color: '#374151', 
                        padding: '4px 8px', 
                        borderRadius: 6, 
                        fontSize: 12, 
                        fontWeight: 500 
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ 
                      background: '#2563eb', 
                      color: 'white', 
                      padding: '8px 16px', 
                      borderRadius: 8, 
                      textDecoration: 'none', 
                      fontSize: 14, 
                      fontWeight: 500,
                      display: 'inline-block',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={e => e.target.style.background = '#1d4ed8'}
                    onMouseLeave={e => e.target.style.background = '#2563eb'}
                  >
                    🌐 Visit Site
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tools' && (
          <div>
            <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24, color: '#1e293b' }}>Graphicshop CSS Lab</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16, color: '#374151' }}>🛠️ What I Built</h3>
                <p style={{ lineHeight: 1.7, color: '#64748b', marginBottom: 16 }}>
                  Graphicshop CSS Lab is my passion project — a comprehensive, free tool designed to help beginners 
                  learn CSS through hands-on practice. It's more than just a code editor; it's a complete learning 
                  environment with interactive components, animations, and real-time preview.
                </p>
                <p style={{ lineHeight: 1.7, color: '#64748b', marginBottom: 16 }}>
                  The platform includes 20+ interactive tools covering everything from basic CSS properties to 
                  advanced animations, responsive design, and modern web development techniques.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16, color: '#374151' }}>🎯 Key Features</h3>
                <ul style={{ color: '#64748b', lineHeight: 1.8 }}>
                  <li>✨ Live code editor with real-time preview</li>
                  <li>🎨 Interactive CSS component gallery</li>
                  <li>⚡ Animation and transition playgrounds</li>
                  <li>📱 Responsive design testing tools</li>
                  <li>🎭 Typography and color utilities</li>
                  <li>🛠️ Practice challenges and exercises</li>
                  <li>📚 Comprehensive utility class guide</li>
                  <li>🚀 Export and sharing capabilities</li>
                </ul>
              </div>
            </div>
            
            <div style={{ 
              background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)', 
              borderRadius: 16, 
              padding: 24, 
              marginTop: 24,
              border: '1px solid #e2e8f0',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12, color: '#1e293b' }}>
                🎉 Join the Learning Community!
              </h3>
              <p style={{ color: '#64748b', marginBottom: 16 }}>
                Whether you're just starting your web development journey or looking to enhance your CSS skills, 
                Graphicshop CSS Lab is here to help you grow and create amazing things.
              </p>
              <div style={{ fontSize: 18, fontWeight: 600, color: '#2563eb' }}>
                Start creating, start learning, start building! 🚀
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMe; 