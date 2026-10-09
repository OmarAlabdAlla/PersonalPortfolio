import { PortfolioData } from "../shared/schema";

export interface IStorage {
  getPortfolioData(): Promise<PortfolioData>;
}

// In-memory storage with Omar's CV data
export class MemStorage implements IStorage {
  private portfolioData: PortfolioData = {
    personalInfo: {
      name: "Omar Alabdalla",
      title: "Computer Science and Data Science Student",
      phone: "0704802532",
      email: "Omar.alabdalla87@yahoo.com",
      linkedin: "https://www.linkedin.com/in/omar-alabdalla-4b5571148",
      summary: "I am a resourceful, self-driven problem-solver known for punctuality, accuracy, and flexibility. I thrive under pressure, take initiative, and aim to apply my skills to benefit the organization, excelling in both team and independent work.",
      photo: "/assets/profile.jpg"
    },
    experience: [
      {
        id: "1",
        company: "The Swedish Prison and Probation Service: National Transport Unit (NTE), Gothenburg",
        position: "Transport Officer",
        duration: "Jun 2023 - Aug 2023, Jun 2024 - Aug 2024",
        responsibilities: [
          "Managed the safe transport of detainees",
          "Oversaw surveillance during trials and hospital visits"
        ],
        achievements: [
          "Improved attention to detail and security",
          "Gained deeper insights into legal processes, conflict resolution, and teamwork in the justice system"
        ]
      },
      {
        id: "2",
        company: "Intize",
        position: "Mathematics Mentor",
        duration: "Oct 2023 - Jun 2024",
        responsibilities: [
          "Mentored high school students in mathematical concepts",
          "Improved problem-solving skills of students",
          "Supported exam preparation and boosted student confidence"
        ],
        achievements: [
          "Contributed to a non-profit initiative focused on enhancing mathematical abilities"
        ]
      },
      {
        id: "3",
        company: "Ånge Kommun/Västernorrland",
        position: "Study Counselor and Native Language Teacher",
        duration: "Aug 2015 – Present",
        responsibilities: [
          "Supported and guided students across all subjects",
          "Ensured student understanding and progress"
        ],
        achievements: [
          "Enhanced pedagogical skills including lesson planning and instructional strategies",
          "Effectively engaged students through improved teaching methods"
        ]
      }
    ],
    education: [
      {
        id: "1",
        institution: "Chalmers University of Technology, Gothenburg",
        degree: "Data Science and AI, Master of Science in Engineering",
        duration: "Aug 2024 – Present",
        description: "Expected graduation in June 2026",
        coursework: [
          "Introduction to Data Science and AI",
          "Nonlinear Optimization",
          "Image processing"
        ]
      },
      {
        id: "2",
        institution: "Chalmers University of Technology, Gothenburg",
        degree: "BSc in Computer Science and Engineering",
        duration: "Aug 2021 - June 2024",
        gpa: "4.4/5",
        coursework: [
          "Linear Algebra",
          "Calculus",
          "Mathematical Statistics and Discrete Mathematics",
          "Multivariable Calculus",
          "Computer Science and Engineering Project",
          "Digital Design",
          "Machine-Oriented Programming",
          "Object-Oriented Programming",
          "Functional Programming",
          "Parallel Programming (TA)",
          "Data Structures & Algorithms (TA)",
          "Transforms, Signals, and Systems",
          "Control Theory"
        ]
      },
      {
        id: "3",
        institution: "Aleppo University, Aleppo, Syria",
        degree: "The law program",
        duration: "Aug 2004 - Jul 2009",
        description: "Equivalent to 2 years of study in the Faculty of Law"
      },
      {
        id: "4",
        institution: "Abd al-Rahman al-Kawakibi/Aleppo, Syria",
        degree: "High School Scientific Track",
        duration: "Completed",
        description: "General Secondary Education Certificate, Scientific Section"
      }
    ],
    projects: [
      {
        id: "1",
        title: "Automatic Sun Tracking Solution for Optimal Energy Production",
        description: "Bachelor's Thesis project developing a dual-axis solar tracker system to automatically follow the sun for optimal photovoltaic energy production.",
        technologies: ["Microcontroller Programming", "Sensor Integration", "Solar Energy Systems", "System Calibration"],
        achievements: [
          "Designed system for precise horizontal and vertical adjustments to maximize sun exposure",
          "Improved energy efficiency through automated tracking",
          "Analyzed and compared energy output against stationary solar panels",
          "Addressed technical challenges related to sensor accuracy and microcontroller integration"
        ]
      },
      {
        id: "2",
        title: "Volvo Cars: Waste Data Visualization and Reporting Project",
        description: "Collaborated with Volvo Cars on waste management optimization at Torslanda facility.",
        technologies: ["Data Analysis", "Data Visualization", "KPI Development", "Interactive Mapping"],
        achievements: [
          "Applied innovative visualizations to enhance sustainability practices",
          "Developed interactive maps for waste management",
          "Created targeted improvement reports",
          "Enhanced Key Performance Indicators (KPIs) for sustainability"
        ]
      },
      {
        id: "3",
        title: "Security System Project",
        description: "Developed a comprehensive security system using MD-407 microcontrollers connected via Controller Area Network (CAN-bus).",
        technologies: ["Microcontroller Programming", "CAN-bus Protocol", "Network Communication", "Security Systems"],
        achievements: [
          "Designed central unit and multiple peripherals",
          "Demonstrated proficiency in microcontroller-based device communication",
          "Created effective security and locking mechanism"
        ]
      }
    ],
    skills: [
      {
        category: "Programming Languages",
        skills: ["Python", "Java", "C", "C#", "C++", "VHDL", "Assembly", "Matlab", "Haskell"]
      },
      {
        category: "Tools & Technologies",
        skills: ["GitHub", "Fusion 360", "3D Printing"]
      }
    ],
    languages: [
      {
        language: "Swedish",
        proficiency: "Fluent in speaking, reading, and writing"
      },
      {
        language: "English",
        proficiency: "Proficient in spoken and written communication"
      },
      {
        language: "Arabic",
        proficiency: "Native language, fluent in speaking and writing"
      }
    ],
    references: [
      {
        id: "1",
        name: "PhD Håkan Burden",
        title: "Chalmers University of Technology",
        phone: "031-7724812",
        email: "hakan.bruden@ri.se"
      },
      {
        id: "2",
        name: "Paul Pakkala",
        title: "Rektor/Ånge Kommun",
        phone: "0761380642",
        email: "paul.pakkala@ange.se"
      },
      {
        id: "3",
        name: "Katrinne Bylund",
        title: "Rektor Gnarps skola/Nordanstigs kommun",
        phone: "076–2005212",
        email: "katrinne@live.se"
      }
    ]
  };

  async getPortfolioData(): Promise<PortfolioData> {
    return this.portfolioData;
  }
}