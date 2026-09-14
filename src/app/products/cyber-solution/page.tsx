import { PageBanner, PageWrapper, SectionWrapper } from '@/components';

const CyberSolution = () => {
  return (
    <>
      <PageBanner
        image="/banners/banner-1.jpg"
        title="Cyber Solution"
        subtitle="Lorem ipsum dolor sit amet"
      />
      <PageWrapper>
        <SectionWrapper className="flex flex-col mt-24 gap-28 min-h-100">
          <span className="font-inter text-base tracking-wide">
            Cyber solution page
          </span>
        </SectionWrapper>
      </PageWrapper>
    </>
  );
};
export default CyberSolution;
