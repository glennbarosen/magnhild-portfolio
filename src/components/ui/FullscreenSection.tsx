import React from 'react';

interface FullscreenSectionProps {
  left?: React.ReactNode;
  right?: React.ReactNode;
  id?: string;
  className?: string;
}

export function FullscreenSection({ left, right, id, className = '' }: FullscreenSectionProps) {
  return (
    <section
      id={id}
      className={`section-full bg-surface flex flex-col md:grid md:grid-cols-2 gap-0 px-6 md:px-12 lg:px-16 md:h-screen pt-24 md:pt-0 ${className}`}
    >
      {/* Left column */}
      <div className="flex flex-col justify-between h-auto md:h-full py-12 md:py-16 lg:py-20">
        {left}
      </div>

      {/* Right column */}
      <div className="flex flex-col justify-end items-center md:items-end h-auto md:h-full py-12 md:py-16 lg:py-20">
        {right}
      </div>
    </section>
  );
}
