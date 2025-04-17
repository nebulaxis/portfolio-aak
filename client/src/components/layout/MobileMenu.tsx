import { useState } from "react";
import { Link, useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  navLinks: NavLink[];
}

const MobileMenu = ({ navLinks }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button 
        onClick={toggleMenu}
        className="text-[var(--text-color)]" 
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[var(--surface-color)] py-4 px-6 absolute top-full left-0 right-0 shadow-lg z-50"
          >
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div 
                    className={cn(
                      "py-2 border-b border-[var(--card-color)] cursor-pointer",
                      location === link.href ? "text-primary" : ""
                    )}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
              
              <div className="flex items-center justify-between pt-2">
                <ThemeToggle />
                <Link href="/resume">
                  <div 
                    className="glow-button px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium cursor-pointer"
                    onClick={closeMenu}
                  >
                    Resume
                  </div>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
