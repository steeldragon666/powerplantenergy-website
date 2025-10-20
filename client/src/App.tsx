import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IntroSection from './components/IntroSection';
import DefenceSection from './components/DefenceSection';
import MarketAnalysisSection from './components/MarketAnalysisSection';
import FundingSection from './components/FundingSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import TechnologySection from './components/TechnologySection';
import ImpactSection from './components/ImpactSection';
import TractionSection from './components/TractionSection';
import NewsSection from './components/NewsSection';
import SocialsSection from './components/SocialsSection';
import Footer from './components/Footer';
import ImageBanner from './components/ImageBanner';
import bannerAlgae from '/assets/9d08830d73ac68d798cb01e6045b08d28ab08da9.png';
import bannerFerns from '/assets/bcde4468d71419aba6de35acbee5d378cbba56a1.png';
import bannerLeafTexture from '/assets/43fa792d079af58b4e6e9c6ce3f7a30f47c3917a.png';
import bannerLandscape from '/assets/947426c156ec8916a32ff31d7ada873485b65b5d.png';
import mountainFog from '/assets/465b4bf243ce8746456a0950c0cc39822e9116d9.png';

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <IntroSection sustainableImage={mountainFog} />
        <DefenceSection />
        <MarketAnalysisSection />
        
        <ImageBanner src={bannerFerns} alt="Green ferns representing sustainable biomass" />
        
        <FundingSection />
        <ProblemSection />
        <SolutionSection />
        
        <ImageBanner src={bannerAlgae} alt="Sustainable biomass transformation" />
        
        <TechnologySection />
        <ImpactSection />
        <TractionSection />
        
        <ImageBanner src={bannerLeafTexture} alt="Detailed leaf texture showing natural transformation" />
        
        <NewsSection />
        <SocialsSection />
        
        <ImageBanner src={bannerLandscape} alt="Transformative journey through sustainable innovation" height="h-[700px]" />
      </main>
      <Footer />
    </div>
  );
}

