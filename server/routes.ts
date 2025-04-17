import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail } from "./services/email.service";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Send email
      await sendEmail({
        to: "aakash@example.com", // Replace with actual email
        subject: `Portfolio Contact: ${validatedData.subject}`,
        text: `
          Name: ${validatedData.name}
          Email: ${validatedData.email}
          
          Message:
          ${validatedData.message}
        `,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <h4>Message:</h4>
          <p>${validatedData.message}</p>
        `
      });
      
      res.status(200).json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: "Invalid form data", errors: error.errors });
      }
      
      console.error("Error sending message:", error);
      res.status(500).json({ success: false, message: "Failed to send message" });
    }
  });

  // Resume download endpoint
  app.get("/api/resume", (req, res) => {
    // In a real implementation, this would send the actual resume file
    // For now, we'll just send a placeholder response
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=Aakash_Dhar_Dubey_Resume.pdf');
    
    // Mock PDF content
    res.status(200).send("This is a placeholder for the resume PDF content");
  });

  // Resume view endpoint
  app.get("/api/resume-view", (req, res) => {
    // In a real implementation, this would display the resume
    res.setHeader('Content-Type', 'text/html');
    
    // Send an HTML representation of the resume
    res.status(200).send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Aakash Dhar Dubey - Resume</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 20px;
            color: #333;
          }
          .resume-container {
            max-width: 800px;
            margin: 0 auto;
          }
          h1 {
            color: #00a3e0;
            border-bottom: 2px solid #00a3e0;
            padding-bottom: 10px;
          }
          h2 {
            color: #0077b5;
            margin-top: 20px;
          }
          .section {
            margin-bottom: 25px;
          }
          .position {
            font-weight: bold;
          }
          .date {
            color: #666;
            font-style: italic;
          }
          .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }
          .skill {
            background: #f0f0f0;
            padding: 5px 10px;
            border-radius: 3px;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="resume-container">
          <h1>Aakash Dhar Dubey</h1>
          <p>Full Stack Developer | MERN Stack | Java Spring Boot | Microservices</p>
          
          <div class="section">
            <h2>Professional Experience</h2>
            <p class="position">Full Stack Developer at Tech Solutions Inc.</p>
            <p class="date">2022 - Present</p>
            <ul>
              <li>Developed scalable web applications using the MERN stack</li>
              <li>Implemented microservices architecture with Kafka</li>
              <li>Worked on containerization using Docker and Kubernetes</li>
              <li>Created efficient CI/CD pipelines for automated testing and deployment</li>
            </ul>
          </div>
          
          <div class="section">
            <h2>Education</h2>
            <p class="position">B.Tech in Computer Science</p>
            <p>Arya College of Engineering & IT, Kukas</p>
            <p class="date">2018 - 2022</p>
          </div>
          
          <div class="section">
            <h2>Certifications</h2>
            <ul>
              <li>Full Stack & Data Science - Goedhub Technologies (2021)</li>
              <li>Machine Learning - Internshala</li>
              <li>Ethical Hacking Workshop - IIT Jodhpur (2020)</li>
            </ul>
          </div>
          
          <div class="section">
            <h2>Skills</h2>
            <div class="skills">
              <span class="skill">React.js</span>
              <span class="skill">Node.js</span>
              <span class="skill">Next.js</span>
              <span class="skill">Express.js</span>
              <span class="skill">MongoDB</span>
              <span class="skill">Mongoose</span>
              <span class="skill">Java</span>
              <span class="skill">Spring Boot</span>
              <span class="skill">Docker</span>
              <span class="skill">Kubernetes</span>
              <span class="skill">Microservices</span>
              <span class="skill">Apache Kafka</span>
              <span class="skill">CI/CD</span>
              <span class="skill">AWS</span>
              <span class="skill">Firebase</span>
              <span class="skill">OAuth</span>
              <span class="skill">RESTful APIs</span>
              <span class="skill">Git</span>
            </div>
          </div>
          
          <div class="section">
            <h2>Projects</h2>
            <ul>
              <li>Full Stack E-commerce Application</li>
              <li>Authentication System with Firebase/OAuth</li>
              <li>Microservices-based Architecture with Kafka</li>
              <li>Shopify Custom App Integration</li>
              <li>Static Site with Remix.js and Astro.js</li>
              <li>Real-time Dashboard with WebSocket and Kafka</li>
            </ul>
          </div>
          
          <div class="section">
            <h2>Contact</h2>
            <p>Email: aakash@example.com</p>
            <p>LinkedIn: linkedin.com/in/aakashdhar</p>
            <p>GitHub: github.com/aakashdhar</p>
            <p>Location: Jaipur, Rajasthan, India</p>
          </div>
        </div>
      </body>
      </html>
    `);
  });

  const httpServer = createServer(app);

  return httpServer;
}
