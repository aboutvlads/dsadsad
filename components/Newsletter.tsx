"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
  };

  return (
    <section className="bg-[#fdfbf7] px-6 lg:px-8 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block bg-emerald-100 rounded-full px-4 py-1.5 mb-6">
          <span className="text-sm font-medium text-emerald-800">Join 50,000+ travelers</span>
        </div>
        <h2 className="text-4xl font-serif mb-6">Never Miss a Deal</h2>
        <p className="text-xl text-gray-600 mb-10">
          Get personalized flight deals straight to your inbox, completely free
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-grow text-lg py-6"
            required
          />
          <Button 
            type="submit" 
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 whitespace-nowrap text-lg px-8"
          >
            Sign Up Free
          </Button>
        </form>
        
        <p className="text-sm text-gray-500 mt-6">
          No spam, unsubscribe at any time
        </p>
      </div>
    </section>
  );
}