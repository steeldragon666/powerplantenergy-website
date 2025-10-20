import svgPaths from "./svg-01za53m87c";
import imgImg from "/assets/186001e6f78460078ac26abf709dbf30de0f0555.png";

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
      <div className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.4] left-[calc(66.667%+3px)] not-italic text-[#75778b] text-[0px] text-[24px] top-[947px] tracking-[-0.72px] w-[373px]">
        <p className="mb-0">Get SlideKit here</p>
        <a className="[text-underline-position:from-font] block cursor-pointer decoration-solid underline" href="https://slidekit.framer.website/">
          https://slidekit.framer.website/
        </a>
      </div>
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[0.9] left-[calc(16.667%+640px)] not-italic text-[152px] text-center text-white top-[636px] tracking-[-10.64px] translate-x-[-50%] w-[1218px]">HERMES</p>
      <div className="absolute h-[500px] left-1/2 rounded-[20px] top-[calc(50%-154px)] translate-x-[-50%] translate-y-[-50%] w-[1840px]" data-name="img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[20px] size-full" src={imgImg} />
      </div>
      <TopNav />
    </div>
  );
}