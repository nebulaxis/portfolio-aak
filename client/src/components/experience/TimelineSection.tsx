import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import TimelineItem from "./TimelineItem";
import { timelineItems } from "@/data/timeline";

const TimelineSection = () => {
  return (
    <section id="experience" className="py-20 bg-[var(--bg-color)]">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Experience & Education" 
          description="My professional journey and educational background."
        />
        
        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary rounded-full"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          />
          
          {/* Timeline items */}
          {timelineItems.map((item, index) => (
            <TimelineItem 
              key={index}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
