import { PageBanner, PageWrapper, SectionWrapper } from '@/components';

const WebDevelopment = () => {
  return (
    <>
      <PageBanner
        image="/banners/banner-1.jpg"
        title="Web Development"
        subtitle="Lorem ipsum dolor sit amet"
      />

      <PageWrapper>
        <SectionWrapper className="flex flex-col mt-24 gap-28 min-h-100">
          <span className="font-inter text-base tracking-wide">
            Web development page
          </span>
        </SectionWrapper>
      </PageWrapper>
    </>
  );
};
export default WebDevelopment;
