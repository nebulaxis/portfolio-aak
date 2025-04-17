import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  // Initialize EmailJS when component mounts
  useEffect(() => {
    const userId = import.meta.env.VITE_EMAILJS_USER_ID || "";
    console.log("EmailJS initialization with user ID available:", !!userId);
    emailjs.init(userId);
  }, []);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Prepare the template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message
      };
      
      // Log EmailJS environment availability
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
      console.log("EmailJS credentials available:", {
        hasServiceId: !!serviceId,
        hasTemplateId: !!templateId,
      });
      
      // Send the email using EmailJS
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );
      
      if (response.status === 200) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
          variant: "default",
        });
        
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Email error:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="bg-[var(--card-color)] p-8 rounded-2xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-heading font-bold mb-6">Send a Message</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={`w-full bg-[var(--bg-color)] border ${
              errors.name ? "border-destructive" : "border-[var(--text-muted)]"
            } rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className={`w-full bg-[var(--bg-color)] border ${
              errors.email ? "border-destructive" : "border-[var(--text-muted)]"
            } rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            {...register("subject")}
            className={`w-full bg-[var(--bg-color)] border ${
              errors.subject ? "border-destructive" : "border-[var(--text-muted)]"
            } rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors`}
            placeholder="Project Inquiry"
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-destructive">{errors.subject.message}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            className={`w-full bg-[var(--bg-color)] border ${
              errors.message ? "border-destructive" : "border-[var(--text-muted)]"
            } rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition-colors`}
            placeholder="Tell me about your project..."
          />
          {errors.message && (
            <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="glow-button w-full px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium relative overflow-hidden"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
