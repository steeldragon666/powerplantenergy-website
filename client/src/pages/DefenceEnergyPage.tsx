import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import DefenceSection from '../components/DefenceSection';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Shield, Lock, Zap, AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';
import bannerLandscape from '/assets/947426c156ec8916a32ff31d7ada873485b65b5d.png';

export default function DefenceEnergyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Defence Energy Solutions",
    "name": "Sovereign Energy Capability for Australian Defence",
    "description": "Secure, locally-produced sustainable fuels and critical minerals for Australian Defence Force operations, reducing strategic vulnerability in fuel supply chains",
    "provider": {
      "@type": "Organization",
      "name": "Power Plant Energy"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Australia"
    }
  };

  const risks = [
    {
      icon: AlertTriangle,
      title: 'Import Dependency',
      stat: '90%+',
      description: 'Australia imports over 90% of liquid fuels, with only 28 days of domestic reserves—well below the IEA-recommended 90 days'
    },
    {
      icon: Shield,
      title: 'Supply Chain Vulnerability',
      stat: '6,000+ km',
      description: 'Critical fuel supply lines traverse geopolitically unstable regions, exposing ADF operations to disruption risks'
    },
    {
      icon: Lock,
      title: 'Strategic Dependency',
      stat: '3 refineries',
      description: 'Australia has only 3 remaining domestic refineries, down from 8 in 2012, concentrating risk in aging infrastructure'
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: 'Operational Resilience',
      description: 'Sovereign fuel production ensuring ADF can operate independently during supply chain disruptions or geopolitical conflicts'
    },
    {
      icon: Zap,
      title: 'Drop-In Compatibility',
      description: 'Sustainable fuels meeting defence specifications (Jet A-1, F-76, diesel) without requiring engine modifications or infrastructure changes'
    },
    {
      icon: TrendingUp,
      title: 'Strategic Stockpiling',
      description: 'Establish domestic fuel reserves with indefinite shelf stability, reducing dependency on just-in-time international supply chains'
    }
  ];

  return (
    <>
      <SEO
        title="Sovereign Energy Capability for Australian Defence | Power Plant Energy"
        description="Power Plant Energy delivers sovereign fuel production and critical minerals for the Australian Defence Force. Reduce strategic vulnerability with locally-produced sustainable aviation fuel and diesel meeting defence specifications."
        keywords="Australian defence energy security, sovereign fuel capability, ADF fuel supply, defence fuel production Australia, military fuel independence, defence supply chain resilience, renewable fuel for ADF, defence critical minerals"
        canonicalUrl="https://powerplantenergy.com.au/defence-energy"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
        
        <div className="max-w-[1920px] mx-auto px-10 relative z-10">
          <div className="max-w-5xl">
            <div className="bg-white box-border content-stretch inline-flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] mb-8">
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Strategic Partnership</p>
            </div>

            <h1 className="font-['Poppins:SemiBold',_sans-serif] leading-[1.1] not-italic text-[96px] text-white tracking-[-3.84px] mb-12">
              Sovereign Energy Capability for Australian Defence
            </h1>

            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[1.3] not-italic text-[28px] text-white/90 tracking-[-1.68px] mb-12">
              In an era of great power competition and supply chain fragmentation, Australia's dependence on imported fuels represents a critical strategic vulnerability. The Australian Defence Force consumes hundreds of millions of litres of fuel annually for aviation, naval, and ground operations—yet nearly all of it arrives via vulnerable international supply chains traversing contested waters.
            </p>

            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[1.3] not-italic text-[28px] text-white/90 tracking-[-1.68px] mb-12">
              Power Plant Energy is building the sovereign fuel production capability that Australia needs to operate independently in crisis scenarios. Our sustainable fuels meet rigorous defence specifications while eliminating reliance on geopolitically-exposed supply routes, providing the ADF with operational freedom and strategic resilience.
            </p>

            <div className="flex gap-6">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all"
              >
                Partner with Defence
              </Link>
              <Link
                to="/sustainable-fuels"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Fuel Specifications
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Risks Section */}
      <section className="relative py-32">
        <div className="max-w-[1920px] mx-auto px-10">
          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[64px] text-white tracking-[-3.84px] mb-16 text-center">
            Australia's Strategic Energy Vulnerability
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {risks.map((risk, index) => (
              <div key={index} className="bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-xl p-8">
                <risk.icon className="w-16 h-16 text-red-400 mb-6" />
                <div className="text-[48px] text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-4 tracking-[-1.92px]">
                  {risk.stat}
                </div>
                <h3 className="text-[32px] text-white mb-4 tracking-[-1.28px]">{risk.title}</h3>
                <p className="text-white/80 text-[18px] leading-[1.5]">{risk.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-red-500/10 to-orange-600/10 border border-red-500/20 rounded-2xl p-12">
            <h3 className="text-[40px] text-white mb-6 tracking-[-1.6px]">The 2019-2020 Fuel Security Review: A Wake-Up Call</h3>
            <p className="text-white/90 text-[20px] leading-[1.5] mb-6">
              The Australian Government's Fuel Security Review starkly highlighted our nation's dangerous reliance on imported liquid fuels. With domestic refining capacity declining and fuel reserves well below international norms, Australia faces significant risks:
            </p>
            <ul className="text-white/90 text-[18px] leading-[1.6] space-y-3 list-disc list-inside mb-6">
              <li><strong>Operational Disruption:</strong> ADF operations could be compromised within weeks if international fuel supply chains are disrupted</li>
              <li><strong>Economic Fragility:</strong> Transport, logistics, agriculture, and mining sectors depend entirely on imported fuels</li>
              <li><strong>Strategic Coercion:</strong> Adversaries could threaten fuel supply routes to constrain Australia's freedom of action</li>
              <li><strong>Price Volatility:</strong> Exposure to international oil markets creates economic instability and budget unpredictability</li>
            </ul>
            <p className="text-white/90 text-[20px] leading-[1.5]">
              Sovereign fuel production is no longer optional—it's a national security imperative. Power Plant Energy provides the technology and capability to deliver that independence.
            </p>
          </div>
        </div>
      </section>

      {/* Defence Section - Reuse existing component */}
      <DefenceSection />

      {/* Solutions Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-blue-950/10 to-black">
        <div className="max-w-[1920px] mx-auto px-10">
          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[64px] text-white tracking-[-3.84px] mb-16 text-center">
            How Power Plant Energy Strengthens Defence Capability
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full mb-6">
                  <solution.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-[28px] text-white mb-4 tracking-[-1.12px]">{solution.title}</h3>
                <p className="text-white/80 text-[18px] leading-[1.5]">{solution.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10">
            <h3 className="text-[32px] text-white mb-6 tracking-[-1.28px]">Meeting Defence Specifications with Sustainable Technology</h3>
            <p className="text-white/90 text-[18px] leading-[1.6] mb-4">
              Power Plant Energy's sustainable fuels are chemically identical to conventional petroleum-derived fuels, meeting all relevant Australian and international defence specifications:
            </p>
            <ul className="text-white/90 text-[18px] leading-[1.6] space-y-3 mb-6 list-disc list-inside">
              <li><strong>Jet A-1 (Aviation Turbine Fuel):</strong> For RAAF aircraft including F-35A, Super Hornet, and C-17 Globemaster</li>
              <li><strong>F-76 (Naval Diesel):</strong> For RAN surface vessels and submarines</li>
              <li><strong>Diesel (AS 3570):</strong> For Army ground vehicles, generators, and support equipment</li>
            </ul>
            <p className="text-white/90 text-[18px] leading-[1.6] mb-4">
              These drop-in fuels require no modifications to existing engines, fuel handling systems, or storage infrastructure. They deliver equivalent or superior performance characteristics including energy density, cold-weather operation, and thermal stability.
            </p>
            <p className="text-white/90 text-[18px] leading-[1.6]">
              By enabling the ADF to operate on domestically-produced fuels, Power Plant Energy eliminates the most significant logistical vulnerability in Australian defence planning while simultaneously advancing Australia's climate commitments through carbon-negative fuel production.
            </p>
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="relative h-[600px]">
        <ImageWithFallback
          src={bannerLandscape}
          alt="Australian landscape representing sovereign energy capability and defence fuel security through local sustainable fuel production"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="max-w-[1920px] mx-auto px-10 text-center">
          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[56px] text-white tracking-[-2.24px] mb-8">
            Strengthen Australia's Defence Capability
          </h2>
          <p className="text-white/80 text-[20px] mb-12 max-w-3xl mx-auto">
            Connect with Power Plant Energy to discuss sovereign fuel supply solutions for defence operations, strategic stockpiling, and fuel security partnerships.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-12 py-5 rounded-lg text-[18px] hover:from-blue-700 hover:to-indigo-800 transition-all"
          >
            Contact Our Defence Team
          </Link>
        </div>
      </section>
    </>
  );
}
