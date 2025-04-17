import SectionHeading from "@/components/ui/section-heading";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[var(--surface-color)]">
      <div className="container mx-auto px-6">
        <SectionHeading 
          title="Get In Touch" 
          description="Have a project in mind or want to discuss opportunities? Feel free to reach out!"
        />
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />
          
          {/* Contact Info */}
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
