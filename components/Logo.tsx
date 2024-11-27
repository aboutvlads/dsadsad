"use client";

import { Plane } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700 transition-colors">
      <Plane className="h-8 w-8" />
      <span className="text-xl font-bold">Tripwingz</span>
    </Link>
  );
}