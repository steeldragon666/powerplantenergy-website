import { useState } from 'react';
import SEO from '../components/SEO';
import SocialsSection from '../components/SocialsSection';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Power Plant Energy",
    "description": "Connect with Power Plant Energy to discuss sustainable fuel partnerships, critical minerals supply, defence energy solutions, and investment opportunities"
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          organization: '',
          category: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

      {/* Contact Form Section */}
      <section className="relative py-32">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Categories */}
            <div>
              <h2 className="text-[40px] text-white mb-8 tracking-[-1.6px]">How Can We Help?</h2>
              
              <div className="space-y-6">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-[32px]">🛡️</div>
                    <div>
                      <h3 className="text-[20px] text-white mb-2 tracking-[-0.8px]">Defence & Government</h3>
                      <p className="text-white/80 text-[14px] leading-[1.6]">
                        Sovereign fuel supply, critical minerals for defence applications, and strategic partnership discussions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-[32px]">🏭</div>
                    <div>
                      <h3 className="text-[20px] text-white mb-2 tracking-[-0.8px]">Commercial Partnerships</h3>
                      <p className="text-white/80 text-[14px] leading-[1.6]">
                        Fuel offtake agreements, graphite supply contracts, and strategic industrial partnerships
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-[32px]">💼</div>
                    <div>
                      <h3 className="text-[20px] text-white mb-2 tracking-[-0.8px]">Investment & Finance</h3>
                      <p className="text-white/80 text-[14px] leading-[1.6]">
                        Equity investment, project finance, government grants, and strategic funding opportunities
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-[32px]">🔬</div>
                    <div>
                      <h3 className="text-[20px] text-white mb-2 tracking-[-0.8px]">Technology & Research</h3>
                      <p className="text-white/80 text-[14px] leading-[1.6]">
                        Technology licensing, joint R&D ventures, academic collaborations, and intellectual property discussions
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-[32px]">📰</div>
                    <div>
                      <h3 className="text-[20px] text-white mb-2 tracking-[-0.8px]">Media & Communications</h3>
                      <p className="text-white/80 text-[14px] leading-[1.6]">
                        Press inquiries, media interviews, speaking opportunities, and public relations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
                <h2 className="text-[32px] text-white mb-8 tracking-[-1.28px]">Contact Now</h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-emerald-500/20 border border-emerald-500/50 rounded-lg">
                    <p className="text-emerald-400 text-[16px]">
                      Thank you for your inquiry! Our team will respond within 48 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                    <p className="text-red-400 text-[16px]">
                      There was an error submitting your message. Please try again.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white/90 text-[16px] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white/90 text-[16px] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-white/90 text-[16px] mb-2">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-emerald-500 transition-colors"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="category" className="block text-white/90 text-[16px] mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
                    >
                      <option value="" className="bg-gray-900">Select a category</option>
                      <option value="defence" className="bg-gray-900">Defence & Government</option>
                      <option value="partnership" className="bg-gray-900">Commercial Partnerships</option>
                      <option value="investment" className="bg-gray-900">Investment & Finance</option>
                      <option value="technology" className="bg-gray-900">Technology & Research</option>
                      <option value="media" className="bg-gray-900">Media & Communications</option>
                      <option value="general" className="bg-gray-900">General Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white/90 text-[16px] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-600/50 text-white font-['Poppins:SemiBold',_sans-serif] px-8 py-4 rounded-lg text-[18px] tracking-[-0.36px] transition-all duration-300"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>

              <div className="mt-8 text-center">
                <p className="text-white/60 text-[14px]">
                  We respond to all inquiries within 48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="relative py-32 bg-gradient-to-b from-black via-emerald-950/10 to-black">
        <div className="max-w-[1920px] mx-auto px-10">
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
    </>
  );
}
