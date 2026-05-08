export const divisions = [
  {
    id: 'engineering',
    title: 'Engineering & Design',
    shortTitle: 'Engineering',
    color: 'var(--div-engineering)',
    colorHex: '#2E6FBF',
    lightBg: 'var(--div-engineering-light)',
    icon: 'Compass',
    intro: 'Advanced engineering, product development, FEED, CAD, simulation, and industrial design services for manufacturers, EPC companies, OEMs, oil & gas operators, and industrial enterprises across India, Bengaluru, Chennai, Hyderabad, Pune, Mumbai, Delhi NCR, the United States, EMEA, and Australia.',
    services: [
      {
        slug: 'product-engineering',
        title: 'New Product Engineering Services',
        tagline: 'End-to-End Product Design & Development for Global Industrial Markets',
        seoKeywords: 'new product engineering services India, product design company Bengaluru, industrial engineering consultants Chennai, OEM engineering Hyderabad, mechanical design Pune, manufacturing engineering Mumbai',
        intro: 'Our New Product Engineering services support industrial manufacturers and OEMs from concept design through validation, prototyping, and production support.',
        activities: [
          'Concept development and feasibility analysis',
          '3D CAD modeling and detailed design',
          'Engineering simulation and validation',
          'Prototype development and testing',
          'DFM and DFA optimization',
          'Regulatory compliance engineering'
        ],
        deliverables: '3D CAD models, manufacturing drawings, BOM, validation reports, and production documentation.',
        regions: 'India · Bengaluru · Chennai · Hyderabad · Pune · Mumbai · Delhi NCR · US · EMEA · Australia'
      },
      {
        slug: 'reverse-engineering',
        title: 'Reverse Engineering & Legacy System Digitization Services',
        tagline: 'Digitize. Rebuild. Optimize. Extend Asset Life.',
        seoKeywords: 'reverse engineering India, 3D scanning Bengaluru, CAD reconstruction Chennai, industrial redesign Hyderabad',
        intro: 'We help industries recover and modernize legacy equipment through 3D scanning, CAD reconstruction, and engineering optimization.',
        activities: [
          '3D laser scanning',
          'CAD reconstruction',
          'Metallurgical analysis',
          'Tolerance validation',
          'Design optimization',
          'Manufacturing drawing development'
        ],
        deliverables: 'CAD models, engineering drawings, dimensional reports, and redesign documentation.',
        regions: 'India · US · EMEA · Australia'
      },
      {
        slug: 'value-engineering',
        title: 'Value Engineering & Strategic Cost Optimization Services',
        tagline: 'Reduce Cost. Improve Performance.',
        seoKeywords: 'value engineering India, cost optimization Bengaluru, BOM reduction Chennai',
        intro: 'We help manufacturers reduce operational and product costs while improving quality, manufacturability, and performance.',
        activities: [
          'Cost breakdown analysis',
          'Material substitution',
          'Design simplification',
          'Supplier benchmarking',
          'Lifecycle cost assessment',
          'ROI validation'
        ],
        deliverables: 'Cost optimization roadmap, revised BOM, ROI reports, and implementation plans.',
        regions: 'India · US · EMEA · Australia'
      },
      {
        slug: 'process-engineering',
        title: 'FEED Engineering & P&ID Design Services',
        tagline: 'Front-End Engineering Design for Risk-Free Capital Projects',
        seoKeywords: 'FEED engineering India, P&ID services Bengaluru, process engineering Chennai',
        intro: 'We provide FEED and P&ID services for oil & gas, petrochemical, and industrial process plants.',
        activities: [
          'PFD development',
          'P&ID drafting',
          'Equipment sizing',
          'Hydraulic calculations',
          'HAZOP support',
          'Compliance reviews'
        ],
        deliverables: 'PFDs, P&IDs, datasheets, line lists, and FEED documentation.',
        regions: 'India · US · EMEA · Australia'
      },
      {
        slug: 'fea-cfd-simulation',
        title: 'Advanced FEA & CFD Simulation Services',
        tagline: 'Engineering Simulation for Performance Validation',
        seoKeywords: 'FEA CFD India, simulation services Bengaluru, structural analysis Chennai',
        intro: 'Our FEA and CFD services help validate product performance before physical prototyping.',
        activities: [
          'Structural stress analysis',
          'Thermal simulations',
          'Fatigue analysis',
          'Fluid flow modeling',
          'Dynamic analysis',
          'Failure investigations'
        ],
        deliverables: 'Simulation reports, stress plots, CFD analysis, and optimization recommendations.',
        regions: 'India · US · EMEA · Australia'
      }
    ]
  },

  {
    id: 'manufacturing',
    title: 'Manufacturing & Industrialization',
    shortTitle: 'Manufacturing',
    color: 'var(--div-manufacturing)',
    colorHex: '#0F9B7D',
    lightBg: 'var(--div-manufacturing-light)',
    icon: 'Factory',
    intro: 'Manufacturing engineering, tooling, automation, lean transformation, and industrial production optimization services for global manufacturers.',
    services: [
      {
        slug: 'tooling-fixture',
        title: 'Mechanical & Hydraulic Fixture Design Services',
        tagline: 'High-Precision Fixtures for Reliable Production Performance',
        seoKeywords: 'fixture design India, hydraulic fixture Bengaluru, tooling engineering Chennai',
        intro: 'We design precision fixtures for welding, machining, assembly, and industrial production applications.',
        activities: [
          'Fixture modeling',
          'Hydraulic design',
          'Tolerance analysis',
          'Structural calculations',
          'Safety reviews',
          'Validation support'
        ],
        deliverables: 'Fixture CAD models, schematics, BOM, and manufacturing documentation.',
        regions: 'India · US · EMEA · Australia'
      },
      {
        slug: 'special-purpose-machines',
        title: 'Custom Industrial Machine Design & Automation Development',
        tagline: 'Engineered Machines Built for Performance & Scalability',
        seoKeywords: 'SPM machine design India, custom automation Bengaluru',
        intro: 'We provide turnkey custom machine design and automation engineering solutions.',
        activities: [
          'Machine concept design',
          'Mechanical engineering',
          'Electrical integration',
          'PLC programming',
          'Safety assessment',
          'Commissioning'
        ],
        deliverables: 'Machine design package, electrical drawings, PLC code, FAT/SAT reports.',
        regions: 'India · US · EMEA · Australia'
      },
      {
        slug: 'assembly-automation',
        title: 'Assembly Line Automation & Robotics Integration',
        tagline: 'Smart Assembly Systems for High-Throughput Manufacturing',
        seoKeywords: 'assembly automation India, robotics integration Bengaluru',
        intro: 'We design semi and fully automated assembly systems with robotics and vision inspection.',
        activities: [
          'Robotic cell integration',
          'Conveyor design',
          'Vision inspection',
          'PLC programming',
          'Cycle time optimization',
          'Training and commissioning'
        ],
        deliverables: 'Automation layouts, robotic programs, validation reports, and manuals.',
        regions: 'India · US · EMEA · Australia'
      },
      {
        slug: 'industrial-engineering-lean',
        title: 'Lean Manufacturing & Continuous Improvement Consulting',
        tagline: 'Operational Excellence Through Lean Transformation',
        seoKeywords: 'lean manufacturing India, Kaizen consulting Bengaluru, VSM Chennai',
        intro: 'We help manufacturers improve productivity through lean manufacturing and continuous improvement.',
        activities: [
          'Value Stream Mapping',
          '5S implementation',
          'Kaizen workshops',
          'SMED execution',
          'TPM programs',
          'Lean coaching'
        ],
        deliverables: 'Lean assessment reports, SOPs, KPI dashboards, and training material.',
        regions: 'India · US · EMEA · Australia'
      }
    ]
  },

  {
    id: 'digital',
    title: 'Digital & Industry 4.0',
    shortTitle: 'Digital',
    color: 'var(--div-digital)',
    colorHex: '#7C5CFC',
    lightBg: 'var(--div-digital-light)',
    icon: 'Cpu',
    intro: 'Industry 4.0, smart factory, AI, IIoT, robotics, automation, and industrial digital transformation services.',
    services: [
      {
        slug: 'digital-twin',
        title: 'Digital Twin Engineering Services',
        tagline: 'Real-time virtual replicas for smarter industrial operations',
        seoKeywords: 'digital twin India, Industry 4.0 Bengaluru, smart factory Chennai',
        intro: 'We build digital twins for industrial assets, production systems, and manufacturing operations.',
        activities: [
          '3D asset modeling',
          'IoT integration',
          'Simulation modeling',
          'Performance dashboards',
          'Predictive maintenance',
          'Cloud deployment'
        ],
        deliverables: 'Digital twin platforms, dashboards, analytics reports, and deployment documentation.',
        regions: 'India · US · EMEA · Australia'
      },
      {
        slug: 'plc-scada-iiot',
        title: 'Industrial Automation & Control Systems',
        tagline: 'Intelligent automation engineered for reliability',
        seoKeywords: 'PLC SCADA India, automation integrators Bengaluru',
        intro: 'We implement scalable industrial automation systems for manufacturing and process industries.',
        activities: [
          'PLC programming',
          'SCADA development',
          'DCS configuration',
          'Instrumentation integration',
          'IIoT connectivity',
          'Factory acceptance testing'
        ],
        deliverables: 'Automation architecture, PLC/HMI applications, FAT/SAT reports.',
        regions: 'India · US · EMEA · Australia'
      },
      {
        slug: 'robotics-automation',
        title: 'Industrial Robotics Integration',
        tagline: 'Smart robotic solutions for agile production',
        seoKeywords: 'robotics integration India, industrial robots Bengaluru',
        intro: 'We provide robotic cell design, programming, and integration for industrial manufacturing.',
        activities: [
          'Robot cell layout',
          'EOAT design',
          'Robot programming',
          'Vision integration',
          'Safety compliance',
          'On-site commissioning'
        ],
        deliverables: 'Integrated robotic cells, robot programs, safety validation reports.',
        regions: 'India · US · EMEA · Australia'
      },
      {
        slug: 'data-ai-systems',
        title: 'Industrial Data & AI Solutions',
        tagline: 'Transform operational data into actionable intelligence',
        seoKeywords: 'industrial AI India, manufacturing analytics Bengaluru, IIoT Chennai',
        intro: 'We build scalable industrial AI and analytics platforms for smart manufacturing.',
        activities: [
          'Data architecture design',
          'IoT integration',
          'Machine learning development',
          'Predictive analytics',
          'Dashboard creation',
          'Cloud deployment'
        ],
        deliverables: 'AI models, KPI dashboards, data platforms, and governance frameworks.',
        regions: 'India · US · EMEA · Australia'
      }
    ]
  },

  {
    id: 'consulting',
    title: 'Consulting & Transformation',
    shortTitle: 'Consulting',
    color: 'var(--div-consulting)',
    colorHex: '#F59E0B',
    lightBg: 'var(--div-consulting-light)',
    icon: 'TrendingUp',
    intro: 'Strategic consulting, industrial modernization, operational excellence, and digital transformation services.',
    services: [
      {
        slug: 'digital-transformation',
        title: 'Digital Transformation Consulting Services',
        tagline: 'Industry 4.0 transformation from strategy to deployment',
        seoKeywords: 'digital transformation India, Industry 4.0 consulting Bengaluru',
        intro: 'We lead enterprise digital transformation initiatives for manufacturers and industrial organizations.',
        activities: [
          'Industry 4.0 assessments',
          'Technology roadmaps',
          'Smart factory planning',
          'Governance frameworks',
          'Digital skills development',
          'Transformation KPI tracking'
        ],
        deliverables: 'Transformation roadmaps, architecture documentation, KPI dashboards.',
        regions: 'India · US · EMEA · Australia'
      },
      {
        slug: 'plant-modernisation',
        title: 'Plant Modernisation Strategy',
        tagline: 'Asset assessment and phased modernization planning',
        seoKeywords: 'plant modernization India, factory upgrade Bengaluru',
        intro: 'We help industrial facilities modernize production systems and improve operational efficiency.',
        activities: [
          'Asset assessments',
          'Technology gap analysis',
          'Business case development',
          'CAPEX planning',
          'Risk mitigation',
          'Governance strategy'
        ],
        deliverables: 'Modernization roadmaps, business cases, and governance documentation.',
        regions: 'India · US · EMEA · Australia'
      }
    ]
  }
];

export function getServiceBySlug(divisionId, serviceSlug) {
  const division = divisions.find(d => d.id === divisionId);
  if (!division) return null;
  const service = division.services.find(s => s.slug === serviceSlug);
  if (!service) return null;
  return { ...service, division };
}

export function getDivisionById(divisionId) {
  return divisions.find(d => d.id === divisionId) || null;
}

export function getAllServicePaths() {
  const paths = [];
  divisions.forEach(div => {
    div.services.forEach(svc => {
      paths.push({ divisionId: div.id, serviceSlug: svc.slug });
    });
  });
  return paths;
}