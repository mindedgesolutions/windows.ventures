'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionTitleWrapper, SubmitBtn, TextWrapper } from '@/components';
import { webIcons } from '@/constants';
import { highlights } from '@/constants/lookup';

const AboutCyberSolution = () => {
  return (
    <section id="about-us" className="flex gap-8">
      <motion.div
        id="about-us-text"
        className="flex flex-col gap-12 p-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <SectionTitleWrapper
          prefix="about cyber solution"
          title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            nihil!"
        />
        <TextWrapper>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          consequatur asperiores unde maxime perferendis ipsum aliquid facilis
          vero quasi pariatur, accusamus, corrupti, soluta impedit voluptatem
          quaerat. Illo cupiditate eos nam?
        </TextWrapper>
        <div className="grid grid-cols-2 gap-x-16 gap-y-4">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="flex justify-start items-center gap-4"
            >
              <webIcons.check className="text-section-title w-4 h-4" />
              <span className="text-primary font-semibold text-base font-inter">
                {highlight.msg}
              </span>
            </div>
          ))}
        </div>
        <motion.div
          className="flex justify-start items-center -mt-4 gap-4"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="bg-section-title p-4">
            <webIcons.phone className="text-card w-8 h-8" />
          </span>
          <div className="flex flex-col gap-2">
            <span className="font-inter text-muted-foreground font-medium">
              Call to ask any question
            </span>
            <span className="font-space-mono text-section-title text-2xl font-bold">
              +91-9876543210
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Link href={`/products/cyber-solution`}>
            <SubmitBtn label="Read More" />
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        id="about-us-image"
        className="relative aspect-video w-150 h-150"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Image
          src={`/banners/banner-1.jpg`}
          alt="Cyber solutions"
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  );
};
export default AboutCyberSolution;
