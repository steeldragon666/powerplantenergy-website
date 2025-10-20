import svgPaths from "./svg-8snommzkdn";

function Mark() {
  return (
    <div className="h-[118.715px] relative shrink-0 w-[103.875px]" data-name="Mark">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 119">
        <g id="Mark">
          <path d={svgPaths.p13c1c400} fill="url(#paint0_linear_4_531)" id="rec" />
          <foreignObject height="148.899" width="148.096" x="-31.3108" y="-23.9928">
            <div style={{ backdropFilter: "blur(16.08px)", clipPath: "url(#bgblur_0_4_531_clip_path)", height: "100%", width: "100%" }} xmlns="http://www.w3.org/1999/xhtml" />
          </foreignObject>
          <path d={svgPaths.p398002f2} data-figma-bg-blur-radius="32.1516" fill="var(--fill-0, white)" fillOpacity="0.3" id="rec_2" />
        </g>
        <defs>
          <clipPath id="bgblur_0_4_531_clip_path" transform="translate(31.3108 23.9928)">
            <path d={svgPaths.p398002f2} />
          </clipPath>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4_531" x1="23.021" x2="13.9951" y1="108.942" y2="32.9811">
            <stop offset="0.0616042" stopColor="#FFF3CA" />
            <stop offset="0.323137" stopColor="#FF9F94" />
            <stop offset="0.716195" stopColor="#AD72BD" />
            <stop offset="1" stopColor="#7152DA" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Tile3() {
  return (
    <div className="bg-black content-stretch flex flex-col gap-[6.745px] items-center justify-center relative rounded-[5.396px] size-full" data-name="Tile 3">
      <div aria-hidden="true" className="absolute border-[#292a36] border-[0.675px] border-solid inset-0 pointer-events-none rounded-[5.396px]" />
      <Mark />
    </div>
  );
}