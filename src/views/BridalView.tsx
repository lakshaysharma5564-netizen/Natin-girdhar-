import React, { useState } from 'react';
import { BRIDAL_LOOKS, SALON_IMAGES, SALON_INFO } from '../data/salonData';
import { BridalEnquiryData } from '../types';
import {
  Calendar,
  Sparkles,
  CheckCircle,
  MessageSquare,
  Phone,
  Crown,
  Heart,
  MapPin,
} from 'lucide-react';

interface BridalViewProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const BridalView: React.FC<BridalViewProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState<BridalEnquiryData>({
    fullName: '',
    phoneNumber: '',
    eventDate: '',
    eventType: 'Wedding Day Bridal',
    makeupPreference: 'HD Bridal Makeup',
    additionalRequirements: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name';
    const cleanPhone = formData.phoneNumber.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phoneNumber = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.eventDate) errs.eventDate = 'Please select your event date';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const ref = 'BRIDE-' + Math.floor(1000 + Math.random() * 9000);
    setBookingRef(ref);
    setIsSubmitted(true);
  };

  const getWhatsAppBridalUrl = () => {
    const message = `Hello Nitin Girdhar Unisex Salon, I'd like to enquire about Bridal Packages:
• Ref: ${bookingRef}
• Name: ${formData.fullName}
• Phone: ${formData.phoneNumber}
• Event Date: ${formData.eventDate}
• Event Type: ${formData.eventType}
• Makeup Preference: ${formData.makeupPreference}
${formData.additionalRequirements ? `• Details: ${formData.additionalRequirements}` : ''}

Please share package availability and consultation slots.`;
    return `https://wa.me/${SALON_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
      message
    )}`;
  };

  return (
    <div className="pt-20 bg-[#0B0B0B] min-h-screen">
      {/* SECTION 1: BRIDAL HERO */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={SALON_IMAGES.bridal}
            alt="Royal Bridal Makeup Nitin Girdhar Salon Delhi"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/70 to-[#0B0B0B]/40" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141414]/80 border border-[#D4AF70]/30 text-xs text-[#D4AF70] mb-4 backdrop-blur-sm">
            <Crown className="w-3.5 h-3.5 text-[#D4AF70]" />
            <span className="tracking-[0.2em] uppercase font-semibold text-[11px]">
              Haute Bridal Artistry & Pre-Wedding Rituals
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-[#F7F3EC] leading-tight">
            Your Wedding. Your Moment. Your Signature Look.
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#B8B8B8] font-light mt-5 leading-relaxed">
            From regal heritage Indian wedding looks to contemporary airbrush radiance, we craft flawless, camera-ready bridal makeup tailored to your wedding outfits, lighting, and personality.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#bridal-enquiry"
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0B0B0B] bg-[#D4AF70] hover:bg-[#E8C98F] rounded transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4" />
              <span>Enquire About Bridal Packages</span>
            </a>
            <button
              onClick={() => onOpenBooking('Bridal Consultation')}
              className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F7F3EC] bg-[#141414]/90 hover:bg-[#262420] border border-[#262420] rounded transition-all"
            >
              Book In-Person Trial
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2: BRIDAL SPECIALTIES GRID */}
      <section className="py-20 bg-[#141414] border-b border-[#262420]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF70]">
              Complete Wedding Spectrum
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F7F3EC] mt-2">
              Curated Wedding Looks & Artistry
            </h2>
            <p className="text-sm sm:text-base text-[#B8B8B8] mt-3">
              Explore our signature aesthetic across each unique ceremony milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BRIDAL_LOOKS.map((look) => (
              <div
                key={look.id}
                className="bg-[#0B0B0B] border border-[#262420] rounded-xl overflow-hidden hover:border-[#D4AF70]/40 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-[#141414]">
                    <img
                      src={look.image}
                      alt={look.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-wider text-[#D4AF70] bg-[#0B0B0B]/80 px-2.5 py-1 rounded border border-[#262420]">
                      {look.type}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-[#F7F3EC] group-hover:text-[#D4AF70] transition-colors">
                      {look.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#B8B8B8] mt-2.5 leading-relaxed">
                      {look.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#262420] space-y-1.5">
                      {look.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-[#B8B8B8]">
                          <Sparkles className="w-3 h-3 text-[#D4AF70] shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenBooking(`Bridal Look - ${look.title}`)}
                    className="w-full py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B0B0B] bg-[#D4AF70] hover:bg-[#E8C98F] rounded transition-colors text-center"
                  >
                    Select Look for Consultation
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: VENUE MAKEUP NOTICE */}
      <section className="py-12 bg-[#0B0B0B] border-b border-[#262420]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 bg-[#141414] border border-[#262420] rounded-xl flex items-start gap-4">
            <MapPin className="w-6 h-6 text-[#D4AF70] shrink-0 mt-1" />
            <div>
              <h3 className="font-serif text-lg font-semibold text-[#F7F3EC]">
                On-Location & Venue Makeup Services
              </h3>
              <p className="text-xs sm:text-sm text-[#B8B8B8] mt-1.5 leading-relaxed">
                While our flagship salon is at Nangia Park Chowk, Shakti Nagar, our senior bridal team is available for venue-based makeup setups across Delhi NCR, banquet halls, and destination wedding venues upon advance inquiry. Travel arrangements and team requirements are customized for your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: BRIDAL ENQUIRY FORM */}
      <section id="bridal-enquiry" className="py-20 bg-[#0B0B0B]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF70]">
              Exclusive Wedding Concierge
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F3EC] mt-2">
              Enquire About Bridal Packages
            </h2>
            <p className="text-xs sm:text-sm text-[#B8B8B8] mt-2">
              Share your event dates and vision. Our senior bridal consultant will personally connect with you to tailor your package.
            </p>
          </div>

          <div className="bg-[#141414] border border-[#262420] rounded-2xl p-6 sm:p-10 shadow-2xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-[#F7F3EC] mb-1.5">
                      Full Name <span className="text-[#D4AF70]">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: '' });
                      }}
                      placeholder="Bride or Groom name"
                      className="w-full bg-[#0B0B0B] border border-[#262420] focus:border-[#D4AF70] text-[#F7F3EC] rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF70]"
                    />
                    {errors.fullName && (
                      <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-medium text-[#F7F3EC] mb-1.5">
                      Mobile Number <span className="text-[#D4AF70]">*</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) => {
                        setFormData({ ...formData, phoneNumber: e.target.value });
                        if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                      }}
                      placeholder="10-digit phone number"
                      className="w-full bg-[#0B0B0B] border border-[#262420] focus:border-[#D4AF70] text-[#F7F3EC] rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF70] tabular-nums"
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-400 text-xs mt-1">{errors.phoneNumber}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Event Date */}
                  <div>
                    <label className="block text-xs font-medium text-[#F7F3EC] mb-1.5">
                      Event Date <span className="text-[#D4AF70]">*</span>
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.eventDate}
                      onChange={(e) => {
                        setFormData({ ...formData, eventDate: e.target.value });
                        if (errors.eventDate) setErrors({ ...errors, eventDate: '' });
                      }}
                      className="w-full bg-[#0B0B0B] border border-[#262420] focus:border-[#D4AF70] text-[#F7F3EC] rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF70]"
                    />
                    {errors.eventDate && (
                      <p className="text-red-400 text-xs mt-1">{errors.eventDate}</p>
                    )}
                  </div>

                  {/* Event Type */}
                  <div>
                    <label className="block text-xs font-medium text-[#F7F3EC] mb-1.5">
                      Event Type
                    </label>
                    <select
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full bg-[#0B0B0B] border border-[#262420] focus:border-[#D4AF70] text-[#F7F3EC] rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF70]"
                    >
                      <option value="Wedding Day Bridal">Wedding Day Bridal</option>
                      <option value="Engagement & Roka">Engagement & Roka Ceremony</option>
                      <option value="Reception Makeup">Reception / Cocktail Night</option>
                      <option value="Haldi & Mehendi">Haldi & Mehendi Look</option>
                      <option value="Groom Makeup & Styling">Groom Makeup & Styling</option>
                      <option value="Complete Multi-Day Bridal Package">
                        Complete Multi-Day Wedding Package
                      </option>
                    </select>
                  </div>
                </div>

                {/* Makeup Preference */}
                <div>
                  <label className="block text-xs font-medium text-[#F7F3EC] mb-1.5">
                    Makeup Preference
                  </label>
                  <select
                    value={formData.makeupPreference}
                    onChange={(e) =>
                      setFormData({ ...formData, makeupPreference: e.target.value })
                    }
                    className="w-full bg-[#0B0B0B] border border-[#262420] focus:border-[#D4AF70] text-[#F7F3EC] rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF70]"
                  >
                    <option value="HD Bridal Makeup">HD Bridal Makeup (Recommended)</option>
                    <option value="Airbrush Makeup">Ultra Airbrush Makeup (Long-Wear Sweatproof)</option>
                    <option value="Traditional Royal Bridal">Traditional Royal Bridal with Heavy Draping</option>
                    <option value="Soft Glam & Glass Skin">Soft Glam & Glass Skin</option>
                    <option value="Unsure / Need Expert Suggestion">
                      Unsure / Request Recommendation During Consultation
                    </option>
                  </select>
                </div>

                {/* Additional Requirements */}
                <div>
                  <label className="block text-xs font-medium text-[#F7F3EC] mb-1.5">
                    Additional Requirements (Venue Location, Family Members count, Hair Extension needs)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.additionalRequirements}
                    onChange={(e) =>
                      setFormData({ ...formData, additionalRequirements: e.target.value })
                    }
                    placeholder="e.g. Venue in Civil Lines, need 2 bridesmaid makeups + groom styling, dupatta setting required..."
                    className="w-full bg-[#0B0B0B] border border-[#262420] focus:border-[#D4AF70] text-[#F7F3EC] rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF70] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0B0B0B] bg-[#D4AF70] hover:bg-[#E8C98F] transition-all rounded shadow-lg flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Submit Bridal Package Enquiry</span>
                </button>
              </form>
            ) : (
              /* Success Confirmation */
              <div className="py-6 text-center space-y-5 animate-in zoom-in-95 duration-200">
                <div className="w-14 h-14 bg-[#D4AF70]/10 border border-[#D4AF70]/40 rounded-full flex items-center justify-center mx-auto text-[#D4AF70]">
                  <CheckCircle className="w-7 h-7" />
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D4AF70] font-semibold">
                    Enquiry Logged · Ref: {bookingRef}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-[#F7F3EC] mt-1">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-sm text-[#B8B8B8] mt-2 max-w-md mx-auto">
                    We have noted your wedding enquiry for{' '}
                    <strong className="text-[#F7F3EC]">{formData.eventType}</strong> on{' '}
                    <strong className="text-[#F7F3EC]">{formData.eventDate}</strong>.
                  </p>
                </div>

                <div className="bg-[#0B0B0B] border border-[#262420] p-4 rounded-lg text-xs text-[#B8B8B8] max-w-md mx-auto text-left space-y-1.5">
                  <p className="text-[#F7F3EC] font-medium">Bridal Concierge Protocol:</p>
                  <p>• Our senior bridal makeup coordinator will review dates and call you directly.</p>
                  <p>• You can also immediately connect with our bridal desk via WhatsApp or phone:</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-2">
                  <a
                    href={getWhatsAppBridalUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs uppercase tracking-wider transition-colors shadow"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Bridal Desk</span>
                  </a>
                  <a
                    href={`tel:${SALON_INFO.contactNumberRaw}`}
                    className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#262420] text-[#F7F3EC] hover:text-[#D4AF70] font-medium text-xs uppercase tracking-wider transition-colors border border-[#D4AF70]/30"
                  >
                    <Phone className="w-4 h-4 text-[#D4AF70]" />
                    <span>Call: {SALON_INFO.contactNumber}</span>
                  </a>
                </div>

                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-[#B8B8B8] hover:text-[#F7F3EC] underline underline-offset-4 pt-2 block mx-auto"
                >
                  Submit Another Enquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
