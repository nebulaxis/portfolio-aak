import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-[var(--surface-color)] backdrop-blur-md bg-opacity-80 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                <span className="text-white font-bold font-heading">AD</span>
              </div>
              <span className="text-xl font-bold font-heading">Aakash Dhar</span>
            </div>
          </Link>

          {/* Mobile menu button */}
          <MobileMenu navLinks={navLinks} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={cn(
                    "nav-link font-medium py-2 relative cursor-pointer",
                    location === link.href
                      ? "text-primary"
                      : "hover:text-primary transition-colors"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300",
                      location === link.href ? "w-full" : ""
                    )}
                  ></span>
                </div>
              </Link>
            ))}

            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Resume Button */}
            <Link href="/resume">
              <div className="glow-button px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium cursor-pointer">
                Resume
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
