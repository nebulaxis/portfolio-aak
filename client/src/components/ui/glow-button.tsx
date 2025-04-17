import { ReactNode, ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "outline";
}

const GlowButton = ({ 
  children, 
  className, 
  variant = "primary", 
  ...props 
}: GlowButtonProps) => {
  return (
    <motion.button
      className={cn(
        "glow-button relative overflow-hidden",
        variant === "primary" 
          ? "px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium" 
          : "px-4 py-2 border border-primary text-primary hover:bg-primary hover:bg-opacity-10 rounded-lg font-medium transition-colors",
        className
      )}
      {...props}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      whileTap={{ y: 0, transition: { duration: 0.2 } }}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          whileHover={{
            opacity: 1,
            background: [
              "linear-gradient(45deg, rgb(0, 229, 255), rgb(255, 0, 122), rgb(0, 229, 255))",
              "linear-gradient(225deg, rgb(0, 229, 255), rgb(255, 0, 122), rgb(0, 229, 255))",
              "linear-gradient(45deg, rgb(0, 229, 255), rgb(255, 0, 122), rgb(0, 229, 255))",
            ],
            backgroundSize: ["100% 100%", "200% 200%", "100% 100%"],
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      )}
    </motion.button>
  );
};

export default GlowButton;
