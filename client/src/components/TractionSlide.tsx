import TopNav from './TopNav';

export default function TractionSlide() {
  return (
    <div className="bg-black relative size-full">
      <TopNav />
      
      <div className="absolute left-[40px] top-[140px] w-[1840px]">
        <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] w-fit mb-6">
          <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Market Traction</p>
        </div>

        <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[64px] text-white tracking-[-2.56px] mb-16">
          De-Risked Commercial Validation
        </h2>

        <div className="grid grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-[32px] p-12 col-span-2">
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] text-[200px] text-black tracking-[-20px] mb-4">
              1.2M
            </p>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[34px] text-black tracking-[-1.36px] mb-6">
              Tons Biomass Supply Agreement
            </p>
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[21px] text-[#75778b] tracking-[-0.42px]">
              Secured long-term supply agreement demonstrating market confidence and operational readiness
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-12 flex flex-col justify-between">
            <div>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[34px] text-black tracking-[-1.36px] mb-6">
                Proven Technology
              </p>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[18px] text-[#75778b] tracking-[-0.36px]">
                Patent-protected processes validated at scale
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-2 border-purple-500/30 rounded-[32px] p-12">
          <h3 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[48px] text-white tracking-[-1.92px] mb-8">
            Investment Opportunity
          </h3>
          <div className="grid grid-cols-3 gap-12">
            <div>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[28px] text-white/70 tracking-[-1.12px] mb-2">
                Strategic
              </p>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[18px] text-white/60 tracking-[-0.36px]">
                Sovereign capability in critical materials supply chain
              </p>
            </div>
            <div>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[28px] text-white/70 tracking-[-1.12px] mb-2">
                De-Risked
              </p>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[18px] text-white/60 tracking-[-0.36px]">
                Proven technology with secured supply agreements
              </p>
            </div>
            <div>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[28px] text-white/70 tracking-[-1.12px] mb-2">
                Scalable
              </p>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[18px] text-white/60 tracking-[-0.36px]">
                Clear path to commercialization and market expansion
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
