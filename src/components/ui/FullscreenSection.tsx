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
      className={`section-full flex flex-col lg:grid lg:grid-cols-2 gap-0 px-6 md:px-12 lg:px-16 lg:h-screen pt-24 lg:pt-0 ${className}`}
    >
      {/* Left column */}
      <div className="flex flex-col justify-between h-auto lg:h-full py-12 md:py-16 lg:py-20 items-start">
        {left}
      </div>

      {/* Right column */}
      <div className="flex flex-col justify-start items-start md:items-start lg:items-end h-auto lg:h-full py-12 md:py-16 lg:py-20">
        {right}
      </div>
    </section>
  );
}
