import { motion } from "framer-motion";
import { socialLinks } from "@/data/social-links";

const SocialLinks = () => {
  const iconVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + index * 0.1,
      },
    }),
    hover: {
      y: -5,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const lineVariants = {
    initial: {
      height: 0,
    },
    animate: {
      height: "6rem",
      transition: {
        delay: 0.6,
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div 
      className="fixed left-6 bottom-0 hidden md:flex flex-col items-center space-y-6 z-10"
      initial="initial"
      animate="animate"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--text-muted)] hover:text-primary transition-colors"
          variants={iconVariants}
          custom={index}
          whileHover="hover"
          aria-label={link.name}
        >
          <link.icon className="w-5 h-5" />
        </motion.a>
      ))}
      <motion.div 
        className="w-px bg-[var(--text-muted)]"
        variants={lineVariants}
      />
    </motion.div>
  );
};

export default SocialLinks;
