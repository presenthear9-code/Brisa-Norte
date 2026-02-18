
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Instalação Profissional',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const endpoint = 'https://formspree.io/presenthear9@gmail.com';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Nome: formData.name,
          Telefone: formData.phone,
          Servico: formData.service,
          Mensagem: formData.message,
          _subject: `Novo Orçamento: ${formData.name} - Brisa Norte`
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', service: 'Instalação Profissional', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contato" className="py-32 bg-white relative overflow-hidden">
      <div className="blob -bottom-40 left-1/2 -translate-x-1/2 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 xl:gap-32 items-stretch">
          
          <div className="lg:w-2/5 flex flex-col justify-center">
            <span className="text-light-blue font-black uppercase tracking-[0.3em] text-xs mb-6 block">Vamos Conversar</span>
            <h2 className="text-5xl md:text-7xl font-black text-deep-blue mb-10 leading-[0.9] tracking-tighter">
              Dúvidas ou <br />
              <span className="text-gradient">Projetos?</span>
            </h2>
            <p className="text-gray-500 text-xl mb-16 leading-relaxed font-medium">
              Nossa central de atendimento em Xinguara está pronta para enviar um técnico especializado até você.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-soft-gray rounded-[1.5rem] shadow-sm flex items-center justify-center text-light-blue group-hover:bg-deep-blue group-hover:text-white transition-all duration-500">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-1">Telefone Principal</p>
                  <p className="text-2xl font-black text-deep-blue">{COMPANY_INFO.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 bg-soft-gray rounded-[1.5rem] shadow-sm flex items-center justify-center text-light-blue group-hover:bg-deep-blue group-hover:text-white transition-all duration-500">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-1">Nosso Centro</p>
                  <p className="text-xl font-black text-deep-blue leading-tight">{COMPANY_INFO.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 w-full">
            <div className="bg-soft-gray p-10 md:p-16 rounded-[3rem] border border-gray-100 relative shadow-2xl shadow-black/[0.02]">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-deep-blue uppercase tracking-[0.3em] ml-1">Seu Nome</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="João da Silva"
                      className="w-full px-8 py-5 rounded-2xl bg-white border-none focus:ring-4 focus:ring-light-blue/10 outline-none transition-all text-deep-blue font-bold shadow-sm"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-black text-deep-blue uppercase tracking-[0.3em] ml-1">WhatsApp</label>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(94) 99999-9999"
                      className="w-full px-8 py-5 rounded-2xl bg-white border-none focus:ring-4 focus:ring-light-blue/10 outline-none transition-all text-deep-blue font-bold shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-deep-blue uppercase tracking-[0.3em] ml-1">Tipo de Serviço</label>
                  <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-8 py-5 rounded-2xl bg-white border-none focus:ring-4 focus:ring-light-blue/10 outline-none transition-all text-deep-blue font-bold shadow-sm appearance-none cursor-pointer"
                  >
                    <option>Instalação Profissional</option>
                    <option>Manutenção Preventiva</option>
                    <option>Higienização Completa</option>
                    <option>Reparo Técnico</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-black text-deep-blue uppercase tracking-[0.3em] ml-1">Sua Mensagem</label>
                  <textarea 
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Como podemos ajudar você hoje?"
                    className="w-full px-8 py-5 rounded-2xl bg-white border-none focus:ring-4 focus:ring-light-blue/10 outline-none transition-all text-deep-blue font-bold shadow-sm resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className={`w-full py-6 rounded-2xl font-black text-xl flex items-center justify-center transition-all duration-500 shadow-2xl ${
                    status === 'success' 
                    ? 'bg-green-500 text-white shadow-green-500/20' 
                    : status === 'error'
                    ? 'bg-red-500 text-white'
                    : 'bg-deep-blue hover:bg-light-blue text-white shadow-deep-blue/40'
                  }`}
                >
                  {status === 'idle' && (
                    <>
                      Enviar Orçamento
                      <ArrowRight className="w-6 h-6 ml-3" />
                    </>
                  )}
                  {status === 'sending' && "Processando Solicitação..."}
                  {status === 'success' && <><CheckCircle2 className="w-7 h-7 mr-3" /> Enviado com Sucesso!</>}
                  {status === 'error' && <><AlertCircle className="w-7 h-7 mr-3" /> Falha no envio. Tente o WhatsApp.</>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
