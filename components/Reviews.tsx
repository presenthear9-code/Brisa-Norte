
import React from 'react';
import { Star } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-light-blue font-bold tracking-wider uppercase text-sm mb-3">DEPOIMENTOS</h2>
          <p className="text-3xl md:text-4xl font-extrabold text-deep-blue">O que nossos clientes dizem</p>
          <div className="flex justify-center mt-4 space-x-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 font-bold text-gray-700">4.8</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl relative">
              <div className="text-light-blue/20 absolute top-4 right-8 text-6xl font-serif">“</div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(review.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-deep-blue rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-bold text-deep-blue">{review.name}</p>
                  <p className="text-xs text-gray-500 font-medium">Cliente Google</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
