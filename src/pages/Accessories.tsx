import React from "react";
import AccessoryCard from "@/components/AccessoryCard";
import { Accessory } from "@/types/product";
import { Droplets, Zap, Thermometer, Beaker } from "lucide-react";

const sampleAccessories: Accessory[] = [
  {
    id: "acc-1",
    name: "Panel de Luz LED de Crecimiento",
    price: 189.99,
    image:
      "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=400&h=400&fit=crop&crop=center",
    description:
      "Iluminación LED de espectro completo para crecimiento óptimo de plantas",
    category: "iluminacion",
  },
  {
    id: "acc-2",
    name: "Kit de Nutrientes Hidropónicos",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=400&fit=crop&crop=center",
    description:
      "Solución nutritiva completa para desarrollo saludable de plantas",
    category: "nutrientes",
  },
  {
    id: "acc-3",
    name: "Bomba de Circulación de Agua",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop&crop=center",
    description: "Circulación eficiente de agua para sistemas hidropónicos",
    category: "bombas",
  },
  {
    id: "acc-4",
    name: "Medio de Cultivo - Lana de Roca",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&crop=center",
    description: "Cubos de lana de roca premium para germinación y crecimiento",
    category: "medio-cultivo",
  },
  {
    id: "acc-5",
    name: "Kit de Prueba de pH",
    price: 35.99,
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=400&fit=crop&crop=center",
    description: "Medidor digital de pH y soluciones de calibración",
    category: "monitoreo",
  },
  {
    id: "acc-6",
    name: "Sensor de Control Climático",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop&crop=center",
    description: "Monitoreo de temperatura, humedad y calidad del aire",
    category: "sensores",
  },
  {
    id: "acc-7",
    name: "Paquete de Semillas Orgánicas",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&crop=center",
    description: "Variedad de semillas orgánicas de vegetales y hierbas",
    category: "semillas",
  },
  {
    id: "acc-8",
    name: "Sistema de Control de Tiempo",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop&crop=center",
    description: "Control automatizado de tiempos para luces y bombas",
    category: "automatizacion",
  },
];

const Accessories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-noabloon-light-green-50 to-noabloon-grayish-blue-50">
      {/* Sección de Encabezado */}
      <section className="bg-white py-16 border-b border-noabloon-light-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-noabloon-deep-green-800 mb-6">
              Accesorios de Agricultura Vertical
            </h1>
            <p className="text-xl text-noabloon-grayish-blue-700 mb-8 max-w-3xl mx-auto">
              Completa tu configuración de agricultura vertical con nuestros
              accesorios premium, nutrientes y equipos de monitoreo para un
              crecimiento óptimo de plantas
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-noabloon-light-green-100 text-noabloon-deep-green-700 px-4 py-2 rounded-lg text-sm font-medium">
                Certificado Orgánico
              </div>
              <div className="bg-noabloon-grayish-blue-100 text-noabloon-grayish-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
                Envío Rápido
              </div>
              <div className="bg-noabloon-deep-green-100 text-noabloon-deep-green-700 px-4 py-2 rounded-lg text-sm font-medium">
                Soporte Experto
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cuadrícula de Accesorios */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-noabloon-deep-green-800 mb-4">
              Suministros Esenciales de Cultivo
            </h2>
            <p className="text-lg text-noabloon-grayish-blue-700 max-w-2xl mx-auto">
              Desde iluminación hasta nutrientes, encuentra todo lo que
              necesitas para maximizar el éxito de tu agricultura vertical
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sampleAccessories.map((accessory) => (
              <AccessoryCard key={accessory.id} accessory={accessory} />
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Categorías */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-noabloon-deep-green-800 mb-4">
              Comprar por Categoría
            </h2>
            <p className="text-lg text-noabloon-grayish-blue-700">
              Explora nuestras categorías organizadas para encontrar exactamente
              lo que tus plantas necesitan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-noabloon-deep-green to-noabloon-deep-green-600 rounded-lg p-6 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Sistemas de Iluminación
                </h3>
                <p className="text-noabloon-light-green-100 text-sm">
                  Luces LED de crecimiento y controladores de espectro
                </p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-noabloon-light-green to-noabloon-light-green-600 rounded-lg p-6 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Beaker className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Nutrientes y pH</h3>
                <p className="text-green-100 text-sm">
                  Nutrientes para plantas, ajustadores de pH y kits de prueba
                </p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-noabloon-grayish-blue to-noabloon-grayish-blue-600 rounded-lg p-6 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Sistemas de Agua</h3>
                <p className="text-blue-100 text-sm">
                  Bombas, reservorios y componentes de riego
                </p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-noabloon-deep-green-600 to-noabloon-deep-green-800 rounded-lg p-6 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Thermometer className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  Control Climático
                </h3>
                <p className="text-emerald-100 text-sm">
                  Sensores, ventiladores y monitoreo ambiental
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Educativa */}
      <section className="py-16 bg-gradient-to-r from-noabloon-light-green-100 to-noabloon-grayish-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-noabloon-deep-green-800 mb-4">
              ¿Necesitas Orientación de Cultivo?
            </h2>
            <p className="text-lg text-noabloon-grayish-blue-700 mb-8 max-w-2xl mx-auto">
              Nuestro equipo de expertos agrícolas está aquí para ayudarte a
              elegir los accesorios correctos y optimizar tu configuración de
              cultivo para obtener máximos rendimientos.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-noabloon-deep-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-noabloon-deep-green-700 transition-colors">
                Contactar Experto
              </button>
              <button className="border-2 border-noabloon-deep-green text-noabloon-deep-green px-6 py-3 rounded-lg font-semibold hover:bg-noabloon-deep-green hover:text-white transition-colors">
                Guía de Cultivo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accessories;
