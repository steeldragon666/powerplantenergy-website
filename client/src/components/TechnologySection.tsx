import svgPaths from "../imports/svg-8snommzkdn";

interface TechnologySectionProps {
  id?: string;
}

export default function TechnologySection({ id }: TechnologySectionProps) {
  const metrics = [
    { value: '85-90%', label: 'Cellulose Recovery', color: 'from-emerald-500 to-teal-600' },
    { value: '98%', label: 'Solvent Recovery', color: 'from-teal-500 to-blue-600' },
    { value: '40-50%', label: 'Energy Reduction', color: 'from-blue-500 to-emerald-500' }
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
    <section id={id} className="relative py-32" aria-labelledby="technology-heading">
      {/* Gradient Fade Overlays */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/50 to-black/0 z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-black/0 via-black/50 to-black z-[1]" />
      
      <div className="max-w-[1920px] mx-auto px-10 relative z-[5]">
        {/* Section Header */}
        <div className="mb-24">
          <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] w-fit mb-8">
            <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">Technological Supremacy</p>
          </div>

          <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[96px] text-white tracking-[-3.84px]">
            Intelligent by Design
          </h2>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className={`bg-gradient-to-br ${metric.color} rounded-[40px] px-12 py-16 backdrop-blur-sm border-2 border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 group`}>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] text-[140px] text-white tracking-[-14px] mb-4">
                {metric.value}
              </p>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[28px] text-white/90 tracking-[-1.12px]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>

        {/* Technology Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="border-2 border-white/20 rounded-[32px] p-10 backdrop-blur-sm hover:border-white/40 transition-colors">
              <h3 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[32px] text-white tracking-[-1.28px] mb-6">
                {tech.title}
              </h3>
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[20px] text-[#75778b] tracking-[-0.4px]">
                {tech.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
