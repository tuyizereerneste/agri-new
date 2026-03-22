import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import PlatformFeatures from './components/PlatformFeatures';
import WhoItIsFor from './components/WhoItIsFor';
import ImpactSection from './components/ImpactSection';
import FutureVision from './components/FutureVision';
import PartnerSection from './components/PartnerSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-agri-background">
      <Navigation />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <HowItWorks />
      <PlatformFeatures />
      <WhoItIsFor />
      <ImpactSection />
      <FutureVision />
      <PartnerSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
