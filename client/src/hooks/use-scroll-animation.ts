import { useEffect } from 'react';
import { animate, stagger } from 'framer-motion';

/**
 * A hook that adds scroll animations to elements with specific data attributes
 * Automatically animates elements as they come into view
 */
export function useScrollAnimation() {
  useEffect(() => {
    // Create the intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          
          const target = entry.target;
          const animationType = target.getAttribute('data-animate');
          const delay = parseFloat(target.getAttribute('data-delay') || '0');
          
          // Apply appropriate animation based on data-animate attribute
          switch (animationType) {
            case 'fade-up':
              animate(
                target,
                { 
                  opacity: [0, 1], 
                  y: [50, 0],
                  scale: [0.95, 1]
                },
                { 
                  duration: 0.8, 
                  delay
                }
              );
              break;
              
            case 'fade-in':
              animate(
                target,
                { opacity: [0, 1] },
                { 
                  duration: 0.8, 
                  delay
                }
              );
              break;
              
            case 'slide-left':
              animate(
                target,
                { 
                  opacity: [0, 1], 
                  x: [100, 0]
                },
                { 
                  duration: 0.8, 
                  delay
                }
              );
              break;
              
            case 'slide-right':
              animate(
                target,
                { 
                  opacity: [0, 1], 
                  x: [-100, 0]
                },
                { 
                  duration: 0.8, 
                  delay
                }
              );
              break;
              
            case 'scale-up':
              animate(
                target,
                { 
                  opacity: [0, 1], 
                  scale: [0.5, 1]
                },
                { 
                  duration: 0.8, 
                  delay
                }
              );
              break;
              
            case 'bounce':
              animate(
                target,
                { 
                  opacity: [0, 1], 
                  y: [50, -20, 10, -5, 0]
                },
                { 
                  duration: 1.2, 
                  delay
                }
              );
              break;
              
            case 'stagger-children':
              // Select all immediate children
              const children = Array.from(target.children);
              
              // Get the stagger delay from the data attribute, default to 0.1s
              const staggerDelay = parseFloat(
                target.getAttribute('data-stagger-delay') || '0.1'
              );

              // Animate each child
              animate(
                children,
                { 
                  opacity: [0, 1], 
                  y: [20, 0],
                  scale: [0.95, 1]
                },
                { 
                  delay: stagger(staggerDelay),
                  duration: 0.5,
                }
              );
              break;
              
            case 'rotate':
              const degrees = parseFloat(
                target.getAttribute('data-rotate-degrees') || '360'
              );
              
              animate(
                target,
                { 
                  opacity: [0, 1], 
                  rotate: [0, degrees]
                },
                { 
                  duration: 1, 
                  delay,
                  ease: "easeOut"
                }
              );
              break;
              
            default:
              // Default animation for any elements without a specific animation type
              animate(
                target,
                { opacity: [0, 1] },
                { duration: 0.8, delay }
              );
          }
          
          // Once the animation is triggered, unobserve the element
          observer.unobserve(target);
        });
      },
      {
        rootMargin: "0px 0px -100px 0px",
        threshold: 0.1
      }
    );

    // Find all elements with data-animate attribute and observe them
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);
}

/**
 * A utility to smoothly scroll to an element
 */
export function scrollToElement(elementId: string, offset = 0) {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}