import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { SolutionSection } from "@/components/sections/solution";
import { FeaturesSection } from "@/components/sections/features";
import { AudienceSection } from "@/components/sections/audience";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CtaSection } from "@/components/sections/cta";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <AudienceSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
