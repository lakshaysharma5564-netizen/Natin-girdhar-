import React from 'react';
import { SALON_INFO, SALON_IMAGES } from '../data/salonData';
import { Sparkles, ShieldCheck, HeartHandshake, Scissors, MapPin, Calendar, Clock, Star } from 'lucide-react';

interface AboutViewProps {
  onOpenBooking: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-24 pb-24 bg-[#0B0B0B] min-h-screen">
      {/* Editorial Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 border-b border-[#262420]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF70] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Artistry · Integrity · Heritage</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#F7F3EC] leading-tight">
            About Nitin Girdhar Unisex Salon
          </h1>
          <p className="text-base sm:text-lg text-[#B8B8B8] mt-4 leading-relaxed font-light">
            Founded with a vision to deliver uncompromising beauty, hair styling, skin wellness, and grooming in Shakti Nagar, Delhi. Where every client experience is tailored to their unique signature look.
          </p>
        </div>
      </div>

      {/* Brand Story & Philosophy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF70]">
              Our Story & Ethos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F3EC]">
              Where Beauty Meets Artistry in Shakti Nagar
            </h2>
            <p className="text-sm sm:text-base text-[#B8B8B8] leading-relaxed">
              Situated prominently at 30/9 Nangia Park Chowk, Block 30, Shakti Nagar, <strong className="text-[#F7F3EC]">Nitin Girdhar Unisex Salon</strong> was established to provide an all-inclusive beauty sanctuary for both men and women. We recognized that true style is never generic—it is an intimate dialogue between your personal aesthetics and our technical craftsmanship.
            </p>
            <p className="text-sm sm:text-base text-[#B8B8B8] leading-relaxed">
              From contemporary high-fashion balayage and thermal hair smoothening to 4K-camera ready HD bridal makeup, botanical facials, and sharp traditional barbering, we have built a reputation on precision, hygiene, and genuine hospitality.
            </p>

            <div className="pt-2">
              <div className="flex items-center gap-4 p-4 bg-[#141414] border border-[#262420] rounded-xl">
                <Star className="w-6 h-6 fill-amber-400 text-amber-400 shrink-0" />
                <div>
                  <span className="text-sm font-semibold text-[#F7F3EC] block">
                    Publicly Verified Google Community Standing
                  </span>
                  <span className="text-xs text-[#B8B8B8]">
                    Rated ~4.5/5 across 397+ Google Business reviews from authentic clients.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#262420] shadow-2xl">
              <img
                src={SALON_IMAGES.hero}
                alt="Nitin Girdhar Unisex Salon Luxury Interior"
                referrerPolicy="no-referrer"
                className="w-full h-[460px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs uppercase tracking-widest text-[#D4AF70] font-semibold">
                  Nangia Park Chowk, Shakti Nagar
                </p>
                <p className="font-serif text-xl font-semibold text-[#F7F3EC] mt-1">
                  Pristine Architectural Salon Ambience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars of Service */}
      <div className="py-16 bg-[#141414] border-y border-[#262420]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF70]">
              The Core Pillars
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#F7F3EC] mt-1">
              Our Beauty Philosophy & Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#0B0B0B] border border-[#262420] rounded-xl space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#141414] border border-[#262420] flex items-center justify-center text-[#D4AF70]">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#F7F3EC]">
                Bespoke Diagnostic Consultations
              </h3>
              <p className="text-xs sm:text-sm text-[#B8B8B8] leading-relaxed">
                Before scissors or brushes touch your hair or skin, we analyze face shape, scalp health, skin porosity, and daily routines to recommend styles that truly flatter you.
              </p>
            </div>

            <div className="p-8 bg-[#0B0B0B] border border-[#262420] rounded-xl space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#141414] border border-[#262420] flex items-center justify-center text-[#D4AF70]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#F7F3EC]">
                Pristine Hygiene & Premium Formulations
              </h3>
              <p className="text-xs sm:text-sm text-[#B8B8B8] leading-relaxed">
                We use hospital-standard UV sterilization for all metallic instruments, disposable single-use towels, and authentic international hair and cosmetic products.
              </p>
            </div>

            <div className="p-8 bg-[#0B0B0B] border border-[#262420] rounded-xl space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#141414] border border-[#262420] flex items-center justify-center text-[#D4AF70]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#F7F3EC]">
                Genuine Client Trust & Transparent Pricing
              </h3>
              <p className="text-xs sm:text-sm text-[#B8B8B8] leading-relaxed">
                No hidden add-ons or sudden upsells. We clearly discuss recommended products and treatment timelines upfront so you are always in complete control.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Verified Salon Details & Call To Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#141414] border border-[#262420] rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF70]">
              Visit Our Shakti Nagar Salon
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F7F3EC]">
              Experience Personalized Luxury in Person
            </h3>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-[#B8B8B8] pt-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#D4AF70]" />
                {SALON_INFO.address.line1}, {SALON_INFO.address.line2}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#D4AF70]" />
                {SALON_INFO.businessHours}
              </span>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0B0B0B] bg-[#D4AF70] hover:bg-[#E8C98F] rounded transition-all shadow-md shrink-0 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book In-Person Consultation</span>
          </button>
        </div>
      </div>
    </div>
  );
};
