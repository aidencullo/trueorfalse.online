"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-bg/95 backdrop-blur-md border-b border-border" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-7 h-7 bg-accent flex items-center justify-center">
            <span className="text-bg font-display font-bold text-xs tracking-widest">P</span>
          </div>
          <span className="font-display font-bold text-sm tracking-[0.2em] uppercase text-text">
            PRESS
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {["Privacy", "Tech", "Power", "Energy"].map((item) => (
            <span
              key={item}
              className="text-muted hover:text-text text-xs font-medium tracking-widest uppercase transition-colors cursor-pointer"
            >
              {item}
            </span>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-muted text-xs font-mono tracking-wider">AI-WRITTEN</span>
        </div>
      </div>
    </header>
  );
}
