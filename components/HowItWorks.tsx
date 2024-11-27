"use client";

import { Search, Bell, Plane } from "lucide-react";

const features = [
  {
    icon: <Search className="w-12 h-12 text-emerald-600" />,
    title: "We hunt for deals",
    description: "Our algorithms scan thousands of routes and transfer options 24/7"
  },
  {
    icon: <Bell className="w-12 h-12 text-emerald-600" />,
    title: "You get personalized alerts",
    description: "Receive deals matched to your home airport and travel preferences"
  },
  {
    icon: <Plane className="w-12 h-12 text-emerald-600" />,
    title: "Book and save big",
    description: "Use our instructions to book directly with airlines at unbeatable prices"
  }
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 rounded-full px-4 py-1.5 mb-4">
            <span className="text-sm font-medium text-emerald-800">100% free</span>
          </div>
          <h2 className="text-4xl font-serif font-medium mb-4">
            How we turn your points into{" "}
            <span className="italic text-emerald-600">dream flights</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get amazing deals tailored to you, absolutely free
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}