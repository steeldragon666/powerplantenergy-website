import svgPaths from "../imports/svg-8snommzkdn";

interface OverlappingShapesProps {
  size?: number;
  className?: string;
}

export default function OverlappingShapes({ size = 200, className = '' }: OverlappingShapesProps) {
  const scale = size / 104;
  
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size * 1.14 }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 119">
        <g>
          <path d={svgPaths.p13c1c400} fill="url(#paint0_linear_overlap)" />
          <foreignObject height="148.899" width="148.096" x="-31.3108" y="-23.9928">
            <div 
              style={{ 
                backdropFilter: "blur(16.08px)", 
                clipPath: "url(#bgblur_overlap_clip_path)", 
                height: "100%", 
                width: "100%" 
              }} 
              xmlns="http://www.w3.org/1999/xhtml" 
            />
          </foreignObject>
          <path d={svgPaths.p398002f2} fill="white" fillOpacity="0.3" />
        </g>
        <defs>
          <clipPath id="bgblur_overlap_clip_path" transform="translate(31.3108 23.9928)">
            <path d={svgPaths.p398002f2} />
          </clipPath>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_overlap" x1="23.021" x2="13.9951" y1="108.942" y2="32.9811">
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
