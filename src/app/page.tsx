import {
  AboutCyberSolution,
  AboutKidsPlay,
  ClientFeedback,
  HeroSlider,
  ServicesSection,
  WhyUsSection,
} from '@/app';
import { SectionWrapper } from '@/components';

const Home = () => {
  return (
    <>
      <HeroSlider />
      <SectionWrapper className="flex flex-col mt-24 gap-28">
        <AboutCyberSolution />
        <WhyUsSection />
        <ServicesSection />
        <AboutKidsPlay />
        <ClientFeedback />
      </SectionWrapper>
    </>
  );
};
export default Home;
