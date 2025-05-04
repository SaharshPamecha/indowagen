'use client';

import React from 'react';
import Navbar from '../../components/Common/Navbar';
import Footer from '../../components/Common/Footer';
import { Box } from '@mui/material';
import { CartProvider } from '../../context/CartContext';


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
            pt: { xs: '72px', sm: '80px' }, // Add padding-top to account for fixed navbar
            pb: { xs: 0, sm: 0 }
          }}
        >
          {children}
        </Box>
        <Footer />
       
      </Box>
     
    </CartProvider>
    
  );
}
