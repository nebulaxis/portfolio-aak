import { motion } from "framer-motion";

const ScrollIndicator = () => {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <span className="text-sm text-[var(--text-muted)] mb-2">Scroll Down</span>
      <motion.div 
        className="w-5 h-10 border-2 border-[var(--text-muted)] rounded-full flex justify-center"
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <motion.div 
          className="w-1 h-2 bg-primary rounded-full mt-2"
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
