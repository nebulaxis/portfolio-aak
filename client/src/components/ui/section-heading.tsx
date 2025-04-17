import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  description?: string;
}

const SectionHeading = ({ title, description }: SectionHeadingProps) => {
  return (
    <motion.div
      className="flex flex-col items-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold font-heading mb-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h2>
      
      <motion.div
        className="w-24 h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '6rem', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      />
      
      {description && (
        <motion.p
          className="text-[var(--text-muted)] max-w-2xl text-center mt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
