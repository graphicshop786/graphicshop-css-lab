export const animationPresets = {
  fadeIn: {
    label: 'Fade In',
    css: `.anim-demo { animation: fadeIn 1s ease; }\n@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }`
  },
  slideLeft: {
    label: 'Slide In Left',
    css: `.anim-demo { animation: slideLeft 1s ease; }\n@keyframes slideLeft { from { transform: translateX(-100px); opacity:0; } to { transform: translateX(0); opacity:1; } }`
  },
  slideRight: {
    label: 'Slide In Right',
    css: `.anim-demo { animation: slideRight 1s ease; }\n@keyframes slideRight { from { transform: translateX(100px); opacity:0; } to { transform: translateX(0); opacity:1; } }`
  },
  bounce: {
    label: 'Bounce',
    css: `.anim-demo { animation: bounce 1s infinite alternate; }\n@keyframes bounce { to { transform: translateY(-20px); } }`
  },
  pulse: {
    label: 'Pulse',
    css: `.anim-demo { animation: pulse 1s infinite alternate; }\n@keyframes pulse { to { transform: scale(1.1); background: #fbbf24; } }`
  },
  rotate: {
    label: 'Rotate',
    css: `.anim-demo { animation: rotate 1s linear infinite; display:inline-block; }\n@keyframes rotate { to { transform: rotate(360deg); } }`
  },
  shake: {
    label: 'Shake',
    css: `.anim-demo { animation: shake 0.5s linear infinite; display:inline-block; }\n@keyframes shake { 10%, 90% { transform: translateX(-2px); } 20%, 80% { transform: translateX(4px); } 30%, 50%, 70% { transform: translateX(-8px); } 40%, 60% { transform: translateX(8px); } }`
  },
  zoomIn: {
    label: 'Zoom In',
    css: `.anim-demo { animation: zoomIn 0.7s cubic-bezier(.4,2,.6,1.0); }\n@keyframes zoomIn { from { transform: scale(0.5); opacity:0; } to { transform: scale(1); opacity:1; } }`
  },
  flip: {
    label: 'Flip',
    css: `.anim-demo { animation: flip 1s cubic-bezier(.4,2,.6,1.0); display:inline-block; }\n@keyframes flip { from { transform: rotateY(0deg); } to { transform: rotateY(360deg); } }`
  },
  swing: {
    label: 'Swing',
    css: `.anim-demo { animation: swing 1s ease-in-out infinite alternate; display:inline-block; }\n@keyframes swing { 20% { transform: rotate(15deg); } 40% { transform: rotate(-10deg); } 60% { transform: rotate(5deg); } 80% { transform: rotate(-5deg); } 100% { transform: rotate(0deg); } }`
  },
  rubberBand: {
    label: 'Rubber Band',
    css: `.anim-demo { animation: rubberBand 1s; display:inline-block; }\n@keyframes rubberBand { 0% { transform: scaleX(1); } 30% { transform: scaleX(1.25); } 40% { transform: scaleX(0.75); } 50% { transform: scaleX(1.15); } 65% { transform: scaleX(0.95); } 75% { transform: scaleX(1.05); } 100% { transform: scaleX(1); } }`
  },
  heartBeat: {
    label: 'Heart Beat',
    css: `.anim-demo { animation: heartBeat 1.3s ease-in-out infinite both; display:inline-block; }\n@keyframes heartBeat { 0%, 100% { transform: scale(1); } 14% { transform: scale(1.3); } 28% { transform: scale(1); } 42% { transform: scale(1.3); } 70% { transform: scale(1); } }`
  },
  wobble: {
    label: 'Wobble',
    css: `.anim-demo { animation: wobble 1s; display:inline-block; }\n@keyframes wobble { 0% { transform: translateX(0%); } 15% { transform: translateX(-25%) rotate(-5deg); } 30% { transform: translateX(20%) rotate(3deg); } 45% { transform: translateX(-15%) rotate(-3deg); } 60% { transform: translateX(10%) rotate(2deg); } 75% { transform: translateX(-5%) rotate(-1deg); } 100% { transform: translateX(0%); } }`
  },
  jello: {
    label: 'Jello',
    css: `.anim-demo { animation: jello 0.9s; display:inline-block; }\n@keyframes jello { 0%,100% { transform: scale3d(1,1,1); } 30%,50%,70%,90% { transform: scale3d(1.25,0.75,1); } 40%,60%,80% { transform: scale3d(0.75,1.25,1); } }`
  },
  // --- Animate.css Attention Seekers ---
  bounceIn: {
    label: 'Bounce In',
    css: `.anim-demo { animation: bounceIn 1s; }
@keyframes bounceIn {
  0%, 20%, 40%, 60%, 80%, 100% { animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000); }
  0% { opacity: 0; transform: scale3d(.3, .3, .3); }
  20% { transform: scale3d(1.1, 1.1, 1.1); }
  40% { transform: scale3d(.9, .9, .9); }
  60% { opacity: 1; transform: scale3d(1.03, 1.03, 1.03); }
  80% { transform: scale3d(.97, .97, .97); }
  100% { opacity: 1; transform: scale3d(1, 1, 1); }
}`
  },
  flash: {
    label: 'Flash',
    css: `.anim-demo { animation: flash 1s linear infinite; }
@keyframes flash {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}`
  },
  headShake: {
    label: 'Head Shake',
    css: `.anim-demo { animation: headShake 1s; }
@keyframes headShake {
  0% { transform: translateX(0); }
  6.5% { transform: translateX(-6px) rotateY(-9deg); }
  18.5% { transform: translateX(5px) rotateY(7deg); }
  31.5% { transform: translateX(-3px) rotateY(-5deg); }
  43.5% { transform: translateX(2px) rotateY(3deg); }
  50% { transform: translateX(0); }
}`
  },
  tada: {
    label: 'Tada',
    css: `.anim-demo { animation: tada 1s; }
@keyframes tada {
  0% { transform: scale3d(1, 1, 1); }
  10%, 20% { transform: scale3d(0.9, 0.9, 0.9) rotate(-3deg); }
  30%, 50%, 70%, 90% { transform: scale3d(1.1, 1.1, 1.1) rotate(3deg); }
  40%, 60%, 80% { transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg); }
  100% { transform: scale3d(1, 1, 1); }
}`
  },
  // --- Animate.css Bouncing Entrances ---
  bounceInDown: {
    label: 'Bounce In Down',
    css: `.anim-demo { animation: bounceInDown 1s; }
@keyframes bounceInDown {
  0%, 60%, 75%, 90%, 100% { animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000); }
  0% { opacity: 0; transform: translate3d(0, -3000px, 0); }
  60% { opacity: 1; transform: translate3d(0, 25px, 0); }
  75% { transform: translate3d(0, -10px, 0); }
  90% { transform: translate3d(0, 5px, 0); }
  100% { transform: none; }
}`
  },
  bounceInLeft: {
    label: 'Bounce In Left',
    css: `.anim-demo { animation: bounceInLeft 1s; }
@keyframes bounceInLeft {
  0%, 60%, 75%, 90%, 100% { animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000); }
  0% { opacity: 0; transform: translate3d(-3000px, 0, 0); }
  60% { opacity: 1; transform: translate3d(25px, 0, 0); }
  75% { transform: translate3d(-10px, 0, 0); }
  90% { transform: translate3d(5px, 0, 0); }
  100% { transform: none; }
}`
  },
  bounceInRight: {
    label: 'Bounce In Right',
    css: `.anim-demo { animation: bounceInRight 1s; }
@keyframes bounceInRight {
  0%, 60%, 75%, 90%, 100% { animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000); }
  0% { opacity: 0; transform: translate3d(3000px, 0, 0); }
  60% { opacity: 1; transform: translate3d(-25px, 0, 0); }
  75% { transform: translate3d(10px, 0, 0); }
  90% { transform: translate3d(-5px, 0, 0); }
  100% { transform: none; }
}`
  },
  bounceInUp: {
    label: 'Bounce In Up',
    css: `.anim-demo { animation: bounceInUp 1s; }
@keyframes bounceInUp {
  0%, 60%, 75%, 90%, 100% { animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000); }
  0% { opacity: 0; transform: translate3d(0, 3000px, 0); }
  60% { opacity: 1; transform: translate3d(0, -20px, 0); }
  75% { transform: translate3d(0, 10px, 0); }
  90% { transform: translate3d(0, -5px, 0); }
  100% { transform: none; }
}`
  },
  // --- Animate.css Fading Entrances ---
  fadeInDown: {
    label: 'Fade In Down',
    css: `.anim-demo { animation: fadeInDown 1s; }
@keyframes fadeInDown {
  from { opacity: 0; transform: translate3d(0, -100%, 0); }
  to { opacity: 1; transform: none; }
}`
  },
  fadeInLeft: {
    label: 'Fade In Left',
    css: `.anim-demo { animation: fadeInLeft 1s; }
@keyframes fadeInLeft {
  from { opacity: 0; transform: translate3d(-100%, 0, 0); }
  to { opacity: 1; transform: none; }
}`
  },
  fadeInRight: {
    label: 'Fade In Right',
    css: `.anim-demo { animation: fadeInRight 1s; }
@keyframes fadeInRight {
  from { opacity: 0; transform: translate3d(100%, 0, 0); }
  to { opacity: 1; transform: none; }
}`
  },
  fadeInUp: {
    label: 'Fade In Up',
    css: `.anim-demo { animation: fadeInUp 1s; }
@keyframes fadeInUp {
  from { opacity: 0; transform: translate3d(0, 100%, 0); }
  to { opacity: 1; transform: none; }
}`
  },
  // --- Animate.css Flippers ---
  flipInX: {
    label: 'Flip In X',
    css: `.anim-demo { animation: flipInX 1s; backface-visibility: visible !important; }
@keyframes flipInX {
  from { transform: perspective(400px) rotateX(90deg); opacity: 0; }
  40% { transform: perspective(400px) rotateX(-10deg); }
  70% { transform: perspective(400px) rotateX(10deg); }
  100% { transform: perspective(400px) rotateX(0deg); opacity: 1; }
}`
  },
  flipInY: {
    label: 'Flip In Y',
    css: `.anim-demo { animation: flipInY 1s; backface-visibility: visible !important; }
@keyframes flipInY {
  from { transform: perspective(400px) rotateY(90deg); opacity: 0; }
  40% { transform: perspective(400px) rotateY(-10deg); }
  70% { transform: perspective(400px) rotateY(10deg); }
  100% { transform: perspective(400px) rotateY(0deg); opacity: 1; }
}`
  },
  // --- Animate.css Lightspeed ---
  lightSpeedInRight: {
    label: 'Light Speed In Right',
    css: `.anim-demo { animation: lightSpeedInRight 1s; }
@keyframes lightSpeedInRight {
  from { transform: translate3d(100%, 0, 0) skewX(-30deg); opacity: 0; }
  60% { transform: skewX(20deg); opacity: 1; }
  80% { transform: skewX(-5deg); opacity: 1; }
  100% { transform: none; opacity: 1; }
}`
  },
  lightSpeedInLeft: {
    label: 'Light Speed In Left',
    css: `.anim-demo { animation: lightSpeedInLeft 1s; }
@keyframes lightSpeedInLeft {
  from { transform: translate3d(-100%, 0, 0) skewX(30deg); opacity: 0; }
  60% { transform: skewX(-20deg); opacity: 1; }
  80% { transform: skewX(5deg); opacity: 1; }
  100% { transform: none; opacity: 1; }
}`
  },
  // --- Animate.css Rotating Entrances ---
  rotateIn: {
    label: 'Rotate In',
    css: `.anim-demo { animation: rotateIn 1s; }
@keyframes rotateIn {
  from { transform: rotate(-200deg); opacity: 0; }
  to { transform: rotate(0); opacity: 1; }
}`
  },
  rotateInDownLeft: {
    label: 'Rotate In Down Left',
    css: `.anim-demo { animation: rotateInDownLeft 1s; }
@keyframes rotateInDownLeft {
  from { transform: rotate(-45deg); opacity: 0; }
  to { transform: rotate(0); opacity: 1; }
}`
  },
  rotateInDownRight: {
    label: 'Rotate In Down Right',
    css: `.anim-demo { animation: rotateInDownRight 1s; }
@keyframes rotateInDownRight {
  from { transform: rotate(45deg); opacity: 0; }
  to { transform: rotate(0); opacity: 1; }
}`
  },
  // --- Animate.css Specials ---
  hinge: {
    label: 'Hinge',
    css: `.anim-demo { animation: hinge 2s; transform-origin: top left; }
@keyframes hinge {
  0% { transform: rotate(0); transform-origin: top left; animation-timing-function: ease-in-out; }
  20%, 60% { transform: rotate(80deg); transform-origin: top left; animation-timing-function: ease-in-out; }
  40%, 80% { transform: rotate(60deg); transform-origin: top left; animation-timing-function: ease-in-out; opacity: 1; }
  100% { transform: translateY(700px); opacity: 0; }
}`
  },
  rollIn: {
    label: 'Roll In',
    css: `.anim-demo { animation: rollIn 1s; }
@keyframes rollIn {
  from { opacity: 0; transform: translate3d(-100%, 0, 0) rotate(-120deg); }
  to { opacity: 1; transform: none; }
}`
  },
  // --- Animate.css Zoom Entrances ---
  zoomInDown: {
    label: 'Zoom In Down',
    css: `.anim-demo { animation: zoomInDown 1s; }
@keyframes zoomInDown {
  0% { opacity: 0; transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0); animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190); }
  60% { opacity: 1; transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0); animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1); }
  100% { transform: scale3d(1, 1, 1); }
}`
  },
  zoomInLeft: {
    label: 'Zoom In Left',
    css: `.anim-demo { animation: zoomInLeft 1s; }
@keyframes zoomInLeft {
  0% { opacity: 0; transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0); animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190); }
  60% { opacity: 1; transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0); animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1); }
  100% { transform: scale3d(1, 1, 1); }
}`
  },
  zoomInRight: {
    label: 'Zoom In Right',
    css: `.anim-demo { animation: zoomInRight 1s; }
@keyframes zoomInRight {
  0% { opacity: 0; transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0); animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190); }
  60% { opacity: 1; transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0); animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1); }
  100% { transform: scale3d(1, 1, 1); }
}`
  },
  zoomInUp: {
    label: 'Zoom In Up',
    css: `.anim-demo { animation: zoomInUp 1s; }
@keyframes zoomInUp {
  0% { opacity: 0; transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0); animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190); }
  60% { opacity: 1; transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0); animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1); }
  100% { transform: scale3d(1, 1, 1); }
}`
  },
  // --- Animate.css Sliding Entrances ---
  slideInDown: {
    label: 'Slide In Down',
    css: `.anim-demo { animation: slideInDown 1s; }
@keyframes slideInDown {
  from { transform: translate3d(0, -100%, 0); visibility: visible; }
  to { transform: translate3d(0, 0, 0); }
}`
  },
  slideInLeft: {
    label: 'Slide In Left',
    css: `.anim-demo { animation: slideInLeft 1s; }
@keyframes slideInLeft {
  from { transform: translate3d(-100%, 0, 0); visibility: visible; }
  to { transform: translate3d(0, 0, 0); }
}`
  },
  slideInRight: {
    label: 'Slide In Right',
    css: `.anim-demo { animation: slideInRight 1s; }
@keyframes slideInRight {
  from { transform: translate3d(100%, 0, 0); visibility: visible; }
  to { transform: translate3d(0, 0, 0); }
}`
  },
  slideInUp: {
    label: 'Slide In Up',
    css: `.anim-demo { animation: slideInUp 1s; }
@keyframes slideInUp {
  from { transform: translate3d(0, 100%, 0); visibility: visible; }
  to { transform: translate3d(0, 0, 0); }
}`
  }
};