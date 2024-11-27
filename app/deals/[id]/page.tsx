"use client";

import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Calendar, Plane, ArrowRight, Euro, AlertCircle } from "lucide-react";
import Image from "next/image";

// In a real app, this would come from an API
const getDeal = (id: string) => ({
  from: "London",
  to: "Barcelona",
  price: 29,
  dates: "Apr 15 - Apr 22",
  airline: "Ryanair",
  image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&q=80",
  savings: 45,
  flightNumber: "FR 2374",
  departureTime: "10:25",
  arrivalTime: "13:45",
  bookingInstructions: [
    "Visit Ryanair's official website",
    "Enter the shown flight dates",
    "Select flight FR 2374",
    "Complete booking process directly with airline"
  ]
});

export default function DealPage({ params }: { params: { id: string } }) {
  const deal = getDeal(params.id);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Flight Details */}
          <div className="space-y-8">
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <Image
                src={deal.image}
                alt={`${deal.to} destination`}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h1 className="text-3xl font-serif mb-6 flex items-center justify-between">
                <span>{deal.from}</span>
                <ArrowRight className="h-6 w-6 text-gray-400" />
                <span>{deal.to}</span>
              </h1>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Plane className="h-5 w-5 text-emerald-600" />
                    <span>{deal.airline}</span>
                  </div>
                  <span className="font-medium">{deal.flightNumber}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-emerald-600" />
                    <span>Departure</span>
                  </div>
                  <span className="font-medium">{deal.departureTime}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-emerald-600" />
                    <span>Arrival</span>
                  </div>
                  <span className="font-medium">{deal.arrivalTime}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Instructions */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-serif">Price</h2>
                <div className="flex items-center text-emerald-600 font-bold">
                  <Euro className="h-6 w-6" />
                  <span className="text-3xl">{deal.price}</span>
                </div>
              </div>
              
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg h-12 mb-6">
                Book Now
              </Button>

              <div className="flex items-center space-x-2 text-amber-600 bg-amber-50 p-4 rounded-lg mb-6">
                <AlertCircle className="h-5 w-5" />
                <p className="text-sm">Book quickly! This price was last found 2 hours ago</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-serif mb-6">How to Book</h2>
              <ol className="space-y-4">
                {deal.bookingInstructions.map((instruction, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-medium">
                      {index + 1}
                    </span>
                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}