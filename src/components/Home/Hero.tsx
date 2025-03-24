'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Container, Typography, Button, Grid } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: 'background.paper',
        pt: { xs: 4, md: 8 },
        pb: { xs: 8, md: 12 }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: 'sm', mx: 'auto', textAlign: { xs: 'center', md: 'left' } }}>
              <Typography
                component="h1"
                variant="h2"
                color="text.primary"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.5rem' }
                }}
              >
                Leading Electric Mobility Solutions
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                paragraph
                sx={{ mb: 4 }}
              >
                Discover our range of eco-friendly electric vehicles designed for modern transportation needs.
                From passenger vehicles to cargo solutions, we have you covered.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="/products"
                sx={{ mr: { xs: 0, md: 2 }, mb: { xs: 2, md: 0 } }}
              >
                Explore Products
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                href="/contact"
              >
                Contact Us
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: '300px', md: '400px' },
                width: '100%',
                borderRadius: 2,
                overflow: 'hidden'
              }}
            >
              <Image
                src="/images/hero-image.jpg"
                alt="Electric Vehicle"
                fill
                style={{
                  objectFit: 'cover'
                }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
