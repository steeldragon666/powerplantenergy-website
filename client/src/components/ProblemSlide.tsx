import TopNav from './TopNav';

export default function ProblemSlide() {
  const challenges = [
    {
      number: '80%',
      label: 'China Control',
      description: 'of global battery graphite processing is controlled by China, creating severe supply chain vulnerability'
    },
    {
      number: '2030',
      label: 'Critical Shortage',
      description: 'Projected severe shortage of battery-grade graphite as EV adoption accelerates globally'
    },
    {
      number: '$200B',
      label: 'Market Opportunity',
      description: 'Global sustainable aviation fuel market by 2030, with urgent demand for domestic production'
    }
  ];

  return (
    <div className="bg-black relative size-full">
      <TopNav />
      
      <div className="absolute left-[40px] top-[140px] w-[1840px]">
        <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] w-fit mb-6">
          <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">The Economic Imperative</p>
        </div>

        <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[64px] text-white tracking-[-2.56px] mb-16">
          Critical Supply Chain Vulnerability
        </h2>

        <div className="grid grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-white rounded-[32px] p-12 h-[440px] flex flex-col">
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] text-[180px] text-black tracking-[-18px] mb-4">
                {challenge.number}
              </p>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[28px] text-black tracking-[-1.12px] mb-6">
                {challenge.label}
              </p>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[18px] text-[#75778b] tracking-[-0.36px]">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
