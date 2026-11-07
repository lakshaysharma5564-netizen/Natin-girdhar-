import React from 'react';
import { PageRoute, GalleryItem } from '../types';
import {
  SALON_INFO,
  SALON_IMAGES,
  SERVICE_CATEGORIES,
  WHY_CHOOSE_US,
  GALLERY_ITEMS,
} from '../data/salonData';
import {
  Calendar,
  ArrowRight,
  Star,
  MapPin,
  Clock,
  Sparkles,
  Scissors,
  CheckCircle2,
  ExternalLink,
  Phone,
} from 'lucide-react';

interface HomeViewProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenBooking: (serviceName?: string) => void;
  onOpenLightbox: (item: GalleryItem) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onRouteChange,
  onOpenBooking,
  onOpenLightbox,
}) => {
  return (
    <div className="min-h-screen">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image with Luxury Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={SALON_IMAGES.hero}
            alt="Nitin Girdhar Unisex Salon Luxury Interior Shakti Nagar Delhi"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Measured multi-layer gradient scrim for high legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/75 to-[#0B0B0B]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#0B0B0B_95%)]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16 sm:py-24">
          {/* Subtle Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141414]/70 border border-[#D4AF70]/30 text-xs sm:text-sm text-[#D4AF70] mb-6 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF70]" />
            <span className="tracking-[0.2em] uppercase font-semibold text-[11px] sm:text-xs">
              {SALON_INFO.tagline}
            </span>
          </div>

          {/* Primary Editorial Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F7F3EC] tracking-tight leading-[1.12] mb-6 drop-shadow-md">
            {SALON_INFO.heroHeadline}
          </h1>

          {/* Supporting Text */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#B8B8B8] font-light leading-relaxed mb-10">
            {SALON_INFO.heroDescription}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0B0B0B] bg-[#D4AF70] hover:bg-[#E8C98F] transition-all rounded shadow-xl hover:shadow-[#D4AF70]/25 flex items-center justify-center gap-2 group"
            >
              <Calendar className="w-4 h-4 text-[#0B0B0B]" />
              <span>Book Your Appointment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                onRouteChange('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F7F3EC] hover:text-[#D4AF70] bg-[#141414]/80 hover:bg-[#262420] border border-[#262420] hover:border-[#D4AF70]/50 transition-all rounded backdrop-blur-sm"
            >
              Explore Our Services
            </button>
          </div>

          {/* Trust Strip below CTA */}
          <div className="mt-14 pt-8 border-t border-[#262420]/80 grid grid-cols-2 sm:grid-cols-3 gap-6 text-left max-w-3xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#141414] border border-[#262420] flex items-center justify-center shrink-0 text-amber-400">
                <Star className="w-5 h-5 fill-amber-400" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-base font-bold text-[#F7F3EC] tabular-nums">
                    {SALON_INFO.rating}
                  </span>
                  <span className="text-xs text-[#D4AF70]">★★★★★</span>
                </div>
                <p className="text-xs text-[#B8B8B8]">{SALON_INFO.reviewCount} Google Reviews</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#141414] border border-[#262420] flex items-center justify-center shrink-0 text-[#D4AF70]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#F7F3EC]">Shakti Nagar</p>
                <p className="text-xs text-[#B8B8B8]">Nangia Park Chowk, Delhi</p>
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#141414] border border-[#262420] flex items-center justify-center shrink-0 text-[#D4AF70]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#F7F3EC]">10:00 AM – 9:00 PM</p>
                <p className="text-xs text-[#B8B8B8]">Open Every Day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: BRAND INTRODUCTION */}
      <section className="py-20 bg-[#0B0B0B] border-b border-[#262420]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#262420] shadow-2xl group">
                <img
                  src={SALON_IMAGES.bridal}
                  alt="Nitin Girdhar Salon Bridal Artistry Delhi"
                  referrerPolicy="no-referrer"
                  className="w-full h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF70] block">
                    Excellence in Styling
                  </span>
                  <p className="font-serif text-xl font-semibold text-[#F7F3EC] mt-1">
                    Complete Beauty Destination for Men & Women
                  </p>
                </div>
              </div>

              {/* Decorative Accent Card */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 bg-[#141414] border border-[#262420] p-5 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center gap-3">
                  <Scissors className="w-6 h-6 text-[#D4AF70]" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#B8B8B8]">Bespoke Craft</p>
                    <p className="text-sm font-semibold text-[#F7F3EC]">Personalized Consultation</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Editorial Narrative Column */}
            <div className="lg:col-span-7 space-y-6 lg:pl-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF70]">
                  Delhi's Premier Unisex Sanctuary
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F3EC] leading-tight">
                  Crafting Timeless Transformations with Individual Care
                </h2>
              </div>

              <p className="text-base sm:text-lg text-[#B8B8B8] font-light leading-relaxed">
                Nestled at the bustling junction of Nangia Park Chowk in Shakti Nagar,{' '}
                <strong className="text-[#F7F3EC] font-medium">Nitin Girdhar Unisex Salon</strong>{' '}
                was established to redefine the salon experience. We believe personal beauty and
                grooming is an art form—never a hurried assembly line.
              </p>

              <p className="text-sm sm:text-base text-[#B8B8B8] leading-relaxed">
                Whether you seek dimensional caramel balayage, regal HD bridal makeup that withstands
                the summer heat, clinical facial rejuvenation, or sharp traditional razor barbering,
                our master team blends meticulous technique with luxury international products.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF70] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#F7F3EC]">Zero-Compromise Hygiene</h3>
                    <p className="text-xs text-[#B8B8B8] mt-0.5">
                      Sterilized tools, single-use linens, and hospital-grade salon sanitization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D4AF70] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#F7F3EC]">Master Artistry Team</h3>
                    <p className="text-xs text-[#B8B8B8] mt-0.5">
                      Expert colorists, bridal makeup specialists, and precision barbering artists.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex items-center gap-6">
                <button
                  onClick={() => {
                    onRouteChange('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#D4AF70] hover:text-[#E8C98F] inline-flex items-center gap-2 group transition-colors"
                >
                  <span>Read Our Philosophy & Story</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SIGNATURE SERVICES */}
      <section className="py-24 bg-[#141414]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF70]">
                Artistry & Excellence
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F3EC] mt-2">
                Signature Service Categories
              </h2>
              <p className="text-sm sm:text-base text-[#B8B8B8] mt-3">
                Six specialized departments delivering world-class hair, beauty, and grooming
                transformations under one refined roof.
              </p>
            </div>

            <button
              onClick={() => {
                onRouteChange('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs uppercase tracking-wider font-semibold text-[#D4AF70] hover:text-[#E8C98F] inline-flex items-center gap-1.5 self-start md:self-auto shrink-0 transition-colors"
            >
              <span>View All 40+ Services</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* 6 Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_CATEGORIES.map((category, index) => (
              <div
                key={category.id}
                className="group bg-[#0B0B0B] border border-[#262420] rounded-xl overflow-hidden hover:border-[#D4AF70]/40 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Category Image */}
                  <div className="relative h-60 overflow-hidden bg-[#141414]">
                    <img
                      src={category.image}
                      alt={category.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-widest text-[#F7F3EC] bg-[#0B0B0B]/80 px-2.5 py-1 rounded backdrop-blur-sm border border-[#262420]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="font-serif text-2xl font-semibold text-[#F7F3EC] group-hover:text-[#D4AF70] transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-xs text-[#D4AF70] mt-1 font-medium tracking-wide">
                      {category.subtitle}
                    </p>
                    <p className="text-sm text-[#B8B8B8] mt-3 leading-relaxed line-clamp-3">
                      {category.description}
                    </p>

                    {/* Featured items snippet */}
                    <div className="mt-4 pt-4 border-t border-[#262420] space-y-1.5">
                      {category.items.slice(0, 3).map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between text-xs text-[#B8B8B8]"
                        >
                          <span className="truncate pr-2">• {item.name}</span>
                          <span className="text-[11px] text-[#737373] shrink-0">
                            {item.priceNote}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 flex items-center gap-3">
                  <button
                    onClick={() => {
                      onRouteChange('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex-1 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F7F3EC] hover:text-[#D4AF70] bg-[#141414] hover:bg-[#262420] border border-[#262420] rounded transition-colors text-center"
                  >
                    Explore
                  </button>
                  <button
                    onClick={() => onOpenBooking(category.title)}
                    className="flex-1 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B0B0B] bg-[#D4AF70] hover:bg-[#E8C98F] rounded transition-colors text-center shadow"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US */}
      <section className="py-24 bg-[#0B0B0B] border-b border-[#262420]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF70]">
              The Nitin Girdhar Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F3EC] mt-2">
              Why Discerning Clients Choose Us
            </h2>
            <p className="text-sm sm:text-base text-[#B8B8B8] mt-3">
              Founded on principles of artistic precision, individual consultation, and transparent
              integrity in Shakti Nagar, Delhi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((pillar) => (
              <div
                key={pillar.number}
                className="p-8 bg-[#141414] border border-[#262420] rounded-xl hover:border-[#D4AF70]/40 transition-colors relative"
              >
                <span className="text-3xl font-serif font-bold text-[#D4AF70]/50 block mb-4">
                  {pillar.number}.
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#F7F3EC] mb-2.5">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#B8B8B8] leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: GOOGLE REVIEWS & PUBLIC TRUST */}
      <section className="py-24 bg-[#141414] border-b border-[#262420]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF70]">
                Public Reputation & Trust
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F3EC] mt-2">
                Verified Google Reviews
              </h2>
              <p className="text-sm sm:text-base text-[#B8B8B8] mt-2">
                Real feedback from hundreds of clients across North Delhi and NCR.
              </p>
            </div>

            {/* Google Rating Badge */}
            <div className="flex items-center gap-4 bg-[#0B0B0B] border border-[#262420] p-4 rounded-xl">
              <div className="text-left">
                <div className="flex items-center gap-1.5 text-amber-400">
                  <Star className="w-5 h-5 fill-amber-400" />
                  <span className="text-2xl font-serif font-bold text-[#F7F3EC] tabular-nums">
                    {SALON_INFO.rating}
                  </span>
                  <span className="text-xs text-[#B8B8B8]">/ 5.0</span>
                </div>
                <p className="text-xs text-[#B8B8B8] mt-0.5">
                  Based on <strong className="text-[#F7F3EC]">{SALON_INFO.reviewCount}</strong> authentic
                  Google reviews
                </p>
              </div>

              <a
                href={SALON_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#141414] hover:bg-[#262420] text-xs font-medium text-[#D4AF70] border border-[#262420] rounded inline-flex items-center gap-1.5 transition-colors whitespace-nowrap"
              >
                <span>View All Reviews</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Testimonials Highlights (Transparent & Authentic) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 bg-[#0B0B0B] border border-[#262420] rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center text-amber-400 mb-3 text-xs">★★★★★</div>
                <p className="text-sm text-[#F7F3EC] leading-relaxed italic">
                  "I got my hair coloured and balayage done here at Shakti Nagar. The colorist took
                  time to understand exactly what shade suits my complexion. The result was
                  phenomenal with zero hair damage!"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#262420] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#F7F3EC]">Aakriti Verma</span>
                <span className="text-[#737373]">Google Verified Review</span>
              </div>
            </div>

            <div className="p-7 bg-[#0B0B0B] border border-[#262420] rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center text-amber-400 mb-3 text-xs">★★★★★</div>
                <p className="text-sm text-[#F7F3EC] leading-relaxed italic">
                  "Booked my sister's bridal and my engagement makeup with Nitin Girdhar Salon. The HD
                  makeup stayed radiant all night through dancing and rituals. Very courteous and
                  punctual staff!"
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#262420] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#F7F3EC]">Rohan Malhotra</span>
                <span className="text-[#737373]">Google Verified Review</span>
              </div>
            </div>

            <div className="p-7 bg-[#0B0B0B] border border-[#262420] rounded-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center text-amber-400 mb-3 text-xs">★★★★★</div>
                <p className="text-sm text-[#F7F3EC] leading-relaxed italic">
                  "A truly top-tier unisex salon in Nangia Park Chowk. Great haircut, beard trimming
                  with hot towel treatment, and relaxing facial. Very hygienic and premium ambience
                  for men's grooming."
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#262420] flex items-center justify-between text-xs">
                <span className="font-semibold text-[#F7F3EC]">Devendra Singhania</span>
                <span className="text-[#737373]">Google Verified Review</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: GALLERY PREVIEW */}
      <section className="py-24 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF70]">
                Visual Artistry
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F3EC] mt-2">
                Portfolio & Transformations
              </h2>
              <p className="text-sm sm:text-base text-[#B8B8B8] mt-2">
                A glimpse of our bridal artistry, hair colour palettes, skin rituals, and salon
                ambience.
              </p>
            </div>

            <button
              onClick={() => {
                onRouteChange('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs uppercase tracking-wider font-semibold text-[#D4AF70] hover:text-[#E8C98F] inline-flex items-center gap-1.5 self-start md:self-auto shrink-0 transition-colors"
            >
              <span>Explore Complete Gallery</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Grid Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {GALLERY_ITEMS.slice(0, 4).map((item) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(item)}
                className="group relative h-72 rounded-xl overflow-hidden cursor-pointer border border-[#262420] bg-[#141414]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-[#D4AF70]">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-base font-semibold text-[#F7F3EC] mt-0.5 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#B8B8B8] mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FINAL CALL TO ACTION */}
      <section className="relative py-24 bg-gradient-to-b from-[#141414] to-[#0B0B0B] border-t border-[#262420]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF70]">
            Your Journey to Radiance
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#F7F3EC] leading-tight">
            Your Next Transformation Starts Here.
          </h2>
          <p className="text-base sm:text-lg text-[#B8B8B8] max-w-2xl mx-auto font-light leading-relaxed">
            Experience the pinnacle of hair styling, bridal makeup, skincare, and bespoke grooming at
            Nangia Park Chowk, Shakti Nagar, Delhi.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-9 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#0B0B0B] bg-[#D4AF70] hover:bg-[#E8C98F] transition-all rounded shadow-xl flex items-center justify-center gap-2 group"
            >
              <Calendar className="w-4 h-4 text-[#0B0B0B]" />
              <span>Book Your Appointment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={`tel:${SALON_INFO.mobileNumberRaw}`}
              className="w-full sm:w-auto px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#F7F3EC] bg-[#141414] hover:bg-[#262420] border border-[#262420] rounded flex items-center justify-center gap-2 transition-colors tabular-nums"
            >
              <Phone className="w-4 h-4 text-[#D4AF70]" />
              <span>Direct Call: {SALON_INFO.mobileNumber}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
