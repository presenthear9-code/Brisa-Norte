
// Fix: Importing React to resolve the missing namespace for React.ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface TestimonialProps {
  name: string;
  text: string;
  rating: number;
}

export interface ContactFormData {
  name: string;
  phone: string;
  service: string;
  message: string;
}
