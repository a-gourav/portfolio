import React, { useState, useEffect, useRef } from 'react';
import { WORKFLOWS_DATA } from './workflowData';
import { 
  Play, RotateCcw, CheckCircle2, ArrowRight, Layers, Activity, 
  Terminal, Sparkles, ShieldCheck, Send, Database, Satellite, 
  Radio, Cpu, Lightbulb, ChevronRight, Zap
} from 'lucide-react';

export default function ProjectWorkflow() {
  const [activeProjectId, setActiveProjectId] = useState('supportpilot');
  const [selectedStageIdx, setSelectedStageIdx] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simStep, setSimStep] = useState(0);
  const timerRef = useRef(null);

  const currentWorkflow = WORKFLOWS_DATA.find(w => w.id === activeProjectId) || WORKFLOWS_DATA[0];
  const activeStage = currentWorkflow.stages[selectedStageIdx] || currentWorkflow.stages[0];

  // Reset stage selection and simulation when project switches
  const handleSelectProject = (id) => {
    setActiveProjectId(id);
    setSelectedStageIdx(0);
    setIsSimulating(false);
    setSimStep(0);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  // Start / Stop simulation
  const toggleSimulation = () => {
    if (isSimulating) {
      setIsSimulating(false);
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      setIsSimulating(true);
      setSimStep(1);
      setSelectedStageIdx(0);
    }
  };

  const resetSimulation = () => {
    setIsSimulating(false);
    setSimStep(0);
    setSelectedStageIdx(0);
    if (timerRef.current) clearInterval(timerRef.current);
  };

  // Run simulation timer
  useEffect(() => {
    if (!isSimulating) return;

    timerRef.current = setInterval(() => {
      setSimStep((prev) => {
        if (prev >= currentWorkflow.stages.length) {
          setIsSimulating(false);
          return prev;
        }
        const next = prev + 1;
        setSelectedStageIdx(next - 1);
        return next;
      });
    }, 2400);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isSimulating, currentWorkflow.stages.length]);

  return (
    <div className="workflow-root" style={{ '--wf-accent': currentWorkflow.color, '--wf-glow': currentWorkflow.colorGlow }}>
      {/* 1. PROJECT SELECTOR TABS */}
      <div className="workflow-project-tabs" role="tablist" aria-label="Select Project Workflow">
        {WORKFLOWS_DATA.map((wf) => {
          const isActive = wf.id === activeProjectId;
          return (
            <button
              key={wf.id}
              role="tab"
              aria-selected={isActive}
              className={`wf-project-tab-btn ${isActive ? 'active' : ''}`}
              onClick={() => handleSelectProject(wf.id)}
            >
              <span className="wf-tab-num">{wf.num}</span>
              <span className="wf-tab-title">{wf.badge}</span>
              {isActive && <span className="wf-tab-active-dot" />}
            </button>
          );
        })}
      </div>

      {/* 2. PROJECT HERO & IN SIMPLE TERMS BANNER */}
      <div className="wf-hero-card">
        <div className="wf-hero-header">
          <div className="wf-hero-kicker-row">
            <span className="wf-status-pill">{currentWorkflow.status}</span>
            <span className="wf-category-label">{currentWorkflow.category}</span>
          </div>
          <h3 className="wf-project-title">{currentWorkflow.title}</h3>
          <p className="wf-project-subtitle">{currentWorkflow.subtitle}</p>
        </div>

        {/* 2-COLUMN EXPLAINER GRID: SUMMARY & ANALOGY */}
        <div className="wf-explainer-grid">
          <div className="wf-explainer-box wf-summary-box">
            <div className="wf-box-label">
              <Sparkles size={14} className="wf-icon-accent" />
              <span>IN SIMPLE TERMS (WHAT IT DOES)</span>
            </div>
            <p className="wf-box-text">{currentWorkflow.simpleSummary}</p>
            <div className="wf-impact-tag">
              <Zap size={13} className="wf-icon-accent" />
              <span><strong>IMPACT:</strong> {currentWorkflow.realWorldImpact}</span>
            </div>
          </div>

          <div className="wf-explainer-box wf-analogy-box">
            <div className="wf-box-label">
              <Lightbulb size={14} className="wf-icon-amber" />
              <span>THE EVERYDAY ANALOGY</span>
            </div>
            <blockquote className="wf-analogy-quote">
              "{currentWorkflow.simpleAnalogy}"
            </blockquote>
            <div className="wf-live-sim-cta">
              <button
                type="button"
                className={`wf-sim-btn ${isSimulating ? 'simulating' : ''}`}
                onClick={toggleSimulation}
              >
                {isSimulating ? (
                  <>
                    <Activity size={14} className="wf-spin" />
                    <span>Simulating Step {simStep}/5...</span>
                  </>
                ) : (
                  <>
                    <Play size={14} />
                    <span>Run Interactive Simulation</span>
                  </>
                )}
              </button>
              {simStep > 0 && (
                <button
                  type="button"
                  className="wf-sim-reset-btn"
                  onClick={resetSimulation}
                  title="Reset Simulation"
                >
                  <RotateCcw size={13} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 3. INTERACTIVE VISUAL PIPELINE FLOWCHART */}
      <div className="wf-pipeline-container">
        <div className="wf-pipeline-header">
          <div className="wf-pipeline-label">
            <Layers size={15} className="wf-icon-accent" />
            <span>INTERACTIVE SYSTEM PIPELINE (CLICK ANY STAGE TO INSPECT)</span>
          </div>
          <div className="wf-step-counter">
            STAGE 0{selectedStageIdx + 1} OF 0{currentWorkflow.stages.length}
          </div>
        </div>

        {/* CONNECTED HORIZONTAL NODE STAGES */}
        <div className="wf-nodes-track">
          {currentWorkflow.stages.map((stage, idx) => {
            const isSelected = idx === selectedStageIdx;
            const isPassedSim = isSimulating && simStep > idx + 1;
            const isCurrentSim = isSimulating && simStep === idx + 1;

            return (
              <React.Fragment key={stage.id}>
                <div
                  className={`wf-stage-node ${isSelected ? 'selected' : ''} ${isCurrentSim ? 'sim-active' : ''} ${isPassedSim ? 'sim-passed' : ''}`}
                  onClick={() => {
                    setSelectedStageIdx(idx);
                    if (isSimulating) setIsSimulating(false);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedStageIdx(idx);
                    }
                  }}
                >
                  <div className="wf-node-top">
                    <span className="wf-node-num">{stage.num}</span>
                    <span className="wf-node-badge">{stage.badge}</span>
                  </div>
                  <div className="wf-node-title">{stage.name}</div>
                  <div className="wf-node-role">{stage.shortRole}</div>
                  {isSelected && <div className="wf-node-active-beam" />}
                </div>

                {idx < currentWorkflow.stages.length - 1 && (
                  <div className={`wf-node-connector ${isPassedSim || (isCurrentSim && idx < simStep) ? 'active-flow' : ''}`}>
                    <div className="wf-connector-line" />
                    <div className="wf-connector-arrow">
                      <ChevronRight size={14} />
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* 4. ACTIVE STAGE INSPECTOR CARD */}
      <div className="wf-inspector-card">
        <div className="wf-inspector-header">
          <div className="wf-inspector-title-row">
            <div className="wf-inspector-num-badge">STAGE {activeStage.num}</div>
            <h4 className="wf-inspector-title">{activeStage.name}</h4>
          </div>
          <span className="wf-inspector-tech-badge">{activeStage.badge}</span>
        </div>

        <div className="wf-inspector-body">
          {/* IN SIMPLE TERMS STATEMENT */}
          <div className="wf-inspector-section">
            <div className="wf-section-label">
              <Lightbulb size={14} className="wf-icon-amber" />
              <span>WHAT HAPPENS HERE (IN SIMPLE WORDS):</span>
            </div>
            <p className="wf-inspector-simple-text">{activeStage.simpleExplanation}</p>
          </div>

          {/* INPUT / OUTPUT DUAL PANELS */}
          <div className="wf-io-grid">
            <div className="wf-io-box wf-io-input">
              <span className="wf-io-label">INPUT</span>
              <p className="wf-io-value">{activeStage.input}</p>
            </div>
            <div className="wf-io-arrow">
              <ArrowRight size={16} />
            </div>
            <div className="wf-io-box wf-io-output">
              <span className="wf-io-label">OUTPUT</span>
              <p className="wf-io-value">{activeStage.output}</p>
            </div>
          </div>

          {/* UNDER THE HOOD TECH SPECS */}
          <div className="wf-inspector-tech-row">
            <span className="wf-tech-label">UNDER THE HOOD:</span>
            <code className="wf-tech-code">{activeStage.techDetails}</code>
          </div>
        </div>
      </div>

      {/* 5. LIVE SIMULATION TRACE TERMINAL */}
      {(isSimulating || simStep > 0) && (
        <div className="wf-sim-terminal">
          <div className="wf-terminal-header">
            <div className="wf-terminal-dots">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
            </div>
            <div className="wf-terminal-title">
              <Terminal size={13} />
              <span>SIMULATION TRACE // {currentWorkflow.simulation.ticketId}</span>
            </div>
            <span className="wf-terminal-live-badge">LIVE TRACE</span>
          </div>
          <div className="wf-terminal-body">
            <div className="wf-terminal-input-prompt">
              <span className="wf-prompt-sym">$</span>
              <span className="wf-prompt-text">
                INGESTING: "{currentWorkflow.simulation.inputDesc}"
              </span>
            </div>
            <div className="wf-terminal-logs">
              {currentWorkflow.simulation.steps.slice(0, simStep).map((step, sIdx) => (
                <div key={sIdx} className="wf-log-line">
                  <span className="wf-log-step">[STAGE 0{step.stageNum}]</span>
                  <span className="wf-log-name">{step.stageName}:</span>
                  <span className="wf-log-action">{step.action}</span>
                  <span className="wf-log-status">{step.status}</span>
                </div>
              ))}
            </div>
            {isSimulating && simStep < currentWorkflow.stages.length && (
              <div className="wf-terminal-cursor-line">
                <span className="wf-prompt-sym">&gt;</span>
                <span className="wf-cursor-text">Executing Stage 0{simStep + 1}...</span>
                <span className="wf-cursor-blink">█</span>
              </div>
            )}
            {simStep >= currentWorkflow.stages.length && (
              <div className="wf-terminal-complete-line">
                <CheckCircle2 size={14} color="#00ff88" />
                <span>End-to-End Pipeline Completed Successfully. Ready for next transaction.</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
