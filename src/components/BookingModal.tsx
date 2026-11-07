import React, { useState, useEffect } from 'react';
import { X, CheckCircle, MessageSquare, Phone, Calendar, Clock, User, Scissors } from 'lucide-react';
import { SALON_INFO, SERVICE_CATEGORIES } from '../data/salonData';
import { AppointmentData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const [formData, setFormData] = useState<AppointmentData>({
    fullName: '',
    phoneNumber: '',
    service: initialService,
    preferredDate: '',
    preferredTime: '11:00 AM',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationRef, setConfirmationRef] = useState('');

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Set default date to tomorrow
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const defaultDate = tomorrow.toISOString().split('T')[0];
      setFormData((prev) => ({
        ...prev,
        preferredDate: prev.preferredDate || defaultDate,
      }));
    } else {
      document.body.style.overflow = 'auto';
      setIsSubmitted(false);
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
    const cleanPhone = formData.phoneNumber.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phoneNumber = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.service) {
      errs.service = 'Please select a service';
    }
    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred date';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const randomRef = 'NGS-' + Math.floor(10000 + Math.random() * 90000);
    setConfirmationRef(randomRef);
    setIsSubmitted(true);
  };

  const getWhatsAppBookingUrl = () => {
    const message = `Hello Nitin Girdhar Unisex Salon, I'd like to book an appointment:
• Reference: ${confirmationRef}
• Name: ${formData.fullName}
• Phone: ${formData.phoneNumber}
• Service: ${formData.service}
• Date: ${formData.preferredDate}
• Time: ${formData.preferredTime}
${formData.message ? `• Note: ${formData.message}` : ''}

Please confirm availability for this slot.`;
    return `https://wa.me/${SALON_INFO.whatsappNumber.replace('+', '')}?text=${encodeURIComponent(
      message
    )}`;
  };

  const timeSlots = [
    '10:30 AM',
    '11:30 AM',
    '12:30 PM',
    '01:30 PM',
    '02:30 PM',
    '03:30 PM',
    '04:30 PM',
    '05:30 PM',
    '06:30 PM',
    '07:30 PM',
    '08:00 PM',
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="relative w-full max-w-lg bg-[#141414] border border-[#262420] rounded-xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#B8B8B8] hover:text-[#F7F3EC] p-1 rounded-md transition-colors"
          aria-label="Close booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D4AF70]">
                Bespoke Salon Experience
              </span>
              <h2
                id="booking-modal-title"
                className="font-serif text-2xl sm:text-3xl font-semibold text-[#F7F3EC] mt-1"
              >
                Book Your Appointment
              </h2>
              <p className="text-xs sm:text-sm text-[#B8B8B8] mt-1.5">
                Reserve your consultation with our master stylists and beauty experts at Shakti
                Nagar, Delhi.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-medium text-[#F7F3EC] mb-1.5">
                  Full Name <span className="text-[#D4AF70]">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#B8B8B8] absolute left-3 top-3" />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="e.g. Priya Sharma"
                    className="w-full bg-[#0B0B0B] border border-[#262420] focus:border-[#D4AF70] text-[#F7F3EC] rounded-lg py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF70] transition-colors"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-medium text-[#F7F3EC] mb-1.5">
                  Mobile Number <span className="text-[#D4AF70]">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#B8B8B8] absolute left-3 top-3" />
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, phoneNumber: e.target.value });
                      if (errors.phoneNumber) setErrors({ ...errors, phoneNumber: '' });
                    }}
                    placeholder="10-digit mobile number (e.g. 98110 00000)"
                    className="w-full bg-[#0B0B0B] border border-[#262420] focus:border-[#D4AF70] text-[#F7F3EC] rounded-lg py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF70] transition-colors tabular-nums"
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-red-400 text-xs mt-1">{errors.phoneNumber}</p>
                )}
              </div>

              {/* Select Service */}
              <div>
                <label className="block text-xs font-medium text-[#F7F3EC] mb-1.5">
                  Desired Service <span className="text-[#D4AF70]">*</span>
                </label>
                <div className="relative">
                  <Scissors className="w-4 h-4 text-[#B8B8B8] absolute left-3 top-3" />
                  <select
                    value={formData.service}
                    onChange={(e) => {
                      setFormData({ ...formData, service: e.target.value });
                      if (errors.service) setErrors({ ...errors, service: '' });
                    }}
                    className="w-full bg-[#0B0B0B] border border-[#262420] focus:border-[#D4AF70] text-[#F7F3EC] rounded-lg py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF70] transition-colors"
                  >
                    <option value="">Select a service category or service...</option>
                    {SERVICE_CATEGORIES.map((cat) => (
                      <optgroup key={cat.id} label={cat.title}>
                        {cat.items.map((item) => (
                          <option key={item.id} value={`${cat.title} - ${item.name}`}>
                            {item.name}
                          </option>
                        ))}
                      </optgroup>
                    ))}
                    <option value="Bridal Consultation">Royal Bridal Consultation</option>
                    <option value="General Hair & Skin Consultation">
                      General Hair & Skin Diagnostic
                    </option>
                  </select>
                </div>
                {errors.service && (
                  <p className="text-red-400 text-xs mt-1">{errors.service}</p>
                )}
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#F7F3EC] mb-1.5">
                    Preferred Date <span className="text-[#D4AF70]">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#B8B8B8] absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="date"
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={(e) => {
                        setFormData({ ...formData, preferredDate: e.target.value });
                        if (errors.preferredDate) setErrors({ ...errors, preferredDate: '' });
                      }}
                      className="w-full bg-[#0B0B0B] border border-[#262420] focus:border-[#D4AF70] text-[#F7F3EC] rounded-lg py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF70] transition-colors"
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-red-400 text-xs mt-1">{errors.preferredDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#F7F3EC] mb-1.5">
                    Preferred Time Slot
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#B8B8B8] absolute left-3 top-3 pointer-events-none" />
                    <select
                      value={formData.preferredTime}
                      onChange={(e) =>
                        setFormData({ ...formData, preferredTime: e.target.value })
                      }
                      className="w-full bg-[#0B0B0B] border border-[#262420] focus:border-[#D4AF70] text-[#F7F3EC] rounded-lg py-2.5 pl-10 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF70] transition-colors"
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Message */}
              <div>
                <label className="block text-xs font-medium text-[#F7F3EC] mb-1.5">
                  Special Notes or Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Inquiring about balayage hair length, bridal trial, skin allergy history..."
                  className="w-full bg-[#0B0B0B] border border-[#262420] focus:border-[#D4AF70] text-[#F7F3EC] rounded-lg py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#D4AF70] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-[#0B0B0B] bg-[#D4AF70] hover:bg-[#E8C98F] transition-all rounded-lg shadow-md hover:shadow-[#D4AF70]/20 flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Submit Appointment Request
                </button>
                <p className="text-[11px] text-[#B8B8B8] text-center mt-2">
                  * Note: Submitting requests a reservation. Our concierge will confirm actual slot availability.
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation State */
          <div className="py-4 text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-14 h-14 bg-[#D4AF70]/10 border border-[#D4AF70]/40 rounded-full flex items-center justify-center mx-auto text-[#D4AF70]">
              <CheckCircle className="w-7 h-7" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#D4AF70] font-semibold">
                Request Recorded · Ref: {confirmationRef}
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#F7F3EC] mt-1">
                Thank You, {formData.fullName}!
              </h3>
              <p className="text-sm text-[#B8B8B8] mt-2 max-w-sm mx-auto">
                Your appointment enquiry for{' '}
                <span className="text-[#F7F3EC] font-medium">{formData.service}</span> on{' '}
                <span className="text-[#F7F3EC] font-medium">{formData.preferredDate}</span> at{' '}
                <span className="text-[#F7F3EC] font-medium">{formData.preferredTime}</span> has been
                successfully received.
              </p>
            </div>

            <div className="bg-[#0B0B0B] border border-[#262420] rounded-lg p-4 text-left text-xs space-y-1.5 text-[#B8B8B8]">
              <p className="text-[#F7F3EC] font-medium">Next Steps & Confirmation Policy:</p>
              <p>• Our salon manager will contact you at <span className="text-[#D4AF70] font-mono">{formData.phoneNumber}</span> within 30–45 minutes to confirm availability.</p>
              <p>• To instantly connect with our front desk team via WhatsApp or telephone, click below:</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs uppercase tracking-wider transition-colors shadow"
              >
                <MessageSquare className="w-4 h-4" />
                Send via WhatsApp
              </a>
              <a
                href={`tel:${SALON_INFO.contactNumberRaw}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#262420] hover:bg-[#36322b] text-[#F7F3EC] font-medium text-xs uppercase tracking-wider transition-colors border border-[#D4AF70]/30"
              >
                <Phone className="w-4 h-4 text-[#D4AF70]" />
                Call: {SALON_INFO.contactNumber}
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs text-[#B8B8B8] hover:text-[#F7F3EC] underline underline-offset-4 pt-2"
            >
              Done & Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
