import svgPaths from "./svg-ld4pxqlsq";
import imgImg from "/assets/e2d26e482ccb5c9b5eb16acb69dfbb106707d8f8.png";
import imgImg1 from "/assets/478e4b247e5b6e4702d7984347746e9514bb5334.png";
import imgImg2 from "/assets/c922e7eebf2714905877e20d2530180d750f87fe.png";
import imgImg3 from "/assets/decab061ac81a01138c3b378118740afda1236d6.png";

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
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="1">
      <div className="[grid-area:1_/_1] h-[218px] ml-[97px] mt-0 relative rounded-[10px] w-[214px]" data-name="img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImg} />
      </div>
      <div className="[grid-area:1_/_1] font-['Poppins:Medium',_sans-serif] leading-[1.1] ml-0 mt-[283px] not-italic relative text-[0px] text-[17px] text-nowrap text-white tracking-[-0.34px] whitespace-pre">
        <p className="mb-0">Nike</p>
        <p className="text-[#75778b]">Brand System</p>
      </div>
    </div>
  );
}

function Component2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="2">
      <div className="[grid-area:1_/_1] h-[218px] ml-[97px] mt-0 relative rounded-[10px] w-[214px]" data-name="img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImg1} />
      </div>
      <div className="[grid-area:1_/_1] font-['Poppins:Medium',_sans-serif] leading-[1.1] ml-0 mt-[283px] not-italic relative text-[0px] text-[17px] text-nowrap text-white tracking-[-0.34px] whitespace-pre">
        <p className="mb-0">Apple</p>
        <p className="text-[#75778b]">Brand System</p>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="3">
      <div className="[grid-area:1_/_1] h-[218px] ml-[97px] mt-0 relative rounded-[10px] w-[214px]" data-name="img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImg2} />
      </div>
      <div className="[grid-area:1_/_1] font-['Poppins:Medium',_sans-serif] leading-[1.1] ml-0 mt-[283px] not-italic relative text-[0px] text-[17px] text-nowrap text-white tracking-[-0.34px] whitespace-pre">
        <p className="mb-0">Spotify</p>
        <p className="text-[#75778b]">Brand System</p>
      </div>
    </div>
  );
}

function Component4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="4">
      <div className="[grid-area:1_/_1] h-[218px] ml-[97px] mt-0 relative rounded-[10px] w-[214px]" data-name="img">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgImg3} />
      </div>
      <div className="[grid-area:1_/_1] font-['Poppins:Medium',_sans-serif] leading-[1.1] ml-0 mt-[283px] not-italic relative text-[0px] text-[17px] text-nowrap text-white tracking-[-0.34px] whitespace-pre">
        <p className="mb-0">Sonos</p>
        <p className="text-[#75778b]">Brand System</p>
      </div>
    </div>
  );
}

function Row() {
  return (
    <div className="absolute content-stretch flex gap-[199px] items-center leading-[0] left-[40px] top-[696px]" data-name="Row">
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
    </div>
  );
}

function Grid() {
  return (
    <div className="absolute h-0 left-0 top-[567px] w-[1920px]" data-name="Grid">
      <div className="absolute bottom-0 left-0 right-0 top-[-5px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1920 5">
          <g id="Grid">
            <line id="Grid_2" stroke="var(--stroke-0, #1D1E23)" strokeWidth="5" x1="2.18557e-07" x2="1920" y1="2.5" y2="2.50017" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-black relative size-full" data-name="Frame">
      <TopNav />
      <p className="absolute font-['Poppins:Bold',_sans-serif] leading-none left-[calc(50%-938px)] not-italic text-[378px] text-white top-[37px] tracking-[-26.46px] w-[1879px]">REFERENCE</p>
      <Row />
      <Grid />
      <p className="absolute font-['Poppins:Medium',_sans-serif] leading-[1.1] left-[40px] not-italic text-[0px] text-[17px] text-nowrap text-white top-[521px] tracking-[-0.34px] whitespace-pre">
        <span>{`SlideKit Core    `}</span>
        <span className="text-[#75778b]">Presentation System</span>
      </p>
    </div>
  );
}