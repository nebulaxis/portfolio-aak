import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/section-heading";
import TimelineItem from "./TimelineItem";
import { timelineItems } from "@/data/timeline";
import { History, Sparkles } from "lucide-react";

const TimelineSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.4, 1, 1, 0.4]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.95, 1, 1, 0.95]);
  
  return (
    <motion.section 
      id="experience" 
      className="py-20 bg-[var(--bg-color)] relative overflow-hidden"
      ref={sectionRef}
      style={{ opacity, scale }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-20 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, 40, 0],
            y: [0, -40, 0],
            opacity: [0.4, 0.6, 0.4] 
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2 
          }}
        />
      </div>
    
      <div className="container mx-auto px-6 relative">
        <div className="flex justify-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 relative"
          >
            <SectionHeading 
              title="Experience & Education" 
              description="My professional journey and educational background."
            />
            
            <motion.div 
              className="absolute -top-10 -left-16 text-primary/20"
              initial={{ rotate: -15, scale: 0.9, opacity: 0 }}
              whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <History className="w-16 h-16" />
            </motion.div>
            
            <motion.div 
              className="absolute -top-8 -right-12 text-secondary/20"
              initial={{ rotate: 15, scale: 0.9, opacity: 0 }}
              whileInView={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Sparkles className="w-12 h-12" />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary rounded-full"
            initial={{ height: 0 }}
            whileInView={{ height: '95%' }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true, margin: "-100px" }}
          />
          
          {/* Glowing dots that move up the timeline */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full z-10 shadow-[0_0_15px_5px_rgba(var(--primary-rgb),0.3)]"
            initial={{ top: "100%" }}
            animate={{ top: "0%" }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          />
          
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-secondary rounded-full z-10 shadow-[0_0_15px_5px_rgba(var(--secondary-rgb),0.3)]"
            initial={{ top: "100%" }}
            animate={{ top: "0%" }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
              delay: 5
            }}
          />
          
          {/* Timeline items */}
          {timelineItems.map((item, index) => (
            <TimelineItem 
              key={index}
              item={item}
              index={index}
            />
          ))}
          
          {/* End dot */}
          <motion.div
            className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-gradient-to-r from-primary to-secondary rounded-full z-10"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8, duration: 0.4 }}
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-50"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default TimelineSection;
