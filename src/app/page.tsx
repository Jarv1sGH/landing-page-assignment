import Section from "@/components/Sections/Section";
import HeroSection from "@/components/Sections/HeroSection";
import Navbar from "@/components/Navbar";
import FeatureSectionInfo from "@/components/SectionInfo/FeatureSectionInfo";
import AdvantageSectionInfo from "@/components/SectionInfo/AdvantageSectionInfo";
import { BellIcon, SparkleIconWhite } from "../components/Customicons"
import TestimonialSection from "@/components/Sections/TestimonialSection";
import FAQSection from "@/components/Sections/FAQ";
import DownloadApp from "@/components/Sections/DownloadApp";
import Footer from "@/components/Footer";
import BackgroundStars from "@/components/BackgroundStars";
import advantagesData from "../../data/advantages.json";

const App = () => {
  return (
    <div className="mainContainer">
      <Navbar />
      <HeroSection />
      {/* Features  Section */}
      <Section orientation="right" src='/assets/features.png' sectionInfo={<FeatureSectionInfo />} />

      {/* Advantages  Section */}
      <Section orientation="left" src='/assets/advantages.png' sectionInfo={
        <AdvantageSectionInfo
          headline={advantagesData.headline}
          description={advantagesData.advantages[0].description}
          Icon={BellIcon}
          advantage={advantagesData.advantages[0].title}
        />
      }
      />

      {/* Customization  Section */}
      <Section orientation="right" src='/assets/customization.png' sectionInfo={
        <AdvantageSectionInfo
          description={advantagesData.advantages[1].description}
          Icon={SparkleIconWhite}
          advantage={advantagesData.advantages[1].title}
        />
      } />

      <TestimonialSection />
      <FAQSection />
      <DownloadApp />
      <Footer />
      <BackgroundStars />

    </div>
  )
}

export default App;