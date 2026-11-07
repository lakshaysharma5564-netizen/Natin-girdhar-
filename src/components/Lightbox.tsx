import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
  onBookLook: (title: string) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  items,
  onClose,
  onSelect,
  onBookLook,
}) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-[#B8B8B8] hover:text-[#F7F3EC] bg-[#141414]/80 rounded-full border border-[#262420] transition-colors"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 p-2.5 text-[#F7F3EC] hover:text-[#D4AF70] bg-[#141414]/80 rounded-full border border-[#262420] hover:border-[#D4AF70]/40 transition-all"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 p-2.5 text-[#F7F3EC] hover:text-[#D4AF70] bg-[#141414]/80 rounded-full border border-[#262420] hover:border-[#D4AF70]/40 transition-all"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content Container */}
      <div className="relative max-w-4xl w-full max-h-[90vh] bg-[#141414] border border-[#262420] rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Visual Slot */}
        <div className="md:w-3/5 bg-[#0B0B0B] flex items-center justify-center relative min-h-[300px] md:min-h-[480px]">
          <img
            src={item.image}
            alt={item.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover max-h-[60vh] md:max-h-[75vh]"
          />
        </div>

        {/* Info & Action Slot */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-[#141414] border-t md:border-t-0 md:border-l border-[#262420]">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#D4AF70] font-medium tracking-wider uppercase mb-2">
              <span>{item.category}</span>
              <span aria-hidden="true">·</span>
              <span>Editorial Portfolio</span>
            </div>
            <h3 className="font-serif text-2xl font-semibold text-[#F7F3EC] leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-[#B8B8B8] mt-3 leading-relaxed">
              {item.description}
            </p>
          </div>

          <div className="pt-6 mt-6 border-t border-[#262420] space-y-3">
            <button
              onClick={() => {
                onClose();
                onBookLook(item.title);
              }}
              className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#0B0B0B] bg-[#D4AF70] hover:bg-[#E8C98F] transition-all rounded shadow flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book This Transformation
            </button>
            <div className="text-[11px] text-[#B8B8B8] text-center">
              Item {currentIndex + 1} of {items.length} · Nitin Girdhar Unisex Salon
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
