import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

const ProjectCard = ({ project, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay }}
      className="project-card bg-[var(--card-color)] rounded-xl overflow-hidden h-full flex flex-col"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 flex items-end p-4 transition-opacity duration-300">
          <div className="text-white">
            <span className="text-xs font-medium bg-primary px-2 py-1 rounded">
              {project.category}
            </span>
          </div>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-heading font-bold mb-2">{project.title}</h3>
        <p className="text-[var(--text-muted)] text-sm mb-4 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="text-xs bg-[var(--bg-color)] px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button text-sm px-3 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium flex items-center gap-1"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm px-3 py-2 border border-primary text-primary hover:bg-primary hover:bg-opacity-10 rounded-lg font-medium transition-colors flex items-center gap-1"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
