import React from 'react';
import { PageRoute } from '../types';
import { SALON_INFO } from '../data/salonData';
import { MapPin, Phone, Clock, ExternalLink, Calendar, Star } from 'lucide-react';

interface FooterProps {
  onRouteChange: (route: PageRoute) => void;
  onOpenBooking: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onRouteChange, onOpenBooking }) => {
  const handleNav = (route: PageRoute) => {
    onRouteChange(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0B] border-t border-[#262420] text-[#B8B8B8] pt-16 pb-24 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#262420]">
          {/* Col 1: Brand & Positioning */}
          <div className="space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold tracking-wider text-[#F7F3EC] block">
                NITIN GIRDHAR
              </span>
              <span className="text-xs tracking-[0.25em] text-[#D4AF70] uppercase font-medium">
                Unisex Salon · Delhi
              </span>
            </div>
            <p className="text-sm text-[#B8B8B8] leading-relaxed">
              Your Beauty. Your Style. Your Signature. Premier hair transformations, HD bridal
              artistry, clinical facials, and personalized grooming crafted for discerning men and
              women.
            </p>

            {/* Google Rating Verification Box */}
            <div className="pt-2">
              <a
                href={SALON_INFO.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 p-3 bg-[#141414] border border-[#262420] rounded-lg hover:border-[#D4AF70]/40 transition-colors group"
              >
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="ml-1 text-sm font-bold text-[#F7F3EC] tabular-nums">
                    {SALON_INFO.rating}
                  </span>
                </div>
                <div className="text-xs text-[#B8B8B8]">
                  <span className="text-[#F7F3EC] font-medium block">Google Business Rating</span>
                  <span>{SALON_INFO.reviewCount} Verified Client Reviews</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#B8B8B8] group-hover:text-[#D4AF70] ml-1 transition-colors" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F7F3EC] mb-4">
              Explore Salon
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#D4AF70] transition-colors"
                >
                  Home Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#D4AF70] transition-colors"
                >
                  About the Salon & Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#D4AF70] transition-colors"
                >
                  Full Service Menu & Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('bridal')}
                  className="hover:text-[#D4AF70] transition-colors"
                >
                  Bridal & Royal Wedding Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-[#D4AF70] transition-colors"
                >
                  Artistry Gallery & Transformations
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#D4AF70] transition-colors"
                >
                  Contact & Nangia Park Map
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Signature Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F7F3EC] mb-4">
              Signature Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => {
                    handleNav('services');
                  }}
                  className="hover:text-[#D4AF70] transition-colors text-left"
                >
                  Couture Balayage & Hair Colour
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('bridal')}
                  className="hover:text-[#D4AF70] transition-colors text-left"
                >
                  HD & Airbrush Bridal Makeup
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#D4AF70] transition-colors text-left"
                >
                  Keratin & Cysteine Smoothening
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#D4AF70] transition-colors text-left"
                >
                  Clinical Anti-Acne & Fruit Peels
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#D4AF70] transition-colors text-left"
                >
                  Chrome Gel Nails & Permanent Tips
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#D4AF70] transition-colors text-left"
                >
                  Men's Beard Sculpting & Barbering
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Visit & Contact (NAP) */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F7F3EC] mb-4">
              Salon Location & Hours
            </h4>

            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-[#D4AF70] shrink-0 mt-1" />
              <div>
                <p className="text-[#F7F3EC]">{SALON_INFO.address.line1}</p>
                <p>{SALON_INFO.address.line2}</p>
                <p>
                  {SALON_INFO.address.city}, {SALON_INFO.address.state} – {SALON_INFO.address.pincode}
                </p>
                <a
                  href={SALON_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#D4AF70] hover:underline mt-1 font-medium"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm pt-1">
              <Phone className="w-4 h-4 text-[#D4AF70] shrink-0 mt-1" />
              <div className="space-y-1">
                <div>
                  <a
                    href={`tel:${SALON_INFO.mobileNumberRaw}`}
                    className="text-[#F7F3EC] hover:text-[#D4AF70] transition-colors tabular-nums font-semibold block"
                  >
                    {SALON_INFO.mobileNumber}
                  </a>
                  <span className="text-[11px] text-[#B8B8B8] block">Mobile & WhatsApp</span>
                </div>
                <div>
                  <a
                    href={`tel:${SALON_INFO.contactNumberRaw}`}
                    className="text-xs text-[#B8B8B8] hover:text-[#D4AF70] transition-colors tabular-nums block"
                  >
                    {SALON_INFO.contactNumber} (Landline)
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 text-sm pt-1">
              <Clock className="w-4 h-4 text-[#D4AF70] shrink-0" />
              <div>
                <span className="text-[#F7F3EC] font-medium">{SALON_INFO.businessHours}</span>
                <span className="text-xs text-[#B8B8B8] block">Open Monday through Sunday</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#0B0B0B] bg-[#D4AF70] hover:bg-[#E8C98F] transition-all rounded flex items-center justify-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5" />
                Request Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Terms */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#737373] gap-4">
          <p>© {new Date().getFullYear()} Nitin Girdhar Unisex Salon. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span>30/9 Nangia Park Chowk, Shakti Nagar, Delhi</span>
            <span aria-hidden="true">·</span>
            <span>Unisex Hair, Skin, Bridal & Grooming</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
