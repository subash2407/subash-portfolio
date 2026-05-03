export const portfolioData = {
  personal: {
    name: "Subash V",
    title: "Full Stack Developer (Backend Focused)",
    email: "subashv2407@gmail.com",
    phone: "+91 6369608964",
    location: "Velachery, Chennai 600042",
    summary:
      "Backend-focused Full Stack Developer with 4+ years of experience building scalable ERP and HRMS systems using Node.js (NestJS) and React (Next.js). Experienced in leading development teams, designing high-performance REST APIs, and delivering multi-module business applications. Strong in microservices architecture, third-party integrations, and optimizing backend systems for reliability and performance.",
  },

  experience: [
    {
      id: 1,
      position: "Team Lead - Backend Developer",
      company: "ABShrms",
      duration: "APR 2025 - MAR 2026",
      location: "Chennai",
      highlights: [
        "Led a team of 6 developers, ensuring timely delivery of ERP modules and smooth sprint execution.",
        "Designed and developed scalable REST APIs using Node.js (NestJS) for ERP systems.",
        "Built and maintained multiple modules including Sales, Service, Installation, and Purchase.",
        "Integrated third-party services including E-invoicing, E-waybill, and Tally APIs.",
        "Optimized database queries and API performance, improving overall system responsiveness.",
        "Collaborated with frontend teams using React (Next.js) for seamless integration.",
        "Acted as the point of contact for technical decisions and cross-team coordination.",
      ],
    },
    {
      id: 2,
      position: "Backend Developer",
      company: "ABShrms",
      duration: "FEB 2024 - MAR 2025",
      location: "Chennai",
      highlights: [
        "Developed backend services using Node.js (NestJS) for ERP and HRMS modules.",
        "Designed REST APIs and supported frontend integration with React (Next.js).",
        "Developed and maintained modules including Sales, Offer Management, Exit/Resignation, and Asset Management.",
        "Resolved production issues and improved system stability and reliability.",
        "Enhanced database performance through query optimization.",
      ],
    },
    {
      id: 3,
      position: "Junior Software Developer",
      company: "Fourez Media Ventures Private Limited",
      duration: "NOV 2021 - OCT 2023",
      location: "Chennai",
      highlights: [
        "Developed web applications using PHP (Laravel) and MySQL.",
        "Built responsive user interfaces using HTML, CSS, and Bootstrap.",
        "Debugged and resolved issues to improve application performance.",
        "Assisted in backend development and feature enhancements.",
      ],
    },
  ],

  skills: {
    backend: [
      "Node.js (NestJS)",
      "Laravel",
      "PHP",
      "REST APIs",
      "Microservices",
      "MVC",
      "Sequelize",
      "Eloquent",
    ],
    frontend: ["React.js (Next.js)", "JavaScript", "TypeScript", "HTML5", "CSS"],
    tools: [
      "Git",
      "Postman",
      "Swagger",
      "MySQL",
      "PostgreSQL",
      "E-Invoice & E-Waybill APIs",
      "Tally ERP",
    ],
  },

  education: [
    {
      id: 1,
      degree: "BSc - Computer Technology",
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
      location: "Sankarapuram, Kallakurichi",
      percentage: "57%",
      aggregate: "April 2018",
    },
    {
      id: 3,
      degree: "Secondary School",
      institution: "St. Joseph Academy Matric Higher Secondary School",
      duration: "April 2016",
      location: "Sankarapuram, Kallakurichi",
      percentage: "78%",
      aggregate: "April 2016",
    },
  ],

  languages: ["English", "Tamil"],

  projects: [
    {
      id: 1,
      title: "ERP Management System",
      description:
        "Built a comprehensive Enterprise Resource Planning system with modules for sales, installation, and service, featuring multi-module architecture, real-time reporting, and role-based access control for efficient business operations.",
      technologies: ["Node.js (NestJS)", "MySQL", "React (Next.js)", "REST API"],
      highlights: ["Multi-module architecture", "Real-time reporting", "Role-based access control"],
    },
    {
      id: 2,
      title: "HRMS Application",
      description:
        "Developed Human Resource Management System featuring employee management, payroll processing, and leave management",
      technologies: ["Node.js (NestJS)", "MySQL", "React (Next.js)", "REST API"],
      highlights: ["Scalable microservices", "Automated workflows", "Advanced analytics dashboard"],
    },
    {
      id: 3,
      title: "YouTube Content Management System",
      description:
        "Developed a full-featured content management system for YouTube channel operations, enabling management of video metadata, scheduling, audience analytics, and content workflows for media teams.",
      technologies: ["PHP (Laravel)", "MySQL", "REST API"],
      highlights: ["Video metadata & scheduling management", "Role-based access for content teams", "Analytics dashboard for audience insights"],
    },
    {
      id: 4,
      title: "Billing System",
      description:
        "Built an end-to-end billing and invoicing platform for managing client subscriptions, generating invoices, tracking payments, and producing financial reports for business operations.",
      technologies: ["PHP (CodeIgniter)", "MySQL", "REST API"],
      highlights: ["Automated invoice generation", "Payment tracking & reconciliation", "Detailed financial reporting"],
    },
    {
      id: 5,
      title: "Third-party Integration Platform",
      description:
        "Integrated multiple third-party services including Tally, E-Invoice, and E-Waybill for seamless business operations",
      technologies: ["Node.js (NestJS)", "REST API"],
      highlights: ["Secure integration", "Error handling", "Transaction logging"],
    },
  ],
};
