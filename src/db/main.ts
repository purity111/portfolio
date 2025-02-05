import kLearnImg from "../../public/images/klearn.png";
import talentImg from "../../public/images/hrms1.png";
import myImage from "../../public/images/mimori.png";
import corporateImg from "../../public/images/corporate1.png";
import medicalImg from "../../public/images/dashboard.png";
import amsImg from "../../public/images/ams.png";

export const heroData = {
  img: myImage,
  hi: "Hello! I am",
  name: "Mimori Okamoto",
  expertise: ["Frontend Engineer", "Backend Engineer"],
  about: [
    "Dynamic and results-driven Software Engineer with over 7 years of experience specializing in FE and full-stack development.",
    "Proven expertise in leveraging modern JavaScript frameworks alongside BE technologies including Node.js, Python, ASP.NET, and PHP.",
    "Strong understanding of software development methodologies, including Agile and DevOps practices, with hands-on experience in CI/CD pipelines, version control (Git), and automated testing frameworks.",
    "Passionate about code quality and best practices, with a commitment to continuous learning and staying updated with emerging technologies."
  ].join('\n'),
  btnText: "Get my resume",
};

export const aboutData = {
  title: "Work Experience",
  cards: [
    {
      title: "Creative Heroes Inc.",
      subTitle: "(2017.11~2020.3) - Japan",
      text: "Worked as a front-end engineer. This is the first company that my Engineering Career has launched. I first used Next.js and Typescript here.",
    },
    {
      title: "E Solutions Webbers",
      subTitle: "(2020.5~2023.2) - Malaysia",
      text: "Joined as a front-end engineer first. Then I participated in several projects and after all I became a full-stack engineer! I have participated in projects using Agile Methodology.",
    },
    {
      title: "SB Works",
      subTitle: "(2023.3~2024.11) - Japan",
      text: "With 5+ years of experience, I played an important role in this company. I was both a full-stack engineer and a lead engineer. Used React.js mainly and touched various technologies and skills",
    },
  ],
};

export const universityData = {
  title: "University",
  cards: [
    {
      title: "Bachelor of Information Science (2014~2017)",
      text: "Kyoto Institute of Technology",
    },
  ],
};

export const SkillsData = {
  title: "Skills",
  categories: [
    {
      title: "Language",
      skills: [
        "HTML5",
        "Javascript",
        "Typescript",
        "PHP",
        "Python",
        "C#",
      ],
    },
    {
      title: "Front End",
      skills: [
        "React",
        "Vue.js",
        "Angular.js",
        "jQuery",
        "React Native",
        "Redux",
        "jQuery",
        "Vuex",
        "Material UI",
        "Ant Design",
      ],
    },
    {
      title: "Back End",
      skills: [
        "Express.js",
        "Laravel",
        "Nest.js",
        "Django",
        "Flask",
        "CakePHP",
        "GraphQL",
        "ASP.NET Core",
        "Restful API",
        "FastAPI"
      ],
    },
    {
      title: "Database",
      skills: [
        "MySQL",
        "MongoDB",
        "Firebase",
        "PostgrSQL",
        "SQL Server"    
      ],
    },
    {
      title: "Styling & Design",
      skills: [
        "SCSS",
        "BootStrap",
        "Tailwind CSS",
        "Styled-Components",
      ],
    },
    {
      title: "Other Skills",
      skills: [
        "Git",
        "Agile(Scrum)",
        "RAG",
        "GenAI",
        "ElasticSearch",
        "Jira",
        "Trello",
        "Backlog",
        "Jest",
        "WebRTC",
        "Docker",
        "AWS",
        "Kubernetes",
        "Heroku",
      ],
    }
  ],
};

export const contactData = {
  title: "Want To",
  cards: [
    {
      title: "offer job opportunity?",
      text: "I am actively seeking full-remote contract opportunities in web development and software engineering. I am excited to contribute my skills to dynamic teams. If you have a project or role that aligns with these interests, I would love to connect and discuss how I can add value to your team!",
    },
    {
      title: "Connect?",
      text: "Networking is essential in the tech industry, and I'm eager to connect with professionals who can help me expand my opportunities. Whether you're a developer, team leader, or CEO, I would love to chat about your work and any potential opportunities you might be aware of.",
    },
    {
      title: "Build something?",
      text: "I have a passion for developing innovative web applications that solve complex problems. Whether it's building a EC site, Corporate site or any kind of cutting-edge web app, I'm always ready for a new challenge. Let's create something amazing together!",
    },
  ],
  links: [
    {
      label: "Email",
      url: "mailto:mimoriokamoto@gmail.com",
    },
    {
      label: "GitHub",
      url: "https://github.com/purity111",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/mimori-okamoto-215245297/",
    },
    {
      label: "Resume",
      url: "/Docs/portfolio.pdf",
    },
  ],
};

export const ProjectsData = {
  title: "Top Projects",
  Projects: [
    {
      name: "Attendance Management System",
      image: amsImg,
      technologies: [
        "TypeScript",
        "React",
        "Django",
        "Restful API",
        "ElasticSearch",
        "TailwindCss",
      ],
      description:
        "This is an advanced student and attendance management system for any type of organization with the need of the similar system.",
      demoUrl: "",
      codeUrl: "https://github.com/purity111/AMS-react_django",
    },
    {
      name: "Online Medical System",
      image: medicalImg,
      technologies: [
        "React",
        "Nest.js",
        "WebRTC",
        "Socket.io",
      ],
      description:
        "AI-powered medical consultant platform designed to enhance healthcare efficiency, accessibility, and quality.",
      demoUrl: "",
      codeUrl: "https://github.com/purity111/medical-consulting",
    },
    {
      name: "K-Learn Student Management App",
      image: kLearnImg,
      technologies: [
        "Node.js",
        "React Native",
        "Firebase",
        "Stripe",
      ],
      description:
        "KLearn is a super intuitive and easy to use application which helps teachers and parents systematically track and better manage the educational progress of the students. ",
      demoUrl: "https://www.esolutionswebbers.com/school-management-application-software.html",
      codeUrl: "https://github.com/purity111/Student-MS-React-Native",
    },
    {
      name: "e-Talent Management System",
      image: talentImg,
      technologies: [
        "TypeScript",
        "Nuxt.js",
        "Laravel",
        "Agile",
      ],
      description:
        "Bookie is a modern e-commerce platform designed exclusively for book lovers. It offers a diverse collection of books across various genres, creating an immersive online bookstore experience. With its sleek and contemporary design, Bookie provides a visually appealing platform for browsing and discovering captivating titles.",
      demoUrl: "https://www.esolutionswebbers.com/talent-management-software.html",
      codeUrl: "https://github.com/purity111/HRMS-Nuxt-Laravel",
    },
    {
      name: "Plural Sight Cloud",
      image: corporateImg,
      technologies: [
        "TypeScript",
        "Next.js",
        "Express.js",
        "Python",
      ],
      description:
        "Newly added courses for cloud services such as AWS, Azure, GCP, Terraform, Devops of Plural Sight",
      demoUrl: "https://www.pluralsight.com/cloud-guru",
      codeUrl: "https://github.com/purity111/corporate-next.js",
    }
  ],
};
