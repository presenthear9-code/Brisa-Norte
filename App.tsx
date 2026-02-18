
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Gallery from './components/Gallery';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <Header />
      
      <main>
        <Hero />
        
        <Services />
        
        {/* Full Width Quote Section */}
        <section className="py-32 bg-deep-blue relative overflow-hidden">
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
           <div className="max-w-5xl mx-auto px-4 relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-10 leading-tight">
                "Não vendemos apenas ar-condicionado. <br />
                Vendemos o <span className="text-light-blue italic">conforto perfeito</span> para sua vida."
              </h2>
              <div className="w-20 h-1 bg-accent-orange mx-auto rounded-full"></div>
           </div>
        </section>

        <WhyChooseUs />
        <Gallery />
        <Reviews />
        
        {/* Final Sophisticated Lead Gen CTA */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-deep-blue to-light-blue p-16 md:p-24 rounded-[3rem] relative overflow-hidden shadow-3xl">
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                <div className="max-w-2xl text-center lg:text-left">
                   <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                     Transforme seu <br />
                     clima hoje mesmo.
                   </h2>
                   <p className="text-white/70 text-xl font-medium">
                     Nossa equipe está pronta para te atender com agilidade e o profissionalismo que Xinguara confia.
                   </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 shrink-0">
                  <a
                    href="#contato"
                    className="inline-flex items-center justify-center px-12 py-6 bg-white text-deep-blue font-black rounded-2xl shadow-2xl hover:bg-soft-gray transition-all transform hover:-translate-y-1 text-xl"
                  >
                    Agendar Agora
                  </a>
                  <a
                    href={`https://wa.me/${process.env.PHONE_RAW || '94991514806'}`}
                    className="inline-flex items-center justify-center px-12 py-6 bg-white/10 text-white border border-white/20 font-black rounded-2xl hover:bg-white/20 transition-all text-xl backdrop-blur-sm"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
              
              {/* Decorative light elements */}
              <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px]"></div>
              <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-accent-orange/10 rounded-full blur-[100px]"></div>
            </div>
          </div>
        </section>

        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
