import { useEffect, useState } from 'react';
import './Valentine.css';

const Valentine = () => {
  const [currentScene, setCurrentScene] = useState('password');
  const [showQuestion, setShowQuestion] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [currentReasonIndex, setCurrentReasonIndex] = useState(0);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Scroll to message when date is selected
  useEffect(() => {
    if (selectedDate && currentScene === 'date-planner') {
      setTimeout(() => {
        const messageElement = document.querySelector('.selected-message-inline');
        if (messageElement) {
          messageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300);
    }
  }, [selectedDate, currentScene]);

  // Scroll to top IMMEDIATELY whenever scene changes
  useEffect(() => {
    // Force immediate scroll to top (synchronous)
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  }, [currentScene]);

  // Play video when in view
  useEffect(() => {
    const video = document.getElementById('coupleVideo');
    if (!video) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.5 });

    observer.observe(video);

    return () => observer.disconnect();
  }, [currentScene]);

  useEffect(() => {
    // Create particles
    createParticles();
    createFloatingHearts();

    // Scroll to top on initial page load
    window.scrollTo(0, 0);

    // Landing scene animation (only if not on password screen)
    if (currentScene === 'landing') {
      setTimeout(() => {
        setShowQuestion(true);
        setTimeout(() => {
          setShowButtons(true);
        }, 1000);
      }, 3000);
    }
  }, [currentScene]);

  const createParticles = () => {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
      container.appendChild(particle);
    }
  };

  const createFloatingHearts = () => {
    const container = document.getElementById('floatingHearts');
    if (!container) return;

    setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.textContent = '💖';
      heart.style.left = Math.random() * 100 + '%';
      heart.style.animationDuration = (Math.random() * 4 + 6) + 's';
      container.appendChild(heart);

      setTimeout(() => heart.remove(), 10000);
    }, 1000);
  };

  const createRain = () => {
    const container = document.getElementById('rain');
    if (!container) return;

    for (let i = 0; i < 100; i++) {
      const drop = document.createElement('div');
      drop.className = 'raindrop';
      drop.style.left = Math.random() * 100 + '%';
      drop.style.animationDuration = (Math.random() * 2 + 1) + 's';
      drop.style.animationDelay = Math.random() * 2 + 's';
      container.appendChild(drop);
    }
  };

  const createConfetti = () => {
    const container = document.getElementById('confettiContainer');
    if (!container) return;

    const colors = ['#FF6B9D', '#FFD700', '#FF69B4', '#FFA500', '#FF1493', '#FFB6C1'];

    for (let i = 0; i < 150; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.animationDelay = Math.random() * 3 + 's';
      confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
      container.appendChild(confetti);
    }
  };

  const handleYes = () => {
    createConfetti();
    setCurrentScene('yes');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const handleNo = () => {
    createRain();
    setCurrentScene('no');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const handleReconsider = () => {
    setCurrentScene('landing');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const handleGoBack = () => {
    setCurrentScene('landing');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const correctPassword = 'iloveyoumuskaanuzairkhanforlife29';
    const trimmedPassword = password.trim().toLowerCase();
    const correctLower = correctPassword.toLowerCase();

    console.log('Entered:', trimmedPassword);
    console.log('Correct:', correctLower);
    console.log('Match:', trimmedPassword === correctLower);

    if (trimmedPassword === correctLower) {
      setPasswordError('');
      setCurrentScene('landing');
      setShowQuestion(false);
      setShowButtons(false);
    } else {
      setPasswordError('Wrong password! Try again... 💔');
      setPassword('');
    }
  };

  const handleContinue = () => {
    setCurrentScene('love-letter');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const handleExploreMore = () => {
    setCurrentScene('timeline');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const handleShowReasons = () => {
    setCurrentScene('reasons');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const handleShowDates = () => {
    setCurrentScene('date-planner');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const handleShowGallery = () => {
    setCurrentScene('gallery');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const handleQuiz = () => {
    setCurrentScene('quiz');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
  };

  const dateMessages = {
    1: "Perfect! I'll set the alarm early... waking up next to you is the best part of any day 🌅💕",
    2: "Yes! You cook, I'll be your taste tester and do the dishes after! 😘",
    3: "Can't wait! I'll try my best not to make it look like abstract art 🎨😊",
    4: "Stargazing with you sounds perfect. I promise to actually look at the stars too! ⭐💋",
    5: "Classy date for my classy girl! I'll be on my best behavior, I promise 😇",
    6: "Nature + You = My happy place. Can't wait for this! 🏞️💚",
    7: "Game night! I'll try not to be too competitive... okay maybe a little 🎮😊",
    8: "Books and coffee sounds perfect! I'll even let you pick the café ☕💕",
    9: "Spontaneous adventures with you are my favorite! Let's see where the day takes us 🎪✨",
    10: "Yes! I've been dying to try that place. Sorry in advance if I ask to taste from your plate 🍕😋",
    11: "OMG yes! Cat café = You + Cats + Coffee = My three favorite things! 🐱☕",
    12: "Beach day sounds amazing! Sun, sand, and quality time with you ☀️💕",
    13: "Mountains + You = Perfect combo. Sorry in advance, but I WILL take a lot of photos 📸",
    14: "Anywhere with you feels special. Let's pick a destination and make memories! 🌍💑"
  };

  const reasons = [
    "Your smile lights up my entire world",
    "The way you laugh makes everything better",
    "How you make me feel safe and understood",
    "Your kindness towards everyone you meet",
    "The sparkle in your eyes when you talk about your dreams",
    "How you listen with your whole heart",
    "Your strength, even when you think you're weak",
    "The way you make ordinary moments magical",
    "How you believe in me when I don't believe in myself",
    "Your warmth that melts away any bad day",
    "The adventures we have together",
    "How you make me want to be a better person",
    "Your beautiful soul that shines through everything",
    "The way you care about the little things",
    "How you remember what matters to me",
    "Your courage to be yourself",
    "The comfort of your presence",
    "How you make me laugh until my stomach hurts",
    "Your creativity and unique perspective",
    "The way you support my dreams",
    "How you make me feel loved every single day",
    "Your honesty and authenticity",
    "The way you dance like nobody's watching",
    "How you appreciate the small joys in life",
    "Your thoughtfulness in everything you do",
    "The way you make me feel at home",
    "How you're always there when I need you",
    "Your beautiful mind and how it works",
    "The way you see the best in people",
    "How you inspire me to grow",
    "Your patience with me",
    "The way you celebrate my wins",
    "How you comfort me in tough times",
    "Your unique style and personality",
    "The way you make me feel special",
    "How you're not afraid to be silly",
    "Your determination and drive",
    "The way you care about the world",
    "How you make time feel like it stops",
    "Your infectious enthusiasm",
    "The way you understand me without words",
    "How you make every day an adventure",
    "Your compassion for others",
    "The way you make me feel butterflies",
    "How you're my best friend and so much more",
    "Your ability to make me smile even when sad",
    "The way you challenge me to be better",
    "How you accept all of me",
    "Your beautiful heart",
    "Because after 3 years, you still give me butterflies like day one"
  ];

  return (
    <div className="valentine-container">
      {/* Particle Background */}
      <div className="particles" id="particles"></div>

      {/* Password Screen */}
      {currentScene === 'password' && (
        <div className="scene active password-scene">
          <div className="password-overlay">
            <div className="floating-hearts-password"></div>
            <div className="password-content-wrapper">
              <div className="password-card">
                <div className="lock-animation">
                  <div className="lock-glow"></div>
                  <div className="lock-icon">🔒</div>
                </div>

                <h1 className="password-heading">
                  Something Special <br />
                  <span className="for-you">For Muskaan</span>
                </h1>

                <p className="password-description">
                  A secret message awaits you...<br />
                  Enter the password to unlock 💕
                </p>

                <form onSubmit={handlePasswordSubmit} className="password-form-elegant">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Type the secret words..."
                      className="password-input-elegant"
                      autoFocus
                      autoComplete="off"
                    />
                    <div className="input-underline"></div>
                  </div>

                  {passwordError && (
                    <div className="error-message">
                      <span className="error-icon">❌</span>
                      <p>{passwordError}</p>
                    </div>
                  )}

                  <button type="submit" className="unlock-button">
                    <span className="button-text">Unlock My Surprise</span>
                    <span className="button-icon">💖</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Back Button - Show on NO and YES scenes */}
      {(currentScene === 'no' || currentScene === 'yes') && (
        <button className="back-button" onClick={handleGoBack}>
          ← Back
        </button>
      )}

      {/* Landing Scene */}
      {currentScene === 'landing' && (
        <div className="scene active valentine-landing">
          <div className="floating-hearts" id="floatingHearts"></div>
          <div className="landing-text">
            {!showQuestion && (
              <h1 className="intro-text">I have one very important question for you, Muskaan...</h1>
            )}
            {showQuestion && (
              <h1 className="question show">Will You Be My Valentine? 💖</h1>
            )}
          </div>
          {showButtons && (
            <div className="buttons-container">
              <button className="choice-btn yes-btn" onClick={handleYes}>💕 YES</button>
              <button className="choice-btn no-btn" onClick={handleNo}>😐 NO</button>
            </div>
          )}
        </div>
      )}

      {/* NO Scene */}
      {currentScene === 'no' && (
        <div className="scene active valentine-no-scene">
          <div className="rain" id="rain"></div>
          <div className="sad-content">
            <div className="crying-emoji">😢</div>
            <h2>This could've been us...</h2>

            <div className="future-lost">
              <p style={{ fontSize: '1.3rem', marginBottom: '30px', opacity: 0.9 }}>Some futures disappear when we say no...</p>

              <div className="future-grid">
                <div className="future-card">
                  {/* Real photo - Adventures Together */}
                  <div className="placeholder future-photo">
                    <img
                      src="https://customer-assets.emergentagent.com/job_valentine-proposal-40/artifacts/5vjor97u_WhatsApp%20Image%202026-02-03%20at%2015.29.38%20%282%29.jpeg"
                      alt="Our future adventures"
                      className="future-aged-image"
                    />
                  </div>
                  <h3>Adventures Together</h3>
                  <p>All the places we could have explored...</p>
                </div>

                <div className="future-card">
                  {/* Real photo - Endless Laughter */}
                  <div className="placeholder future-photo">
                    <img
                      src="https://customer-assets.emergentagent.com/job_valentine-proposal-40/artifacts/dho6ec1u_WhatsApp%20Image%202026-02-03%20at%2015.29.38%20%281%29.jpeg"
                      alt="Our laughter and joy"
                      className="future-aged-image"
                    />
                  </div>
                  <h3>Endless Laughter</h3>
                  <p>All the moments we could have shared...</p>
                </div>

                <div className="future-card">
                  {/* Real photo - Celebrations */}
                  <div className="placeholder future-photo">
                    <img
                      src="https://customer-assets.emergentagent.com/job_valentine-proposal-40/artifacts/byowzwwk_WhatsApp%20Image%202026-02-03%20at%2015.29.38.jpeg"
                      alt="Our celebrations"
                      className="future-aged-image"
                    />
                  </div>
                  <h3>Celebrations</h3>
                  <p>All the milestones we could have celebrated...</p>
                </div>
              </div>
            </div>

            <p style={{ fontSize: '1.4rem', marginTop: '50px', color: '#FFB6C1' }}>You can still change your mind, Muskaan... 🥺</p>
            <button className="reconsider-btn" onClick={handleReconsider}>💖 Reconsider?</button>
          </div>
        </div>
      )}

      {/* YES Scene */}
      {currentScene === 'yes' && (
        <div className="scene active valentine-yes-scene">
          <div className="confetti-container" id="confettiContainer"></div>
          <div className="happy-content">
            <div className="celebration-emoji">💃🕺</div>
            <h2>YAYYY!! We chose this future ❤️</h2>

            <div className="timeline">
              <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--deep-rose)' }}>Our Beautiful Future Together</h3>

              <div className="timeline-grid">
                <div className="timeline-card">
                  {/* Animated icon instead of emoji */}
                  <div className="placeholder timeline-animated">
                    <div className="animated-plane">✈️</div>
                  </div>
                  <h3>Adventures & Travel</h3>
                  <p>Exploring new cities, trying street food, getting lost and finding our way back together</p>
                </div>

                <div className="timeline-card">
                  <div className="placeholder timeline-animated">
                    <div className="animated-moon">🌙</div>
                  </div>
                  <h3>Late-Night Talks</h3>
                  <p>Deep conversations at 2 AM, sharing our dreams, fears, and everything in between</p>
                </div>

                <div className="timeline-card">
                  <div className="placeholder timeline-animated">
                    <div className="animated-home">🏡</div>
                  </div>
                  <h3>Our Own Place</h3>
                  <p>A home filled with laughter, warmth, and all our favorite things</p>
                </div>

                <div className="timeline-card">
                  <div className="placeholder timeline-animated">
                    <div className="animated-ring">💍</div>
                  </div>
                  <h3>Forever Promises</h3>
                  <p>The day I get to call you my wife and promise forever in front of everyone</p>
                </div>

                <div className="timeline-card">
                  <div className="placeholder timeline-animated">
                    <div className="animated-family">👨‍👩‍👧‍👦</div>
                  </div>
                  <h3>Growing Our Family</h3>
                  <p>Maybe kids, maybe pets, definitely lots of love and chaos</p>
                </div>

                <div className="timeline-card">
                  <div className="placeholder timeline-animated">
                    <div className="animated-celebrate">🎊</div>
                  </div>
                  <h3>Milestones Together</h3>
                  <p>Celebrating every success, supporting through every challenge, always as a team</p>
                </div>

                <div className="timeline-card">
                  <div className="placeholder timeline-animated">
                    <div className="animated-sunset">🌅</div>
                  </div>
                  <h3>Golden Years</h3>
                  <p>Grey hair, wrinkles, and still holding hands while watching sunsets</p>
                </div>

                <div className="timeline-card">
                  <div className="placeholder timeline-animated">
                    <div className="animated-heart">💕</div>
                  </div>
                  <h3>Forever & Always</h3>
                  <p>Growing old together, creating a lifetime of memories, hand in hand</p>
                </div>
              </div>
            </div>

            <div className="final-message" id="thankYouSection">
              <h3>Thank you for choosing us, Muskaan ❤️</h3>

              {/* Video of us */}
              <div className="video-container">
                <video
                  className="couple-video"
                  src="https://customer-assets.emergentagent.com/job_valentine-proposal-40/artifacts/dvvmrp4i_WhatsApp%20Video%202026-02-03%20at%2016.04.02.mp4"
                  muted
                  loop
                  playsInline
                  id="coupleVideo"
                />
              </div>

              <p>I can't wait to create this life with you. Every moment, every adventure, every laugh - it all starts now.</p>
            </div>

            <button className="continue-btn" onClick={handleContinue}>
              Continue Reading 💌
            </button>
          </div>
        </div>
      )}

      {/* Love Letter Scene - New unique content */}
      {currentScene === 'love-letter' && (
        <div className="scene active valentine-love-letter">
          <div className="floating-hearts" id="floatingHearts2"></div>
          <div className="love-letter-content">
            <div className="letter-header">
              <h2>Dear Muskaan,</h2>
              <span className="heart-divider">💕</span>
            </div>

            <div className="letter-body">
              <div className="letter-section">
                <h3>Why You? Why Us? (After 3 Years!)</h3>
                <p>
                  Three years ago, I had no idea that choosing you would be the best decision of my life.
                  We've laughed until we cried, had our share of disagreements (and I'm sorry for the times I was stubborn),
                  learned from each other's quirks, and somehow fallen even MORE in love with each passing day.
                  You're not just my girlfriend - you're my partner, my best friend, my favorite person, and the
                  reason I look forward to tomorrow. I'm grateful for your patience with me every single day.
                </p>
              </div>

              <div className="letter-section">
                <h3>The Little Things I Love (That You Don't Even Notice)</h3>
                <div className="love-items">
                  <div className="love-item">
                    <span className="item-emoji">🌸</span>
                    <p>How you steal my hoodies and somehow make them look better than I ever could</p>
                  </div>
                  <div className="love-item">
                    <span className="item-emoji">✨</span>
                    <p>The way you get competitive over board games (sorry for being a sore loser sometimes!)</p>
                  </div>
                  <div className="love-item">
                    <span className="item-emoji">🌙</span>
                    <p>Your sleepy voice in the morning when you're not ready to face the world</p>
                  </div>
                  <div className="love-item">
                    <span className="item-emoji">💫</span>
                    <p>How you laugh at your own jokes before you even finish telling them</p>
                  </div>
                  <div className="love-item">
                    <span className="item-emoji">🔥</span>
                    <p>That special smile you give me that makes everything better</p>
                  </div>
                  <div className="love-item">
                    <span className="item-emoji">😴</span>
                    <p>How you sprawl across the entire bed (sorry for complaining about it!)</p>
                  </div>
                </div>
              </div>

              <div className="letter-section">
                <h3>My Promises to You (For Year 4 and Beyond)</h3>
                <div className="promises-grid">
                  <div className="promise-card">
                    <div className="promise-icon">🤝</div>
                    <p>I promise to always split the last slice of pizza (okay, maybe not always)</p>
                  </div>
                  <div className="promise-card">
                    <div className="promise-icon">😂</div>
                    <p>I promise to laugh at your jokes, even the really bad ones</p>
                  </div>
                  <div className="promise-card">
                    <div className="promise-icon">🎮</div>
                    <p>I promise to let you win... sometimes</p>
                  </div>
                  <div className="promise-card">
                    <div className="promise-icon">🌱</div>
                    <p>I promise to keep growing with you, not just older</p>
                  </div>
                  <div className="promise-card">
                    <div className="promise-icon">💋</div>
                    <p>I promise to kiss you goodnight, even after we fight about dishes</p>
                  </div>
                  <div className="promise-card">
                    <div className="promise-icon">🔥</div>
                    <p>I promise to keep the spark alive (and I don't just mean the arguments 😏)</p>
                  </div>
                </div>
              </div>

              <div className="letter-section">
                <h3>What Being Your Valentine STILL Means After 3 Years</h3>
                <p>
                  It means choosing you every single day, not because I have to, but because I genuinely
                  can't imagine doing life with anyone else. It means being your biggest fan, your safe
                  space, your midnight snack partner, and yes, still getting butterflies when you walk
                  into a room. Three years in, and you still make my heart race. That's not luck,
                  that's us. 💕
                </p>
              </div>

              <div className="letter-section special-section">
                <h3>Ready for More Adventures?</h3>
                <p className="special-text">
                  We've already created so many incredible memories together. But here's the thing, Muskaan -
                  I don't want this to end. I want more late-night talks, more inside jokes that make no sense
                  to anyone else, more adventures (big and small), and definitely more of whatever this magic
                  is between us. So yeah, I'm asking you to be my Valentine... again. Because every day with
                  you deserves to be celebrated. ❤️
                </p>
                <div className="signature">
                  <p>Forever choosing you,</p>
                  <p className="signature-name">Your favorite person (I hope) 💖</p>
                </div>
              </div>
            </div>

            <div className="letter-footer">
              <div className="letter-nav-buttons">
                <button className="nav-btn" onClick={handleShowReasons}>
                  💝 50 Reasons Why
                </button>
                <button className="nav-btn" onClick={handleShowDates}>
                  📅 Plan Our Dates
                </button>
                <button className="nav-btn" onClick={handleShowGallery}>
                  📸 Memory Gallery
                </button>
              </div>
              <button className="back-to-start-btn" onClick={handleGoBack}>
                Start Over 🔄
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 50 Reasons Why I Love You Scene */}
      {currentScene === 'reasons' && (
        <div className="scene active valentine-reasons">
          <div className="floating-hearts" id="floatingHearts3"></div>
          <button className="back-button" onClick={() => setCurrentScene('love-letter')}>
            ← Back to Letter
          </button>

          <div className="reasons-content">
            <div className="reasons-header">
              <h2 className="typing-text">50 Reasons Why I Love You, Muskaan</h2>
              <p className="subtitle">Every single one of these is true 💖</p>
            </div>

            <div className="reasons-grid">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="reason-card"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="reason-number">{index + 1}</div>
                  <p className="reason-text">{reason}</p>
                </div>
              ))}
            </div>

            <div className="reasons-footer">
              <p className="footer-text">And these are just the beginning... I could write a thousand more ❤️</p>
              <div className="reasons-nav">
                <button className="nav-btn" onClick={handleShowDates}>
                  📅 Plan Our Dates
                </button>
                <button className="nav-btn" onClick={handleShowGallery}>
                  📸 Memory Gallery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Date Planner Scene */}
      {currentScene === 'date-planner' && (
        <div className="scene active valentine-date-planner">
          <button className="back-button" onClick={() => setCurrentScene('love-letter')}>
            ← Back to Letter
          </button>

          <div className="planner-content">
            <h2 className="planner-title">Our Future Date Ideas 💕</h2>
            <p className="planner-subtitle">Pick one and let's make it happen!</p>

            <div className="dates-grid">
              <div
                className={`date-card ${selectedDate === 1 ? 'selected' : ''}`}
                onClick={() => setSelectedDate(1)}
              >
                <div className="date-icon">🌅</div>
                <h3>Sunrise Adventure</h3>
                <p>Wake up early, chase the sunrise, and have breakfast as the world wakes up with us</p>
                <div className="date-vibe">Romantic & Peaceful</div>
              </div>

              <div
                className={`date-card ${selectedDate === 2 ? 'selected' : ''}`}
                onClick={() => setSelectedDate(2)}
              >
                <div className="date-icon">🍳</div>
                <h3>Cooking Together</h3>
                <p>Make a mess in the kitchen, laugh at our mistakes, and create our signature dish</p>
                <div className="date-vibe">Fun & Cozy</div>
              </div>

              <div
                className={`date-card ${selectedDate === 3 ? 'selected' : ''}`}
                onClick={() => setSelectedDate(3)}
              >
                <div className="date-icon">🎨</div>
                <h3>Art & Creativity</h3>
                <p>Paint, draw, or craft together - no skills required, just laughter and memories</p>
                <div className="date-vibe">Creative & Playful</div>
              </div>

              <div
                className={`date-card ${selectedDate === 4 ? 'selected' : ''}`}
                onClick={() => setSelectedDate(4)}
              >
                <div className="date-icon">⭐</div>
                <h3>Stargazing Night</h3>
                <p>Blankets, stars, deep conversations, and counting shooting stars together</p>
                <div className="date-vibe">Dreamy & Intimate</div>
              </div>

              <div
                className={`date-card ${selectedDate === 5 ? 'selected' : ''}`}
                onClick={() => setSelectedDate(5)}
              >
                <div className="date-icon">🎭</div>
                <h3>Cultural Date</h3>
                <p>Museums, art galleries, or a live show - experiencing culture hand in hand</p>
                <div className="date-vibe">Sophisticated & Inspiring</div>
              </div>

              <div
                className={`date-card ${selectedDate === 6 ? 'selected' : ''}`}
                onClick={() => setSelectedDate(6)}
              >
                <div className="date-icon">🏞️</div>
                <h3>Nature Escape</h3>
                <p>Hiking, beach walk, or park picnic - just us and nature</p>
                <div className="date-vibe">Refreshing & Adventurous</div>
              </div>

              <div
                className={`date-card ${selectedDate === 7 ? 'selected' : ''}`}
                onClick={() => setSelectedDate(7)}
              >
                <div className="date-icon">🎮</div>
                <h3>Game Night</h3>
                <p>Board games, video games, friendly competition, and lots of snacks</p>
                <div className="date-vibe">Playful & Competitive</div>
              </div>

              <div
                className={`date-card ${selectedDate === 8 ? 'selected' : ''}`}
                onClick={() => setSelectedDate(8)}
              >
                <div className="date-icon">📚</div>
                <h3>Bookstore & Coffee</h3>
                <p>Browse books, share recommendations, cozy café conversations</p>
                <div className="date-vibe">Relaxed & Thoughtful</div>
              </div>

              <div
                className={`date-card ${selectedDate === 9 ? 'selected' : ''}`}
                onClick={() => setSelectedDate(9)}
              >
                <div className="date-icon">🎪</div>
                <h3>Spontaneous Day</h3>
                <p>No plans, just see where the day takes us - pure spontaneity!</p>
                <div className="date-vibe">Exciting & Unpredictable</div>
              </div>

              <div
                className={`date-card ${selectedDate === 10 ? 'selected' : ''}`}
                onClick={() => setSelectedDate(10)}
              >
                <div className="date-icon">🍕</div>
                <h3>Foodie Tour</h3>
                <p>Trying that new restaurant, street food adventures, or cooking challenge at home</p>
                <div className="date-vibe">Delicious & Adventurous</div>
              </div>

              <div
                className={`date-card ${selectedDate === 11 ? 'selected' : ''}`}
                onClick={() => setSelectedDate(11)}
              >
                <div className="date-icon">🐱</div>
                <h3>Cat Café Date</h3>
                <p>Coffee, cats, cuddles (with the cats AND you) - what more could I want?</p>
                <div className="date-vibe">Adorable & Cozy</div>
              </div>

              <div
                className={`date-card ${selectedDate === 12 ? 'selected' : ''}`}
                onClick={() => setSelectedDate(12)}
              >
                <div className="date-icon">🏖️</div>
                <h3>Beach Day</h3>
                <p>Sun, sand, waves, and you - everything I need for the perfect day</p>
                <div className="date-vibe">Sunny & Relaxing</div>
              </div>

              <div
                className={`date-card ${selectedDate === 13 ? 'selected' : ''}`}
                onClick={() => setSelectedDate(13)}
              >
                <div className="date-icon">⛰️</div>
                <h3>Mountain Getaway</h3>
                <p>Hiking to the top, taking in views, and feeling on top of the world with you</p>
                <div className="date-vibe">Adventurous & Breathtaking</div>
              </div>

              <div
                className={`date-card ${selectedDate === 14 ? 'selected' : ''}`}
                onClick={() => setSelectedDate(14)}
              >
                <div className="date-icon">✈️</div>
                <h3>Weekend Escape</h3>
                <p>Pack a bag, pick a destination, get lost together somewhere new</p>
                <div className="date-vibe">Adventurous & Romantic</div>
              </div>
            </div>

            {selectedDate && (
              <div className="selected-message-inline">
                <p className="message-slide-in">{dateMessages[selectedDate]}</p>
              </div>
            )}

            <div className="planner-nav">
              <button className="nav-btn" onClick={handleShowReasons}>
                💝 50 Reasons Why
              </button>
              <button className="nav-btn" onClick={handleShowGallery}>
                📸 Memory Gallery
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Memory Gallery Scene */}
      {currentScene === 'gallery' && (
        <div className="scene active valentine-gallery">
          <button className="back-button" onClick={() => setCurrentScene('love-letter')}>
            ← Back to Letter
          </button>

          <div className="gallery-content">
            <h2 className="gallery-title">Our Memory Gallery 📸</h2>
            <p className="gallery-subtitle">Every moment with you is worth remembering</p>

            <div className="gallery-grid">
              {/* Video 1 - Our First Adventure */}
              <div className="gallery-item">
                <div className="gallery-video-wrapper">
                  <video
                    className="gallery-video"
                    src="https://customer-assets.emergentagent.com/job_valentine-proposal-40/artifacts/59khez99_1.mp4"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                  <div className="video-overlay">
                    <p>Our First Adventure</p>
                  </div>
                </div>
              </div>

              {/* Video from earlier - Celebrating Together */}
              <div className="gallery-item">
                <div className="gallery-video-wrapper">
                  <video
                    className="gallery-video"
                    src="https://customer-assets.emergentagent.com/job_valentine-proposal-40/artifacts/oa6kjuyn_WhatsApp%20Video%202026-02-03%20at%2016.25.52.mp4"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                  <div className="video-overlay">
                    <p>Celebrating Together</p>
                  </div>
                </div>
              </div>

              {/* Video 2 - Special Moment */}
              <div className="gallery-item">
                <div className="gallery-video-wrapper">
                  <video
                    className="gallery-video"
                    src="https://customer-assets.emergentagent.com/job_valentine-proposal-40/artifacts/v7kalmgc_2.mp4"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                  <div className="video-overlay">
                    <p>Special Moment</p>
                  </div>
                </div>
              </div>

              {/* Video 3 - Making Memories */}
              <div className="gallery-item">
                <div className="gallery-video-wrapper">
                  <video
                    className="gallery-video"
                    src="https://customer-assets.emergentagent.com/job_valentine-proposal-40/artifacts/n0n8shvd_3.mp4"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                  <div className="video-overlay">
                    <p>Making Memories</p>
                  </div>
                </div>
              </div>

              {/* Video 4 - Happy Times */}
              <div className="gallery-item">
                <div className="gallery-video-wrapper">
                  <video
                    className="gallery-video"
                    src="https://customer-assets.emergentagent.com/job_valentine-proposal-40/artifacts/o6bq8gnv_4.mp4"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                  <div className="video-overlay">
                    <p>Happy Times</p>
                  </div>
                </div>
              </div>

              {/* Video 5 - Just Us */}
              <div className="gallery-item">
                <div className="gallery-video-wrapper">
                  <video
                    className="gallery-video"
                    src="https://customer-assets.emergentagent.com/job_valentine-proposal-40/artifacts/7iiv5cr0_5.mp4"
                    muted
                    loop
                    playsInline
                    autoPlay
                  />
                  <div className="video-overlay">
                    <p>Just Us</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="gallery-message">
              <p className="message-text">
                These are just a few memories, but with you as my Valentine,
                we'll create countless more beautiful moments together 💕
              </p>
            </div>

            <div className="gallery-nav">
              <button className="nav-btn" onClick={handleShowReasons}>
                💝 50 Reasons Why
              </button>
              <button className="nav-btn" onClick={handleShowDates}>
                📅 Plan Our Dates
              </button>
              <button className="nav-btn" onClick={handleGoBack}>
                🏠 Back to Start
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Valentine;
