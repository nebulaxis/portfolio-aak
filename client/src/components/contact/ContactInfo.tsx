import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { socialLinks } from "@/data/social-links";

const ContactInfo = () => {
  return (
    <div>
      <motion.div
        className="bg-[var(--card-color)] p-8 rounded-2xl mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3 className="text-2xl font-heading font-bold mb-6">Contact Information</h3>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mr-4 flex-shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Email</h4>
              <a
                href="mailto:aakash@example.com"
                className="text-[var(--text-muted)] hover:text-primary transition-colors"
              >
                aakash@example.com
              </a>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-full bg-secondary bg-opacity-20 flex items-center justify-center mr-4 flex-shrink-0">
              <Phone className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Phone</h4>
              <a
                href="tel:+1234567890"
                className="text-[var(--text-muted)] hover:text-secondary transition-colors"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-full bg-primary bg-opacity-20 flex items-center justify-center mr-4 flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Location</h4>
              <p className="text-[var(--text-muted)]">
                Jaipur, Rajasthan, India
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        className="bg-[var(--card-color)] p-8 rounded-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className="text-2xl font-heading font-bold mb-6">Connect With Me</h3>
        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[var(--bg-color)] flex items-center justify-center hover:bg-primary hover:bg-opacity-20 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactInfo;
