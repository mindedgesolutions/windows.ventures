import { PageBanner, PageWrapper, SectionWrapper } from '@/components';

const About = () => {
  return (
    <>
      <PageBanner
        image="/banners/banner-1.jpg"
        title="About Us"
        subtitle="Lorem ipsum dolor sit amet"
      />
      <PageWrapper>
        <SectionWrapper className="flex flex-col mt-24 gap-28 min-h-100">
          <span className="font-inter text-base tracking-wide">
            About us page
          </span>
        </SectionWrapper>
      </PageWrapper>
    </>
  );
};
export default About;
