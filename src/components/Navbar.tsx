import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { SALON_INFO } from '../data/salonData';
import { Phone, Menu, X, Calendar } from 'lucide-react';

interface NavbarProps {
  currentRoute: PageRoute;
  onRouteChange: (route: PageRoute) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentRoute,
  onRouteChange,
  onOpenBooking,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: 'home' },
    { label: 'About', route: 'about' },
    { label: 'Services', route: 'services' },
    { label: 'Bridal', route: 'bridal' },
    { label: 'Gallery', route: 'gallery' },
    { label: 'Contact', route: 'contact' },
  ];

  const handleNavClick = (route: PageRoute) => {
    onRouteChange(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#262420] shadow-xl py-3.5'
          : 'bg-gradient-to-b from-[#0B0B0B]/90 via-[#0B0B0B]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark in display face */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group flex flex-col focus:outline-none shrink-0"
            aria-label="Nitin Girdhar Unisex Salon Home"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#F7F3EC] group-hover:text-[#D4AF70] transition-colors whitespace-nowrap">
              NITIN GIRDHAR
            </span>
            <span className="text-[10px] tracking-[0.25em] text-[#D4AF70] font-sans font-medium uppercase -mt-0.5">
              Unisex Salon · Delhi
            </span>
          </button>

          {/* Zone 2: 5–6 concise single-line nav links with clean hover styling */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium"
            aria-label="Main Navigation"
          >
            {navLinks.map((item) => {
              const isActive = currentRoute === item.route;
              return (
                <button
                  key={item.route}
                  onClick={() => handleNavClick(item.route)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 text-sm tracking-wide ${
                    isActive
                      ? 'text-[#D4AF70] font-semibold'
                      : 'text-[#B8B8B8] hover:text-[#F7F3EC]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF70] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${SALON_INFO.mobileNumberRaw}`}
              className="flex items-center gap-2 text-xs text-[#B8B8B8] hover:text-[#D4AF70] transition-colors whitespace-nowrap"
              title="Call Salon"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF70]" />
              <span className="tabular-nums font-medium">{SALON_INFO.mobileNumber}</span>
            </a>
            <button
              onClick={() => onOpenBooking()}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B0B0B] bg-[#D4AF70] hover:bg-[#E8C98F] transition-all rounded shadow-md hover:shadow-[#D4AF70]/20 whitespace-nowrap shrink-0 focus:ring-2 focus:ring-[#D4AF70] focus:ring-offset-2 focus:ring-offset-[#0B0B0B]"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu & Quick Book Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              className="px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0B0B0B] bg-[#D4AF70] rounded whitespace-nowrap"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F7F3EC] hover:text-[#D4AF70] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#141414] border-b border-[#262420] px-6 py-6 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`text-left text-base font-medium py-2 transition-colors ${
                  currentRoute === item.route
                    ? 'text-[#D4AF70] font-semibold'
                    : 'text-[#B8B8B8] hover:text-[#F7F3EC]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#262420] space-y-3">
            <a
              href={`tel:${SALON_INFO.mobileNumberRaw}`}
              className="flex items-center gap-2.5 text-sm text-[#F7F3EC] py-2"
            >
              <Phone className="w-4 h-4 text-[#D4AF70]" />
              <span className="tabular-nums font-medium">{SALON_INFO.mobileNumber}</span>
              <span className="text-xs text-[#B8B8B8]">· Shakti Nagar</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-wider text-[#0B0B0B] bg-[#D4AF70] rounded"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
