'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { useState } from 'react';
import { IconBtn, SectionTitleWrapper, TextWrapper } from '@/components';
import { webIcons } from '@/constants';
import { services } from '@/constants/lookup';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <div>
      <SectionTitleWrapper
        prefix="services we provide"
        title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, aperiam"
        className="text-center"
        titleClass="mx-auto max-w-2xl"
      />
      <div className="grid grid-cols-3 gap-8 mt-12">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="p-4 py-14 bg-primary-foreground/50 flex flex-col justify-center items-center relative"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            onHoverStart={() => setHoveredService(service.id)}
            onHoverEnd={() => setHoveredService(null)}
          >
            <div className="w-16 h-16 bg-section-title rotate-45 flex items-center justify-center">
              <service.icon className="w-6 h-6 -rotate-45 text-card" />
            </div>

            <div className="flex flex-col text-center mt-8 gap-4">
              <h1 className="font-space-mono uppercase text-primary font-bold text-xl tracking-wide leading-relaxed">
                {service.title}
              </h1>

              <TextWrapper className="text-base mb-4">
                {service.text}
              </TextWrapper>
            </div>

            <motion.div
              className="absolute -bottom-5"
              initial={{ opacity: 0, y: 20 }}
              animate={
                hoveredService === service.id
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.4,
                ease: 'easeOut',
              }}
            >
              <Link href={service.link}>
                <IconBtn icon={<webIcons.rightArrow />} />
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default ServicesSection;
