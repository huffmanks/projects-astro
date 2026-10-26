import AboutSection from "./AboutSection";
import BlogSection from "./BlogSection";
import ClientSection from "./ClientSection";
import HeroSection from "./HeroSection";
import ProductSection from "./ProductSection";
import TaglineSection from "./TaglineSection";
import WhySection from "./WhySection";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

const LandingDemo = () => {
  return (
    <>
      <Navbar />
      <>
        <HeroSection />
        <ClientSection />
        <TaglineSection />
        <ProductSection />
        <AboutSection />
        <WhySection />
        <BlogSection />
      </>
      <Footer />
    </>
  );
};

export default LandingDemo;
