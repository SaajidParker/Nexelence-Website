import React from 'react';

export const NexelenceLogo = ({ className = "w-8 h-8" }: { className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Outer Glow/Atmosphere */}
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-primary/20" />
        
        {/* Globe Base */}
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-accent/40" />
        
        {/* Vertical Grid Lines (Longitudes) */}
        <ellipse cx="50" cy="50" rx="15" ry="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-accent/60" />
        <ellipse cx="50" cy="50" rx="30" ry="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-accent/40" />
        <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="1" className="text-brand-accent/80" />
        
        {/* Horizontal Grid Lines (Latitudes) */}
        <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="1" className="text-brand-accent/80" />
        <path d="M15 30 Q 50 25 85 30" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-accent/40" />
        <path d="M15 70 Q 50 75 85 70" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-accent/40" />

        {/* Glitch Overlay Elements */}
        <circle cx="52" cy="52" r="40" fill="none" stroke="#ff00e5" strokeWidth="0.5" className="opacity-30" />
        <circle cx="48" cy="48" r="40" fill="none" stroke="#00f2ff" strokeWidth="0.5" className="opacity-30" />
      </svg>
    </div>
  );
};
