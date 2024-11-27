import React from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Deal } from '../types/deal';

interface DealCardProps extends Deal {}

export function DealCard(props: DealCardProps) {
  return (
    <Link to={`/deal/${props.id}`} className="block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
        <div className="relative h-48">
          <img src={props.imageUrl} alt={`${props.to} destination`} className="w-full h-full object-cover" />
          <div className="absolute top-4 left-4">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              props.stops === 'direct' 
                ? 'bg-green-500 text-white' 
                : 'bg-yellow-500 text-white'
            }`}>
              {props.stops}
            </span>
          </div>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{props.from} → {props.to}</span>
            </div>
            <span className="text-2xl font-bold text-indigo-600">€{props.price}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{props.date}</span>
            </div>
            <span className="text-indigo-600 flex items-center text-sm">
              View Deal <ArrowRight className="h-4 w-4 ml-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}