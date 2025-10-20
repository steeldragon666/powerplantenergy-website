import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Battery, Cpu, Shield, TrendingUp, Factory, Globe } from 'lucide-react';
import bannerFerns from '/assets/bcde4468d71419aba6de35acbee5d378cbba56a1.png';

export default function CriticalMineralsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Battery-Grade Graphite and Critical Minerals",
    "description": "Sustainably-produced battery-grade graphite and critical minerals for Australian manufacturing, electronics, and defence industries",
    "manufacturer": {
      "@type": "Organization",
      "name": "Power Plant Energy"
    },
    "category": "Critical Minerals",
    "material": "Graphite",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/PreOrder",
      "areaServed": "AU"
    }
  };

  const markets = [
    {
      icon: Battery,
      title: 'Battery Manufacturing',
      stat: '300M+ EVs',
      description: 'Electric vehicle adoption driving unprecedented demand for battery-grade graphite—the largest component by weight in lithium-ion batteries',
      growth: 'Market projected to reach $32B by 2030'
    },
    {
      icon: Cpu,
      title: 'Electronics & Semiconductors',
      description: 'High-purity graphite for thermal management, electrodes, and advanced materials in semiconductor fabrication',
      growth: 'Critical for Australian sovereign tech manufacturing'
    },
    {
      icon: Shield,
      title: 'Defence Applications',
      description: 'Specialised graphite products for defence electronics, aerospace components, and advanced weapon systems',
      growth: 'National security priority for supply chain resilience'
    }
  ];

  const advantages = [
    {
      title: 'Sovereign Production',
      value: '100%',
      description: 'Australian-sourced feedstock, Australian processing, Australian supply—eliminating geopolitical risk'
    },
    {
      title: 'Carbon Negative',
      value: '-2.1 tonnes CO₂',
      description: 'Per tonne of graphite produced, compared to +15 tonnes for conventional mining'
    },
    {
      title: 'Battery Grade',
      value: '99.95%+',
      description: 'Purity exceeding industry specifications for lithium-ion battery anodes'
    },
    {
      title: 'Cost Competitive',
      value: '30% lower',
      description: 'Production costs compared to traditional mining and refining methods'
    }
  ];

  return (
    <>
      <SEO
        title="Critical Minerals Supply Chain | Power Plant Energy Australia"
        description="Power Plant Energy produces battery-grade graphite and critical minerals for Australian manufacturing, defence, and electronics. Sovereign supply chain eliminating geopolitical risk with carbon-negative production from renewable biomass."
        keywords="critical minerals Australia, battery grade graphite, sovereign critical minerals, local critical mineral refining, graphite production Australia, critical minerals supply chain, defence critical minerals, battery manufacturing materials, carbon negative graphite"
        canonicalUrl="https://powerplantenergy.com.au/critical-minerals"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-teal-950/20 to-black" />
        
        <div className="max-w-[1920px] mx-auto px-10 relative z-10">
          <div className="max-w-5xl">
            <div className="bg-white box-border content-stretch inline-flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] mb-8">
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Sovereign Manufacturing Capability</p>
            </div>

            <h1 className="font-['Poppins:SemiBold',_sans-serif] leading-[1.1] not-italic text-[96px] text-white tracking-[-3.84px] mb-12">
              Critical Minerals Supply Chain for Australian Industry
            </h1>

            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[1.3] not-italic text-[28px] text-white/90 tracking-[-1.68px] mb-12">
              Australia's transition to electric vehicles, renewable energy storage, and advanced manufacturing requires secure access to critical minerals—particularly battery-grade graphite. Yet Australia imports 100% of its processed graphite despite being resource-rich, creating strategic vulnerabilities in our manufacturing and defence supply chains.
            </p>

            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[1.3] not-italic text-[28px] text-white/90 tracking-[-1.68px] mb-12">
              Power Plant Energy's biorefinery technology produces ultra-high-purity graphite from renewable Australian biomass, establishing sovereign critical minerals capability while delivering carbon-negative manufacturing. Our process eliminates mining, dramatically reduces energy consumption, and provides consistent quality at competitive costs.
            </p>

            <div className="flex gap-6">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-8 py-4 rounded-lg hover:from-teal-600 hover:to-cyan-700 transition-all"
              >
                Secure Your Supply
              </Link>
              <Link
                to="/technology"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Production Technology
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="relative h-[500px]">
        <ImageWithFallback
          src={bannerFerns}
          alt="Sustainable biomass feedstock for battery-grade graphite production in Australian critical minerals biorefinery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </section>

      {/* Market Demand Section */}
      <section className="relative py-32">
        <div className="max-w-[1920px] mx-auto px-10">
          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[64px] text-white tracking-[-3.84px] mb-16 text-center">
            Explosive Demand Across Strategic Sectors
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {markets.map((market, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
                <market.icon className="w-16 h-16 text-teal-400 mb-6" />
                {market.stat && (
                  <div className="text-[48px] text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-4 tracking-[-1.92px]">
                    {market.stat}
                  </div>
                )}
                <h3 className="text-[32px] text-white mb-4 tracking-[-1.28px]">{market.title}</h3>
                <p className="text-white/80 text-[18px] leading-[1.5] mb-4">{market.description}</p>
                <p className="text-teal-400 text-[16px]">{market.growth}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-teal-500/10 to-cyan-600/10 border border-teal-500/20 rounded-2xl p-12">
            <h3 className="text-[40px] text-white mb-6 tracking-[-1.6px]">Strategic Geopolitical Imperative</h3>
            <p className="text-white/90 text-[20px] leading-[1.5] mb-6">
              China controls over 70% of global graphite processing capacity, creating significant supply chain risks for Western manufacturing and defence industries. Recent export restrictions on critical minerals have highlighted the urgent need for sovereign production capabilities in allied nations.
            </p>
            <p className="text-white/90 text-[20px] leading-[1.5] mb-6">
              Power Plant Energy's technology enables Australia to establish domestic graphite production at scale, reducing dependence on geopolitically-sensitive supply chains while supporting local manufacturing, battery production, and defence industries.
            </p>
            <p className="text-white/90 text-[20px] leading-[1.5]">
              Our carbon-negative production method also positions Australian graphite as the premium choice for ESG-conscious manufacturers seeking to decarbonise their supply chains without compromising on quality or reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="relative py-32 bg-gradient-to-b from-black via-teal-950/10 to-black">
        <div className="max-w-[1920px] mx-auto px-10">
          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[64px] text-white tracking-[-3.84px] mb-16 text-center">
            Technical & Economic Superiority
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {advantages.map((adv, index) => (
              <div key={index} className="text-center">
                <div className="text-[56px] text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-4 tracking-[-2.24px]">
                  {adv.value}
                </div>
                <h3 className="text-[28px] text-white mb-4 tracking-[-1.12px]">{adv.title}</h3>
                <p className="text-white/80 text-[16px] leading-[1.5]">{adv.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10">
            <h3 className="text-[32px] text-white mb-6 tracking-[-1.28px]">From Bamboo to Battery: The Complete Value Chain</h3>
            <p className="text-white/90 text-[18px] leading-[1.6] mb-4">
              Power Plant Energy's integrated biorefinery transforms fast-growing bamboo—one of the world's most renewable resources—into ultra-pure graphite through proprietary thermal and chemical processes. Unlike conventional mining that extracts finite resources with massive environmental impacts, our process:
            </p>
            <ul className="text-white/90 text-[18px] leading-[1.6] space-y-3 mb-4 list-disc list-inside">
              <li>Utilises renewable biomass grown on marginal Australian land unsuitable for food production</li>
              <li>Sequesters atmospheric carbon throughout the growth and processing cycle</li>
              <li>Recovers valuable co-products including hydrogen, bio-oils, and sustainable fuels</li>
              <li>Operates with minimal water consumption and zero tailings waste</li>
              <li>Enables modular, distributed production close to end-users</li>
            </ul>
            <p className="text-white/90 text-[18px] leading-[1.6]">
              This circular approach creates a resilient, sustainable critical minerals supply chain that strengthens Australia's industrial sovereignty while advancing our climate objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Applications Detail */}
      <section className="relative py-32">
        <div className="max-w-[1920px] mx-auto px-10">
          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[64px] text-white tracking-[-3.84px] mb-16">
            Graphite Applications & Specifications
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10">
              <Factory className="w-12 h-12 text-teal-400 mb-6" />
              <h3 className="text-[32px] text-white mb-6 tracking-[-1.28px]">Battery Anode Material</h3>
              <p className="text-white/90 text-[18px] leading-[1.6] mb-6">
                Our spherical graphite meets stringent specifications for lithium-ion battery anodes used in electric vehicles, grid storage, and portable electronics:
              </p>
              <ul className="text-white/80 text-[16px] leading-[1.6] space-y-2 list-disc list-inside">
                <li>Purity: 99.95%+ carbon content</li>
                <li>Particle size: D50 15-20 μm (controllable)</li>
                <li>Specific surface area: 3-8 m²/g</li>
                <li>Tap density: ≥1.0 g/cm³</li>
                <li>First cycle efficiency: ≥92%</li>
                <li>Reversible capacity: 350-365 mAh/g</li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10">
              <Globe className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-[32px] text-white mb-6 tracking-[-1.28px]">Industrial & Defence Applications</h3>
              <p className="text-white/90 text-[18px] leading-[1.6] mb-6">
                Beyond batteries, our high-purity graphite serves critical functions across advanced manufacturing:
              </p>
              <ul className="text-white/80 text-[16px] leading-[1.6] space-y-2 list-disc list-inside">
                <li>Thermal management materials for electronics and semiconductors</li>
                <li>Conductive additives for specialty coatings and composites</li>
                <li>Electrode materials for metallurgical and chemical processes</li>
                <li>Lubricants and sealants for extreme environments</li>
                <li>Defence-grade materials for aerospace and weapons systems</li>
                <li>Nuclear reactor moderator materials (ultra-high purity grades)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="max-w-[1920px] mx-auto px-10 text-center">
          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[56px] text-white tracking-[-2.24px] mb-8">
            Secure Your Critical Minerals Supply
          </h2>
          <p className="text-white/80 text-[20px] mb-12 max-w-3xl mx-auto">
            Partner with Power Plant Energy to establish sovereign critical minerals supply for your manufacturing, defence, or research operations.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-12 py-5 rounded-lg text-[18px] hover:from-teal-600 hover:to-cyan-700 transition-all"
          >
            Discuss Partnership Opportunities
          </Link>
        </div>
      </section>
    </>
  );
}
