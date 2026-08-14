import { FullscreenSection } from '@/components/ui'
import profileImage from '@/assets/mlm-profile.jpeg'

export function Hero() {
    return (
        <FullscreenSection
            left={
                <div className="flex h-full flex-col justify-end">
                    <h1 className="text-primary font-serif-title block text-5xl leading-[0.9] font-normal tracking-tight whitespace-nowrap capitalize select-none md:text-7xl lg:text-8xl">
                        Magnhild
                        <br />
                        Lundebrekke
                        <br />
                        Myskja
                    </h1>
                </div>
            }
            right={
                <div className="flex h-full w-full flex-col items-start justify-end lg:items-end">
                    <img
                        src={profileImage}
                        alt="Magnhild Lundebrekke Myskja"
                        className="w-full object-cover lg:max-w-[350px]"
                        fetchPriority="high"
                        decoding="async"
                    />
                </div>
            }
        />
    )
}
