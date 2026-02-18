
import React from 'react';
import { SERVICES } from '../constants';
import { ServiceCardProps } from '../types';
import { ArrowRight } from 'lucide-react';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, image }) => (
  <div className="group bg-white rounded-[2.5rem] border border-gray-50 shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(13,44,84,0.1)] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col h-full">
    {/* Image Header */}
    <div className="relative h-64 w-full overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/80 via-transparent to-transparent opacity-60"></div>
      
      {/* Icon Badge Overlay */}
      <div className="absolute bottom-6 left-6 w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-deep-blue shadow-lg transition-all duration-500 group-hover:bg-deep-blue group-hover:text-white transform group-hover:scale-110 group-hover:rotate-6">
        {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-7 h-7 transition-all' })}
      </div>
    </div>
    
    <div className="p-10 flex flex-col flex-grow relative z-10">
      <h3 className="text-2xl font-black text-deep-blue mb-4 group-hover:text-light-blue transition-colors tracking-tight">
        {title}
      </h3>
      <p className="text-gray-500 leading-relaxed mb-8 font-medium flex-grow">
        {description}
      </p>
      
      <div className="flex items-center text-deep-blue font-black text-xs uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform cursor-pointer mt-auto">
        Ver Detalhes
        <ArrowRight className="ml-2 w-4 h-4" />
      </div>
    </div>

    {/* Subtle corner light effect */}
    <div className="absolute top-0 right-0 w-24 h-24 bg-light-blue/5 rounded-bl-[5rem] transition-all duration-500 group-hover:bg-light-blue group-hover:opacity-10 opacity-0 group-hover:opacity-100"></div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-32 bg-soft-gray/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-3xl">
            <span className="text-light-blue font-black uppercase tracking-[0.3em] text-xs mb-4 block">Especialidades</span>
            <h2 className="text-4xl md:text-6xl font-black text-deep-blue leading-tight tracking-tighter">
              Soluções Técnicas de <br />
              <span className="text-gradient">Alto Desempenho.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-lg font-medium border-l-2 border-gray-100 pl-8 hidden lg:block">
            Garantimos o máximo de eficiência energética e o clima ideal para o seu bem-estar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {SERVICES.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
