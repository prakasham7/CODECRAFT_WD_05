// Project type definitions
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
}

// Form types
export interface ContactForm {
  name: string;
  email: string;
  message: string;
}