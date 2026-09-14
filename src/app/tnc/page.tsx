import { PageBanner, PageWrapper, SectionWrapper } from '@/components';

const TermsAndConditions = () => {
  return (
    <>
      <PageBanner
        image="/banners/banner-1.jpg"
        title="Terms & Conditions"
        subtitle="Lorem ipsum dolor sit amet"
      />
      <PageWrapper>
        <SectionWrapper className="flex flex-col mt-24 gap-28 min-h-100">
          <span className="font-inter text-base tracking-wide">
            Terms and conditions page
          </span>
        </SectionWrapper>
      </PageWrapper>
    </>
  );
};
export default TermsAndConditions;
