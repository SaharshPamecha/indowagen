'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const CTASection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        bgcolor: 'primary.main',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: `url('/images/banners/cta-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 4,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            style={{ flex: 1 }}
          >
            <Typography
              variant="h2"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '2.5rem' },
                color: 'inherit',
              }}
            >
              Ready to Make the Switch to Electric?
            </Typography>
            <Typography
              variant="h5"
              paragraph
              sx={{
                mb: 4,
                color: 'inherit',
                opacity: 0.9,
              }}
            >
              Join the electric revolution with Indo Wagen. Contact us today to learn more about our products and dealer opportunities.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  color: 'primary.main',
                  bgcolor: 'white',
                  '&:hover': {
                    bgcolor: 'grey.100',
                  },
                }}
              >
                Contact Us
              </Button>
              <Button
                component={Link}
                href="/products"
                variant="outlined"
                size="large"
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                View Products
              </Button>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '200px', md: '300px' },
              }}
            >
              <Image
                src="/images/products/q8-black-side.jpg"
                alt="Indo Wagen Electric Vehicle"
                fill
                style={{ objectFit: 'contain' }}
              />
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;
