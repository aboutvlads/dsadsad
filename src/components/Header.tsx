import React from 'react';
import { Plane } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Plane className="h-8 w-8 text-white" />
            <span className="ml-2 text-2xl font-bold text-white">Tripwingz</span>
          </div>
          <div className="flex space-x-4">
            <a href="#deals" className="text-white hover:text-indigo-100">Deals</a>
            <a href="#how-it-works" className="text-white hover:text-indigo-100">How it Works</a>
            <a href="#destinations" className="text-white hover:text-indigo-100">Destinations</a>
          </div>
        </div>
      </nav>
    </header>
  );
}