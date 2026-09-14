'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { SectionTitleWrapper, TextWrapper } from '@/components';
import { webIcons } from '@/constants';

const WhyUsSection = () => {
  return (
    <div>
      <SectionTitleWrapper
        prefix="why choose us"
        title="Lorem ipsum dolor sit, amet consectetur adipisicing"
        className="text-center"
        titleClass="mx-auto max-w-2xl"
      />
      <div className="grid grid-cols-3 gap-8 mt-12">
        <motion.section
          className="flex flex-col gap-4 p-2"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex flex-col h-1/2 gap-4">
            <span className="bg-section-title w-12 h-12 flex justify-center items-center">
              <webIcons.phone className="text-card w-4 h-4" />
            </span>
            <div className="flex flex-col gap-2">
              <h1 className="font-space-mono uppercase text-primary font-bold text-xl tracking-wide leading-relaxed">
                Best In Industry
              </h1>
              <TextWrapper>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat, alias!
              </TextWrapper>
            </div>
          </div>
          <div className="flex flex-col h-1/2 gap-4">
            <span className="bg-section-title w-12 h-12 flex justify-center items-center">
              <webIcons.phone className="text-card w-4 h-4" />
            </span>
            <div className="flex flex-col gap-2">
              <h1 className="font-space-mono uppercase text-primary font-bold text-xl tracking-wide leading-relaxed">
                Best In Industry
              </h1>
              <TextWrapper>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat, alias!
              </TextWrapper>
            </div>
          </div>
        </motion.section>
        <motion.section
          className="relative aspect-video w-full h-100"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 2, ease: 'easeOut' }}
        >
          <Image
            src={`/banners/banner-2.jpg`}
            alt="banner-2"
            fill
            className="object-cover"
          />
        </motion.section>
        <motion.section
          className="flex flex-col gap-4 p-2"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="flex flex-col h-1/2 gap-4">
            <span className="bg-section-title w-12 h-12 flex justify-center items-center">
              <webIcons.phone className="text-card w-4 h-4" />
            </span>
            <div className="flex flex-col gap-2">
              <h1 className="font-space-mono uppercase text-primary font-bold text-xl tracking-wide leading-relaxed">
                Best In Industry
              </h1>
              <TextWrapper>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat, alias!
              </TextWrapper>
            </div>
          </div>
          <div className="flex flex-col h-1/2 gap-4">
            <span className="bg-section-title w-12 h-12 flex justify-center items-center">
              <webIcons.phone className="text-card w-4 h-4" />
            </span>
            <div className="flex flex-col gap-2">
              <h1 className="font-space-mono uppercase text-primary font-bold text-xl tracking-wide leading-relaxed">
                Best In Industry
              </h1>
              <TextWrapper>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quaerat, alias!
              </TextWrapper>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};
export default WhyUsSection;
