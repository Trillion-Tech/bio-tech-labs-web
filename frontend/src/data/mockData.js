export const products = [
  {
    id: 1,
    name: "Tuttnauer Washers",
    category: "Sterilization Equipment",
    description: "High-performance washing and disinfection systems for medical instruments",
    detailedDescription: "The Tuttnauer Washer series provides comprehensive cleaning and disinfection solutions for medical and laboratory instruments. These automated systems ensure thorough cleaning while maintaining instrument integrity and extending their lifespan.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=400&fit=crop",
    price: "Contact for Quote",
    features: [
      "Automated washing cycles",
      "Multiple rack configurations", 
      "Advanced filtration system",
      "Touchscreen controls",
      "Validation documentation"
    ],
    specifications: {
      "Chamber Volume": "Various sizes available",
      "Cycle Time": "15-45 minutes", 
      "Temperature Range": "65°C - 93°C",
      "Power Requirements": "220V/380V",
      "Dimensions": "Custom configurations"
    },
    applications: ["Hospitals", "Dental Clinics", "Veterinary Practices", "Research Labs"]
  },
  {
    id: 2,
    name: "Tuttnauer 3870M Sterilizer",
    category: "Large Sterilizers", 
    description: "Large capacity steam sterilizer for high-volume sterilization needs",
    detailedDescription: "The Tuttnauer 3870M is a large-capacity steam sterilizer designed for facilities with high-volume sterilization requirements. Features advanced controls and monitoring systems for reliable performance.",
    image: "https://images.unsplash.com/photo-1631815589968-fdb09ade494e?w=500&h=400&fit=crop",
    price: "Contact for Quote",
    features: [
      "Large chamber capacity",
      "Advanced steam generation",
      "Digital monitoring system",
      "Multiple cycle options",
      "Remote monitoring capability"
    ],
    specifications: {
      "Chamber Volume": "387 liters",
      "Cycle Time": "20-60 minutes",
      "Temperature Range": "121°C - 134°C", 
      "Power Requirements": "380V",
      "Dimensions": "Custom installation"
    },
    applications: ["Large Hospitals", "Central Sterile Processing", "Industrial Labs", "Pharmaceutical"]
  },
  {
    id: 3,
    name: "Fully Automatic Autoclaves",
    category: "Autoclaves",
    description: "Fully automated sterilization systems with advanced controls",
    detailedDescription: "State-of-the-art fully automatic autoclaves featuring microprocessor controls, multiple sterilization programs, and comprehensive safety features for reliable sterilization.",
    image: "https://www.google.com/imgres?q=Fully%20automated%20sterilization%20systems%20with%20advanced%20controls&imgurl=https%3A%2F%2Fwestburg.eu%2Fmedia%2F3321%2Ffile%2FIN-845-PP-0096000_PurePrep%252096%2520No%2520Logo.jpg&imgrefurl=https%3A%2F%2Fwestburg.eu%2Finnuscreen-introduces-benchtop-systems-for-automated-dna%2Frna-extraction&docid=z-gJwXVW4aJT3M&tbnid=yEZXkMWVpcr-iM&vet=12ahUKEwiOpPv174SPAxUvNPsDHaDbDQoQM3oECF8QAA..i&w=2048&h=1365&hcb=2&ved=2ahUKEwiOpPv174SPAxUvNPsDHaDbDQoQM3oECF8QAA",
    price: "Contact for Quote", 
    features: [
      "Microprocessor controls",
      "Pre-programmed cycles",
      "Automatic door locking",
      "Built-in printer",
      "Safety interlocks"
    ],
    specifications: {
      "Chamber Volume": "18L - 75L options",
      "Cycle Time": "15-45 minutes",
      "Temperature Range": "121°C - 134°C",
      "Power Requirements": "220V",
      "Dimensions": "Benchtop or floor models"
    },
    applications: ["Dental Offices", "Medical Clinics", "Veterinary Clinics", "Labs"]
  },
  {
    id: 4,
    name: "Mindray WATO EX-35 Anesthesia Machine",
    category: "Anesthesia Equipment",
    description: "Advanced anesthesia delivery system with integrated monitoring",
    detailedDescription: "The Mindray WATO EX-35 provides reliable anesthesia delivery with integrated patient monitoring, designed for modern operating rooms with advanced safety features.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=400&fit=crop",
    price: "Contact for Quote",
    features: [
      "Integrated ventilator",
      "Touch screen interface", 
      "Advanced monitoring",
      "Gas scavenging system",
      "Emergency backup systems"
    ],
    specifications: {
      "Ventilation Modes": "Multiple modes available",
      "Gas Supply": "O2, N2O, Air",
      "Monitoring": "Integrated patient monitoring",
      "Display": "15-inch touchscreen",
      "Mobility": "Mobile cart design"
    },
    applications: ["Operating Rooms", "ICU", "Emergency Departments", "Surgical Centers"]
  },
  {
    id: 5,
    name: "Mindray WATO EX-65 Pro Anesthesia Machine", 
    category: "Anesthesia Equipment",
    description: "Premium anesthesia workstation with advanced ventilation capabilities",
    detailedDescription: "The WATO EX-65 Pro represents the pinnacle of anesthesia technology, offering advanced ventilation modes, comprehensive monitoring, and intuitive operation for demanding clinical environments.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=500&h=400&fit=crop",
    price: "Contact for Quote",
    features: [
      "Advanced ventilation modes",
      "Comprehensive monitoring suite",
      "Intelligent alarm management", 
      "Ergonomic design",
      "Advanced gas delivery"
    ],
    specifications: {
      "Ventilation Modes": "VCV, PCV, SIMV, PSV",
      "Tidal Volume": "20mL - 1500mL",
      "Respiratory Rate": "4-100 bpm", 
      "Display": "19-inch touchscreen",
      "Gas Outlets": "Multiple configurations"
    },
    applications: ["Advanced Surgery", "Cardiac Surgery", "Pediatric Surgery", "Research Hospitals"]
  }
];

export const categories = [
  "All Products",
  "Sterilization Equipment", 
  "Large Sterilizers",
  "Autoclaves", 
  "Anesthesia Equipment"
];

export const testimonials = [
  {
    id: 1,
    name: "Dr. Sarah Kimani",
    role: "Chief Medical Officer",
    hospital: "Nairobi General Hospital",
    content: "Biotec Lab's sterilization equipment has significantly improved our infection control protocols. The reliability and efficiency are outstanding.",
    rating: 5
  },
  {
    id: 2, 
    name: "Prof. Michael Ochieng",
    role: "Laboratory Director",
    hospital: "University of Nairobi Medical School",
    content: "Their technical support and equipment quality have been instrumental in our research operations. Highly recommended for any medical facility.",
    rating: 5
  },
  {
    id: 3,
    name: "Dr. Grace Wanjiku", 
    role: "Practice Owner",
    hospital: "Karen Dental Clinic",
    content: "The autoclave systems from Biotec Lab are user-friendly and maintain consistent sterilization standards. Perfect for our dental practice.",
    rating: 5
  }
];

export const services = [
  {
    id: 1,
    title: "Equipment Installation",
    description: "Professional installation and setup of all laboratory equipment",
    icon: "Settings"
  },
  {
    id: 2,
    title: "Technical Support", 
    description: "24/7 technical support and maintenance services",
    icon: "Headphones"
  },
  {
    id: 3,
    title: "Training & Certification",
    description: "Comprehensive training programs for equipment operation",
    icon: "GraduationCap"
  },
  {
    id: 4,
    title: "Calibration Services",
    description: "Regular calibration and validation services",
    icon: "Gauge"
  }
];

export const companyInfo = {
  name: "Biotec Laboratories (K) Ltd",
  tagline: "We are here to make a difference",
  description: "Leading supplier of laboratory and medical equipment in Kenya, providing reliable sterilization solutions for healthcare facilities.",
  email: "info@bioteclabk.co.ke",
  phone: "+254 20 2xxx xxx",
  address: "Nairobi, Kenya",
  yearEstablished: "2010"
};
