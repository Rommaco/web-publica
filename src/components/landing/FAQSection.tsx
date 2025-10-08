'use client';

import React, { useState } from 'react';
import { Handshake, Smartphone, Phone, MessageCircle, Sparkles } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "¿Cómo funciona la predicción de partos con IA?",
      answer: "Nuestra IA analiza el historial reproductivo, datos de inseminación, y patrones biológicos para predecir con 95% de precisión la fecha exacta del parto. Esto te permite preparar todo con anticipación y evitar complicaciones."
    },
    {
      question: "¿Necesito conocimientos técnicos para usar CATLEDAN?",
      answer: "No, CATLEDAN está diseñado para ser intuitivo. Con solo registrar datos básicos como fechas de inseminación y celos, el sistema genera automáticamente alertas y recomendaciones. Es como usar WhatsApp pero para tu ganado."
    },
    {
      question: "¿Funciona sin internet en el campo?",
      answer: "Sí, CATLEDAN funciona offline. Puedes registrar datos en el campo sin conexión y cuando tengas internet, todo se sincroniza automáticamente. Las alertas se envían por SMS si no hay internet."
    },
    {
      question: "¿Qué pasa si ya tengo mi sistema de registro?",
      answer: "Podemos importar tus datos existentes desde Excel o cualquier sistema. Nuestro equipo técnico te ayuda gratis en la migración para que no pierdas ningún dato importante."
    },
    {
      question: "¿Cómo funciona el banco de sementales?",
      answer: "Accedes a un catálogo completo de sementales probados con sus índices genéticos, precios, y disponibilidad. Puedes comprar semen directamente desde la plataforma y recibir recomendaciones personalizadas para tu rebaño."
    },
    {
      question: "¿Qué garantía tienen las predicciones de IA?",
      answer: "Nuestras predicciones tienen 95% de precisión en fechas de parto y 90% en detección de celos. Si una predicción falla, nuestro equipo veterinario revisa el caso sin costo adicional."
    },
    {
      question: "¿Puedo cancelar en cualquier momento?",
      answer: "Sí, puedes cancelar tu suscripción en cualquier momento sin penalidades. Tus datos permanecen accesibles por 30 días después de la cancelación para que puedas exportarlos."
    },
    {
      question: "¿Hay soporte en español?",
      answer: "Absolutamente. Todo nuestro equipo habla español y conoce la realidad ganadera peruana. Ofrecemos soporte por WhatsApp, llamada telefónica, y chat en vivo en horario de oficina."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-gray-600">
            Resolvemos las dudas más comunes de nuestros ganaderos
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-200 hover:border-green-300 transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-up">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 relative overflow-hidden">
          {/* Background with elegant gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-green-50 to-gray-50 rounded-2xl border border-green-200"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-full opacity-30 -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-green-200 to-green-300 rounded-full opacity-25 translate-x-12 translate-y-12"></div>
          
          {/* Content */}
          <div className="relative z-10 p-8 text-center">
            {/* Header with support icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-full mb-4 shadow-lg">
              <Handshake className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-2">¿Tienes más preguntas?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos está listo para ayudarte personalmente
            </p>
            
            {/* Contact Options */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-green-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="w-6 h-6 text-green-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-1">WhatsApp</div>
                <div className="text-green-600 text-sm font-medium">+51 999 888 777</div>
                <div className="text-xs text-gray-500 mt-1">Respuesta inmediata</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-green-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-1">Llamada</div>
                <div className="text-green-600 text-sm font-medium">Lun-Vie 8AM-6PM</div>
                <div className="text-xs text-gray-500 mt-1">Atención personalizada</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-green-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <div className="font-semibold text-gray-900 mb-1">Chat en vivo</div>
                <div className="text-green-600 text-sm font-medium">Respuesta en 5 min</div>
                <div className="text-xs text-gray-500 mt-1">Soporte técnico</div>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <MessageCircle className="w-5 h-5 mr-2" />
              <span>Contactar Soporte</span>
            </div>
            
            {/* Additional info */}
            <div className="mt-4 text-sm text-gray-500">
              <p><Sparkles className="w-4 h-4 inline mr-1" />Respuesta garantizada en menos de 5 minutos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
