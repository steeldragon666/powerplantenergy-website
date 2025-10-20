import TopNav from './TopNav';

export default function TechnologySlide() {
  const metrics = [
    { value: '85-90%', label: 'Cellulose Recovery' },
    { value: '98%', label: 'Solvent Recovery' },
    { value: '40-50%', label: 'Energy Reduction' }
  ];

  const technologies = [
    {
      title: 'Proprietary IP Portfolio',
      description: 'Protected by patents and trade secrets, creating a strong competitive moat that competitors cannot replicate'
    },
    {
      title: 'Integrated System Design',
      description: 'Pyrolysis, HTL, and energy recovery work together with AI-powered controls to create a zero-waste biorefinery'
    },
    {
      title: 'Battery-Grade Quality',
      description: 'Our graphite meets or exceeds industry specifications for lithium-ion battery applications'
    }
  ];

  return (
    <div className="bg-black relative size-full">
      <TopNav />
      
      <div className="absolute left-[40px] top-[140px] w-[1840px]">
        <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] w-fit mb-6">
          <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Technological Supremacy</p>
        </div>

        <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[64px] text-white tracking-[-2.56px] mb-16">
          Intelligent by Design
        </h2>

        {/* Metrics */}
        <div className="flex gap-6 mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-[32px] px-12 py-10 flex-1">
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] text-[120px] text-black tracking-[-12px] mb-2">
                {metric.value}
              </p>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[24px] text-[#75778b] tracking-[-0.96px]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="grid grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="border-2 border-white/20 rounded-[24px] p-8">
              <h3 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[28px] text-white tracking-[-1.12px] mb-4">
                {tech.title}
              </h3>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[18px] text-[#75778b] tracking-[-0.36px]">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
