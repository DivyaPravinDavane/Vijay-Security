export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  image: string;
  features: string[];
  specs: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  image: string;
  description: string;
  projectsCount: string;
  solutions: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "India" | "International";
  discipline: "Fire" | "Security" | "CCTV" | "Access" | "Infrastructure";
  tags: string[];
  metrics: string;
  scope: string;
  image: string;
  client: string;
  location: string;
  year: string;
  description: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  category: string;
  authority: string;
  validity: string;
  docNumber: string;
  thumbnail: string;
  description: string;
}

export interface ClientItem {
  id: string;
  name: string;
  category: "Corporate" | "Finance" | "Real Estate" | "Education" | "Healthcare" | "Transport";
  logoText: string;
  color: string;
  bgDark?: boolean;
}

export const SITE_STATS: StatItem[] = [
  { value: "1959", label: "EST. 1959", sublabel: "Our Legacy" },
  { value: "65+", label: "65+", sublabel: "Years of Experience" },
  { value: "4,500+", label: "4,500+", sublabel: "Projects Delivered" },
  { value: "India + Global", label: "India + International", sublabel: "Our Reach" },
  { value: "24×7", label: "24×7", sublabel: "Support" },
];

export const SOLUTIONS_DATA: SolutionItem[] = [
  {
    id: "fire-protection",
    title: "FIRE PROTECTION",
    description: "Engineered systems to protect people, assets and infrastructure.",
    iconName: "Flame",
    image: "/images/fire-protection.jpg",
    features: [
      "Automatic Sprinkler Systems & Deluge Systems",
      "Gas Suppression (FM-200, Novec 1230, Inergen)",
      "Hydrant & Wet Riser Systems",
      "High & Medium Velocity Water Spray Systems",
    ],
    specs: "NFPA & NBC 2016 Compliant engineering with UL/FM certified equipment.",
  },
  {
    id: "fire-detection",
    title: "FIRE DETECTION",
    description: "Early detection. Faster response. Greater safety.",
    iconName: "Bell",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    features: [
      "Addressable & Conventional Fire Alarm Panels",
      "Aspirating Smoke Detection (VESDA)",
      "Beam Detectors & Thermal Flame Sensors",
      "Integrated Voice Evacuation System (PA/VA)",
    ],
    specs: "EN 54 & UL listed intelligent multi-criteria sensors with micro-second polling.",
  },
  {
    id: "cctv-surveillance",
    title: "CCTV & VIDEO SURVEILLANCE",
    description: "Advanced monitoring and visual intelligence.",
    iconName: "Camera",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80",
    features: [
      "4K Ultra-HD AI Optical & Thermal Cameras",
      "Edge-based Video Analytics & Facial Recognition",
      "Centralized Command & Control Software (VMS)",
      "Long-range PTZ & Perimetral Tracking",
    ],
    specs: "NDAA compliant edge AI processing with high redundancy SAN storage.",
  },
  {
    id: "access-control",
    title: "ACCESS CONTROL",
    description: "Secure access. Smarter control.",
    iconName: "ShieldCheck",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    features: [
      "Biometric, RFID & Mobile NFC Authentication",
      "Flap Barriers, Turnstiles & Bollards",
      "Multi-tenant Cloud Access Management",
      "Anti-passback & Interlocking Security Mantrap Doors",
    ],
    specs: "OSDP encrypted communication protocols with high availability failover.",
  },
  {
    id: "intrusion-detection",
    title: "INTRUSION DETECTION",
    description: "Detect. Deter. Prevent.",
    iconName: "Radar",
    image: "/images/intrusion-detection.jpg",
    features: [
      "Perimeter Fiber Optic Vibration Sensors",
      "PIR & Microwave Outdoor Beam Detectors",
      "Underground Seismic Detection Arrays",
      "Instant Alarm Monitoring & Siren Strobes",
    ],
    specs: "Grade-3 industrial intrusion panel with encrypted cellular backhaul.",
  },
  {
    id: "bms",
    title: "BUILDING MANAGEMENT",
    description: "Smart buildings. Efficient operations.",
    iconName: "Building2",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    features: [
      "HVAC, Lighting & Energy Automation",
      "BACnet/IP & Modbus Open Protocol Integration",
      "Centralized IBMS Graphical User Interface",
      "Predictive Equipment Diagnostics & Alerting",
    ],
    specs: "Enterprise-scale native BACnet controllers with cloud dashboard telemetry.",
  },
  {
    id: "water-leak",
    title: "WATER LEAK DETECTION",
    description: "Prevent water damage.",
    iconName: "Droplets",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    features: [
      "Pinpoint Location Sensing Cable (Conductive Polymer)",
      "Server Room & Data Center Underfloor Monitoring",
      "Fast-response Solenoid Valve Shutoff Triggers",
      "SMS & Email Alert Integration",
    ],
    specs: "Accurate to within 1 meter along 1,500m sensing cable runs.",
  },
  {
    id: "public-address",
    title: "PUBLIC ADDRESS",
    description: "Clear communication. Safer spaces.",
    iconName: "Megaphone",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
    features: [
      "IP-networked Public Address & Voice Alarm (PA/VA)",
      "Zone-selective Audio Evacuation Announcements",
      "Acoustically Tuned Horn & Ceiling Speakers",
      "Ambient Noise Sensing Automatic Volume Adjust",
    ],
    specs: "EN 54-16 Certified emergency audio routing with battery reserve.",
  },
  {
    id: "ev-charging",
    title: "EV CHARGING INFRASTRUCTURE",
    description: "Powering a sustainable future.",
    iconName: "Zap",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
    features: [
      "Fast DC Commercial Chargers (60kW - 240kW)",
      "Smart AC Fleet & Workplace Chargers",
      "Integrated Fire Suppression & Thermal Sensors",
      "OCPP 2.0.1 Cloud Management & Billing Software",
    ],
    specs: "Built-in automated dry-powder suppression canister & thermal runaway cutoffs.",
  },
];

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "corporate",
    name: "Corporate & IT",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    description: "Mission-critical campus protection for multinational headquarters and tech parks.",
    projectsCount: "1,200+ Facilities",
    solutions: ["Access Control", "CCTV Surveillance", "Fire Detection", "BMS"],
  },
  {
    id: "airports",
    name: "Airports",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    description: "High-throughput passenger perimeter security, apron surveillance and life-safety systems.",
    projectsCount: "18+ Major Terminals",
    solutions: ["Perimeter Intrusion", "Automated Deluge", "Voice Evacuation", "Thermal Surveillance"],
  },
  {
    id: "hotels",
    name: "Hotels",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    description: "Discreet luxury hospitality life-safety, guest access, and smart guestroom BMS integration.",
    projectsCount: "350+ 5-Star Properties",
    solutions: ["Fire Alarm", "Smoke Evacuation", "Keycard RFID", "Kitchen Suppression"],
  },
  {
    id: "banking",
    name: "Banking & Finance",
    image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-secure vault monitoring, ATM surveillance networks and certified access controls.",
    projectsCount: "800+ Branches & Hubs",
    solutions: ["Vault Gas Suppression", "Anti-Tamper CCTV", "Seismic Sensors", "Central Command"],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
    description: "Fail-safe hospital ward safety, infant protection RFID and sterile environment suppression.",
    projectsCount: "220+ Hospitals",
    solutions: ["Clean Agent Suppression", "Nurse Call PA", "ICU Gas Detection", "Thermal Screening"],
  },
  {
    id: "education",
    name: "Education",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    description: "Wide-area university campus monitoring, dorm fire compliance and student safety portals.",
    projectsCount: "140+ Institutions",
    solutions: ["Mass Notification PA", "Perimeter Guard", "Fire Sprinklers", "Access Control"],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    description: "Heavy industrial fire suppression, flammable gas detection and machinery thermal sensors.",
    projectsCount: "650+ Industrial Plants",
    solutions: ["Foam Suppression", "Hazardous Gas Detect", "Explosion Proof CCTV", "Hydrant Arrays"],
  },
  {
    id: "warehousing",
    name: "Warehouses",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    description: "ESFR high-density sprinkler racks, VESDA aspirating smoke detection and logistics docks security.",
    projectsCount: "480+ Distribution Centers",
    solutions: ["ESFR Sprinklers", "VESDA Smoke Sensing", "ANPR Truck Gate", "Cold Storage Gas"],
  },
  {
    id: "residential",
    name: "Residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    description: "Premium high-rise tower fire risers, visitor intercoms, and basement CO ventilation safety.",
    projectsCount: "500+ Towers & Communities",
    solutions: ["Riser Hydrants", "Video Intercom", "Basement Jet Fans BMS", "Boom Barriers"],
  },
  {
    id: "government",
    name: "Government",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
    description: "High-security sovereign facilities, defense sites, state secretariats and public utilities.",
    projectsCount: "190+ Sovereign Assets",
    solutions: ["Under-vehicle Scanners", "Mil-spec CCTV", "Blast-resistant Access", "Custom Command Center"],
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "telenor-india",
    title: "Telenor India",
    category: "India",
    discipline: "Security",
    tags: ["120+ Facilities", "Fire & Security Infrastructure", "8 Years O&M"],
    metrics: "120+ Facilities Protected",
    scope: "Fire & Security Infrastructure",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    client: "Telenor Communications India",
    location: "Pan-India (13 Telecom Circles)",
    year: "2016 - Present",
    description: "Turnkey fire alarm detection, clean agent gas suppression for data exchange nodes, IP CCTV surveillance, and 24x7 Annual Maintenance across all 120+ switching centers.",
  },
  {
    id: "lodha-developers",
    title: "Lodha Developers",
    category: "India",
    discipline: "Fire",
    tags: ["15+ Projects", "Fire Alarm | Hydrant", "Residential Mega-Projects"],
    metrics: "15+ Luxury Developments",
    scope: "Fire Alarm & Hydrant Networks",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
    client: "Macrotech Developers (Lodha)",
    location: "Mumbai Metropolitan Region",
    year: "2018 - Present",
    description: "Comprehensive installation of high-pressure wet riser systems, addressable fire alarm networks, automatic sprinkler coverage, and booster pumping systems for signature high-rise towers.",
  },
  {
    id: "new-doha-airport",
    title: "New Doha International Airport",
    category: "International",
    discipline: "Fire",
    tags: ["Aviation Hub", "Fire & Safety Systems", "Hamad International"],
    metrics: "500,000+ sqm Terminal Area",
    scope: "Fire & Safety Systems",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
    client: "Civil Aviation Authority / NDIA",
    location: "Doha, State of Qatar",
    year: "2014 - Present",
    description: "Specialized aircraft hangar foam deluge suppression, terminal passenger concourse optical smoke detection, aspirating VESDA networks, and centralized life-safety graphic management.",
  },
  {
    id: "hamad-sea-port",
    title: "Hamad Sea Port",
    category: "International",
    discipline: "Security",
    tags: ["Megaport", "Security & Surveillance", "Perimeter Protection"],
    metrics: "28.5 km Deep Sea Perimeter",
    scope: "Security & Surveillance",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
    client: "Mwani Qatar (Qatar Ports)",
    location: "Umm Al Houl, Qatar",
    year: "2017 - Present",
    description: "Long-range radar-assisted thermal camera surveillance, access control turnstiles, biometric cargo driver authorization, and integrated video wall central management system.",
  },
  {
    id: "mumbai-metro-line-3",
    title: "Mumbai Metro Rail (Aqua Line)",
    category: "India",
    discipline: "Infrastructure",
    tags: ["Underground Transit", "27 Stations", "Tunnel Safety"],
    metrics: "33.5 km Underground Corridor",
    scope: "Life Safety & Emergency PA",
    image: "/images/mumbai-metro.jpg",
    client: "MMRCL (Mumbai Metro)",
    location: "Mumbai, Maharashtra",
    year: "2021 - Present",
    description: "Specialized underground tunnel ventilation integration, EN 54-16 public address voice evacuation, optical smoke beam sensors, and integrated supervisory command terminal.",
  },
  {
    id: "dlf-cybercity",
    title: "DLF Cyber City Tech Park",
    category: "India",
    discipline: "CCTV",
    tags: ["IT Hub", "15 Million sq.ft", "AI Analytics"],
    metrics: "1,800+ Connected Cameras",
    scope: "Integrated CCTV & Access",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80",
    client: "DLF Cybercity Developers",
    location: "Gurugram, NCR",
    year: "2019 - Present",
    description: "Large-scale AI license plate recognition (ANPR), facial recognition turnstiles, visitor management portals, and multi-redundant SAN storage cluster.",
  },
  {
    id: "dubai-marina-towers",
    title: "Dubai Marina Elite Residences",
    category: "International",
    discipline: "Access",
    tags: ["High-rise Marina", "Biometric Interlocking", "Smart Living"],
    metrics: "4 Tower Complex",
    scope: "Biometric Access & BMS",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    client: "Emaar Properties PJSC",
    location: "Dubai Marina, UAE",
    year: "2020 - Present",
    description: "Next-generation contactless mobile access control, perimeter intrusion sensors, elevator floor dispatch interlocking, and automated fire damper management.",
  },
  {
    id: "cbre-corporate-hq",
    title: "CBRE Corporate Headquarters",
    category: "India",
    discipline: "Infrastructure",
    tags: ["Green Building", "LEED Platinum", "BMS Integration"],
    metrics: "450,000 sq.ft Office Space",
    scope: "Integrated BMS & Energy Automation",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    client: "CBRE South Asia",
    location: "Bengaluru, Karnataka",
    year: "2022 - Present",
    description: "Complete building management automation with BACnet/IP air handling, intelligent lighting schedules, power quality monitoring, and water leak detection.",
  },
];

export const CERTIFICATES_DATA: CertificateItem[] = [
  {
    id: "mah-fire-license",
    title: "Maharashtra Fire Services License",
    category: "Government License",
    authority: "Directorate of Maharashtra Fire Services",
    validity: "Valid & Current (Annual Renewal)",
    docNumber: "MFSD/LIC/CAT-A/2024/0912",
    thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    description: "Official Class 'A' Licensed Agency under the Maharashtra Fire Prevention and Life Safety Measures Act, authorized to inspect, supply, install, test, and commission fire systems.",
  },
  {
    id: "iso-9001",
    title: "ISO 9001:2015",
    category: "Quality Management",
    authority: "TUV NORD CERT GmbH / Bureau Veritas",
    validity: "Certified through 2027",
    docNumber: "QMS-0914-2024-IN",
    thumbnail: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
    description: "Standard for Quality Management Systems across design, engineering, procurement, installation, and after-sales maintenance of safety and security solutions.",
  },
  {
    id: "iso-14001",
    title: "ISO 14001:2015",
    category: "Environmental Management",
    authority: "TUV NORD CERT GmbH / IAF Member",
    validity: "Certified through 2027",
    docNumber: "EMS-1401-2024-IN",
    thumbnail: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    description: "Certified Environmental Management System ensuring sustainable engineering practices, green gas agent suppression, and responsible electronic waste management.",
  },
  {
    id: "iso-45001",
    title: "ISO 45001:2018",
    category: "Occupational Health & Safety",
    authority: "TUV NORD CERT GmbH",
    validity: "Certified through 2027",
    docNumber: "OHSMS-4501-2024-IN",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    description: "International standard for occupational health and safety, guaranteeing stringent zero-incident job-site protocols for all technical teams and hazardous site executions.",
  },
  {
    id: "electrical-license",
    title: "Electrical Contractor License",
    category: "Government License",
    authority: "Govt. of Maharashtra Industry & Energy Dept.",
    validity: "Valid through 2028",
    docNumber: "ECL-MH-MUM-8842",
    thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    description: "High-voltage and Low-voltage authorized Class-1 electrical engineering contractor license permitting substation, panel, and life-safety integration.",
  },
  {
    id: "anab-accreditation",
    title: "ANAB Accreditation",
    category: "International Accreditation",
    authority: "ANSI National Accreditation Board (USA)",
    validity: "Active & Recognized Worldwide",
    docNumber: "ANAB-ACC-GLB-2901",
    thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    description: "Globally recognized accreditation confirming adherence to international testing, inspection, and verification criteria for critical defense and aviation security projects.",
  },
];

export const CLIENTS_DATA: ClientItem[] = [
  { id: "adobe", name: "Adobe", category: "Corporate", logoText: "Adobe", color: "#FF0000" },
  { id: "airtel", name: "airtel", category: "Corporate", logoText: "airtel", color: "#ED1B24" },
  { id: "cbre", name: "CBRE", category: "Real Estate", logoText: "CBRE", color: "#003F2D" },
  { id: "dupont", name: "DuPont", category: "Corporate", logoText: "DUPONT", color: "#DA291C" },
  { id: "ikea", name: "IKEA", category: "Corporate", logoText: "IKEA", color: "#0058A3" },
  { id: "lt", name: "L&T", category: "Real Estate", logoText: "L&T", color: "#0B4EA2" },
  { id: "wipro", name: "Wipro", category: "Corporate", logoText: "wipro", color: "#3B115A" },
  { id: "mastercard", name: "Mastercard", category: "Finance", logoText: "mastercard", color: "#EB001B" },
  { id: "bank-of-america", name: "Bank of America", category: "Finance", logoText: "Bank of America", color: "#012169" },
  { id: "hsbc", name: "HSBC", category: "Finance", logoText: "HSBC", color: "#DB0011" },
  { id: "sbi", name: "SBI", category: "Finance", logoText: "SBI", color: "#280071" },
  { id: "tata", name: "TATA", category: "Corporate", logoText: "TATA", color: "#0F4C81" },
];

export const TIMELINE_DATA = [
  { year: "1959", title: "Vijay Group established", desc: "Founded with a vision for industrial safety in post-independence India." },
  { year: "1978", title: "Expansion into fire protection", desc: "Pioneered automated sprinkler and high-pressure hydrant solutions." },
  { year: "1995", title: "Security systems integration", desc: "Introduced advanced CCTV surveillance and digital access control." },
  { year: "2008", title: "Integrated technology solutions", desc: "Unified BMS, life safety, and automated command center protocols." },
  { year: "2016", title: "International operations", desc: "Established regional hubs in Qatar (Doha) and UAE (Dubai)." },
  { year: "Present", title: "4,500+ projects delivered", desc: "Leading multinational safety partner protecting critical infrastructure." },
];

export const AMC_MONITORING_SERVICES = [
  { title: "Preventive Maintenance", desc: "Scheduled periodic audits and component tuning.", icon: "Wrench" },
  { title: "System Inspection", desc: "Certified compliance checks against NBC & NFPA rules.", icon: "ClipboardCheck" },
  { title: "Fault Management", desc: "Rapid diagnostics, sensor recalibration and component replacement.", icon: "AlertTriangle" },
  { title: "Technical Support", desc: "24x7 specialized helpdesk with tier-3 systems engineers.", icon: "Headphones" },
  { title: "Emergency Response", desc: "Dedicated mobile dispatch units for immediate crisis resolution.", icon: "Siren" },
];

export const AMC_EQUIPMENT_LIST = [
  { title: "Fire Protection", icon: "Flame", desc: "Pumps, valves, sprinklers & suppression cylinders" },
  { title: "Fire Alarm", icon: "Bell", desc: "Addressable panels, smoke & thermal detectors" },
  { title: "CCTV", icon: "Camera", desc: "IP cameras, NVRs, matrix switchers & SAN units" },
  { title: "Access Control", icon: "ShieldCheck", desc: "Biometrics, flap barriers & magnetic locks" },
  { title: "BMS", icon: "Building2", desc: "DDC controllers, sensors, actuators & workstation software" },
  { title: "Other Systems", icon: "Cpu", desc: "PA/VA audio systems, VESDA & water leak sensing" },
];
