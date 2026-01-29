import { FullscreenSection } from "@/components/ui";
import profileImage from "@/assets/mlm-profile.jpeg";

export function Hero() {
  return (
    <FullscreenSection
      left={
        <div className="flex flex-col justify-end h-full">
          <h1 className="text-primary whitespace-nowrap select-none block text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] font-serif-title capitalize font-normal">
            Magnhild
            <br />
            Lundebrekke
            <br />
            Myskja
          </h1>
        </div>
      }
      right={
        <div className="flex flex-col justify-end items-start lg:items-end h-full w-full">
          <img
            src={profileImage}
            alt="Magnhild Lundebrekke Myskja"
            className="w-full lg:max-w-[350px] object-cover"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      }
    />
  );
}
