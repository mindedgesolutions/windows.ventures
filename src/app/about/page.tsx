import {
  PageBanner,
  PageWrapper,
  SectionTitleWrapper,
  SectionWrapper,
  TextWrapper,
} from '@/components';

const About = () => {
  return (
    <>
      <PageBanner
        image="/banners/banner-1.jpg"
        title="About Us"
        subtitle="Who we are"
      />
      <PageWrapper>
        <SectionWrapper className="flex flex-col mt-24 gap-8">
          <SectionTitleWrapper title="About the Partnership" />
          <TextWrapper>
            Windows Ventures and Mentza have joined forces to bridge the gap
            between innate individual potential and high-performance career
            success. By combining deep self-awareness, strategic timing, and
            Mentza's AI-driven career readiness framework, we equip students and
            professionals with the tools they need to thrive in today's
            competitive landscape.
          </TextWrapper>
        </SectionWrapper>
        <SectionWrapper className="flex flex-col gap-8 mt-16">
          <SectionTitleWrapper title="Program Pillars" />
          <div className="flex flex-col gap-6">
            <TextWrapper>
              Innate Talent Mapping: Discover your core strengths, natural
              leadership styles, and ideal professional environments to choose a
              career path aligned with your true capabilities.
            </TextWrapper>
            <TextWrapper>
              AI-Powered Skill Enhancement: Leverage Mentza's advanced platform
              for resume building, mock interviews, and communication mastery.
            </TextWrapper>
            <TextWrapper>
              Strategic Career Timing: Learn how to navigate transitions,
              recognize windows of opportunity, and execute your career moves
              with confidence.
            </TextWrapper>
            <TextWrapper>
              Industry Readiness: Gain practical workplace competence,
              professional etiquette, and networking strategies designed for
              modern enterprises.
            </TextWrapper>
          </div>
        </SectionWrapper>
        <SectionWrapper className="flex flex-col gap-8 mt-16">
          <SectionTitleWrapper title="Who Is This For?" />
          <div className="flex flex-col gap-6">
            <TextWrapper>
              College Students & Graduates: Stepping into the professional world
              with clarity, a polished profile, and a strategic roadmap.
            </TextWrapper>
            <TextWrapper>
              Early-Career Professionals: Looking to accelerate growth, improve
              workplace communication, and time their next career pivot
              effectively.
            </TextWrapper>
          </div>
        </SectionWrapper>
      </PageWrapper>
    </>
  );
};
export default About;
