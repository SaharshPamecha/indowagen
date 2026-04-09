'use client';

import React from 'react';
import Navbar from '../../components/Common/Navbar';
import Footer from '../../components/Common/Footer';
import BrandSlider from '../../components/Common/BrandSlider';
import { Box } from '@mui/material';
import { CartProvider } from '../../context/CartContext';
import Head from 'next/head';

// import Providers from './providers';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <CartProvider>



      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>

        <Navbar />
        <Box
          component="main"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            width: '100%',
            minHeight: '100vh',
            pt: { xs: '72px', sm: '80px' },
            pb: { xs: 0, sm: 0 }
          }}
        >
          {children}
        </Box>

        <BrandSlider />
        <Footer />
      </Box>

    </CartProvider >

  );
}
