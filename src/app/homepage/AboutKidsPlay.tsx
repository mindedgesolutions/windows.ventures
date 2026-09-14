'use client';

import { LayoutGroup, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { SectionTitleWrapper, SubmitBtn, TextWrapper } from '@/components';
import { webIcons } from '@/constants';
import { kidsPlayHighlights, kidsPlayImages } from '@/constants/lookup';

const AboutKidsPlay = () => {
  return (
    <section id="about-kids" className="flex gap-8 mt-8">
      <LayoutGroup id="kids-image">
        <motion.div
          id="about-kids-image"
          className="relative aspect-video w-150 h-150"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="absolute top-0 left-0 w-75 h-50">
            <Image
              src={kidsPlayImages[0].src}
              alt={kidsPlayImages[0].alt}
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>

          <div className="absolute top-45 right-0 w-100 h-75">
            <Image
              src={kidsPlayImages[1].src}
              alt={kidsPlayImages[1].alt}
              fill
              sizes="400px"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 left-20 w-32 h-32">
            <Image
              src={kidsPlayImages[2].src}
              alt={kidsPlayImages[2].alt}
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </LayoutGroup>

      <motion.div
        id="about-kids-text"
        className="flex flex-col gap-12 p-4"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <SectionTitleWrapper
          prefix="about kids play"
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
          {kidsPlayHighlights.map((highlight) => (
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
          className="flex gap-8"
        >
          <Link href={`/products/cyber-solution`}>
            <SubmitBtn label="Read More" />
          </Link>
          <a href={`https://www.amazon.in/`} rel="noopener" target="_blank">
            <SubmitBtn
              label="Buy on Amazon"
              className="bg-section-title hover:bg-section-title/90"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default AboutKidsPlay;
