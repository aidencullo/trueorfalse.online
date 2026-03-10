"use client";

const items = [
  "PRIVACY",
  "SURVEILLANCE",
  "BIG TECH",
  "DATA CENTERS",
  "AI",
  "GOVERNMENT FORMS",
  "BROWSERS",
  "ENERGY",
  "POWER",
  "TRACKING",
  "INFRASTRUCTURE",
  "AGENCY",
];

export default function Ticker() {
  return (
    <div className="overflow-hidden border-t border-b border-border py-3 relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-6 mx-6">
            <span className="text-muted text-[10px] font-mono tracking-[0.3em] uppercase">
              {item}
            </span>
            <span className="w-1 h-1 bg-accent rounded-full" />
          </span>
        ))}
      </div>
    </div>
  );
}
