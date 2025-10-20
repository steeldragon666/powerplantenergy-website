import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Fuel, Plane, Ship, Truck, FlaskConical, Leaf, TrendingDown } from 'lucide-react';
import bannerAlgae from '/assets/9d08830d73ac68d798cb01e6045b08d28ab08da9.png';

export default function SustainableFuelsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Sustainable Aviation Fuel and Biofuels",
    "description": "Locally-produced sustainable aviation fuel (SAF) and biofuels for defence, aviation, and transport sectors in Australia",
    "manufacturer": {
      "@type": "Organization",
      "name": "Power Plant Energy"
    },
    "category": "Renewable Energy Products",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/PreOrder",
      "areaServed": "AU"
    }
  };

  const applications = [
    {
      icon: Plane,
      title: 'Aviation',
      description: 'Drop-in sustainable aviation fuel (SAF) compatible with existing jet engines, reducing emissions by up to 80% compared to conventional jet fuel'
    },
    {
      icon: Ship,
      title: 'Maritime',
      description: 'Marine biofuels for naval vessels and commercial shipping, ensuring operational independence for Australian defence forces'
    },
    {
      icon: Truck,
      title: 'Transport & Logistics',
      description: 'Renewable diesel and biodiesel for heavy transport, logistics networks, and remote operations requiring fuel security'
    }
  ];

  const benefits = [
    {
      icon: Leaf,
      title: 'Carbon Negative Production',
      description: 'Our biorefinery process sequesters more carbon than it emits, delivering truly carbon-negative fuels'
    },
    {
      icon: FlaskConical,
      title: 'Superior Performance',
      description: 'Meet or exceed conventional fuel specifications with enhanced stability and energy density'
    },
    {
      icon: TrendingDown,
      title: 'Emissions Reduction',
      description: 'Reduce lifecycle greenhouse gas emissions by 70-90% compared to fossil-based alternatives'
    }
  ];

  return (
    <>
      <SEO
        title="Sustainable Fuels Australia | Power Plant Energy"
        description="Power Plant Energy produces sustainable aviation fuel (SAF) and biofuels for Australian defence, aviation, and transport. Sovereign fuel production reducing reliance on vulnerable global supply chains with carbon-negative manufacturing."
        keywords="sustainable aviation fuel Australia, SAF production, biofuel refinery Australia, renewable fuel for ADF, defence fuel supply, carbon negative fuel, Australian biofuel manufacturing, sovereign fuel capability"
        canonicalUrl="https://powerplantenergy.com.au/sustainable-fuels"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-emerald-950/20 to-black" />
        
        <div className="max-w-[1920px] mx-auto px-10 relative z-10">
          <div className="max-w-5xl">
            <div className="bg-white box-border content-stretch inline-flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] mb-8">
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Sustainable Energy Solutions</p>
            </div>

            <h1 className="font-['Poppins:SemiBold',_sans-serif] leading-[1.1] not-italic text-[96px] text-white tracking-[-3.84px] mb-12">
              Sustainable Fuels for Australia's Energy Security
            </h1>

            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[1.3] not-italic text-[28px] text-white/90 tracking-[-1.68px] mb-12">
              Power Plant Energy is building Australia's sovereign fuel production capability through advanced biorefinery technology. Our sustainable aviation fuel (SAF) and renewable biofuels provide the Australian Defence Force, aviation sector, and transport industries with locally-produced, high-performance alternatives to imported fossil fuels.
            </p>

            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[1.3] not-italic text-[28px] text-white/90 tracking-[-1.68px] mb-12">
              In an era of supply chain vulnerability and geopolitical uncertainty, sovereign fuel capability is not just an environmental imperative—it's a matter of national security. Our carbon-negative production process transforms Australian-grown bamboo into drop-in replacement fuels that meet rigorous defence and aviation specifications while dramatically reducing emissions.
            </p>

            <div className="flex gap-6">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-lg hover:from-emerald-600 hover:to-teal-700 transition-all"
              >
                Partner With Us
              </Link>
              <Link
                to="/technology"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg hover:bg-white/20 transition-all border border-white/20"
              >
                Our Technology
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="relative h-[500px]">
        <ImageWithFallback
          src={bannerAlgae}
          alt="Sustainable biomass feedstock transformation for renewable fuel production in Australian biorefinery"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </section>

      {/* Applications Section */}
      <section className="relative py-32">
        <div className="max-w-[1920px] mx-auto px-10">
          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[64px] text-white tracking-[-3.84px] mb-16 text-center">
            Fuel Applications Across Critical Sectors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {applications.map((app, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all">
                <app.icon className="w-16 h-16 text-emerald-400 mb-6" />
                <h3 className="text-[32px] text-white mb-4 tracking-[-1.28px]">{app.title}</h3>
                <p className="text-white/80 text-[18px] leading-[1.5]">{app.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-600/10 border border-emerald-500/20 rounded-2xl p-12">
            <h3 className="text-[40px] text-white mb-6 tracking-[-1.6px]">Defence Partnership Priority</h3>
            <p className="text-white/90 text-[20px] leading-[1.5] mb-6">
              Power Plant Energy views the Australian Defence Force as a cornerstone client in the nation's transition toward energy independence. With Australia importing over 90% of its liquid fuels—exposing critical defence operations to supply chain disruptions—our sovereign fuel production provides operational resilience and strategic autonomy.
            </p>
            <p className="text-white/90 text-[20px] leading-[1.5]">
              Our sustainable fuels meet stringent military specifications for aviation turbine fuel (Jet A-1) and diesel, enabling seamless integration into existing defence infrastructure without engine modifications or operational compromises.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-emerald-950/10 to-black">
        <div className="max-w-[1920px] mx-auto px-10">
          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[64px] text-white tracking-[-3.84px] mb-16 text-center">
            Why Power Plant Energy Fuels?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-[28px] text-white mb-4 tracking-[-1.12px]">{benefit.title}</h3>
                <p className="text-white/80 text-[18px] leading-[1.5]">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10">
            <h3 className="text-[32px] text-white mb-6 tracking-[-1.28px]">Sovereign Supply Chain Integration</h3>
            <p className="text-white/90 text-[18px] leading-[1.6] mb-4">
              Our vertically integrated approach ensures complete supply chain sovereignty—from bamboo cultivation on Australian land, through biorefinery processing using Australian technology and workforce, to final fuel delivery for Australian industry and defence. This domestic value chain creates jobs, builds capability, and eliminates exposure to international fuel market volatility.
            </p>
            <p className="text-white/90 text-[18px] leading-[1.6]">
              Every litre of Power Plant Energy fuel strengthens Australia's energy independence, reduces carbon emissions, and supports the transition to a circular, carbon-negative industrial economy that positions Australia as a leader in clean energy manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="max-w-[1920px] mx-auto px-10 text-center">
          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[56px] text-white tracking-[-2.24px] mb-8">
            Ready to Secure Your Fuel Supply?
          </h2>
          <p className="text-white/80 text-[20px] mb-12 max-w-3xl mx-auto">
            Connect with our team to discuss sustainable fuel partnerships, offtake agreements, and sovereign supply solutions for your organisation.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-12 py-5 rounded-lg text-[18px] hover:from-emerald-600 hover:to-teal-700 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
