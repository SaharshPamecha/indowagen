'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const ContactHero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const contactInfo = [
    {
      icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
      title: 'Visit Us',
      details: [
        'Indo Wagen Electric Vehicles Pvt. Ltd.',
        'Industrial Area, Phase 1',
        'New Delhi, India',
      ],
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      title: 'Call Us',
      details: ['+91 11 2222 3333', '+91 98765 43210'],
    },
    {
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      title: 'Email Us',
      details: ['sales@indowagen.com', 'support@indowagen.com'],
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: { xs: 6, md: 12 },
        pb: { xs: 8, md: 16 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
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
              Get in Touch
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ maxWidth: '800px', mx: 'auto' }}
            >
              We're here to help you with any questions about our electric vehicles
              and services
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <Box
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                    {info.title}
                  </Typography>
                  {info.details.map((detail, i) => (
                    <Typography
                      key={i}
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 1 }}
                    >
                      {detail}
                    </Typography>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactHero;
