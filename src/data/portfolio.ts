export const portfolioData = {
  personal: {
    name: "Subash V",
    title: "Full Stack Developer",
    email: "subashv2407@gmail.com",
    phone: "+91 6369608964",
    location: "Velachery, Chennai 600042",
    summary:
      "Full Stack Developer with 4.2 years of experience in designing, developing, and maintaining ERP and HRMS applications using Node.js, NestJS, React.js, Next.js, PostgreSQL, and MySQL. Experienced in building secure REST APIs, implementing JWT Authentication and Role-Based Access Control (RBAC), integrating third-party services, and optimizing database performance. Skilled in backend development, frontend integration, debugging, and production support. Passionate about building scalable business applications and continuously learning modern web technologies.",
  },

  experience: [
    {
      id: 1,
      position: "Team Lead - Backend Developer",
      company: "ABShrms",
      duration: "APR 2025 - MAR 2026",
      location: "Chennai",
      highlights: [
        "Developed and maintained ERP and HRMS modules using Node.js (NestJS), PostgreSQL, and MySQL.",
        "Built secure REST APIs with JWT Authentication and Role-Based Access Control (RBAC).",
        "Developed and maintained Employee Management, Asset Management, Offer Management, and Exit Management modules.",
        "Integrated third-party services including E-Invoice, E-Way Bill, Tally, and other REST APIs.",
        "Optimized database queries and improved API performance for enterprise workflows.",
        "Collaborated with frontend developers using React.js and Next.js for seamless frontend integration.",
        "Handled production support, debugging, bug fixing, and issue resolution."
      ],
    },
    {
      id: 2,
      position: "Backend Developer",
      company: "ABShrms",
      duration: "FEB 2024 - MAR 2025",
      location: "Chennai",
      highlights: [
        "Developed backend services and business logic using Node.js (NestJS) for ERP and HRMS applications.",
        "Designed and maintained REST APIs and supported frontend integration using React.js and Next.js.",
        "Developed and maintained Employee Management, Asset Management, Offer Management, and Exit Management modules.",
        "Resolved production issues and enhanced application stability and reliability.",
        "Improved database performance through query optimization and efficient data handling",
      ],
    },
    {
      id: 3,
      position: "Junior Software Developer",
      company: "Fourez Media Ventures Private Limited",
      duration: "NOV 2021 - OCT 2023",
      location: "Chennai",
      highlights: [
        "Developed CMS and Billing Management applications using PHP (Laravel) and MySQL.",
        "Built backend modules, REST APIs, and administrative functionalities.",
        "Worked on report generation, user management, database operations, and application maintenance.",
        "Resolved production issues, fixed bugs, and enhanced existing application features.",
        "Collaborated with frontend and QA teams during development, testing, and feature implementation."
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
    frontend: ["React.js (Next.js)", "JavaScript", "HTML5", "CSS","Bootstrap"],
    tools: [
      "Git",
      "Postman",
      "Swagger",
      "MySQL",
      "PostgreSQL"
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
      technologies: ["Node.js (NestJS)","Angular", "MySQL", "REST API"],
      highlights: ["Video metadata & scheduling management", "Role-based access for content teams", "Analytics dashboard for audience insights"],
    },
    {
      id: 4,
      title: "Billing System",
      description:
        "Built an end-to-end billing and invoicing platform for managing client subscriptions, generating invoices, tracking payments, and producing financial reports for business operations.",
      technologies: ["PHP (Laravel)", "MySQL", "REST API"],
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
