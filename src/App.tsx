import { useState, useEffect } from 'react';
import { PageRoute, GalleryItem } from './types';
import { GALLERY_ITEMS } from './data/salonData';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Lightbox } from './components/Lightbox';
import { FloatingActions } from './components/FloatingActions';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { BridalView } from './views/BridalView';
import { GalleryView } from './views/GalleryView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  // Sync hash with route for seamless browser back/forward and deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageRoute;
      const validRoutes: PageRoute[] = [
        'home',
        'about',
        'services',
        'bridal',
        'gallery',
        'contact',
      ];
      if (validRoutes.includes(hash)) {
        setCurrentRoute(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleRouteChange = (route: PageRoute) => {
    setCurrentRoute(route);
    window.location.hash = route;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedService(serviceName || '');
    setBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F7F3EC] flex flex-col font-sans selection:bg-[#D4AF70] selection:text-[#0B0B0B]">
      {/* Sticky Luxury Navbar adhering to the 3-zone top bar contract */}
      <Navbar
        currentRoute={currentRoute}
        onRouteChange={handleRouteChange}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main View Router */}
      <main className="flex-1">
        {currentRoute === 'home' && (
          <HomeView
            onRouteChange={handleRouteChange}
            onOpenBooking={handleOpenBooking}
            onOpenLightbox={(item) => setLightboxItem(item)}
          />
        )}
        {currentRoute === 'about' && (
          <AboutView onOpenBooking={() => handleOpenBooking()} />
        )}
        {currentRoute === 'services' && (
          <ServicesView onOpenBooking={handleOpenBooking} />
        )}
        {currentRoute === 'bridal' && (
          <BridalView onOpenBooking={handleOpenBooking} />
        )}
        {currentRoute === 'gallery' && (
          <GalleryView
            onOpenLightbox={(item) => setLightboxItem(item)}
            onOpenBooking={handleOpenBooking}
          />
        )}
        {currentRoute === 'contact' && (
          <ContactView onOpenBooking={handleOpenBooking} />
        )}
      </main>

      {/* Luxury Footer with NAP and Google Rating verification */}
      <Footer
        onRouteChange={handleRouteChange}
        onOpenBooking={handleOpenBooking}
      />

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />

      {/* Global Gallery Lightbox */}
      <Lightbox
        item={lightboxItem}
        items={GALLERY_ITEMS}
        onClose={() => setLightboxItem(null)}
        onSelect={(item) => setLightboxItem(item)}
        onBookLook={(title) => handleOpenBooking(`Gallery Transformation - ${title}`)}
      />

      {/* Floating Concierge Buttons (WhatsApp & Call) */}
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
