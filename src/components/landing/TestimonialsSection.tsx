'use client';

import React, { useState } from 'react';
import { Target, Rocket, Sparkles } from 'lucide-react';
import Counter from '@/components/ui/Counter';
import TestimonialStat from '@/components/ui/TestimonialStat';

const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Carlos Mendoza",
      role: "Ganadero, Arequipa",
      initials: "CM",
      quote: "Desde que uso el sistema, mi producción de leche aumentó 40%. Las alertas del día 60 me salvaron de perder 3 celos. Es como tener un veterinario 24/7.",
      stats: [
        { value: "+40%", label: "Producción" },
        { value: "0", label: "Celos perdidos" },
        { value: "3h", label: "Menos trabajo" }
      ],
      color: "green"
    },
    {
      id: 2,
      name: "María Elena Rojas",
      role: "Ganadera, Lima",
      initials: "MR",
      quote: "La IA me predijo exactamente cuándo iba a parir mi mejor vaca. Pude preparar todo con tiempo y evitar complicaciones. Invaluable.",
      stats: [
        { value: "95%", label: "Precisión" },
        { value: "S/2,500", label: "Ahorrado" },
        { value: "100%", label: "Partos exitosos" }
      ],
      color: "blue"
    },
    {
      id: 3,
      name: "Roberto Silva",
      role: "Ganadero, Cusco",
      initials: "RS",
      quote: "El banco de sementales me ayudó a mejorar la genética de mi rebaño. En 6 meses ya veo la diferencia en la calidad de mis animales.",
      stats: [
        { value: "Genética", label: "Mejorada" },
        { value: "+25%", label: "Valor animal" },
        { value: "Mejor", label: "Preñez" }
      ],
      color: "purple"
    },
    {
      id: 4,
      name: "Ana Patricia Quispe",
      role: "Ganadera, Huancayo",
      initials: "AQ",
      quote: "El sistema de alertas climáticas me ayudó a salvar mi pasto durante la sequía. Preparé todo con anticipación y no perdí ni un animal.",
      stats: [
        { value: "100%", label: "Animales salvados" },
        { value: "S/5,000", label: "Ahorrado en pasto" },
        { value: "0%", label: "Pérdidas" }
      ],
      color: "green"
    },
    {
      id: 5,
      name: "Miguel Ángel Torres",
      role: "Ganadero, Trujillo",
      initials: "MT",
      quote: "La comunidad de ganaderos me conectó con veterinarios especialistas. Ahora tengo acceso a la mejor atención para mi rebaño.",
      stats: [
        { value: "24/7", label: "Soporte" },
        { value: "50+", label: "Veterinarios" },
        { value: "100%", label: "Satisfacción" }
      ],
      color: "blue"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Casos de éxito reales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ganaderos peruanos que ya transformaron su producción con CATLEDAN
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                  <div className={`bg-gradient-to-br ${
                    testimonial.color === 'green' ? 'from-green-50 to-green-100 border-green-200' :
                    testimonial.color === 'blue' ? 'from-blue-50 to-blue-100 border-blue-200' :
                    'from-purple-50 to-purple-100 border-purple-200'
                  } rounded-2xl p-8 h-full border`}>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 ${
                        testimonial.color === 'green' ? 'bg-green-600' :
                        testimonial.color === 'blue' ? 'bg-blue-600' :
                        'bg-purple-600'
                      } rounded-full flex items-center justify-center mr-4`}>
                        <span className="text-white text-xl font-bold">{testimonial.initials}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                        <p className={`${
                          testimonial.color === 'green' ? 'text-green-600' :
                          testimonial.color === 'blue' ? 'text-blue-600' :
                          'text-purple-600'
                        } font-medium`}>{testimonial.role}</p>
                        <div className="flex text-yellow-400">
                          ⭐⭐⭐⭐⭐
                        </div>
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-700 mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    
                        <div className="grid grid-cols-3 gap-4 text-center">
                          {testimonial.stats.map((stat, statIndex) => (
                            <TestimonialStat
                              key={statIndex}
                              value={stat.value}
                              label={stat.label}
                              color={testimonial.color}
                              delay={100 + (statIndex * 100)}
                            />
                          ))}
                        </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors z-10"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-green-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 relative overflow-hidden">
          {/* Background with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-green-100 to-green-50 rounded-2xl"></div>
          
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-green-300 rounded-full opacity-25 animate-bounce" style={{animationDuration: '2.5s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-green-200 rounded-full opacity-15 animate-ping" style={{animationDuration: '3s'}}></div>
          
          {/* Content */}
          <div className="relative z-10 p-8">
            <div className="text-center mb-8">
              {/* Header with target icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full mb-4 shadow-lg animate-pulse">
                <Target className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Números que hablan</h3>
              <p className="text-gray-600">Resultados reales de nuestros usuarios</p>
            </div>
            
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <Counter 
                      end={10000} 
                      suffix="+" 
                      className="text-3xl font-bold text-green-600 mb-2"
                      startDelay={100}
                    />
                    <div className="text-gray-700 font-medium">Ganaderos activos</div>
                  </div>
                  <div className="text-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <Counter 
                      end={50} 
                      prefix="$" 
                      suffix="M+" 
                      className="text-3xl font-bold text-green-600 mb-2"
                      startDelay={200}
                    />
                    <div className="text-gray-700 font-medium">Producción optimizada</div>
                  </div>
                  <div className="text-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <Counter 
                      end={98} 
                      suffix="%" 
                      className="text-3xl font-bold text-green-600 mb-2"
                      startDelay={300}
                    />
                    <div className="text-gray-700 font-medium">Satisfacción del cliente</div>
                  </div>
                  <div className="text-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                    <div className="text-gray-700 font-medium">Soporte especializado</div>
                  </div>
                </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Rocket className="w-5 h-5 mr-2" />
            <span>Únete a los ganaderos exitosos</span>
          </div>
          <p className="text-sm text-gray-500 mt-3"><Sparkles className="w-4 h-4 inline mr-1" />Más de 10,000 ganaderos ya confían en CATLEDAN</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
