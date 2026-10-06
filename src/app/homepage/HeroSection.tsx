'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { TextWrapper } from '@/components';
import { heroImages } from '@/constants/lookup';
import TypewriterText from '../../components/smoothui/typewriter-text';

const firstText = 'Unlock Your True Potential';
const firstSpeed = 50;

const HeroSection = () => {
  const textDelay = firstText.length * firstSpeed;
  const [show, setShow] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.plugins().autoplay?.play();
  }, [emblaApi]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, textDelay + 500);

    return () => clearTimeout(timeout);
  }, [textDelay]);

  return (
    <div className="w-full flex bg-card/5 mt-20">
      <div className="w-1/2 relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {heroImages.map((image) => (
              <div key={image.id} className="min-w-0 flex-[0_0_100%]">
                <div className="relative aspect-video w-full h-100">
                  <Image
                    src={image.path}
                    alt={image.id}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-card-foreground/20" />
      </div>

      <div className="flex w-1/2 min-h-50 flex-col items-center justify-center space-y-8">
        <div className="text-left px-8">
          <div className="mb-4 text-card font-normal text-2xl tracking-widest leading-relaxed">
            <TypewriterText
              speed={firstSpeed}
              className="font-space-mono uppercase"
            >
              {firstText}
            </TypewriterText>
          </div>
          <div className="space-y-8 mt-8">
            {show && (
              <TextWrapper className="text-card leading-8">
                <TypewriterText
                  speed={50}
                  className="font-space-mono uppercase"
                >
                  Partnering with Mentza to bring you a transformative Career
                  Readiness Program that merges cosmic clarity with cutting-edge
                  professional execution
                </TypewriterText>
              </TextWrapper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSection;
