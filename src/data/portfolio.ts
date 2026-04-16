export const portfolioData = {
  personal: {
    name: "Subash V",
    title: "Full Stack Developer",
    email: "subashv2407@gmail.com",
    phone: "+91 6369608964",
    location: "Velachery, Chennai 600042",
    summary: "Results-driven Backend & Full Stack Developer with 4+ years ofexperience building scalable ERP and HRMS systems using Node.js (NestJS) and PHP (Laravel, CodeIgniter). Expertise in designing high-performance RESTful APIs, integrating third-party services, and optimizing backend systems for scalability and reliability. Proven Team Lead experienced in managing developers, improving system performance and delivering production-grade applications in Agile environments.",
  },
  
  experience: [
    {
      id: 1,
      position: "Team Lead - Backend Developer",
      company: "ABShrms",
      duration: "FEB 2024 - MAR 2025",
      location: "Chennai",
      highlights: [
          "Led a team to build scalable ERP and HRMS systems, improving operational efficiency.",
          "Designed and developed core HRMS modules including Offer Management, Exit Management, and Asset Tracking.",
          "Built and optimized backend services using Node.js (NestJS) and PHP frameworks.",
          "Developed secure and scalable RESTful APIs for enterprise applications.",
          "Integrated third-party APIs such as Tally, E-Invoice, and E-Waybill to streamline financial and compliance workflows.",
          "Improved system maintainability by implementing clean architecture and modular design principles.",
          "Collaborated with frontend teams using NextJs to deliver responsive and high-performance applications.",
          "Practiced Agile methodologies including sprint planning, code reviews, and daily stand-ups."
      ]
    },
    {
      id: 2,
      position: "Junior Software Developer",
      company: "Fourez Media Ventures Private Limited",
      duration: "NOV 2021 - OCT 2023",
      location: "Chennai",
      highlights: [
          "Developed and maintained billing systems and content management platforms.",
          "Built responsive UI components using HTML, CSS, and Bootstrap.",
          "Contributed to backend development using PHP frameworks including Laravel and CodeIgniter.",
          "Debugged and resolved production issues, improving application stability.",
          "Assisted in performance optimization and feature enhancements."
      ]
    }
  ],

  skills: {
    backend: ["PHP (Laravel,Codeigniter)", "Node.js (NestJS)", "TypeScript", "MySQL"],
    frontend: ["React (NextJs)", "JavaScript", "TypeScript", "HTML", "CSS", "NextJs"],
    tools: ["API Documentation (Swagger, Postman)", "MySQL", "Git"],
    // advanced: ["API Documentation (Swagger, Postman)", "RESTFUL API design", "Third party API (e-wayBill,E-invoice,Tally)"]
  },

  education: [
    {
      id: 1,
      degree: "B.Sc - Computer Technology",
      institution: "Erode Arts and Science College",
      duration: "2018 - 2021",
      location: "Erode",
      cgpa: "CGPA - 5.6",
    },
    {
      id: 2,
      degree: "Higher Secondary",
      institution: "Government Boys Higher Secondary School",
      duration: "April 2018",
      location: "Sankarapuram,Kallakurichi",
      percentage: "57%",
      aggregate: "April 2018"
    },
    {
      id: 3,
      degree: "Secondary School",
      institution: "St. Joseph Academy Matric Higher Secondary School",
      duration: "April 2016",
      location: "Sankarapuram,Kallakurichi",
      percentage: "78%",
      aggregate: "April 2016"
    }
  ],

  languages: ["English", "Tamil"],

  projects: [
    {
      id: 1,
      title: "ERP Management System",
      description: "Built a comprehensive Enterprise Resource Planning system with modules for sales,erection, and service modules, featuring multi-module architecture, real-time reporting, and role-based access control for efficient business operations.",
      technologies: ["Node.js (NestJS)", "MySQL", "React(NextJs)", "REST API"],
      highlights: ["Multi-module architecture", "Real-time reporting", "Role-based access control"]
    },
    {
      id: 2,
      title: "HRMS Application",
      description: "Developed Human Resource Management System featuring employee management, payroll processing, and leave management",
      technologies: ["Node.js (NestJS)", "MySQL", "React(NextJs)", "REST API"],
      highlights: ["Scalable microservices", "Automated workflows", "Advanced analytics dashboard"]
    },
    {
      id: 3,
      title: "YouTube Content Management System",
      description: "Developed a full-featured content management system for YouTube channel operations, enabling management of video metadata, scheduling, audience analytics, and content workflows for media teams.",
      technologies: ["PHP (Laravel)", "MySQL", "REST API"],
      highlights: ["Video metadata & scheduling management", "Role-based access for content teams", "Analytics dashboard for audience insights"]
    },
    {
      id: 4,
      title: "Billing System",
      description: "Built an end-to-end billing and invoicing platform for managing client subscriptions, generating invoices, tracking payments, and producing financial reports for business operations.",
      technologies: ["PHP (CodeIgniter)", "MySQL", "REST API"],
      highlights: ["Automated invoice generation", "Payment tracking & reconciliation", "Detailed financial reporting"]
    },
    {
      id: 5,
      title: "Third-party Integration Platform",
      description: "Integrated multiple third-party services including Tally, E-Invoice, and E-Waybill for seamless business operations",
      technologies: ["Node.js (NestJS)", "REST API"],
      highlights: ["Secure integration", "Error handling", "Transaction logging"]
    }
  ]
};
