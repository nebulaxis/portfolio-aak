import emailjs from '@emailjs/browser';

// Store EmailJS credentials after loading them from the API
let emailjsConfig: {
  serviceId: string;
  templateId: string;
  userId: string;
} = {
  serviceId: '',
  templateId: '',
  userId: ''
};

// Load EmailJS config from API
const loadEmailjsConfig = async () => {
  try {
    const response = await fetch('/api/emailjs-config');
    if (!response.ok) {
      throw new Error('Failed to load EmailJS configuration');
    }
    
    emailjsConfig = await response.json();
    return true;
  } catch (error) {
    console.error('Error loading EmailJS config:', error);
    return false;
  }
};

// Initialize EmailJS with the credentials
export const initializeEmailjs = async () => {
  // Load config if not yet loaded
  if (!emailjsConfig.userId) {
    const success = await loadEmailjsConfig();
    if (!success) {
      console.error('Failed to initialize EmailJS. Configuration could not be loaded.');
      return false;
    }
  }
  
  emailjs.init(emailjsConfig.userId);
  console.log('EmailJS initialized');
  return true;
};

// Send an email using EmailJS
export const sendEmail = async (templateParams: Record<string, unknown>) => {
  // Ensure config is loaded
  if (!emailjsConfig.serviceId || !emailjsConfig.templateId) {
    await loadEmailjsConfig();
  }
  
  if (!emailjsConfig.serviceId || !emailjsConfig.templateId) {
    throw new Error('EmailJS credentials are not properly configured');
  }
  
  try {
    const response = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams
    );
    return response;
  } catch (error) {
    console.error('EmailJS error:', error);
    throw error;
  }
};