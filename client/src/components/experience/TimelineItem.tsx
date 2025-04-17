import { motion } from "framer-motion";
import { TimelineItem as TimelineItemType } from "@/data/timeline";

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative mb-16">
      {/* Timeline bullet */}
      <motion.div 
        className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-4 border-[var(--bg-color)] z-10 ${
          isEven ? "bg-primary" : "bg-secondary"
        }`}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="grid md:grid-cols-5 gap-8 items-center">
        <motion.div 
          className={`md:col-span-2 ${isEven ? "md:text-right order-2 md:order-1" : "md:text-left order-2"}`}
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="bg-[var(--card-color)] p-6 rounded-xl relative overflow-hidden hover:shadow-lg transition-shadow">
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 hover:opacity-10 transition-opacity"></div>
            <span className={`${isEven ? "text-primary" : "text-secondary"} font-heading font-bold`}>
              {item.period}
            </span>
            <h3 className="text-xl font-heading font-bold mt-2">{item.title}</h3>
            <p className="text-[var(--text-muted)] text-sm mt-1">{item.organization}</p>
          </div>
        </motion.div>
        
        <motion.div 
          className={`md:col-span-3 ${isEven ? "order-1 md:order-2" : "order-1"}`}
          initial={{ opacity: 0, x: isEven ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="bg-[var(--card-color)] p-6 rounded-xl hover:shadow-lg transition-shadow">
            <p className="text-[var(--text-muted)]">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {item.skills.map((skill, idx) => (
                <span key={idx} className="text-xs bg-[var(--bg-color)] px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TimelineItem;
