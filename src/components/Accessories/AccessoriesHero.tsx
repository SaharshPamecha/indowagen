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
        bgcolor: 'background.paper',
        pt: { xs: 6, md: 12 },
        pb: { xs: 8, md: 14 },
        overflow: 'hidden',
        background: `linear-gradient(to right, ${theme.palette.primary.dark}80, ${theme.palette.primary.main}50)`,
      }}
    >
      {/* Background pattern/shapes */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          opacity: 0.1,
          background: `
            radial-gradient(circle at 20% 30%, ${theme.palette.primary.light} 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, ${theme.palette.secondary.light} 0%, transparent 50%)
          `,
        }}
      />

      {/* Decorative animated circles */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.4, scale: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          position: 'absolute',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          border: `2px solid ${theme.palette.primary.light}`,
          top: '-100px',
          right: '-100px',
          zIndex: 0,
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.3, scale: 1 }}
        transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        style={{
          position: 'absolute',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          border: `2px solid ${theme.palette.secondary.light}`,
          bottom: '-80px',
          left: '-80px',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            mx: 'auto',
            maxWidth: 900,
          }}
        >
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
                color: 'white',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)',
              }}
            >
              Genuine Accessories
            </Typography>
          </motion.div>

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
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 400,
                maxWidth: '800px',
                lineHeight: 1.6,
              }}
            >
              Enhance your electric vehicle with our premium accessories. 
              From batteries and chargers to body parts and electronics, 
              we offer everything you need to improve performance, comfort, and style.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                href="#all-accessories"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '1rem',
                  borderRadius: '30px',
                  textTransform: 'none',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 14px rgba(0,0,0,0.3)',
                  },
                }}
              >
                Browse All Accessories
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '1rem',
                  borderRadius: '30px',
                  textTransform: 'none',
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                  },
                }}
                href="#featured"
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
