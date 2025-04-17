import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const { theme } = useTheme();

  // Only show custom cursor on larger devices
  const isMobile = () => window.innerWidth <= 768;

  useEffect(() => {
    // Hide the cursor initially and show when mouse moves
    setHidden(isMobile());

    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", () => setHidden(true));
    window.addEventListener("mouseenter", () => setHidden(false));

    // Add event listeners to all links and buttons
    const linkElements = document.querySelectorAll("a, button");
    linkElements.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHoverStart);
      link.addEventListener("mouseleave", handleLinkHoverEnd);
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", () => setHidden(true));
      window.removeEventListener("mouseenter", () => setHidden(false));

      linkElements.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHoverStart);
        link.removeEventListener("mouseleave", handleLinkHoverEnd);
      });
    };
  }, []);

  if (isMobile()) return null;

  const cursorVariants = {
    default: {
      x: position.x - 10,
      y: position.y - 10,
      width: clicked ? "15px" : "20px",
      height: clicked ? "15px" : "20px",
      backgroundColor: clicked 
        ? "rgba(255, 0, 122, 0.5)" 
        : linkHovered 
          ? "rgba(255, 0, 122, 0.5)" 
          : "rgba(0, 229, 255, 0.5)",
      mixBlendMode: "difference",
    },
  };

  if (hidden) return null;

  return (
    <motion.div
      className="custom-cursor fixed w-5 h-5 rounded-full pointer-events-none z-50"
      variants={cursorVariants}
      animate="default"
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}
      style={{
        // Only show in dark mode by default
        display: theme === 'light' ? 'none' : 'block',
      }}
    />
  );
};

export default CustomCursor;
