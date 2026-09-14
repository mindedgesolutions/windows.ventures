import { PageBanner, PageWrapper, SectionWrapper } from '@/components';

const ContactUs = () => {
  return (
    <>
      <PageBanner
        image="/banners/banner-1.jpg"
        title="Contact Us"
        subtitle="Drop us a line"
      />
      <PageWrapper>
        <SectionWrapper className="flex flex-col mt-24 gap-28 min-h-100">
          <span className="font-inter text-base tracking-wide">
            Contact us page
          </span>
        </SectionWrapper>
      </PageWrapper>
    </>
  );
};
export default ContactUs;
