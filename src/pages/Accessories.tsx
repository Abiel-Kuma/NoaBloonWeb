import React from "react";
import AccessoryCard from "@/components/AccessoryCard";
import { Accessory } from "@/types/product";
import { Droplets, Zap, Thermometer, Beaker } from "lucide-react";

const sampleAccessories: Accessory[] = [
  {
    id: "acc-1",
    name: "LED Grow Light Panel",
    price: 189.99,
    image:
      "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?w=400&h=400&fit=crop&crop=center",
    description: "Full spectrum LED lighting for optimal plant growth",
    category: "lighting",
  },
  {
    id: "acc-2",
    name: "Hydroponic Nutrient Kit",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=400&fit=crop&crop=center",
    description: "Complete nutrient solution for healthy plant development",
    category: "nutrients",
  },
  {
    id: "acc-3",
    name: "Water Circulation Pump",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop&crop=center",
    description: "Efficient water circulation for hydroponic systems",
    category: "pumps",
  },
  {
    id: "acc-4",
    name: "Growing Medium - Rockwool",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&crop=center",
    description: "Premium rockwool cubes for seed starting and growing",
    category: "growing-medium",
  },
  {
    id: "acc-5",
    name: "pH Testing Kit",
    price: 35.99,
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=400&fit=crop&crop=center",
    description: "Digital pH meter and calibration solutions",
    category: "monitoring",
  },
  {
    id: "acc-6",
    name: "Climate Control Sensor",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop&crop=center",
    description: "Monitor temperature, humidity, and air quality",
    category: "sensors",
  },
  {
    id: "acc-7",
    name: "Organic Seed Starter Pack",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&crop=center",
    description: "Variety pack of organic vegetable and herb seeds",
    category: "seeds",
  },
  {
    id: "acc-8",
    name: "Timer Control System",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=400&fit=crop&crop=center",
    description: "Automated timing control for lights and pumps",
    category: "automation",
  },
];

const Accessories = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-noabloon-light-green-50 to-noabloon-grayish-blue-50">
      {/* Header Section */}
      <section className="bg-white py-16 border-b border-noabloon-light-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-noabloon-deep-green-800 mb-6">
              Vertical Farming Accessories
            </h1>
            <p className="text-xl text-noabloon-grayish-blue-700 mb-8 max-w-3xl mx-auto">
              Complete your vertical farming setup with our premium accessories,
              nutrients, and monitoring equipment for optimal plant growth
            </p>
            <div className="flex justify-center space-x-4">
              <div className="bg-noabloon-light-green-100 text-noabloon-deep-green-700 px-4 py-2 rounded-lg text-sm font-medium">
                Organic Certified
              </div>
              <div className="bg-noabloon-grayish-blue-100 text-noabloon-grayish-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
                Fast Shipping
              </div>
              <div className="bg-noabloon-deep-green-100 text-noabloon-deep-green-700 px-4 py-2 rounded-lg text-sm font-medium">
                Expert Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-noabloon-deep-green-800 mb-4">
              Essential Growing Supplies
            </h2>
            <p className="text-lg text-noabloon-grayish-blue-700 max-w-2xl mx-auto">
              From lighting to nutrients, find everything you need to maximize
              your vertical farming success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sampleAccessories.map((accessory) => (
              <AccessoryCard key={accessory.id} accessory={accessory} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-noabloon-deep-green-800 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-noabloon-grayish-blue-700">
              Browse our organized categories to find exactly what your plants
              need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-noabloon-deep-green to-noabloon-deep-green-600 rounded-lg p-6 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Lighting Systems</h3>
                <p className="text-noabloon-light-green-100 text-sm">
                  LED grow lights and spectrum controllers
                </p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-noabloon-light-green to-noabloon-light-green-600 rounded-lg p-6 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Beaker className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Nutrients & pH</h3>
                <p className="text-green-100 text-sm">
                  Plant nutrients, pH adjusters, and testing kits
                </p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-noabloon-grayish-blue to-noabloon-grayish-blue-600 rounded-lg p-6 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Water Systems</h3>
                <p className="text-blue-100 text-sm">
                  Pumps, reservoirs, and irrigation components
                </p>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-gradient-to-br from-noabloon-deep-green-600 to-noabloon-deep-green-800 rounded-lg p-6 text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Thermometer className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Climate Control</h3>
                <p className="text-emerald-100 text-sm">
                  Sensors, fans, and environmental monitoring
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Section */}
      <section className="py-16 bg-gradient-to-r from-noabloon-light-green-100 to-noabloon-grayish-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-noabloon-deep-green-800 mb-4">
              Need Growing Guidance?
            </h2>
            <p className="text-lg text-noabloon-grayish-blue-700 mb-8 max-w-2xl mx-auto">
              Our team of agricultural experts is here to help you choose the
              right accessories and optimize your growing setup for maximum
              yields.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-noabloon-deep-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-noabloon-deep-green-700 transition-colors">
                Contact Expert
              </button>
              <button className="border-2 border-noabloon-deep-green text-noabloon-deep-green px-6 py-3 rounded-lg font-semibold hover:bg-noabloon-deep-green hover:text-white transition-colors">
                Growing Guide
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accessories;
