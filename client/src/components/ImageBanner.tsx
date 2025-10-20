interface ImageBannerProps {
  src: string;
  alt?: string;
  height?: string;
}

export default function ImageBanner({ src, alt = "", height = "h-[600px]" }: ImageBannerProps) {
  return (
    <div className={`relative w-full ${height} overflow-hidden`}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
      />
      {/* Gradient fade to blend with black background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/5 to-black pointer-events-none" />
      {/* Additional side vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />
    </div>
  );
}
