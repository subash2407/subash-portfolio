export const portfolioData = {
  personal: {
    name: "Subash V",
    title: "Full Stack Developer",
    email: "subashv2407@gmail.com",
    phone: "+91 6369088964",
    location: "Velachery, Chennai 600042",
    summary: "Full Stack Developer with strong expertise in backend development using Node.js (NestJS) and PHP (Laravel), along with hands-on experience in frontend technologies like Next.js, JavaScript, HTML, and CSS. Skilled in building scalable ERP and HRMS systems, designing robust APIs, and delivering responsive user interfaces. Proven ability to develop end-to-end solutions and collaborate effectively in agile environments.",
  },
  
  experience: [
    {
      id: 1,
      position: "Team Lead - Backend Developer",
      company: "Arpit Informatics",
      duration: "FEB 2024 - MAR 2025",
      location: "Chennai",
      highlights: [
        "Led and mentored a team of backend developers, ensuring code quality and delivery of scalable ERP solutions",
        "Designed and developed HRMS modules including Sales, Electron, and Asset Management",
        "Built and maintained HRMS modules for Sales, Electron, and Asset Management",
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
    backend: ["PHP (Laravel)", "Node.js (NestJS)", "TypeScript", "MySQL"],
    frontend: ["React (NestJS)", "JavaScript", "TypeScript", "HTML", "CSS", "Next.js"],
    tools: ["React (NestJS)", "MySQL", "CRM (Sequeaze, TypeORM)", "Docker", "Git"],
    advanced: ["API Documentation (Swagger, Postman)", "RESTFUL API design", "Third party API (e-wayBill,E-invoice,Tally)"]
  },

  education: [
    {
      id: 1,
      degree: "B.Sc - Computer Technology",
      institution: "SRM Institute of Science and Technology",
      duration: "2018 - 2021",
      location: "Kattankulathur",
      cgpa: "CGPA - 5.6",
      aggregate: "2019 - 2021"
    },
    {
      id: 2,
      degree: "Higher Secondary",
      institution: "Sri Bhanu Benicia School",
      duration: "April 2018",
      location: "Kattankulathur",
      percentage: "72%",
      aggregate: "April 2018"
    },
    {
      id: 3,
      degree: "Secondary School",
      institution: "St. Joseph Academy Matric H Sec School",
      duration: "April 2016",
      location: "Kattankulathur",
      percentage: "73.8%",
      aggregate: "April 2016"
    }
  ],

  languages: ["English", "Tamil"],

  projects: [
    {
      id: 1,
      title: "ERP Management System",
      description: "Built a comprehensive Enterprise Resource Planning system with modules for sales, inventory, and finance management",
      technologies: ["Laravel", "MySQL", "Vue.js", "REST API"],
      highlights: ["Multi-module architecture", "Real-time reporting", "Role-based access control"]
    },
    {
      id: 2,
      title: "HRMS Application",
      description: "Developed Human Resource Management System featuring employee management, payroll processing, and leave management",
      technologies: ["Node.js (NestJS)", "React", "PostgreSQL", "TypeScript"],
      highlights: ["Scalable microservices", "Automated workflows", "Advanced analytics dashboard"]
    },
    {
      id: 3,
      title: "Third-party Integration Platform",
      description: "Integrated multiple third-party services including Tally, E-Invoice, and E-Waybill for seamless business operations",
      technologies: ["Node.js", "REST API", "Payment Gateway Integration"],
      highlights: ["Secure integration", "Error handling", "Transaction logging"]
    }
  ]
};
