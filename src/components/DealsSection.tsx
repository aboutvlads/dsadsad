import React from 'react';
import { DealCard } from './DealCard';
import { deals } from '../data/deals';

export function DealsSection() {
  return (
    <section id="deals" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Latest Flight Deals 🔥</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <DealCard key={deal.id} {...deal} />
          ))}
        </div>
      </div>
    </section>
  );
}