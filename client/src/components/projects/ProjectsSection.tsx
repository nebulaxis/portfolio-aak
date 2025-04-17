import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  
  // Get unique categories for filters
  const categories = ["all", ...new Set(projects.map(project => project.category))];

  useEffect(() => {
    // Filter projects based on active category
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 bg-[var(--surface-color)]">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Projects" 
          description="Explore my recent work and see my technical skills in action."
        />
        
        {/* Project Filters */}
        <ProjectFilter 
          categories={categories} 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter} 
        />
        
        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                delay={index * 0.1}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
