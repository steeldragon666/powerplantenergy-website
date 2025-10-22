import svgPaths from "../imports/svg-ljfbzuwvod";

export default function Footer() {
  return (
    <footer className="relative py-12 md:py-20 border-t border-white/10">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-16 mb-8 md:mb-16">
          {/* Logo & Tagline */}
          <div>
            <div className="content-stretch flex font-['Poppins:Medium',_sans-serif] items-start leading-[1.4] not-italic text-nowrap text-white whitespace-pre mb-4 md:mb-6">
              <p className="relative shrink-0 text-[clamp(1.25rem,4vw,1.5rem)] tracking-[-0.72px]">Power Plant</p>
              <p className="relative shrink-0 text-[clamp(0.5rem,1.5vw,0.625rem)] tracking-[-0.3px]">TM</p>
            </div>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[clamp(0.875rem,2vw,1.125rem)] text-[#75778b] tracking-[-0.36px] max-w-[300px]">
              Intelligent transformation of sustainable resources into critical materials
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[20px] text-white tracking-[-0.4px] mb-6">
              Connect
            </p>
            <div className="space-y-3">
              <a href="#" className="block font-['Poppins:Medium',_sans-serif] text-[#75778b] hover:text-white transition-colors text-[clamp(0.875rem,2vw,1rem)] tracking-[-0.32px] min-h-[44px] flex items-center">
                Investor Relations
              </a>
              <a href="#" className="block font-['Poppins:Medium',_sans-serif] text-[#75778b] hover:text-white transition-colors text-[clamp(0.875rem,2vw,1rem)] tracking-[-0.32px] min-h-[44px] flex items-center">
                Technology Overview
              </a>
              <a href="#" className="block font-['Poppins:Medium',_sans-serif] text-[#75778b] hover:text-white transition-colors text-[clamp(0.875rem,2vw,1rem)] tracking-[-0.32px] min-h-[44px] flex items-center">
                Contact Us
              </a>
            </div>
          </div>

          {/* Icon */}
          <div className="flex justify-start lg:justify-end">
            <div className="h-[60px] w-[88px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 30">
                <g>
                  <path d={svgPaths.p16b46c00} fill="white" opacity="0.2" />
                  <path d={svgPaths.p5145400} fill="white" opacity="0.2" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="font-['Poppins:Medium',_sans-serif] text-[#75778b] text-[14px] tracking-[-0.28px]">
            © 2025 Power Plant Energy. All rights reserved.
          </p>
          <p className="font-['Poppins:Medium',_sans-serif] text-[#75778b] text-[14px] tracking-[-0.28px]">
            Q4 2025 Investor Presentation
          </p>
        </div>
      </div>
    </footer>
  );
}
