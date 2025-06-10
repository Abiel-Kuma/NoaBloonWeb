import React from "react";
import KitCard from "@/components/KitCard";
import { Kit } from "@/types/product";
import { Leaf, Droplets, Sun, TrendingUp } from "lucide-react";

const sampleKits: Kit[] = [
  {
    id: "kit-1",
    name: "Kit de Inicio",
    model: "UH-VS-001",
    components: [
      "Sistema de 6 Torres",
      "Luces LED de Crecimiento",
      "Bomba Hidropónica",
      "Solución Nutritiva",
      "Medio de Cultivo",
      "Guía de Instalación",
    ],
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=400&fit=crop&crop=center",
    specifications: {
      height: "1.8 metros",
      capacity: "36 plantas",
      powerConsumption: "120W",
      waterCapacity: "75 litros",
    },
  },
  {
    id: "kit-2",
    name: "Kit Profesional",
    model: "CGT-VF-002",
    components: [
      "Sistema de 12 Torres",
      "Array LED Avanzado",
      "Riego Automatizado",
      "Sensores de Clima",
      "Reservorio de Nutrientes",
      "Control por App Móvil",
      "Instalación Profesional",
    ],
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=500&h=400&fit=crop&crop=center",
    specifications: {
      height: "2.4 metros",
      capacity: "144 plantas",
      powerConsumption: "300W",
      waterCapacity: "190 litros",
    },
  },
  {
    id: "kit-3",
    name: "Jardín Inteligente para Hogar",
    model: "SHG-VF-003",
    components: [
      "4 Torres Compactas",
      "Luces LED Inteligentes",
      "Sistema Controlado por App",
      "Nutrientes Orgánicos",
      "Kit de Semillas",
      "Guía de Inicio Rápido",
    ],
    price: 649.99,
    image:
      "https://images.unsplash.com/photo-1574263867128-da37dd8c1e01?w=500&h=400&fit=crop&crop=center",
    specifications: {
      height: "1.2 metros",
      capacity: "24 plantas",
      powerConsumption: "80W",
      waterCapacity: "57 litros",
    },
  },
];

const Kits = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-noabloon-light-green-50 to-noabloon-grayish-blue-50">
      {/* Sección Hero */}
      <section className="bg-gradient-to-r from-noabloon-deep-green to-noabloon-grayish-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sistemas de Agricultura Vertical
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Cultiva productos frescos y orgánicos todo el año con nuestras
              innovadoras soluciones de agricultura vertical diseñadas para
              espacios urbanos
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md">
                <p className="text-lg">
                  Agricultura sostenible para el futuro, llevando las granjas a
                  la ciudad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cuadrícula de Kits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-noabloon-deep-green-800 mb-4">
              Nuestros Sistemas de Agricultura Vertical
            </h2>
            <p className="text-lg text-noabloon-grayish-blue-700 max-w-2xl mx-auto">
              Desde jardines compactos para el hogar hasta operaciones a escala
              comercial, encuentra la solución perfecta de agricultura vertical
              para tu espacio y necesidades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleKits.map((kit) => (
              <KitCard key={kit.id} kit={kit} />
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Beneficios */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-noabloon-deep-green-800 mb-4">
              ¿Por qué Elegir la Agricultura Vertical?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-noabloon-light-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-noabloon-deep-green" />
              </div>
              <h3 className="text-xl font-semibold text-noabloon-deep-green-800 mb-2">
                95% Menos Agua
              </h3>
              <p className="text-noabloon-grayish-blue-600">
                Los sistemas hidropónicos avanzados usan agua de manera
                eficiente con reciclaje preciso
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-noabloon-light-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-noabloon-deep-green" />
              </div>
              <h3 className="text-xl font-semibold text-noabloon-deep-green-800 mb-2">
                10x Más Rendimiento
              </h3>
              <p className="text-noabloon-grayish-blue-600">
                Maximiza la producción en espacio mínimo con tecnología de
                cultivo vertical
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-noabloon-light-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-noabloon-deep-green" />
              </div>
              <h3 className="text-xl font-semibold text-noabloon-deep-green-800 mb-2">
                Cultivo Todo el Año
              </h3>
              <p className="text-noabloon-grayish-blue-600">
                Los ambientes controlados por clima permiten cosechas continuas
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-noabloon-light-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-noabloon-deep-green" />
              </div>
              <h3 className="text-xl font-semibold text-noabloon-deep-green-800 mb-2">
                Cero Pesticidas
              </h3>
              <p className="text-noabloon-grayish-blue-600">
                El ambiente controlado elimina la necesidad de químicos dañinos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Estadísticas */}
      <section className="py-16 bg-gradient-to-r from-noabloon-light-green-100 to-noabloon-grayish-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-noabloon-deep-green-800 mb-4">
              Cultivando el Futuro
            </h2>
            <p className="text-lg text-noabloon-grayish-blue-700">
              Únete a la revolución de la agricultura vertical y ayuda a
              alimentar al mundo de manera sostenible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-4xl font-bold text-noabloon-deep-green mb-2">
                500+
              </div>
              <div className="text-noabloon-grayish-blue-700">
                Granjas Instaladas
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-4xl font-bold text-noabloon-deep-green mb-2">
                2M+
              </div>
              <div className="text-noabloon-grayish-blue-700">
                Plantas Cultivadas
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-4xl font-bold text-noabloon-deep-green mb-2">
                80%
              </div>
              <div className="text-noabloon-grayish-blue-700">
                Ahorro de Espacio
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kits;
