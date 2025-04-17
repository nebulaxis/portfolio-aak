import { motion } from "framer-motion";

interface ProjectFilterProps {
  categories: string[];
  activeFilter: string;
  setActiveFilter: (category: string) => void;
}

const ProjectFilter = ({ categories, activeFilter, setActiveFilter }: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => setActiveFilter(category)}
          className={`filter-btn px-4 py-2 rounded-lg font-medium transition-colors ${
            activeFilter === category
              ? "bg-primary text-white"
              : "bg-[var(--card-color)] hover:bg-primary hover:bg-opacity-10"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </motion.button>
      ))}
    </div>
  );
};

export default ProjectFilter;
