
import React from 'react';
import { 
  Wrench, 
  Wind, 
  Droplets, 
  ThermometerSnowflake, 
  Layout, 
  ShieldCheck,
  Zap,
  Clock,
  MapPin,
  Star
} from 'lucide-react';
import { ServiceCardProps, TestimonialProps } from './types';

export const COMPANY_INFO = {
  name: "Brisa Norte",
  phone: "(94) 99151-4806",
  phoneRaw: "94991514806",
  address: "R. Sete de Setembro, 103, Centro, Xinguara – PA",
  zip: "68555-471",
  rating: 4.8,
  hours: "Abre às 08:00",
  googleMapsLink: "https://www.google.com/maps/place/V2VX+VQ+Centro,+Xinguara+-+PA/@-7.1022222,-49.9405556,15z",
};

export const SERVICES: ServiceCardProps[] = [
  {
    title: "Instalação",
    description: "Instalação técnica de ar-condicionado Split e Cassete com total garantia.",
    icon: <Wind className="w-8 h-8 text-light-blue" />,
    image: "https://images.unsplash.com/photo-1631545729918-46c975c61ca8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Manutenção Preventiva",
    description: "Evite problemas futuros e garanta a longevidade do seu aparelho.",
    icon: <ShieldCheck className="w-8 h-8 text-light-blue" />,
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Manutenção Corretiva",
    description: "Conserto rápido e eficiente para todos os tipos de falhas e defeitos.",
    icon: <Wrench className="w-8 h-8 text-light-blue" />,
    image: "https://images.unsplash.com/photo-1621905252507-b354bcadcabc?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Higienização e Limpeza",
    description: "Remoção de fungos e bactérias para um ar mais puro e saudável.",
    icon: <Droplets className="w-8 h-8 text-light-blue" />,
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
  },
  {
    title: "Recarga de Gás",
    description: "Reposição de fluido refrigerante com detecção de vazamentos.",
    icon: <ThermometerSnowflake className="w-8 h-8 text-light-blue" />,
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Projetos",
    description: "Dimensionamento e planejamento completo de sistemas de climatização.",
    icon: <Layout className="w-8 h-8 text-light-blue" />,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
  }
];

export const REVIEWS: TestimonialProps[] = [
  {
    name: "Arthur Bertunes",
    text: "Muito bom atendimento, serviço de qualidade e preço justo. Recomendo!",
    rating: 5
  },
  {
    name: "Joilson de Castro",
    text: "Gostei muito do serviço prestado. Profissionais educados e técnicos.",
    rating: 5
  },
  {
    name: "Maria Silva",
    text: "Fizeram a limpeza do meu ar e ficou excelente. Gelando muito agora.",
    rating: 4.5
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "Atendimento Rápido",
    description: "Resposta ágil para toda a região de Xinguara.",
    icon: <Clock className="w-6 h-6 text-accent-orange" />
  },
  {
    title: "Profissionais Qualificados",
    description: "Técnicos certificados com anos de experiência.",
    icon: <Zap className="w-6 h-6 text-accent-orange" />
  },
  {
    title: "Avaliação 4.8",
    description: "Reconhecidos pela excelência no Google Reviews.",
    icon: <Star className="w-6 h-6 text-accent-orange" />
  },
  {
    title: "Orçamento sem Compromisso",
    description: "Transparência total desde o primeiro contato.",
    icon: <MapPin className="w-6 h-6 text-accent-orange" />
  }
];

export const GALLERY_IMAGES = [
  { url: "https://lh3.googleusercontent.com/p/AF1QipMt5pI4X5k-r1NoX8cpSo7lS_nFGKg61KkcjgdO=s1360-w1360-h1020", alt: "Serviço Brisa Norte 1" },
  { url: "https://images.unsplash.com/photo-1621905252507-b354bcadcabc?q=80&w=2070&auto=format&fit=crop", alt: "Manutenção de Ar Condicionado" },
  { url: "https://images.unsplash.com/photo-1599933310633-2f2864303562?q=80&w=2070&auto=format&fit=crop", alt: "Instalação Profissional" },
  { url: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=2070&auto=format&fit=crop", alt: "Equipe Técnica" },
  { url: "https://images.unsplash.com/photo-1614935151651-0bea6508db6b?q=80&w=2070&auto=format&fit=crop", alt: "Limpeza de Filtros" },
  { url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop", alt: "Climatização Industrial" },
  { url: "https://images.unsplash.com/photo-1517646281042-749510d56d82?q=80&w=2070&auto=format&fit=crop", alt: "Ferramentas Especializadas" },
  { url: "https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=2070&auto=format&fit=crop", alt: "Manutenção Preventiva" },
  { url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop", alt: "Ambiente Confortável" },
  { url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop", alt: "Atendimento Técnico" }
];
