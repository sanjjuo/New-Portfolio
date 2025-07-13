import { ReactNode } from "react";

// navlink
export interface NavLink {
  title: string;
  href: string;
}

// services
export interface Service {
  icon: ReactNode;
  title: string;
}

// skills
export interface Skill {
  id: number;
  title: string;
  image: string;
}

// testimonial
export interface Testimonial {
  name: string;
  image: string;
  title: string;
  comment: string;
}

// Footer types
export interface FooterSection {
  section: string;
  aboutContent?: {
    description: string;
  };
  linkContent: {
    title: string;
    href: string;
  }[];
  contactContent: {
    icon: ReactNode;
    description: string;
    href: string;
  }[];
}

export interface contactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
