export interface Skill {
  name: string;
  icon: string;
}

export const frontendSkills: Skill[] = [
  { name: "React.js", icon: "code" },
  { name: "Next.js", icon: "code" },
  { name: "Remix.js", icon: "code" },
  { name: "Astro.js", icon: "rocket" },
  { name: "TypeScript", icon: "fileType" },
  { name: "Tailwind CSS", icon: "paintBucket" },
  { name: "Redux", icon: "circleDashed" },
  { name: "Framer Motion", icon: "moveHorizontal" },
];

export const backendSkills: Skill[] = [
  { name: "Node.js", icon: "server" },
  { name: "Express.js", icon: "terminal" },
  { name: "Java", icon: "code" },
  { name: "Spring Boot", icon: "leaf" },
  { name: "RESTful APIs", icon: "network" },
  { name: "GraphQL", icon: "triangleRight" },
  { name: "Nest.js", icon: "nestJs" },
  { name: "Socket.io", icon: "plug" },
];

export const databaseSkills: Skill[] = [
  { name: "MongoDB", icon: "database" },
  { name: "PostgreSQL", icon: "database" },
  { name: "Firebase", icon: "flame" },
  { name: "Redis", icon: "database" },
  { name: "MySQL", icon: "database" },
  { name: "Mongoose", icon: "squareCode" },
];

export const devopsSkills: Skill[] = [
  { name: "Docker", icon: "boxes" },
  { name: "Kubernetes", icon: "circleDot" },
  { name: "CI/CD", icon: "infinity" },
  { name: "AWS", icon: "cloud" },
  { name: "GCP", icon: "cloud" },
  { name: "Nginx", icon: "server" },
  { name: "Jenkins", icon: "testTube" },
  { name: "GitHub Actions", icon: "github" },
];

export const architectureSkills: Skill[] = [
  { name: "Microservices", icon: "layers" },
  { name: "Kafka", icon: "messageSquare" },
  { name: "Event-Driven", icon: "arrowDownWideNarrow" },
  { name: "Serverless", icon: "cloudOff" },
  { name: "Clean Code", icon: "code2" },
  { name: "Design Patterns", icon: "scanner" },
];

export const otherSkills: Skill[] = [
  { name: "OAuth", icon: "shieldCheck" },
  { name: "Shopify", icon: "shoppingCart" },
  { name: "Stripe", icon: "creditCard" },
  { name: "Jest", icon: "testTube" },
  { name: "Git", icon: "git" },
  { name: "Agile", icon: "arrowUpCircle" },
];
