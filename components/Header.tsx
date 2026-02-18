
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`glass rounded-2xl md:rounded-full px-6 md:px-10 flex justify-between items-center h-20 shadow-2xl shadow-black/5 border border-white/40`}>
          <div className="flex items-center">
            <a href="#home">
              <Logo className="h-10 md:h-12" />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-500 hover:text-deep-blue font-bold text-sm uppercase tracking-widest transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-light-blue transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="text-deep-blue font-bold text-sm flex items-center hover:text-light-blue transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              {COMPANY_INFO.phone}
            </a>
            <a
              href="#contato"
              className="bg-deep-blue text-white px-8 py-3.5 rounded-full hover:bg-light-blue transition-all font-bold text-sm shadow-xl shadow-deep-blue/20 flex items-center group overflow-hidden relative"
            >
              <span className="relative z-10">ORÇAMENTO</span>
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-light-blue to-deep-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-deep-blue focus:outline-none"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden fixed inset-0 z-[101] bg-white transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col p-10">
          <div className="flex justify-between items-center mb-16">
            <Logo className="h-12" />
            <button onClick={() => setIsOpen(false)}>
              <X className="w-10 h-10 text-deep-blue" />
            </button>
          </div>
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-black text-deep-blue border-b border-gray-100 pb-4"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-auto">
            <a
              href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
              className="flex justify-center items-center w-full bg-deep-blue text-white py-6 rounded-2xl font-bold text-xl shadow-2xl"
            >
              Solicitar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
