'use client';

import React from 'react';
import { Box, Container, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

const AccessoriesHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: { xs: '60vh', md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        background: `linear-gradient(90deg, #1E3A8A 0%, #1E90FF 100%)`, // Dark blue to light blue gradient from the logo
      }}
    >
      {/* Wave Effect at the Bottom */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        <motion.div
          animate={{
            x: [0, -100, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            bottom: 0,
            width: '200%',
            height: '100%',
            background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-36.93,206.8-37.53C438.64,36.16,505.41,66.9,575.2,67.5c69.27.59,135.28-30.17,205.6-37.53,54.41-5.77,110.21,4.2,158,28V0H0Z' fill='%231E90FF' fill-opacity='0.3'/%3E%3C/svg%3E")`, // Light blue from the logo's outer ring
            backgroundSize: '50% 100%',
            backgroundRepeat: 'repeat-x',
            opacity: 0.5, // Subtle wave opacity
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'center' },
            textAlign: 'center',
            mx: 'auto',
            maxWidth: 900,
            py: { xs: 6, md: 12 },
          }}
        >
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                mb: 2,
                color: '#FFFFFF', // White from the logo
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              Genuine Accessories
            </Typography>
          </motion.div>

          {/* Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Typography
              variant="h5"
              component="p"
              sx={{
                mb: 4,
                color: 'rgba(255,255,255,0.9)', // Slightly translucent white from the logo
                fontWeight: 400,
                maxWidth: '800px',
                lineHeight: 1.6,
              }}
            >
              Enhance your electric vehicle with our premium accessories. From batteries and chargers to body parts and electronics, we offer everything you need to improve performance, comfort, and style.
            </Typography>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
              <Button
                variant="contained"
                size="large"
                href="#all-accessories"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '1rem',
                  borderRadius: '30px',
                  textTransform: 'none',
                  backgroundColor: '#1E3A8A', // Dark blue from the logo
                  color: '#FFFFFF', // White from the logo
                  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 14px rgba(0,0,0,0.3)',
                    backgroundColor: '#2A5098', // Slightly lighter dark blue for hover
                  },
                }}
              >
                Browse All Accessories
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#featured"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '1rem',
                  borderRadius: '30px',
                  textTransform: 'none',
                  borderColor: '#FFFFFF', // White from the logo
                  color: '#FFFFFF', // White from the logo
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    backgroundColor: 'rgba(255,255,255,0.1)', // Subtle white background on hover
                  },
                }}
              >
                Featured Products
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default AccessoriesHero;