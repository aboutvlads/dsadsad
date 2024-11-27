"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Calendar, Euro, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface DealCardProps {
  id: string;
  from: string;
  to: string;
  price: number;
  dates: string;
  airline: string;
  image: string;
  savings?: number;
}

export function DealCard({ id, from, to, price, dates, airline, image, savings }: DealCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-0">
      <div className="relative h-48">
        <Image
          src={image}
          alt={`${to} destination`}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {savings && (
          <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Save {savings}%
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Plane className="h-5 w-5 text-emerald-600" />
            <span className="font-medium">{airline}</span>
          </div>
          <div className="flex items-center text-emerald-600 font-bold">
            <Euro className="h-5 w-5" />
            <span className="text-2xl">{price}</span>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 flex items-center justify-between">
          <span>{from}</span>
          <ArrowRight className="h-5 w-5 text-gray-400" />
          <span>{to}</span>
        </h3>
        
        <div className="flex items-center space-x-2 text-gray-600 mb-4">
          <Calendar className="h-4 w-4" />
          <span>{dates}</span>
        </div>

        <Link href={`/deals/${id}`}>
          <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
            View Deal
          </Button>
        </Link>
      </div>
    </Card>
  );
}