import { Linkedin, Instagram } from 'lucide-react';

interface SocialsSectionProps {
  id?: string;
}

export default function SocialsSection({ id }: SocialsSectionProps) {
  const socials = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/power-plant-energy',
      description: 'Follow our professional updates'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/power_plant_energy/',
      description: 'Explore our visual journey'
    },
    {
      name: 'X',
      icon: () => (
        <svg
          viewBox="0 0 24 24"
          className="w-8 h-8"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      url: 'https://x.com',
      description: 'Join the conversation'
    }
  ];

  return (
    <section id={id} className="relative py-32" aria-labelledby="socials-heading">
      {/* Gradient Fade Overlays */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/50 to-black/0 z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-black/0 via-black/50 to-black z-[1]" />
      
      <div className="max-w-[1920px] mx-auto px-10 relative z-[5]">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="bg-white box-border content-stretch inline-flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] mb-8">
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Connect With Us</p>
          </div>

          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[96px] text-white tracking-[-3.84px] mb-6">
            Join Our Community
          </h2>

          <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] text-[28px] text-white/70 tracking-[-0.56px] max-w-[900px] mx-auto">
            Stay connected with Power Plant Energy and be part of the sustainable transformation
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/10 rounded-[32px] p-12 hover:from-white/10 hover:to-white/15 hover:border-white/30 transition-all cursor-pointer overflow-hidden"
              >
                {/* Gradient Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 via-teal-500/0 to-blue-500/0 group-hover:from-emerald-500/10 group-hover:via-teal-500/10 group-hover:to-blue-500/10 transition-all duration-500 rounded-[32px]" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon Container */}
                  <div className="mb-8 w-20 h-20 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <Icon className="text-white" />
                  </div>

                  {/* Name */}
                  <h3 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[36px] text-white tracking-[-0.72px] mb-4">
                    {social.name}
                  </h3>

                  {/* Description */}
                  <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] text-[18px] text-white/60 tracking-[-0.36px]">
                    {social.description}
                  </p>

                  {/* Arrow Indicator */}
                  <div className="mt-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                    <svg
                      className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
