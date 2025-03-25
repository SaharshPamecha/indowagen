'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import DistributorsSection from '@/components/Distributors/DistributorsSection';

export default function DealerLocatorPage() {
  const theme = useTheme();

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Box component="main">
      {/* Hero Section */}
      <Box 
        sx={{ 
          position: 'relative',
          height: '30vh',
          minHeight: '300px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          backgroundColor: 'rgba(0,0,0,0.7)',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        >
          <img
            src="/images/dealers/dealer-map-bg.jpg"
            alt="Indowagen Dealer Network Map"
            style={{ 
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.6,
            }}
          />
        </Box>
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                color: 'white', 
                fontWeight: 700,
                textShadow: '1px 1px 3px rgba(0,0,0,0.3)',
                mb: 2
              }}
            >
              Find an Indowagen Dealer
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'white',
                maxWidth: '800px',
                textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
                mb: 4
              }}
            >
              Locate your nearest authorized dealer for sales and support
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Distributor Map Section */}
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <DistributorsSection />
      </Container>
    </Box>
  );
}
