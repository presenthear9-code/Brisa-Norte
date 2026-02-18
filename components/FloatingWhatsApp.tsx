
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento!`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 group animate-bounce"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
      <span className="absolute right-full mr-3 bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block border border-gray-100">
        Precisando de ajuda?
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
