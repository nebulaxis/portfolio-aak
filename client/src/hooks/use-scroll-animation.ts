import { useEffect } from 'react';
import { animate, inView, stagger } from 'framer-motion';

interface ScrollAnimationOptions {
  root?: HTMLElement | null;
  margin?: string;
  amount?: number | "some" | "all";
  once?: boolean;
}

/**
 * A hook that adds scroll animations to elements with specific data attributes
 * Automatically animates elements as they come into view
 */
export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  useEffect(() => {
    // Default animation options
    const defaultOptions = {
      margin: "0px 0px -100px 0px",
      amount: 0.2,
      once: true,
      ...options
    };

    // Handle fade-up animation
    inView(
      '[data-animate="fade-up"]',
      (info) => {
        animate(
          info.target,
          { 
            opacity: [0, 1], 
            y: [50, 0],
            scale: [0.95, 1]
          },
          { 
            duration: 0.8, 
            delay: parseFloat(info.target.getAttribute('data-delay') || '0')
          }
        );
      },
      defaultOptions
    );

    // Handle fade-in animation
    inView(
      '[data-animate="fade-in"]',
      (info) => {
        animate(
          info.target,
          { opacity: [0, 1] },
          { 
            duration: 0.8, 
            delay: parseFloat(info.target.getAttribute('data-delay') || '0')
          }
        );
      },
      defaultOptions
    );

    // Handle slide-left animation
    inView(
      '[data-animate="slide-left"]',
      (info) => {
        animate(
          info.target,
          { 
            opacity: [0, 1], 
            x: [100, 0]
          },
          { 
            duration: 0.8, 
            delay: parseFloat(info.target.getAttribute('data-delay') || '0')
          }
        );
      },
      defaultOptions
    );

    // Handle slide-right animation
    inView(
      '[data-animate="slide-right"]',
      (info) => {
        animate(
          info.target,
          { 
            opacity: [0, 1], 
            x: [-100, 0]
          },
          { 
            duration: 0.8, 
            delay: parseFloat(info.target.getAttribute('data-delay') || '0')
          }
        );
      },
      defaultOptions
    );

    // Handle scale-up animation
    inView(
      '[data-animate="scale-up"]',
      (info) => {
        animate(
          info.target,
          { 
            opacity: [0, 1], 
            scale: [0.5, 1]
          },
          { 
            duration: 0.8, 
            delay: parseFloat(info.target.getAttribute('data-delay') || '0')
          }
        );
      },
      defaultOptions
    );

    // Handle bounce animation
    inView(
      '[data-animate="bounce"]',
      (info) => {
        animate(
          info.target,
          { 
            opacity: [0, 1], 
            y: [50, -20, 10, -5, 0]
          },
          { 
            duration: 1.2, 
            delay: parseFloat(info.target.getAttribute('data-delay') || '0')
          }
        );
      },
      defaultOptions
    );

    // Handle stagger animation for children
    inView(
      '[data-animate="stagger-children"]',
      (info) => {
        // Select all immediate children
        const children = Array.from(info.target.children);
        
        // Get the stagger delay from the data attribute, default to 0.1s
        const staggerDelay = parseFloat(
          info.target.getAttribute('data-stagger-delay') || '0.1'
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
      },
      defaultOptions
    );

    // Handle rotating animation
    inView(
      '[data-animate="rotate"]',
      (info) => {
        const degrees = parseFloat(
          info.target.getAttribute('data-rotate-degrees') || '360'
        );
        
        animate(
          info.target,
          { 
            opacity: [0, 1], 
            rotate: [0, degrees]
          },
          { 
            duration: 1, 
            delay: parseFloat(info.target.getAttribute('data-delay') || '0'),
            ease: "easeOut"
          }
        );
      },
      defaultOptions
    );

  }, [options.root, options.margin, options.amount, options.once]);
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