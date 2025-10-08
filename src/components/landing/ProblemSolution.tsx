import React from 'react';
import { FileText, BarChart3, Brain, Clock, DollarSign, Bell, Smartphone, Bot, TrendingUp, Flag } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            El problema que enfrentas todos los días
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Los ganaderos peruanos pierden miles de soles por gestión manual ineficiente
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          
          {/* Left Side - Problems */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-800 text-sm font-medium mb-4">
                ❌ El Problema Actual
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Los ganaderos pierden <span className="text-red-600">30-40% de rentabilidad</span> por gestión manual ineficiente
              </h3>
            </div>

            {/* Problem List */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-4 animate-fade-up">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <FileText className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Gestión en papel</h4>
                  <p className="text-gray-600">Pérdida de información valiosa, errores de cálculo, falta de sincronización</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-up" style={{animationDelay: '0.1s'}}>
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Excel obsoleto</h4>
                  <p className="text-gray-600">Sin alertas automáticas, sin predicciones, sin optimización inteligente</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-up" style={{animationDelay: '0.2s'}}>
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Brain className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Decisiones intuitivas</h4>
                  <p className="text-gray-600">Sin datos para optimizar, pérdida de oportunidades, errores costosos</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-up" style={{animationDelay: '0.3s'}}>
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Clock className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Tiempo perdido</h4>
                  <p className="text-gray-600">4+ horas diarias en gestión manual, menos tiempo para el negocio</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-up" style={{animationDelay: '0.4s'}}>
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Costos ocultos</h4>
                  <p className="text-gray-600">Celos perdidos, partos complicados, tratamientos tardíos</p>
                </div>
              </div>
            </div>

            {/* Cost Impact */}
            <div className="bg-red-50 rounded-xl p-6 border border-red-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">S/15,000+</div>
                <div className="text-sm text-red-700">Pérdidas promedio anuales por ganadero mediano</div>
              </div>
            </div>
          </div>

          {/* Right Side - Solution */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
                ✅ Nuestra Solución
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Digitaliza y optimiza toda tu operación ganadera con <span className="text-green-600">IA especializada</span>
              </h3>
            </div>

            {/* Solution List */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 animate-fade-up">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Bell className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Alertas automáticas</h4>
                  <p className="text-gray-600">&ldquo;Día 60 para preparar vaca&rdquo;, celos en tiempo real, protocolos automáticos</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-up" style={{animationDelay: '0.1s'}}>
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Dashboard inteligente</h4>
                  <p className="text-gray-600">Todo en un lugar, métricas en tiempo real, decisiones basadas en datos</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-up" style={{animationDelay: '0.2s'}}>
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">IA predictiva</h4>
                  <p className="text-gray-600">Predicciones de partos, optimización de celos, detección temprana</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-up" style={{animationDelay: '0.3s'}}>
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Métricas en tiempo real</h4>
                  <p className="text-gray-600">KPIs automáticos, reportes inteligentes, análisis de rentabilidad</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 animate-fade-up" style={{animationDelay: '0.4s'}}>
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Flag className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Adaptado al Perú</h4>
                  <p className="text-gray-600">Clima local, protocolos SENASA, comunidad ganadera peruana</p>
                </div>
              </div>
            </div>

            {/* Benefit Impact */}
            <div className="bg-green-50 rounded-xl p-6 border border-green-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-800 mb-2">S/25,000+</div>
                <div className="text-sm text-green-600">Ahorro promedio anual por ganadero mediano</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-100 text-green-800 text-lg font-medium">
            💡 <span className="ml-2">¿Listo para transformar tu ganadería?</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
