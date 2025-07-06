import React, { useState } from 'react';

const templates = [
  {
    id: 'personal',
    name: 'Personal Portfolio',
    description: 'Clean, modern personal portfolio with hero section, about, projects, and contact.',
    preview: `
      <div style="font-family: 'Inter', sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px;">
        <header style="text-align: center; padding: 60px 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 12px; margin-bottom: 40px;">
          <h1 style="font-size: 3rem; margin-bottom: 10px;">John Doe</h1>
          <p style="font-size: 1.2rem; opacity: 0.9;">Full Stack Developer</p>
        </header>
        
        <section style="margin-bottom: 40px;">
          <h2 style="color: #333; margin-bottom: 20px;">About Me</h2>
          <p style="line-height: 1.6; color: #666;">Passionate developer with 5+ years of experience building web applications. I love creating user-friendly interfaces and solving complex problems.</p>
        </section>
        
        <section style="margin-bottom: 40px;">
          <h2 style="color: #333; margin-bottom: 20px;">Projects</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h3 style="color: #333; margin-bottom: 10px;">E-commerce Platform</h3>
              <p style="color: #666; margin-bottom: 15px;">Built with React, Node.js, and MongoDB</p>
              <button style="background: #667eea; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">View Project</button>
            </div>
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
              <h3 style="color: #333; margin-bottom: 10px;">Task Management App</h3>
              <p style="color: #666; margin-bottom: 15px;">Vue.js, Express, PostgreSQL</p>
              <button style="background: #667eea; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">View Project</button>
            </div>
          </div>
        </section>
        
        <section>
          <h2 style="color: #333; margin-bottom: 20px;">Contact</h2>
          <div style="display: flex; gap: 20px; justify-content: center;">
            <a href="#" style="color: #667eea; text-decoration: none;">Email</a>
            <a href="#" style="color: #667eea; text-decoration: none;">LinkedIn</a>
            <a href="#" style="color: #667eea; text-decoration: none;">GitHub</a>
          </div>
        </section>
      </div>
    `,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>John Doe - Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .hero { text-align: center; padding: 80px 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 12px; margin-bottom: 60px; }
        .hero h1 { font-size: 3.5rem; margin-bottom: 15px; font-weight: 700; }
        .hero p { font-size: 1.3rem; opacity: 0.9; }
        section { margin-bottom: 60px; }
        h2 { font-size: 2.5rem; margin-bottom: 30px; color: #333; }
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; }
        .project-card { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); transition: transform 0.3s ease; }
        .project-card:hover { transform: translateY(-5px); }
        .project-card h3 { font-size: 1.5rem; margin-bottom: 15px; color: #333; }
        .project-card p { color: #666; margin-bottom: 20px; }
        .btn { background: #667eea; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; text-decoration: none; display: inline-block; transition: background 0.3s ease; }
        .btn:hover { background: #5a67d8; }
        .contact-links { display: flex; gap: 30px; justify-content: center; }
        .contact-links a { color: #667eea; text-decoration: none; font-weight: 600; transition: color 0.3s ease; }
        .contact-links a:hover { color: #5a67d8; }
        @media (max-width: 768px) { .hero h1 { font-size: 2.5rem; } .projects-grid { grid-template-columns: 1fr; } }
    </style>
</head>
<body>
    <div class="container">
        <header class="hero">
            <h1>John Doe</h1>
            <p>Full Stack Developer</p>
        </header>
        
        <section>
            <h2>About Me</h2>
            <p>Passionate developer with 5+ years of experience building web applications. I love creating user-friendly interfaces and solving complex problems with elegant solutions.</p>
        </section>
        
        <section>
            <h2>Projects</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <h3>E-commerce Platform</h3>
                    <p>Built with React, Node.js, and MongoDB. Features include user authentication, product management, and payment processing.</p>
                    <a href="#" class="btn">View Project</a>
                </div>
                <div class="project-card">
                    <h3>Task Management App</h3>
                    <p>Vue.js, Express, PostgreSQL. Real-time collaboration, drag-and-drop interface, and progress tracking.</p>
                    <a href="#" class="btn">View Project</a>
                </div>
                <div class="project-card">
                    <h3>Weather Dashboard</h3>
                    <p>React, OpenWeather API, Chart.js. Interactive weather visualization with location-based forecasts.</p>
                    <a href="#" class="btn">View Project</a>
                </div>
            </div>
        </section>
        
        <section>
            <h2>Contact</h2>
            <div class="contact-links">
                <a href="mailto:john@example.com">Email</a>
                <a href="https://linkedin.com/in/johndoe">LinkedIn</a>
                <a href="https://github.com/johndoe">GitHub</a>
                <a href="https://twitter.com/johndoe">Twitter</a>
            </div>
        </section>
    </div>
</body>
</html>`,
    css: `/* Personal Portfolio Styles */
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #333; }
.container { max-width: 1200px; margin: 0 auto; padding: 20px; }
.hero { text-align: center; padding: 80px 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 12px; margin-bottom: 60px; }
.hero h1 { font-size: 3.5rem; margin-bottom: 15px; font-weight: 700; }
.hero p { font-size: 1.3rem; opacity: 0.9; }
section { margin-bottom: 60px; }
h2 { font-size: 2.5rem; margin-bottom: 30px; color: #333; }
.projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; }
.project-card { background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); transition: transform 0.3s ease; }
.project-card:hover { transform: translateY(-5px); }
.project-card h3 { font-size: 1.5rem; margin-bottom: 15px; color: #333; }
.project-card p { color: #666; margin-bottom: 20px; }
.btn { background: #667eea; color: white; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; text-decoration: none; display: inline-block; transition: background 0.3s ease; }
.btn:hover { background: #5a67d8; }
.contact-links { display: flex; gap: 30px; justify-content: center; }
.contact-links a { color: #667eea; text-decoration: none; font-weight: 600; transition: color 0.3s ease; }
.contact-links a:hover { color: #5a67d8; }
@media (max-width: 768px) { .hero h1 { font-size: 2.5rem; } .projects-grid { grid-template-columns: 1fr; } }`
  },
  {
    id: 'minimal',
    name: 'Minimal Portfolio',
    description: 'Clean, minimal design focusing on content and typography.',
    preview: `
      <div style="font-family: 'Inter', sans-serif; max-width: 800px; margin: 0 auto; padding: 40px 20px;">
        <header style="text-align: center; margin-bottom: 80px;">
          <h1 style="font-size: 2.5rem; margin-bottom: 10px; color: #1a1a1a;">Jane Smith</h1>
          <p style="font-size: 1.1rem; color: #666; margin-bottom: 20px;">Designer & Developer</p>
          <div style="width: 60px; height: 2px; background: #1a1a1a; margin: 0 auto;"></div>
        </header>
        
        <section style="margin-bottom: 60px;">
          <h2 style="font-size: 1.5rem; margin-bottom: 20px; color: #1a1a1a;">Work</h2>
          <div style="display: flex; flex-direction: column; gap: 40px;">
            <div style="border-bottom: 1px solid #eee; padding-bottom: 30px;">
              <h3 style="font-size: 1.2rem; margin-bottom: 10px; color: #1a1a1a;">Brand Identity Design</h3>
              <p style="color: #666; margin-bottom: 15px;">Complete brand identity for tech startup</p>
              <span style="color: #999; font-size: 0.9rem;">2023</span>
            </div>
            <div style="border-bottom: 1px solid #eee; padding-bottom: 30px;">
              <h3 style="font-size: 1.2rem; margin-bottom: 10px; color: #1a1a1a;">Web Application</h3>
              <p style="color: #666; margin-bottom: 15px;">E-commerce platform with modern UI</p>
              <span style="color: #999; font-size: 0.9rem;">2022</span>
            </div>
          </div>
        </section>
        
        <section>
          <h2 style="font-size: 1.5rem; margin-bottom: 20px; color: #1a1a1a;">Contact</h2>
          <p style="color: #666; margin-bottom: 20px;">Let's work together on your next project.</p>
          <a href="#" style="color: #1a1a1a; text-decoration: none; border-bottom: 1px solid #1a1a1a;">hello@janesmith.com</a>
        </section>
      </div>
    `,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jane Smith - Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #1a1a1a; background: #fafafa; }
        .container { max-width: 800px; margin: 0 auto; padding: 60px 20px; }
        header { text-align: center; margin-bottom: 100px; }
        h1 { font-size: 3rem; margin-bottom: 15px; font-weight: 300; }
        .subtitle { font-size: 1.2rem; color: #666; margin-bottom: 30px; }
        .divider { width: 80px; height: 2px; background: #1a1a1a; margin: 0 auto; }
        section { margin-bottom: 80px; }
        h2 { font-size: 1.8rem; margin-bottom: 40px; font-weight: 400; }
        .work-item { border-bottom: 1px solid #eee; padding-bottom: 40px; margin-bottom: 40px; }
        .work-item:last-child { border-bottom: none; }
        .work-item h3 { font-size: 1.4rem; margin-bottom: 15px; font-weight: 500; }
        .work-item p { color: #666; margin-bottom: 20px; }
        .work-item .year { color: #999; font-size: 0.9rem; }
        .contact p { color: #666; margin-bottom: 30px; }
        .contact a { color: #1a1a1a; text-decoration: none; border-bottom: 1px solid #1a1a1a; transition: border-color 0.3s ease; }
        .contact a:hover { border-color: transparent; }
        @media (max-width: 768px) { h1 { font-size: 2.5rem; } .container { padding: 40px 20px; } }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Jane Smith</h1>
            <p class="subtitle">Designer & Developer</p>
            <div class="divider"></div>
        </header>
        
        <section>
            <h2>Work</h2>
            <div class="work-item">
                <h3>Brand Identity Design</h3>
                <p>Complete brand identity design for a tech startup, including logo, color palette, typography, and brand guidelines.</p>
                <span class="year">2023</span>
            </div>
            <div class="work-item">
                <h3>Web Application</h3>
                <p>Modern e-commerce platform with responsive design, user authentication, and payment processing.</p>
                <span class="year">2022</span>
            </div>
            <div class="work-item">
                <h3>Mobile App Design</h3>
                <p>UI/UX design for a fitness tracking mobile application with intuitive user interface.</p>
                <span class="year">2021</span>
            </div>
        </section>
        
        <section class="contact">
            <h2>Contact</h2>
            <p>Let's work together on your next project.</p>
            <a href="mailto:hello@janesmith.com">hello@janesmith.com</a>
        </section>
    </div>
</body>
</html>`,
    css: `/* Minimal Portfolio Styles */
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Inter', sans-serif; line-height: 1.6; color: #1a1a1a; background: #fafafa; }
.container { max-width: 800px; margin: 0 auto; padding: 60px 20px; }
header { text-align: center; margin-bottom: 100px; }
h1 { font-size: 3rem; margin-bottom: 15px; font-weight: 300; }
.subtitle { font-size: 1.2rem; color: #666; margin-bottom: 30px; }
.divider { width: 80px; height: 2px; background: #1a1a1a; margin: 0 auto; }
section { margin-bottom: 80px; }
h2 { font-size: 1.8rem; margin-bottom: 40px; font-weight: 400; }
.work-item { border-bottom: 1px solid #eee; padding-bottom: 40px; margin-bottom: 40px; }
.work-item:last-child { border-bottom: none; }
.work-item h3 { font-size: 1.4rem; margin-bottom: 15px; font-weight: 500; }
.work-item p { color: #666; margin-bottom: 20px; }
.work-item .year { color: #999; font-size: 0.9rem; }
.contact p { color: #666; margin-bottom: 30px; }
.contact a { color: #1a1a1a; text-decoration: none; border-bottom: 1px solid #1a1a1a; transition: border-color 0.3s ease; }
.contact a:hover { border-color: transparent; }
@media (max-width: 768px) { h1 { font-size: 2.5rem; } .container { padding: 40px 20px; } }`
  },
  {
    id: 'creative',
    name: 'Creative Portfolio',
    description: 'Bold, creative design with animations and interactive elements.',
    preview: `
      <div style="font-family: 'Poppins', sans-serif; background: #0f0f23; color: white; min-height: 100vh; padding: 20px;">
        <header style="text-align: center; padding: 60px 0;">
          <h1 style="font-size: 4rem; margin-bottom: 20px; background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Alex Chen</h1>
          <p style="font-size: 1.3rem; color: #a0a0a0; margin-bottom: 30px;">Creative Developer & Designer</p>
          <div style="display: flex; gap: 20px; justify-content: center;">
            <button style="background: linear-gradient(45deg, #ff6b6b, #4ecdc4); border: none; padding: 12px 30px; border-radius: 25px; color: white; cursor: pointer;">View Work</button>
            <button style="background: transparent; border: 2px solid #4ecdc4; padding: 12px 30px; border-radius: 25px; color: #4ecdc4; cursor: pointer;">Contact</button>
          </div>
        </header>
        
        <section style="max-width: 1200px; margin: 0 auto;">
          <h2 style="text-align: center; font-size: 2.5rem; margin-bottom: 50px; color: #4ecdc4;">Featured Projects</h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
            <div style="background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px; border-radius: 15px; position: relative; overflow: hidden;">
              <h3 style="font-size: 1.5rem; margin-bottom: 15px;">Interactive Website</h3>
              <p style="color: rgba(255,255,255,0.8); margin-bottom: 20px;">Animated web experience with Three.js</p>
              <button style="background: rgba(255,255,255,0.2); border: none; padding: 8px 20px; border-radius: 20px; color: white; cursor: pointer;">Explore</button>
            </div>
            <div style="background: linear-gradient(135deg, #f093fb, #f5576c); padding: 30px; border-radius: 15px;">
              <h3 style="font-size: 1.5rem; margin-bottom: 15px;">Mobile App</h3>
              <p style="color: rgba(255,255,255,0.8); margin-bottom: 20px;">React Native with custom animations</p>
              <button style="background: rgba(255,255,255,0.2); border: none; padding: 8px 20px; border-radius: 20px; color: white; cursor: pointer;">Explore</button>
            </div>
          </div>
        </section>
      </div>
    `,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alex Chen - Creative Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Poppins', sans-serif; background: #0f0f23; color: white; overflow-x: hidden; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        header { text-align: center; padding: 100px 0; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; }
        .gradient-text { font-size: 4.5rem; margin-bottom: 20px; background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 700; }
        .subtitle { font-size: 1.4rem; color: #a0a0a0; margin-bottom: 40px; }
        .btn { padding: 15px 35px; border-radius: 30px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; text-decoration: none; display: inline-block; }
        .btn-primary { background: linear-gradient(45deg, #ff6b6b, #4ecdc4); border: none; color: white; }
        .btn-secondary { background: transparent; border: 2px solid #4ecdc4; color: #4ecdc4; }
        .btn:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(0,0,0,0.3); }
        .projects { padding: 100px 0; }
        .section-title { text-align: center; font-size: 3rem; margin-bottom: 80px; color: #4ecdc4; }
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px; }
        .project-card { padding: 40px; border-radius: 20px; position: relative; overflow: hidden; transition: transform 0.3s ease; }
        .project-card:hover { transform: translateY(-10px); }
        .project-card h3 { font-size: 1.8rem; margin-bottom: 20px; }
        .project-card p { color: rgba(255,255,255,0.8); margin-bottom: 25px; line-height: 1.6; }
        .project-btn { background: rgba(255,255,255,0.2); border: none; padding: 12px 25px; border-radius: 25px; color: white; cursor: pointer; transition: all 0.3s ease; }
        .project-btn:hover { background: rgba(255,255,255,0.3); }
        .gradient-1 { background: linear-gradient(135deg, #667eea, #764ba2); }
        .gradient-2 { background: linear-gradient(135deg, #f093fb, #f5576c); }
        .gradient-3 { background: linear-gradient(135deg, #4facfe, #00f2fe); }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        .floating { animation: float 6s ease-in-out infinite; }
        @media (max-width: 768px) { .gradient-text { font-size: 3rem; } .projects-grid { grid-template-columns: 1fr; } }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1 class="gradient-text floating">Alex Chen</h1>
            <p class="subtitle">Creative Developer & Designer</p>
            <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
                <a href="#projects" class="btn btn-primary">View Work</a>
                <a href="#contact" class="btn btn-secondary">Contact</a>
            </div>
        </header>
        
        <section id="projects" class="projects">
            <h2 class="section-title">Featured Projects</h2>
            <div class="projects-grid">
                <div class="project-card gradient-1">
                    <h3>Interactive Website</h3>
                    <p>Animated web experience built with Three.js, featuring particle systems and interactive 3D elements.</p>
                    <button class="project-btn">Explore Project</button>
                </div>
                <div class="project-card gradient-2">
                    <h3>Mobile App</h3>
                    <p>React Native application with custom animations, gesture controls, and smooth transitions.</p>
                    <button class="project-btn">Explore Project</button>
                </div>
                <div class="project-card gradient-3">
                    <h3>Data Visualization</h3>
                    <p>Interactive dashboard with D3.js, real-time data updates, and responsive design.</p>
                    <button class="project-btn">Explore Project</button>
                </div>
            </div>
        </section>
    </div>
</body>
</html>`,
    css: `/* Creative Portfolio Styles */
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Poppins', sans-serif; background: #0f0f23; color: white; overflow-x: hidden; }
.container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
header { text-align: center; padding: 100px 0; min-height: 100vh; display: flex; flex-direction: column; justify-content: center; }
.gradient-text { font-size: 4.5rem; margin-bottom: 20px; background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-weight: 700; }
.subtitle { font-size: 1.4rem; color: #a0a0a0; margin-bottom: 40px; }
.btn { padding: 15px 35px; border-radius: 30px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; text-decoration: none; display: inline-block; }
.btn-primary { background: linear-gradient(45deg, #ff6b6b, #4ecdc4); border: none; color: white; }
.btn-secondary { background: transparent; border: 2px solid #4ecdc4; color: #4ecdc4; }
.btn:hover { transform: translateY(-2px); box-shadow: 0 10px 25px rgba(0,0,0,0.3); }
.projects { padding: 100px 0; }
.section-title { text-align: center; font-size: 3rem; margin-bottom: 80px; color: #4ecdc4; }
.projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px; }
.project-card { padding: 40px; border-radius: 20px; position: relative; overflow: hidden; transition: transform 0.3s ease; }
.project-card:hover { transform: translateY(-10px); }
.project-card h3 { font-size: 1.8rem; margin-bottom: 20px; }
.project-card p { color: rgba(255,255,255,0.8); margin-bottom: 25px; line-height: 1.6; }
.project-btn { background: rgba(255,255,255,0.2); border: none; padding: 12px 25px; border-radius: 25px; color: white; cursor: pointer; transition: all 0.3s ease; }
.project-btn:hover { background: rgba(255,255,255,0.3); }
.gradient-1 { background: linear-gradient(135deg, #667eea, #764ba2); }
.gradient-2 { background: linear-gradient(135deg, #f093fb, #f5576c); }
.gradient-3 { background: linear-gradient(135deg, #4facfe, #00f2fe); }
@keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
.floating { animation: float 6s ease-in-out infinite; }
@media (max-width: 768px) { .gradient-text { font-size: 3rem; } .projects-grid { grid-template-columns: 1fr; } }`
  }
];

export default function PortfolioTemplates() {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  function downloadTemplate(template) {
    const zip = new JSZip();
    
    // Add HTML file
    zip.file('index.html', template.html);
    
    // Add CSS file
    zip.file('styles.css', template.css);
    
    // Add README
    const readme = `# ${template.name}

${template.description}

## Files
- index.html - Main HTML file
- styles.css - CSS styles

## Usage
1. Open index.html in your browser
2. Customize the content and styles
3. Deploy to your preferred hosting service

## Customization
- Update the personal information in the HTML
- Modify colors and fonts in the CSS
- Add your own projects and content
- Customize animations and interactions

Created with Graphicshop CSS Lab`;
    
    zip.file('README.md', readme);
    
    zip.generateAsync({ type: 'blob' }).then(content => {
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${template.id}-portfolio.zip`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  return (
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: 24 }}>
      <h2 style={{ fontWeight: 700, fontSize: 28, marginBottom: 8 }}>Portfolio Templates</h2>
      <p style={{ color: '#666', marginBottom: 32 }}>Download starter templates to practice your CSS skills and create stunning portfolios.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 24 }}>
        {templates.map(template => (
          <div key={template.id} style={{ 
            background: 'white', 
            borderRadius: 12, 
            padding: 24, 
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            border: '1px solid #e5e7eb'
          }}>
            <h3 style={{ fontSize: 20, marginBottom: 8, color: '#1f2937' }}>{template.name}</h3>
            <p style={{ color: '#6b7280', marginBottom: 16, lineHeight: 1.5 }}>{template.description}</p>
            
            <div style={{ marginBottom: 20 }}>
              <button 
                onClick={() => setSelectedTemplate(selectedTemplate === template.id ? null : template.id)}
                style={{ 
                  background: selectedTemplate === template.id ? '#3b82f6' : '#f3f4f6',
                  color: selectedTemplate === template.id ? 'white' : '#374151',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: 6,
                  cursor: 'pointer',
                  marginRight: 8
                }}
              >
                {selectedTemplate === template.id ? 'Hide Preview' : 'Show Preview'}
              </button>
              <button 
                onClick={() => downloadTemplate(template)}
                style={{ 
                  background: '#10b981',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: 6,
                  cursor: 'pointer'
                }}
              >
                Download
              </button>
            </div>
            
            {selectedTemplate === template.id && (
              <div style={{ 
                border: '1px solid #e5e7eb', 
                borderRadius: 8, 
                overflow: 'hidden',
                marginBottom: 16
              }}>
                <div style={{ 
                  background: '#f9fafb', 
                  padding: '8px 12px', 
                  borderBottom: '1px solid #e5e7eb',
                  fontSize: 14,
                  color: '#6b7280'
                }}>
                  Preview
                </div>
                <div 
                  style={{ 
                    height: 300, 
                    overflow: 'auto',
                    background: 'white'
                  }}
                  dangerouslySetInnerHTML={{ __html: template.preview }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
