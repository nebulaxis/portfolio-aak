import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Always default to dark unless explicitly set to light in localStorage
    const savedTheme = localStorage.getItem("theme") as Theme;
    return savedTheme === "light" ? "light" : "dark";
  });

  useEffect(() => {
    // Apply theme to document element for CSS variable access
    document.documentElement.setAttribute('data-theme', theme);
    
    // Apply theme classes to body
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    
    // Store preference in localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
