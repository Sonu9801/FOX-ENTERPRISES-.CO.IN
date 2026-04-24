export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface WhyChoosePoint {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  logo: string;
}
