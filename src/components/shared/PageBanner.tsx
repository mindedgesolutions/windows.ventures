import Image from 'next/image';
import { Header } from '@/components';

type PageBannerProps = {
  image: string;
  title: string;
  subtitle?: string;
};

const PageBanner = ({ image, title, subtitle }: PageBannerProps) => {
  return (
    <div className="min-h-100 bg-primary-foreground relative">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-card-foreground/70" />

      <div className="relative z-20">
        <Header />
        <div className="mx-auto flex flex-col gap-8 min-h-80 max-w-5xl justify-center items-center">
          <span className="font-manrope text-5xl text-card tracking-widest font-semibold">
            {title}
          </span>
          {subtitle && (
            <span className="font-space-mono text-base text-muted/50 tracking-widest font-normal">
              {subtitle}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
export default PageBanner;
