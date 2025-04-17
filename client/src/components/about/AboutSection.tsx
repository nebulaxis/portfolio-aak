import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { Briefcase, GraduationCap, Award, Book, ChevronRight } from "lucide-react";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-[var(--surface-color)]">
      <div className="container mx-auto px-6">
        <SectionHeading title="About Me" />
        
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="bg-[var(--card-color)] p-8 rounded-2xl"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-heading font-bold mb-4">Who am I?</h3>
            <p className="text-[var(--text-muted)] mb-4">
              I'm a passionate Full Stack Developer with 1.3+ years of industrial experience, specializing in building scalable web applications using modern technologies.
            </p>
            <p className="text-[var(--text-muted)] mb-4">
              My journey in tech began during my B.Tech at Arya College of Engineering & IT, where I developed a strong foundation in computer science and engineering principles.
            </p>
            <p className="text-[var(--text-muted)]">
              I'm constantly exploring new technologies and methodologies to enhance my skills and deliver better solutions. My experience ranges from MERN stack development to implementing microservices architecture and DevOps practices.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <motion.div variants={itemVariants}>
                <h4 className="text-primary font-medium mb-2">Education</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <GraduationCap className="w-4 h-4 mt-1 mr-2 text-secondary" />
                    <div>
                      <p className="font-medium">B.Tech (2018–2022)</p>
                      <p className="text-[var(--text-muted)]">Arya College of Engineering & IT, Kukas</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="w-4 h-4 mt-1 mr-2 text-secondary" />
                    <div>
                      <p className="font-medium">Higher Secondary</p>
                      <p className="text-[var(--text-muted)]">Tagore Public School</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <h4 className="text-primary font-medium mb-2">Certifications</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <Award className="w-4 h-4 mt-1 mr-2 text-secondary" />
                    <div>
                      <p className="font-medium">Full Stack & Data Science</p>
                      <p className="text-[var(--text-muted)]">Goedhub Technologies</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Award className="w-4 h-4 mt-1 mr-2 text-secondary" />
                    <div>
                      <p className="font-medium">Machine Learning</p>
                      <p className="text-[var(--text-muted)]">Internshala</p>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.div 
              className="relative mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-xl blur-lg opacity-30"></div>
              <div className="relative bg-[var(--card-color)] p-6 rounded-lg">
                <h3 className="text-2xl font-heading font-bold mb-4">Achievements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Ethical Hacking Workshop</h4>
                      <p className="text-[var(--text-muted)] text-sm">Participated at IIT Jodhpur</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-secondary bg-opacity-20 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <Award className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Hackathon: Street Management System</h4>
                      <p className="text-[var(--text-muted)] text-sm">Built an innovative solution for urban management</p>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-secondary to-primary rounded-xl blur-lg opacity-30"></div>
              <div className="relative bg-[var(--card-color)] p-6 rounded-lg">
                <h3 className="text-2xl font-heading font-bold mb-4">Interests</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mr-3 flex-shrink-0">
                      <Book className="w-5 h-5 text-primary" />
                    </div>
                    <span>Tech Research</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-secondary bg-opacity-20 flex items-center justify-center mr-3 flex-shrink-0">
                      <ChevronRight className="w-5 h-5 text-secondary" />
                    </div>
                    <span>Coding Books</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mr-3 flex-shrink-0">
                      <ChevronRight className="w-5 h-5 text-primary" />
                    </div>
                    <span>New Technologies</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-secondary bg-opacity-20 flex items-center justify-center mr-3 flex-shrink-0">
                      <ChevronRight className="w-5 h-5 text-secondary" />
                    </div>
                    <span>AI Exploration</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
