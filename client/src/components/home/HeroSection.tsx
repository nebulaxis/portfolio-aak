import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import Typed from "typed.js";
import Hero3DCanvas from "./Hero3DCanvas";
import ScrollIndicator from "./ScrollIndicator";
import SocialLinks from "@/components/layout/SocialLinks";


const HeroSection = () => {
  const typedRef = useRef<HTMLDivElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (typedRef.current) {
      typed.current = new Typed(typedRef.current, {
        strings: [
          "Full Stack Developer",
          "MERN Stack Expert",
          "Java Spring Boot Developer",
          "Microservices Architect",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
      });
    }

    return () => {
      typed.current?.destroy();
    };
  }, []);

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
    <section id="home" className="min-h-screen relative flex items-center">
      {/* 3D Canvas Background */}
      <Hero3DCanvas />
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-primary font-code mb-3"
              variants={itemVariants}
            >
              Hello, my name is
            </motion.p>
            <motion.h1
              className="text-4xl md:text-6xl font-bold font-heading mb-2"
              variants={itemVariants}
            >
              Aakash Dhar Dubey
            </motion.h1>
            <motion.div
              className="h-12 overflow-hidden"
              variants={itemVariants}
            >
              <div
                ref={typedRef}
                className="font-heading text-2xl md:text-3xl font-medium text-secondary mb-6"
              />
            </motion.div>
            <motion.p
              className="text-[var(--text-muted)] max-w-md my-6"
              variants={itemVariants}
            >
              With 1.3+ years of industrial experience. Specialized in MERN Stack, Java Spring Boot, and Microservices architecture.
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4 mt-8"
              variants={itemVariants}
            >
              <Link href="/projects" className="glow-button px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium inline-block">
                View My Work
              </Link>
              <Link href="/resume" className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:bg-opacity-10 rounded-lg font-medium transition-colors inline-block">
                Download Resume
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* 3D Avatar or Profile Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-primary to-secondary p-1 overflow-hidden">
              <div className="w-full h-full rounded-full overflow-hidden bg-[var(--card-color)]">
                <img
    src="/profilepic.jpg"
    alt="Aakash Dhar Dubey"
    className="w-full h-full object-cover"
  />
              </div>
              <motion.div
                className="absolute -bottom-2 -right-2 bg-[var(--surface-color)] p-2 rounded-full border-2 border-secondary"
                animate={{ rotate: [0, 20, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M17.9936 3.70436C16.8589 2.62758 15.1442 2.63846 14.0223 3.72866L6.50299 11.0278C6.1893 11.3326 5.98579 11.7319 5.92468 12.1619L5.60744 14.1118C5.55721 14.4683 5.67887 14.8278 5.93123 15.0859C6.18359 15.3439 6.53856 15.4666 6.89498 15.4117L8.84493 15.0267C9.27428 14.9559 9.66948 14.7442 9.96144 14.4235L17.4808 7.12437C18.6026 6.03417 18.6122 4.31944 17.9936 3.70436Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Social links */}
      <SocialLinks />
      
      {/* Scroll indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
