import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
    'Hello Nitin Girdhar Unisex Salon, I would like to inquire about booking an appointment.'
  )}`;

  return (
    <>
      {/* Desktop & Tablet Floating Buttons (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col gap-3">
        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-12 h-12 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:shadow-emerald-600/30 transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="Chat on WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-[#141414] text-[#F7F3EC] text-xs px-2.5 py-1.5 rounded border border-[#262420] whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-md">
            WhatsApp Concierge
          </span>
        </a>

        {/* Call Salon Button */}
        <a
          href={`tel:${SALON_INFO.mobileNumberRaw}`}
          className="group relative flex items-center justify-center w-12 h-12 bg-[#262420] hover:bg-[#D4AF70] text-[#D4AF70] hover:text-[#0B0B0B] border border-[#D4AF70]/40 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#D4AF70]"
          aria-label="Call Nitin Girdhar Unisex Salon"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-[#141414] text-[#F7F3EC] text-xs px-2.5 py-1.5 rounded border border-[#262420] whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-md tabular-nums">
            Call: {SALON_INFO.mobileNumber}
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bar - strictly capped under 15% viewport height (~56px) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0B0B0B]/95 backdrop-blur-md border-t border-[#262420] px-3 py-2 flex items-center gap-2 shadow-2xl">
        <a
          href={`tel:${SALON_INFO.mobileNumberRaw}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#141414] border border-[#262420] text-[#F7F3EC] text-xs font-semibold rounded active:bg-[#262420] transition-colors"
          aria-label="Call salon"
        >
          <Phone className="w-3.5 h-3.5 text-[#D4AF70]" />
          <span>Call Salon</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-2.5 bg-emerald-600 text-white rounded active:bg-emerald-700 transition-colors"
          aria-label="WhatsApp"
        >
          <MessageSquare className="w-4 h-4" />
        </a>

        <button
          onClick={onOpenBooking}
          className="flex-[1.4] flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#D4AF70] text-[#0B0B0B] text-xs font-bold uppercase tracking-wider rounded active:bg-[#E8C98F] transition-colors shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Now</span>
        </button>
      </div>
    </>
  );
};
