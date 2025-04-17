import { Link } from "wouter";
import { socialLinks } from "@/data/social-links";

const Footer = () => {
  return (
    <footer className="bg-[var(--bg-color)] py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <a className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                  <span className="text-white font-bold text-xs">AD</span>
                </div>
                <span className="text-lg font-bold font-heading">Aakash Dhar Dubey</span>
              </a>
            </Link>
          </div>
          
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-primary transition-colors"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-[var(--text-muted)] text-sm">
              &copy; {new Date().getFullYear()} Aakash Dhar Dubey. All rights reserved.
            </p>
            <p className="text-xs text-[var(--text-muted)] mt-1">
              Built with <span className="text-secondary">❤</span> using modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
