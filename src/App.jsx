import React, { useState, useEffect, useRef } from 'react';
import { ASSETS } from './assetsData';
import { PROJECTS_DATA } from './projectsData';
import ThreeBackground from './ThreeBackground';
import ProjectWorkflow from './ProjectWorkflow';
import { 
  User, Cpu, Briefcase, FolderGit2, HelpCircle, BookOpen, Award, Activity, Mail, Terminal, Download, Brain, Layers, Radio, FileText,
  X, ExternalLink, CheckCircle2, Sparkles, Maximize2, GraduationCap, Zap, Flame, Code2, Quote
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('top');

  // About 3D Kinetic Card State
  const [aboutTab, setAboutTab] = useState('brief');
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [aboutTilt, setAboutTilt] = useState({ x: 0, y: 0, px: 50, py: 50 });

  // Work Cards 3D Interactive Tilt State (keyed by project.id)
  const [workTilts, setWorkTilts] = useState({});

  // CLI System Console State
  const [cliOpen, setCliOpen] = useState(false);
  const [cliLogs, setCliLogs] = useState([
    "┌────────────────────────────────────────────────────────────┐",
    "│   GOURAV SECURE SYSTEM CONSOLE · BENGALURU NODE ACTIVE     │",
    "│   Machine Learning Intelligence & Autonomous Swarm Core   │",
    "└────────────────────────────────────────────────────────────┘",
    "System ready. Type 'help' or click command chips below."
  ]);
  const [cliInputVal, setCliInputVal] = useState('');
  const cliBodyRef = useRef(null);
  const cliInputRef = useRef(null);

  const [selectedProject, setSelectedProject] = useState(null);

  // Subtle auto-cycle for About tabs every 6.5s when not hovering
  useEffect(() => {
    if (isAboutHovered) return;
    const tabOrder = ['brief', 'edu', 'stats', 'quote'];
    const timer = setInterval(() => {
      setAboutTab((prev) => {
        const nextIdx = (tabOrder.indexOf(prev) + 1) % tabOrder.length;
        return tabOrder[nextIdx];
      });
    }, 6500);
    return () => clearInterval(timer);
  }, [isAboutHovered]);

  const handleAboutMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const px = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const py = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    setAboutTilt({ x, y, px, py });
  };

  const handleAboutMouseLeave = () => {
    setIsAboutHovered(false);
    setAboutTilt({ x: 0, y: 0, px: 50, py: 50 });
  };

  // Work Cards 3D tilt handlers
  const handleWorkMouseMove = (e, id) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const px = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const py = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    setWorkTilts(prev => ({
      ...prev,
      [id]: { x, y, px, py, isHovered: true }
    }));
  };

  const handleWorkMouseLeave = (id) => {
    setWorkTilts(prev => ({
      ...prev,
      [id]: { x: 0, y: 0, px: 50, py: 50, isHovered: false }
    }));
  };

  // Auto-scroll CLI output
  useEffect(() => {
    if (cliBodyRef.current) {
      cliBodyRef.current.scrollTop = cliBodyRef.current.scrollHeight;
    }
  }, [cliLogs, cliOpen]);

  // Focus CLI input on open
  useEffect(() => {
    if (cliOpen && cliInputRef.current) {
      cliInputRef.current.focus();
    }
  }, [cliOpen]);

  // Lock body scroll and handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (cliOpen) setCliOpen(false);
        if (selectedProject) setSelectedProject(null);
      }
    };
    if (selectedProject || cliOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject, cliOpen]);

  // Active section scroll tracker
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'experience', 'workflow', 'work', 'questions', 'log', 'certifications', 'contact'];
      let current = 'top';
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 220;
          if (window.scrollY >= top) current = id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const downloadResume = () => {
    const pdfB64 = ASSETS.pdfB64;
    if (!pdfB64) return;
    const byteChars = atob(pdfB64);
    const byteArray = new Uint8Array(byteChars.length);
    for (let i = 0; i < byteChars.length; i++) byteArray[i] = byteChars.charCodeAt(i);
    const blob = new Blob([byteArray], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'GOURAV_RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // CLI Command Execution Logic
  const executeCliCommand = (cmdText) => {
    const cmd = cmdText.trim().toLowerCase();
    if (!cmd) return;
    let response = "";
    if (cmd === 'help') {
      response = "COMMANDS: bio | experience | projects | skills | awards | matrix | resume | contact | clear";
    } else if (cmd === 'bio') {
      response = "A Gourav — Third-year Computer Science Engineering student at APS College of Engineering, Bengaluru (2024-2028). Aiming for a career in machine learning research. Hands-on experience in self-supervised representation learning, robustness evaluation of deep models, and applied full-stack AI systems. Builds ML systems end to end, with a record of shipped, award-winning projects.";
    } else if (cmd === 'experience') {
      response = "AI Engineering Intern | Infosys (June 2026 – Present)\n• SupportPilot Platform Development: Architected an autonomous AI support desk in Python/Flask to automate enterprise Tier-1 incident triage, classification, and knowledge-grounded resolution.\n• Multi-Agent RAG Architecture: Integrated semantic search with a collaborative 5-agent swarm (Diagnosis, Retrieval, Resolution, Validation, Escalation) to evaluate ticket certainty and generate cited, hallucination-free solutions.\n• Production ITSM Integrations: Implemented automated resolution dispatch via SMTP and integrated the Atlassian Jira REST API to deterministically escalate low-confidence (<70%) or P1 tickets.";
    } else if (cmd === 'projects') {
      response = "001. PhysioShift — Cross-Hardware Robust Learning for Physiological Signals (Team Project | In Progress)\n002. PhaseSAR-Net — Phase-Aware SAR Intelligence for Robust Scene Classification (Solo Research | In Progress)\n003. LakeGuard AI + AquaDrone Sentinel — Autonomous IoT Swarm & Anomaly Detection (4th/147 KSRSAC Award)";
    } else if (cmd === 'skills') {
      response = "Languages: Python, Java, C, C++, JavaScript, HTML\nML/AI: PyTorch, Self-Supervised Learning, Complex CNNs, Mechanistic Interpretability, Robustness Evaluation, Multi-Agent Swarms, RAG, LLMs, Edge AI, IoT\nWeb/Backend: React.js, Next.js, FastAPI, Supabase (PostgreSQL)\nCore CS: 250+ LeetCode DSA, OOP, DBMS, OS, Computer Networks\nTools: Git, GitHub, VS Code, JIRA, Figma";
    } else if (cmd === 'awards') {
      response = "🏆 4th place of 147 teams, KSRSAC State-Level Student Innovation Exhibition (Govt. of Karnataka), for LakeGuard AI; prize of Rs. 15,000.\n💻 250+ LeetCode problems solved with a consistent daily-practice habit across DSA topics.\n🚀 Active participant in multiple college hackathons across Bengaluru.";
    } else if (cmd === 'resume') {
      downloadResume();
      response = "Downloading verified resume (GOURAV_RESUME.pdf)...";
    } else if (cmd === 'contact') {
      response = "Email: amdggourav@mail.com | Phone: +91 93802 12915 | LinkedIn: /in/gourav-a-450148360 | GitHub: github.com/arisu2006";
    } else if (cmd === 'matrix') {
      response = "[MATRIX STREAM] Complex spectrum synchronized. PhaseSAR-Net weights calibrated. Zero-shot transfer operational.";
    } else if (cmd === 'clear') {
      setCliLogs([]);
      return;
    } else {
      response = `Unknown command: '${cmd}'. Type 'help' for valid commands.`;
    }

    setCliLogs((prev) => [...prev, `> ${cmd}`, response]);
  };

  const handleCliSubmit = (e) => {
    if (e.key === 'Enter') {
      executeCliCommand(cliInputVal);
      setCliInputVal('');
    }
  };

  return (
    <div>
      {/* Dynamic 3D WebGL / Canvas Background */}
      <ThreeBackground />

      {/* MAIN PORTFOLIO WRAPPER */}
      <div className="wrap">
        {/* FRONT PAGE HERO */}
        <section id="top" className="hero-front-page">
          <h1 className="hero-name-animated">A Gourav</h1>
          <div className="hero-sublinks">
            <a href="#contact" className="hero-sublink-item">Contact Me</a>
            <span className="hero-sublink-sep">|</span>
            <button onClick={downloadResume} className="hero-sublink-item btn-link">View Resume ↗</button>
          </div>
        </section>

        {/* 02 ABOUT (INTERACTIVE 3D KINETIC CARD WITH CLASSY TYPOGRAPHY & MOVING EFFECTS) */}
        <section id="about">
          <div className="section-title-wrap">
            <span className="section-big-num">02</span>
            <h2 className="section-heading">ABOUT</h2>
          </div>

          <div className="about-split-container">
            {/* LEFT INTERACTIVE 3D KINETIC CARD */}
            <div 
              className="about-interactive-card"
              onMouseMove={handleAboutMouseMove}
              onMouseEnter={() => { setIsAboutHovered(true); }}
              onMouseLeave={handleAboutMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${aboutTilt.y * -8}deg) rotateY(${aboutTilt.x * 10}deg)`,
                background: `radial-gradient(550px circle at ${aboutTilt.px}% ${aboutTilt.py}%, rgba(0, 212, 255, 0.14), rgba(6, 10, 18, 0.96) 65%)`
              }}
            >
              {/* Animated glowing moving border beam */}
              <div className="about-card-glow-beam" aria-hidden="true" />

              {/* TOP INDEX COUNTER */}
              <div className="about-card-top-bar">
                <span className="about-card-kicker">
                  {aboutTab === 'brief' && '// PERSONAL BRIEF'}
                  {aboutTab === 'edu' && '// ACADEMIC FOUNDATIONS'}
                  {aboutTab === 'stats' && '// SHIPPED MILESTONES'}
                  {aboutTab === 'quote' && '// PHILOSOPHY & VISION'}
                </span>
                <span className="about-card-counter">
                  {aboutTab === 'brief' && '01 / 04'}
                  {aboutTab === 'edu' && '02 / 04'}
                  {aboutTab === 'stats' && '03 / 04'}
                  {aboutTab === 'quote' && '04 / 04'}
                </span>
              </div>

              {/* TAB CONTENT AREA */}
              <div className="about-card-body" key={aboutTab}>
                {aboutTab === 'brief' && (
                  <div className="about-tab-pane about-pane-brief">
                    <p className="about-lead-statement">
                      "I build things, break things, and occasionally fix things that weren't broken in the first place. Somewhere between bad ideas and too much curiosity, good software tends to happen."
                    </p>
                  </div>
                )}

                {aboutTab === 'edu' && (
                  <div className="about-tab-pane about-pane-edu">
                    <div className="about-edu-header">
                      <div className="about-edu-degree-badge">
                        <GraduationCap size={15} color="var(--cyan)" />
                        <span>B.E. COMPUTER SCIENCE &amp; ENGINEERING</span>
                      </div>
                      <h3 className="about-edu-title">APS College of Engineering</h3>
                      <p className="about-edu-subtitle">Bengaluru, Karnataka · 2024 – 2028 (Expected)</p>
                    </div>

                    <div className="about-edu-coursework-section">
                      <div className="about-coursework-title">RELEVANT COURSEWORK:</div>
                      <div className="about-coursework-chips">
                        <span className="course-chip">Data Structures &amp; Algorithms (250+ solved)</span>
                        <span className="course-chip">Machine Learning &amp; Deep Learning</span>
                        <span className="course-chip">Object-Oriented Programming (OOP)</span>
                        <span className="course-chip">Database Management Systems (DBMS)</span>
                        <span className="course-chip">Operating Systems &amp; Computer Networks</span>
                      </div>
                    </div>
                  </div>
                )}

                {aboutTab === 'stats' && (
                  <div className="about-tab-pane about-pane-stats">
                    <div className="about-stats-grid">
                      <div className="about-stat-item stat-item-highlight">
                        <div className="stat-top-row">
                          <span className="about-stat-num">4th / 147</span>
                          <Award size={18} color="var(--amber)" />
                        </div>
                        <span className="about-stat-label"><strong>KSRSAC State Award</strong> (Govt. of Karnataka, ₹15,000 Prize for LakeGuard AI)</span>
                      </div>
                      <div className="about-stat-item">
                        <div className="stat-top-row">
                          <span className="about-stat-num">Infosys</span>
                          <Zap size={18} color="var(--cyan)" />
                        </div>
                        <span className="about-stat-label"><strong>AI Engineering Intern</strong> (SupportPilot: Python, Flask, RAG &amp; 5-Agent Swarm)</span>
                      </div>
                      <div className="about-stat-item">
                        <div className="stat-top-row">
                          <span className="about-stat-num">250+</span>
                          <Code2 size={18} color="var(--blue)" />
                        </div>
                        <span className="about-stat-label"><strong>LeetCode DSA Solved</strong> (Consistent daily-practice habit across topics)</span>
                      </div>
                      <div className="about-stat-item">
                        <div className="stat-top-row">
                          <span className="about-stat-num">Hackathons</span>
                          <Flame size={18} color="var(--emerald)" />
                        </div>
                        <span className="about-stat-label"><strong>Bengaluru Hackathons</strong> (Active participant across competitive collegiate builds)</span>
                      </div>
                    </div>
                  </div>
                )}

                {aboutTab === 'quote' && (
                  <div className="about-tab-pane about-pane-quote">
                    <div className="quote-icon-decor"><Quote size={32} /></div>
                    <blockquote className="about-philosophical-quote">
                      "A model that only works on pristine lab datasets isn't intelligent — it's fragile. The real engineering begins when the data gets corrupted."
                    </blockquote>
                    <div className="about-quote-meta" style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span className="about-quote-author-dot" />
                        <span className="about-quote-author-name">A GOURAV</span>
                        <span className="about-quote-author-role">· ML Research &amp; AI Systems</span>
                      </div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: '0.74rem', color: 'var(--ink-dim)' }}>
                        <strong style={{ color: 'var(--cyan)' }}>LANGUAGES:</strong> English, Kannada, Hindi, Japanese &nbsp;|&nbsp; <strong style={{ color: 'var(--emerald)' }}>INTERESTS:</strong> AI side projects, hackathons, travel, comics
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* BOTTOM 4 TAB NAVIGATION BUTTONS */}
              <div className="about-card-nav-row">
                <button
                  type="button"
                  className={`about-nav-btn ${aboutTab === 'brief' ? 'active' : ''}`}
                  onClick={() => { setAboutTab('brief'); }}
                >
                  01 BRIEF
                </button>
                <button
                  type="button"
                  className={`about-nav-btn ${aboutTab === 'edu' ? 'active' : ''}`}
                  onClick={() => { setAboutTab('edu'); }}
                >
                  02 EDU
                </button>
                <button
                  type="button"
                  className={`about-nav-btn ${aboutTab === 'stats' ? 'active' : ''}`}
                  onClick={() => { setAboutTab('stats'); }}
                >
                  03 STATS
                </button>
                <button
                  type="button"
                  className={`about-nav-btn ${aboutTab === 'quote' ? 'active' : ''}`}
                  onClick={() => { setAboutTab('quote'); }}
                >
                  04 QUOTE
                </button>
              </div>
            </div>

            {/* RIGHT PHOTO CARD WITH CORNER RETICLES */}
            <div className="about-photo-wrapper">
              <div className="photo-reticle reticle-tl">┌</div>
              <div className="photo-reticle reticle-tr">┐</div>
              <div className="photo-reticle reticle-bl">└</div>
              <div className="photo-reticle reticle-br">┘</div>
              <img src={ASSETS.aboutProfileImg} alt="A Gourav" className="about-photo-img" />
            </div>
          </div>
        </section>

        {/* 03 SKILLS (FULLWIDTH STREAMING MARQUEE) */}
        <section id="skills" className="skills-fullscreen-section">
          <div className="skills-header-wrap">
            <div className="section-title-wrap section-title-right">
              <span className="section-big-num">03</span>
              <h2 className="section-heading">SKILLS</h2>
            </div>
          </div>

          <div className="skills-marquee-fullwidth">
            {/* ROW 1 */}
            <div className="marquee-track track-left">
              {[
                'MongoDB', 'PostgreSQL', 'MySQL', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Python',
                'MongoDB', 'PostgreSQL', 'MySQL', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Python',
                'MongoDB', 'PostgreSQL', 'MySQL', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Python',
                'MongoDB', 'PostgreSQL', 'MySQL', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Python'
              ].map((s, idx) => (
                <div key={idx} className="marquee-skill-pill"><Cpu size={16} color="var(--cyan)" /> <span>{s}</span></div>
              ))}
            </div>
            {/* ROW 2 */}
            <div className="marquee-track track-right">
              {[
                'Tailwind CSS', 'Node.js', 'Angular', 'Django', 'FastAPI', 'React', 'Next.js', 'Express.js',
                'Tailwind CSS', 'Node.js', 'Angular', 'Django', 'FastAPI', 'React', 'Next.js', 'Express.js',
                'Tailwind CSS', 'Node.js', 'Angular', 'Django', 'FastAPI', 'React', 'Next.js', 'Express.js',
                'Tailwind CSS', 'Node.js', 'Angular', 'Django', 'FastAPI', 'React', 'Next.js', 'Express.js'
              ].map((s, idx) => (
                <div key={idx} className="marquee-skill-pill"><Layers size={16} color="var(--blue)" /> <span>{s}</span></div>
              ))}
            </div>
            {/* ROW 3 */}
            <div className="marquee-track track-left">
              {[
                'Gemini', 'ChromaDB', 'Vector Embeddings', 'PyTorch', 'LangChain', 'Ollama', 'Groq / VAPI',
                'Gemini', 'ChromaDB', 'Vector Embeddings', 'PyTorch', 'LangChain', 'Ollama', 'Groq / VAPI',
                'Gemini', 'ChromaDB', 'Vector Embeddings', 'PyTorch', 'LangChain', 'Ollama', 'Groq / VAPI',
                'Gemini', 'ChromaDB', 'Vector Embeddings', 'PyTorch', 'LangChain', 'Ollama', 'Groq / VAPI'
              ].map((s, idx) => (
                <div key={idx} className="marquee-skill-pill"><Brain size={16} color="var(--violet)" /> <span>{s}</span></div>
              ))}
            </div>
            {/* ROW 4 */}
            <div className="marquee-track track-right">
              {[
                'Postman', 'Supabase', 'AWS', 'Git', 'GitHub', 'Docker', 'ESP32', '3D Drone',
                'Postman', 'Supabase', 'AWS', 'Git', 'GitHub', 'Docker', 'ESP32', '3D Drone',
                'Postman', 'Supabase', 'AWS', 'Git', 'GitHub', 'Docker', 'ESP32', '3D Drone',
                'Postman', 'Supabase', 'AWS', 'Git', 'GitHub', 'Docker', 'ESP32', '3D Drone'
              ].map((s, idx) => (
                <div key={idx} className="marquee-skill-pill"><Radio size={16} color="var(--emerald)" /> <span>{s}</span></div>
              ))}
            </div>
          </div>
        </section>

        {/* 04 EXPERIENCE */}
        <section id="experience">
          <div className="section-title-wrap">
            <span className="section-big-num">04</span>
            <h2 className="section-heading">Experience</h2>
          </div>

          <div className="glass-panel">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <h3 style={{ fontSize: '1.4rem', color: '#fff' }}>AI Engineering Intern | Infosys <span style={{ fontSize: '0.95rem', color: 'var(--ink-dim)', fontWeight: 400 }}>| Bengaluru, India</span></h3>
              <span style={{ fontFamily: 'var(--mono)', fontSize: '0.85rem', color: 'var(--cyan)' }}>June 2026 – Present</span>
            </div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.84rem', color: 'var(--amber)', marginBottom: '1.2rem', fontWeight: 600 }}>Project: SupportPilot — Autonomous AI Support Desk &amp; Multi-Agent Resolution System</div>
            <ul style={{ color: 'var(--ink-dim)', lineHeight: '1.75', fontSize: '0.96rem', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li>
                <strong style={{ color: '#fff' }}>SupportPilot Platform Development:</strong> Architected an autonomous AI support desk in Python/Flask to automate enterprise Tier-1 incident triage, classification, and knowledge-grounded resolution.
              </li>
              <li>
                <strong style={{ color: '#fff' }}>Multi-Agent RAG Architecture:</strong> Integrated semantic search with a collaborative 5-agent swarm (Diagnosis, Retrieval, Resolution, Validation, Escalation) to evaluate ticket certainty and generate cited, hallucination-free solutions.
              </li>
              <li>
                <strong style={{ color: '#fff' }}>Production ITSM Integrations:</strong> Implemented automated resolution dispatch via SMTP and integrated the Atlassian Jira REST API to deterministically escalate low-confidence (&lt;70%) or P1 tickets.
              </li>
            </ul>
          </div>
        </section>

        {/* 05 WORKFLOW (INTERACTIVE SYSTEM ARCHITECTURE & PIPELINES) */}
        <section id="workflow" className="workflow-section">
          <div className="section-title-wrap">
            <span className="section-big-num">05</span>
            <h2 className="section-heading">WORKFLOW</h2>
          </div>
          <ProjectWorkflow />
        </section>

        {/* 06 WORK (WITH INTERACTIVE 3D PARALLAX CARDS) */}
        <section id="work">
          <div className="section-title-wrap">
            <span className="section-big-num">06</span>
            <h2 className="section-heading" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700 }}>Work</h2>
          </div>

          <div className="work-grid-container">
            {PROJECTS_DATA.map((project) => {
              const tilt = workTilts[project.id] || { x: 0, y: 0, px: 50, py: 50, isHovered: false };
              return (
                <div 
                  key={project.id} 
                  className={`work-card-large ${project.id === 'phasesar' ? 'work-card-full' : ''}`}
                  onClick={() => { setSelectedProject(project); }}
                  onMouseMove={(e) => handleWorkMouseMove(e, project.id)}
                  
                  onMouseLeave={() => handleWorkMouseLeave(project.id)}
                  role="button"
                  tabIndex={0}
                  style={{
                    transform: tilt.isHovered 
                      ? `perspective(1000px) rotateX(${tilt.y * -8}deg) rotateY(${tilt.x * 10}deg) translateY(-6px) scale(1.015)`
                      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)',
                    background: tilt.isHovered 
                      ? `radial-gradient(550px circle at ${tilt.px}% ${tilt.py}%, rgba(0, 212, 255, 0.16), rgba(8, 12, 20, 0.96) 60%)`
                      : 'rgba(10, 14, 22, 0.94)',
                    borderColor: tilt.isHovered ? 'rgba(0, 212, 255, 0.55)' : 'rgba(255, 255, 255, 0.1)',
                    boxShadow: tilt.isHovered 
                      ? '0 30px 60px rgba(0,0,0,0.85), 0 0 35px rgba(0, 212, 255, 0.25)' 
                      : '0 20px 45px rgba(0, 0, 0, 0.65)'
                  }}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedProject(project); } }}
                  title={`Click to view full project brief for ${project.title}`}
                >
                  <div className="work-orb-banner">
                    <div className={`work-orb ${project.orbClass}`} />
                    <div className="work-card-click-pill">
                      <Maximize2 size={12} />
                      <span>Interactive Brief ↗</span>
                    </div>
                  </div>
                  <div className="work-card-body">
                    <div className="work-badge">{project.badge}</div>
                    <p className="work-text">{project.shortDesc}</p>
                    <div className="work-tags-row">
                      {project.tags.slice(0, 4).map(t => <span key={t} className="work-tag-item">{t}</span>)}
                    </div>
                    <div className="work-footer">
                      <span className="work-num">{project.num}</span>
                      <span className="work-read-cta">
                        Read Brief <Sparkles size={13} style={{ marginLeft: '4px', verticalAlign: 'middle' }} />
                      </span>
                      <span className="work-status-badge">
                        <span className="work-status-dot" style={{ backgroundColor: project.color }} />
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 06 RESEARCH QUESTIONS */}
        <section id="questions">
          <div className="section-title-wrap">
            <span className="section-big-num">07</span>
            <h2 className="section-heading">Research Questions</h2>
          </div>

          <div className="research-questions-grid">
            <div className="rq-card" >
              <div className="rq-tag">RQ-001 · PhysioShift</div>
              <p className="rq-quote">"Can a physiological model learn the signal without learning the device?"</p>
            </div>

            <div className="rq-card" >
              <div className="rq-tag">RQ-002 · Phase</div>
              <p className="rq-quote">"Can a SAR model preserve phase information—and still recognize a scene when the signal is corrupted?"</p>
            </div>

            <div className="rq-card" >
              <div className="rq-tag">RQ-003 · Magnitude</div>
              <p className="rq-quote">"What does a model lose when it sees only SAR magnitude, but not phase?"</p>
            </div>

            <div className="rq-card" >
              <div className="rq-tag">RQ-004 · Physics</div>
              <p className="rq-quote">"Can physics-aware constraints make SAR predictions more reliable than accuracy alone?"</p>
            </div>
          </div>
        </section>

        {/* 07 SYSTEM LOG */}
        <section id="log">
          <div className="section-title-wrap">
            <span className="section-big-num">07</span>
            <h2 className="section-heading">System Log</h2>
          </div>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div className="glass-panel" style={{ borderLeft: '3px solid var(--cyan)' }}>
              <span style={{ fontFamily: 'var(--mono)', color: 'var(--cyan)', fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem' }}>JUNE 2026 — PRESENT</span>
              <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.3rem' }}>AI Engineering Intern · Infosys <span style={{ fontSize: '0.9rem', color: 'var(--ink-dim)', fontWeight: 400 }}>| Bengaluru, India</span></h3>
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', color: 'var(--amber)', marginBottom: '0.6rem' }}>Project: SupportPilot — Autonomous AI Support Desk &amp; Multi-Agent Resolution System</div>
              <p style={{ color: 'var(--ink-dim)', lineHeight: '1.65', fontSize: '0.95rem' }}>
                Architected an autonomous AI support desk in Python/Flask to automate enterprise Tier-1 incident triage, classification, and knowledge-grounded resolution. Integrated semantic search with a collaborative 5-agent swarm (Diagnosis, Retrieval, Resolution, Validation, Escalation) for verified, cited solutions; implemented automated SMTP resolution dispatch and Atlassian Jira REST API deterministic escalation (&lt;70% confidence or P1 tickets).
              </p>
            </div>

            <div className="glass-panel" style={{ borderLeft: '3px solid var(--amber)' }}>
              <span style={{ fontFamily: 'var(--mono)', color: 'var(--amber)', fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem' }}>APRIL 2026</span>
              <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.6rem' }}>4th Place of 147 Teams · KSRSAC State Award (Govt. of Karnataka, ₹15,000 Prize)</h3>
              <p style={{ color: 'var(--ink-dim)', lineHeight: '1.65', fontSize: '0.98rem' }}>
                Presented LakeGuard AI + AquaDrone Sentinel water-quality anomaly detection IoT swarm at the Karnataka State Remote Sensing Applications Centre Student Innovation Exhibition, winning 4th place out of 147 state teams.
              </p>
            </div>

            <div className="glass-panel" style={{ borderLeft: '3px solid var(--emerald)' }}>
              <span style={{ fontFamily: 'var(--mono)', color: 'var(--emerald)', fontSize: '0.8rem', display: 'block', marginBottom: '0.4rem' }}>OCTOBER 2026</span>
              <h3 style={{ fontSize: '1.35rem', color: '#fff', marginBottom: '0.6rem' }}>GenAI Powered Data Analytics · Tata Group (Forage)</h3>
              <p style={{ color: 'var(--ink-dim)', lineHeight: '1.65', fontSize: '0.98rem' }}>
                Completed enterprise simulation on generative AI modeling, exploratory data analysis, business metric interpretation, and executive AI storytelling.
              </p>
            </div>
          </div>
        </section>

        {/* 08 CERTIFICATIONS */}
        <section id="certifications">
          <div className="section-title-wrap">
            <span className="section-big-num">09</span>
            <h2 className="section-heading">Certifications</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            <div className="glass-panel">
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--cyan)' }}>ORACLE · ISSUED JAN 2026</div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', margin: '0.4rem 0' }}>Oracle AI Foundations Associate</h3>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--ink-dimmer)' }}>Machine Learning, Generative AI &amp; Deep Learning Core</p>
            </div>

            <div className="glass-panel">
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--emerald)' }}>TATA GROUP · ISSUED OCT 2026</div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', margin: '0.4rem 0' }}>GenAI Powered Data Analytics</h3>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--ink-dimmer)' }}>Tata Group (Forage) Job Simulation</p>
            </div>

            <div className="glass-panel">
              <div style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--amber)' }}>ALGORITHMS &amp; DSA</div>
              <h3 style={{ fontSize: '1.2rem', color: '#fff', margin: '0.4rem 0' }}>250+ LeetCode Solved</h3>
              <p style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--ink-dimmer)' }}>Sustained daily-practice streak across DSA topics</p>
            </div>
          </div>
        </section>

        {/* 09 CONTACT (WITH RESUME PDF DOWNLOAD & SINGLE-LINE CALLIGRAPHY FOOTER NAME) */}
        <section id="contact" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
          <div className="section-title-wrap">
            <span className="section-big-num">09</span>
            <h2 className="section-heading">Contact</h2>
          </div>

          <div className="glass-panel" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '4rem' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.4rem' }}>Download Verified Resume</h3>
              <p style={{ color: 'var(--ink-dim)', maxWidth: '550px' }}>A one-page snapshot of my education, projects, and skills — updated as new things ship.</p>
            </div>
            <button onClick={() => { downloadResume(); }} style={{
              background: 'linear-gradient(135deg, var(--cyan), #0088ff)',
              color: '#000',
              fontFamily: 'var(--mono)',
              fontWeight: 700,
              fontSize: '0.9rem',
              padding: '0.85rem 1.8rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 0 25px rgba(0, 212, 255, 0.4)'
            }}>
              <Download size={16} /> <span>Download Resume PDF</span>
            </button>
          </div>

          <div className="footer-end-container">
            <div className="footer-columns-grid">
              <div className="footer-col">
                <span className="footer-col-title">NAVIGATION</span>
                <a href="#top" className="footer-nav-link" onClick={() => playSound('tab', soundEnabled)}>HOME</a>
                <a href="#about" className="footer-nav-link" onClick={() => playSound('tab', soundEnabled)}>ABOUT</a>
                <a href="#skills" className="footer-nav-link" onClick={() => playSound('tab', soundEnabled)}>SKILLS</a>
                <a href="#work" className="footer-nav-link" onClick={() => playSound('tab', soundEnabled)}>PROJECTS</a>
                <a href="#experience" className="footer-nav-link" onClick={() => playSound('tab', soundEnabled)}>EXPERIENCE</a>
            <a href="#workflow" className="footer-nav-link" onClick={() => playSound('tab', soundEnabled)}>WORKFLOW</a>
                <a href="#contact" className="footer-nav-link" onClick={() => playSound('tab', soundEnabled)}>CONTACT</a>
              </div>

              <div className="footer-col">
                <span className="footer-col-title">SOCIAL &amp; CONTACT</span>
                <a href="https://github.com/arisu2006" target="_blank" rel="noreferrer" className="footer-nav-link">GITHUB (arisu2006)</a>
                <a href="https://linkedin.com/in/gourav-a-450148360" target="_blank" rel="noreferrer" className="footer-nav-link">LINKEDIN</a>
                <a href="mailto:amdggourav@mail.com" className="footer-nav-link">amdggourav@mail.com</a>
                <span className="footer-nav-link" style={{ cursor: 'default', color: 'var(--ink-dim)' }}>TEL: +91 93802 12915</span>
              </div>

              <div className="footer-col">
                <span className="footer-col-title">LET'S CONNECT ✦</span>
                <p className="footer-connect-desc">Always open to discussing machine learning research, internships, and high-impact systems engineering.</p>
                <a href="mailto:amdggourav@mail.com" className="footer-say-hello-btn" onClick={() => playSound('click', soundEnabled)}>SAY HELLO</a>
              </div>
            </div>

            {/* GIANT CALLIGRAPHY SINGLE-LINE NAME */}
            <div className="footer-giant-single-wrapper">
              <h1 className="giant-calligraphy-name">A Gourav</h1>
            </div>

            <div className="footer-bottom-bar">
              <div className="footer-line" />
              <span className="signature-tag">A Gourav</span>
              <div className="footer-line" />
            </div>
          </div>
        </section>
      </div>

      {/* INTERACTIVE CYBER CLI TERMINAL MODAL */}
      {cliOpen && (
        <div 
          className="cli-modal-backdrop" 
          onClick={() => setCliOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cli-modal-title"
        >
          <div className="cli-window" onClick={(e) => e.stopPropagation()}>
            <div className="cli-window-topbar">
              <div className="cli-traffic-dots">
                <span className="dot dot-red" onClick={() => setCliOpen(false)} title="Close Terminal" />
                <span className="dot dot-yellow" title="Minimize" />
                <span className="dot dot-green" title="Maximize" />
              </div>
              <div id="cli-modal-title" className="cli-window-title">gourav@core-system: ~ (bash · interactive v2.4)</div>
              <button className="cli-close-btn" onClick={() => setCliOpen(false)} aria-label="Close terminal">
                <X size={15} />
              </button>
            </div>

            <div className="cli-quick-commands-bar">
              <span className="cli-quick-label">QUICK CMDS:</span>
              {['help', 'bio', 'experience', 'projects', 'skills', 'awards', 'matrix', 'resume', 'clear'].map((c) => (
                <button key={c} className="cli-chip-btn" onClick={() => executeCliCommand(c)}>{c}</button>
              ))}
            </div>

            <div className="cli-body" ref={cliBodyRef}>
              {cliLogs.map((log, idx) => (
                <div 
                  key={idx} 
                  className={`cli-log-line ${log.startsWith('>') ? 'cli-input-echo' : ''} ${log.startsWith('[MATRIX]') ? 'cli-matrix-line' : ''}`}
                  style={{ whiteSpace: 'pre-wrap' }}
                >
                  {log}
                </div>
              ))}
              <div className="cli-input-row">
                <span className="cli-prompt">gourav@core:~$</span>
                <input
                  ref={cliInputRef}
                  type="text"
                  className="cli-real-input"
                  value={cliInputVal}
                  onChange={(e) => setCliInputVal(e.target.value)}
                  onKeyDown={handleCliSubmit}
                  placeholder="type command (e.g. 'experience', 'projects', 'matrix')..."
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* INTERACTIVE PROJECT BRIEF MODAL */}
      {selectedProject && (
        <div 
          className="project-modal-backdrop" 
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <div 
            className="project-modal-container" 
            onClick={(e) => e.stopPropagation()}
            style={{ '--project-accent': selectedProject.color }}
          >
            {/* MODAL HEADER */}
            <div className="project-modal-header">
              <div className="project-modal-header-info">
                <div className="project-modal-top-meta">
                  <span className="project-modal-num">{selectedProject.num}</span>
                  <span className="project-modal-badge">{selectedProject.badge}</span>
                  <span className="project-modal-cat">{selectedProject.category}</span>
                </div>
                <h3 id="modal-project-title" className="project-modal-title">{selectedProject.title}</h3>
                <p className="project-modal-subtitle">{selectedProject.subtitle}</p>
              </div>
              <button 
                className="project-modal-close-btn" 
                onClick={() => setSelectedProject(null)}
                aria-label="Close project brief"
              >
                <X size={20} />
              </button>
            </div>

            {/* MODAL SCROLLABLE BODY */}
            <div className="project-modal-body">
              {/* RESEARCH / PROJECT TAGLINE QUOTE */}
              <div className="project-modal-tagline-box">
                <p className="project-modal-tagline">"{selectedProject.tagline}"</p>
              </div>

              {/* PROBLEM STATEMENT */}
              <div className="project-modal-section">
                <div className="project-modal-section-title">
                  <Activity size={15} color="var(--project-accent)" />
                  <span>The Engineering Problem</span>
                </div>
                <p className="project-modal-text">{selectedProject.problem}</p>
              </div>

              {/* CORE INNOVATIONS */}
              <div className="project-modal-section">
                <div className="project-modal-section-title">
                  <Sparkles size={15} color="var(--project-accent)" />
                  <span>Key Innovations &amp; Methodology</span>
                </div>
                <div className="project-modal-innovations-list">
                  {selectedProject.innovations.map((item, idx) => (
                    <div key={idx} className="project-modal-innovation-item">
                      <div className="innovation-header">
                        <CheckCircle2 size={16} color="var(--project-accent)" />
                        <h4 className="innovation-title">{item.title}</h4>
                      </div>
                      <p className="innovation-desc">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SYSTEM ARCHITECTURE PIPELINE */}
              <div className="project-modal-section">
                <div className="project-modal-section-title">
                  <Layers size={15} color="var(--project-accent)" />
                  <span>Architecture &amp; Pipeline</span>
                </div>
                <div className="project-modal-arch-box">
                  <code>{selectedProject.architecture}</code>
                </div>
              </div>

              {/* KEY METRICS & IMPACT GRID */}
              <div className="project-modal-section">
                <div className="project-modal-section-title">
                  <Award size={15} color="var(--project-accent)" />
                  <span>Impact &amp; Key Results</span>
                </div>
                <div className="project-modal-metrics-grid">
                  {selectedProject.metrics.map((m, idx) => (
                    <div key={idx} className="project-modal-metric-card">
                      <div className="metric-value">{m.value}</div>
                      <div className="metric-label">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* TECH STACK TAGS */}
              <div className="project-modal-section">
                <div className="project-modal-section-title">
                  <Cpu size={15} color="var(--project-accent)" />
                  <span>Technology &amp; Stack</span>
                </div>
                <div className="project-modal-tags-row">
                  {selectedProject.tags.map(t => (
                    <span key={t} className="project-modal-tag-pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* MODAL FOOTER */}
            <div className="project-modal-footer">
              <div className="project-modal-footer-status">
                <span className="status-dot" style={{ backgroundColor: selectedProject.color }} />
                <span>{selectedProject.status}</span>
              </div>
              <button 
                className="project-modal-footer-close-btn"
                onClick={() => setSelectedProject(null)}
              >
                Close Brief
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
