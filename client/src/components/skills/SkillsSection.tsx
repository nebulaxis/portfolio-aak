import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import SkillCard from "./SkillCard";
import { 
  frontendSkills, 
  backendSkills, 
  databaseSkills, 
  devopsSkills, 
  architectureSkills, 
  otherSkills 
} from "@/data/skills";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const skillCategories = [
    { id: "frontend", title: "Front-end", icon: "code", iconColor: "primary", skills: frontendSkills },
    { id: "backend", title: "Back-end", icon: "server", iconColor: "secondary", skills: backendSkills },
    { id: "database", title: "Database", icon: "database", iconColor: "primary", skills: databaseSkills },
    { id: "devops", title: "DevOps", icon: "settings", iconColor: "secondary", skills: devopsSkills },
    { id: "architecture", title: "Architecture", icon: "layers", iconColor: "primary", skills: architectureSkills },
    { id: "others", title: "Others", icon: "tool", iconColor: "secondary", skills: otherSkills }
  ];

  const filteredCategories = activeCategory === "all" 
    ? skillCategories 
    : skillCategories.filter(category => category.id === activeCategory);

  return (
    <section id="skills" className="py-20 bg-[var(--bg-color)]">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Skills & Technologies" 
          description="My technical toolkit and areas of expertise that I bring to every project."
        />

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeCategory === "all"
                ? "bg-primary text-white"
                : "bg-[var(--card-color)] hover:bg-primary hover:bg-opacity-10"
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-[var(--card-color)] hover:bg-primary hover:bg-opacity-10"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
        
        {/* Skill Categories */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredCategories.map((category, index) => (
            <SkillCard 
              key={category.id}
              title={category.title}
              icon={category.icon}
              iconColor={category.iconColor}
              skills={category.skills}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
