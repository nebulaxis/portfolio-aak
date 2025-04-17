import { motion } from "framer-motion";
import { TimelineItem as TimelineItemType } from "@/data/timeline";
import { Calendar, Award, ArrowRight } from "lucide-react";

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="relative mb-20">
      {/* Timeline dot */}
      <motion.div 
        className={`absolute left-1/2 top-12 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-[var(--bg-color)] z-20 flex items-center justify-center ${
          isEven ? "bg-primary" : "bg-secondary"
        }`}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.4, type: "spring" }}
      >
        <motion.div
          className="w-2 h-2 bg-white rounded-full"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.2 }}
        />
      </motion.div>
      
      {/* Content */}
      <div className={`grid md:grid-cols-2 gap-6 relative ${isEven ? "md:text-right" : ""}`}>
        {/* Date box - positioned absolutely for mobile and normally for desktop */}
        <motion.div 
          className={`md:mb-0 z-10 ${isEven ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className={`bg-[var(--card-color)] p-6 rounded-xl relative overflow-hidden hover:shadow-xl transition-all duration-300 group border-t-4 ${isEven ? "border-primary" : "border-secondary"}`}>
            {/* Hover glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-r ${isEven ? "from-primary/20 to-primary/5" : "from-secondary/20 to-secondary/5"} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            
            <div className="flex items-center mb-2 gap-2">
              <Calendar className={`h-4 w-4 ${isEven ? "text-primary" : "text-secondary"}`} />
              <span className={`${isEven ? "text-primary" : "text-secondary"} font-heading font-bold`}>
                {item.period}
              </span>
            </div>
            
            <h3 className="text-xl font-heading font-bold mt-2 flex items-center gap-2">
              {item.title}
              <motion.div
                initial={{ x: -5, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                <Award className={`h-5 w-5 ${isEven ? "text-primary" : "text-secondary"} inline-block`} />
              </motion.div>
            </h3>
            
            <p className="text-[var(--text-muted)] text-sm mt-1">{item.organization}</p>
            
            <motion.div 
              className={`absolute bottom-3 ${isEven ? "left-3" : "right-3"} w-12 h-12 rounded-full bg-[var(--bg-color)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 shadow-lg`}
              initial={{ scale: 0.8, rotate: 0 }}
              whileInView={{ scale: 1, rotate: 0 }}
              whileHover={{ rotate: isEven ? -15 : 15, scale: 1.1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.3 }}
            >
              <ArrowRight className={`h-5 w-5 ${isEven ? "text-primary" : "text-secondary"}`} />
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className={`z-10 ${isEven ? "md:pl-12" : "md:pr-12"}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="bg-[var(--card-color)] p-6 rounded-xl relative overflow-hidden hover:shadow-xl transition-all duration-300 h-full group">
            {/* Secondary glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg-color)] to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            
            <p className="text-[var(--text-muted)]">
              {item.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {item.skills.map((skill, idx) => (
                <motion.span 
                  key={idx} 
                  className={`text-xs px-3 py-1 rounded-full border ${isEven ? "border-primary/30 text-primary" : "border-secondary/30 text-secondary"} bg-[var(--bg-color)]`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (idx * 0.1), duration: 0.2 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TimelineItem;
