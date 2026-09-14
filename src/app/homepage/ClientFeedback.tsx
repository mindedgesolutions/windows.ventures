'use client';

import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { SectionTitleWrapper } from '@/components';
import { webIcons } from '@/constants';
import { feedbacks } from '@/constants/lookup';

const ClientFeedback = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      slidesToScroll: 1,
    },
    [
      Autoplay({
        delay: 10000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section>
      <SectionTitleWrapper
        prefix="testimonials"
        title="What our clients say about us"
        className="text-center"
        titleClass="mx-auto max-w-2xl"
      />
      <motion.div
        className="relative w-full mt-12"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Viewport */}
        <div ref={emblaRef} className="overflow-hidden">
          {/* Container */}
          <div className="flex -ml-4">
            {feedbacks.map((feedback, index) => {
              const isCurrent = index === selectedIndex;

              return (
                <div key={feedback.id} className="min-w-0 flex-[0_0_50%]">
                  <div className="relative h-60 overflow-hidden">
                    <div className="flex flex-col justify-center items-center">
                      <div className="mt-4 w-16 h-16 rounded-full overflow-hidden relative">
                        <Image
                          src={feedback.image}
                          alt={feedback.id}
                          fill
                          className="object-cover"
                          sizes="(max-width: 200px) 100vw, 200px"
                        />
                      </div>
                      <div className="mt-4 tracking-wide flex flex-row font-inter text-xs gap-1 text-muted-foreground">
                        {`${feedback.designation}, ${feedback.company}`}
                      </div>
                      <div className="p-4 px-6 font-inter text-muted-foreground tracking-wide leading-normal text-center text-xs">
                        {feedback.msg}
                      </div>
                    </div>

                    {/* Overlay only on non-current slides */}
                    <div
                      className={`absolute inset-0 bg-section-title/10 transition-opacity duration-300
                  ${isCurrent ? 'opacity-0' : 'opacity-100'}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-4 flex justify-center gap-4">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            className="z-10 flex justify-center items-center cursor-pointer h-12 w-12 rounded-full bg-card shadow-md"
            aria-label="Previous slide"
          >
            <webIcons.leftLongArrow />
          </button>

          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            className="z-10 flex justify-center items-center cursor-pointer h-12 w-12 rounded-full bg-card shadow-md"
            aria-label="Next slide"
          >
            <webIcons.rightLongArrow />
          </button>
        </div>
      </motion.div>
    </section>
  );
};
export default ClientFeedback;
