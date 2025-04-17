export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "ecommerce-app",
    title: "Full Stack E-commerce App",
    description:
      "A complete online shopping platform with user authentication, product catalog, cart, and payment integration.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "MERN",
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    demoUrl: "https://example.com/ecommerce-demo",
    githubUrl: "https://github.com/aakashdhar/ecommerce-app",
  },
  {
    id: "auth-system",
    title: "Authentication System",
    description:
      "Secure authentication system using Firebase and OAuth with role-based access control.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Security",
    technologies: ["Firebase", "OAuth", "JWT", "React"],
    demoUrl: "https://example.com/auth-demo",
    githubUrl: "https://github.com/aakashdhar/auth-system",
  },
  {
    id: "microservices-kafka",
    title: "Microservices with Kafka",
    description:
      "Scalable microservices-based application with Apache Kafka for event-driven communication.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Microservices",
    technologies: ["Microservices", "Kafka", "Docker", "K8s"],
    demoUrl: "https://example.com/microservices-demo",
    githubUrl: "https://github.com/aakashdhar/microservices-kafka",
  },
  {
    id: "shopify-app",
    title: "Shopify Custom App",
    description:
      "Custom Shopify app integration for enhanced e-commerce functionality and management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "E-commerce",
    technologies: ["Shopify", "Node.js", "React", "GraphQL"],
    demoUrl: "https://example.com/shopify-demo",
    githubUrl: "https://github.com/aakashdhar/shopify-app",
  },
  {
    id: "remix-astro-site",
    title: "Remix & Astro Site",
    description:
      "Fast and SEO-friendly static site built with modern frameworks for optimal performance.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "JAMstack",
    technologies: ["Remix.js", "Astro.js", "Tailwind", "Markdown"],
    demoUrl: "https://example.com/remix-astro-demo",
    githubUrl: "https://github.com/aakashdhar/remix-astro-site",
  },
  {
    id: "realtime-dashboard",
    title: "Real-time Dashboard",
    description:
      "Interactive dashboard with real-time updates using WebSocket and Kafka integration.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Real-time",
    technologies: ["WebSocket", "Kafka", "React", "D3.js"],
    demoUrl: "https://example.com/dashboard-demo",
    githubUrl: "https://github.com/aakashdhar/realtime-dashboard",
  },
];
