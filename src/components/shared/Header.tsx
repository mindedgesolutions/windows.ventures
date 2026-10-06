'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AppLogo, Menu, PageWrapper } from '@/components';
import { webIcons } from '@/constants';
import { ModeToggle } from '../theme-toggle';

const Header = () => {
  const icons = [
    { id: 'facebook', icon: webIcons.facebook },
    { id: 'instagram', icon: webIcons.instagram },
    { id: 'youtube', icon: webIcons.youtube },
  ];

  // -------------------------------

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const header1 = document.getElementById('header-1');

    const handleScroll = () => {
      if (header1) {
        setScrolled(window.scrollY >= header1.offsetHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // -------------------------------

  const logoWidth = scrolled ? 50 : 60;
  const logoHeight = scrolled ? 50 : 60;

  return (
    <div className="relative z-50">
      <div
        id="header-1"
        className="bg-primary font-inter h-11 flex justify-center"
      >
        <PageWrapper className="flex justify-between items-center">
          {/* left side */}
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5 text-card">
              <webIcons.location size={14} />
              <span className="text-xs tracking-wider">
                RDB Boulevard, Salt Lake, Kolkata
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-card">
              <webIcons.phone size={14} />
              <span className="text-xs tracking-wider">+91-7890 339 155</span>
            </div>
            <div className="flex items-center gap-1.5 text-card">
              <webIcons.email size={14} />
              <span className="text-xs tracking-widest">
                contact@winvens.net
              </span>
            </div>
          </div>
          {/* right side */}
          <div className="flex flex-row justify-center items-center gap-4">
            {icons.map((SocialIcon) => (
              <IconWrapper
                key={SocialIcon.id}
                icon={
                  <SocialIcon.icon
                    className="text-card group-hover:text-card-foreground transition-colors duration-75"
                    size={14}
                  />
                }
              />
            ))}
            <ModeToggle />
          </div>
        </PageWrapper>
      </div>
      {/* Menu starts */}
      <header
        className={`
        z-50 w-full transition-all duration-100 ease-out
        ${
          scrolled
            ? 'fixed left-0 top-0 bg-card shadow-md'
            : 'relative bg-transparent'
        }
      `}
      >
        <PageWrapper
          className={`
          flex flex-row items-center justify-between bg-transparent
          transition-all duration-600 ease-out
          ${scrolled ? 'h-20' : 'h-28'}
        `}
        >
          <Link href="/">
            <section className="flex flex-row items-center justify-start gap-2">
              <AppLogo height={logoHeight} width={logoWidth} />

              <div className="flex flex-col">
                <span
                  className={`
                  font-manrope font-extrabold
                  capitalize leading-tight tracking-wider
                  ${scrolled ? 'text-primary text-xl' : 'text-card text-2xl'}
                `}
                >
                  windows
                </span>

                <span
                  className={`
                  font-manrope font-extrabold
                  capitalize leading-tight tracking-wider
                  ${scrolled ? 'text-primary text-xl' : 'text-card text-2xl'}
                `}
                >
                  ventures
                </span>
              </div>
            </section>
          </Link>

          <div>
            <Menu scrolled={scrolled} />
          </div>
        </PageWrapper>
      </header>
    </div>
  );
};

export default Header;

const IconWrapper = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <span className="p-1 border border-card rounded-full cursor-pointer group hover:bg-card transition-colors duration-150">
      {icon}
    </span>
  );
};
