import TopNav from './TopNav';

export default function ImpactSlide() {
  return (
    <div className="bg-black relative size-full">
      <TopNav />
      
      <div className="absolute left-[40px] top-[140px] w-[1840px]">
        <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] w-fit mb-6">
          <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Net-Positive Impact</p>
        </div>

        <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[64px] text-white tracking-[-2.56px] mb-4 max-w-[1200px]">
          Beyond ESG to Regenerative Business
        </h2>

        <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] not-italic text-[24px] text-[#75778b] tracking-[-0.48px] mb-16 max-w-[1400px]">
          We don't just minimize harm—we actively create positive environmental and social outcomes
        </p>

        <div className="grid grid-cols-2 gap-8">
          {/* Carbon Negative */}
          <div className="bg-gradient-to-br from-green-500/10 to-green-700/10 border-2 border-green-500/30 rounded-[32px] p-12">
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] text-[160px] text-white tracking-[-16px] mb-4">
              200t
            </p>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[32px] text-white tracking-[-1.28px] mb-6">
              CO₂ Sequestered per Hectare
            </p>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[20px] text-green-200 tracking-[-0.4px]">
              Bamboo cultivation to final product results in a net-negative carbon footprint—we remove more carbon than we emit
            </p>
          </div>

          {/* Land Regeneration */}
          <div className="bg-gradient-to-br from-blue-500/10 to-blue-700/10 border-2 border-blue-500/30 rounded-[32px] p-12">
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[48px] text-white tracking-[-1.92px] mb-6">
              Land Regeneration
            </p>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[20px] text-blue-200 tracking-[-0.4px] mb-8">
              We actively rehabilitate degraded mining sites, improving soil health and biodiversity instead of using arable farmland
            </p>
            <div className="h-px bg-white/20 mb-8" />
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[48px] text-white tracking-[-1.92px] mb-6">
              Community Empowerment
            </p>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[20px] text-blue-200 tracking-[-0.4px]">
              Creating sustainable, high-value jobs in rural and post-mining communities across Australia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
