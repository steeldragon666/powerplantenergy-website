import TopNav from './TopNav';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function HeroSlide() {
  return (
    <div className="bg-black relative size-full">
      <TopNav />
      
      <div className="absolute left-[40px] top-[180px] w-[1840px]">
        <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] w-fit mb-8">
          <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Intelligent Transformation</p>
        </div>

        <h1 className="font-['Poppins:Medium',_sans-serif] leading-[1.05] not-italic text-[140px] text-white tracking-[-7px] mb-12 max-w-[1600px]">
          Turning Sustainable Resources into Critical Materials
        </h1>

        <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] not-italic text-[32px] text-[#75778b] tracking-[-0.64px] max-w-[1400px]">
          Power Plant Energy is pioneering the future of the circular economy by transforming bamboo into battery-grade graphite and sustainable aviation fuel—solving critical supply chain vulnerabilities while creating net-positive environmental impact.
        </p>
      </div>

      {/* Decorative Element */}
      <div className="absolute right-[80px] top-[300px] w-[400px] h-[400px]">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-green-500/20 to-blue-500/20 blur-3xl" />
      </div>
    </div>
  );
}
