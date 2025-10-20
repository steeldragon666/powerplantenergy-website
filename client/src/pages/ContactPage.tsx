import SEO from '../components/SEO';
import SocialsSection from '../components/SocialsSection';

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Power Plant Energy",
    "description": "Connect with Power Plant Energy to discuss sustainable fuel partnerships, critical minerals supply, defence energy solutions, and investment opportunities"
  };

  return (
    <>
      <SEO
        title="Contact Us | Power Plant Energy Australia"
        description="Connect with Power Plant Energy to discuss sustainable fuel partnerships, critical minerals supply agreements, defence energy solutions, technology licensing, and investment opportunities in sovereign Australian manufacturing."
        keywords="contact Power Plant Energy, sustainable fuel partnership, critical minerals supplier, defence energy contact, biorefinery investment, Australian energy company contact"
        canonicalUrl="https://powerplantenergy.com.au/contact"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black" />
        
        <div className="max-w-[1920px] mx-auto px-10 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="bg-white box-border content-stretch inline-flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] mb-8">
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Get in Touch</p>
            </div>

            <h1 className="font-['Poppins:SemiBold',_sans-serif] leading-[1.1] not-italic text-[96px] text-white tracking-[-3.84px] mb-12">
              Connect With Us
            </h1>

            <p className="font-['Poppins:SemiBold',_sans-serif] leading-[1.3] not-italic text-[28px] text-white/90 tracking-[-1.68px] mb-12">
              Whether you're seeking sustainable fuel supply partnerships, critical minerals offtake agreements, defence energy solutions, technology collaboration, or investment opportunities—we'd like to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="relative py-32">
        <div className="max-w-[1920px] mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10 text-center">
              <div className="text-[40px] mb-4">🛡️</div>
              <h3 className="text-[28px] text-white mb-4 tracking-[-1.12px]">Defence & Government</h3>
              <p className="text-white/80 text-[16px] leading-[1.6] mb-6">
                Sovereign fuel supply, critical minerals for defence applications, and strategic partnership discussions
              </p>
              <a href="mailto:defence@powerplantenergy.com.au" className="text-blue-400 hover:text-blue-300 transition-colors">
                defence@powerplantenergy.com.au
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10 text-center">
              <div className="text-[40px] mb-4">🏭</div>
              <h3 className="text-[28px] text-white mb-4 tracking-[-1.12px]">Commercial Partnerships</h3>
              <p className="text-white/80 text-[16px] leading-[1.6] mb-6">
                Fuel offtake agreements, graphite supply contracts, and strategic industrial partnerships
              </p>
              <a href="mailto:partnerships@powerplantenergy.com.au" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                partnerships@powerplantenergy.com.au
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10 text-center">
              <div className="text-[40px] mb-4">💼</div>
              <h3 className="text-[28px] text-white mb-4 tracking-[-1.12px]">Investment & Finance</h3>
              <p className="text-white/80 text-[16px] leading-[1.6] mb-6">
                Equity investment, project finance, government grants, and strategic funding opportunities
              </p>
              <a href="mailto:invest@powerplantenergy.com.au" className="text-violet-400 hover:text-violet-300 transition-colors">
                invest@powerplantenergy.com.au
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10 text-center">
              <div className="text-[40px] mb-4">🔬</div>
              <h3 className="text-[28px] text-white mb-4 tracking-[-1.12px]">Technology & Research</h3>
              <p className="text-white/80 text-[16px] leading-[1.6] mb-6">
                Technology licensing, joint R&D ventures, academic collaborations, and intellectual property discussions
              </p>
              <a href="mailto:technology@powerplantenergy.com.au" className="text-teal-400 hover:text-teal-300 transition-colors">
                technology@powerplantenergy.com.au
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10 text-center">
              <div className="text-[40px] mb-4">📰</div>
              <h3 className="text-[28px] text-white mb-4 tracking-[-1.12px]">Media & Communications</h3>
              <p className="text-white/80 text-[16px] leading-[1.6] mb-6">
                Press inquiries, media interviews, speaking opportunities, and public relations
              </p>
              <a href="mailto:media@powerplantenergy.com.au" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                media@powerplantenergy.com.au
              </a>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-10 text-center">
              <div className="text-[40px] mb-4">✉️</div>
              <h3 className="text-[28px] text-white mb-4 tracking-[-1.12px]">General Inquiries</h3>
              <p className="text-white/80 text-[16px] leading-[1.6] mb-6">
                All other inquiries, questions, and general correspondence
              </p>
              <a href="mailto:info@powerplantenergy.com.au" className="text-white/80 hover:text-white transition-colors">
                info@powerplantenergy.com.au
              </a>
            </div>
          </div>

          {/* Why Partner Section */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-500/10 to-cyan-600/10 border border-emerald-500/20 rounded-2xl p-12">
            <h2 className="text-[40px] text-white mb-6 tracking-[-1.6px] text-center">Why Partner with Power Plant Energy?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-[24px] text-white mb-4 tracking-[-0.96px]">For Defence & Government</h3>
                <ul className="text-white/90 text-[16px] leading-[1.6] space-y-2 list-disc list-inside">
                  <li>Sovereign supply chain security</li>
                  <li>Strategic independence from imports</li>
                  <li>Carbon-negative fuel production</li>
                  <li>Compliance with defence specifications</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[24px] text-white mb-4 tracking-[-0.96px]">For Industry Partners</h3>
                <ul className="text-white/90 text-[16px] leading-[1.6] space-y-2 list-disc list-inside">
                  <li>Secure access to critical minerals</li>
                  <li>Decarbonise supply chains</li>
                  <li>Australian-made quality assurance</li>
                  <li>Long-term supply stability</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[24px] text-white mb-4 tracking-[-0.96px]">For Investors</h3>
                <ul className="text-white/90 text-[16px] leading-[1.6] space-y-2 list-disc list-inside">
                  <li>High-growth clean energy sector</li>
                  <li>Government support and funding</li>
                  <li>Proven technology and IP</li>
                  <li>Strategic market positioning</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[24px] text-white mb-4 tracking-[-0.96px]">For Researchers</h3>
                <ul className="text-white/90 text-[16px] leading-[1.6] space-y-2 list-disc list-inside">
                  <li>Cutting-edge biorefinery technology</li>
                  <li>Advanced materials research</li>
                  <li>Real-world application pathways</li>
                  <li>Collaborative innovation culture</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Socials Section - Reuse existing component */}
      <SocialsSection />

      {/* Response Time */}
      <section className="relative py-24">
        <div className="max-w-[1920px] mx-auto px-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[48px] text-white tracking-[-1.92px] mb-6">
              We Respond Within 48 Hours
            </h2>
            <p className="text-white/80 text-[18px] leading-[1.6]">
              Our team is committed to timely responses for all partnership, investment, and collaboration inquiries. For urgent matters related to defence or government procurement, please indicate priority in your subject line.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
