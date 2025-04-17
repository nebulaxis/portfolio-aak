export interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  description: string;
  skills: string[];
}

export const timelineItems: TimelineItem[] = [
  {
    period: "2022 - Present",
    title: "Full Stack Developer",
    organization: "Tech Solutions Inc.",
    description: "Working on end-to-end development of web applications using MERN stack (MongoDB, Express, React, Node.js). Implementing microservices architecture with Kafka for scalable solutions.",
    skills: ["React", "Node.js", "Microservices", "MongoDB", "Docker", "Kubernetes"],
  },
  {
    period: "2018 - 2022",
    title: "B.Tech",
    organization: "Arya College of Engineering & IT, Kukas",
    description: "Completed Bachelor's degree in Engineering with a focus on Computer Science and Information Technology. Gained strong foundation in algorithms, data structures, and software engineering principles.",
    skills: ["Computer Science", "Engineering", "Software Design", "Data Structures", "Algorithms"],
  },
  {
    period: "2021",
    title: "Full Stack & Data Science",
    organization: "Certification - Goedhub Technologies",
    description: "Completed comprehensive training in full stack development and data science. Gained hands-on experience with modern web technologies and data analysis techniques.",
    skills: ["Full Stack", "Data Science", "Web Development", "Data Analysis", "Machine Learning"],
  },
  {
    period: "2020",
    title: "Ethical Hacking Workshop",
    organization: "IIT Jodhpur",
    description: "Participated in an intensive workshop on ethical hacking and cybersecurity at IIT Jodhpur. Learned about penetration testing, security vulnerabilities, and ethical hacking methodologies.",
    skills: ["Ethical Hacking", "Cybersecurity", "Network Security", "Penetration Testing", "Security Analysis"],
  },
];
