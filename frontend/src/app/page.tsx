import { Layout } from "@/components/Layout";
import { ProductCarousel } from "@/components/ProductCarousel";
import { About } from "@/components/sections/About";
import { CTABanner } from "@/components/sections/CTABanner";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TrustedBy />
      <ProductCarousel />
      <Services />
      <Portfolio />
      <About />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <CTABanner />
      <Contact />
    </Layout>
  );
}
