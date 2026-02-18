
import React from 'react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop"
                alt="Equipe Brisa Norte"
                className="rounded-3xl shadow-2xl z-10 relative"
              />
              <div className="absolute -bottom-6 -right-6 bg-deep-blue text-white p-8 rounded-2xl shadow-xl z-20 hidden sm:block">
                <p className="text-4xl font-bold mb-1">4.8</p>
                <p className="text-sm font-medium opacity-80">Avaliação Google</p>
                <div className="flex mt-2 text-yellow-400">
                  {"★".repeat(5)}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-light-blue font-bold tracking-wider uppercase text-sm mb-3">DIFERENCIAIS</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-deep-blue mb-8">
              Por que escolher a Brisa Norte?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {WHY_CHOOSE_US.map((item, index) => (
                <div key={index} className="flex flex-col space-y-3">
                  <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-bold text-deep-blue">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm inline-block">
              <p className="text-gray-600 font-medium">Atendemos toda Xinguara e Região</p>
              <p className="text-deep-blue font-bold text-xl mt-1">{COMPANY_INFO.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
