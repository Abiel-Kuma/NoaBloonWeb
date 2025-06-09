import React from "react";
import KitCard from "@/components/KitCard";
import { Kit } from "@/types/product";

const sampleKits: Kit[] = [
  {
    id: "kit-1",
    name: "NoaBloon Starter Kit",
    model: "NB-SK-001",
    components: [
      "Base Module",
      "Sensor Pack",
      "Power Supply",
      "Cables",
      "Manual",
    ],
    price: 299.99,
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=500&h=400&fit=crop&crop=center",
  },
  {
    id: "kit-2",
    name: "NoaBloon Pro Kit",
    model: "NB-PK-002",
    components: [
      "Advanced Base",
      "Multi-Sensor Array",
      "High-Power Supply",
      "Premium Cables",
      "Extended Manual",
      "Carrying Case",
    ],
    price: 599.99,
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop&crop=center",
  },
  {
    id: "kit-3",
    name: "NoaBloon Developer Kit",
    model: "NB-DK-003",
    components: [
      "Developer Board",
      "Breadboard",
      "Component Library",
      "GPIO Extender",
      "Development Manual",
      "SDK Access",
    ],
    price: 449.99,
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=500&h=400&fit=crop&crop=center",
  },
];

const Kits = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              NoaBloon Kits
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover our complete collection of innovative technology kits
              designed to empower your projects
            </p>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md">
                <p className="text-lg">
                  Professional-grade components for makers, developers, and
                  innovators
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Featured Kits
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each kit comes with carefully selected components, detailed
              documentation, and everything you need to get started
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleKits.map((kit) => (
              <KitCard key={kit.id} kit={kit} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose NoaBloon Kits?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Components
              </h3>
              <p className="text-gray-600">
                Premium quality components tested for reliability and
                performance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Complete Documentation
              </h3>
              <p className="text-gray-600">
                Comprehensive guides and tutorials to help you succeed
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 3v6m0 6v6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Expert Support
              </h3>
              <p className="text-gray-600">
                Get help from our team of experienced engineers and developers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kits;
