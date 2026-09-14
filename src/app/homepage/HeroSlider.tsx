import Image from 'next/image';
import { HeroSection } from '@/app';
import { Header } from '@/components';

const HeroSlider = () => {
  return (
    <div className="min-h-180 bg-primary-foreground relative">
      <Image
        src="/banners/banner-1.jpg"
        alt="banner 1"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-card-foreground/70" />

      <div className="relative z-20">
        <Header />
        <div className="mx-auto flex min-h-100 max-w-5xl justify-start items-start px-6">
          <HeroSection />
        </div>
      </div>
    </div>
  );
};
export default HeroSlider;
