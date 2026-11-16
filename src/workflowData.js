export const WORKFLOWS_DATA = [
  {
    id: 'supportpilot',
    num: '01',
    badge: 'SUPPORTPILOT · INFOSYS',
    title: 'SupportPilot Autonomous AI Support Desk',
    subtitle: 'End-to-End Incident Triage, 5-Agent RAG Swarm & Deterministic ITSM Routing',
    category: 'Autonomous Multi-Agent AI · ITSM Automation · Enterprise RAG',
    status: 'DEPLOYED · INFOSYS AI INTERNSHIP',
    color: '#00d4ff',
    colorGlow: 'rgba(0, 212, 255, 0.4)',
    simpleSummary: 'An autonomous enterprise IT service desk that ingests support tickets, uses 5 specialized AI agents to diagnose and retrieve verified solutions from company knowledge bases, and automatically resolves them via email or escalates edge-cases straight to Jira engineers.',
    simpleAnalogy: 'Like an emergency room triage nurse who instantly categorizes issues, backed by a consultation team of 5 specialized AI doctors who inspect medical manuals to solve the case in seconds.',
    realWorldImpact: 'Cuts Mean Time to Resolution (MTTR) by ~68% with instant, verified resolution for 75%+ routine enterprise IT tickets.',
    simulation: {
      ticketId: 'INC-7402',
      inputDesc: 'Employee cannot establish VPN tunnel to Bengaluru Gateway after macOS update; getting TLS handshake timeout error.',
      steps: [
        {
          stageNum: '01',
          stageName: 'Ingestion & Triage',
          action: 'Parsed raw ticket body; vectorized via TF-IDF. Logistic regression model classified as [Network & Security Domain] with priority [P2 - High].',
          status: 'SUCCESS (Confidence: 94.6%)'
        },
        {
          stageNum: '02',
          stageName: '5-Agent Swarm & RAG',
          action: 'Diagnosis Agent isolated TLS 1.3 certificate renegotiation failure. Retrieval Agent pulled KB-4401 via Cosine Similarity. Resolution Agent generated step-by-step terminal fix.',
          status: '5/5 AGENTS ACTIVE'
        },
        {
          stageNum: '03',
          stageName: 'Confidence Decision Engine',
          action: 'Validation Agent checked source grounding. Calculated weighted confidence score: 88.2% (Threshold requirement: ≥ 70%).',
          status: 'THRESHOLD PASSED (88.2% ≥ 70%)'
        },
        {
          stageNum: '04',
          stageName: 'Automated ITSM Dispatch',
          action: 'Triggered SMTP dispatch: Sent verified markdown troubleshooting guide with cited KB sources directly to employee inbox. No human queue wait required.',
          status: 'DISPATCHED VIA SMTP'
        },
        {
          stageNum: '05',
          stageName: 'Telemetry & Admin Dashboard',
          action: 'Logged resolution telemetry: MTTR of 3.4 seconds recorded. Real-time Chart.js operational KPIs updated under secure JWT authentication.',
          status: 'METRICS RECORDED'
        }
      ]
    },
    stages: [
      {
        id: 'triage',
        num: '01',
        name: 'Ticket Ingestion & Triage',
        shortRole: 'Classification & Priority',
        simpleExplanation: 'Reads incoming employee tickets, automatically categorizes them into 1 of 5 domains (Network, Hardware, Software, Access, Billing), and assigns emergency priority (P1–P4).',
        techDetails: 'Python · Flask · TF-IDF Vectorization · Multiclass Logistic Regression · 92%+ Accuracy',
        input: 'Raw incoming incident text & user metadata',
        output: 'Standardized Incident Object + Domain Category + Dynamic P1–P4 Priority',
        badge: '92%+ ACCURACY'
      },
      {
        id: 'rag-swarm',
        num: '02',
        name: '5-Agent Swarm & RAG',
        shortRole: 'Multi-Agent Collaboration',
        simpleExplanation: 'Five specialized AI agents collaborate: Diagnosis extracts root cause; Retrieval searches company knowledge bases; Resolution writes the fix; Validation fact-checks citations; Escalation handles edge-cases.',
        techDetails: 'Cosine Similarity Semantic Search · 5-Agent Collaborative Swarm · Enterprise KB Grounding',
        input: 'Categorized incident ticket + Enterprise Documentation Base',
        output: 'Synthesized step-by-step troubleshooting guide with verified source citations',
        badge: '5 AGENTS SWARM'
      },
      {
        id: 'confidence',
        num: '03',
        name: 'Confidence Decision Engine',
        shortRole: 'Hallucination & Safety Gate',
        simpleExplanation: 'Evaluates if the AI swarm is strictly confident in the proposed fix. Only answers meeting the ≥70% certainty threshold pass to automatic delivery.',
        techDetails: 'Weighted Confidence Formula · Safety Threshold (≥70%) · Deterministic Routing Logic',
        input: 'Drafted resolution guide + agent consensus ratings',
        output: 'Binary decision branch: Automated Delivery (≥70%) OR Jira Escalation (<70% or P1)',
        badge: '≥70% THRESHOLD'
      },
      {
        id: 'itsm-routing',
        num: '04',
        name: 'ITSM Delivery & Escalation',
        shortRole: 'Automated Action Dispatch',
        simpleExplanation: 'Delivers high-confidence resolutions straight to employee email within seconds. For critical P1 incidents or ambiguous cases, immediately opens a structured ticket in Jira for human engineers.',
        techDetails: 'Automated SMTP Email Dispatch · Atlassian Jira REST API Integration · Priority Webhooks',
        input: 'Validated resolution payload OR escalation payload',
        output: 'Immediate email dispatch to employee OR new Jira issue assigned to Tier-2 engineers',
        badge: 'ZERO HUMAN WAIT'
      },
      {
        id: 'telemetry',
        num: '05',
        name: 'Live Telemetry & Dashboard',
        shortRole: 'Executive KPI Tracking',
        simpleExplanation: 'Provides IT managers with a real-time command dashboard monitoring 9 key metrics including Mean Time to Resolution (MTTR), resolution rate, and customer satisfaction (CSAT).',
        techDetails: 'Secure JWT Authentication · Real-Time Chart.js Telemetry · 9 Operational Enterprise KPIs',
        input: 'Streaming system audit logs & user feedback signals',
        output: 'Real-time charts, SLA compliance gauges, and incident health analytics',
        badge: '9 LIVE KPIS'
      }
    ]
  },
  {
    id: 'lakeguard',
    num: '02',
    badge: 'LAKEGUARD AI · STATE AWARD',
    title: 'LakeGuard AI + AquaDrone Sentinel',
    subtitle: 'Autonomous Surface Drone & Satellite SAR Waterbody Intelligence',
    category: 'IoT Robotics · Remote Sensing · Edge Machine Learning',
    status: 'AWARDED · 4TH / 147 STATEWIDE (KSRSAC)',
    color: '#38bdf8',
    colorGlow: 'rgba(56, 189, 248, 0.4)',
    simpleSummary: 'A multi-tier water health monitoring system that spots lake pollution and algal blooms from orbit using satellite radar, then dispatches autonomous solar-powered surface drones to sample water chemistry and alert municipal authorities.',
    simpleAnalogy: 'Like having an eye in space to spot dirty water across the entire state, paired with autonomous floating robot boats that swim directly to the spot to test water quality.',
    realWorldImpact: 'Won 4th Prize statewide among 147 teams from the Government of Karnataka (KSRSAC), providing early warning for urban lake eutrophication.',
    simulation: {
      ticketId: 'AQUA-ZONE-03',
      inputDesc: 'Sentinel-1 SAR detected backscatter anomaly indicating sudden organic hyacinth bloom in Bellandur Lake sector B.',
      steps: [
        {
          stageNum: '01',
          stageName: 'Satellite SAR Scanning',
          action: 'Acquired Sentinel-1 C-band Synthetic Aperture Radar. Detected 18% reduction in specular water reflection, flagging surface weed growth.',
          status: 'RADAR ANOMALY FLAGGED'
        },
        {
          stageNum: '02',
          stageName: 'AquaDrone Autonomous Dispatch',
          action: 'Sent GPS waypoints to solar-powered AquaDrone Sentinel. Drone navigated autonomously to waypoint coordinates 12.9352° N, 77.6712° E.',
          status: 'WAYPOINT ENGAGED'
        },
        {
          stageNum: '03',
          stageName: 'Edge Telemetry Stream',
          action: 'Onboard multi-probe sensor sampled pH (8.9), Dissolved Oxygen (1.4 mg/L), and Turbidity. Streamed telemetry over cellular MQTT to FastAPI broker.',
          status: 'MQTT PACKET INGESTED'
        },
        {
          stageNum: '04',
          stageName: 'Anomaly & Trend Scoring',
          action: 'TimescaleDB ML pipeline evaluated hypoxic conditions (DO < 2.0 mg/L). Eutrophication risk scored at 93.4% critical severity.',
          status: 'CRITICAL HYPOXIA DETECTED'
        },
        {
          stageNum: '05',
          stageName: 'WebGIS Authority Alerts',
          action: 'Plotted live geo-heatmap on React WebGIS dashboard and dispatched automated Twilio SMS alert to municipal environmental engineers.',
          status: 'MUNICIPALITY ALERTED'
        }
      ]
    },
    stages: [
      {
        id: 'satellite-ingest',
        num: '01',
        name: 'Satellite SAR Acquisition',
        shortRole: 'Orbital Surface Monitoring',
        simpleExplanation: 'Pulls cloud-penetrating radar scans from Sentinel-1 satellites to detect water surface contamination, weed cover, and waterbody shrinkage across entire districts.',
        techDetails: 'Sentinel-1 C-Band SAR · Google Earth Engine API · Backscatter Thresholding',
        input: 'Level-1 GRD Synthetic Aperture Radar imagery',
        output: 'Cloud-free water surface backscatter map with anomaly bounding boxes',
        badge: 'ALL-WEATHER RADAR'
      },
      {
        id: 'drone-dispatch',
        num: '02',
        name: 'AquaDrone Autonomous Patrol',
        shortRole: 'Robotic Surface Sampling',
        simpleExplanation: 'Solar-powered autonomous surface robotic boats receive GPS target coordinates and cruise directly to affected zones to collect real-time water samples.',
        techDetails: 'ESP32 Dual-Core Microcontroller · Neo-6M GPS Waypoint Guidance · Differential Thrusters',
        input: 'GPS target waypoints from satellite anomaly detector',
        output: 'Physical surface navigation and in-situ sensor readings',
        badge: 'SOLAR AUTONOMOUS'
      },
      {
        id: 'mqtt-telemetry',
        num: '03',
        name: 'Edge MQTT Ingestion',
        shortRole: 'Lightweight Cellular Stream',
        simpleExplanation: 'Compresses multi-probe sensor data (pH, Dissolved Oxygen, Turbidity, Temperature) and streams it continuously via ultra-low-bandwidth MQTT protocols.',
        techDetails: 'MQTT Broker · Async FastAPI Ingestion Engine · TimescaleDB Time-Series DB',
        input: 'Real-time sensor arrays (analog pH, galvanic DO, nephelometric turbidity)',
        output: 'Structured, validated time-series telemetry streams',
        badge: 'SUB-SECOND STREAM'
      },
      {
        id: 'anomaly-ml',
        num: '04',
        name: 'Hydro-Chemical ML Scoring',
        shortRole: 'Pollution Forecasting',
        simpleExplanation: 'Machine learning algorithms analyze water chemistry trends to predict toxic contamination spikes and fish-kill risks days before visible harm occurs.',
        techDetails: 'Isolation Forests · Threshold Anomaly Classifiers · Rolling Trend Analytics',
        input: 'Multi-parameter time-series chemistry feeds',
        output: 'Eutrophication risk score & water quality index (WQI)',
        badge: 'EARLY WARNING'
      },
      {
        id: 'webgis-alerts',
        num: '05',
        name: 'WebGIS Command & SMS Alerts',
        shortRole: 'Actionable Public Response',
        simpleExplanation: 'Displays lake health on an interactive municipal map and immediately fires automated SMS alerts to city environmental teams for instant containment.',
        techDetails: 'React WebGIS Map · GeoJSON Heatmaps · Twilio SMS & Webhook Dispatch',
        input: 'Risk coordinates & critical threshold triggers',
        output: 'Interactive geospatial command map + SMS alerts to municipal officers',
        badge: 'INSTANT ALERTS'
      }
    ]
  },
  {
    id: 'physioshift',
    num: '03',
    badge: 'PHYSIOSHIFT · RESEARCH',
    title: 'PhysioShift Cross-Hardware SSL',
    subtitle: 'Sensor-Invariant Self-Supervised Learning for Wearable Physiological Signals',
    category: 'Self-Supervised Learning · Biosignal AI · Edge Computing',
    status: 'ACTIVE RESEARCH · MULTI-HARDWARE',
    color: '#ffb703',
    colorGlow: 'rgba(255, 183, 3, 0.4)',
    simpleSummary: 'A self-supervised deep learning framework that trains AI models on human biosignals (heart rate, stress, skin conductance) so they work seamlessly across any wearable hardware brand without breaking.',
    simpleAnalogy: 'Like teaching an AI to understand human speech regardless of whether it is recorded on an iPhone, an old radio, or a studio microphone.',
    realWorldImpact: 'Eliminates model failure when users switch smartwatches (Apple Watch, Oura, Fitbit), powering cross-hardware clinical stress alerting.',
    simulation: {
      ticketId: 'SIGNAL-5510',
      inputDesc: 'Streaming 250Hz raw PPG waveform collected from a consumer photoplethysmography sensor with motion artifacts and hardware noise.',
      steps: [
        {
          stageNum: '01',
          stageName: 'Multi-Channel Signal Ingestion',
          action: 'Normalized 4-channel bio-streams (ECG, PPG, GSR, Skin Temp) into uniform temporal windows with zero-phase bandpass filtering.',
          status: 'PREPROCESSED'
        },
        {
          stageNum: '02',
          stageName: 'Temporal Hardware Augmentation',
          action: 'Generated synthetic domain shifts: frequency resampling (100Hz–500Hz), motion noise injection, and electrode impedance variation.',
          status: 'AUGMENTED (2 VIEWS)'
        },
        {
          stageNum: '03',
          stageName: '1D Dilated ConvNet Backbone',
          action: 'Extracted multi-scale temporal features with exponentially increasing receptive fields without human label supervision.',
          status: 'FEATURES EXTRACTED'
        },
        {
          stageNum: '04',
          stageName: 'Contrastive Latent Projection',
          action: 'Optimized InfoNCE contrastive objective: pulled same-patient cross-sensor embeddings together, pushed noise apart.',
          status: 'INVARIANCE LEARNED'
        },
        {
          stageNum: '05',
          stageName: 'Clinical Downstream Transfer',
          action: 'Frozen encoder weights transferred to VitalDrift (autonomic stress alert) and Follicular (hormonal phase prediction) with 91.2% linear probe accuracy.',
          status: 'DEPLOYED TO EDGE'
        }
      ]
    },
    stages: [
      {
        id: 'signal-ingest',
        num: '01',
        name: 'Multi-Channel Biosignal Ingestion',
        shortRole: 'Sensor Normalization',
        simpleExplanation: 'Collects raw physiological waveforms (heart rhythm, blood flow, skin sweat, temperature) across diverse wearable brands and normalizes their time scales.',
        techDetails: 'ECG, PPG, GSR, Temperature · SciPy Zero-Phase Filtering · Dynamic Resampling',
        input: 'Raw continuous time-series streams from consumer and medical wearables',
        output: 'Clean, normalized multi-channel tensor batches',
        badge: 'MULTI-MODAL'
      },
      {
        id: 'augmentations',
        num: '02',
        name: 'Hardware Shift Augmentations',
        shortRole: 'Simulating Sensor Diversity',
        simpleExplanation: 'Applies synthetic variations like changing sample rates, sensor jitter, and loose skin contact so the AI learns what different device hardware feels like.',
        techDetails: 'PyTorch Temporal Augmentations · Jittering · Dynamic Time Warping (DTW)',
        input: 'Normalized physiological signal batches',
        output: 'Paired augmented views representing varied hardware signatures',
        badge: 'DOMAIN ROBUST'
      },
      {
        id: 'backbone',
        num: '03',
        name: '1D Dilated ConvNet Backbone',
        shortRole: 'Multi-Scale Feature Extraction',
        simpleExplanation: 'A deep neural network scans millisecond heart beats and multi-minute trends simultaneously without needing expensive doctor-labeled annotations.',
        techDetails: '1D Dilated Convolutions · Receptive Field Expansion · PyTorch CUDA Acceleration',
        input: 'Augmented biosignal views',
        output: 'High-dimensional temporal latent feature vectors',
        badge: 'LABEL-FREE'
      },
      {
        id: 'contrastive',
        num: '04',
        name: 'Contrastive Representation Head',
        shortRole: 'Isolating True Biology',
        simpleExplanation: 'Teaches the AI to pull identical biological patterns close together in memory while ignoring whether the signal came from a ring, watch, or chest patch.',
        techDetails: 'InfoNCE Loss Formulation · Cosine Similarity Alignment · Projection MLP',
        input: 'Feature representations of paired views',
        output: 'Hardware-invariant biological latent space',
        badge: 'INFONCE LOSS'
      },
      {
        id: 'downstream',
        num: '05',
        name: 'Clinical Downstream Probes',
        shortRole: 'Edge Health Applications',
        simpleExplanation: 'The trained model powers real-world health tools: detecting autonomic panic/stress spikes in VitalDrift and hormonal cycles in Follicular.',
        techDetails: 'Linear Evaluation Probes · ONNX / TensorRT Edge Inference · Low-Latency Classification',
        input: 'Pretrained sensor-invariant feature representations',
        output: 'Real-time autonomic stress alerts and clinical health classifications',
        badge: 'EDGE READY'
      }
    ]
  },
  {
    id: 'phasesar',
    num: '04',
    badge: 'PHASESAR-NET · RADAR AI',
    title: 'PhaseSAR-Net Complex-Valued InSAR',
    subtitle: 'Deep Complex Neural Network Preserving Interferometric Phase Physics',
    category: 'Complex Deep Learning · Satellite Radar · InSAR Geoscience',
    status: 'RESEARCH · SATELLITE RADAR',
    color: '#a855f7',
    colorGlow: 'rgba(168, 85, 247, 0.4)',
    simpleSummary: 'A complex-valued deep neural network that processes both radar brightness and wave phase timing to track millimeter-level ground sinking, bridge shifts, and landslide hazards from orbit.',
    simpleAnalogy: 'Traditional computer vision only looks at pictures in black and white; PhaseSAR-Net listens to the exact acoustic echo timing of radar waves to measure millimeter movements.',
    realWorldImpact: 'Preserves phase coherence in high-noise radar returns, enabling reliable early warning for structural failure and land subsidence.',
    simulation: {
      ticketId: 'RADAR-BURST-109',
      inputDesc: 'Dual Single-Look Complex (SLC) interferometric pair over urban infrastructure zone with spatial baseline of 82 meters.',
      steps: [
        {
          stageNum: '01',
          stageName: 'Dual-Channel I/Q Ingestion',
          action: 'Extracted In-Phase (I) and Quadrature (Q) complex channels from Sentinel-1 SLC bursts with sub-pixel coregistration.',
          status: 'COREGISTERED'
        },
        {
          stageNum: '02',
          stageName: 'Complex 2D Convolutions',
          action: 'Processed complex matrices using PyTorch ComplexConv2d with phase-preserving ModReLU activation functions.',
          status: 'PHASE PRESERVED'
        },
        {
          stageNum: '03',
          stageName: 'Phase Regularization Loss',
          action: 'Applied KL-Divergence coherence loss to penalize phase noise and decorrelation without blurring structural edges.',
          status: 'COHERENCE OPTIMIZED'
        },
        {
          stageNum: '04',
          stageName: 'Deformation Field Inversion',
          action: 'Unwrapped interferometric phase cycles into millimeter ground displacement map: detected -12.4mm subsidence in metro corridor.',
          status: 'SUBSIDENCE MEASURED'
        },
        {
          stageNum: '05',
          stageName: 'Structural Risk Classification',
          action: 'Semantic classification head flagged high-risk geological subsidence zone with 94.2% ROC-AUC confidence.',
          status: 'GEOSPATIAL RISK MAP'
        }
      ]
    },
    stages: [
      {
        id: 'iq-ingest',
        num: '01',
        name: 'In-Phase & Quadrature Radar Ingestion',
        shortRole: 'Complex Wave Acquisition',
        simpleExplanation: 'Reads satellite radar returns containing both wave amplitude (brightness) and wave timing phase (position in the wave cycle) as complex numbers.',
        techDetails: 'Sentinel-1 Single Look Complex (SLC) · In-Phase (I) & Quadrature (Q) · Sub-Pixel Coregistration',
        input: 'Paired temporal radar passes over target geography',
        output: 'Aligned complex tensor grids (Real + Imaginary components)',
        badge: 'COMPLEX I/Q'
      },
      {
        id: 'complex-conv',
        num: '02',
        name: 'ComplexConv2d & ModReLU Layers',
        shortRole: 'Physics-Preserving Neural Layers',
        simpleExplanation: 'Specially engineered AI layers that perform arithmetic on complex numbers (real and imaginary), maintaining the electromagnetic physics of radar reflection.',
        techDetails: 'PyTorch ComplexConv2d · ModReLU Nonlinearity · Complex Spatial Pooling',
        input: 'Complex I/Q radar tensors',
        output: 'Phase-coherent feature representations',
        badge: 'MODRELU AI'
      },
      {
        id: 'coherence-loss',
        num: '03',
        name: 'Interferometric Phase Regularization',
        shortRole: 'Noise Suppression',
        simpleExplanation: 'A custom mathematical loss function that filters out atmospheric distortion and vegetation noise while keeping sharp edges of buildings and bridges intact.',
        techDetails: 'KL-Divergence Phase Loss · Spatial Coherence Estimator · Complex Batch Normalization',
        input: 'Raw interferometric phase differences',
        output: 'Denoised, highly coherent radar phase fringes',
        badge: 'KL REGULARIZATION'
      },
      {
        id: 'deformation-inversion',
        num: '04',
        name: 'Millimeter Deformation Inversion',
        shortRole: 'Sub-Centimeter Measurement',
        simpleExplanation: 'Translates tiny fractions of radar wave shifts into real-world measurements: accurately detecting if the ground or a dam sank by just 2 millimeters.',
        techDetails: 'Phase Unwrapping · InSAR Displacement Field Solver · Millimeter Calibration',
        input: 'Denoised interferogram phase values',
        output: 'Precise surface velocity field (mm/year displacement)',
        badge: 'MILLIMETER ACCURACY'
      },
      {
        id: 'risk-classification',
        num: '05',
        name: 'Infrastructure & Hazard Mapping',
        shortRole: 'Actionable Geological Intelligence',
        simpleExplanation: 'Automatically highlights vulnerable bridges, sinking rail lines, and unstable landslide slopes on high-resolution GIS maps for civil authorities.',
        techDetails: 'Multiclass Semantic Segmentation · ROC-AUC 0.94+ · GeoTIFF / GIS Vector Export',
        input: 'Calibrated deformation fields and coherence maps',
        output: 'Color-coded geospatial infrastructure risk maps and disaster alerts',
        badge: 'ROC-AUC 0.94+'
      }
    ]
  }
];
