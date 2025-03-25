import React from 'react';
import ContactHero from '@/components/Contact/ContactHero';
import ContactForm from '@/components/Contact/ContactForm';
import ContactMap from '@/components/Contact/ContactMap';
import ContactFAQ from '@/components/Contact/ContactFAQ';
import DealerLocator from '@/components/Contact/DealerLocator';
import SocialConnect from '@/components/Contact/SocialConnect';

export const metadata = {
  title: 'Contact Us | Indo Wagen Electric Vehicles',
  description: 'Get in touch with Indo Wagen for any inquiries about our electric vehicles, services, or dealership opportunities. We are here to assist you.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactMap />
      <ContactFAQ />
      <SocialConnect />
    </>
  );
}
