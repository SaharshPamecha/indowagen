'use client';

import React from 'react';
import { Box } from '@mui/material';
import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('../../components/Home/HeroSection'));
const ProductsSection = dynamic(() => import('../../components/Home/ProductsSection'));
const FeaturesSection = dynamic(() => import('../../components/Home/FeaturesSection'));
const TestimonialsSection = dynamic(() => import('../../components/Home/TestimonialsSection'));
const CTASection = dynamic(() => import('../../components/Home/CTASection'));

export default function Home() {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: { xs: 6, md: 8 },
      py: { xs: 2, md: 4 }, 
      width: '100%'
    }}>
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </Box>
  );
}
