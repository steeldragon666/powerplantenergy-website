export default function SolutionSection() {
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
    <section className="relative py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-blue-600/10 blur-3xl rounded-full" />
      
      {/* Gradient Fade Overlays */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/50 to-black/0 z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-black/0 via-black/50 to-black z-[1]" />
      
      <div className="max-w-[1920px] mx-auto px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-24">
          <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] w-fit mb-8">
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Our Solution</p>
          </div>

          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[96px] text-white tracking-[-3.84px] mb-8 max-w-[1400px]">
            De-Risked, High-Growth Opportunity
          </h2>

          <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] not-italic text-[28px] text-[#75778b] tracking-[-0.56px] max-w-[1200px]">
            We provide a secure, domestic, and cost-advantaged alternative to volatile foreign markets
          </p>
        </div>

        {/* Solution Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-[32px] p-12 hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-8">
                <div className="shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                  <p className="font-['Poppins:Medium',_sans-serif] text-white text-[28px]">
                    {index + 1}
                  </p>
                </div>
                <div className="flex-1">
                  <h3 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[36px] text-black tracking-[-1.44px] mb-6">
                    {solution.title}
                  </h3>
                  <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[22px] text-[#75778b] tracking-[-0.44px]">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
