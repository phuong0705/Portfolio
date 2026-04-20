// portfolio.ts

export const PORTFOLIO_DATA = {
  name: "Trần Thanh Phương",
  title: "Information Technology Graduate | Management Information Systems",
  targetRole: "Software Engineer / Full-stack Developer / Web Developer",
  shortIntro: "I am a recent Information Technology graduate with a specialization in Management Information Systems. I have hands-on experience building web and mobile applications through academic and personal projects. My main technical strengths include JavaScript, TypeScript, Node.js, Express.js, React, React Native, RESTful APIs, MongoDB, and SQL Server. I am looking for an opportunity to contribute to real-world products, continue learning, and grow as a software engineer.",
  
  contact: {
    email: "thanhphuongtranit@gmail.com",
    github: "https://github.com/your-username",
    linkedin: "https://linkedin.com/in/your-username",
    phone: "0345585008",
  },

  skills: {
    Languages: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
    Frontend: ["React.js", "React Native", "Expo", "Tailwind CSS", "Bootstrap", "EJS"],
    Backend: ["Node.js", "Express.js", "RESTful API", "Socket.IO"],
    Databases: ["MongoDB", "SQL Server"],
    Security: ["JWT Authentication", "Session Authentication", "Role-based Access Control", "CSRF Protection"],
    Tools: ["Git", "GitHub", "Docker", "Postman"],
    Architecture: ["MVC Architecture", "Repository Pattern", "Service Layer"],
  },

  projects: [
    {
      id: "smart-student",
      title: "Smart Student Management System with Learning Analytics",
      role: "Full-stack Developer",
      techStack: ["Node.js", "Express.js", "EJS", "JavaScript", "CSS", "SQL Server"],
      description: "Developed a web-based student management system with a focus on learning analytics, helping track academic progress and early detection of at-risk students.",
      keyFeatures: [
        "Authentication, RBAC, student management, course enrollment.",
        "Grade management, class schedule, subject registration rules.",
        "Learning analytics dashboards tracking GPA and risk levels."
      ],
      challengesSolved: "Implemented complex subject registration rules and early warning system algorithms using SQL stored procedures and JavaScript logic.",
      demoUrl: "#",
      githubUrl: "https://github.com/phuong0705/SSMS",
      image: "/placeholder-student.jpg"
    },
    {
      id: "shopvn",
      title: "ShopVN – Multi-vendor E-Commerce Platform",
      role: "Full-stack Developer",
      techStack: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
      description: "A full-stack multi-vendor e-commerce platform allowing sellers to manage their own shops and buyers to purchase products.",
      keyFeatures: [
        "User authentication, seller registration, product management.",
        "Shopping cart, wishlist, checkout, order tracking.",
        "Coupons, flash sales, product reviews, and search suggestions.",
        "Real-time chat and notifications using Socket.IO.",
        "Admin and Seller dashboards with RBAC."
      ],
      challengesSolved: "Handled real-time inventory updates and concurrency issues during flash sales, implemented secure payment logic.",
      demoUrl: "#",
      githubUrl: "https://github.com/phuong0705/CloneShopee",
      image: "/placeholder-ecommerce.jpg"
    },
    {
      id: "habit-app",
      title: "Need A Reason To Go Out – Habit & Motivation Mobile App",
      role: "Mobile App Developer",
      techStack: ["React Native", "Expo", "TypeScript", "Node.js", "Express.js", "SQL Server"],
      description: "A mobile application designed to encourage users to go outside through personalized challenges, mood tracking, and daily journals.",
      keyFeatures: [
        "Authentication, smart reminders, profile preferences.",
        "Journal sync, weather-aware suggestions, dark mode.",
        "Admin account management."
      ],
      challengesSolved: "Integrated third-party weather APIs seamlessly to trigger contextual suggestions based on current weather conditions.",
      demoUrl: "#",
      githubUrl: "https://github.com/phuong0705/AppReactNativeTypeScript",
      image: "/placeholder-app.jpg"
    }
  ],

  experience: [
    {
      id: "edu",
      title: "Information Technology (Management Information Systems)",
      company: "University Name",
      duration: "2023 - 2027",
      description: "Graduated with a focus on Management Information Systems. Completed coursework in software engineering, database design, and systems analysis."
    },
    {
      id: "proj1",
      title: "Hands-on Project Experience",
      company: "Academic & Personal Projects",
      duration: "2022 - Present",
      description: "Continuously applying learning into practice by building full-stack applications, exploring different architectures (MVC, Service Layer) and deploying projects."
    }
  ],
  
  languages: [
    { language: "English", level: "TOEIC 500" },
    { language: "Vietnamese", level: "Native" }
  ]
};
