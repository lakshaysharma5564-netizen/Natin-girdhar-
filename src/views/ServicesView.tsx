import React, { useState, useMemo } from 'react';
import { SERVICE_CATEGORIES } from '../data/salonData';
import { Search, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { ServiceCategory } from '../types';

interface ServicesViewProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenBooking }) => {
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { key: 'all', label: 'All Services' },
    { key: 'hair', label: 'Hair Services' },
    { key: 'makeup', label: 'Makeup Artistry' },
    { key: 'skin', label: 'Skin Care & Facials' },
    { key: 'nails', label: 'Nails & Extensions' },
    { key: 'grooming', label: "Men's Grooming" },
    { key: 'pre-bridal', label: 'Pre-Bridal Packages' },
  ];

  const filteredCategories = useMemo(() => {
    return SERVICE_CATEGORIES.map((category: ServiceCategory) => {
      // Category tab filter
      if (selectedCategoryKey !== 'all' && category.key !== selectedCategoryKey) {
        return null;
      }

      // Search query filter
      const matchingItems = category.items.filter((item) => {
        const query = searchQuery.toLowerCase().trim();
        if (!query) return true;
        return (
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          category.title.toLowerCase().includes(query)
        );
      });

      if (matchingItems.length === 0) return null;

      return {
        ...category,
        items: matchingItems,
      };
    }).filter(Boolean) as ServiceCategory[];
  }, [selectedCategoryKey, searchQuery]);

  return (
    <div className="pt-24 pb-24 bg-[#0B0B0B] min-h-screen">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 border-b border-[#262420]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF70] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Treatment Catalogue</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#F7F3EC] leading-tight">
            Our Services & Beauty Experiences
          </h1>
          <p className="text-sm sm:text-base text-[#B8B8B8] mt-3 leading-relaxed">
            From editorial hair transformations to clinical dermatology-inspired skin rituals and royal bridal makeup. Every treatment is preceded by a personalized diagnostic consultation.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="mt-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Functional Segmented Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setSelectedCategoryKey(tab.key)}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategoryKey === tab.key
                    ? 'bg-[#D4AF70] text-[#0B0B0B] font-semibold shadow-sm'
                    : 'bg-[#141414] text-[#B8B8B8] hover:text-[#F7F3EC] border border-[#262420]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-[#B8B8B8] absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              placeholder="Search services (e.g. balayage, acne)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#141414] border border-[#262420] focus:border-[#D4AF70] text-[#F7F3EC] placeholder-[#737373] rounded-lg py-2 pl-9 pr-3 text-xs focus:outline-none focus:ring-1 focus:ring-[#D4AF70] transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Services Catalogue Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {filteredCategories.length === 0 ? (
          <div className="text-center py-20 bg-[#141414] border border-[#262420] rounded-xl p-8 max-w-lg mx-auto">
            <p className="text-base text-[#F7F3EC] font-medium">No matching services found</p>
            <p className="text-xs text-[#B8B8B8] mt-1.5">
              Try adjusting your search terms or switch to 'All Services'.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategoryKey('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0B0B0B] bg-[#D4AF70] rounded"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredCategories.map((cat) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-28">
                {/* Category Header Strip */}
                <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#262420] pb-4 mb-8 gap-3">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF70]">
                      Department
                    </span>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F3EC] mt-0.5">
                      {cat.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-[#B8B8B8] mt-1">{cat.subtitle}</p>
                  </div>
                  <span className="text-xs text-[#737373] self-start md:self-auto">
                    {cat.items.length} {cat.items.length === 1 ? 'Treatment' : 'Treatments'} Available
                  </span>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cat.items.map((item) => (
                    <div
                      key={item.id}
                      className="p-6 bg-[#141414] border border-[#262420] rounded-xl hover:border-[#D4AF70]/40 transition-colors flex flex-col justify-between group shadow-sm"
                    >
                      <div>
                        {/* Top unboxed metadata */}
                        <div className="flex items-center justify-between text-xs text-[#B8B8B8] mb-2">
                          <span className="text-[#D4AF70] font-medium text-[11px] uppercase tracking-wider">
                            {item.category}
                          </span>
                          {item.duration && (
                            <span className="flex items-center gap-1 text-[11px] text-[#737373]">
                              <Clock className="w-3 h-3 text-[#D4AF70]" />
                              <span>{item.duration}</span>
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="font-serif text-lg font-semibold text-[#F7F3EC] group-hover:text-[#D4AF70] transition-colors">
                          {item.name}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-[#B8B8B8] mt-2.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Bottom Pricing & Action */}
                      <div className="mt-6 pt-4 border-t border-[#262420] flex items-center justify-between gap-3">
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-[#737373] block">
                            Pricing
                          </span>
                          <span className="text-xs font-medium text-[#F7F3EC]">
                            {item.priceNote || 'Contact for Pricing'}
                          </span>
                        </div>

                        <button
                          onClick={() => onOpenBooking(`${cat.title} - ${item.name}`)}
                          className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0B0B0B] bg-[#D4AF70] hover:bg-[#E8C98F] rounded transition-all flex items-center gap-1 shadow-sm shrink-0"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Book</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pricing Transparency Note Banner */}
        <div className="mt-20 p-6 sm:p-8 bg-[#141414] border border-[#262420] rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif text-lg font-semibold text-[#F7F3EC]">
              Transparent Pricing & Custom Consultation
            </h4>
            <p className="text-xs sm:text-sm text-[#B8B8B8]">
              Because chemical treatments, hair length, density, and skin conditions vary, prices are quoted after in-person evaluation.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking()}
            className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0B0B0B] bg-[#D4AF70] hover:bg-[#E8C98F] rounded transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
          >
            <span>Request In-Person Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
