export const heroData = {
  name: "Md. Zahid",
  title: "BCA Final Year Student | Data Analytics Enthusiast",
  tagline: "Transforming Data into Meaningful Insights with Analytics and AI",
  shortIntro: "Passionate about revealing hidden patterns in complex datasets, building intuitive interactive dashboards, and leveraging machine learning to solve high-impact business problems.",
  contactEmail: "zmd299807@gmail.com",
  contactPhone: "8340414350",
  githubUrl: "https://github.com/mdzahid6551",
  linkedinUrl: "https://linkedin.com/in/md-zahid",
  location: "Lucknow, India",
  stats: [
    { label: "Projects Completed", value: 12, suffix: "+" },
    { label: "Analytics Tools", value: 8, suffix: "+" },
    { label: "Certifications", value: 5, suffix: "" },
    { label: "Model Accuracy", value: 96, suffix: "%" },
  ]
};

export const aboutData = {
  education: "Bachelor of Computer Applications (BCA) - Final Year Student",
  focusAreas: ["Data Analytics", "AI & Machine Learning", "Business Intelligence", "Data Visualization"],
  careerObjective: "Passionate and detail-oriented BCA Final Year student aspiring to step into a challenging role in Data Analytics, Business Intelligence, or AI-driven data solutions. Eager to leverage data transformation, SQL querying, Python analytics, and interactive dashboards to translate raw data into actionable strategic value for growth-focused organizations.",
  strengths: [
    {
      title: "Analytical Thinking",
      desc: "Deconstructing complex datasets to discover root causes, patterns, and trend anomalies.",
      icon: "Brain"
    },
    {
      title: "Problem Solving",
      desc: "Formulating data-backed algorithmic solutions to tackle practical business metrics.",
      icon: "Lightbulb"
    },
    {
      title: "Data Storytelling",
      desc: "Translating technical statistical outputs into compelling executive visuals and narratives.",
      icon: "BarChart3"
    },
    {
      title: "Team Collaboration",
      desc: "Working seamlessly with cross-functional groups, engineers, and stakeholders.",
      icon: "Users"
    },
    {
      title: "Continuous Learning",
      desc: "Relentlessly expanding knowledge across cutting-edge AI models, DAX formulas, and cloud databases.",
      icon: "Zap"
    }
  ]
};

export const skillsData = {
  programming: [
    { name: "Python", level: 92, category: "Data Science & Scripting" },
    { name: "SQL", level: 90, category: "Database Queries" },
    { name: "Java", level: 78, category: "OOP Fundamentals" },
    { name: "JavaScript", level: 75, category: "Web Interactivity" },
    { name: "C / C++", level: 80, category: "Core Logic" },
  ],
  analyticsTools: [
    { name: "Pandas", level: 95 },
    { name: "NumPy", level: 92 },
    { name: "Matplotlib", level: 88 },
    { name: "Seaborn", level: 88 },
    { name: "Power BI", level: 92 },
    { name: "Excel", level: 95 },
    { name: "Google Sheets", level: 90 },
  ],
  databases: [
    { name: "MySQL", level: 90 },
    { name: "PostgreSQL", level: 85 },
  ],
  otherSkills: [
    { name: "Data Cleaning & Prep", level: 95 },
    { name: "Data Visualization", level: 92 },
    { name: "Statistical Analysis", level: 88 },
    { name: "Dashboard Development", level: 94 },
    { name: "Reporting & Insights", level: 90 },
    { name: "Machine Learning Basics", level: 82 },
  ]
};

export const projectsData = [
  {
    id: 1,
    title: "Student Result Analysis Dashboard",
    shortDesc: "Comprehensive performance dashboard analyzing academic grades, subject trends, and identifying student drop-off risks.",
    fullDesc: "Designed an end-to-end result analytics dashboard for educational institutions. Processes multi-semester student dataset to visualize GPA distribution, pass/fail ratios, subject-wise difficulty indexes, and automated grade forecasting.",
    category: "Business Intelligence",
    tech: ["Power BI", "Python", "Pandas", "SQL", "Seaborn"],
    github: "https://github.com/mdzahid6551/student-result-analytics",
    liveDemo: "https://github.com/mdzahid6551/student-result-analytics",
    chartType: "bar",
    chartData: [
      { name: "DBMS", AvgScore: 84, Target: 75 },
      { name: "Python", AvgScore: 91, Target: 75 },
      { name: "Stats", AvgScore: 78, Target: 75 },
      { name: "Data Struct", AvgScore: 82, Target: 75 },
      { name: "AI Basics", AvgScore: 88, Target: 75 }
    ],
    highlights: ["Processed 2,500+ student grade records", "Reduced grade verification reporting time by 60%", "Identified top 5 risk factors in core math subjects"]
  },
  {
    id: 2,
    title: "Sales Performance Analytics Dashboard",
    shortDesc: "Interactive sales intelligence suite calculating revenue growth, product margin optimization, and regional sales KPIs.",
    fullDesc: "Built an executive-level sales analytics system to evaluate quarterly revenue metrics, regional revenue distribution, profit margins, and sales rep performance across multiple product lines.",
    category: "Data Analytics",
    tech: ["Excel", "Power BI", "SQL", "Python", "Matplotlib"],
    github: "https://github.com/mdzahid6551/sales-performance-analytics",
    liveDemo: "https://github.com/mdzahid6551/sales-performance-analytics",
    chartType: "area",
    chartData: [
      { name: "Q1", Revenue: 45000, Profit: 12000 },
      { name: "Q2", Revenue: 58000, Profit: 17500 },
      { name: "Q3", Revenue: 72000, Profit: 24000 },
      { name: "Q4", Revenue: 95000, Profit: 32500 }
    ],
    highlights: ["Analyzed $270K+ in transaction volume", "Dynamic DAX measures for YoY growth tracking", "Segmented customer cohorts by purchase frequency"]
  },
  {
    id: 3,
    title: "College Attendance Analytics System",
    shortDesc: "Automated student attendance tracking & anomaly detection system with instant alert summaries.",
    fullDesc: "Developed an intelligent database system and visual reporting portal that monitors daily student attendance, highlights absenteeism trends, and forecasts attendance eligibility for semester examinations.",
    category: "AI & Dashboards",
    tech: ["Python", "MySQL", "Pandas", "Plotly", "Streamlit"],
    github: "https://github.com/mdzahid6551/college-attendance-system",
    liveDemo: "https://github.com/mdzahid6551/college-attendance-system",
    chartType: "line",
    chartData: [
      { name: "Mon", Attendance: 94 },
      { name: "Tue", Attendance: 91 },
      { name: "Wed", Attendance: 88 },
      { name: "Thu", Attendance: 95 },
      { name: "Fri", Attendance: 82 }
    ],
    highlights: ["Automated weekly absent report generation", "Created SQL stored procedures for rapid attendance aggregation", "Clean user interface with Streamlit & Plotly charts"]
  },
  {
    id: 4,
    title: "Customer Segmentation using Python",
    shortDesc: "Unsupervised Machine Learning model using K-Means Clustering to group shoppers by spend profile.",
    fullDesc: "Implemented K-Means clustering and Principal Component Analysis (PCA) on retail customer behavioral data. Clustered customers into high-value, casual, and deal-seeker segments to drive targeted marketing campaigns.",
    category: "Machine Learning",
    tech: ["Python", "Scikit-Learn", "NumPy", "Pandas", "Seaborn"],
    github: "https://github.com/mdzahid6551/customer-segmentation-ml",
    liveDemo: "https://github.com/mdzahid6551/customer-segmentation-ml",
    chartType: "pie",
    chartData: [
      { name: "High Spenders", value: 35 },
      { name: "Loyal Regulars", value: 40 },
      { name: "Deal Seekers", value: 25 }
    ],
    highlights: ["Optimal cluster count calculated using Elbow Method & Silhouette Scores", "Identified key buyer segment driving 55% total profits", "Visualized 2D/3D feature clusters"]
  },
  {
    id: 5,
    title: "Data Visualization Dashboard using Power BI",
    shortDesc: "Modern dark-themed executive reporting dashboard featuring interactive DAX slicers and forecasting metrics.",
    fullDesc: "Constructed a polished Power BI business dashboard featuring complex DAX calculations, visual hierarchy, parameter switching, and automated forecast trends for operational efficiency.",
    category: "Business Intelligence",
    tech: ["Power BI", "DAX", "Power Query", "PostgreSQL"],
    github: "https://github.com/mdzahid6551/powerbi-executive-dashboard",
    liveDemo: "https://github.com/mdzahid6551/powerbi-executive-dashboard",
    chartType: "bar",
    chartData: [
      { name: "North", Target: 100, Actual: 112 },
      { name: "South", Target: 100, Actual: 98 },
      { name: "East", Target: 100, Actual: 125 },
      { name: "West", Target: 100, Actual: 108 }
    ],
    highlights: ["Custom neon dark theme matching executive requirements", "Multi-table star schema data modeling", "Published interactive web report embedding"]
  }
];

export const experienceData = [
  {
    role: "Data Analytics Intern",
    company: "Tech Analytics Corp",
    type: "Internship (Remote)",
    duration: "Jun 2024 - Aug 2024",
    location: "Remote",
    description: [
      "Extracted, cleaned, and transformed raw structured data from MySQL databases containing over 100,000+ records using Python Pandas and SQL queries.",
      "Built 5+ production-grade Power BI dashboards for cross-departmental teams, streamlining weekly performance reporting by 40%.",
      "Performed Exploratory Data Analysis (EDA) to uncover sales patterns and operational bottlenecks, presenting key findings to senior leadership."
    ]
  },
  {
    role: "Academic Project Lead - Analytics Capstone",
    company: "BCA Department",
    type: "Academic Project",
    duration: "Sep 2024 - Present",
    location: "Lucknow",
    description: [
      "Leading a team of 4 students in constructing an AI-driven academic trend analytics and prediction suite.",
      "Optimized complex SQL join queries and database indexing to reduce report generation latency by 50%.",
      "Conducted interactive peer workshops on Data Visualization using Python Seaborn and Power BI."
    ]
  },
  {
    role: "Freelance Analytics & Dashboard Specialist",
    company: "Self-Employed",
    type: "Freelance",
    duration: "2024 - Present",
    location: "Lucknow / Remote",
    description: [
      "Delivered customized Excel and Power BI reporting dashboards for local business clients to track revenue metrics and stock inventory.",
      "Automated spreadsheet workflows with Python scripts and Google Sheets API integration."
    ]
  }
];

export const certificationsData = [
  {
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    date: "2024",
    skills: ["Data Analysis", "SQL", "R Programming", "Tableau", "Data Cleaning"],
    icon: "Award",
    verified: true
  },
  {
    title: "Microsoft Power BI Data Analyst",
    issuer: "Microsoft",
    date: "2024",
    skills: ["Power BI", "DAX", "Data Modeling", "Power Query", "Dashboarding"],
    icon: "ShieldCheck",
    verified: true
  },
  {
    title: "Python for Data Science & AI",
    issuer: "IBM",
    date: "2024",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Web Scraping"],
    icon: "Code",
    verified: true
  },
  {
    title: "SQL for Data Analysis Masterclass",
    issuer: "Udemy / DataCamp",
    date: "2023",
    skills: ["PostgreSQL", "MySQL", "Complex Joins", "Subqueries", "Window Functions"],
    icon: "Database",
    verified: true
  },
  {
    title: "Excel Analytics & Business Intelligence",
    issuer: "Coursera",
    date: "2023",
    skills: ["Pivot Tables", "VLOOKUP/XLOOKUP", "Power Pivot", "VBA Basics", "Financial Modeling"],
    icon: "FileSpreadsheet",
    verified: true
  }
];

export const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Integral University / BCA Final Year",
    period: "2022 - 2025 (Expected)",
    status: "Final Year Student",
    cgpa: "8.8 / 10",
    coursework: [
      "Data Analytics",
      "Database Management Systems (DBMS)",
      "Statistics & Probability",
      "Machine Learning Fundamentals",
      "Business Intelligence",
      "Object-Oriented Programming (Java/Python)",
      "Data Structures & Algorithms"
    ]
  }
];

export const achievementsData = [
  {
    title: "Academic Distinction in Data & DB Courses",
    category: "Academic",
    desc: "Achieved top academic grade percentile in Database Management Systems, Data Structures, and Data Analytics modules.",
    icon: "Trophy"
  },
  {
    title: "1st Runner Up - Data Science Hackathon 2024",
    category: "Hackathon",
    desc: "Developed a predictive traffic congestion model using Python and Random Forest Regression during a 24-hour analytics sprint.",
    icon: "Medal"
  },
  {
    title: "5+ Industry Analytics Certifications",
    category: "Certification",
    desc: "Successfully earned recognized credentials from Google, Microsoft, IBM, and Udemy.",
    icon: "CheckCircle2"
  },
  {
    title: "Open-Source Visualization Templates",
    category: "Community",
    desc: "Contributed reusable Power BI color themes and Python Seaborn charting helpers for student developers.",
    icon: "GitBranch"
  }
];
