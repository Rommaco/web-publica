import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Smartphone, Lock, Shield, CheckCircle, Trophy, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-1 mb-1">
              <div className="w-40 h-40 flex items-center justify-center">
                <Image 
                  src="/logo/color catledan.svg" 
                  alt="CATLEDAN Logo" 
                  width={56}
                  height={56}
                  className="h-14 w-auto filter brightness-0 invert"
                />
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              La plataforma más completa para productores ganaderos. Optimiza tu reproducción, 
              aumenta tu producción y reduce costos con inteligencia artificial especializada.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                <Smartphone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Producto</h3>
            <ul className="space-y-3">
              <li>
                <a href="#caracteristicas" className="text-gray-300 hover:text-white transition-colors">
                  Características
                </a>
              </li>
              <li>
                <a href="#planes" className="text-gray-300 hover:text-white transition-colors">
                  Planes y Precios
                </a>
              </li>
              <li>
                <a href="/demo" className="text-gray-300 hover:text-white transition-colors">
                  Demo en Vivo
                </a>
              </li>
              <li>
                <a href="/api" className="text-gray-300 hover:text-white transition-colors">
                  API para Desarrolladores
                </a>
              </li>
              <li>
                <a href="/integraciones" className="text-gray-300 hover:text-white transition-colors">
                  Integraciones
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Soporte</h3>
            <ul className="space-y-3">
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="/ayuda" className="text-gray-300 hover:text-white transition-colors">
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="/tutoriales" className="text-gray-300 hover:text-white transition-colors">
                  Tutoriales
                </a>
              </li>
              <li>
                <a href="/webinars" className="text-gray-300 hover:text-white transition-colors">
                  Webinars
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 CATLEDAN. Todos los derechos reservados.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="/terminos" className="text-gray-400 hover:text-white transition-colors">
                Términos de Servicio
              </a>
              <a href="/privacidad" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Política de Cookies
              </a>
              <a href="/legal" className="text-gray-400 hover:text-white transition-colors">
                Aviso Legal
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <Lock className="w-4 h-4 text-green-500" />
              <span className="text-sm">SSL Seguro</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span className="text-sm">Datos Protegidos</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm">SENASA Certificado</span>
            </div>
            <div className="flex items-center space-x-2">
              <Trophy className="w-4 h-4 text-green-500" />
              <span className="text-sm">Mejor Software 2024</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-400">
            <div>
              <div className="font-semibold text-white mb-1 flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </div>
              <div>hola@catledan.com</div>
            </div>
            <div>
              <div className="font-semibold text-white mb-1 flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                Teléfono
              </div>
              <div>+51 999 888 777</div>
            </div>
            <div>
              <div className="font-semibold text-white mb-1 flex items-center justify-center">
                <MapPin className="w-4 h-4 mr-2" />
                Oficina
              </div>
              <div>Lima, Perú</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
