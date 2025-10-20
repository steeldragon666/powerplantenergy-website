import StatsCard from './StatsCard';

export default function ProblemSection() {
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
    <section className="relative py-32">
      {/* Gradient Fade Overlays */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/50 to-black/0 z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-black/0 via-black/50 to-black z-[1]" />
      
      <div className="max-w-[1920px] mx-auto px-10 relative z-[5]">
        {/* Section Header */}
        <div className="mb-24">
          <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] w-fit mb-8">
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">The Economic Imperative</p>
          </div>

          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[96px] text-white tracking-[-3.84px]">
            Critical Supply Chain Vulnerability
          </h2>
        </div>

        {/* Challenge Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <StatsCard
              key={index}
              number={challenge.number}
              label={challenge.label}
              description={challenge.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
