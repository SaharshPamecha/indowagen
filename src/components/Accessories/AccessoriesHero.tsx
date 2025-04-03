'use client';

import React from 'react';
import { Box, Container, Typography, Grid, useTheme, useMediaQuery, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const AccessoriesHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  // Function to handle smooth scrolling to the "all-accessories" section
  const handleScrollToAccessories = () => {
    const section = document.getElementById('all-accessories');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: { xs: 4, md: 10 },
        pb: { xs: 6, md: 14 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                component="h1"
                variant="h2"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2,
                }}
              >
                Genuine Accessories
                <Box
                  component="span"
                  sx={{
                    color: 'primary.main',
                    display: 'block',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -4,
                      left: 0,
                      width: '100%',
                      height: 4,
                      bgcolor: 'primary.main',
                      opacity: 0.3,
                    },
                  }}
                >
                  Enhance Your Ride
                </Box>
              </Typography>

              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ mb: 4, maxWidth: '600px' }}
              >
                Enhance your electric vehicle with our premium accessories. From batteries and chargers to body parts and electronics, we offer everything you need to improve performance, comfort, and style.
              </Typography>

              <motion.div variants={itemVariants}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleScrollToAccessories} // Add onClick handler for scrolling
                  sx={{
                    mr: 2,
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                  }}
                >
                  Browse All Accessories
                </Button>
                <Button
                  component={Link}
                  href="/contact"
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                  }}
                >
                  Featured Products
                </Button>
              </motion.div>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '300px', md: '500px' },
                }}
              >
                <Image
                  src="/Accessories-img.webp" // Replace with actual image path
                  alt="Accessory Showcase"
                  fill
                  style={{ objectFit: 'contain', borderRadius: '16px' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AccessoriesHero;