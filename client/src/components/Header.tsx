import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import svgPaths from "../imports/svg-ljfbzuwvod";
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Safely get location, fallback to root if not in router context
  let location;
  try {
    location = useLocation();
  } catch {
    location = { pathname: '/' };
  }

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/sustainable-fuels', label: 'Sustainable Fuels' },
    { path: '/critical-minerals', label: 'Critical Minerals' },
    { path: '/defence-energy', label: 'Defence Energy' },
    { path: '/technology', label: 'Technology' },
    { path: '/projects', label: 'Projects' },
    { path: '/insights', label: 'Insights' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1920px] mx-auto px-10 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="content-stretch flex font-['Poppins:Medium',_sans-serif] items-start leading-[1.4] not-italic text-nowrap text-white whitespace-pre hover:opacity-80 transition-opacity">
            <p className="relative shrink-0 text-[24px] tracking-[-0.72px]">Power Plant</p>
            <p className="relative shrink-0 text-[10px] tracking-[-0.3px]">TM</p>
          </Link>

          {/* Center Icon */}
          <div className="h-[30px] w-[44px] hidden md:block">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 30">
              <g>
                <path d={svgPaths.p16b46c00} fill="white" />
                <path d={svgPaths.p5145400} fill="white" />
              </g>
            </svg>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm tracking-wide transition-colors ${
                  location.pathname === item.path
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-white/80 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-8 pb-4 border-t border-white/10 pt-8">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-lg tracking-wide transition-colors ${
                    location.pathname === item.path
                      ? 'text-white'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
