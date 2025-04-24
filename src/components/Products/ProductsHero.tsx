'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Box, Container, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ElectricRickshawIcon from '@mui/icons-material/ElectricRickshaw';

const ProductsHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay visibility for animation effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 'auto', md: '600px' }, // Auto height on mobile, fixed 600px on desktop/laptop
        minHeight: { xs: '158px', md: '600px' }, // Minimum height for mobile to ensure content visibility
        mb: 8,
        width: '100%', // Ensure full width
        overflow: 'hidden',
      }}
    >
      {/* Banner Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <Image
          src="/product page image_indowagen.png"
          alt="Indo Wagen Products"
          fill
          priority
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        {/* Overlay Gradient (optional, uncomment if needed) */}
        {/* <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to right, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.4) 100%)',
            zIndex: 1,
          }}
        /> */}
      </Box>

      {/* Content */}
      <Container
        maxWidth={false} // Full width container
        sx={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', // Center content horizontally
          position: 'relative',
          zIndex: 2,
          px: { xs: 2, md: 4 }, // Padding adjustment for mobile and desktop
        }}
      >
       
      </Container>
    </Box>
  );
};

export default ProductsHero;