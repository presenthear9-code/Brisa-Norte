
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsToShow(3);
      else if (window.innerWidth >= 768) setItemsToShow(2);
      else setItemsToShow(1);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const next = () => {
    setCurrentIndex((prev) => 
      prev + 1 >= GALLERY_IMAGES.length - (itemsToShow - 1) ? 0 : prev + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? GALLERY_IMAGES.length - itemsToShow : prev - 1
    );
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [itemsToShow]);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-light-blue font-bold tracking-wider uppercase text-sm mb-3">NOSSO PORTFÓLIO</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-deep-blue">Galeria de Serviços</p>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Confira alguns de nossos trabalhos realizados em Xinguara e região. Qualidade e capricho em cada instalação.
          </p>
        </div>

        <div className="relative">
          <div className="flex transition-transform duration-500 ease-out" 
               style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}>
            {GALLERY_IMAGES.map((image, index) => (
              <div key={index} 
                   className="px-2 shrink-0 transition-all" 
                   style={{ width: `${100 / itemsToShow}%` }}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                  <img 
                    src={image.url} 
                    alt={image.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-medium">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-3 rounded-full shadow-xl text-deep-blue hover:text-light-blue transition-all z-20 focus:outline-none hidden sm:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-3 rounded-full shadow-xl text-deep-blue hover:text-light-blue transition-all z-20 focus:outline-none hidden sm:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: Math.ceil(GALLERY_IMAGES.length / itemsToShow) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * itemsToShow)}
              className={`h-2 rounded-full transition-all ${
                Math.floor(currentIndex / itemsToShow) === i ? 'w-8 bg-light-blue' : 'w-2 bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
