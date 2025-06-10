import React from "react";
import { Leaf, Users, Globe, TrendingUp, Heart } from "lucide-react";

const teamMembers = [
  {
    name: "Abiel Sánchez",
    role: "CEO",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F01960d167ecc4066a5dd27bebba984c8%2Ff125aa24fc054e9283dab859f81cc415",
    bio: "15+ years in sustainable agriculture and vertical farming innovation",
  },
  {
    name: "Erick Méndez",
    role: "Systems Designer",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F01960d167ecc4066a5dd27bebba984c8%2Fbbcadb0c3ff74c82b98de8dafd221898",
    bio: "Expert in hydroponic systems and automated growing technology",
  },
  {
    name: "Hugo Rodríguez",
    role: "Head of Research",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F01960d167ecc4066a5dd27bebba984c8%2F85ff0057e8f243d99054a46b3ba3d7ae",
    bio: "Plant scientist specializing in urban agriculture and crop optimization",
  },
  {
    name: "Ricardo Arias",
    role: "Critico del team",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F01960d167ecc4066a5dd27bebba984c8%2F3fdf14d03d3a45efbb9acb1dcfe4659c",
    bio: "Supply chain expert ensuring sustainable and efficient operations",
  },
  {
    name: "César Flores",
    role: "La maquina de chambear",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    bio: "Passionate about helping customers achieve their growing goals",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-noabloon-light-green-50 to-noabloon-grayish-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-noabloon-deep-green to-noabloon-grayish-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Leaf className="h-16 w-16 text-noabloon-light-green-200" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Growing Tomorrow's Food Today
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Revolutionizing urban agriculture through innovative vertical
              farming solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-noabloon-deep-green-800 mb-8">
              Quienes somos
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

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-r from-noabloon-light-green-100 to-noabloon-grayish-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
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

            {/* Vision */}
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

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-noabloon-deep-green-800 mb-4">
              Meet Our Growing Team
            </h2>
            <p className="text-lg text-noabloon-grayish-blue-700 max-w-2xl mx-auto">
              The passionate innovators cultivating the future of sustainable
              agriculture
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

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-noabloon-light-green-100 to-noabloon-grayish-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-noabloon-deep-green-800 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-noabloon-grayish-blue-700">
              The principles that guide our mission to transform agriculture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white rounded-lg p-8 shadow-lg border border-noabloon-light-green-200">
              <div className="w-16 h-16 bg-noabloon-light-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-noabloon-deep-green" />
              </div>
              <h3 className="text-xl font-semibold text-noabloon-deep-green-800 mb-2">
                Sustainability First
              </h3>
              <p className="text-noabloon-grayish-blue-700">
                Every decision we make prioritizes environmental stewardship and
                resource conservation
              </p>
            </div>

            <div className="text-center bg-white rounded-lg p-8 shadow-lg border border-noabloon-light-green-200">
              <div className="w-16 h-16 bg-noabloon-grayish-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-noabloon-grayish-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-noabloon-deep-green-800 mb-2">
                Community Impact
              </h3>
              <p className="text-noabloon-grayish-blue-700">
                We build solutions that strengthen local food systems and
                empower communities
              </p>
            </div>

            <div className="text-center bg-white rounded-lg p-8 shadow-lg border border-noabloon-light-green-200">
              <div className="w-16 h-16 bg-noabloon-deep-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-noabloon-deep-green" />
              </div>
              <h3 className="text-xl font-semibold text-noabloon-deep-green-800 mb-2">
                Passionate Innovation
              </h3>
              <p className="text-noabloon-grayish-blue-700">
                We continuously innovate with passion and purpose to advance
                agricultural technology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-noabloon-deep-green-800 mb-4">
              Our Growing Impact
            </h2>
            <p className="text-lg text-noabloon-grayish-blue-700">
              Together, we're cultivating a more sustainable future
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-noabloon-light-green-100 to-noabloon-light-green-200 rounded-lg p-8">
              <div className="text-4xl font-bold text-noabloon-deep-green-800 mb-2">
                1,200+
              </div>
              <div className="text-noabloon-grayish-blue-700">
                Farms Installed
              </div>
            </div>
            <div className="bg-gradient-to-br from-noabloon-grayish-blue-100 to-noabloon-grayish-blue-200 rounded-lg p-8">
              <div className="text-4xl font-bold text-noabloon-deep-green-800 mb-2">
                5M+
              </div>
              <div className="text-noabloon-grayish-blue-700">Plants Grown</div>
            </div>
            <div className="bg-gradient-to-br from-noabloon-deep-green-100 to-noabloon-deep-green-200 rounded-lg p-8">
              <div className="text-4xl font-bold text-noabloon-deep-green-800 mb-2">
                2.5M
              </div>
              <div className="text-noabloon-grayish-blue-700">
                Gallons Water Saved
              </div>
            </div>
            <div className="bg-gradient-to-br from-noabloon-light-green-100 to-noabloon-grayish-blue-100 rounded-lg p-8">
              <div className="text-4xl font-bold text-noabloon-deep-green-800 mb-2">
                95%
              </div>
              <div className="text-noabloon-grayish-blue-700">
                Pesticide Reduction
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
