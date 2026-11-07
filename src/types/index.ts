export type PageRoute = 'home' | 'about' | 'services' | 'bridal' | 'gallery' | 'contact';

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  categoryKey: 'hair' | 'makeup' | 'skin' | 'nails' | 'grooming' | 'pre-bridal';
  description: string;
  recommendedFor?: string;
  duration?: string;
  priceNote?: string;
}

export interface ServiceCategory {
  id: string;
  key: 'hair' | 'makeup' | 'skin' | 'nails' | 'grooming' | 'pre-bridal';
  title: string;
  subtitle: string;
  image: string;
  description: string;
  items: ServiceItem[];
}

export interface BridalLook {
  id: string;
  title: string;
  type: string;
  description: string;
  image: string;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Bridal' | 'Makeup' | 'Hair' | 'Hair Colour' | 'Skin' | 'Nails' | 'Grooming';
  image: string;
  description: string;
}

export interface AppointmentData {
  fullName: string;
  phoneNumber: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}

export interface BridalEnquiryData {
  fullName: string;
  phoneNumber: string;
  eventDate: string;
  eventType: string;
  makeupPreference: string;
  additionalRequirements: string;
}
