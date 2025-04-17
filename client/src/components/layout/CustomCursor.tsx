import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/theme-context";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [visibleTrail, setVisibleTrail] = useState(false);
  const [trailPositions, setTrailPositions] = useState<Array<{x: number, y: number}>>([]);
  const { theme } = useTheme();

  // Only show custom cursor on larger devices
  const isMobile = () => window.innerWidth <= 768;

  useEffect(() => {
    if (isMobile()) return;
    
    // Hide the cursor initially and show when mouse moves
    setHidden(true);
    
    // Add CSS class to body to hide default cursor
    document.body.classList.add('hide-cursor');
    
    // Store past few positions for trail effect
    const storePosition = (x: number, y: number) => {
      setTrailPositions(prev => {
        const newPositions = [...prev, { x, y }];
        return newPositions.slice(-5); // Keep last 5 positions
      });
    };

    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      storePosition(e.clientX, e.clientY);
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = () => setLinkHovered(true);
    const handleLinkHoverEnd = () => setLinkHovered(false);
    
    // Show trail effect when user moves mouse quickly
    let lastX = 0;
    let lastY = 0;
    let lastTime = Date.now();
    
    const checkSpeed = (e: MouseEvent) => {
      const now = Date.now();
      const dt = now - lastTime;
      if (dt > 0) {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        const speed = Math.sqrt(dx*dx + dy*dy) / dt;
        
        // If mouse moves faster than threshold, show trail
        setVisibleTrail(speed > 0.7);
      }
      
      lastX = e.clientX;
      lastY = e.clientY;
      lastTime = now;
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mousemove", checkSpeed);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", () => setHidden(true));
    window.addEventListener("mouseenter", () => setHidden(false));

    // Add event listeners to all interactive elements
    const interactiveElements = document.querySelectorAll("a, button, [role='button'], input, select, textarea, .interactive");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleLinkHoverStart);
      el.addEventListener("mouseleave", handleLinkHoverEnd);
    });

    return () => {
      document.body.classList.remove('hide-cursor');
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mousemove", checkSpeed);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", () => setHidden(true));
      window.removeEventListener("mouseenter", () => setHidden(false));

      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleLinkHoverStart);
        el.removeEventListener("mouseleave", handleLinkHoverEnd);
      });
    };
  }, []);

  if (isMobile() || hidden) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="custom-cursor-dot"
        animate={{
          x: position.x,
          y: position.y,
          scale: clicked ? 0.8 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 30,
          mass: 0.1
        }}
      />
      
      {/* Cursor outer ring */}
      <motion.div
        className="custom-cursor-outline"
        animate={{
          x: position.x,
          y: position.y,
          scale: clicked ? 0.8 : (linkHovered ? 1.5 : 1),
          opacity: clicked ? 0.6 : 1,
          borderColor: clicked 
            ? `rgba(var(--secondary-rgb), 0.6)` 
            : linkHovered 
              ? `rgba(var(--secondary-rgb), 0.8)` 
              : `rgba(var(--primary-rgb), 0.4)`,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 0.5
        }}
      />
      
      {/* Trail effect for fast mouse movements */}
      {visibleTrail && trailPositions.map((pos, i) => (
        <motion.div
          key={`trail-${i}`}
          className="custom-cursor-dot"
          initial={{ opacity: 0.7 - (i * 0.15) }}
          animate={{
            x: pos.x,
            y: pos.y,
            opacity: 0,
            scale: 0.8 - (i * 0.15)
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut"
          }}
          style={{
            background: i % 2 === 0 ? 'var(--primary)' : 'var(--secondary)'
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;

// Add a CSS class to hide the default cursor
document.documentElement.style.cssText = `
  .hide-cursor {
    cursor: none !important;
  }
`;
