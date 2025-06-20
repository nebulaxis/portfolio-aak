import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { sendEmail } from "./services/email.service";
import { z } from "zod";
import emailjs from '@emailjs/browser';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint that uses EmailJS
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Initialize EmailJS with our server-side credentials
      emailjs.init(process.env.EMAILJS_USER_ID || "");
      
      // Prepare the email template parameters
      const templateParams = {
        from_name: validatedData.name,
        from_email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message
      };
      
      console.log("Sending email via EmailJS with service and template IDs available:", {
        serviceId: !!process.env.EMAILJS_SERVICE_ID,
        templateId: !!process.env.EMAILJS_TEMPLATE_ID,
        userId: !!process.env.EMAILJS_USER_ID
      });
      
      // Send using EmailJS
      const response = await emailjs.send(
        process.env.EMAILJS_SERVICE_ID || "",
        process.env.EMAILJS_TEMPLATE_ID || "",
        templateParams
      );
      
      if (response.status === 200) {
        res.status(200).json({ success: true, message: "Message sent successfully" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ success: false, message: "Invalid form data", errors: error.errors });
      }
      
      console.error("Error sending email via EmailJS:", error);
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
  res.setHeader('Content-Type', 'text/html');

  res.status(200).send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Aakash Dubey - Resume</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          margin: 0;
          padding: 20px;
          color: #333;
          background-color: #f8f9fa;
        }
        .resume-container {
          max-width: 900px;
          margin: 0 auto;
          background: #fff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        h1, h2 {
          color: #007bff;
          margin-bottom: 10px;
        }
        p, li {
          line-height: 1.6;
        }
        .section {
          margin-bottom: 30px;
        }
        .contact a {
          color: #007bff;
          text-decoration: none;
        }
        .skills span {
          display: inline-block;
          background: #e9ecef;
          padding: 5px 10px;
          border-radius: 4px;
          margin: 5px;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="resume-container">
        <h1>Aakash Dubey</h1>
        <p><strong>Software Developer</strong></p>
        <div class="section contact">
          <p>Email: <a href="mailto:aakash.11dev@gmail.com">aakash.11dev@gmail.com</a></p>
          <p>Phone: 9001234371</p>
          <p>Location: Jaipur, India</p>
          <p>GitHub: <a href="https://www.github.com/nebulaxis" target="_blank">github.com/nebulaxis</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/aakash-11dev" target="_blank">linkedin.com/in/aakash-11dev</a></p>
        </div>

        <div class="section">
          <h2>Technical Skills</h2>
          <p><strong>Languages & Frameworks:</strong> Java, Spring Boot, Spring MVC, Spring Security, Node.js, Express.js, React.js, Next.js, Redux, RESTful APIs, GraphQL</p>
          <p><strong>Backend & API Development:</strong> JWT, OAuth2, Firebase Auth, Session Management, API Performance Optimization</p>
          <p><strong>Frontend Technologies:</strong> React.js, Next.js, Tailwind CSS, Material UI, Bootstrap</p>
          <p><strong>Databases:</strong> MySQL, MongoDB, ER Diagrams, Normalization</p>
          <p><strong>DevOps & Tools:</strong> Git, GitHub, Docker, AWS (EC2, S3, Lambda), CI/CD pipelines, AI-powered tools</p>
          <p><strong>Data & Visualization:</strong> Chart.js, D3.js, Advanced Excel</p>
          <p><strong>Streaming & Messaging:</strong> Familiar with Apache Kafka and real-time messaging</p>
        </div>

        <div class="section">
          <h2>Professional Experience</h2>
          <p><strong>Associate Programmer</strong>, Dotsquare (Mar 2025 – Present)</p>
          <ul>
            <li>Developed a secure social media platform with Spring Boot & JWT</li>
            <li>Implemented modular REST APIs and enhanced backend performance</li>
          </ul>
          <p><strong>Full Stack Developer</strong>, Blue Horse Tech Solutions (2024 – 2025)</p>
          <ul>
            <li>Built e-commerce platforms using MERN stack with Stripe & PayPal</li>
            <li>Optimized APIs and implemented SSR for SEO</li>
          </ul>
          <p><strong>Java Desktop Application Developer</strong>, Professional Automotives (May 2023)</p>
          <ul>
            <li>Developed Java Swing/JavaFX desktop UIs for internal tools</li>
            <li>Connected UIs to MySQL backend with secure CRUD</li>
          </ul>
        </div>

        <div class="section">
          <h2>Projects</h2>
          <ul>
            <li>Document Management System with JWT & Smart Search</li>
            <li>Patient Health Tracking System with Spring Boot & Next.js</li>
            <li>Full Stack Car Booking Platform deployed with Docker & CI/CD</li>
            <li>Social Media Backend with Spring Boot, JWT, Session Management</li>
            <li>Sentiment Analysis & AI Chatbot with Next.js and FastAPI</li>
            <li>The Hiva Jewels Shopify Custom Site for SEO & Performance</li>
          </ul>
        </div>

        <div class="section">
          <h2>Education</h2>
          <p><strong>B.Tech in Electronics & Communication Engineering</strong></p>
          <p>Rajasthan Technical University, Jaipur (2018 – 2022)</p>
          <p>XII (CBSE), Tagore Public School, Jaipur (2017 – 2018)</p>
        </div>

        <div class="section">
          <h2>Certificates</h2>
          <ul>
            <li>Full Stack Developer - Udemy</li>
            <li>Data Science - Goedhub Technologies</li>
            <li>Ethical Hacking Workshop - IIT Jodhpur</li>
            <li>Web Development - Learn Vern</li>
          </ul>
        </div>

        <div class="section">
          <h2>Interests</h2>
          <p>Exploring microservices architecture trends and web performance optimization.</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

  const httpServer = createServer(app);

  return httpServer;
}
