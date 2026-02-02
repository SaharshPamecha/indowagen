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

      <Head>
        {/* Google Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17042797828"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17042797828');
          `
        }} />
      </Head>


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
            pt: { xs: '72px', sm: '80px' }, // Add padding-top to account for fixed navbar
            pb: { xs: 0, sm: 0 }
          }}
        >
          {children}
        </Box>
        v
        <Footer />

      </Box>

    </CartProvider>

  );
}
