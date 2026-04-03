export const portfolioData = {
  personal: {
    name: "Subash V",
    title: "Full Stack Developer",
    email: "subashv2407@gmail.com",
    phone: "+91 6369608964",
    location: "Velachery, Chennai 600042",
    summary: "Full Stack Developer with strong expertise in backend development using Node.js (NestJS) and PHP (Laravel,Codeigniter), along with hands-on experience in frontend technologies like Next.js, JavaScript, HTML, and CSS. Skilled in building scalable ERP and HRMS systems, designing robust APIs, and delivering responsive user interfaces. Proven ability to develop end-to-end solutions and collaborate effectively in agile environments.",
  },
  
  experience: [
    {
      id: 1,
      position: "Team Lead - Backend Developer",
      company: "ABShrms",
      duration: "FEB 2024 - MAR 2025",
      location: "Chennai",
      highlights: [
        "Led and mentored a team of backend developers, ensuring code quality and delivery of scalable ERP solutions",
        "Designed and developed HRMS modules including Exit/Resignation, Offer Management , and Asset Management",
        "Built and maintained HRMS modules for Sales, Erection, and Service",
        "Integrated third-party systems such as Tally, E-Invoice, and E-Waybill, streamlining business and financial workflows",
        "Collaborated closely with frontend teams using Next.js to deliver responsive and seamless user experiences",
        "Facilitated Agile practices including sprint planning, daily stand-ups, and retrospectives to ensure timely delivery"
      ]
    },
    {
      id: 2,
      position: "Junior Software Developer",
      company: "Fourez Media Ventures Private Limited",
      duration: "NOV 2021 - OCT 2023",
      location: "Chennai",
      highlights: [
        "Developed and maintained billing and content management systems",
        "Designed responsive user interfaces using HTML, CSS, and JavaScript",
        "Participated in debugging, performance optimization, and feature enhancements",
        "Worked with senior developers to resolve issues, improve code quality, and maintain application stability"
      ]
    }
  ],

  skills: {
    backend: ["PHP (Laravel,Codeigniter)", "Node.js (NestJS)", "TypeScript", "MySQL"],
    frontend: ["React (Next.js)", "JavaScript", "TypeScript", "HTML", "CSS", "Next.js"],
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
      technologies: ["Node.js (NestJS)", "MySQL", "React(Next.js)", "REST API"],
      highlights: ["Multi-module architecture", "Real-time reporting", "Role-based access control"]
    },
    {
      id: 2,
      title: "HRMS Application",
      description: "Developed Human Resource Management System featuring employee management, payroll processing, and leave management",
      technologies: ["Node.js (NestJS)", "MySQL", "React(Next.js)", "REST API"],
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
      technologies: ["Node.js", "REST API"],
      highlights: ["Secure integration", "Error handling", "Transaction logging"]
    }
  ]
};
