export const PROJECTS_DATA = [
  {
    id: 'physioshift',
    num: '001',
    badge: 'PHYSIOSHIFT',
    title: 'PhysioShift',
    subtitle: 'Cross-Hardware Robust Representation Learning for Physiological Signals',
    category: 'AI / ML / DL / CV · Team Project · In Progress',
    status: 'IN PROGRESS · TEAM RESEARCH',
    orbClass: 'orb-yellow',
    color: '#ffb703',
    shortDesc: 'Self-supervised representation learning framework for physiological time-series signals (ECG, PPG, GSR, skin temperature), built to be robust across sensor hardware domains rather than just across patients or datasets.',
    tags: ['PyTorch', 'Self-Supervised', 'Time-Series', 'Edge AI', 'NumPy', 'SciPy', 'CUDA'],
    tagline: 'Can a physiological model learn the biological signal without overfitting to the sensor hardware?',
    problem: 'Consumer and clinical wearables (smart rings, smartwatches, chest ECG patches, PPG wristbands, GSR electrodes) vary widely in sensor hardware, analog-to-digital converter resolution, and skin-contact impedance. Traditional supervised models overfit to specific hardware signatures and fail catastrophically when deployed across unseen devices (domain shift).',
    innovations: [
      {
        title: 'Cross-Hardware Self-Supervised Learning',
        desc: 'Pretrained on raw physiological time-series (ECG, PPG, GSR, and skin temperature) using contrastive representations that isolate underlying biological dynamics from hardware-specific artifacts.'
      },
      {
        title: 'Sensor-Invariant Latent Embeddings',
        desc: 'Enforces invariant latent feature spaces across diverse sensor brands, electrode placements, and sampling rates without requiring label supervision.'
      },
      {
        title: 'Downstream Clinical Applications',
        desc: 'Powers VitalDrift (arm-worn autonomic health-drift and stress alerting) and Follicular (health-tech classification and hormonal phase tracking via pretrained embeddings).'
      }
    ],
    architecture: 'Raw Multi-Channel Time-Series (ECG/PPG/GSR/Temp) → Temporal Augmentations → 1D Dilated ConvNet Feature Extractor → Contrastive Latent Projection Head → Downstream Transfer Weights.',
    metrics: [
      { label: 'Domain Shift Error Reduction', value: '35% Lower' },
      { label: 'Downstream Applications', value: 'VitalDrift & Follicular' },
      { label: 'Modalities Supported', value: 'ECG, PPG, GSR & Temp' },
      { label: 'Adaptation Speed', value: 'Zero/Few-Shot' }
    ]
  },
  {
    id: 'lakeguard',
    num: '002',
    badge: 'LAKEGUARD AI',
    title: 'LakeGuard AI + AquaDrone Sentinel',
    subtitle: 'Autonomous IoT Sensor Swarm & Early Chemical Anomaly Detection for Freshwater Lakes',
    category: 'IoT Hardware · Full-Stack · Remote Sensing · Edge ML',
    status: 'LIVE · 4TH / 147 TEAMS (KSRSAC STATE AWARD)',
    orbClass: 'orb-green',
    color: '#00ff9d',
    shortDesc: 'AI sentinel fusing live IoT sensor swarms with ML to catch water-quality anomalies early in Karnataka\'s lakes; placed 4th of 147 teams at the KSRSAC State-Level Competition (Govt. of Karnataka).',
    tags: ['React', 'FastAPI', 'ESP32', 'IoT', 'MQTT', 'WebSockets', 'PostgreSQL', 'Leaflet.js'],
    tagline: 'Catching toxic contamination surges and industrial discharge hours before catastrophic fish die-offs.',
    problem: 'Rapid urban sprawl in Karnataka has caused critical eutrophication and toxic foam fires in major freshwater lakes. Traditional manual water testing requires field officers to collect samples and wait days for laboratory chemical analysis — far too late to prevent irreversible environmental collapse or stop illegal industrial dumping.',
    innovations: [
      {
        title: 'Solar-Powered Floating IoT Buoy Swarm',
        desc: 'Custom-engineered aquatic buoys powered by low-draw ESP32 microcontrollers. Deploys multi-sensor arrays measuring pH, Dissolved Oxygen (DO), Turbidity, Total Dissolved Solids (TDS), and Temperature.'
      },
      {
        title: 'Sub-Second Edge Telemetry & Pipeline',
        desc: 'Streamlined asynchronous communication via MQTT protocol to a high-concurrency FastAPI microservice, backed by PostgreSQL / TimescaleDB for time-series persistence.'
      },
      {
        title: 'Unsupervised ML Anomaly Detection Engine',
        desc: 'Real-time statistical anomaly models (Isolation Forests + rolling z-score derivatives) detecting localized chemical spike patterns before pollutants diffuse across the water basin.'
      },
      {
        title: 'Interactive WebGIS Command Dashboard',
        desc: 'React-based spatial dashboard with Leaflet heatmaps, Water Quality Index (WQI) gauges, real-time alert triggers, and automated SMS notifications to pollution control boards.'
      }
    ],
    architecture: 'ESP32 Hardware Nodes (Multi-Sensor Array) → MQTT Broker Telemetry Stream → FastAPI Async Ingestion Service → TimescaleDB Storage & Real-Time ML Anomaly Scoring → React WebGIS Live Dashboard & SMS Webhooks.',
    metrics: [
      { label: 'State-Level Award', value: '4th of 147 Teams' },
      { label: 'Grant Prize Won', value: '₹15,000 Award' },
      { label: 'Telemetry Latency', value: '< 800ms End-to-End' },
      { label: 'Sensing Parameters', value: '5 Critical Biomarkers' }
    ]
  },
  {
    id: 'phasesar',
    num: '003',
    badge: 'PHASESAR-NET',
    title: 'PhaseSAR-Net',
    subtitle: 'Phase-Aware SAR Intelligence for Robust Scene Classification',
    category: 'AI / ML / DL · Solo Research · In Progress',
    status: 'SOLO RESEARCH · STREAMLIT BENCHMARK',
    orbClass: 'orb-pink',
    color: '#00d4ff',
    shortDesc: 'Phase-aware complex-valued neural network for SAR automatic target recognition. Preserves amplitude + phase (I/Q) instead of collapsing to magnitude-only inputs.',
    tags: ['PyTorch', 'Complex CNN', 'SAR', 'Streamlit', 'MSTAR Benchmark', 'Signal Processing'],
    tagline: 'Preserving radar phase physics in complex space instead of permanently discarding half the signal.',
    problem: 'Conventional Synthetic Aperture Radar (SAR) Automatic Target Recognition (ATR) pipelines discard the phase channel of raw complex returns, collapsing complex In-phase (I) and Quadrature (Q) data into scalar magnitude images (|z| = √(I² + Q²)). This permanently throws away interferometric phase details encoding target geometry, surface scattering, dielectric properties, and wave polarization.',
    innovations: [
      {
        title: 'Paired Complex-Valued Convolutions',
        desc: 'Built a phase-aware SAR classification system using paired real/imaginary convolutions (ComplexConv2d, ComplexBatchNorm2d, ModReLU) benchmarked against a magnitude-only baseline CNN (~490K vs ~423K parameters).'
      },
      {
        title: 'Physics-Inspired Phase-Consistency Regularization',
        desc: 'Designed a phase-consistency regularization loss (KL-divergence between clean and phase-corrupted predictions) combined with cross-entropy, reducing baseline accuracy degradation under speckle, Gaussian, and platform-jitter corruptions.'
      },
      {
        title: 'Interactive Real-Time Streamlit Benchmark',
        desc: 'Built an open-source benchmarking suite visualizing I/Q constellations, real vs. complex activation maps, radar target classification confidence, and ablation testing against real-valued CNN baselines.'
      }
    ],
    architecture: 'Complex SAR Radar Return (I/Q Channels) → Complex 2D Convolutions with ModReLU → Complex Spatial Pooling → Phase-Consistency Regularization Loss (KL-Divergence) → Target Classification Head.',
    metrics: [
      { label: 'Model Footprint', value: '~490K Parameters' },
      { label: 'Signal Representation', value: 'Full I/Q (Magnitude + Phase)' },
      { label: 'Corruption Robustness', value: 'Speckle, Gaussian, Jitter' },
      { label: 'Evaluation Platform', value: 'Interactive Streamlit UI' }
    ]
  }
];
