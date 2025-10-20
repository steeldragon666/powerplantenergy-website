import svgPaths from "./svg-srm2argq7";
import imgImg from "figma:asset/ea1316ba1e4c5a2832381d2720972137b287534b.png";

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

function Component1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[calc(41.667%+138px)] top-[107px]" data-name="1">
      <div className="h-[895px] relative rounded-[10px] shrink-0 w-[592px]" data-name="img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImg} />
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-black relative size-full" data-name="Frame">
      <TopNav />
      <p className="absolute font-['Poppins:SemiBold',_sans-serif] leading-[1.1] left-[89px] not-italic text-[30px] text-white top-[540px] tracking-[-1.8px] w-[704px]">{`External partners—such as creative agencies, freelance designers, and content producers—will use the Brand Design System as their go-to reference for executing work that aligns with our visual and strategic brand direction. `}</p>
      <Component1 />
    </div>
  );
}