import svgPaths from "./svg-zarx2dh95a";
import imgImg from "/assets/e2d26e482ccb5c9b5eb16acb69dfbb106707d8f8.png";
import imgUse11 from "/assets/b8da0d2e38dca0c74726ab3dc545c80b43e72139.png";

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
      <div className="absolute h-[945px] left-[calc(50%+13px)] rounded-[10px] top-[95px] w-[907px]" data-name="img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImg} />
      </div>
      <div className="absolute h-[873px] left-[calc(50%+143px)] top-[167px] w-[651px]" data-name="use1 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgUse11} />
      </div>
      <TopNav />
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[0.9] left-[40px] not-italic text-[690px] text-white top-[94px] tracking-[-34.5px] w-[784px]">1</p>
      <div className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.1] left-[40px] not-italic text-[#75778b] text-[27px] top-[890px] tracking-[-1.08px] w-[686px]">
        <p className="mb-0 text-white">Brand Guidelines Document</p>
        <p>A comprehensive, easy-to-navigate document outlining the rules and principles of our visual identity. Includes: Logo usage, Typography, Color palette, Imagery and iconography, Brand tone and voice.</p>
      </div>
    </div>
  );
}