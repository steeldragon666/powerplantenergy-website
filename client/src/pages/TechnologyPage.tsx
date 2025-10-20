import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import TechnologySection from '../components/TechnologySection';
import { FlaskConical, Leaf, Zap, Droplets } from 'lucide-react';

export default function TechnologyPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Advanced Biorefinery Technology for Sustainable Fuels and Critical Minerals",
    "description": "Power Plant Energy's proprietary biorefinery technology transforms renewable biomass into battery-grade graphite, sustainable aviation fuel, and hydrogen",
    "author": {
      "@type": "Organization",
      "name": "Power Plant Energy"
    }
  };

  const processSteps = [
    {
      icon: Leaf,
      title: 'Biomass Cultivation',
      description: 'Fast-growing bamboo cultivated on marginal Australian land, sequestering atmospheric carbon while producing renewable feedstock at industrial scale'
    },
    {
      icon: FlaskConical,
      title: 'Fractionation & Processing',
      description: 'Proprietary thermal and chemical processes separate biomass into cellulose, lignin, and extractives with 85-90% recovery efficiency'
    },
    {
      icon: Zap,
      title: 'Graphitisation & Synthesis',
      description: 'High-temperature pyrolysis and graphitisation convert cellulose to ultra-high-purity graphite (99.95%+) and produce renewable fuels'
    },
    {
      icon: Droplets,
      title: 'Co-Product Recovery',
      description: 'Hydrogen, bio-oils, and sustainable fuels extracted throughout the process, maximising value and minimising waste'
    }
  ];

  return (
    <>
      <SEO
        title="Biorefinery Technology | Power Plant Energy Australia"
        description="Power Plant Energy's advanced biorefinery technology transforms renewable bamboo into battery-grade graphite, sustainable aviation fuel, and hydrogen. Proprietary carbon-negative manufacturing process for critical minerals and biofuels."
        keywords="biorefinery technology, graphite production process, sustainable fuel manufacturing, biomass conversion, carbon negative technology, critical minerals processing, renewable fuel technology, bamboo biorefinery"
        canonicalUrl="https://powerplantenergy.com.au/technology"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/20 to-black" />
        
        <div className="max-w-[1920px] mx-auto px-10 relative z-10">
          <div className="max-w-5xl">
            <div className="bg-white box-border content-stretch inline-flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] mb-8">
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Technological Supremacy</p>
            </div>

            <h1 className="font-['Poppins:SemiBold',_sans-serif] leading-[1.1] not-italic text-[96px] text-white tracking-[-3.84px] mb-12">
              Advanced Biorefinery Technology
            </h1>

            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[1.3] not-italic text-[28px] text-white/90 tracking-[-1.68px] mb-12">
              Power Plant Energy's proprietary biorefinery platform represents a fundamental breakthrough in sustainable manufacturing. By combining advanced materials science, clean-energy engineering, and circular-economy design, we've developed a process that transforms renewable biomass into ultra-high-purity graphite, sustainable aviation fuel, and hydrogen—all while sequestering more carbon than we emit.
            </p>

            <div className="flex gap-6">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all"
              >
                Explore Partnerships
              </Link>
              <Link
                to="/projects"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all border border-white/20"
              >
                See Our Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-32">
        <div className="max-w-[1920px] mx-auto px-10">
          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[64px] text-white tracking-[-3.84px] mb-16 text-center">
            The Biorefinery Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-[48px] text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-[24px] text-white mb-4 tracking-[-0.96px]">{step.title}</h3>
                  <p className="text-white/80 text-[16px] leading-[1.5]">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-emerald-500/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Detail Section - Reuse existing component */}
      <TechnologySection />

      {/* Advantages Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-emerald-950/10 to-black">
        <div className="max-w-[1920px] mx-auto px-10">
          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[64px] text-white tracking-[-3.84px] mb-16 text-center">
            Why Our Technology Leads the Industry
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10">
              <h3 className="text-[32px] text-white mb-6 tracking-[-1.28px]">Compared to Traditional Graphite Mining</h3>
              <ul className="text-white/90 text-[18px] leading-[1.6] space-y-4 list-disc list-inside">
                <li><strong>Carbon Impact:</strong> Carbon negative vs. +15 tonnes CO₂ per tonne of graphite</li>
                <li><strong>Water Usage:</strong> Minimal water consumption vs. millions of litres per tonne</li>
                <li><strong>Land Disturbance:</strong> Renewable cultivation vs. destructive open-pit mining</li>
                <li><strong>Tailings Waste:</strong> Zero tailings vs. massive toxic waste storage requirements</li>
                <li><strong>Production Time:</strong> Continuous processing vs. 20+ year mine development cycles</li>
                <li><strong>Scalability:</strong> Modular biorefinery expansion vs. limited by ore body size</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10">
              <h3 className="text-[32px] text-white mb-6 tracking-[-1.28px]">Compared to Conventional Fuel Production</h3>
              <ul className="text-white/90 text-[18px] leading-[1.6] space-y-4 list-disc list-inside">
                <li><strong>Feedstock:</strong> Renewable biomass vs. finite fossil reserves</li>
                <li><strong>Supply Chain:</strong> Domestic production vs. vulnerable international imports</li>
                <li><strong>Emissions:</strong> 70-90% lower lifecycle GHG vs. conventional refining</li>
                <li><strong>Fuel Quality:</strong> Superior stability and energy density</li>
                <li><strong>Integration:</strong> Drop-in compatibility requiring zero infrastructure changes</li>
                <li><strong>Co-Products:</strong> Graphite, hydrogen, bio-oils extracted vs. waste byproducts</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-br from-emerald-500/10 to-teal-600/10 border border-emerald-500/20 rounded-2xl p-12">
            <h3 className="text-[40px] text-white mb-6 tracking-[-1.6px]">Intellectual Property & Commercial Readiness</h3>
            <p className="text-white/90 text-[20px] leading-[1.5] mb-6">
              Power Plant Energy holds proprietary rights to critical biorefinery processes, including cellulose fractionation methods, graphitisation pathways, and co-product extraction techniques. Our technology has been validated through pilot-scale operations and third-party materials testing.
            </p>
            <p className="text-white/90 text-[20px] leading-[1.5]">
              We are currently advancing toward commercial demonstration and are actively engaging with strategic partners, government agencies, and investors to scale production. Our modular biorefinery design enables rapid deployment and geographic distribution, supporting regional manufacturing hubs across Australia.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="max-w-[1920px] mx-auto px-10 text-center">
          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[56px] text-white tracking-[-2.24px] mb-8">
            Partner with Technology Leaders
          </h2>
          <p className="text-white/80 text-[20px] mb-12 max-w-3xl mx-auto">
            Explore collaboration opportunities in technology licensing, joint ventures, research partnerships, or investment in our commercial-scale biorefinery projects.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-12 py-5 rounded-lg text-[18px] hover:from-emerald-600 hover:to-teal-700 transition-all"
          >
            Discuss Technology Partnerships
          </Link>
        </div>
      </section>
    </>
  );
}
