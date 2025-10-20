interface StatsCardProps {
  number: string;
  label: string;
  description: string;
  index: number;
}

export default function StatsCard({ number, label, description }: StatsCardProps) {
  return (
    <div className="relative group">
      {/* Card Content */}
      <div className="bg-black/40 backdrop-blur-md border-2 border-white/10 rounded-[32px] p-12 h-[500px] flex flex-col group-hover:border-white/30 group-hover:scale-105 transition-all duration-300">
        <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] text-[160px] text-white tracking-[-16px] mb-6">
          {number}
        </p>
        <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[32px] text-white tracking-[-1.28px] mb-8">
          {label}
        </p>
        <p className="font-['Poppins:Medium',_sans-serif] leading-[1.3] text-[20px] text-white/80 tracking-[-0.4px]">
          {description}
        </p>
      </div>
    </div>
  );
}
