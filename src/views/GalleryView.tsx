import React, { useState, useMemo } from 'react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types';
import { Eye, Sparkles } from 'lucide-react';

interface GalleryViewProps {
  onOpenLightbox: (item: GalleryItem) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const GalleryView: React.FC<GalleryViewProps> = ({ onOpenLightbox, onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterTabs = [
    'All',
    'Bridal',
    'Makeup',
    'Hair',
    'Hair Colour',
    'Skin',
    'Nails',
    'Grooming',
  ];

  const filteredItems = useMemo(() => {
    if (activeFilter === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="pt-24 pb-24 bg-[#0B0B0B] min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 border-b border-[#262420]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF70] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Craftsmanship & Artistry</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#F7F3EC] leading-tight">
            Artistry Portfolio & Transformations
          </h1>
          <p className="text-sm sm:text-base text-[#B8B8B8] mt-3 leading-relaxed">
            A visual documentation of bridal transformations, editorial hair colouring, bespoke men’s grooming, and our luxury salon aesthetics at Shakti Nagar, Delhi.
          </p>
        </div>

        {/* Filter Tabs (Functional segmented controls) */}
        <div className="mt-10 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {filterTabs.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === filter
                  ? 'bg-[#D4AF70] text-[#0B0B0B] font-semibold shadow-sm'
                  : 'bg-[#141414] text-[#B8B8B8] hover:text-[#F7F3EC] border border-[#262420]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenLightbox(item)}
              className="group relative bg-[#141414] border border-[#262420] rounded-xl overflow-hidden cursor-pointer hover:border-[#D4AF70]/40 transition-all duration-300 shadow-md"
            >
              {/* Image Container with Fallback Support */}
              <div className="relative h-72 w-full overflow-hidden bg-[#0B0B0B]">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#141414]/90 border border-[#D4AF70]/50 text-[#D4AF70] flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-[#D4AF70] font-medium uppercase tracking-wider mb-1">
                  <span>{item.category}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-[#F7F3EC] group-hover:text-[#D4AF70] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-[#B8B8B8] mt-1.5 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Booking Action */}
        <div className="mt-16 text-center p-8 bg-[#141414] border border-[#262420] rounded-2xl max-w-2xl mx-auto space-y-4">
          <h3 className="font-serif text-2xl font-bold text-[#F7F3EC]">
            Inspired by One of Our Looks?
          </h3>
          <p className="text-sm text-[#B8B8B8] max-w-md mx-auto">
            Book an appointment or in-depth diagnostic consultation with our master stylists today.
          </p>
          <button
            onClick={() => onOpenBooking()}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0B0B0B] bg-[#D4AF70] hover:bg-[#E8C98F] rounded transition-all shadow-md"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
