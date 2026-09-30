import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { CountriesSection } from './components/CountriesSection';
import { EstimasiSection } from './components/EstimasiSection';
import { ConsultationFormSection } from './components/ConsultationFormSection';
import { PaymentSection } from './components/PaymentSection';
import { ProcessSection } from './components/ProcessSection';
import { DocumentsSection } from './components/DocumentsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileStickyCTA } from './components/MobileStickyCTA';
import { PagePreloader } from './components/PagePreloader';

export default function App() {
  return (
    <div className="min-h-[100svh] bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 flex flex-col antialiased">
      {/* Initial load / refresh entrance preloader animation */}
      <PagePreloader />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Services Section (12 Services) */}
        <ServicesSection />

        {/* 3. Visa Destination Countries */}
        <CountriesSection />

        {/* 4. Interactive Estimate Request Wizard */}
        <EstimasiSection />

        {/* 5. Visa & Document Consultation Form */}
        <ConsultationFormSection />

        {/* 6. Official Payment, Warning, Flow, and Confirmation Form */}
        <PaymentSection />

        {/* 7. Process Timeline (01 -> 06) */}
        <ProcessSection />

        {/* 8. Required Documents Checklist */}
        <DocumentsSection />

        {/* 9. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 10. Frequently Asked Questions */}
        <FaqSection />

        {/* 11. Official Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action for Desktop/Tablet */}
      <FloatingWhatsApp />

      {/* Bottom Sticky Action Bar for Mobile Viewports */}
      <MobileStickyCTA />
    </div>
  );
}
