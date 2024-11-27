"use client";

import { Logo } from "./Logo";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />
        <div className="flex items-center space-x-4">
          <Button variant="ghost">Sign In</Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700">Sign Up Free</Button>
        </div>
      </div>
    </nav>
  );
}