import svgPaths from "./svg-1i8w2084y9";
import imgImg from "/assets/e2d26e482ccb5c9b5eb16acb69dfbb106707d8f8.png";

function LogoType() {
  return (
    <div className="absolute content-stretch flex font-['Poppins:Medium',_sans-serif] items-start leading-[1.4] left-[40px] not-italic text-nowrap text-white top-[32px] whitespace-pre" data-name="Logo Type">
      <p className="relative shrink-0 text-[24px] tracking-[-0.72px]">SlideKit</p>
      <p className="relative shrink-0 text-[10px] tracking-[-0.3px]">TM</p>
    </div>
  );
}

function TopNav() {
  return (
    <div className="absolute contents left-[40px] top-[32px]" data-name="Top Nav">
      <LogoType />
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[calc(25%+26px)] not-italic text-[#75778b] text-[21px] text-nowrap top-[35px] tracking-[-0.63px] whitespace-pre">Index</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[calc(83.333%+280px)] not-italic text-[#75778b] text-[21px] text-nowrap text-right top-[35px] tracking-[-0.63px] translate-x-[-100%] whitespace-pre">Presentation System 2025</p>
      <div className="absolute h-[30px] left-[calc(41.667%+138px)] top-[34px] w-[44px]" data-name="Logo">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 30">
          <g id="Logo">
            <path d={svgPaths.p16b46c00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p5145400} fill="var(--fill-0, white)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-black relative size-full" data-name="Frame">
      <div className="absolute h-[382px] left-1/2 rounded-[10px] top-[calc(50%+317px)] translate-x-[-50%] translate-y-[-50%] w-[1840px]" data-name="img">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
          <img alt="" className="absolute h-[481.68%] left-0 max-w-none top-[-270.54%] w-full" src={imgImg} />
        </div>
      </div>
      <p className="absolute font-['Poppins:Regular',_sans-serif] leading-[1.4] left-[calc(20.833%-386px)] not-italic text-[400px] text-nowrap text-white top-[213px] tracking-[-36px] whitespace-pre">Brief.</p>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.1] left-[40px] not-italic text-[#75778b] text-[17px] top-[216px] tracking-[-0.34px] w-[310px]">This document sets out a full creative brief for beginning a new porject.</p>
      <TopNav />
    </div>
  );
}