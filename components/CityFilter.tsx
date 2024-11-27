"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MapPin } from "lucide-react";

export function CityFilter() {
  const cities = [
    "All Cities",
    "London",
    "Paris",
    "Berlin",
    "Amsterdam",
    "Madrid",
    "Rome",
    "Barcelona",
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center">
          <MapPin className="mr-2 h-4 w-4" />
          Departure City
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {cities.map((city) => (
          <DropdownMenuItem key={city}>{city}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}