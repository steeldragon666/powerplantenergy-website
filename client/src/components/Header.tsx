import svgPaths from "../imports/svg-ljfbzuwvod";
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1920px] mx-auto px-10 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="content-stretch flex font-['Poppins:Medium',_sans-serif] items-start leading-[1.4] not-italic text-nowrap text-white whitespace-pre">
          <p className="relative shrink-0 text-[24px] tracking-[-0.72px]">Power Plant</p>
          <p className="relative shrink-0 text-[10px] tracking-[-0.3px]">TM</p>
        </div>

        {/* Center Icon */}
        <div className="h-[30px] w-[44px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 30">
            <g>
              <path d={svgPaths.p16b46c00} fill="white" />
              <path d={svgPaths.p5145400} fill="white" />
            </g>
          </svg>
        </div>

        {/* Menu */}
        <button className="text-[#75778b] hover:text-white transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
