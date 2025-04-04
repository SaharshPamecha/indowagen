'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
  };

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
        bgcolor: 'background.paper',
        pt: { xs: 6, md: 12 },
        pb: { xs: 8, md: 16 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={itemVariants}>
                <Typography
                  component="h1"
                  variant="h2"
                  color="text.primary"
                  gutterBottom
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2,
                  }}
                >
                  Revolutionizing
                  <br />
                  <Box
                    component="span"
                    sx={{
                      color: 'primary.main',
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
                    Electric Mobility
                  </Box>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography
                  variant="h5"
                  color="text.secondary"
                  paragraph
                  sx={{ mb: 4 }}
                >
                  Experience the future of sustainable transportation with our innovative electric vehicles designed for different needs.
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Button
                  component={Link}
                  href="/products"
                  variant="contained"
                  size="large"
                  sx={{
                    mr: 2,
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
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
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                  }}
                >
                  Contact Us
                </Button>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                variants={itemVariants}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: isMobile ? '300px' : '500px',
                }}
              >
                <Image
                  src="/Easy-Lite-1.webp"
                  alt="Indo Wagen Electric Vehicle"
                  fill
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </motion.div>
            </Grid>
          </Grid>

          <Box sx={{ mt: { xs: 8, md: 12 } }}>
            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div
                    variants={itemVariants}
                    style={{
                      height: '100%',
                      padding: theme.spacing(3),
                      borderRadius: theme.shape.borderRadius,
                      border: `1px solid ${theme.palette.divider}`,
                    }}
                  >
                    <motion.div variants={iconVariants}>
                      <Box
                        sx={{
                          display: 'inline-flex',
                          p: 2,
                          bgcolor: 'primary.main',
                          color: 'white',
                          borderRadius: '50%',
                          mb: 2,
                        }}
                      >
                        {feature.icon}
                      </Box>
                    </motion.div>
                    <Typography variant="h6" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {feature.description}
                    </Typography>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;