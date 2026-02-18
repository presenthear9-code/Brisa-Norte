
import React from 'react';
import { Phone, Star, ShieldCheck, ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-soft-gray/50 -z-10 skew-x-[-12deg] translate-x-20 hidden lg:block"></div>
      <div className="blob -top-24 -left-24 opacity-40"></div>
      <div className="blob bottom-0 right-0 opacity-30" style={{ animationDelay: '-8s', background: 'radial-gradient(circle, rgba(243, 156, 18, 0.08) 0%, rgba(255, 255, 255, 0) 70%)' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-24">
          
          {/* Lado Esquerdo: Conteúdo e Texto */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-deep-blue/5 border border-deep-blue/10 mb-6 lg:mb-8 animate-fade-in shadow-sm">
              <div className="flex text-accent-orange">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="text-[10px] font-black text-deep-blue uppercase tracking-[0.2em]">4.8 no Google • Xinguara - PA</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-deep-blue leading-[1.1] lg:leading-[0.95] mb-6 lg:mb-8 tracking-tighter">
              Referência em <br />
              <span className="text-gradient">Climatização</span> <br className="hidden md:block" />
              <span className="relative">
                em Xinguara
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-light-blue/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-500 mb-8 lg:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
             Com fabricação própria e assistência presencial, oferecemos climatizadores evaporativos de alto desempenho, ventiladores industriais e exaustores.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-12 lg:mb-16">
              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Olá! Gostaria de um orçamento para climatização.`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-deep-blue text-white font-black rounded-2xl shadow-2xl shadow-deep-blue/30 hover:bg-light-blue transition-all transform hover:-translate-y-1 text-lg group"
              >
                Solicitar Orçamento
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-white border-2 border-gray-100 text-deep-blue font-black rounded-2xl hover:border-light-blue hover:text-light-blue transition-all transform hover:-translate-y-1 text-lg"
              >
                <Phone className="w-5 h-5 mr-3 text-light-blue" />
                Ligar Agora
              </a>
            </div>

            {/* Benefícios rápidos */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-10">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold text-deep-blue">Garantia de Serviço</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold text-deep-blue">Técnicos Certificados</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span className="text-sm font-bold text-deep-blue">Peças Originais</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Imagem e Badges Flutuantes */}
          <div className="w-full lg:w-2/5 relative mt-8 lg:mt-0">
            <div className="relative z-10 mx-auto max-w-[400px] lg:max-w-none">
              {/* Moldura da Imagem Principal */}
              <div className="relative rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_-15px_rgba(13,44,84,0.25)] border-[10px] border-white group">
                <img
                  src="https://lh3.googleusercontent.com/p/AF1QipMpU2UdfLhcnHm7SWeDYaT8co0smfFW3NvToUPa=s1360-w1360-h1020-rw"
                  alt="Sede da Brisa Norte Climatização em Xinguara"
                  className="w-full h-[450px] lg:h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/40 to-transparent"></div>
              </div>
              
              {/* Badge Flutuante 1: Experiência */}
              <div className="absolute -top-6 -right-6 lg:-right-10 bg-white p-5 lg:p-6 rounded-3xl shadow-2xl z-20 border border-gray-50 animate-bounce-slow">
                <div className="text-center">
                  <p className="text-2xl lg:text-3xl font-black text-light-blue leading-none">10+</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Anos de Experiência</p>
                </div>
              </div>

              {/* Badge Flutuante 2: Localização */}
              <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-white p-5 lg:p-6 rounded-3xl shadow-2xl z-20 border border-gray-50 animate-float-slow">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-light-blue/10 rounded-2xl flex items-center justify-center text-light-blue">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm font-black text-deep-blue leading-none">Atendimento em Xinguara</p>
                    <p className="text-[10px] text-gray-400 font-bold mt-1 uppercase tracking-widest">Toda a Região</p>
                  </div>
                </div>
              </div>
              
              {/* Elementos abstratos de design */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-accent-orange/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 bg-light-blue/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-8px, -8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s infinite ease-in-out;
        }
        .animate-float-slow {
          animation: float-slow 5s infinite ease-in-out;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
