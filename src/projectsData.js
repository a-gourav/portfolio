export const PROJECTS_DATA = [
  {
    id: 'physioshift',
    num: '001',
    badge: 'PHYSIOSHIFT',
    title: 'PhysioShift',
    subtitle: 'Self-Supervised Biosignal Representation Learning Across Sensor Hardware Domains',
    category: 'Edge AI · Biosignals · Time-Series ML',
    status: 'IN PROGRESS · TEAM RESEARCH',
    orbClass: 'orb-yellow',
    color: '#ffb703',
    shortDesc: 'Self-supervised representation learning for physiological time-series (ECG, PPG, GSR). Built to stay robust across sensor hardware domains — powers VitalDrift and Follicular downstream apps.',
    tags: ['PyTorch', 'Self-Supervised', 'Time-Series', 'Edge AI', 'NumPy', 'SciPy', 'CUDA'],
    tagline: 'Can a physiological model learn the biological signal without overfitting to the sensor hardware?',
    problem: 'Consumer and clinical wearables (smart rings, smartwatches, chest patches, GSR sensors) vary wildly in sampling frequency, analog-to-digital converter resolution, and skin-contact impedance. Traditional supervised models overfit to specific hardware signatures and catastrophically fail when deployed on unseen sensor devices (domain shift).',
    innovations: [
      {
        title: 'Contrastive Self-Supervised Learning (SSL)',
        desc: 'Pretrained on vast unlabelled multi-channel physiological streams (ECG, PPG, and Galvanic Skin Response) using temporal augmentation and cross-sensor contrastive pairs.'
      },
      {
        title: 'Sensor-Invariant Latent Embeddings',
        desc: 'Forces the latent space to encode core physiological states (sympathetic tone, autonomic regulation, cardiac intervals) rather than hardware-specific noise or device characteristics.'
      },
      {
        title: 'Downstream Clinical & Consumer Ecosystem',
        desc: 'Directly powers VitalDrift (real-time autonomic stress drift tracker under intense physical exertion) and Follicular (biomarker-driven endocrine & hormonal cycle phase estimation).'
      }
    ],
    architecture: 'Raw Multi-Channel Time-Series (ECG/PPG/GSR) → Signal Augmentation Pipeline (Jitter, Time-Warping, Frequency Masking) → 1D Dilated ConvNet Feature Extractor → Contrastive Latent Projection Head → Downstream Transfer Weights.',
    metrics: [
      { label: 'Domain Shift Error Reduction', value: '35% Lower' },
      { label: 'Downstream Applications', value: 'VitalDrift & Follicular' },
      { label: 'Modalities Supported', value: 'ECG, PPG & GSR' },
      { label: 'Adaptation Speed', value: 'Zero/Few-Shot' }
    ]
  },
  {
    id: 'lakeguard',
    num: '002',
    badge: 'LAKEGUARD AI',
    title: 'LakeGuard AI',
    subtitle: 'Autonomous IoT Sentinel Swarm & Early Chemical Anomaly Detection for Freshwater Lakes',
    category: 'IoT Hardware · Full-Stack · Remote Sensing · Edge ML',
    status: 'LIVE · 4TH / 147 TEAMS (KSRSAC STATE AWARD)',
    orbClass: 'orb-green',
    color: '#00ff9d',
    shortDesc: 'AI sentinel fusing live IoT sensor swarms with ML to catch water-quality anomalies early in Karnataka\'s lakes. Placed 4th of 147 teams at KSRSAC State-Level Exhibition.',
    tags: ['React', 'FastAPI', 'ESP32', 'IoT', 'MQTT', 'WebSockets', 'PostgreSQL', 'Leaflet.js'],
    tagline: 'Catching toxic contamination surges and industrial discharge hours before catastrophic fish die-offs.',
    problem: 'Rapid urban sprawl in Karnataka has caused critical eutrophication and toxic foam fires in major freshwater lakes. Traditional manual water testing requires field officers to collect samples and wait days for laboratory chemical analysis — far too late to prevent irreversible environmental collapse or stop illegal factory dumping.',
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
    subtitle: 'Phase-Aware Complex-Valued Neural Network for Synthetic Aperture Radar Automatic Target Recognition',
    category: 'Deep Learning · Radar Signal Processing · Complex Neural Networks · Computer Vision',
    status: 'SOLO RESEARCH · STREAMLIT BENCHMARK',
    orbClass: 'orb-pink',
    color: '#00d4ff',
    shortDesc: 'Phase-aware complex-valued neural network for SAR automatic target recognition. Preserves amplitude + phase (I/Q) instead of collapsing to magnitude-only inputs.',
    tags: ['PyTorch', 'Complex CNN', 'SAR', 'Streamlit', 'MSTAR Benchmark', 'Signal Processing'],
    tagline: 'Preserving radar phase physics in complex space instead of permanently discarding half the signal.',
    problem: 'Conventional Synthetic Aperture Radar (SAR) Automatic Target Recognition (ATR) pipelines discard the phase channel of raw complex returns, collapsing complex In-phase (I) and Quadrature (Q) data into scalar magnitude images (|z| = √(I² + Q²)). This permanently throws away interferometric phase details encoding target geometry, surface scattering, dielectric properties, and wave polarization.',
    innovations: [
      {
        title: 'Native Complex-Valued Architecture (CV-CNN)',
        desc: 'Constructed neural layers operating natively in the complex domain (ℂ), utilizing complex-valued convolution kernels, complex batch normalization, and phase-preserving non-linearities (ModReLU).'
      },
      {
        title: 'Physics-Aware Regularization',
        desc: 'Constrains phase angle transitions to maintain physical geometric consistency, significantly enhancing robustness against high-amplitude speckle noise, phase jitter, and signal attenuation.'
      },
      {
        title: 'Interactive Real-Time Streamlit Benchmark',
        desc: 'Built an open-source benchmarking suite visualizing I/Q constellations, real vs. complex activation maps, radar target classification confidence, and ablation testing against real-valued CNN baselines.'
      }
    ],
    architecture: 'Complex SAR Radar Return (I/Q Channels) → Complex 2D Convolutions with ModReLU → Complex Spatial Pooling → Phase Coherence Loss Regularizer → Dense Target Classification Head.',
    metrics: [
      { label: 'Low-SNR Accuracy Gain', value: '+12% Over Baseline' },
      { label: 'Signal Representation', value: 'Full I/Q (Magnitude + Phase)' },
      { label: 'Benchmark Dataset', value: 'MSTAR Radar ATR' },
      { label: 'Evaluation Platform', value: 'Interactive Streamlit UI' }
    ]
  }
];
