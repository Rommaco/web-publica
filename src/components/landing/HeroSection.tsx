'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Counter from '@/components/ui/Counter';
import ScrollReveal from '@/components/ui/ScrollReveal';
import ParallaxSection from '@/components/ui/ParallaxSection';
import { Rocket, Gift, Play, Check, Clock, TrendingUp, AlertTriangle, Bot, BarChart3 } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 overflow-hidden pt-20 sm:pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/cow-pattern.svg')] opacity-5"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <ParallaxSection speed={0.3} fadeOut={true} className="text-center lg:text-left">
            <ScrollReveal id="hero-badge" direction="up" delay={100}>
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
                <Rocket className="w-4 h-4 mr-2" />
                Nuevo: IA para predicción de partos
              </div>
            </ScrollReveal>
            
            <ScrollReveal id="hero-title" direction="up" delay={200}>
              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-green-800">CATLEDAN</span>
                <br />
                Sistema{' '}
                <span className="text-green-600">Integral</span>
                {' '}Ganadero con{' '}
                <span className="text-green-500">IA</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal id="hero-subtitle" direction="up" delay={300}>
              {/* Subheadline */}
              <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
                El sistema más completo para productores ganaderos. Optimiza tu reproducción, 
                aumenta tu producción <span className="font-semibold text-green-600">35%</span> y 
                reduce costos <span className="font-semibold text-green-800">25%</span> con 
                inteligencia artificial especializada.
              </p>
            </ScrollReveal>
            
            <ScrollReveal id="hero-buttons" direction="up" delay={400}>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
                <Button 
                  variant="primary" 
                  size="xl"
                  className="w-full sm:w-auto text-base sm:text-lg"
                >
                  <Gift className="w-5 h-5 mr-2" />
                  Comenzar Gratis - 14 días
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  className="w-full sm:w-auto text-base sm:text-lg"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Ver Demo en Vivo
                </Button>
              </div>
            </ScrollReveal>
            
            <ScrollReveal id="hero-stats" direction="up" delay={500}>
              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-center lg:text-left">
                <div>
                  <Counter 
                    end={10000} 
                    suffix="+" 
                    className="text-xl sm:text-2xl font-bold text-green-800"
                    startDelay={100}
                  />
                  <div className="text-xs sm:text-sm text-gray-600">Ganaderos activos</div>
                </div>
                <div>
                  <Counter 
                    end={35} 
                    suffix="%" 
                    className="text-xl sm:text-2xl font-bold text-green-600"
                    startDelay={200}
                  />
                  <div className="text-xs sm:text-sm text-gray-600">Aumento producción</div>
                </div>
                <div>
                  <Counter 
                    end={25} 
                    suffix="%" 
                    className="text-xl sm:text-2xl font-bold text-green-500"
                    startDelay={300}
                  />
                  <div className="text-xs sm:text-sm text-gray-600">Reducción costos</div>
                </div>
                <div>
                  <Counter 
                    end={98} 
                    suffix="%" 
                    className="text-xl sm:text-2xl font-bold text-green-800"
                    startDelay={400}
                  />
                  <div className="text-xs sm:text-sm text-gray-600">Precisión IA</div>
                </div>
              </div>
            </ScrollReveal>
          </ParallaxSection>
          
          {/* Right Column - Dashboard Preview */}
          <ParallaxSection speed={0.2} className="relative">
            <ScrollReveal id="hero-dashboard" direction="left" delay={600}>
              {/* Dashboard Mockup */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 border border-gray-200">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center">
                      <Image 
                        src="/logo/color catledan.svg" 
                        alt="CATLEDAN" 
                        width={24}
                        height={24}
                        className="h-4 sm:h-6 w-auto"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900">CATLEDAN</h3>
                      <p className="text-xs sm:text-sm text-gray-600">Sistema Integral Ganadero</p>
                    </div>
                  </div>
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                  <div className="bg-green-50 rounded-lg p-3 sm:p-4 border border-green-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs sm:text-sm text-green-800 font-medium">Preñadas</p>
                        <Counter 
                          end={15} 
                          className="text-lg sm:text-2xl font-bold text-green-800"
                          startDelay={500}
                        />
                      </div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-100 rounded-lg p-3 sm:p-4 border border-green-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs sm:text-sm text-green-800 font-medium">Inseminadas</p>
                        <Counter 
                          end={8} 
                          className="text-lg sm:text-2xl font-bold text-green-800"
                          startDelay={600}
                        />
                      </div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-3 sm:p-4 border border-green-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs sm:text-sm text-green-800 font-medium">Producción</p>
                        <Counter 
                          end={450} 
                          suffix="L"
                          className="text-lg sm:text-2xl font-bold text-green-800"
                          startDelay={700}
                        />
                      </div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-3 sm:p-4 border border-red-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs sm:text-sm text-red-600 font-medium">Alertas</p>
                        <Counter 
                          end={3} 
                          className="text-lg sm:text-2xl font-bold text-red-700"
                          startDelay={800}
                        />
                      </div>
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Alert */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-red-800">Claudia - Día 60</p>
                      <p className="text-xs text-red-600">Preparar para inseminación</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center animate-bounce">
                <Bot className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-8 h-8 sm:w-12 sm:h-12 bg-green-50 rounded-full flex items-center justify-center animate-pulse">
                <BarChart3 className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
              </div>
            </ScrollReveal>
          </ParallaxSection>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-16 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
