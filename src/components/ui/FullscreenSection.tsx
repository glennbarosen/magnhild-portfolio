import React from 'react'

interface FullscreenSectionProps {
    left?: React.ReactNode
    right?: React.ReactNode
    id?: string
    className?: string
}

export function FullscreenSection({ left, right, id, className = '' }: FullscreenSectionProps) {
    return (
        <section
            id={id}
            className={`section-full flex flex-col gap-0 px-6 pt-24 md:px-12 lg:grid lg:h-screen lg:grid-cols-2 lg:px-16 lg:pt-0 ${className}`}
        >
            {/* Left column */}
            <div className="flex h-auto flex-col items-start justify-between py-12 md:py-16 lg:h-full lg:py-20">
                {left}
            </div>

            {/* Right column */}
            <div className="flex h-auto flex-col items-start justify-start py-12 md:items-start md:py-16 lg:h-full lg:items-end lg:py-20">
                {right}
            </div>
        </section>
    )
}
