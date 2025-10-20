import svgPaths from "./svg-urns9myfok";

function Type() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[1.07] not-italic place-items-start relative shrink-0 text-[6.071px] text-center text-white tracking-[-0.1214px]" data-name="Type">
      <p className="[grid-area:1_/_1] font-['Poppins:Bold',_sans-serif] h-[6.814px] ml-[32.714px] mt-0 relative translate-x-[-50%] w-[65.427px]">GETTING IN THE MOOD</p>
      <p className="[grid-area:1_/_1] font-['Poppins:Medium',_sans-serif] h-[6.814px] ml-[32.488px] mt-[7.03px] relative translate-x-[-50%] w-[51.44px]">MADE BY KIT</p>
    </div>
  );
}

function Graphic() {
  return (
    <div className="h-[167.299px] relative shrink-0 w-[224.612px]" data-name="Graphic">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 225 168">
        <g id="Graphic">
          <path d={svgPaths.p330f2f00} id="4" stroke="var(--stroke-0, #FEFFFF)" strokeWidth="1.34902" />
          <path d={svgPaths.p68ba800} id="3" stroke="var(--stroke-0, #FEFFFF)" strokeWidth="1.34902" />
          <path d={svgPaths.p1c1c1500} id="2" stroke="var(--stroke-0, #FEFFFF)" strokeWidth="1.34902" />
          <path d={svgPaths.p19845900} id="1" stroke="var(--stroke-0, #FEFFFF)" strokeWidth="1.34902" />
        </g>
      </svg>
    </div>
  );
}

function Type1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[1.07] not-italic place-items-start relative shrink-0 text-[6.071px] text-center text-white tracking-[-0.1214px]" data-name="Type">
      <p className="[grid-area:1_/_1] font-['Poppins:Bold',_sans-serif] h-[6.814px] ml-[23.945px] mt-0 relative translate-x-[-50%] w-[47.89px]">LAST UPDATED</p>
      <p className="[grid-area:1_/_1] font-['Poppins:Medium',_sans-serif] h-[6.745px] ml-[23.945px] mt-[7.629px] relative translate-x-[-50%] w-[45.192px]">OCTOBER 2023</p>
    </div>
  );
}

function Graphic1() {
  return (
    <div className="content-stretch flex gap-[58.682px] items-center justify-center relative shrink-0" data-name="Graphic">
      <Type />
      <Graphic />
      <Type1 />
    </div>
  );
}

export default function Tile5() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[6.745px] items-center justify-center relative rounded-[5.396px] size-full" data-name="Tile 5">
      <div aria-hidden="true" className="absolute border-[#292a36] border-[0.675px] border-solid inset-0 pointer-events-none rounded-[5.396px]" />
      <Graphic1 />
    </div>
  );
}