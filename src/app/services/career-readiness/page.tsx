import { PageBanner, PageWrapper, SectionWrapper } from '@/components';

const CareerReadiness = () => {
  return (
    <>
      <PageBanner
        image="/banners/banner-1.jpg"
        title="Career Readiness"
        subtitle="Lorem ipsum dolor sit amet"
      />
      <PageWrapper>
        <SectionWrapper className="flex flex-col mt-24 gap-28 min-h-100">
          <span className="font-inter text-base tracking-wide">
            Career readiness page
          </span>
        </SectionWrapper>
      </PageWrapper>
    </>
  );
};
export default CareerReadiness;
