import { useTheme } from "@/hooks/use-theme";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-[var(--card-color)] hover:bg-opacity-80 transition-colors relative overflow-hidden"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <div className="relative z-10">
        {theme === "dark" ? (
          <MoonIcon className="w-5 h-5 text-primary" />
        ) : (
          <SunIcon className="w-5 h-5 text-primary" />
        )}
      </div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        key={theme}
      />
    </button>
  );
};

export default ThemeToggle;
