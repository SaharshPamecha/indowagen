'use client';

import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderContent = [
    {
      image:
        "/images/products/fixed/q8-base-steel-new/q8-base-steel_new-(1).png",
      text: "Discover our flagship electric vehicle.",
    },
    {
      image: "/images/products/fixed/q8-base/q8-base-(2).png",
      text: "Sustainable transport for a greener tomorrow.",
    },
    {
      image: "/images/products/fixed/q8-black-gray/q8-black-gray-(1).png",
      text: "Versatile solutions for all your needs.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderContent.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [sliderContent.length]);

  const features = [
    {
      icon: <DirectionsCarIcon sx={{ fontSize: 40 }} />,
      title: 'Electric Mobility',
      description: 'Experience the future of transportation with our electric vehicles.',
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: 40 }} />,
      title: 'Eco-Friendly',
      description: 'Zero emissions, helping create a sustainable future.',
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
      title: 'Versatile Solutions',
      description: 'From passenger transport to cargo delivery, we have you covered.',
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              component="h1"
              variant="h2"
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.8rem', md: '4rem' },
                lineHeight: 1.1,
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                transition: 'opacity 0.5s ease-in-out',
              }}
            >
              Revolutionizing
              <br />
              <Box
                component="span"
                sx={{
                  color: 'primary.main',
                  background: 'linear-gradient(90deg, #007BFF, #00D4FF)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  position: 'relative',
                }}
              >
                Electric Mobility
              </Box>
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              paragraph
              sx={{
                mb: 5,
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                opacity: 0.9,
                transition: 'opacity 0.5s ease-in-out',
              }}
            >
              Experience the future of sustainable transportation with our innovative electric vehicles designed for different needs.
            </Typography>

            <Box>
              <Button
                component={Link}
                href="/products"
                variant="contained"
                size="large"
                sx={{
                  mr: 3,
                  px: 5,
                  py: 1.8,
                  fontSize: '1.2rem',
                  borderRadius: '30px',
                  boxShadow: '0 8px 20px rgba(0, 123, 255, 0.3)',
                  transition: 'all 0.3s',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 25px rgba(0, 123, 255, 0.4)',
                  },
                }}
              >
                Explore Products
              </Button>
              <Button
                component={Link}
                href="/contact"
                variant="outlined"
                size="large"
                sx={{
                  px: 5,
                  py: 1.8,
                  fontSize: '1.2rem',
                  borderRadius: '30px',
                  borderColor: 'primary.main',
                  transition: 'all 0.3s',
                  '&:hover': {
                    borderColor: 'primary.dark',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Contact Us
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative', height: isMobile ? '350px' : '550px' }}>
              <Box
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  transition: 'opacity 0.8s ease-in-out',
                  opacity: 1,
                }}
              >
                <Image
                 //src={sliderContent[currentSlide].image}
                 src="/images/products/fixed/q8-base-steel-new/q8-base-steel_new-(1).png"
                  alt="Indo Wagen Electric Vehicle"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 20,
                  width: '100%',
                  textAlign: 'center',
                  transition: 'opacity 0.5s ease-in-out',
                  opacity: 1,
                }}
              >
                {/* <Typography variant="subtitle1" color="text.primary" sx={{ fontWeight: 500 }}>
                  {sliderContent[currentSlide].text}
                </Typography> */}
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: { xs: 10, md: 14 } }}>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box
                  sx={{
                    height: '100%',
                    p: 4,
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.95)',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.05)',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': { transform: 'translateY(-10px)' },
                  }}
                >
                  <Box
                    sx={{
                      display: 'inline-flex',
                      p: 2.5,
                      bgcolor: 'primary.main',
                      color: 'white',
                      borderRadius: '50%',
                      mb: 3,
                      boxShadow: '0 4px 15px rgba(0, 123, 255, 0.4)',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': { transform: 'scale(1.1)' },
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ fontSize: '1rem' }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;