import React from 'react';
import AboutHero from '@/components/About/AboutHero';
import Vision from '@/components/About/Vision';
import CompanyHistory from '@/components/About/CompanyHistory';
import LeadershipTeam from '@/components/About/LeadershipTeam';
import Facilities from '@/components/About/Facilities';
import Testimonials from '@/components/About/Testimonials';
import EnvironmentalImpact from '@/components/About/EnvironmentalImpact';
import Certifications from '@/components/About/Certifications';
import StateApprovals from '@/components/About/StateApprovals';
import OurProducts from '@/components/About/OurProducts';
import OurGrowingNetwork from '@/components/About/OurGrowingNetwork';
import WhyChooseUs from '@/components/About/WhyChooseUs';


export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhyChooseUs />
      <Vision />
      <OurProducts />
      <CompanyHistory />
      <OurGrowingNetwork />
      <LeadershipTeam />
      <Facilities />
      <EnvironmentalImpact />
      <Certifications />
      <StateApprovals />
    </>
  );
}
