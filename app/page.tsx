"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DealCard } from "@/components/DealCard";
import { CityFilter } from "@/components/CityFilter";
import { Newsletter } from "@/components/Newsletter";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 py-24 md:py-32 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block bg-emerald-100 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-emerald-800">100% free</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6">
              Get{" "}
              <span className="text-emerald-600 italic">crazy cheap</span>
              {" "}flights in your inbox for free
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              We find ridiculously cheap fares so you don't have to
            </p>
            <div className="mt-10">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* Featured Deals */}
      <section className="px-6 lg:px-8 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-serif mb-2">Today's Best Deals</h2>
              <p className="text-gray-600">Handpicked deals from top airlines</p>
            </div>
            <CityFilter />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <DealCard 
              id="london-barcelona"
              from="London"
              to="Barcelona"
              price={29}
              dates="Apr 15 - Apr 22"
              airline="Ryanair"
              image="https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80"
              savings={45}
            />
            <DealCard 
              id="paris-rome"
              from="Paris"
              to="Rome"
              price={39}
              dates="Apr 18 - Apr 25"
              airline="EasyJet"
              image="https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80"
              savings={35}
            />
            <DealCard 
              id="berlin-amsterdam"
              from="Berlin"
              to="Amsterdam"
              price={45}
              dates="Apr 20 - Apr 27"
              airline="Vueling"
              image="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&q=80"
              savings={30}
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />
    </main>
  );
}