'use client';

import React from 'react';
import { AlertTriangle, Bot, Dna, CloudRain, Star } from 'lucide-react';
import Counter from '@/components/ui/Counter';
import ScrollReveal from '@/components/ui/ScrollReveal';

const FeaturesSection: React.FC = () => {
  return (
    <section id="caracteristicas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal id="features-header" direction="up" delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Funcionalidades que revolucionan tu ganadería
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4 características core que transforman la gestión ganadera tradicional en un sistema inteligente
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          
          {/* Feature 1: Sistema de Alertas - Large Card */}
          <ScrollReveal id="feature-alerts" direction="up" delay={200} className="lg:col-span-2 lg:row-span-2">
            <div className="bg-white rounded-2xl p-8 h-full border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-100 rounded-full translate-y-12 -translate-x-12 opacity-30"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center mr-6 shadow-lg">
                    <AlertTriangle className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Sistema de Alertas Inteligentes</h3>
                    <p className="text-gray-600 text-lg">Tu asistente personal que nunca duerme</p>
                    <div className="flex items-center mt-2">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm text-green-600 font-medium">Funcionalidad más utilizada</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Alertas Automáticas</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-700"><strong>Día 60 automático:</strong> "Preparar vaca para inseminación"</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-700"><strong>Celos en tiempo real:</strong> "CLAUDIA en celo - Acción inmediata"</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-700"><strong>Alertas preparto:</strong> 15 días antes de fecha estimada</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Protocolos Inteligentes</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-700"><strong>Protocolos sanitarios:</strong> Lavados, vitaminados automáticos</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-700"><strong>Marcar en rojo:</strong> Sistema visual de prioridades</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-700"><strong>Recordatorios SMS:</strong> Notificaciones por WhatsApp</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="text-center flex-1">
                      <Counter 
                        end={80} 
                        suffix="%" 
                        className="text-5xl font-bold text-green-600 mb-2"
                        startDelay={100}
                      />
                      <div className="text-green-700 font-medium">Reducción en tiempo de gestión manual</div>
                    </div>
                    <div className="text-center flex-1">
                      <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                      <div className="text-green-700 font-medium">Monitoreo continuo</div>
                    </div>
                    <div className="text-center flex-1">
                      <Counter 
                        end={100} 
                        suffix="%" 
                        className="text-3xl font-bold text-green-600 mb-2"
                        startDelay={200}
                      />
                      <div className="text-green-700 font-medium">Alertas críticas cubiertas</div>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </ScrollReveal>

          {/* Feature 2: IA Especializada - Medium Card */}
          <ScrollReveal id="feature-ai" direction="up" delay={300}>
            <div className="bg-white rounded-2xl p-6 h-full border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Bot className="w-8 h-8 text-white" />
                    </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">IA Especializada</h3>
                <p className="text-gray-600 text-sm">Predicciones precisas para maximizar producción</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Predicción de partos 95%</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Optimización de celos</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Análisis genético</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Detección temprana</span>
                </li>
              </ul>
              
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-center">
                  <Counter 
                    end={35} 
                    suffix="%" 
                    className="text-2xl font-bold text-green-600"
                    startDelay={300}
                  />
                  <div className="text-xs text-green-700">Aumento eficiencia</div>
                </div>
              </div>
            </div>
            </ScrollReveal>

          {/* Feature 3: Banco de Sementales - Medium Card */}
          <ScrollReveal id="feature-genetics" direction="up" delay={400}>
            <div className="bg-white rounded-2xl p-6 h-full border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Dna className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Banco de Sementales</h3>
                <p className="text-gray-600 text-sm">Optimiza la genética de tu rebaño</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Catálogo digital</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Semen sexado</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Líneas sanguíneas</span>
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Marketplace integrado</span>
                </li>
              </ul>
              
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-center">
                  <Counter 
                    end={50} 
                    suffix="%" 
                    className="text-2xl font-bold text-green-600"
                    startDelay={400}
                  />
                  <div className="text-xs text-green-700">Mejora genética</div>
                </div>
              </div>
            </div>
            </ScrollReveal>

          {/* Feature 4: Clima Local - Wide Card */}
          <ScrollReveal id="feature-climate" direction="up" delay={500} className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 h-full border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mr-4">
                      <CloudRain className="w-8 h-8 text-white" />
                    </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Clima Local y Comunidad Peruana</h3>
                  <p className="text-gray-600 text-sm">Adaptado específicamente para el ganadero peruano</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Alertas meteorológicas</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Protocolos estacionales</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Foro de ganaderos</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Red de veterinarios</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Integración SENAMHI</span>
                    </li>
                    <li className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">Telemedicina</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="text-center">
                  <Counter 
                    end={100} 
                    suffix="%" 
                    className="text-2xl font-bold text-green-600"
                    startDelay={500}
                  />
                  <div className="text-xs text-green-700">Adaptación al mercado peruano</div>
                </div>
              </div>
            </div>
            </ScrollReveal>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal id="features-cta" direction="up" delay={600}>
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-green-600 to-green-700 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
              🚀 <span className="ml-2">Descubre todas las funcionalidades</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FeaturesSection;