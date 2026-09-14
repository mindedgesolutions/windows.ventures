import { PageBanner, PageWrapper, SectionWrapper } from '@/components';

const KidsPlay = () => {
  return (
    <>
      <PageBanner
        image="/banners/banner-1.jpg"
        title="Kids Play"
        subtitle="Lorem ipsum dolor sit amet"
      />
      <PageWrapper>
        <SectionWrapper className="flex flex-col mt-24 gap-28 min-h-100">
          <span className="font-inter text-base tracking-wide">
            Kids play page. The layout of this page will be different
          </span>
        </SectionWrapper>
      </PageWrapper>
    </>
  );
};
export default KidsPlay;
