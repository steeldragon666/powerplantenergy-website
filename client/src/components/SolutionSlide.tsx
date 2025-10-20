import TopNav from './TopNav';

export default function SolutionSlide() {
  const solutions = [
    {
      title: 'Supply Chain Security',
      description: 'Australian-based production insulates customers from geopolitical risks and ensures sovereign capability'
    },
    {
      title: 'Cost Advantage',
      description: 'Proprietary graphitisation process consumes 40-50% less energy, directly translating to lower costs and higher margins'
    },
    {
      title: 'Market-Ready',
      description: '1,200,000-ton biomass supply agreement provides tangible, de-risked commercial traction'
    },
    {
      title: 'Zero Waste',
      description: 'Integrated biorefinery system maximizes value from every molecule—nothing is wasted'
    }
  ];

  return (
    <div className="bg-black relative size-full">
      <TopNav />
      
      <div className="absolute left-[40px] top-[140px] w-[1840px]">
        <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] w-fit mb-6">
          <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Our Solution</p>
        </div>

        <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[64px] text-white tracking-[-2.56px] mb-4 max-w-[1400px]">
          De-Risked, High-Growth Opportunity in the New Energy Economy
        </h2>

        <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] not-italic text-[24px] text-[#75778b] tracking-[-0.48px] mb-16 max-w-[1400px]">
          We provide a secure, domestic, and cost-advantaged alternative to volatile foreign markets
        </p>

        <div className="grid grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-[24px] p-10">
              <div className="flex items-start gap-6">
                <div className="shrink-0 w-16 h-16 rounded-full bg-black flex items-center justify-center">
                  <p className="font-['Poppins:Medium',_sans-serif] text-white text-[24px]">
                    {index + 1}
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[32px] text-black tracking-[-1.28px] mb-4">
                    {solution.title}
                  </h3>
                  <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[20px] text-[#75778b] tracking-[-0.4px]">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
