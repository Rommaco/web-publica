'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import Counter from '@/components/ui/Counter';
import { Gift, Clock, Sparkles } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="planes" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Elige el plan perfecto para tu operación
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde ganaderos pequeños hasta grandes productores, tenemos el plan ideal para ti
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Plan FREE */}
          <div className="animate-fade-up">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-green-300 transition-all duration-300 h-full">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                  💚 Para empezar
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan FREE</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$0</div>
                <div className="text-gray-600">/mes</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Hasta 50 animales</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Alertas básicas</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Dashboard simple</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Soporte por email</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">14 días gratis</span>
                </li>
              </ul>

              <div className="text-center">
                <Button variant="outline" className="w-full">
                  Comenzar Gratis
                </Button>
                <p className="text-xs text-gray-500 mt-2">Perfecto para probar</p>
              </div>
            </div>
          </div>

          {/* Plan PRO - Más Popular */}
          <div className="animate-fade-up" style={{animationDelay: '0.1s'}}>
            <div className="bg-white rounded-2xl p-8 border-2 border-green-500 relative h-full">
              {/* Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  ⭐ Más Popular
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                  🚀 Recomendado
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan PRO</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$29</div>
                <div className="text-gray-600">/mes</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Animales ilimitados</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">IA completa (predicciones, optimización)</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Alertas avanzadas</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Clima local integrado</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Soporte prioritario</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Reportes avanzados</span>
                </li>
              </ul>

              <div className="text-center">
                <Button variant="primary" className="w-full">
                  Comenzar Prueba
                </Button>
                <p className="text-xs text-gray-500 mt-2">Para productores medianos</p>
              </div>
            </div>
          </div>

          {/* Plan GENÉTICA */}
          <div className="animate-fade-up" style={{animationDelay: '0.2s'}}>
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 h-full">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 text-sm font-medium mb-4">
                  🧬 Premium
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Plan GENÉTICA</h3>
                <div className="text-4xl font-bold text-purple-600 mb-2">$59</div>
                <div className="text-gray-600">/mes</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Todo lo del Plan Pro</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Banco de sementales completo</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Análisis genético avanzado</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Marketplace integrado</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Consultoría especializada</span>
                </li>
                <li className="flex items-center">
                  <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Soporte 24/7</span>
                </li>
              </ul>

              <div className="text-center">
                <Button variant="secondary" className="w-full">
                  Comenzar Prueba
                </Button>
                <p className="text-xs text-gray-500 mt-2">Para maximizar genética</p>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Options */}

        {/* Special Offer */}
        <div className="mt-12 relative overflow-hidden">
          {/* Background with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-green-100 to-green-50 rounded-2xl"></div>
          
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-20 h-20 bg-green-200 rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-green-300 rounded-full opacity-20 animate-bounce" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-green-200 rounded-full opacity-25 animate-ping" style={{animationDuration: '4s'}}></div>
          
          {/* Content */}
          <div className="relative z-10 p-8 text-center">
            {/* Header with gift icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full mb-4 shadow-lg animate-bounce">
              <Gift className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Oferta Especial de Lanzamiento</h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Primeros 100 usuarios obtienen <span className="font-bold text-green-600">30 días GRATIS</span> + 
              <span className="font-bold text-green-600"> Consultoría genética incluida</span>
            </p>
            
            {/* Prominent CTA */}
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Clock className="w-5 h-5 mr-2" />
              <span>Solo quedan <Counter end={47} className="inline font-bold" startDelay={100} /> cupos disponibles</span>
            </div>
            
            {/* Additional info */}
            <div className="mt-4 text-sm text-gray-600">
              <p><Sparkles className="w-4 h-4 inline mr-1" />Oferta válida hasta agotar cupos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
