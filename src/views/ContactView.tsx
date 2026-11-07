import React, { useState } from 'react';
import { SALON_INFO } from '../data/salonData';
import {
  MapPin,
  Phone,
  Clock,
  ExternalLink,
  MessageSquare,
  Calendar,
  CheckCircle,
  Globe,
  Sparkles,
} from 'lucide-react';
import { AppointmentData } from '../types';

interface ContactViewProps {
  onOpenBooking: (serviceName?: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = () => {
  const [formData, setFormData] = useState<AppointmentData>({
    fullName: '',
    phoneNumber: '',
    service: 'Hair Styling & Consultation',
    preferredDate: '',
    preferredTime: '11:00 AM',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name';
    const clean = formData.phoneNumber.replace(/\D/g, '');
    if (!clean || clean.length < 10) errs.phoneNumber = 'Enter a valid 10-digit mobile number';
    if (!formData.preferredDate) errs.preferredDate = 'Select your preferred date';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const ref = 'NGS-' + Math.floor(10000 + Math.random() * 90000);
    setRefId(ref);
    setIsSubmitted(true);
  };

  const whatsappContactUrl = `https://wa.me/${SALON_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
    `Hello Nitin Girdhar Unisex Salon, I'd like to inquire about booking an appointment (Ref: ${refId || 'Direct Enquiry'}).`
  )}`;

  return (
    <div className="pt-24 pb-24 bg-[#0B0B0B] min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 border-b border-[#262420]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF70] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect & Visit Us</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#F7F3EC] leading-tight">
            Contact & Location Details
          </h1>
          <p className="text-sm sm:text-base text-[#B8B8B8] mt-3 leading-relaxed">
            Visit our flagship salon at Nangia Park Chowk, Shakti Nagar, Delhi. Reach our concierge desk directly for appointment availability and custom bridal consultations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Salon Verification & Contact Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Salon Name & Verified Badges */}
            <div className="p-6 bg-[#141414] border border-[#262420] rounded-xl space-y-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF70]">
                  Flagship Studio
                </span>
                <h2 className="font-serif text-2xl font-bold text-[#F7F3EC] mt-1">
                  NITIN GIRDHAR UNISEX SALON
                </h2>
                <p className="text-xs text-[#B8B8B8] mt-1">
                  Complete Beauty Destination for Men & Women
                </p>
              </div>

              {/* Verified Address */}
              <div className="pt-3 border-t border-[#262420] flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#D4AF70] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F7F3EC]">
                    Verified Physical Address
                  </h3>
                  <p className="text-sm text-[#B8B8B8] mt-1 leading-relaxed">
                    {SALON_INFO.address.line1},<br />
                    {SALON_INFO.address.line2},<br />
                    {SALON_INFO.address.city}, {SALON_INFO.address.state} – {SALON_INFO.address.pincode}
                  </p>
                  <a
                    href={SALON_INFO.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#D4AF70] hover:underline font-medium mt-2"
                  >
                    <span>Get Directions via Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Verified Contact Phone */}
              <div className="pt-3 border-t border-[#262420] flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#D4AF70] shrink-0 mt-0.5" />
                <div className="space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F7F3EC]">
                    Concierge & Appointment Desk
                  </h3>
                  <div>
                    <a
                      href={`tel:${SALON_INFO.mobileNumberRaw}`}
                      className="text-base font-semibold text-[#F7F3EC] hover:text-[#D4AF70] transition-colors tabular-nums block"
                    >
                      {SALON_INFO.mobileNumber}
                    </a>
                    <span className="text-xs text-[#737373] block">
                      Direct Mobile & WhatsApp Concierge
                    </span>
                  </div>
                  <div>
                    <a
                      href={`tel:${SALON_INFO.contactNumberRaw}`}
                      className="text-sm font-medium text-[#B8B8B8] hover:text-[#D4AF70] transition-colors tabular-nums block"
                    >
                      {SALON_INFO.contactNumber}
                    </a>
                    <span className="text-xs text-[#737373] block">
                      Official verified salon landline
                    </span>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="pt-3 border-t border-[#262420] flex items-start gap-3.5">
                <Clock className="w-5 h-5 text-[#D4AF70] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F7F3EC]">
                    Operating Hours
                  </h3>
                  <p className="text-sm font-medium text-[#F7F3EC] mt-0.5">
                    {SALON_INFO.businessHours}
                  </p>
                  <span className="text-xs text-[#737373]">
                    Open Monday to Sunday for all services
                  </span>
                </div>
              </div>

              {/* Website */}
              <div className="pt-3 border-t border-[#262420] flex items-start gap-3.5">
                <Globe className="w-5 h-5 text-[#D4AF70] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#F7F3EC]">
                    Official Web Presence
                  </h3>
                  <p className="text-sm text-[#B8B8B8] mt-0.5">{SALON_INFO.website}</p>
                </div>
              </div>
            </div>

            {/* Instant Contact CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={whatsappContactUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
              <a
                href={`tel:${SALON_INFO.contactNumberRaw}`}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-[#262420] hover:bg-[#36322b] text-[#F7F3EC] border border-[#D4AF70]/30 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D4AF70]" />
                <span>Call Concierge</span>
              </a>
            </div>
          </div>

          {/* Right Column: Appointment Form & Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Direct Form */}
            <div className="bg-[#141414] border border-[#262420] rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF70]">
                  Immediate Booking Request
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#F7F3EC] mt-1">
                  Send Us an Appointment Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#B8B8B8] mt-1">
                  Our front-desk team will confirm your slot upon receiving your request.
                </p>
              </div>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#F7F3EC] mb-1.5">
                        Your Name <span className="text-[#D4AF70]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: '' });
                        }}
                        placeholder="Full name"
                        className="w-full bg-[#0B0B0B] border border-[#262420] focus:border-[#D4AF70] text-[#F7F3EC] rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF70]"
                      />
                      {errors.fullName && (
                        <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                      )}
                    </div>

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
                        placeholder="10-digit mobile"
                        className="w-full bg-[#0B0B0B] border border-[#262420] focus:border-[#D4AF70] text-[#F7F3EC] rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF70] tabular-nums"
                      />
                      {errors.phoneNumber && (
                        <p className="text-red-400 text-xs mt-1">{errors.phoneNumber}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#F7F3EC] mb-1.5">
                        Desired Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-[#0B0B0B] border border-[#262420] focus:border-[#D4AF70] text-[#F7F3EC] rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF70]"
                      >
                        <option value="Hair Styling & Cut">Haircuts & Hair Styling</option>
                        <option value="Hair Colouring & Balayage">Hair Colouring & Balayage</option>
                        <option value="Bridal & Event Makeup">Bridal & Party Makeup</option>
                        <option value="Skin & Facial Treatment">Skin Care & Clinical Facial</option>
                        <option value="Nail Art & Extensions">Nail Art & Extensions</option>
                        <option value="Men's Beard & Grooming">Men's Grooming & Shave</option>
                        <option value="Pre-Bridal Package Enquiry">Pre-Bridal Package Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#F7F3EC] mb-1.5">
                        Preferred Date <span className="text-[#D4AF70]">*</span>
                      </label>
                      <input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.preferredDate}
                        onChange={(e) => {
                          setFormData({ ...formData, preferredDate: e.target.value });
                          if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                        }}
                        className="w-full bg-[#0B0B0B] border border-[#262420] focus:border-[#D4AF70] text-[#F7F3EC] rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF70]"
                      />
                      {errors.preferredDate && (
                        <p className="text-red-400 text-xs mt-1">{errors.preferredDate}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#F7F3EC] mb-1.5">
                      Message / Special Notes
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Any specific questions, preferred stylist, or timing details..."
                      className="w-full bg-[#0B0B0B] border border-[#262420] focus:border-[#D4AF70] text-[#F7F3EC] rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF70] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0B0B0B] bg-[#D4AF70] hover:bg-[#E8C98F] transition-all rounded-lg shadow-md flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Send Appointment Enquiry</span>
                  </button>
                </form>
              ) : (
                <div className="py-6 text-center space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 bg-[#D4AF70]/10 border border-[#D4AF70]/40 rounded-full flex items-center justify-center mx-auto text-[#D4AF70]">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#D4AF70] font-semibold">
                      Ref #{refId}
                    </span>
                    <h4 className="font-serif text-xl font-bold text-[#F7F3EC] mt-1">
                      Enquiry Received, {formData.fullName}!
                    </h4>
                    <p className="text-xs text-[#B8B8B8] mt-1 max-w-sm mx-auto">
                      Our front-desk concierge will reach out to you at {formData.phoneNumber} shortly.
                    </p>
                  </div>
                  <div className="pt-2 flex justify-center gap-3">
                    <a
                      href={whatsappContactUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-emerald-600 text-white rounded text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp Confirmation</span>
                    </a>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2 bg-[#262420] text-[#F7F3EC] rounded text-xs font-medium hover:bg-[#36322b]"
                    >
                      Reset Form
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Embedded Google Maps Section */}
            <div className="bg-[#141414] border border-[#262420] rounded-2xl overflow-hidden shadow-xl">
              <div className="p-4 bg-[#141414] border-b border-[#262420] flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-[#F7F3EC] font-medium">
                  <MapPin className="w-4 h-4 text-[#D4AF70]" />
                  <span>Interactive Map: Nangia Park Chowk, Shakti Nagar</span>
                </div>
                <a
                  href={SALON_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#D4AF70] hover:underline inline-flex items-center gap-1"
                >
                  <span>Open Full Map</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Real Map Embed */}
              <div className="relative h-80 w-full bg-[#0B0B0B]">
                <iframe
                  title="Nitin Girdhar Unisex Salon Google Map Location"
                  src="https://maps.google.com/maps?q=Nitin%20Girdhar%20Unisex%20Salon%20Nangia%20Park%20Chowk%20Shakti%20Nagar%20Delhi&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale contrast-125 opacity-90 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
