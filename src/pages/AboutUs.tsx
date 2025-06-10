import React from "react";
import { Leaf, Users, Globe, TrendingUp, Heart } from "lucide-react";

const teamMembers = [
  {
    name: "Abiel Sánchez",
    role: "CEO",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F01960d167ecc4066a5dd27bebba984c8%2Ff125aa24fc054e9283dab859f81cc415",
    bio: "15+ años en agricultura sostenible e innovación en agricultura vertical",
  },
  {
    name: "Erick Méndez",
    role: "Diseñador de Sistemas",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F01960d167ecc4066a5dd27bebba984c8%2Fbbcadb0c3ff74c82b98de8dafd221898",
    bio: "Experto en sistemas hidropónicos y tecnología de cultivo automatizado",
  },
  {
    name: "Hugo Rodríguez",
    role: "Jefe de Investigación",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F01960d167ecc4066a5dd27bebba984c8%2F85ff0057e8f243d99054a46b3ba3d7ae",
    bio: "Científico de plantas especializado en agricultura urbana y optimización de cultivos",
  },
  {
    name: "Ricardo Arias",
    role: "Crítico del team",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F01960d167ecc4066a5dd27bebba984c8%2F3fdf14d03d3a45efbb9acb1dcfe4659c",
    bio: "Experto en cadena de suministro asegurando operaciones sostenibles y eficientes",
  },
  {
    name: "César Flores",
    role: "La máquina de chambear",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F01960d167ecc4066a5dd27bebba984c8%2F425610a58d5c4e2ba2d04841acc2797b",
    bio: "Apasionado por ayudar a los clientes a alcanzar sus objetivos de cultivo",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-noabloon-light-green-50 to-noabloon-grayish-blue-50">
      {/* Sección Hero */}
      <section className="bg-gradient-to-r from-noabloon-deep-green to-noabloon-grayish-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Leaf className="h-16 w-16 text-noabloon-light-green-200" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Cultivando la Comida del Mañana Hoy
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Revolucionando la agricultura urbana a través de soluciones
              innovadoras de agricultura vertical
            </p>
          </div>
        </div>
      </section>

      {/* Descripción de la Empresa */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-noabloon-deep-green-800 mb-8">
              Quienes Somos
            </h2>
            <p className="text-lg text-noabloon-grayish-blue-700 leading-relaxed mb-8">
              NoaBloom es una empresa de agricultura vertical que busca
              revolucionar la producción de alimentos en áreas urbanas mediante
              sistemas de cultivo en ambientes controlados y estructuras
              verticales. Este enfoque permite optimizar el uso del espacio,
              reducir el consumo de agua y eliminar el uso de pesticidas,
              ofreciendo productos más frescos y saludables. A través del
              comercio electrónico, buscamos acercar directamente estos
              productos al consumidor, garantizando calidad, trazabilidad y
              conveniencia.
            </p>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-gradient-to-r from-noabloon-light-green-100 to-noabloon-grayish-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Misión */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-noabloon-light-green-200">
              <div className="w-16 h-16 bg-noabloon-deep-green-100 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-noabloon-deep-green" />
              </div>
              <h3 className="text-2xl font-bold text-noabloon-deep-green-800 mb-4">
                Misión
              </h3>
              <p className="text-noabloon-grayish-blue-700 leading-relaxed">
                Ofrecer productos agrícolas frescos, sostenibles y de alta
                calidad, mediante un modelo de agricultura vertical, promoviendo
                el bienestar de las personas y el cuidado del medio ambiente.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-noabloon-light-green-200">
              <div className="w-16 h-16 bg-noabloon-light-green-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-noabloon-light-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-noabloon-deep-green-800 mb-4">
                Visión
              </h3>
              <p className="text-noabloon-grayish-blue-700 leading-relaxed">
                Ser líderes en producción agrícola vertical en la región,
                integrando tecnología, sostenibilidad y accesibilidad para
                transformar la forma en que se consume y distribuye la
                agricultura urbana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección del Equipo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-noabloon-deep-green-800 mb-4">
              Conoce a Nuestro Equipo en Crecimiento
            </h2>
            <p className="text-lg text-noabloon-grayish-blue-700 max-w-2xl mx-auto">
              Los innovadores apasionados que cultivan el futuro de la
              agricultura sostenible
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300 border-4 border-noabloon-light-green-200"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-gradient-to-t from-noabloon-deep-green/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-lg font-semibold text-noabloon-deep-green-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-noabloon-grayish-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-noabloon-grayish-blue-600">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Valores */}
      <section className="py-16 bg-gradient-to-r from-noabloon-light-green-100 to-noabloon-grayish-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-noabloon-deep-green-800 mb-4">
              Nuestros Valores Fundamentales
            </h2>
            <p className="text-lg text-noabloon-grayish-blue-700">
              Los principios que guían nuestra misión de transformar la
              agricultura
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg p-8 shadow-lg border border-noabloon-light-green-200">
              <div className="w-16 h-16 bg-noabloon-light-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-noabloon-deep-green" />
              </div>
              <h3 className="text-xl font-semibold text-noabloon-deep-green-800 mb-2">
                Sostenibilidad Primero
              </h3>
              <p className="text-noabloon-grayish-blue-700">
                Cada decisión que tomamos prioriza la gestión ambiental y la
                conservación de recursos
              </p>
            </div>

            <div className="text-center bg-white rounded-lg p-8 shadow-lg border border-noabloon-light-green-200">
              <div className="w-16 h-16 bg-noabloon-grayish-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-noabloon-grayish-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-noabloon-deep-green-800 mb-2">
                Impacto Comunitario
              </h3>
              <p className="text-noabloon-grayish-blue-700">
                Construimos soluciones que fortalecen los sistemas alimentarios
                locales y empoderan a las comunidades
              </p>
            </div>

            <div className="text-center bg-white rounded-lg p-8 shadow-lg border border-noabloon-light-green-200">
              <div className="w-16 h-16 bg-noabloon-deep-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-noabloon-deep-green" />
              </div>
              <h3 className="text-xl font-semibold text-noabloon-deep-green-800 mb-2">
                Innovación Apasionada
              </h3>
              <p className="text-noabloon-grayish-blue-700">
                Innovamos continuamente con pasión y propósito para avanzar en
                la tecnología agrícola
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Impacto */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-noabloon-deep-green-800 mb-4">
              Nuestro Impacto en Crecimiento
            </h2>
            <p className="text-lg text-noabloon-grayish-blue-700">
              Juntos, estamos cultivando un futuro más sostenible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-noabloon-light-green-100 to-noabloon-light-green-200 rounded-lg p-8">
              <div className="text-4xl font-bold text-noabloon-deep-green-800 mb-2">
                0+
              </div>
              <div className="text-noabloon-grayish-blue-700">
                Granjas Instaladas
              </div>
            </div>
            <div className="bg-gradient-to-br from-noabloon-grayish-blue-100 to-noabloon-grayish-blue-200 rounded-lg p-8">
              <div className="text-4xl font-bold text-noabloon-deep-green-800 mb-2">
                0M+
              </div>
              <div className="text-noabloon-grayish-blue-700">
                Plantas Cultivadas
              </div>
            </div>
            <div className="bg-gradient-to-br from-noabloon-deep-green-100 to-noabloon-deep-green-200 rounded-lg p-8">
              <div className="text-4xl font-bold text-noabloon-deep-green-800 mb-2">
                0M
              </div>
              <div className="text-noabloon-grayish-blue-700">
                Galones de Agua Ahorrados
              </div>
            </div>
            <div className="bg-gradient-to-br from-noabloon-light-green-100 to-noabloon-grayish-blue-100 rounded-lg p-8">
              <div className="text-4xl font-bold text-noabloon-deep-green-800 mb-2">
                95%
              </div>
              <div className="text-noabloon-grayish-blue-700">
                Reducción de Pesticidas
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
