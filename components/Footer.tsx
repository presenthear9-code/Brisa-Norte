
import React from 'react';
import { Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-extrabold">Brisa</span>
              <span className="text-2xl font-extrabold text-light-blue">Norte</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Especialistas em instalação e manutenção de ar-condicionado em Xinguara – PA. 
              Compromisso com a sua climatização e bem-estar.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-light-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-light-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Menu Rápido</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Início</a></li>
              <li><a href="#servicos" className="text-white/70 hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="text-white/70 hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#depoimentos" className="text-white/70 hover:text-white transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Nossos Serviços</h4>
            <ul className="space-y-4">
              <li className="text-white/70">Instalação Residencial</li>
              <li className="text-white/70">Manutenção de Ar-Condicionado</li>
              <li className="text-white/70">Higienização Profissional</li>
              <li className="text-white/70">Projetos de Climatização</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Fale Conosco</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 mr-3 text-light-blue shrink-0" />
                <span className="text-white/70">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-light-blue shrink-0" />
                <span className="text-white/70">
                  {COMPANY_INFO.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-xs">
          <p>© {new Date().getFullYear()} Brisa Norte Climatização. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ: Consultar via WhatsApp | Atendemos Xinguara e Região</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
