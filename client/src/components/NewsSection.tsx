import { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import imgGradient from "figma:asset/e2d26e482ccb5c9b5eb16acb69dfbb106707d8f8.png";

export default function NewsSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const articles = [
    {
      title: 'Power Plant Energy Secures Strategic Partnership',
      date: 'October 15, 2025',
      category: 'Partnership',
      excerpt: 'New collaboration accelerates biorefinery development and sustainable fuel production.'
    },
    {
      title: 'Breakthrough in Bio-Graphite Technology',
      date: 'October 8, 2025',
      category: 'Technology',
      excerpt: 'Innovative process achieves battery-grade purity from bamboo feedstock.'
    },
    {
      title: 'Australia Leads in Sustainable Aviation Fuel',
      date: 'October 1, 2025',
      category: 'Industry',
      excerpt: 'Government funding positions domestic SAF production for exponential growth.'
    },
    {
      title: 'Carbon-Negative Manufacturing at Scale',
      date: 'September 24, 2025',
      category: 'Impact',
      excerpt: 'Power Plant Energy demonstrates net-negative emissions in pilot facility.'
    },
    {
      title: 'Critical Minerals Strategy Update',
      date: 'September 17, 2025',
      category: 'Policy',
      excerpt: 'Federal government expands support for domestic graphite production.'
    },
    {
      title: 'Bamboo: The Future of Sustainable Materials',
      date: 'September 10, 2025',
      category: 'Research',
      excerpt: 'New study validates bamboo as optimal feedstock for biorefinery applications.'
    }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('news-scroll-container');
    if (!container) return;

    const scrollAmount = 400;
    const newPosition = direction === 'left' 
      ? Math.max(0, scrollPosition - scrollAmount)
      : Math.min(container.scrollWidth - container.clientWidth, scrollPosition + scrollAmount);

    container.scrollTo({ left: newPosition, behavior: 'smooth' });
    setScrollPosition(newPosition);
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src={imgGradient} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Fade Overlays */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/50 to-black/0 z-[1]" />
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-black/0 via-black/50 to-black z-[1]" />

      <div className="max-w-[1920px] mx-auto px-10 relative z-10">
        {/* Section Header */}
        <div className="mb-16 flex items-end justify-between">
          <div>
            <div className="bg-white box-border content-stretch inline-flex gap-[10px] items-center justify-center px-[17px] py-[8px] rounded-[4px] mb-8">
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[10px] text-black text-nowrap tracking-[-0.4px] whitespace-pre">News & Insights</p>
            </div>

            <h2 className="font-['Poppins:Medium',_sans-serif] leading-[1.1] not-italic text-[96px] text-white tracking-[-3.84px]">
              Latest Updates
            </h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button
              onClick={() => handleScroll('left')}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Scrollable Articles Container */}
        <div 
          id="news-scroll-container"
          className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[400px] bg-white/5 backdrop-blur-md border border-white/10 rounded-[24px] p-8 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
            >
              {/* Category Badge */}
              <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[12px] text-white/70 tracking-[-0.24px]">
                  {article.category}
                </p>
              </div>

              {/* Article Title */}
              <h3 className="font-['Poppins:Medium',_sans-serif] leading-[1.2] text-[28px] text-white tracking-[-0.56px] mb-4 group-hover:text-white/90 transition-colors">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="font-['Poppins:Medium',_sans-serif] leading-[1.4] text-[16px] text-white/60 tracking-[-0.32px] mb-6">
                {article.excerpt}
              </p>

              {/* Date */}
              <div className="flex items-center gap-2 text-white/50">
                <Calendar className="w-4 h-4" />
                <p className="font-['Poppins:Medium',_sans-serif] leading-[1.1] text-[14px] tracking-[-0.28px]">
                  {article.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
