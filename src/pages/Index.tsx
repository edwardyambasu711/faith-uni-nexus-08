import { HeroSection } from "@/components/landing/HeroSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { ProgramsSection } from "@/components/landing/ProgramsSection";
import { NewsSection } from "@/components/landing/NewsSection";
import { Layout } from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <NewsSection />
    </Layout>
  );
};

export default Index;
