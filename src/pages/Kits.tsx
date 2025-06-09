import React from "react";
import KitCard from "@/components/KitCard";
import { Kit } from "@/types/product";
import { Leaf, Droplets, Sun, TrendingUp } from "lucide-react";

const sampleKits: Kit[] = [
  {
    id: "kit-1",
    name: "Urban Harvest Starter",
    model: "UH-VS-001",
    components: [
      "6-Tower System",
      "LED Grow Lights",
      "Hydroponic Pump",
      "Nutrient Solution",
      "Growing Medium",
      "Setup Guide",
    ],
    price: 899.99,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=400&fit=crop&crop=center",
    specifications: {
      height: "6 feet",
      capacity: "36 plants",
      powerConsumption: "120W",
      waterCapacity: "20 gallons",
    },
  },
  {
    id: "kit-2",
    name: "Commercial Green Tower",
    model: "CGT-VF-002",
    components: [
      "12-Tower System",
      "Advanced LED Array",
      "Automated Irrigation",
      "Climate Sensors",
      "Nutrient Reservoir",
      "Mobile App Control",
      "Professional Setup",
    ],
    price: 2399.99,
    image:
      "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=500&h=400&fit=crop&crop=center",
    specifications: {
      height: "8 feet",
      capacity: "144 plants",
      powerConsumption: "300W",
      waterCapacity: "50 gallons",
    },
  },
  {
    id: "kit-3",
    name: "Smart Home Garden",
    model: "SHG-VF-003",
    components: [
      "Compact 4-Tower",
      "Smart LED Lights",
      "App-Controlled System",
      "Organic Nutrients",
      "Seed Starter Kit",
      "Quick Start Guide",
    ],
    price: 649.99,
    image:
      "https://images.unsplash.com/photo-1574263867128-da37dd8c1e01?w=500&h=400&fit=crop&crop=center",
    specifications: {
      height: "4 feet",
      capacity: "24 plants",
      powerConsumption: "80W",
      waterCapacity: "15 gallons",
    },
  },
];

const Kits = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-noabloon-light-green-50 to-noabloon-grayish-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-noabloon-deep-green to-noabloon-grayish-blue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Vertical Farming Systems
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Grow fresh, organic produce year-round with our innovative
              vertical farming solutions designed for urban spaces
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md">
                <p className="text-lg">
                  Sustainable agriculture for the future, bringing farms to the
                  city
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kits Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-noabloon-deep-green-800 mb-4">
              Our Vertical Farming Systems
            </h2>
            <p className="text-lg text-noabloon-grayish-blue-700 max-w-2xl mx-auto">
              From compact home gardens to commercial-scale operations, find the
              perfect vertical farming solution for your space and needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleKits.map((kit) => (
              <KitCard key={kit.id} kit={kit} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-noabloon-deep-green-800 mb-4">
              Why Choose Vertical Farming?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-noabloon-light-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="w-8 h-8 text-noabloon-deep-green" />
              </div>
              <h3 className="text-xl font-semibold text-noabloon-deep-green-800 mb-2">
                95% Less Water
              </h3>
              <p className="text-noabloon-grayish-blue-600">
                Advanced hydroponic systems use water efficiently with precise
                recycling
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-noabloon-light-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-noabloon-deep-green" />
              </div>
              <h3 className="text-xl font-semibold text-noabloon-deep-green-800 mb-2">
                10x More Yield
              </h3>
              <p className="text-noabloon-grayish-blue-600">
                Maximize production in minimal space with vertical growing
                technology
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-noabloon-light-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="w-8 h-8 text-noabloon-deep-green" />
              </div>
              <h3 className="text-xl font-semibold text-noabloon-deep-green-800 mb-2">
                Year-Round Growing
              </h3>
              <p className="text-noabloon-grayish-blue-600">
                Climate-controlled environments enable continuous harvests
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-noabloon-light-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-noabloon-deep-green" />
              </div>
              <h3 className="text-xl font-semibold text-noabloon-deep-green-800 mb-2">
                Zero Pesticides
              </h3>
              <p className="text-noabloon-grayish-blue-600">
                Controlled environment eliminates the need for harmful chemicals
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-noabloon-light-green-100 to-noabloon-grayish-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-noabloon-deep-green-800 mb-4">
              Growing the Future
            </h2>
            <p className="text-lg text-noabloon-grayish-blue-700">
              Join the vertical farming revolution and help feed the world
              sustainably
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-4xl font-bold text-noabloon-deep-green mb-2">
                500+
              </div>
              <div className="text-noabloon-grayish-blue-700">
                Farms Installed
              </div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-4xl font-bold text-noabloon-deep-green mb-2">
                2M+
              </div>
              <div className="text-noabloon-grayish-blue-700">Plants Grown</div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-4xl font-bold text-noabloon-deep-green mb-2">
                80%
              </div>
              <div className="text-noabloon-grayish-blue-700">
                Space Savings
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kits;
